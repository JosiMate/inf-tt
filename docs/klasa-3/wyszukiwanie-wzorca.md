# Wyszukiwanie wzorca w tekście

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział IV. Zaawansowane algorytmy i techniki
    programistyczne · podstawa programowa **I.1, I.2b, I.3, RI.2, RI.3, RI.4,
    RI.5, RI.10, II.1, RII.2**

    Najprostszy algorytm wyszukiwania wzorca da się napisać w pięć minut.
    Ciekawie robi się dopiero wtedy, gdy zapytasz, **ile pracy wykonuje** —
    i czy da się jej nie wykonywać. W tym temacie poznasz dwie odpowiedzi:
    algorytm KMP, który nigdy nie cofa się w tekście, i algorytm Horspoola,
    który potrafi przeskakiwać całe jego fragmenty.

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzedniej lekcji.** Dlaczego wstawienie na początek listy dowiązanej kosztuje O(1), a wbudowanej listy Pythona — O(n)?
    2. **Sprzed kilku tygodni.** Która struktura danych w przeszukiwaniu labiryntu gwarantuje drogę najkrótszą — i dlaczego?
    3. **Z dawniejszych tematów.** Oblicz wyrażenie zapisane w ONP: `3 4 + 2 *`.

    ??? success "Odpowiedzi"

        1. W liście dowiązanej przepina się dwa odwołania; lista Pythona to tablica, więc trzeba przesunąć wszystkie pozostałe elementy.
        2. **Kolejka** (przeszukiwanie wszerz): pola wychodzą z niej w kolejności rosnącej odległości od startu.
        3. 14 — najpierw 3 + 4 = 7, potem 7 · 2.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Zdefiniuję problem wyszukiwania wzorca i policzę, ile porównań wykona algorytm naiwny w najgorszym przypadku.
    2. Wyznaczę tablicę π dla wzorca — na kartce i programem — i powiem, co znaczy każda jej wartość.
    3. Przeprowadzę algorytm KMP krok po kroku i uzasadnię, dlaczego wykonuje najwyżej `2n` porównań.
    4. Zbuduję tablicę przesunięć Horspoola i powiem, kiedy ten algorytm przeskakuje, a kiedy grzęźnie.
    5. Porównam trzy algorytmy liczbą porównań i dobiorę właściwy do sytuacji.
    6. Rozwiążę zadanie o zmienionych warunkach jednym wyszukiwaniem wzorca.

!!! tip "Przykłady uruchomisz na tej stronie"

    Pod przykładami są okienka z Pythonem: zmień kod i kliknij **▶ Uruchom**
    (albo ++ctrl+enter++). **Zanim klikniesz, przewiduj** wynik — sprawdzisz
    go w ramce „Przewiduj, potem sprawdź wynik”. Pod ćwiczeniami są
    podpowiedzi; odsłaniaj je po kolei, dopiero gdy utkniesz. Wizualizator w sekcjach 2, 5 i 6 pokazuje każdy
    z trzech algorytmów krok po kroku i liczy porównania — tak samo jak
    funkcje w szkielecie ćwiczeń, więc wyniki da się porównać.

## 1. Problem

Dane są dwa napisy: **tekst** `T` o długości `n` i **wzorzec** `P` o długości
`m ≤ n`. Mówimy, że wzorzec **występuje w tekście z przesunięciem** `s`
(`0 ≤ s ≤ n − m`), jeżeli

```text
T[s + j] = P[j]   dla każdego j = 0, 1, …, m − 1
```

Zadanie polega na wyznaczeniu **wszystkich** takich przesunięć — także
nakładających się: wzorzec `ana` występuje w tekście `banana` z przesunięciami
1 i 3.

Tę samą operację wykonuje się w bardzo różnych miejscach:

| Gdzie | Tekst | Wzorzec |
| --- | --- | --- |
| ++ctrl+f++ w przeglądarce i edytorze | dokument | wpisana fraza |
| `grep`, `findstr`, wyszukiwarka w kodzie | tysiące plików | nazwa funkcji |
| program antywirusowy | plik wykonywalny | sygnatura złośliwego kodu |
| bioinformatyka | genom — miliardy liter `A`, `C`, `G`, `T` | sekwencja genu |
| wykrywanie plagiatów | zbiór prac i artykułów | fragmenty sprawdzanej pracy |

