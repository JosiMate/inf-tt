# Rozbudowane dokumenty tekstowe

!!! abstract "O tym temacie"

    **3 godziny lekcyjne** · Dział II. Edytor tekstu i prezentacje
    · podstawa programowa **I.1, I.2, I.3, I.4**

    Dłuższe dokumenty, takie jak raporty, prace dyplomowe czy specyfikacje techniczne, wymagają odpowiedniego ustrukturyzowania i automatyzacji. Na tych zajęciach dowiesz się, jak tworzyć wielostronicowe dokumenty przy użyciu stylów, sekcji, automatycznych spisów treści, przypisów oraz odsyłaczy krzyżowych.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. stosować i modyfikować wbudowane style nagłówków oraz tekstu głównego
    2. tworzyć własne style akapitowe i znakowe w edytorze tekstu
    3. generować oraz aktualizować automatyczny spis treści i spis ilustracji
    4. stosować podziały sekcji (ciągłe oraz od nowej strony) w celu zróżnicowania układowi stron
    5. różnicować nagłówki i stopki w zależności od sekcji oraz na pierwszej stronie dokumentu
    6. wstawiać i formatować przypisy dolne oraz końcowe
    7. automatycznie numerować rysunki, tabele i wzory za pomocą podpisów
    8. tworzyć dynamiczne odsyłacze krzyżowe do elementów dokumentu
    9. wykorzystywać narzędzia recenzji: śledzenie zmian i komentarze
    10. dbać o poprawność edytorską dokumentu (unikanie sierot i wdów)

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Dlaczego nagłówki i style są kluczowe

Ręczne formatowanie tekstu (zmiana rozmiaru czcionki, pogrubienie) dla każdego nagłówka z osobna jest błędem. Uniemożliwia ono automatyzację i spójność wyglądu.

**Styl** to nazwany zbiór cech formatowania (czcionka, rozmiar, kolor, odstępy, wyrównanie), który można zastosować do akapitu lub zaznaczonego tekstu jednym kliknięciem.

### Zalety pracy ze stylami

- **Spójność wizualna:** zmiana stylu automatycznie aktualizuje wszystkie nagłówki w dokumencie.
- **Nawigacja:** panel nawigacji bazuje na hierarchii nagłówków (Nagłówek 1, Nagłówek 2).
- **Automatyzacja:** automatyczny spis treści generowany jest wyłącznie z nagłówków ustrukturyzowanych stylami.

| Styl | Zastosowanie |
| --- | --- |
| **Normalny** | Główny tekst dokumentu |
| **Nagłówek 1** | Tytuły rozdziałów głównych |
| **Nagłówek 2** | Podrozdziały |
| **Nagłówek 3** | Sekcje szczegółowe |

---

## 2. Automatyczny spis treści i spisy pomocnicze

:material-plus-circle: **rozszerzenie**

Po ustrukturyzowaniu dokumentu nagłówkami, wygenerowanie spisu treści sprowadza się do wstawienia odpowiedniego pola.

### Generowanie spisu treści

1. Umieść kursor na stronie przeznaczonej na spis treści (zwykle po stronie tytułowej).
2. Wybierz opcję **Odwołania → Spis treści** i wybierz styl automatyczny.
3. Gdy dodasz nowy rozdział lub zmienisz numery stron, kliknij **Aktualizuj spis** (wybierając aktualizację całego spisu lub tylko numerów stron).

!!! tip "Spis ilustracji i tabel"

    W podobny sposób tworzy się spis rysunków i tabel: po dodaniu podpisów pod ilustracjami (opcja *Wstaw podpis*) wybierz **Odwołania → Wstaw spis ilustracji**.

---

## 3. Podziały sekcji i nagłówki/stopki

:material-star: **dopełnienie**

Standardowy podział strony (`Ctrl + Enter`) wymusza przejście na nową stronę, ale nie zmienia struktury dokumentu. Aby zastosować inną orientację strony (np. poziomą dla szerokiej tabeli) lub odmienne nagłówki i stopki, należy użyć **Podziału sekcji**.

### Typy podziałów sekcji

- **Sekcja od następnej strony:** rozpoczyna nową sekcję od kolejnej strony (idealne dla nowych rozdziałów).
- **Sekcja ciągła:** rozpoczyna nową sekcję na tej samej stronie (przydatne przy podziale tekstu na kolumny).

```text
[Dokument]
  ├── Sekcja 1 (Strona tytułowa): brak nagłówka/stopki, orientacja pionowa
  ├── Sekcja 2 (Treść główna): nagłówek z tytułem rozdziału, numeracja od strony 3
  └── Sekcja 3 (Załączniki): orientacja pozioma, szerokie tabele
```

!!! danger "Pamiętaj o opcji „Połącz z poprzednim”"

    Domyślnie nowa sekcja ma włączoną opcję **Połącz z poprzednim** w edycji nagłówka/stopki. Aby zmienić treść nagłówka w nowej sekcji bez zmieniania go w poprzednich, należy najpierw **wyłączyć tę opcję**!

---

## 4. Przypisy i odsyłacze krzyżowe

:material-plus-circle: **rozszerzenie**

W profesjonalnych dokumentach źródła i objaśnienia pojęć umieszcza się w **przypisach dolnych** lub **końcowych**.

- **Przypis dolny (`Alt + Ctrl + F`):** umieszczany na dole strony, na której znajduje się odnośnik.
- **Odsyłacz krzyżowy:** dynamiczny link w tekście odwołujący się np. do *Rysunku 3* lub *Rozdziału 2*. Jeśli numeracja rysunków się zmieni, odsyłacz zaktualizuje się automatycznie.

---

## 5. Praca w zespole i poprawki edytorskie

