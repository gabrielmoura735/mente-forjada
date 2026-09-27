import json
import os
import subprocess
import time

# Create audios directory
if not os.path.exists('../audios_temp'):
    os.makedirs('../audios_temp')

# Load principles
with open('principles.json', 'r', encoding='utf-8') as f:
    principles = json.load(f)

print(f"Total principles to process: {len(principles)}")

male_voices = ['pt-BR-AntonioNeural']
female_voices = ['pt-BR-FranciscaNeural', 'pt-BR-ThalitaMultilingualNeural']

current_male = 0
current_female = 0

for i, p in enumerate(principles):
    file_path_m = f"../audios_temp/{p['id']}_M.mp3"
    file_path_f = f"../audios_temp/{p['id']}_F.mp3"
    
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

    # Generate Male
    if not os.path.exists(file_path_m) or os.path.getsize(file_path_m) == 0:
        voice_m = male_voices[current_male % len(male_voices)]
        current_male += 1
        print(f"[{i+1}/{len(principles)}] Generating MALE {file_path_m} with {voice_m}...")
        cmd_m = ['python', '-m', 'edge_tts', '--voice', voice_m, '--text', text, '--write-media', file_path_m]
        try:
            subprocess.run(cmd_m, check=True)
            time.sleep(0.5)
        except Exception as e:
            print(f"Failed to generate {file_path_m}: {e}")
            if os.path.exists(file_path_m): os.remove(file_path_m)
    else:
        print(f"Skipping {file_path_m}, already exists.")

    # Generate Female
    if not os.path.exists(file_path_f) or os.path.getsize(file_path_f) == 0:
        voice_f = female_voices[current_female % len(female_voices)]
        current_female += 1
        print(f"[{i+1}/{len(principles)}] Generating FEMALE {file_path_f} with {voice_f}...")
        cmd_f = ['python', '-m', 'edge_tts', '--voice', voice_f, '--text', text, '--write-media', file_path_f]
        try:
            subprocess.run(cmd_f, check=True)
            time.sleep(0.5)
        except Exception as e:
            print(f"Failed to generate {file_path_f}: {e}")
            if os.path.exists(file_path_f): os.remove(file_path_f)
    else:
        print(f"Skipping {file_path_f}, already exists.")

print("Done generating audio files!")
