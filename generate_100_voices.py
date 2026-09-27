import json

first_names_m = ['Adam', 'Antoni', 'Arnold', 'Josh', 'Michael', 'James', 'John', 'Robert', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Samuel', 'Gregory', 'Alexander', 'Frank', 'Patrick']
first_names_f = ['Bella', 'Elli', 'Rachel', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol', 'Amanda', 'Dorothy', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine', 'Samantha', 'Christine', 'Catherine', 'Virginia', 'Debra', 'Rachel', 'Janet']
last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
adjectives_m = ['Profundo', 'Sábio', 'Firme', 'Calmo', 'Autoritário', 'Moderno', 'Ágil', 'Épico', 'Sereno']
adjectives_f = ['Serena', 'Acolhedora', 'Clara', 'Jovem', 'Assertiva', 'Professora', 'Calma', 'Firme', 'Brilhante']

voices = []
id_counter = 1

for i in range(50):
    fn = first_names_m[i % len(first_names_m)]
    ln = last_names[i % len(last_names)]
    adj1 = adjectives_m[i % len(adjectives_m)]
    adj2 = adjectives_m[(i + 1) % len(adjectives_m)]
    voices.append({
        "id": f"voice_m_{id_counter}",
        "name": f"{fn} {ln}",
        "gender": "M",
        "description": f"Voz {adj1} & {adj2}"
    })
    id_counter += 1

for i in range(50):
    fn = first_names_f[i % len(first_names_f)]
    ln = last_names[i % len(last_names)]
    adj1 = adjectives_f[i % len(adjectives_f)]
    adj2 = adjectives_f[(i + 1) % len(adjectives_f)]
    voices.append({
        "id": f"voice_f_{id_counter}",
        "name": f"{fn} {ln}",
        "gender": "F",
        "description": f"Voz {adj1} & {adj2}"
    })
    id_counter += 1

js_content = "const VIRTUAL_VOICES = " + json.dumps(voices, indent=4, ensure_ascii=False) + ";\n"

with open('virtual_voices.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("virtual_voices.js updated with 100 voices.")
