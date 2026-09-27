import json

voices = [
    {
        "id": "pNInz6obbfDQGcgMyIGD",
        "name": "Adam (Profundo & Sábio)",
        "gender": "M",
        "description": "Uma voz grave, profunda e imponente. Ideal para ensinamentos estoicos."
    },
    {
        "id": "ErXwobaYiN019PkySvjV",
        "name": "Antoni (Firme & Calmo)",
        "gender": "M",
        "description": "Voz madura e tranquilizadora, passa muita confiança."
    },
    {
        "id": "VR6AewLTigWG4xSOukaG",
        "name": "Arnold (Autoritário)",
        "gender": "M",
        "description": "Voz ríspida, incisiva. Perfeita para lições duras."
    },
    {
        "id": "EXAVITQu4vr4xnSDxMaL",
        "name": "Bella (Serena & Acolhedora)",
        "gender": "F",
        "description": "Voz suave e macia, excelente para reflexões internas."
    },
    {
        "id": "MF3mGyEYCl7XYWbV9V6O",
        "name": "Elli (Clara & Jovem)",
        "gender": "F",
        "description": "Voz cristalina e direta ao ponto."
    },
    {
        "id": "TxGEqnHWrfWFTfGW9XjX",
        "name": "Josh (Moderno & Ágil)",
        "gender": "M",
        "description": "Uma voz mais leve, como a de um podcast moderno."
    },
    {
        "id": "21m00Tcm4TlvDq8ikWAM",
        "name": "Rachel (Professora & Assertiva)",
        "gender": "F",
        "description": "Firme e intelectual, como uma verdadeira professora."
    },
    {
        "id": "flq6f7yk4E4fJM5XTYuZ",
        "name": "Michael (Narrador Épico)",
        "gender": "M",
        "description": "Voz cinematográfica e impactante."
    }
]

js_content = "const virtualVoices = " + json.dumps(voices, indent=4, ensure_ascii=False) + ";\n"

with open('virtual_voices.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("virtual_voices.js updated.")
