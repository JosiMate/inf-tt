#!/usr/bin/env python3
import json
import sys
from pathlib import Path

def main():
    json_path = Path("docs/assets/egzamin/pytania.json")
    if not json_path.exists():
        print(f"BŁĄD: Plik {json_path} nie istnieje.")
        sys.exit(1)

    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"BŁĄD: Nie można sparsować pliku JSON: {e}")
        sys.exit(1)

    if not isinstance(data, list):
        print("BŁĄD: Główny element JSON musi być listą pytań.")
        sys.exit(1)

    seen_ids = set()
    errors = 0

    required_keys = {"id", "kwalifikacja", "temat", "pytanie", "opcje", "poprawna", "wyjasnienie"}

    for idx, item in enumerate(data):
        if not isinstance(item, dict):
            print(f"BŁĄD: Element {idx} nie jest słownikiem.")
            errors += 1
            continue

        missing = required_keys - set(item.keys())
        if missing:
            print(f"BŁĄD w pytaniu {idx}: Brakujące klucze: {missing}")
            errors += 1

        qid = item.get("id")
        if not qid or not isinstance(qid, str):
            print(f"BŁĄD w pytaniu {idx}: Niepoprawny id.")
            errors += 1
        elif qid in seen_ids:
            print(f"BŁĄD: Duplikacja id pytania: {qid}")
            errors += 1
        else:
            seen_ids.add(qid)

        opcje = item.get("opcje")
        poprawna = item.get("poprawna")
        if not isinstance(opcje, list) or len(opcje) < 2:
            print(f"BŁĄD w pytaniu {qid}: 'opcje' muszą być listą z minimum 2 opcjami.")
            errors += 1

        if not isinstance(poprawna, int) or poprawna < 0 or (isinstance(opcje, list) and poprawna >= len(opcje)):
            print(f"BŁĄD w pytaniu {qid}: 'poprawna' ({poprawna}) poza zakresem opcji.")
            errors += 1

    if errors == 0:
        print(f"OK: Sprawdzono {len(data)} pytań. Wszystkie poprawne.")
        sys.exit(0)
    else:
        print(f"Znaleziono {errors} błędów.")
        sys.exit(1)

if __name__ == "__main__":
    main()
