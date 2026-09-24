# Wyciągamy wiedzę z danych

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Samo zgromadzenie danych to za mało — kluczem jest ich właściwa analiza i prezentacja. Na tych zajęciach opanujesz tworzenie tabel przestawnych, grupowanie i filtrowanie danych, obliczenia sum częściowych oraz tworzenie dynamicznych wykresów przestawnych i pulpitów menedżerskich (dashboards).

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. budować tabele przestawne (Pivot Tables) z surowych zbiorów danych
    2. konfigurować pola w tabeli przestawnej (wiersze, kolumny, wartości, filtry)
    3. stosować różne funkcje podsumowujące (SUMA, ŚREDNIA, LICZBA, MAX, MIN)
    4. pokazywać wartości jako procent sumy końcowej, procent sumy kolumny lub wiersza
    5. grupować dane liczbowe oraz daty (rok, kwartał, miesiąc) w tabeli przestawnej
    6. wstawiać i formatować fragmentatory (Slicers) oraz osie czasu (Timelines)
    7. tworzyć wykresy przestawne powiązane z tabelami przestawnymi
    8. używać funkcji narzędziowych: `SUMA.JEŻELI`, `LICZ.JEŻELI`, `ŚREDNIA.JEŻELI`
    9. formatować warunkowo tabele danych i wykresy w celu wyróżnienia trendów i odchyleń
    10. projektować interaktywne pulpity nawigacyjne (Dashboards) do prezentacji kluczowych wskaźników (KPI)

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Tabele przestawne — szybka agregacja danych

**Tabela przestawna** pozwala na błyskawiczne podsumowywanie tysięcy wierszy danych bez konieczności pisania skomplikowanych formuł.

```text
[Układ pól tabeli przestawnej]
  ├── Filtry: Region, Rok
  ├── Kolumny: Kategoria produktu
  ├── Wiersze: Przedstawiciel handlowy
  └── Wartości: Suma ze Sprzedaży
```

---

## 2. Grupowanie, obliczenia procentowe i fragmentatory

:material-plus-circle: **rozszerzenie**

Tabele przestawne pozwalają na wyciąganie głębszych wniosków poprzez:

- **Grupowanie dat:** automatyczne zwijanie transakcji dziennych do poziomów miesięcy, kwartałów i lat.
- **Wartości jako % sumy:** zmiana widoku z kwot bezwzględnych na udział procentowy w całej sprzedaży.
- **Fragmentatory (Slicers):** interaktywne przyciski filtrujące dane w kilku tabelach przestawnych jednocześnie.

---

## 3. Pulpity menedżerskie (Dashboards) i wskaźniki KPI

:material-star: **dopełnienie**

**Dashboard** to jednopolowy widok podsumowujący kluczowe wskaźniki efektywności (KPI) za pomocą spiętych ze sobą wykresów przestawnych, kart z liczbami oraz fragmentatorów.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="wyciagamy-wiedze-z-danych"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="wyciagamy-wiedze-z-danych"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Pierwsza tabela przestawna
1. Na podanym zbiorze transakcji utwórz tabelę przestawną.
2. Umieść regiony w wierszach, a sumę sprzedaży w polu wartości.

### :material-console: Ćwiczenie 2 — Grupowanie dat i fragmentator
1. Pogrupuj daty zamówień według kwartałów i miesięcy.
2. Dodaj fragmentator dla kategorii produktów.

### :material-console: Ćwiczenie 3 — Wykres przestawny i procenty
1. Zmień ustawienie pola wartości na `% sumy końcowej`.
2. Utwórz skojarzony wykres przestawny skumulowany.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Do czego służy tabela przestawna w arkuszu kalkulacyjnym?",
  "opcje": [
   "Do edycji zdjęć osadzonych w arkuszu",
   "Do szybkiego podsumowywania, filtrowania i analizowania dużych zbiorów danych",
   "Do automatycznego wysyłania e-maili",
   "Do formatowania krojów czcionek"
  ],
  "poprawna": 1,
  "wyjasnienie": "Tabela przestawna służy do dynamicznej agregacji i analizy danych tabelarycznych."
 },
 {
  "pytanie": "Czym jest fragmentator (Slicer) w tabeli przestawnej?",
  "opcje": [
   "Narzędziem do dzielenia komórek na pół",
   "Wizualnym przyciskiem filtrującym, pozwalającym na łatwe filtrowanie danych",
   "Formułą mnożącą wartości",
   "Wykresem trójwymiarowym"
  ],
  "poprawna": 1,
  "wyjasnienie": "Fragmentatory zapewniają przyjazny interfejs filtrowania danych w tabelach i wykresach przestawnych."
 },
 {
  "pytanie": "Jaka funkcja pozwala zsumować wartości spełniające określone kryterium?",
  "opcje": [
   "SUMA.JEŻELI",
   "LICZ.JEŻELI",
   "WYSZUKAJ.PIONOWO",
   "ŚREDNIA"
  ],
  "poprawna": 0,
  "wyjasnienie": "SUMA.JEŻELI dodaje wartości z podanego zakresu dla wierszy spełniających dany warunek."
 },
 {
  "pytanie": "Co się stanie po dodaniu nowego wiersza do źródłowej tabeli danych?",
  "opcje": [
   "Tabela przestawna zaktualizuje się automatycznie natychmiast",
   "Należy odświeżyć tabelę przestawną (lub zaktualizować zakres źródła danych)",
   "Plik zgłosi błąd krytyczny",
   "Nowy wiersz zostanie usunięty"
  ],
  "poprawna": 1,
  "wyjasnienie": "Tabele przestawne wymagają operacji odświeżenia, aby uwzględnić nowe dane wprowdzone do źródła."
 },
 {
  "pytanie": "Czym jest Dashboard (pulpit menedżerski)?",
  "opcje": [
   "Pulpitem systemu Windows",
   "Zbiorem powiązanych ze sobą wykresów i wskaźników na jednym ekranie do bieżącego monitorowania danych",
   "Paskiem narzędzi edytora",
   "Procedurą zapisu do pliku PDF"
  ],
  "poprawna": 1,
  "wyjasnienie": "Dashboard to czytelny panel podsumowujący kluczowe wskaźniki i wykresy biznesowe."
 }
]
</script>
</div>

---

## Podsumowanie

Tabele i wykresy przestawne stanowią podstawowe narzędzie analityka danych. Pozwalają przekształcić surowe tabele w czytelne raporty biznesowe i pulpit nawigacyjny wspomagający podejmowanie decyzji.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