W wierszach o bioinformatyce i plagiatach tekst jest ogromny, więc **liczba porównań**
przestaje być szczegółem technicznym — decyduje, czy wynik będzie za sekundę,
czy za godzinę.

## 2. Algorytm naiwny

Przykładamy wzorzec kolejno do każdego przesunięcia `s = 0, 1, …, n − m`
i porównujemy znaki od lewej. Przy pierwszej różnicy porzucamy to przesunięcie
i przechodzimy do następnego — zawsze **o jedno miejsce**.

```python
def naiwny(tekst, wzorzec):
    n, m = len(tekst), len(wzorzec)
    wynik = []
    for s in range(n - m + 1):
        j = 0
        while j < m and tekst[s + j] == wzorzec[j]:
            j += 1
        if j == m:
            wynik.append(s)
    return wynik

print(naiwny("banana", "ana"))
print(naiwny("ABRAKADABRA", "ABRA"))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    [1, 3]
    [0, 7]
    ```

Prześledź go na klasycznym przykładzie. Wizualizator liczy **porównania
znaków** — każde, także nieudane — i **ustawienia** wzorca. Wpisz też własny
tekst i wzorzec.

<div class="wzorzec-wiz" markdown="0">
<script type="application/json">
{ "tekst": "ABABDABACDABABCABAB", "wzorzec": "ABABCABAB", "tryb": "naiwny" }
</script>
</div>

### Złożoność algorytmu naiwnego

Ustawień jest `n − m + 1`, a przy każdym porównujemy najwyżej `m` znaków.
W **najgorszym przypadku** porównań jest więc

```text
(n − m + 1) · m   →   złożoność O(n · m)
```

Najgorszy przypadek nie jest egzotyczny: tekst `aaaa…a` i wzorzec `aa…ab`.
Przy każdym ustawieniu zgadza się `m − 1` znaków, a różnica wychodzi dopiero
na ostatnim. Dla tekstu z 5000 liter `a` i wzorca z 12 znaków to prawie
60 000 porównań.

W zwykłym tekście jest dużo lepiej: niezgodność pojawia się zwykle już na
pierwszym albo drugim znaku, więc liczba porównań jest bliska `n`. Dlatego
algorytm naiwny bywa w praktyce zupełnie wystarczający — ale nie daje
**żadnej gwarancji**.

## 3. Co marnuje algorytm naiwny

Wróć do przykładu z wizualizatora. Przy przesunięciu 0 zgodne są cztery znaki
`ABAB`, a na piątym — `D` w tekście, `C` we wzorcu — pojawia się różnica.

```text
tekst:   A B A B D A B A C …
wzorzec: A B A B C A B A B
                 ↑ różnica
```

Algorytm naiwny przesuwa wzorzec o 1 i zaczyna porównywać od nowa, **cofając
się w tekście** do pozycji 1. A przecież w chwili różnicy **wiemy już**, co
stoi w tekście na pozycjach 0–3: `ABAB` — dokładnie to samo, co na początku
wzorca. Da się więc z góry powiedzieć, które przesunięcia nie mają szans:

| Przesunięcie o | Pod znanym fragmentem `ABAB` stanęłoby | Czy może pasować |
| :---: | --- | --- |
| 1 | `ABA` pod `BAB` | nie — już pierwszy znak się nie zgadza |
| 2 | `AB` pod `AB` | **tak** — i te dwa znaki są już sprawdzone |
| 3 | `A` pod `B` | nie |

Po przesunięciu o 2 nie trzeba ponownie porównywać `AB` — pasuje na pewno.
Porównywanie wznawiamy od znaku `D` w tekście, z którym teraz zestawiamy `wzorzec[2]`.
**Wskaźnik w tekście w ogóle się nie cofnął.** Cała sztuka polega na tym, żeby
wiedzieć, o ile przesunąć — a to zależy **wyłącznie od wzorca**, więc można to
policzyć raz, przed wyszukiwaniem.

## 4. Tablica prefikso-sufiksów π

**Prefiks właściwy** napisu to jego początek krótszy od całego napisu,
**sufiks właściwy** — koniec krótszy od całego napisu. Dla każdej pozycji `q`
wzorca liczymy

