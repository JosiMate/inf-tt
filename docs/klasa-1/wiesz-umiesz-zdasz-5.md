# Wiesz, umiesz, zdasz — podsumowanie działu V

!!! abstract "O tym sprawdzianie"

    **1 godzina lekcyjna** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Termin: **wtorek 16 lutego 2027 r.**, na lekcji informatyki.
    Forma: **praca praktyczna przy komputerze**.

    Ta strona jest po to, żebyś wiedział dokładnie, czego się spodziewać —
    i żebyś miał materiał do powtórki w jednym miejscu, zamiast przeglądać
    pięć stron po kolei.

!!! success "Po tej powtórce potrafisz"

    1. sprawnie importować i oczyszczać dane z plików zewnętrznych (CSV, TSV, Power Query)
    2. budować zaawansowane tabele i wykresy przestawne z grupami i fragmentatorami
    3. stosować funkcje wyszukiwania (`WYSZUKAJ.X`, `WYSZUKAJ.PIONOWO`, `INDEKS`/`PODAJ.POZYCJĘ`)
    4. operować na funkcjach warunkowych, tekstowych oraz formułach tablicowych
    5. stosować funkcje zaokrąglające zapobiegające błędom groszowym
    6. przygotowywać dokumenty korespondencji seryjnej z regułami warunkowymi

## Jak wygląda ten sprawdzian

| | |
| --- | --- |
| **Kiedy** | wtorek 16 lutego 2027 r., cała lekcja |
| **Forma** | zadania wykonywane przy komputerze w pliku `.xlsx` |
| **Ile zadań** | pięć zadań praktycznych oznaczonych poziomem wymagań |
| **Jak liczy się ocena** | **poziomami, nie punktami** — patrz niżej |
| **Co oddajesz** | plik `nr<numer w dzienniku>-dzial5.xlsx` przez **Zadania domowe w dzienniku VULCAN** |
| **Czego potrzebujesz** | arkusz kalkulacyjny (Excel / LibreOffice Calc) |

---

## Jak liczy się ocena

| Poziom | Wymagania | Daje ocenę |
| :---: | --- | :---: |
| **K** | konieczne | 2 |
| **P** | podstawowe | 3 |
| **R** | rozszerzające | 4 |
| **D** | dopełniające | 5 |

---

## Powtórka w pigułce

### Import i przetwarzanie danych
- **CSV:** Import z podaniem separatora i kodowania UTF-8.
- **Power Query:** Automatyzacja etapów pobierania i oczyszczania danych.

### Tabele przestawne
- **Agregacja:** Wiersze, kolumny, wartości, filtry.
- **Grupowanie:** Daty według lat, kwartałów i miesięcy.
- **Slicers:** Fragmentatory do szybkiego filtrowania raportu.

### Formuły i funkcje
- **Wyszukiwanie:** `=WYSZUKAJ.X(szukana; zakres_szukany; zakres_zwracany; "Brak")`.
- **Logika:** `=JEŻELI(ORAZ(A1>0; B1="OK"); C1*0.1; 0)`.
- **Zaokrąglanie:** `=ZAOKR(wartość; 2)` zapobiega błędom formatowania wizualnego.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Jaki jest zalecany sposób zabezpieczenia się przed błędami zaokrągleń wizualnych na fakturze?",
    "typ": "jedna",
    "opcje": [
      "Zmniejszenie czcionki",
      "Użycie funkcji ZAOKR(kwota; 2) w formułach obliczających podatki i sumy",
      "Formatowanie komórek jako tekst",
      "Wyłączenie przeliczania automatycznego"
    ],
    "poprawna": 1,
    "wyjasnienie": "Funkcja ZAOKR fizycznie modyfikuje wartość w pamięci komórki, eliminując błędy wizualne sum częściowych."
  },
  {
    "pytanie": "Która funkcja zastępuje zarówno WYSZUKAJ.PIONOWO jak i INDEKS/PODAJ.POZYCJĘ?",
    "typ": "jedna",
    "opcje": [
      "SUMA.JEŻELI",
      "WYSZUKAJ.X",
      "POŁĄCZ.TEKSTY",
      "UNIKATOWE"
    ],
    "poprawna": 1,
    "wyjasnienie": "WYSZUKAJ.X elastycznie przeszukuje dowolne kolumny w dowolnym kierunku."
  },
  {
    "pytanie": "Do czego służą fragmentatory (Slicers) w tabelach przestawnych?",
    "typ": "jedna",
    "opcje": [
      "Do cięcia komórek",
      "Do interaktywnego i wizualnego filtrowania danych",
      "Do eksportu do PDF",
      "Do zmiany koloru tła"
    ],
    "poprawna": 1,
    "wyjasnienie": "Fragmentatory pozwalają jednym kliknięciem filtrować zawartość tabel i wykresów przestawnych."
  },
  {
    "pytanie": "Czym różni się plik CSV od standardowego pliku XLSX?",
    "typ": "jedna",
    "opcje": [
      "CSV to zwykły plik tekstowy z danymi rozdzielonymi separatorem, bez formuł i stylów",
      "CSV zawiera makra w języku Python",
      "CSV nie może być otwarty w notatniku",
      "Brak różnic"
    ],
    "poprawna": 0,
    "wyjasnienie": "CSV przechowuje czyste dane tekstowe oddzielone separatorami."
  },
  {
    "pytanie": "Jaka funkcja zwraca listę wartości bez powtórzeń z podanego zakresu?",
    "typ": "jedna",
    "opcje": [
      "UNIKATOWE",
      "SORTUJ",
      "FILTRUJ",
      "LICZ.JEŻELI"
    ],
    "poprawna": 0,
    "wyjasnienie": "UNIKATOWE wyciąga unikalne rekordy z podanej kolumny lub tabeli."
  }
]
</script>
</div>

---

## Lista kontrolna przed sprawdzianem

- [ ] Importuję pliki CSV z poprawnym kodowaniem UTF-8
- [ ] Buduję tabele przestawne i grupuję daty
- [ ] Stosuję funkcję WYSZUKAJ.X oraz JEŻELI.BŁĄD
- [ ] Znam różnicę między formatowaniem a funkcją ZAOKR
- [ ] Przygotowuję pola scalania w korespondencji seryjnej

---

*Zakres odpowiada wymaganiom działu V. Sprawdzian zapowiedziany 9 lutego 2027 r.*
