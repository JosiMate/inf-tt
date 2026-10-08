# Klasa 3 — spis tematów

**Informatyka, zakres rozszerzony · 90 godzin w roku szkolnym**

Materiały pojawiają się w miarę realizacji programu, więc część tematów jest
jeszcze pusta. Tematy zapisane *kursywą* to sprawdziany działowe. Zaznaczaj
przerobione tematy — pasek postępu jest tylko dla ciebie i nie ma nic
wspólnego z ocenami.

[:material-clipboard-check: Wymagania edukacyjne i bhp](wymagania-i-bhp.md){ .md-button }
[:material-arrow-left: Wybór rocznika](../index.md){ .md-button }

<div class="spis-tematow" data-postep="klasa-3" markdown>

### Dział I. Organizacja pracy

*1 godzina*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| **[Lekcja organizacyjna](wymagania-i-bhp.md)** | 1 | :material-check-circle:{ title="Materiał gotowy" } gotowe |

### Dział II. Rozwiązywanie problemów z wykorzystaniem dynamicznych struktur danych

*22 godziny*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| **[Odwrotna notacja polska (ONP)](onp.md)** | 4 | :material-check-circle:{ title="Materiał gotowy" } gotowe |
| **[Znajdowanie drogi wyjścia z labiryntu](labirynt.md)** | 4 | :material-check-circle:{ title="Materiał gotowy" } gotowe |
| **[Wykorzystanie list w rozwiązywaniu problemów](listy.md)** | 4 | :material-check-circle:{ title="Materiał gotowy" } gotowe |
| **[Grafy. Znajdowanie najkrótszej drogi](grafy.md)** | 6 | :material-check-circle:{ title="Materiał gotowy" } gotowe |
| *Wiesz, umiesz, zdasz* | 4 | — |

### Dział III. Algorytmy numeryczne

*22 godziny*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| Reprezentacja liczb rzeczywistych w komputerze | 4 | *w przygotowaniu* |
| Błędy w obliczeniach | 2 | *w przygotowaniu* |
| Obliczanie wartości wielomianu | 2 | *w przygotowaniu* |
| Metody obliczeń przybliżonych | 6 | *w przygotowaniu* |
| Fraktale | 6 | *w przygotowaniu* |
| *Wiesz, umiesz, zdasz* | 2 | — |

### Dział IV. Zaawansowane algorytmy i techniki programistyczne

*11 godzin*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| **[Wyszukiwanie wzorca w tekście](wyszukiwanie-wzorca.md)** | 4 | :material-check-circle:{ title="Materiał gotowy" } gotowe |
| Szyfrowanie kluczem publicznym. Algorytm RSA | 3 | *w przygotowaniu* |
| *Wiesz, umiesz, zdasz* | 4 | — |

### Dział V. Relacyjne bazy danych

*23 godziny*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| Wprowadzenie do relacyjnych baz danych | 4 | *w przygotowaniu* |
| Wykorzystanie danych pochodzących z kwerend | 3 | *w przygotowaniu* |
| Podstawy języka SQL | 4 | *w przygotowaniu* |
| Zapytania w języku SQL | 4 | *w przygotowaniu* |
| *Wiesz, umiesz, zdasz* | 5 | — |
| Pułapki cyfrowego świata | 3 | *w przygotowaniu* |

### Dział VI. Rozwiązywanie różnych problemów z wykorzystaniem komputera

*11 godzin*

| Temat | Godz. | Materiały |
| --- | :---: | --- |
| Sterujemy robotem | 3 | *w przygotowaniu* |
| Sztuka publikowania w sieci | 3 | *w przygotowaniu* |
| Grafiki informacyjne | 3 | *w przygotowaniu* |
| Analiza postępu technologicznego w ostatnich latach | 2 | *w przygotowaniu* |

</div>


<!-- zadania6:start -->

## Zadania na ocenę celującą

Zadania na szóstkę są **działowe, nie tematyczne** — obejmują materiał całego
działu i wymagają czegoś więcej niż powtórzenia ćwiczenia z lekcji. Wybierasz
**jedno** z listy poniżej.

Pracę oddajesz w Dzienniku VULCAN, w zadaniu **„Zadanie na ocenę celującą:
Dział …”** założonym do tego działu, w ciągu **dwóch tygodni od zakończenia
działu**. Plik nazwij `nr<numer w dzienniku>-<litera zadania>`, a w treści
zadania dopisz 3–5 zdań o tym, co zrobiłeś i co z tego wyszło. Karty pracy
do tematów są od tego niezależne — tam zadań na szóstkę nie ma.

Cała lista jest widoczna **od początku działu**, żebyś miał czas wybrać
i popracować. Przy każdym zadaniu jest napisane, po którym temacie da się
je wykonać. Pełne zasady opisuje strona [wymagań edukacyjnych](wymagania-i-bhp.md).