```text
π[q] = długość najdłuższego prefiksu właściwego napisu P[0..q],
       który jest jednocześnie jego sufiksem
```

Dla wzorca `ABABCABAB`:

| q | P[0..q] | najdłuższy prefiks będący też sufiksem | π[q] |
| :---: | --- | --- | :---: |
| 0 | `A` | — (prefiks właściwy musi być krótszy) | 0 |
| 1 | `AB` | — | 0 |
| 2 | `ABA` | `A` | 1 |
| 3 | `ABAB` | `AB` | 2 |
| 4 | `ABABC` | — | 0 |
| 5 | `ABABCA` | `A` | 1 |
| 6 | `ABABCAB` | `AB` | 2 |
| 7 | `ABABCABA` | `ABA` | 3 |
| 8 | `ABABCABAB` | `ABAB` | 4 |

Wiersz `q = 3` to dokładnie sytuacja z sekcji 3: dopasowane było `ABAB`, a
`π[3] = 2` mówi, że po niezgodności **dwa pierwsze znaki wzorca pasują już
na pewno**, więc porównujemy dalej od `wzorzec[2]`.

Tablicę da się wyznaczyć w czasie liniowym — tym samym pomysłem, dopasowując
wzorzec sam do siebie:

```python
def tablica_pi(wzorzec):
    pi = [0] * len(wzorzec)
    k = 0                                # długość dopasowanego prefiksu
    for q in range(1, len(wzorzec)):
        while k > 0 and wzorzec[k] != wzorzec[q]:
            k = pi[k - 1]                # krótszy prefiks, który wciąż pasuje
        if wzorzec[k] == wzorzec[q]:
            k += 1
        pi[q] = k
    return pi

print(tablica_pi("ABABCABAB"))
print(tablica_pi("AABAAAB"))
print(tablica_pi("ANANAS"))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    [0, 0, 1, 2, 0, 1, 2, 3, 4]
    [0, 1, 0, 1, 2, 2, 3]
    [0, 0, 1, 2, 3, 0]
    ```

!!! question "Dlaczego `k = pi[k - 1]`, a nie `k = 0`"

    Gdy przedłużenie prefiksu długości `k` się nie udaje, nie trzeba zaczynać
    od zera. Najdłuższy krótszy prefiks, który **też** jest sufiksem, to
    prefiks-sufiks samego prefiksu długości `k` — a jego długość mamy już
    zapisaną w `pi[k - 1]`. Tablica korzysta z samej siebie. Wyzerowanie `k`
    dałoby złe wartości: dla `AABAAAB` zamiast `π[5] = 2` wyszłoby 1.

## 5. Algorytm Knutha–Morrisa–Pratta

Z tablicą π wyszukiwanie wygląda tak: idziemy po tekście **znak po znaku,
bez cofania się**, pamiętając `q` — ile znaków wzorca jest dopasowanych.

```python
def kmp(tekst, wzorzec):
    m = len(wzorzec)
    pi = tablica_pi(wzorzec)
    wynik, q = [], 0
    for i, znak in enumerate(tekst):
        while q > 0 and wzorzec[q] != znak:
            q = pi[q - 1]                # przesuń wzorzec, nie cofaj się w tekście
        if wzorzec[q] == znak:
            q += 1
        if q == m:                       # dopasowany cały wzorzec
            wynik.append(i - m + 1)
            q = pi[q - 1]                # szukaj dalej, także nakładających się
    return wynik
```

Złóż oba kawałki i uruchom:

```python
def tablica_pi(wzorzec):
    pi, k = [0] * len(wzorzec), 0
    for q in range(1, len(wzorzec)):
        while k > 0 and wzorzec[k] != wzorzec[q]:
            k = pi[k - 1]
        if wzorzec[k] == wzorzec[q]:
            k += 1
        pi[q] = k
    return pi


def kmp(tekst, wzorzec):
    m, pi = len(wzorzec), tablica_pi(wzorzec)
    wynik, q = [], 0
    for i, znak in enumerate(tekst):
        while q > 0 and wzorzec[q] != znak:
            q = pi[q - 1]
        if wzorzec[q] == znak:
            q += 1
        if q == m:
            wynik.append(i - m + 1)
            q = pi[q - 1]
    return wynik


print(kmp("ABABDABACDABABCABAB", "ABABCABAB"))
print(kmp("AABAACAADAABAABA", "AABA"))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    [10]
    [0, 9, 12]
    ```

