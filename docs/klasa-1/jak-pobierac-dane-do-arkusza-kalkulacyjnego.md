# Jak pobierać dane do arkusza kalkulacyjnego

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Praca z dużymi zbiorami danych w arkuszu kalkulacyjnym rozpoczyna się od ich prawidłowego importu i oczyszczenia. Na tych zajęciach nauczysz się pobierać dane z zewnętrznych plików tekstowych (CSV, TSV), baz danych, stron internetowych oraz interfejsów API, a także przygotowywać je do dalszej analizy.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. identyfikować podstawowe struktury plików wymiany danych (CSV, TSV, JSON, XML)
    2. importować dane tekstowe z uwzględnieniem znaków podziału (separatory, kodowanie UTF-8)
    3. stosować narzędzie „Tekst jako kolumny” do rozdzielania połączonych ciągów znaków
    4. pobierać tabele danych bezpośrednio ze stron internetowych za pomocą zapytania WWW
    5. oczyszczać dane z niepotrzebnych spacji, znaków specjalnych oraz duplikatów
    6. konwertować typy danych (np. tekst na liczby lub daty) i zmieniać formaty liczbowe
    7. ładować i przekształcać dane przy użyciu edytora Power Query
    8. automatycznie odświeżać połączenia z zewnętrznymi źródłami danych
    9. walidować poprawność wprowadzanych i importowanych danych (Reguły sprawdzania poprawności)
    10. łączyć dane z wielu arkuszy i plików w jeden spójny zestaw tabelaryczny

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Import plików tekstowych (CSV, TSV) i kodowanie znaków

Pliki **CSV** (Comma-Separated Values) oraz **TSV** (Tab-Separated Values) to powszechne formaty wymiany danych. Kluczowym elementem przy ich imporcie jest wybór właściwego separatora (przecinek, średnik, tabulacja) oraz kodowania znaków (**UTF-8** zapobiega błędom w polskich diakrytykach).

```text
Imię;Nazwisko;Wiek;Miasto
Jan;Kowalski;28;Warszawa
Anna;Nowak;34;Kraków
```

---

## 2. Oczyszczanie danych i narzędzie Power Query

:material-plus-circle: **rozszerzenie**

Dane pobrane z zewnętrznych systemów często zawierają błędy: spacje nieodpływowe, nieprawidłowe separatory dziesiętne czy błędne formaty dat.

Narzędzie **Power Query** pozwala na automatyzację procesu ETL (Extract, Transform, Load):

1. **Pobieranie:** połączenie z plikiem CSV / bazą SQL.
2. **Przekształcanie:** usunięcie kolumn, zamiana wartości, zmiana typów danych, usuwanie duplikatów.
3. **Ładowanie:** wstawienie gotowej, czystej tabeli do arkusza.

---

## 3. Zapytania WWW i połączenia dynamiczne

:material-star: **dopełnienie**

Arkusz kalkulacyjny umożliwia nawiązanie żywego połączenia ze stroną WWW i automatyczny pobór tabel (np. kursów walut NBP lub notowań giełdowych). Po zmianie danych w sieci, arkusz odświeża się bez ponownej ręcznej edycji.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="jak-pobierac-dane-do-arkusza-kalkulacyjnego"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="jak-pobierac-dane-do-arkusza-kalkulacyjnego"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Import pliku CSV ze złym separatorem
1. Pobierz plik CSV rozdzielany średnikami i zaimportuj go do arkusza.
2. Skonfiguruj poprawnie podział na kolumny oraz kodowanie UTF-8.

### :material-console: Ćwiczenie 2 — Czyszczenie danych funkcjami tekstowymi
1. Użyj funkcji `USUŃ.ZBĘDNE.SPACJE` oraz `Z.WIELKIEJ.LITERY` na sprowadzonym spisie nazwisk.
2. Zamień kropki na przecinki w kolumnie z kwotami pieniężnymi, aby przekonwertować je na liczby.

### :material-console: Ćwiczenie 3 — Automatyczne zapytanie WWW o kursy walut
1. Utwórz połączenie z tabelą kursów NBP.
2. Ustaw automatyczne odświeżanie danych przy otwarciu pliku.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Co oznacza skrót CSV?",
  "opcje": [
   "Comma-Separated Values",
   "Calculated Sheet Vector",
   "Computer System Version",
   "Central Storage Variable"
  ],
  "poprawna": 0,
  "wyjasnienie": "CSV to format pliku tekstowego służący do przechowywania danych w postaci tabelarycznej, rozdzielonych przecinkami lub średnikami."
 },
 {
  "pytanie": "Jakie kodowanie znaków należy wybrać przy imporcie pliku CSV z polskimi literami?",
  "opcje": [
   "ASCII",
   "UTF-8 (lub Windows-1250)",
   "ISO-8859-2",
   "Binary"
  ],
  "poprawna": 1,
  "wyjasnienie": "Kodowanie UTF-8 powszechnie i bezbłędnie obsługuje polskie znaki diakrytyczne."
 },
 {
  "pytanie": "Do czego służy funkcja USUŃ.ZBĘDNE.SPACJE (TRIM) w arkuszu kalkulacyjnym?",
  "opcje": [
   "Usuwa wszystkie spacje z ciągu znaków",
   "Usuwa spacje wiodące i końcowe oraz wielokrotne spacje między wyrazami",
   "Zastępuje spacje przecinkami",
   "Usuwa znaki nowej linii"
  ],
  "poprawna": 1,
  "wyjasnienie": "USUŃ.ZBĘDNE.SPACJE pozostawia pojedyncze odstępy między wyrazami, wycinając spacje na początku i końcu tekstu."
 },
 {
  "pytanie": "Jaka jest główna zaleta korzystania z Power Query przy imporcie danych?",
  "opcje": [
   "Możliwość zapisania kroków przekształceń i ponownego ich automatycznego wykonania po odświeżeniu danych",
   "Tworzenie trójwymiarowych wykresów",
   "Szyfrowanie arkusza hasłem",
   "Automatyczne tłumaczenie tekstu na angielski"
  ],
  "poprawna": 0,
  "wyjasnienie": "Power Query zapamiętuje sekwencję przekształceń danych, pozwalając na jednoclickowe odświeżanie i czyszczenie nowych zbiorów."
 },
 {
  "pytanie": "Co się stanie, gdy dane liczbowe zostaną zaimportowane do arkusza jako tekst?",
  "opcje": [
   "Arkusz automatycznie je skasuje",
   "Nie będzie można na nich wykonywać operacji matematycznych (np. SUMA zwróci 0)",
   "Liczby zmienią kolor na czerwony",
   "Plik ulegnie uszkodzeniu"
  ],
  "poprawna": 1,
  "wyjasnienie": "Wartości liczbowe zapisane jako tekst są ignorowane przez formuły matematyczne, co wymaga ich konwersji na typ liczbowy."
 }
]
</script>
</div>

---

## Podsumowanie

Umiejętność importu i oczyszczania danych z zewnętrznych źródeł jest pierwszym niezbędnym krokiem w analityce biznesowej. Narzędzia takie jak Power Query pozwalają na pełną automatyzację przygotowania danych do dalszego przetwarzania.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