??? example "Dział II. Rozwiązywanie problemów z wykorzystaniem dynamicznych struktur danych — 3 zadania do wyboru"

    **A. Kalkulator wyrażeń kompletny**

    *Do wykonania po temacie „Odwrotna notacja polska (ONP)”.*

    Rozbuduj kalkulator ONP tak, żeby przyjmował wyrażenie w zapisie zwykłym (infiksowym) z nawiasami, zamieniał je algorytmem stacji rozrządowej na ONP, obliczał wynik i zgłaszał **sensowny komunikat przy błędzie**: niezrównoważone nawiasy, dzielenie przez zero, nieznany symbol.

    Dodaj obsługę potęgowania i jednej funkcji jednoargumentowej. Dla jednego przykładu pokaż zawartość stosu na każdym kroku.

    **Oddajesz:** kod, co najmniej 10 przypadków testowych z oczekiwanymi wynikami i wydruk śladu dla jednego wyrażenia

    ---

    **B. Labirynt: trzy strategie, jeden pomiar**

    *Do wykonania po temacie „Znajdowanie drogi wyjścia z labiryntu”.*

    Zaimplementuj przeszukiwanie wszerz, w głąb oraz algorytm A* dla tego samego labiryntu. Wygeneruj co najmniej pięć labiryntów różnej wielkości.

    Dla każdego zmierz trzy rzeczy: długość znalezionej drogi, liczbę odwiedzonych pól i czas. Odpowiedz, **kiedy przewaga A* znika** i dlaczego.

    **Oddajesz:** kod, tabelę pomiarów, wykres i wnioski

    ---

    **C. Zestaw maturalny na strukturach dynamicznych**

    *Do wykonania po obu tematach działu.*

    Wybierz trzy zadania z arkuszy maturalnych na poziomie rozszerzonym albo ze zbioru zadań CKE, które wymagają stosu, kolejki lub listy. Rozwiąż każde w Pythonie.

    Dla jednego z nich napisz **dwa** rozwiązania: naiwne i wykorzystujące odpowiednią strukturę danych — i pokaż pomiarem, ile na tym zyskujesz przy dużych danych wejściowych.

    **Oddajesz:** rozwiązania z komentarzem, wskazanie źródła zadań i pomiar dla pary rozwiązań

??? example "Dział IV. Zaawansowane algorytmy i techniki programistyczne — 3 zadania do wyboru"

    **A. Wzorzec w prawdziwym genomie**

    *Do wykonania po temacie „Wyszukiwanie wzorca w tekście”.*

    Pobierz z bazy NCBI genom bakteriofaga lambda (około 48 500 zasad) i wyszukaj w nim wzorce o długości 4, 8, 16 i 32 zasad algorytmem naiwnym, KMP i Horspoola. Dopisz czwarty algorytm — **Rabina–Karpa** z haszowaniem kroczącym — samodzielnie, na podstawie źródeł.

    Dla każdego algorytmu i każdej długości wzorca zmierz liczbę porównań znaków i czas. Pokaż na wykresie, **jak przewaga Horspoola zależy od długości wzorca**, i sprawdź, od jakiej długości Rabin–Karp zaczyna się opłacać.

    **Oddajesz:** kod czterech algorytmów, tabelę pomiarów, wykres i wnioski z podaniem źródła danych

    ---

    **B. Wzorzec ze znakiem wieloznacznym**

    *Do wykonania po temacie „Wyszukiwanie wzorca w tekście”.*

    Rozszerz wyszukiwanie tak, żeby znak `?` we wzorcu pasował do dowolnego znaku tekstu: wzorzec `k?t` ma znaleźć „kot”, „kat” i „kit”. Zrób to w algorytmie naiwnym i w algorytmie Horspoola.

    Pokaż na konkretnym przykładzie, dlaczego **tablica π w KMP przestaje być poprawna**, gdy we wzorcu jest `?`, i zaproponuj, jak Horspool musi zmienić tablicę przesunięć. Przygotuj co najmniej 10 przypadków testowych.

    **Oddajesz:** kod obu wersji z testami i opis kontrprzykładu dla KMP

    ---

    **C. RSA na małych liczbach — i atak na nie**

    *Do wykonania po temacie „Szyfrowanie kluczem publicznym. Algorytm RSA”.*

    Zaimplementuj RSA od zera: generowanie kluczy z liczb pierwszych, rozszerzony algorytm Euklidesa do wyznaczenia klucza prywatnego, szybkie potęgowanie modularne, szyfrowanie i deszyfrowanie krótkiej wiadomości.

    Potem złam własne klucze, rozkładając moduł na czynniki metodą prób dzielenia. Zmierz czas łamania dla modułów o długości 20, 30, 40 i 50 bitów i oszacuj z wykresu, ile trwałoby złamanie modułu 2048-bitowego tą metodą.

    **Oddajesz:** kod, przykładową wiadomość zaszyfrowaną i odszyfrowaną, tabelę czasów łamania, wykres i oszacowanie

<!-- zadania6:end -->
---

*Podstawa: rozkład materiału nauczania informatyki w zakresie rozszerzonym dla
oddziału 3TT.*