Wizualizator poniżej startuje w trybie **KMP**. Jasnozielone pola wzorca to
znaki „znane bez porównania” — te, które π pozwoliła pominąć.

<div class="wzorzec-wiz" markdown="0">
<script type="application/json">
{ "tekst": "AABAACAADAABAABA", "wzorzec": "AABA", "tryb": "kmp" }
</script>
</div>

### Dlaczego KMP jest liniowy

Pętla `for` przechodzi przez tekst raz — `n` obrotów. Kłopot w tym, że w środku
jest `while`, więc na pierwszy rzut oka wygląda to na `O(n · m)`. Rozstrzyga
prosta obserwacja o zmiennej `q`:

- `q` **rośnie** najwyżej o 1 w każdym obrocie pętli `for` — łącznie najwyżej `n` razy;
- każdy obrót pętli `while` **zmniejsza** `q` co najmniej o 1, a `q` nigdy nie spada poniżej zera.

Nie da się więc zmniejszyć `q` więcej razy, niż się je zwiększyło: pętla
`while` wykona **łącznie** najwyżej `n` obrotów przez cały czas działania
programu. Razem porównań jest najwyżej `2n` — licząc jedno porównanie na
każde zestawienie znaku tekstu ze znakiem wzorca, jak w szkielecie ćwiczeń.
Wyznaczenie tablicy π z tego samego powodu kosztuje `O(m)`. Złożoność KMP to **O(n + m)** — w każdym przypadku,
także najgorszym.

## 6. Algorytm Boyera–Moore'a–Horspoola

KMP gwarantuje, że łącznie porównań będzie najwyżej `2n` i że nigdy nie
cofnie się w tekście. Horspool idzie w drugą stronę: próbuje wielu znaków
tekstu **w ogóle nie czytać**. Dwa pomysły:

1. porównujemy wzorzec z tekstem **od końca** wzorca;
2. po każdym ustawieniu patrzymy na znak tekstu stojący pod **ostatnim**
   znakiem wzorca i przesuwamy wzorzec tak, żeby pod ten znak trafiło jego
   ostatnie wystąpienie we wzorcu — z pominięciem ostatniej pozycji. Jeżeli we wzorcu go nie ma — przeskakujemy
   o całą długość `m`.

Przesunięcia liczymy z góry, dla każdego znaku występującego na pozycjach
`0 … m − 2` wzorca: `przesuniecie[c] = m − 1 − k`, gdzie `k` to **ostatnia**
taka pozycja znaku `c`. Dla wzorca `ABRA` (`m = 4`):

| Znak | `A` | `B` | `R` | każdy inny |
| --- | :---: | :---: | :---: | :---: |
| przesunięcie | 3 | 2 | 1 | 4 |

Ostatnie `A` wzorca się nie liczy — bierzemy pierwsze, z pozycji 0. Gdyby
liczyć ostatnie, przesunięcie wyniosłoby 0 i algorytm stanąłby w miejscu.

```python
def horspool(tekst, wzorzec):
    n, m = len(tekst), len(wzorzec)
    przesuniecie = {wzorzec[k]: m - 1 - k for k in range(m - 1)}
    wynik, s = [], 0
    while s <= n - m:
        j = m - 1
        while j >= 0 and tekst[s + j] == wzorzec[j]:
            j -= 1                        # porównujemy od końca
        if j < 0:
            wynik.append(s)
        s += przesuniecie.get(tekst[s + m - 1], m)
    return wynik

print(horspool("szukam igły w stogu siana", "siana"))
print(horspool("ABRAKADABRA", "ABRA"))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    [20]
    [0, 7]
    ```

<div class="wzorzec-wiz" markdown="0">
<script type="application/json">
{ "tekst": "szukam igły w stogu siana", "wzorzec": "siana", "tryb": "horspool" }
</script>
</div>

W tym przykładzie Horspool wykonuje 11 porównań, a KMP i algorytm naiwny —
po 27. Większość znaków tekstu nie została w ogóle przeczytana: spacje i `o`
nie występują we wzorcu, więc wzorzec przeskakuje o pełne 5 pól — nad `ł`, `w`
i innymi znakami, których wcale nie czyta.

