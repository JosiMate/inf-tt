# Zaawansowane formuły

!!! abstract "O tym temacie"

    **5 godzin lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Głębsza analiza danych w arkuszu wymaga biegłego posługiwania się funkcjami wyszukiwania, logiki, operacji na tekstach oraz formułami tablicowymi. Na tych zajęciach opanujesz funkcje `WYSZUKAJ.X` (XLOOKUP), `WYSZUKAJ.PIONOWO`, zagnieżdżone warunki `JEŻELI` oraz formuły dynamiczne.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. stosować funkcję `WYSZUKAJ.PIONOWO` (VLOOKUP) oraz powiązane z nią ograniczenia
    2. używać nowoczesnej i elastycznej funkcji `WYSZUKAJ.X` (XLOOKUP)
    3. łączyć funkcje `INDEKS` i `PODAJ.POZYCJĘ` (INDEX / MATCH) do wyszukiwania dwukierunkowego
    4. budować złożone formuły logiczne z zagnieżdżonymi funkcjami `JEŻELI`, `ORAZ`, `LUB`
    5. stosować funkcje warunkowe agragujące z wieloma kryteriami (`SUMA.WARUNKÓW`, `LICZ.WARUNKÓW`)
    6. operować na ciągach tekstowych za pomocą funkcji `LEWY`, `PRAWY`, `FRAGMENT.TEKSTU`, `DŁ`, `POŁĄCZ.TEKSTY`
    7. wykonywać obliczenia na datach i czasie (`DZIŚ`, `ROK`, `MIESIĄC`, `DNI.ROBOCZE`)
    8. stosować dynamiczne formuły tablicowe (`UNIKATOWE`, `SORTUJ`, `FILTRUJ`)
    9. wykrywać i obsługiwać błędy formuł za pomocą funkcji `JEŻELI.BŁĄD` (IFERROR)
    10. audytować skomplikowane zależności i formuły w arkuszu (Menedżer nazw, śledzenie poprawności)

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Wyszukiwanie danych: `WYSZUKAJ.PIONOWO` vs `WYSZUKAJ.X`

Funkcje wyszukiwania pozwalają dołączać dane z innych tabel na podstawie wspólnego identyfikatora (np. ID klienta, PESEL, kod produktu).

- **`WYSZUKAJ.PIONOWO(szukana_wartość; tabela; nr_kolumny; [dopasowanie])`**: wymaga, by szukana kolumna była pierwszą kolumną tabeli.
- **`WYSZUKAJ.X(szukana_wartość; szukany_zakres; zwracany_zakres; [jeśli_nie_znaleziono])`**: nowoczesna funkcja bez ograniczeń kierunkowych.

```excel
=WYSZUKAJ.X(A2; Klienci!A:A; Klienci!B:B; "Brak klienta")
```

---

## 2. Dynamiczne formuły tablicowe (`FILTRUJ`, `UNIKATOWE`, `SORTUJ`)

:material-plus-circle: **rozszerzenie**

Nowoczesne arkusze kalkulacyjne wprowadzają rozlewające się formuły tablicowe, które zwracają wiele wartości jednocześnie.

- **`UNIKATOWE(zakres)`**: zwraca listę bez powtórzeń.
- **`FILTRUJ(zakres; kryterium)`**: wyciąga wiersze spełniające warunek bez używania makr.

---

## 3. Formuły logiczne i wielokryterialne

:material-star: **dopełnienie**

Budowanie skomplikowanych modeli finansowych opiera się na łączeniu warunków logicznych:

```excel
=JEŻELI(ORAZ(A2>1000; B2="Zatwierdzone"); C2*0.1; 0)
```

Narzędzie **JEŻELI.BŁĄD** chroni arkusz przed wyświetlaniem brzydkich komunikatów typu `#N/D!` czy `#DZIEL/0!`.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="zaawansowane-formuly"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="zaawansowane-formuly"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Łączenie tabel z WYSZUKAJ.X
1. Użyj funkcji `WYSZUKAJ.X`, aby dopisać nazwę produktu do tabeli transakcji na podstawie kodu ID.
2. Zabezpiecz formułę funkcją `JEŻELI.BŁĄD`.

### :material-console: Ćwiczenie 2 — Prowizja z JEŻELI i ORAZ
1. Oblicz prowizję sprzedawcy: 5% jeśli wartość transakcji > 5000 zł i staż pracy > 2 lata.

### :material-console: Ćwiczenie 3 — Unikalna lista i sortowanie
1. Wygeneruj posortowaną alfabetycznie listę unikalnych miast klientów używając `=SORTUJ(UNIKATOWE(...))`.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Jaka jest kluczowa przewaga WYSZUKAJ.X nad WYSZUKAJ.PIONOWO?",
  "opcje": [
   "WYSZUKAJ.X potrafi szukać kolumn na lewo od przeszukiwanego zakresu i nie wymaga podawania numeru wskaźnika kolumny",
   "WYSZUKAJ.X działa tylko na liczbach",
   "WYSZUKAJ.PIONOWO wymaga połączenia z siecią internet",
   "Brak różnic"
  ],
  "poprawna": 0,
  "wyjasnienie": "WYSZUKAJ.X przeszukuje osobny zakres szukany i zwracany, bez wymogu kolumny klucza po lewej stronie."
 },
 {
  "pytanie": "Do czego służy funkcja UNIKATOWE w arkuszu?",
  "opcje": [
   "Zwraca listę unikalnych wartości z podanego zakresu, usuwając duplikaty",
   "Formatuje komórki na zielono",
   "Liczy średnią ważoną",
   "Szyfruje komórki"
  ],
  "poprawna": 0,
  "wyjasnienie": "UNIKATOWE to dynamiczna formuła tablicowa tworząca listę bez powtórzeń."
 },
 {
  "pytanie": "Co robi funkcja JEŻELI.BŁĄD(formuła; wartość_jeśli_błąd)?",
  "opcje": [
   "Przerwa działanie programu przy błędzie",
   "Zwraca zadeklarowaną wartość w przypadku, gdy główna formuła zwróci błąd (np. #N/D!)",
   "Kasuje błędne komórki",
   "Usuwa plik z dysku"
  ],
  "poprawna": 1,
  "wyjasnienie": "JEŻELI.BŁĄD przechwytuje błędy i zastępuje je czytelną wartością (np. tekstem 'Brak danych')."
 },
 {
  "pytanie": "Która funkcja pozwala połączyć kilka ciągów tekstowych z wybranym separatorem?",
  "opcje": [
   "POŁĄCZ.TEKSTY (TEXTJOIN)",
   "DŁ",
   "LEWY",
   "ZNAJDŹ"
  ],
  "poprawna": 0,
  "wyjasnienie": "POŁĄCZ.TEKSTY łączy zakresy tekstowe przy użyciu podanego separatora, ignorując puste komórki."
 },
 {
  "pytanie": "Co zwróci funkcja ORAZ(PRAWDA; FAŁSZ)?",
  "opcje": [
   "PRAWDA",
   "FAŁSZ",
   "#BŁĄD!",
   "0"
  ],
  "poprawna": 1,
  "wyjasnienie": "Funkcja ORAZ zwraca PRAWDA tylko wtedy, gdy WSZYSTKIE jej argumenty są prawdziwe."
 }
]
</script>
</div>

---

## Podsumowanie

Zaawansowane formuły i funkcje dynamiczne tworzą fundament automatyzacji arkusza kalkulacyjnego, redukując potrzebę ręcznej pracy oraz minimalizując ryzyko pomyłek.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
