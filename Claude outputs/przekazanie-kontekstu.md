# Przekazanie kontekstu — serwisy MkDocs dla PCEiKZ Szczucin

*Stan na 10 września 2026. Wklej ten plik na początku nowego czatu.*

---

## 1. Kim jestem i co robimy

Józef, nauczyciel informatyki w **PCEiKZ Szczucin**. Prowadzę **pięć serwisów
z materiałami dla klas**, zbudowanych na MkDocs Material i publikowanych na
GitHub Pages z konta **JosiMate**. Wszystkie mają wspólną architekturę: te same
skrypty JS, ten sam układ, różne kolory i treści.

| Serwis | Repo | Katalog na dysku | Klasa / przedmiot |
| --- | --- | --- | --- |
| Informatyka 1TT | `JosiMate/inf-tt` | `C:\Users\jozef\Documents\GitHub\inf-1` | technik informatyk |
| Informatyka LO | `JosiMate/inf-lo` | `…\GitHub\inf-lo` | liceum, 1 godz. przez 3 lata |
| Witryny i aplikacje internetowe | `JosiMate/wiai` | `…\GitHub\wiai` | 4TI, INF.03, 3 godz. |
| Administracja sieciowymi systemami operacyjnymi | `JosiMate/asso` | `…\GitHub\asso` | 3TT, INF.07, 11 działów |
| Informatyka 1W | `JosiMate/inf-sb` | `…\GitHub\inf-sb` | branżowa I st., 30 godz., 5 działów |

Adresy: `https://josimate.github.io/<repo>/`.

---

## 2. Jak te serwisy są zbudowane

**Stos:** MkDocs Material 9.7.6, build przez `mkdocs build --strict`, publikacja
przez GitHub Actions (Settings → Pages → Source: **GitHub Actions**, inaczej nie
działa).

**Wspólne pliki** (identyczne we wszystkich pięciu, md5 się zgadza):

- `docs/assets/js/karta.js` — karta pracy: pola tekstowe, tabele, zrzuty ekranu
  wklejane ze schowka, generowanie `.docx`, eksport/import postępu do pliku JSON
- `docs/assets/js/quiz.js` — quiz z natychmiastową informacją zwrotną
- `docs/assets/js/postep.js` — odhaczanie przerobionych tematów
- `docs/assets/extra.css`, `docs/stylesheets/extra.css`
- `docs/stylesheets/motyw.css` — jedyny plik różny między serwisami

**Generatory.** `asso` i `inf-sb` mają w repo `narzedzia/genstrony_*.py`, które
z plików JSON generują: `docs/index.md`, `docs/dzial-N/index.md`, karty pracy
w `docs/assets/karty/dzial-N.json` i blok `nav:` w `mkdocs.yml`. Generatory są
idempotentne. **`inf-tt`, `inf-lo` i `wiai` generatorów w repo nie mają** —
tamte pliki są utrzymywane ręcznie (to źródło jednej wpadki, patrz §6).

**Model wejścia w dział** (w `asso` i `inf-sb`): kafelek na stronie startowej
prowadzi do **strony działu**, a nie od razu do pierwszej lekcji. Strona działu
ma: tabelę tematów ze statusem „gotowe / w przygotowaniu", rozwijane wymagania
na oceny i **działową kartę pracy**.

**Motywy** — zmierzone w przeglądarce, nie policzone na piechotę:

| Serwis | tło slate | odsyłacz jasny | ciemny | `--md-hue` |
| --- | --- | --- | --- | :---: |
| inf-lo | `#29231e` | `#b45309` | `#f59e0b` | 28 |
| inf-tt | `#221e29` | `#7c3aed` | `#a78bfa` | 260 |
| wiai | `#1e2029` | `#3f51b5` | `#8c9eff` | 232 |
| asso | `#1e2829` | `#00695c` | `#4db6ac` | 185 |
| inf-sb | `#1e2924` | `#2e7d32` | `#81c784` | 150 |

---

## 3. Pułapki, które już nas kosztowały czas

**Material:**

- `data-md-color-scheme` siedzi na `<body>`, nie na `<html>` — `getComputedStyle`
  trzeba czytać z body
- `--md-typeset-a-color` ustawia selektor `[data-md-color-scheme=slate][data-md-color-primary=X]`
  (0,2,0) — nadpisanie wymaga dwóch atrybutów
- `.md-typeset figure { display: flow-root }` wygrywa z `[hidden]` — ukrywanie
  podglądu zrzutu wymaga `!important`