Ceną jest brak gwarancji. W najlepszym razie Horspool wykonuje około `n / m`
porównań — **im dłuższy wzorzec, tym szybciej** — ale w najgorszym znów
`(n − m + 1) · m`: tekst `aaaa…a` i wzorzec `baa…a` sprawiają, że przy każdym
ustawieniu zgadza się `m − 1` znaków od końca, a przesunięcie wynosi 1.

## 7. Który algorytm wybrać

Funkcja `porownaj()` ze szkieletu ćwiczeń liczy porównania wszystkich trzech
algorytmów na czterech zestawach danych. Po uzupełnieniu szkieletu dostaniesz
dokładnie te liczby:

| Dane | n | m | naiwny | KMP | Horspool |
| --- | ---: | ---: | ---: | ---: | ---: |
| fragment „Pana Tadeusza” (×20) | 3540 | 16 | 4024 | 3720 | **681** |
| pseudolosowe DNA | 5000 | 12 | 6641 | 6223 | **1493** |
| `a…a` i wzorzec `aaaaaaaaaaab` | 5000 | 12 | 59 868 | 9989 | **4989** |
| `a…a` i wzorzec `baaaaaaaaaaa` | 5000 | 12 | **4989** | 5000 | 59 868 |

Co z tego wynika:

- **KMP** nigdy nie przekracza `2n` porównań — to jedyny z trzech algorytmów,
  który daje **gwarancję** niezależnie od danych. Wybierz go, gdy dane mogą być
  złośliwe albo gdy tekst czytasz strumieniem i nie możesz się cofać: z sieci,
  z czujnika, z bardzo dużego pliku.
- **Horspool** w typowym tekście jest wielokrotnie szybszy od obu pozostałych,
  i to tym bardziej, im dłuższy wzorzec i bogatszy alfabet. Na DNA (tylko
  4 litery) jego przewaga maleje.
- **Algorytm naiwny** wygrywa prostotą. Dla krótkich tekstów i wzorców różnica
  jest niezauważalna, a kod bez błędu napiszesz na sprawdzianie w dwie minuty.

!!! info "A co robi Python?"

    Metody `find()`, `count()` i operator `in` nie są w CPythonie naiwną pętlą.
    Przez lata używały uproszczonej odmiany Boyera–Moore'a–Horspoola, a od
    wersji 3.10 dla dłuższych wzorców przełączają się na algorytm **Two-Way**
    Crochemore'a i Perrina, który — jak KMP — gwarantuje czas liniowy, a przy
    tym nie potrzebuje dodatkowej pamięci proporcjonalnej do wzorca. Wniosek
    praktyczny: w programie użytkowym pisz `wzorzec in tekst`; własną
    implementację piszesz wtedy, gdy zadanie jest **inne** niż zwykłe
    wyszukiwanie — jak w ćwiczeniu 5.

| Algorytm | Przygotowanie | Wyszukiwanie — najgorzej | Wyszukiwanie — najlepiej | Pamięć dodatkowa |
| --- | :---: | :---: | :---: | :---: |
| naiwny | — | O(n · m) | O(n) | O(1) |
| KMP | O(m) | O(n) | O(n) | O(m) |
| Horspool | O(m + σ) | O(n · m) | O(n / m) | O(σ) |

`σ` to liczba różnych znaków alfabetu — tyle wpisów może mieć tablica przesunięć.

## Ćwiczenia

Pobierz szkielet z gotowymi testami. Uzupełniasz pięć funkcji — czwartą na
ocenę wyższą — uruchamiasz plik i od razu widzisz, co przechodzi. Testy
sprawdzają osobno **pozycje** i osobno **liczbę porównań**, więc licznik musi
stać dokładnie przy porównaniu znaków.

[:material-language-python: Szkielet z testami (.py)](../pliki/wzorzec-szkielet.py){ .md-button .md-button--primary download="wzorzec-szkielet.py" }

