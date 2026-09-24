# Korespondencja seryjna

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Korespondencja seryjna umożliwia automatyczne generowanie spersonalizowanych dokumentów (listów, dyplomów, zaświadczeń, etykiet) na podstawie szablonu oraz zewnętrznej bazy danych (np. tabeli z arkusza kalkulacyjnego). Na tych zajęciach opanujesz scalanie dokumentów i bezpieczną wysyłkę e-maili.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. wyjaśnić zasadę działania korespondencji seryjnej i jej zastosowania biznesowe
    2. przygotować i oczyścić źródłową bazę adresową w arkuszu kalkulacyjnym
    3. połączyć dokument główny w edytorze tekstu ze źródłem danych z arkusza
    4. wstawiać pola scalania (Merge Fields) w odpowiednich miejscach szablonu
    5. stosować reguły warunkowe w korespondencji seryjnej (np. `JEŻELI... TO... INACZEJ...`)
    6. stosować odmianę zwrotów grzecznościowych w zależności od płci odbiorcy
    7. podglądać i weryfikować scalone rekordy przed ostatecznym wygenerowaniem dokumentów
    8. filtrować i sortować listę odbiorców bezpośrednio w procesie scalania
    9. generować spersonalizowane pliki PDF oraz etykiety adresowe
    10. opisać zasady bezpiecznego wysyłania masowej korespondencji e-mail (ochrona danych RODO, limity SMTP)

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Składniki korespondencji seryjnej

Do przeprowadzenia korespondencji seryjnej potrzebne są dwa elementy:

1. **Dokument główny (Szablon):** plik tekstowy zawierający stałą treść oraz pola scalania.
2. **Źródło danych:** tabela z arkusza kalkulacyjnego lub bazy danych z kolumnami-nagłówkami (np. *Imię*, *Nazwisko*, *Email*).

```text
[Dokument główny] + [Baza danych w XLS] ====> [Spersonalizowane dokumenty / E-maile]
   „Szanowny/a «Imię» «Nazwisko»” + „Jan Kowalski” ====> „Szanowny/a Jan Kowalski”
```

---

## 2. Reguły warunkowe i personalizacja zwrotów

:material-plus-circle: **rozszerzenie**

Zamiast pisać uniwersalne „Szanowny/a Panie/Pani”, można użyć **reguły warunkowej `IF`** badającej np. ostatnią literę imienia lub osobną kolumnę z płcią w arkuszu:

```text
{ IF { MERGEFIELD Płeć } = "K" "Szanowna Pani" "Szanowny Panie" }
```

---

## 3. Generowanie masowych plików PDF i wysyłka e-mail

:material-star: **dopełnienie**

Finalnym etapem korespondencji seryjnej może być:

- Druk bezpośredni na drukarce lub scalenie do jednego dużego dokumentu.
- Podział na osobne pliki PDF nazwane imieniem i nazwiskiem odbiorcy.
- Masowa wysyłka wiadomości e-mail poprzez klienta pocztowego.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="korespondencja-seryjna"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="korespondencja-seryjna"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Przygotowanie bazy odbiorców
1. Utwórz w arkuszu tabelę z 5 rekordami: *Imię*, *Nazwisko*, *Ulica*, *Kod*, *Miasto*, *Kwota_zaległości*.

### :material-console: Ćwiczenie 2 — Podstawowe scalenie dyplomu
1. Zbuduj w edytorze tekstu szablon dyplomu ukończenia kursu.
2. Wstaw pola scalania `«Imię»` i `«Nazwisko»` i wygeneruj podgląd.

### :material-console: Ćwiczenie 3 — Zwrot grzecznościowy z regułą IF
1. Zastosuj regułę warunkową tak, aby dla kobiet pojawiał się zwrot „Szanowna Pani”, a dla mężczyzn „Szanowny Panie”.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Co jest wymagane do przeprowadzenia korespondencji seryjnej?",
  "opcje": [
   "Dokument główny (szablon) oraz źródło danych (np. arkusz kalkulacyjny)",
   "Dwa komputery połączone siecią LAN",
   "Konto administratora w systemie",
   "Skaner kodów kreskowych"
  ],
  "poprawna": 0,
  "wyjasnienie": "Korespondencja seryjna wymaga szablonu z polami scalania oraz tabeli z danymi odbiorców."
 },
 {
  "pytanie": "Do czego służą pola scalania (Merge Fields)?",
  "opcje": [
   "Do łączenia dwóch plików na dysku",
   "Do wskazywania miejsc w szablonie, w które mają zostać wstawione dane z tabeli",
   "Do usuwania marginesów",
   "Do szyfrowania poczty"
  ],
  "poprawna": 1,
  "wyjasnienie": "Pola scalania stanowią znaczniki zastępowane konkretnymi wartościami z rekordów bazy."
 },
 {
  "pytanie": "Jak uzyskać poprawny zwrot 'Szanowna Pani' / 'Szanowny Panie' w korespondencji?",
  "opcje": [
   "Wpisać tekst ręcznie w każdym wygenerowanym pliku",
   "Użyć reguły warunkowej (np. IF) w zależności od pola z płcią lub imienia",
   "Zmienić czcionkę w arkuszu",
   "Nie da się tego zautomatyzować"
  ],
  "poprawna": 1,
  "wyjasnienie": "Reguły warunkowe w korespondencji seryjnej pozwalają różnicować treść dokumentu na podstawie danych z rekordu."
 },
 {
  "pytanie": "O czym należy pamiętać przy masowym wysyłaniu e-maili z korespondencji seryjnej?",
  "opcje": [
   "O przepisach RODO oraz limitach wysyłkowych serwerów pocztowych (aby nie trafić na listę spamową)",
   "Że e-maile docierają tylko w dni robocze",
   "Że każdy e-mail musi mieć załącznik wideo",
   "Że plik arkusza ulega skasowaniu"
  ],
  "poprawna": 0,
  "wyjasnienie": "Masowa wysyłka wymaga zachowania wymogów prawnych (RODO) oraz unikania mechanizmów antyspamowych."
 },
 {
  "pytanie": "Jaki jest pierwszy wiersz w tabeli arkusza kalkulacyjnego używanej jako źródło danych?",
  "opcje": [
   "Musi zawierać nagłówki kolumn (nazwy pól scalania)",
   "Musi zawierać pierwsze dane osobowe",
   "Musi być pusty",
   "Musi zawierać datę"
  ],
  "poprawna": 0,
  "wyjasnienie": "Edytor tekstu rozpoznaje pierwszy wiersz arkusza jako nazwy pól scalania."
 }
]
</script>
</div>

---

## Podsumowanie

Korespondencja seryjna to narzędzie automatyzujące tworzenie spersonalizowanej dokumentacji i komunikacji e-mailowej, oszczędzające czas przy masowej pracy biurowej.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
