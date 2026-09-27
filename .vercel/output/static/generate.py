import json
import os
import subprocess
import time

# Create audios directory
if not os.path.exists('audios'):
    os.makedirs('audios')

# Load principles
with open('principles.json', 'r', encoding='utf-8') as f:
    principles = json.load(f)

print(f"Total principles to process: {len(principles)}")

male_voices = ['pt-BR-AntonioNeural']
female_voices = ['pt-BR-FranciscaNeural', 'pt-BR-ThalitaMultilingualNeural']
current_male = 0
current_female = 0

for i, p in enumerate(principles):
    file_path = f"audios/{p['id']}.mp3"
    if os.path.exists(file_path):
        print(f"Skipping {file_path}, already exists.")
        continue

    # Clean and build the text
    text = f"Reflexão da trilha {p.get('trailLabel', '')}. "
    text += f"Ouça com atenção: {p.get('quote', '')}. "
    text += f"Escrito por {p.get('author', '')}. "
    
    if p.get('work'):
        text += f"Obra: {p.get('work')}. "
    if p.get('explanation'):
        text += f"Compreensão: {p.get('explanation')}. "
    if p.get('dailyPractice'):
        text += f"Ação diária: {p.get('dailyPractice')}."
    elif p.get('actionSuggestion'):
        text += f"Ação sugerida: {p.get('actionSuggestion')}."
        
    text = text.replace('"', "'").replace("\n", " ").strip()

    # Determine voice based on author
    author = p.get('author', '').lower()
    is_female = any(name in author for name in ['mulher', 'rainha', 'hipárquia', 'porcia', 'fannia', 'arria', 'cleópatra', 'agripina', 'cornélia', 'julia'])

    if is_female:
        voice = female_voices[current_female % len(female_voices)]
        current_female += 1
    else:
        voice = male_voices[current_male % len(male_voices)]
        current_male += 1

    print(f"[{i+1}/{len(principles)}] Generating {file_path} with {voice}...")
    
    # Run edge-tts via python module
    cmd = [
        'python', '-m', 'edge_tts',
        '--voice', voice,
        '--text', text,
        '--write-media', file_path
    ]
    
    try:
        subprocess.run(cmd, check=True)
    except Exception as e:
        print(f"Failed to generate {file_path}: {e}")
    
    # Slight delay to avoid hammering the API
    time.sleep(0.5)

print("Done generating audio files!")