W okienku niżej ten sam szkielet jest już wczytany: uzupełniasz funkcje,
a **▶ Uruchom** wykonuje cały plik razem z testami. Okienko pamięta twój kod
tylko w tej przeglądarce — na koniec lekcji zapisz go przyciskiem
**⤓ Zapisz .py**, bo plik przyda się do karty pracy. Program działający
dłużej niż 10 sekund okienko przerywa.

<div class="py-konsola" data-plik="../../pliki/wzorzec-szkielet.py"></div>

!!! note "Ćwiczenie 1. Na kartce, zanim usiądziesz do kodu"

    1. Ile porównań wykona algorytm naiwny, szukając `aab` w `aaaaab`?
       Rozpisz je ustawienie po ustawieniu.
    2. Wyznacz tablicę π dla wzorców `abacaba`, `abcabd` i `aaaba`.
    3. Wyznacz tablicę przesunięć Horspoola dla wzorca `ANANAS`.
    4. Podaj tekst o długości 10 i wzorzec o długości 3, dla których algorytm
       naiwny wykona **najwięcej** porównań, i policz je.

    Sprawdź się potem w wizualizatorze — wpisz własny tekst i wzorzec. Na
    sprawdzianie i na maturze wizualizatora nie będzie.

!!! note "Ćwiczenie 2. Algorytm naiwny z licznikiem"

    Uzupełnij w szkielecie funkcję `naiwny` (w szkielecie: zadanie 1). Ma
    zwracać **parę**: listę pozycji i liczbę porównań znaków. Wszystkie
    dwanaście testów ma przechodzić — sześć pozycji i sześć liczników.

    ??? tip "Podpowiedź 1"

        Dwie pętle: zewnętrzna po `s` w `range(n - m + 1)`, wewnętrzna po `j` od 0 w górę.

    ??? tip "Podpowiedź 2"

        Licznik zwiększaj tuż przed porównaniem `tekst[s + j]` z `wzorzec[j]` — liczy się także porównanie nieudane.

    ??? tip "Podpowiedź 3"

        Wygodnie: `j = 0`, potem `while j < m:` — w środku `porownania += 1`, przy różnicy `break`, inaczej `j += 1`. Po pętli: `if j == m: pozycje.append(s)`.

!!! note "Ćwiczenie 3. Tablica π i KMP"

    Uzupełnij `tablica_pi`, a potem `kmp` (w szkielecie: zadania 2 i 3).
    Jedno porównanie to jedno zestawienie `tekst[i]` z `wzorzec[q]`. W kodzie
    z sekcji 5 po wyjściu z pętli `while` ta sama para znaków jest porównywana
    drugi raz w `if` — żeby licznik się zgadzał, przebuduj pętlę tak, jak
    opisuje szkielet: `while True:` porównaj; zgodne → `q += 1` i `break`;
    różne i `q == 0` → `break`; różne → `q = pi[q - 1]`.

    ??? tip "Podpowiedź 1"

        `tablica_pi`: przepisz schemat z docstringu. `k` to długość dopasowanego prefiksu — najpierw pętla `while` cofająca `k = pi[k - 1]`, potem `if` przedłużający o 1.

    ??? tip "Podpowiedź 2"

        `kmp`: pętla `for i in range(n)`, a w niej `while True:` z **jednym** porównaniem `tekst[i] == wzorzec[q]` i licznikiem tuż przed nim.

    ??? tip "Podpowiedź 3"

        Po wyjściu z `while True` sprawdź `if q == m:` — dopisz pozycję `i - m + 1` i ustaw `q = pi[q - 1]`, żeby znaleźć też wystąpienia nakładające się.

    W karcie pracy wyjaśnij, dlaczego dla tekstu `aaaaaaaaab` i wzorca `aaab`
    KMP wykonuje 16 porównań, a algorytm naiwny 28.

!!! note "Ćwiczenie 4. Horspool (na ocenę wyższą)"

    Uzupełnij `horspool` (w szkielecie: zadanie 4). Najpierw zbuduj tablicę
    przesunięć i wypisz ją dla wzorca `ABRA` — ma się zgadzać z tabelą
    z sekcji 6. Potem dopisz wyszukiwanie.

    Gdy komplet testów przechodzi, dopisz na końcu pliku wywołanie
    `porownaj()`, uruchom i sprawdź, że liczby zgadzają się z tabelą
    z sekcji 7.

    ??? tip "Podpowiedź 1"

        Tablica: `{wzorzec[k]: m - 1 - k for k in range(m - 1)}` — zakres **bez** ostatniej pozycji wzorca.

    ??? tip "Podpowiedź 2"

        Pętla zewnętrzna `while s <= n - m`, wewnętrzna od `j = m - 1` w dół, dopóki znaki się zgadzają.

    ??? tip "Podpowiedź 3"

        Przesunięcie po **każdym** ustawieniu, także po znalezieniu wystąpienia: `s += przesuniecie.get(tekst[s + m - 1], m)`.