- Material renderuje nawigację **dwa razy** (pasek boczny + szuflada), więc
  `.md-nav__link--active` zawsze występuje w dwóch egzemplarzach; spis treści
  strony (`.md-nav--secondary`) jest zagnieżdżony w nawigacji głównej i też
  dokłada aktywną pozycję — testy muszą to odsiewać
- `navigation.instant` przepisuje `href` na adresy absolutne — testy nie mogą
  porównywać surowego atrybutu
- odsyłacz `dzial-1/` daje INFO „unrecognized relative link" i omija walidację;
  `dzial-1/index.md` jest walidowany i renderowany jako `dzial-1/`
- domyślny slugify **gubi `ł`** (usługi → usugi), a `ó` mapuje na `o` — w
  generatorach jest jawne `.replace("ł","l")` przed `normalize`
- ikony to `:material-nazwa:` z **myślnikiem**, nie ukośnikiem

**localStorage — najważniejsze:** wszystkie pięć serwisów stoi na
`josimate.github.io`, więc **dzielą jeden magazyn** (limit zmierzony: 4,94 MB).
Dlatego każdy klucz musi być opatrzony nazwą serwisu:

- karty pracy: `karta:asso-dzial-N`, `karta:inf-sb-dzial-N`
- postęp: `KLUCZ = "postep:" + (spis.dataset.postep || location.pathname)`,
  a w `index.md` atrybut `data-postep` (`asso-3tt`, `wiai-4ti`, `inf-sb-1w` itd.)

Zanim to naprawiliśmy, odhaczenie tematu w jednym serwisie odhaczało go w innym.
Test kolizji ma sens tylko wtedy, gdy oba serwisy serwuje się **spod jednego
origin** — dwa lokalne porty to dwa różne origin i niczego nie dowodzą.

**Zrzuty ekranu w karcie pracy:** 1920×1080 PNG jako data URL to ~525 kB; po
przeskalowaniu do 1600 px i JPEG q0.82 — ~211–225 kB.

**Przenoszenie pracy między komputerami** rozwiązane przez eksport/import pliku
`postep_<id>.json` (format `karta-pracy-pceikz`, wersja 1). Import sprawdza:
poprawność JSON, zgodność `format`, zgodność `karta` z bieżącą stroną, pyta
o potwierdzenie przy nadpisaniu wypełnionej karty.

---

## 4. Co jest zrobione

**asso** (11 działów): strony działów + karty działowe dla wszystkich 11,
gotowe tematy w dziale I — „Sieciowe systemy operacyjne" i „Wirtualizacja",
oba z quizami. Przeprowadzony pełny audyt w Playwright.

**inf-sb** (5 działów, 30 tematów po 1 godz.): model wejścia z działu
przeniesiony z asso. Gotowe tematy w dziale I:

1. „Bądź uczciwy…" → plik `dzial-1/wymagania-i-bhp.md` (pełni też rolę strony
   wymagań edukacyjnych)
2. **„Kim jestem, czyli jak bezpiecznie budować wizerunek w sieci"** →
   `dzial-1/kim-jestem.md` — *zrobione w ostatniej turze*

**inf-tt:** temat „Znajdowanie drogi wyjścia z labiryntu" (klasa 3, dział II,
4 godz.) z wizualizatorem DFS/BFS (`docs/assets/js/labirynt.js`) i szkieletem
`docs/pliki/labirynt-szkielet.py` (10 testów, rozwiązanie wzorcowe przechodzi).

**wiai:** gotowe „Wymagania i bhp", „Powtórzenie HTML/CSS", „Edytory WYSIWYG".

**Wymagania edukacyjne** w `.docx` dla wszystkich przedmiotów.

---

## 5. Ostatnio zrobiony temat — `inf-sb/docs/dzial-1/kim-jestem.md`

1 godzina, rozdział 2 podręcznika. Zawiera: dwa znaczenia słowa „wizerunek",
ślad aktywny/pasywny + metadane EXIF, podstawy prawne (art. 81 pr. aut. z oboma
wyjątkami, prawa z RODO w tabeli, art. 190a § 2 k.k., krótko art. 191a), tabelę
siedmiu cyberzagrożeń, ochronę wizerunku łącznie z zastrzeżeniem PESEL, pięć
kroków po naruszeniu z kontaktami, **5 rozpisanych przypadków**, **ćwiczenie
z gotowym wzorem żądania z art. 17 RODO**, quiz na 8 pytań, 3 zadania na ocenę
celującą.