Podczas wspólnej pracy nad dokumentem kluczowe są narzędzia z zakładki **Recenzja**:

- **Śledzenie zmian (`Ctrl + Shift + E`):** rejestruje wszystkie dodane, usunięte i zmodyfikowane fragmenciki tekstu.
- **Komentarze:** umożliwiają dyskusję nad konkretnym akapitem.

!!! warning "Poprawność edytorska – sieroty i wdowy"

    - **Sierota (orphan):** pojedyncza litera lub spójnik (np. „a”, „i”, „w”, „z”) pozostawiona na końcu wiersza. Zapobiega się jej poprzez wstawienie twardej spacji (`Ctrl + Shift + Spacja`).
    - **Wdowa (widow):** pojedynczy końcowy wiersz akapitu przeniesiony na początek nowej strony. Edytory posiadają automatyczną opcję „Kontrola sierot i wdów” w ustawieniach akapitu.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy** w formacie `.docx`.

<div class="kp-podsumowanie" data-karta="rozbudowane-dokumenty-tekstowe"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="rozbudowane-dokumenty-tekstowe"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Stosowanie stylów i generowanie spisu treści
1. Otwórz dostarczony plik tekstowy.
2. Nadaj głównym tytułom styl **Nagłówek 1**, a podtytułom **Nagłówek 2**.
3. Na samej górze dokumentu wstaw **Automatyczny spis treści**.
4. Dodaj nowy rozdział na końcu dokumentu i zaktualizuj spis treści.

### :material-console: Ćwiczenie 2 — Podział sekcji i nagłówki
1. Wstaw podział sekcji typu *Od następnej strony* przed drugim rozdziałem.
2. Odłącz nagłówek nowej sekcji od poprzedniej (wyłącz *Połącz z poprzednim*).
3. Wpisz w nagłówku nowej sekcji tytuł drugiego rozdziału.

### :material-console: Ćwiczenie 3 — Podpisy i odsyłacze krzyżowe
1. Wstaw grafikę do dokumentu, kliknij ją PRAWYM przyciskiem myszy i wybierz **Wstaw podpis** (np. *Rysunek 1: Schemat działania*).
2. W tekście wstaw odsyłacz krzyżowy do tej ilustracji.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Co jest warunkiem wygenerowania automatycznego spisu treści w edytorze?",
  "opcje": [
   "Ręczne pogrubienie i powiększenie tytułów rozdziałów",
   "Zastosowanie wbudowanych stylów nagłówków (np. Nagłówek 1, Nagłówek 2)",
   "Wstawienie twardej spacji po każdym nagłówku",
   "Zapisanie pliku w formacie PDF"
  ],
  "poprawna": 1,
  "wyjasnienie": "Edytor tekstu buduje automatyczny spis treści wyłącznie na podstawie akapitów sformatowanych stylami nagłówkowymi."
 },
 {
  "pytanie": "Czym różni się podział sekcji 'Od następnej strony' od zwykłego podziału strony (Ctrl + Enter)?",
  "opcje": [
   "Nie różni się niczym",
   "Podział sekcji pozwala na zmianę orientacji strony i odmienne nagłówki/stopki",
   "Zwykły podział strony usuwa numerację stron",
   "Podział sekcji zawsze tworzy poziomy układ strony"
  ],
  "poprawna": 1,
  "wyjasnienie": "Podział sekcji dzieli dokument na niezależne obszary, które mogą mieć różne marginesy, orientację oraz nagłówki i stopki."
 },
 {
  "pytanie": "Co należy zrobić, aby zmiana nagłówka w Sekcji 2 nie zmieniła nagłówka w Sekcji 1?",
  "opcje": [
   "Włączyć śledzenie zmian",
   "Wyłączyć opcję 'Połącz z poprzednim' (lub 'Link to Previous') w edycji nagłówka Sekcji 2",
   "Usunąć spis treści",
   "Zastosować twardą spację"
  ],
  "poprawna": 1,
  "wyjasnienie": "Domyślnie nagłówki nowej sekcji są połączone z poprzednią. Wyłączenie 'Połącz z poprzednim' zrywa to powiązanie."
 },
 {
  "pytanie": "Jak wstawić tzw. twardą spację, aby spójnik nie pozostał na końcu wiersza?",
  "opcje": [
   "Ctrl + Enter",
   "Shift + Enter",
   "Ctrl + Shift + Spacja",
   "Alt + Ctrl + F"
  ],
  "poprawna": 2,
  "wyjasnienie": "Skrót Ctrl + Shift + Spacja wstawia nierozdzielającą spację, zapobiegając pozostawieniu sieroty na końcu wiersza."
 },
 {
  "pytanie": "Do czego służą odsyłacze krzyżowe?",
  "opcje": [
   "Do automatycznego tłomaczenia tekstu na inny język",
   "Do tworzenia dynamicznych odnośników w tekście (np. do numeru rysunku lub strony), które aktualizują się same",
   "Do sprawdzania pisowni i gramatyki",
   "Do szyfrowania dokumentu plikiem z kluczem"
  ],
  "poprawna": 1,
  "wyjasnienie": "Odsyłacze krzyżowe odwołują się do podpisów, nagłówków czy numerów stron i zmieniają się automatycznie przy modyfikacji dokumentu."
 }
]
</script>
</div>

---

## Podsumowanie

Praca z rozbudowanymi dokumentami tekstowymi opiera się na **automatyzacji i konsekwentnym stosowaniu struktur**. Używanie stylów umożliwia tworzenie spójnych nagłówków i błyskawiczne generowanie spisów treści. Podziały sekcji dają pełną kontrolę nad układowi stron i nagłówkami, a podpisy oraz odsyłacze krzyżowe zapobiegają błędom w numeracji rysunków i tabel.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział II: Edytor tekstu i prezentacje).