!!! note "Ćwiczenie 5. Zmienione warunki: rotacja napisu"

    Napis `cdeab` powstaje z `abcde` przez przeniesienie `ab` z początku na
    koniec — to **rotacja**. Napisz `jest_rotacja(a, b)` (w szkielecie:
    zadanie 5) tak, żeby rozstrzygała to **jednym** wyszukiwaniem wzorca,
    używając twojej funkcji `kmp`. Pamiętaj, że rotacja ma tę samą długość
    co napis wyjściowy. Wskazówka: gdzie w napisie `abcdeabcde` stoją wszystkie rotacje
    napisu `abcde`?

    W karcie pracy podaj złożoność swojego rozwiązania i porównaj ją ze
    sprawdzaniem po kolei wszystkich `n` rotacji.

    ??? tip "Podpowiedź 1"

        Wypisz wszystkie rotacje napisu `abcde` i poszukaj każdej z nich w napisie `abcdeabcde`.

    ??? tip "Podpowiedź 2"

        Najpierw sprawdź długości — bez tego `"abc"` byłoby „rotacją” `"abcabc"`.

    ??? tip "Podpowiedź 3"

        `return len(a) == len(b) and len(kmp(a + a, b)[0]) > 0`

!!! tip "Ćwiczenie 6. Wybór algorytmu"

    Dla każdej sytuacji wybierz algorytm i uzasadnij wybór jednym zdaniem:

    1. program czyta dane z czujnika znak po znaku i nie może ich zapamiętać, a ma wykryć sekwencję alarmową;
    2. edytor tekstu szuka słowa w powieści;
    3. zadanie na sprawdzianie: sprawdź, ile razy słowo `ala` występuje w podanym zdaniu;
    4. system szuka w logach serwera tekstu, który może przysłać atakujący, próbując go spowolnić.

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Ile porównań znaków wykona w najgorszym przypadku algorytm naiwny dla tekstu długości n i wzorca długości m?",
    "typ": "jedna",
    "opcje": ["n", "n + m", "(n − m + 1) · m", "n²"],
    "poprawna": 2,
    "wyjasnienie": "Ustawień wzorca jest n − m + 1, a przy każdym porównuje się najwyżej m znaków. Taki przypadek daje na przykład tekst aaa…a i wzorzec aa…ab."
  },
  {
    "pytanie": "Jaka jest tablica π dla wzorca ABABAC?",
    "typ": "jedna",
    "opcje": ["[0, 0, 1, 2, 3, 0]", "[0, 1, 2, 3, 4, 0]", "[0, 0, 1, 1, 2, 0]", "[1, 0, 1, 2, 3, 0]"],
    "poprawna": 0,
    "wyjasnienie": "π[4] = 3, bo w ABABA prefiks ABA jest jednocześnie sufiksem. Przy C żaden prefiks nie pasuje, więc π[5] = 0. π[0] jest zawsze 0 — prefiks właściwy musi być krótszy od napisu."
  },
  {
    "pytanie": "Co algorytm KMP robi po niezgodności, gdy dopasowanych było q > 0 znaków wzorca?",
    "typ": "jedna",
    "opcje": [
      "Cofa się w tekście o q pozycji i zaczyna od początku wzorca",
      "Ustawia q = π[q − 1] i porównuje ten sam znak tekstu z kolejnym znakiem wzorca",
      "Przesuwa wzorzec o całą długość m",
      "Przesuwa wzorzec zawsze o 1"
    ],
    "poprawna": 1,
    "wyjasnienie": "Wskaźnik w tekście w KMP nigdy się nie cofa. π[q − 1] mówi, ile początkowych znaków wzorca na pewno pasuje po przesunięciu — tych nie trzeba porównywać ponownie."
  },
  {
    "pytanie": "Dlaczego KMP wykonuje najwyżej 2n porównań, choć w pętli for jest pętla while?",
    "typ": "jedna",
    "opcje": [
      "Bo pętla while wykonuje się najwyżej raz na obrót pętli for",
      "Bo q rośnie łącznie najwyżej n razy, a każdy obrót while zmniejsza q — więc while wykona łącznie najwyżej n obrotów",
      "Bo tablica π ma tylko m elementów",
      "Bo KMP porównuje znaki od końca wzorca"
    ],
    "poprawna": 1,
    "wyjasnienie": "To argument zamortyzowany: w jednym obrocie for pętla while może się wykonać wiele razy, ale łącznie przez cały program nie więcej razy, niż q wcześniej wzrosło."
  },
  {
    "pytanie": "Jaka jest tablica przesunięć Horspoola dla wzorca ABRA?",
    "typ": "jedna",
    "opcje": [
      "A: 3, B: 2, R: 1, inny: 4",
      "A: 0, B: 2, R: 1, inny: 4",
      "A: 3, B: 2, R: 1, inny: 3",
      "A: 1, B: 2, R: 3, inny: 4"
    ],
    "poprawna": 0,
    "wyjasnienie": "Liczymy tylko pozycje 0 … m − 2, więc ostatnie A pomijamy i A dostaje przesunięcie m − 1 − 0 = 3. Znak spoza wzorca daje pełne przesunięcie m = 4."
  },
  {
    "pytanie": "W jakich warunkach algorytm Horspoola jest najszybszy?",
    "typ": "jedna",
    "opcje": [
      "Krótki wzorzec, mały alfabet",
      "Długi wzorzec, bogaty alfabet, znaki tekstu rzadko występujące we wzorcu",
      "Tekst złożony z jednej powtarzającej się litery",
      "Zawsze wtedy, gdy KMP jest najwolniejszy"
    ],
    "poprawna": 1,
    "wyjasnienie": "Gdy znaku tekstu pod końcem wzorca nie ma we wzorcu, Horspool przeskakuje o całe m. Im dłuższy wzorzec i im rzadziej jego znaki występują w tekście, tym więcej takich skoków — nawet około n / m porównań."
  },
  {
    "pytanie": "Dane przychodzą z sieci znak po znaku i nie można ich zapamiętać. Który algorytm się nadaje?",
    "typ": "jedna",
    "opcje": ["KMP", "Horspool", "Naiwny", "Żaden"],
    "poprawna": 0,
    "wyjasnienie": "KMP czyta tekst raz, od lewej, i nigdy się nie cofa — wystarczy mu bieżący znak i liczba q. Algorytm naiwny cofa się w tekście, a Horspool potrzebuje znaku leżącego m − 1 pozycji dalej."
  },
  {
    "pytanie": "Jak jednym wyszukiwaniem sprawdzić, czy napis b jest rotacją napisu a (przy równych długościach)?",
    "typ": "jedna",
    "opcje": [
      "Szukając b w a + a",
      "Szukając a w b",
      "Szukając b w odwróconym a",
      "Porównując posortowane litery a i b"
    ],
    "poprawna": 0,
    "wyjasnienie": "Każda rotacja a jest fragmentem napisu a + a o długości len(a). Posortowane litery sprawdzałyby anagram, a nie rotację — abc i bac mają te same litery, ale bac nie jest rotacją abc."
  }
]
</script>
</div>

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj
go przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="wyszukiwanie-wzorca"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="wyszukiwanie-wzorca"></div>

---

*Algorytm KMP opracowali niezależnie Donald Knuth z Vaughanem Prattem oraz
James H. Morris; opublikowali go wspólnie w 1977 r. W tym samym roku Robert
S. Boyer i J Strother Moore ogłosili algorytm porównujący od końca wzorca,
a jego uproszczoną wersję z jedną tablicą przesunięć podał w 1980 r. R. Nigel
Horspool. Zmianę algorytmu w CPythonie opisuje zgłoszenie bpo-41972
(Python 3.10). Liczby porównań w sekcjach 6 i 7 policzono funkcjami
ze szkieletu ćwiczeń 27 września 2026 r.*