**Fakty prawne sprawdzone w źródłach — nie zmyślać na nowo:**

- art. 190a § 1 i 2 k.k.: **od 6 miesięcy do 8 lat**, ścigane **na wniosek**
  pokrzywdzonego (§ 4)
- art. 191a k.k.: od 3 miesięcy do 5 lat, też na wniosek
- w Polsce zgoda dziecka na usługi internetowe jest skuteczna **od 16 lat** —
  Polska **nie** skorzystała z możliwości obniżenia do 13
- art. 12 ust. 3 RODO: miesiąc, przedłużenie o 2 miesiące po powiadomieniu
- zastrzeżenie PESEL: obowiązek weryfikacji przez banki **od 1 czerwca 2024**
- DSA stosowany od 17 lutego 2024; polska ustawa wdrażająca — Sejm przyjął
  poprawki Senatu 4 września 2026, szła do podpisu Prezydenta
- CERT: `incydent.cert.pl`, SMS na **8080**; NASK: `dyzurnet.pl`; **116 111**

---

## 6. Wpadka, o której warto pamiętać

Nadpisałem `wiai/docs/index.md` swoją starszą kopią z kontenera (dokładając
`data-postep`), przez co zniknęły odsyłacze do dwóch gotowych tematów. Plik jest
już naprawiony na dysku. **Zasada na przyszłość:** pliki w `inf-tt`, `inf-lo`
i `wiai` są utrzymywane ręcznie — przed edycją pobrać wersję z dysku i edytować
**ją**, nigdy kopię z kontenera.

---

## 7. Ograniczenia środowiska

- Powłoka po stronie Claude'a **nie ma poświadczeń GitHuba** — `git commit`
  i `git push` **robię ja sam**
- `device_bash` **nie montuje** podłączonych folderów
  (`sandbox-helper: no Plan9 drive shares mounted`) — pliki idą przez
  `device_list_dir` / `device_stage_files` / `device_commit_files`
- pliki w `.github/workflows/` są **chronione** i nie da się ich zapisać
  zdalnie — `deploy.yml` kopiuję ręcznie
- odczyt plików z dysku potrafi zwrócić **HTTP 401**, mimo że zapis działa
- nigdy nie wyłączać weryfikacji TLS ani `HTTPS_PROXY`

---

## 8. Co zostało do zrobienia

**Po mojej stronie (git):**

- [ ] commit + push w `inf-sb` (nowy temat + 4 pliki z generatora)
- [ ] commit + push w `wiai` (naprawiony `docs/index.md`)
- [ ] commit + push w `asso`, `inf-1`, `inf-lo`
- [ ] `git rm -r docs/modul-1 narzedzia/daneasso.json narzedzia/moduly.json` w `asso`
- [ ] sprawdzić `git ls-files "Claude outputs"` w `inf-1`
- [ ] odpiąć projekt Vercel od `wiai`

**Do zrobienia razem:**

- [ ] przenieść generatory `inf-lo`, `inf-tt` i `wiai` do repozytoriów
      (do katalogu `narzedzia/`, tak jak w `asso` i `inf-sb`)
- [ ] kolejne tematy — w `inf-sb` dział I ma jeszcze dwa nieopracowane:
      „8, 16, 32, 64…" i „Wiedza w sieci…"
- [ ] opcjonalnie: prywatność (`theme.font: false`, pusty
      `overrides/partials/source.html`, strona „Prywatność") — proponowane,
      nigdy nie przyjęte

---

## 9. Jak ze mną pracować przy tych serwisach

- Fakty prawne, licencyjne i wersje oprogramowania **weryfikować w źródłach**
  przed wpisaniem do materiału dla ucznia i podawać w stopce datę weryfikacji
- Po każdej zmianie: uruchomić generator, `mkdocs build --strict`, a potem
  **test w Playwright** (`chromium` z `/opt/pw-browsers/chromium`) — sprawdzić
  odsyłacze, quiz, motyw, widok 390 px i błędy JS
- Gdy test nie przechodzi, najpierw ustalić, czy błąd jest w serwisie, czy
  w teście — połowa dotychczasowych „awarii" to były złe selektory
- Zmienione pliki wgrywać na dysk przez `device_commit_files`
  ze strażnikiem `expectedMtimeMs`
- Materiały piszemy po polsku, konkretnie, bez lania wody; każdy temat kończy
  się czymś, co uczeń ma zrobić
