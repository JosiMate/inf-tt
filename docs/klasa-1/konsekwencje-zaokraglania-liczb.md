# Konsekwencje zaokrąglania liczb

!!! abstract "O tym temacie"

    **1 godzina lekcyjna** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2**

    Prezentacja liczb w arkuszu kalkulacyjnym bywa myląca. Zmiana liczby wyświetlanych miejsc po przecinku za pomocą formatowania komórki nie zmienia jej rzeczywistej wartości przechowywanej w pamięci. Na tej lekcji dowiesz się, jak powstają skumulowane błędy zaokrągleń oraz jak stosować funkcje zaokrąglające.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. wyjaśnić różnicę między formatowaniem wizualnym a rzeczywistą wartością liczbową w pamięci
    2. opisać mechanizm powstawania skumulowanego błędu zaokrągleń w obliczeniach finansowych
    3. stosować funkcje `ZAOKR`, `ZAOKR.DÓŁ` oraz `ZAOKR.GÓRA` z określoną precyzją
    4. używać funkcji `L.CAŁK` (INT) oraz `OBCIĘCIE` (TRUNC) do odcinania części ułamkowej
    5. opisać reprezentację zmiennoprzecinkową w standardzie IEEE 754 i jej ograniczenia
    6. zidentyfikować przyczyny niedokładności przy porównywaniu liczb zmiennoprzecinkowych
    7. stosować bezpieczne progi tolerancji (epsilon) przy porównaniach wartości ułamkowych
    8. projektować bezpieczne arkusze księgowe zapobiegające błędom groszowym
    9. wykrywać i korygować niezgodności sum częściowych wynikające z formatowania
    10. stosować zasady zaokrąglania walutowego i podatkowego zgodnego z przepisami

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Formatowanie a rzeczywista wartość w pamięci

Częstym błędem początkujących jest przekonanie, że zmniejszenie liczby miejsc po przecinku przyciskiem na wstążce zmienia wartość liczby.

```text
Wartość w pamięci: 12.3456
Formatowanie (2 miejsca): 12.35
Suma w pamięci (12.3456 + 12.3456): 24.6912 -> Formatowanie: 24.69 (a nie 24.70!)
```

---

## 2. Funkcje zaokrąglające (`ZAOKR`, `ZAOKR.DÓŁ`, `ZAOKR.GÓRA`)

:material-plus-circle: **rozszerzenie**

Aby wymusić rzeczywistą zmianę wartości w pamięci komórki, należy użyć odpowiedniej funkcji:

- **`ZAOKR(liczba; liczba_cyfr)`**: zaokrągla według tradycyjnych reguł matematycznych.
- **`ZAOKR.DÓŁ(liczba; liczba_cyfr)`**: zaokrągla zawsze w stronę zera.
- **`ZAOKR.GÓRA(liczba; liczba_cyfr)`**: zaokrągla zawsze w stronę od zera.

---

## 3. Standard IEEE 754 i błędy precyzji

:material-star: **dopełnienie**

Komputery zapisują liczby ułamkowe w dwójkowym układzie pozycyjnym (standard **IEEE 754**). Niektóre proste ułamki dziesiętne (np. `0.1`) nie mają dokładnego rozwinięcia dwójkowego, co prowadzi do niespodzianek typu: `0.1 + 0.2 = 0.30000000000000004`.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="konsekwencje-zaokraglania-liczb"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="konsekwencje-zaokraglania-liczb"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Pułapka formatowania wizualnego
1. Wpisz do dwóch komórek liczbę `2.44` oraz `2.44`.
2. Zmień formatowanie na 1 miejsce po przecinku (wyświetli się `2.4` i `2.4`).
3. Zsumuj obie komórki. Zauważ, że `2.4 + 2.4` dało `4.88` (po sformatowaniu `4.9`), co wygląda na błąd rachunkowy.

### :material-console: Ćwiczenie 2 — Naprawa faktury funkcją ZAOKR
1. Użyj funkcji `=ZAOKR(A1*B1; 2)` do wyliczenia kwoty podatku VAT dla każdej pozycji faktury.

### :material-console: Ćwiczenie 3 — Porównanie z tolerancją
1. Sprawdź warunek `=JEŻELI(ABS(A1-B1)<0.00001; "Równe"; "Różne")` dla liczb ułamkowych.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Czy zmiana formatu komórki na brak miejsc po przecinku zmienia wartość używaną do dalszych obliczeń?",
  "opcje": [
   "Tak, ucina ułamek na stałe",
   "Nie, zmienia jedynie sposób wyświetlania, a w pamięci zostaje pełna dokładność",
   "Tak, ale tylko dla liczb dodatnich",
   "Zależy od wersji systemu"
  ],
  "poprawna": 1,
  "wyjasnienie": "Formatowanie komórki wpływa wyłącznie na prezentację wizualną, nie modyfikując liczby w pamięci."
 },
 {
  "pytanie": "Jaka funkcja zaokrągli liczbę 12.3456 do dwóch miejsc po przecinku (do 12.35)?",
  "opcje": [
   "ZAOKR(12.3456; 2)",
   "ZAOKR.DÓŁ(12.3456; 2)",
   "L.CAŁK(12.3456)",
   "OBCIĘCIE(12.3456)"
  ],
  "poprawna": 0,
  "wyjasnienie": "Funkcja ZAOKR(12.3456; 2) zaokrągla liczbę matematycznie do dwóch miejsc po przecinku."
 },
 {
  "pytanie": "Co spowoduje wywołanie ZAOKR(123.456; -1)?",
  "opcje": [
   "123.5",
   "120",
   "100",
   "#BŁĄD!"
  ],
  "poprawna": 1,
  "wyjasnienie": "Ujemna liczba cyfr w funkcji ZAOKR oznacza zaokrąglanie do części całkowitych (w tym przypadku do najbliższej dziesiątki)."
 },
 {
  "pytanie": "Dlaczego w komputerach występują drobne błędy precyzji przy dodawaniu ułamków (np. 0.1 + 0.2)?",
  "opcje": [
   "Wynika to z zapisu liczb w dwójkowym standardzie IEEE 754, w którym niektóre ułamki dziesiętne są nieskończone",
   "To błąd w kodzie arkusza kalkulacyjnego",
   "Wynika to z przegrzewania się procesora",
   "Komputer celowo zaokrągla wynik"
  ],
  "poprawna": 0,
  "wyjasnienie": "Reprezentacja zmiennoprzecinkowa w systemie dwójkowym nie potrafi idealnie odtworzyć ułamków 1/10 bez zaokrąglenia."
 },
 {
  "pytanie": "Czym różni się funkcja L.CAŁK od OBCIĘCIE dla liczb ujemnych?",
  "opcje": [
   "Niczym się nie różnią",
   "L.CAŁK zaokrągla w dół do najbliższej mniejszej liczby całkowitej (np. -2.3 -> -3), a OBCIĘCIE obcina ułamek (np. -2.3 -> -2)",
   "OBCIĘCIE nie działa na liczbach ujemnych",
   "L.CAŁK zwraca tekst"
  ],
  "poprawna": 1,
  "wyjasnienie": "L.CAŁK zawsze zaokrągla w dół na osi liczbowej, podczas gdy OBCIĘCIE po prostu odrzuca część ułamkową."
 }
]
</script>
</div>

---

## Podsumowanie

Świadomość różnicy między formatowaniem wizualnym a funkcjami zaokrąglającymi zapobiega skumulowanym błędom groszowym w sprawozdaniach finansowych i rozliczeniach podatkowych.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
