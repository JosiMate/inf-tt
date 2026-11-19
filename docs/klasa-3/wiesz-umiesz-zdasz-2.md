# Wiesz, umiesz, zdasz — podsumowanie działu II

!!! abstract "O tym sprawdzianie"

    **4 godziny lekcyjne** — 2 godziny powtórki i 2 godziny pracy klasowej ·
    Dział II. Rozwiązywanie problemów z wykorzystaniem dynamicznych struktur
    danych · podstawa programowa **I.1, I.3, RI.2, RI.3, RI.4, RI.5, RI.10,
    II.1, RII.1, RII.2, RI+II.2d, RI+II.3g, RI+II.3h**

    Termin pracy klasowej podam na lekcji i w dzienniku — co najmniej tydzień
    wcześniej. Forma: **praca praktyczna przy komputerze** — piszesz programy
    w Pythonie, a odpowiedzi wpisujesz w arkuszu na stronie sprawdzianów.

    Ta strona jest po to, żebyś wiedział dokładnie, czego się spodziewać —
    i żebyś miał materiał do powtórki w jednym miejscu, zamiast przeglądać
    cztery tematy po kolei.

    ??? abstract "Plan czterech lekcji"

        | Lekcja | Co robimy | Na tej stronie |
        | :---: | --- | --- |
        | 1 | powtórka: ONP, stos, labirynt, listy | pigułka 1–3, zadania powtórkowe 1–6 |
        | 2 | powtórka: grafy, Dijkstra, wydruk; próba z plikiem startowym | pigułka 4–5, zadania 7–10, quiz, lista kontrolna |
        | 3–4 | praca klasowa | — |

!!! success "Po tej powtórce potrafisz"

    1. zapisać i obliczyć wyrażenie w ONP — na kartce i w programie, na stosie
    2. znaleźć drogę w labiryncie z nawrotami i wszerz oraz wyjaśnić, dlaczego tylko kolejka daje drogę najkrótszą
    3. dopisać na koniec i usunąć element listy jednokierunkowej oraz zbudować listę cykliczną
    4. porównać koszt operacji na liście i tablicy oraz dobrać rodzaj listy do problemu
    5. wczytać graf z pliku, przejść go wszerz i znaleźć najkrótszą drogę algorytmem Dijkstry
    6. wypisać wynik czytelnie: szerokość pola i liczba miejsc po przecinku

## Jak wygląda ten sprawdzian

| | |
| --- | --- |
| **Kiedy** | dwie godziny lekcyjne; termin podany w dzienniku co najmniej tydzień wcześniej |
| **Forma** | programujesz w Pythonie w **pliku startowym**, a odpowiedzi i kod wpisujesz w arkuszu na stronie [sprawdzianów](https://josimate.github.io/sprawdziany/) |
| **Ile zadań** | pięć: ONP, labirynt, listy, grafy, czytelny wydruk — w każdym kilka poleceń oznaczonych poziomem wymagań |
| **Jak liczy się ocena** | **poziomami, nie punktami** — patrz niżej |
| **Co oddajesz** | dokument Word `nr<numer w dzienniku>-dzial2` (nazwa ustawia się sama) przez **Zadania domowe w dzienniku VULCAN**, do końca drugiej godziny |
| **Czego potrzebujesz** | Thonny albo IDLE, folder z plikami swojej grupy (`dzial2.py` i `graf.txt`), kartka do obliczeń |

### Plik startowy

Na początku pracy dostaniesz folder z dwoma plikami. `graf.txt` to graf
zapisany jako lista krawędzi — po jednej w wierszu. `dzial2.py` ma gotowe
funkcje pomocnicze i **puste funkcje do uzupełnienia** — każda należy do
jednego polecenia arkusza. Nazwy są takie same jak w szkieletach z lekcji,
więc najlepszą powtórką jest rozwiązanie tamtych szkieletów jeszcze raz,
bez zaglądania do podpowiedzi.

| Uzupełniasz | Gotowe w pliku | Przećwicz w szkielecie |
| --- | --- | --- |
| `oblicz_onp(wyrazenie)` | — | [ONP](../pliki/onp-szkielet.py) |
| `najkrotsza_droga(lab)` | `znajdz`, `sasiedzi`, `szukaj_rekurencyjnie`, `odtworz` | [labirynt](../pliki/labirynt-szkielet.py) |
| `dodaj_na_koniec`, `usun`, `josephus(n, k)` | `Wezel`, `dodaj_na_poczatek`, `jako_lista` | [listy](../pliki/listy-szkielet.py) |
| `wczytaj_graf(nazwa_pliku)`, `bfs`, `dijkstra` | `droga(skad, start, cel)` | [grafy](../pliki/grafy-szkielet.py) |

Uruchamiasz plik klawiszem ++f5++. Blok na dole wypisuje wszystkie wyniki,
o które pyta arkusz, np. `2b) najkrótsza — kroków: …`. Funkcja jeszcze
nieuzupełniona wypisze `None` — to nie błąd, tylko znak, że czeka na ciebie.
Jedna funkcja z błędem nie zatrzymuje pozostałych.

!!! warning "Jedna różnica względem szkieletu z lekcji"

    Na lekcji `wczytaj_graf` dostawała **tekst** z krawędziami. Na pracy
    dostaje **nazwę pliku** — sam go otwierasz:
    `with open(nazwa_pliku, encoding="utf-8") as plik:`. Plik `graf.txt`
    musi leżeć w tym samym folderze co `dzial2.py`, inaczej Python go nie
    znajdzie.

!!! warning "Co wolno, a czego nie"

    **Wolno:** Thonny albo IDLE, wbudowana pomoc Pythona (`help(list)`,
    `help(deque)`), kalkulator i kartka. Umiejętność dopytania interpretera
    o składnię jest częścią zawodu, nie ściąganiem.

    **Nie wolno:** otwierać tego serwisu ani innych materiałów z lekcji,
    korzystać z notatek, internetu, czatów, asystentów AI i komunikatorów.

    Telefon zostaje w plecaku. Praca ma pokazać, co umiesz **ty**.

!!! tip "Poprawa"

    To jest praca obejmująca cały dział, więc ocenę z niej **można poprawić**:
    jeden raz, dobrowolnie, w ciągu dwóch tygodni od otrzymania ocenionej
    pracy, w terminie uzgodnionym ze mną. Poprawa obejmuje ten sam zakres
    i ma porównywalną trudność. W dzienniku zostają obie oceny, ale liczy się
    **wyższa** — przystąpienie do poprawy nigdy nie zaszkodzi.

    Zasady w całości: [wymagania edukacyjne i bhp](wymagania-i-bhp.md).

## Jak liczy się ocena

Ta praca **nie jest punktowana**. Nie ma progów procentowych i nie ma sytuacji,
w której brakuje ci jednego punktu do czwórki. Zamiast tego każde polecenie jest
oznaczone literą — poziomem wymagań, tym samym, który widzisz na
[stronie wymagań edukacyjnych](wymagania-i-bhp.md).

| Poziom | Wymagania | Daje ocenę |
| :---: | --- | :---: |
| **K** | konieczne | 2 |
| **P** | podstawowe | 3 |
| **R** | rozszerzające | 4 |
| **D** | dopełniające | 5 |

Ocenę wyznacza **najwyższy poziom, który zaliczysz w całości — razem ze
wszystkimi niższymi**. Nie da się dostać czwórki, przeskakując poziom
podstawowy.

!!! tip "Reguła jednego pudła"

    Poziom jest zaliczony, gdy wykonasz **wszystkie jego polecenia z wyjątkiem
    najwyżej jednego**. Ta tolerancja istnieje po to, żeby jedna pomyłka albo
    jedno przeoczone polecenie nie przekreślało całego poziomu.

    Nie obejmuje ona poleceń oznaczonych gwiazdką **★** — to są umiejętności,
    bez których poziomu po prostu nie ma.

!!! warning "Co z tego wynika dla twojej strategii"

    Opłaca się iść **od dołu**. Domknij najpierw wszystkie polecenia z literą K,
    potem P, i dopiero wtedy sięgaj wyżej. Działający Dijkstra przy
    niedziałającej kolejce w labiryncie nie da ci czwórki — bo oceny nie sumuje
    się z kawałków.

    Kod oceniam po tym, czy realizuje algorytm z polecenia. Wynik przepisz
    z tego, co **wypisał twój program** — liczba zgodna z kluczem przy kodzie,
    który jej nie daje, nie zalicza polecenia.

    Szóstki na tej pracy nie ma. Ocenę celującą zdobywa się osobno, **zadaniem
    działowym** ze [spisu tematów](index.md#zadania-na-ocene-celujaca).

    Ocenioną pracę dostaniesz razem z **kartą oceny**: zobaczysz w niej nie
    liczbę, tylko które konkretnie umiejętności masz zaliczone, a które trzeba
    domknąć. To jest też lista, od której zaczynasz, jeżeli idziesz na poprawę.

## Zakres — co musisz umieć na daną ocenę

Każdy wiersz to jedno polecenie na sprawdzianie. **★** oznacza umiejętność,
bez której poziomu nie da się zaliczyć — tolerancja jednego pudła jej nie
obejmuje.

=== "K — na ocenę 2"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** zapisać wyrażenie w ONP i obliczyć jego wartość | [Odwrotna notacja polska](onp.md) |
    | wyjaśnić zasadę LIFO i nazwać operacje na stosie (`append`, `pop`) | [Odwrotna notacja polska](onp.md) |
    | uruchomić przeszukiwanie z nawrotami i powiedzieć, co robi w ślepej uliczce | [Znajdowanie drogi wyjścia z labiryntu](labirynt.md) |
    | rozpoznać listę jedno-, dwukierunkową i cykliczną; wyjaśnić dostęp sekwencyjny | [Wykorzystanie list](listy.md) |
    | **★** odczytać z pliku liczbę wierzchołków, krawędzi i stopień wierzchołka | [Grafy. Najkrótsza droga](grafy.md) |
    | zapisać wiersz macierzy sąsiedztwa grafu z wagami | [Grafy. Najkrótsza droga](grafy.md) |
    | sformatować liczbę w f-stringu: szerokość pola i miejsca po przecinku | [Wykorzystanie list](listy.md) |

=== "P — na ocenę 3"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** obliczyć wyrażenie w ONP na kartce, zapisując stan stosu po każdym symbolu | [Odwrotna notacja polska](onp.md) |
    | napisać funkcję obliczającą ONP na stosie | [Odwrotna notacja polska](onp.md) |
    | **★** napisać przeszukiwanie wszerz z `deque` i podać długość najkrótszej drogi | [Znajdowanie drogi wyjścia z labiryntu](labirynt.md) |
    | napisać `dodaj_na_koniec` i `usun` w liście jednokierunkowej | [Wykorzystanie list](listy.md) |
    | wczytać graf z pliku tekstowego do słownika słowników | [Grafy. Najkrótsza droga](grafy.md) |
    | podać kolejność odwiedzania wierzchołków w BFS | [Grafy. Najkrótsza droga](grafy.md) |

=== "R — na ocenę 4"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** zamienić na ONP wyrażenie z nawiasami i różnymi priorytetami | [Odwrotna notacja polska](onp.md) |
    | porównać przeszukiwanie z nawrotami i wszerz — długość drogi, wady rekurencji | [Znajdowanie drogi wyjścia z labiryntu](labirynt.md) |
    | porównać koszt wstawiania i dostępu w liście i tablicy (notacja O); dobrać rodzaj listy | [Wykorzystanie list](listy.md) |
    | **★** wykonać algorytm Dijkstry na kartce | [Grafy. Najkrótsza droga](grafy.md) |
    | napisać algorytm Dijkstry i odtworzyć najkrótszą drogę | [Grafy. Najkrótsza droga](grafy.md) |

=== "D — na ocenę 5"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | rozpoznać niepoprawne wyrażenie ONP, opisać, jak je wykryć, i podać złożoność | [Odwrotna notacja polska](onp.md) |
    | uzasadnić, dlaczego kolejka daje najkrótszą drogę, a stos nie | [Znajdowanie drogi wyjścia z labiryntu](labirynt.md) |
    | **★** zbudować listę cykliczną i rozwiązać na niej zadanie Flawiusza | [Wykorzystanie list](listy.md) |
    | **★** znaleźć najkrótszą drogę przez wskazany wierzchołek (dwa razy Dijkstra) | [Grafy. Najkrótsza droga](grafy.md) |
    | wyjaśnić, dlaczego Dijkstra nie radzi sobie z ujemnymi wagami, i podać jego złożoność | [Grafy. Najkrótsza droga](grafy.md) |

Pełna lista wymagań na każdą ocenę jest na stronie
[wymagań edukacyjnych](wymagania-i-bhp.md) — rozwiń „Dział II”.

## Powtórka w pigułce

### 1. ONP i stos

| Zapis | Przykład | Kiedy liczysz |
| --- | --- | --- |
| infiksowy (tradycyjny) | `(2 + 6) * 3 - 4` | potrzebne nawiasy i priorytety |
| prefiksowy (polski) | `- * + 2 6 3 4` | operator przed argumentami |
| sufiksowy (ONP) | `2 6 + 3 * 4 -` | operator po argumentach — **bez nawiasów** |

**Stos** działa według zasady **LIFO** — ostatni wszedł, pierwszy wychodzi.
W Pythonie to zwykła lista: odłożenie `stos.append(x)`, zdjęcie `stos.pop()`,
podgląd szczytu `stos[-1]`.

**Obliczanie ONP:** liczba → na stos; operator → zdejmij **dwa** elementy,
wykonaj działanie, wynik odłóż. Pierwszy zdjęty to **prawy** argument —
przy odejmowaniu i dzieleniu kolejność ma znaczenie.

```text
symbol   stos po symbolu
2        [2]
6        [2, 6]
+        [8]
3        [8, 3]
*        [24]
4        [24, 4]
-        [20]
```

**Zamiana na ONP** (algorytm stacji rozrządowej): liczba → od razu do wyniku;
operator → najpierw przenieś ze stosu do wyniku operatory o priorytecie
**wyższym lub równym**, potem odłóż swój; `(` → na stos; `)` → przenoś do
wyniku aż do `(`. `*` i `/` mają pierwszeństwo przed `+` i `-`.

Wyrażenie jest **niepoprawne**, gdy przy operatorze na stosie są mniej niż
dwa elementy albo gdy na końcu nie zostaje dokładnie jeden. Każdy symbol
przetwarzasz raz, więc obliczanie ma złożoność **O(n)**.

### 2. Labirynt: nawroty i kolejka

| | Przeszukiwanie z nawrotami | Przeszukiwanie wszerz (BFS) |
| --- | --- | --- |
| Zapis | rekurencja (stos wywołań) | pętla i kolejka `deque` |
| Kolejność | idzie w głąb, w ślepej uliczce **cofa się** (`droga.pop()`) | pola **warstwami**: najpierw odległe o 1, potem o 2… |
| Znaleziona droga | pierwsza, na którą trafi | **najkrótsza** |
| Słabe strony | droga zależy od kolejności kierunków; duży labirynt przekracza limit rekurencji (`RecursionError`) | zapamiętuje wszystkie pola na froncie i mapę `skad` |

```python
while kolejka:
    pole = kolejka.popleft()             # Z POCZĄTKU — to jest FIFO
    if pole == wyjscie:
        return odtworz(skad, start, wyjscie)
    for nast in sasiedzi(lab, pole):
        if nast not in odwiedzone:
            odwiedzone.add(nast)         # oznaczasz przy dokładaniu
            skad[nast] = pole
            kolejka.append(nast)         # NA KONIEC
```

Dlaczego kolejka daje drogę najkrótszą: pola wychodzą z niej w kolejności
rosnącej odległości od startu, więc pierwsze zdjęcie wyjścia następuje przy
najmniejszej liczbie kroków. Gdyby zamienić `popleft()` na `pop()`, kolejka
stałaby się stosem — algorytm szedłby w głąb i ta gwarancja znika.

### 3. Listy

| Rodzaj | Węzeł zna | Ostatni węzeł wskazuje na |
| --- | --- | --- |
| jednokierunkowa | następny | `None` |
| dwukierunkowa | następny i poprzedni | `None` (w obu kierunkach) |
| cykliczna | następny | **pierwszy** — koło się zamyka |

**Dostęp sekwencyjny:** do k-tego elementu dochodzisz od głowy, przechodząc
**k − 1** razy po `nastepny`. Lista Pythona to w środku tablica — sięga po
element od razu.

| Operacja | Lista jednokierunkowa | Lista Pythona (tablica) |
| --- | :---: | :---: |
| wstawienie na początek | O(1) | O(n) — `insert(0, x)` przesuwa wszystko |
| odczyt k-tego elementu | O(n) | O(1) — `t[k]` |
| dopisanie na koniec | O(n) bez wskaźnika na ogon | O(1) — `append` |

Dwa schematy, które musisz umieć napisać bez zaglądania:

- **na koniec:** pusta lista → nowy węzeł zostaje głową; inaczej idziesz,
  dopóki `biezacy.nastepny is not None`, i podpinasz nowy pod ostatni;
- **usuwanie:** głowę obsługujesz osobno (`self.glowa = self.glowa.nastepny`);
  dalej idziesz z odwołaniem do **poprzedniego** węzła i przepinasz
  `poprzedni.nastepny = poprzedni.nastepny.nastepny`.

**Lista cykliczna w zadaniu Flawiusza:** budujesz n węzłów, `ogon.nastepny = glowa`,
a potem od węzła poprzedzającego odliczasz k − 1 kroków i wyrzucasz następny.
Kończysz, gdy węzeł wskazuje na samego siebie.

### 4. Grafy i algorytm Dijkstry

Graf to **wierzchołki** i **krawędzie**; krawędź może mieć **wagę** i kierunek.
**Stopień** wierzchołka to liczba krawędzi, które z niego wychodzą. Ten sam graf
na trzy sposoby:

```text
plik (lista krawędzi)    słownik słowników (listy sąsiedztwa)
A B 3                    G["A"] == {"B": 3, "C": 1}
A C 1                    G["D"] == {"B": 4, "E": 1, "F": 2}
B C 1
B D 4                    macierz sąsiedztwa, wiersz D:
C E 7                         A  B  C  D  E  F
D E 1                    D    -  4  -  -  1  2
D F 2
E F 2
```

<div class="graf-wiz" markdown="0">
<script type="application/json">
{ "wierzcholki": {"A": [8, 30], "B": [35, 10], "C": [35, 50], "D": [62, 10], "E": [62, 50], "F": [90, 30]},
  "krawedzie": [["A", "B", 3], ["A", "C", 1], ["B", "C", 1], ["B", "D", 4], ["C", "E", 7], ["D", "E", 1], ["D", "F", 2], ["E", "F", 2]],
  "skierowany": false, "start": "A", "cel": "F", "tryb": "dijkstra" }
</script>
</div>

Wczytanie z pliku — krawędź nieskierowaną wpisujesz **w obie strony**, a wagę
zamieniasz na liczbę:

```python
graf = {}
with open(nazwa_pliku, encoding="utf-8") as plik:
    for wiersz in plik:
        if not wiersz.strip():
            continue
        u, v, w = wiersz.split()
        graf.setdefault(u, {})[v] = int(w)
        graf.setdefault(v, {})[u] = int(w)
```

**BFS** w grafie to ten sam algorytm co w labiryncie — zamiast czterech
kierunków przeglądasz `graf[v]`. Daje drogę o najmniejszej **liczbie
krawędzi**, a nie najmniejszej sumie wag.

**Dijkstra:** odległość startu 0, reszty — nieskończoność. Dopóki są
niezatwierdzone: wybierz niezatwierdzony wierzchołek o **najmniejszej**
odległości, **zatwierdź** go, popraw sąsiadów (`odl[v] + w < odl[u]` →
`odl[u] = odl[v] + w`, `skad[u] = v`). Drogę odtwarzasz z `skad` od celu wstecz.

| | Wersja prosta (wybór minimum przeglądaniem) | Wersja z kopcem (`heapq`) |
| --- | :---: | :---: |
| Złożoność | O(V²) | O((V + E) · log V) |

**Wagi muszą być nieujemne.** Zatwierdzony wierzchołek uznaje się za
ostateczny — ujemna krawędź mogłaby później skrócić drogę do niego.

**Droga przez wskazany punkt** to dwa razy Dijkstra: ze startu do punktu i z
punktu do celu. Czas to suma, trasa — złączenie obu dróg.

### 5. Czytelny wydruk

W f-stringu po dwukropku podajesz **szerokość pola** i **liczbę miejsc po
przecinku**. Liczby wyrównują się do prawej, napisy do lewej.

| Zapis | Wynik (znak · oznacza spację) | Znaczenie |
| --- | --- | --- |
| `f"{x:7.3f}"` dla `x = 2.5` | `··2.500` | pole 7 znaków, 3 cyfry po przecinku |
| `f"{n:>5}"` dla `n = 42` | `···42` | do prawej, pole 5 znaków |
| `f"{s:<6}"` dla `s = "ONP"` | `ONP···` | do lewej, pole 6 znaków |

Liczba spacji przed liczbą = szerokość pola − liczba znaków liczby (z kropką).
Ten zapis widziałeś przy pomiarze czasu w temacie [o listach](listy.md).
Czytelne nazwy zmiennych (`odleglosc`, `kolejka`, `skad`) to też część
czytelnego programu — na pracy kod czyta człowiek.

---

## Zadania powtórkowe

Rozwiąż **zanim** rozwiniesz odpowiedź. Sprawdzanie od razu po przeczytaniu
pytania daje złudzenie, że się umie.

??? question "1. Zapisz w ONP wyrażenie `(5 − 1) · (2 + 3)` i oblicz je. Potem oblicz `8 2 4 * + 6 2 / -`, zapisując stan stosu po każdym symbolu."

    `(5 − 1) · (2 + 3)` w ONP: `5 1 - 2 3 + *` — wartość **20**.

    ```text
    8 → [8]
    2 → [8, 2]
    4 → [8, 2, 4]
    * → [8, 8]
    + → [16]
    6 → [16, 6]
    2 → [16, 6, 2]
    / → [16, 3]
    - → [13]
    ```

    Wartość: **13**.

??? question "2. Zamień na ONP wyrażenie `7 − 2 · (1 + 3) : 4` i oblicz je."

    `7 2 1 3 + * 4 / -` — wartość **5**.

    Najpierw nawias `1 3 +`, potem mnożenie przez 2 i dzielenie przez 4 (oba
    mają pierwszeństwo przed odejmowaniem, a między sobą idą od lewej), na
    końcu odejmowanie od 7. Kontrola: 7 − 2 · 4 : 4 = 7 − 2 = 5.

??? question "3. Które wyrażenia są niepoprawne w ONP: `4 +`, `6 3 / 2 *`, `3 4 5 +`, `1 2 + 3`? Po czym to poznać?"

    Niepoprawne: `4 +`, `3 4 5 +` i `1 2 + 3`. Poprawne jest tylko
    `6 3 / 2 *` (= 4).

    - `4 +` — przy operatorze na stosie jest tylko jeden element;
    - `3 4 5 +` i `1 2 + 3` — na końcu na stosie zostają **dwie** liczby.

??? question "4. W labiryncie poniżej (kolejność kierunków: góra, prawo, dół, lewo) ile kroków ma droga znaleziona z nawrotami, a ile najkrótsza?"

    ```text
    #########
    #S..#...#
    #.#.#.#.#
    #.#...#.#
    #.####..#
    #......E#
    #########
    ```

    Z nawrotami: **14** kroków. Wszerz: **10** kroków.

    Przeszukiwanie z nawrotami najpierw próbuje iść w prawo, więc wchodzi
    w górną część labiryntu i dochodzi do wyjścia okrężną drogą — tu akurat
    bez ani jednego nawrotu. Kolejka sprawdza pola warstwami i pierwsza
    dociera do wyjścia lewym korytarzem w dół, a potem dolnym w prawo.
    Sprawdź to widżetem — przełącz tryb na `dfs` i `bfs`:

    <div class="labirynt" markdown="0">
    <script type="application/json">
    { "tryb": "bfs", "siatka": ["#########", "#S..#...#", "#.#.#.#.#", "#.#...#.#", "#.####..#", "#......E#", "#########"] }
    </script>
    </div>

??? question "5. Na pustej liście jednokierunkowej wykonujesz: dodaj na koniec 4, dodaj na koniec 7, dodaj na początek 2, dodaj na koniec 1, usuń 7, dodaj na początek 8. Co wypisze `jako_lista()`?"

    `[8, 2, 4, 1]`.

    Jeżeli wychodzi `[8, 2, 4, 7, 1]`, to `usun` nie przepina odwołania
    poprzedniego węzła. Jeżeli program kończy się błędem `AttributeError:
    'NoneType' object has no attribute 'nastepny'` przy pierwszym
    `dodaj_na_koniec`, to brakuje przypadku pustej listy.

??? question "6. Zadanie Flawiusza: 7 osób, odpada co 3. Kto zostaje? Jaki rodzaj listy pasuje do tego zadania i dlaczego?"

    Zostaje osoba nr **4** (odpadają kolejno 3, 6, 2, 7, 5, 1).

    Pasuje **lista cykliczna**: po ostatniej osobie odliczanie wraca do
    pierwszej, a w liście cyklicznej ostatni węzeł wskazuje na pierwszy —
    nie trzeba pilnować końca.

??? question "7. Dla grafu z pigułki (plik obok widżetu) podaj stopień każdego wierzchołka, liczbę krawędzi i kolejność BFS od A."

    Stopnie: A 2, B 3, C 3, D 3, E 3, F 2. Krawędzi: **8** (suma stopni 16,
    każda krawędź liczona dwa razy).

    BFS od A, sąsiedzi w kolejności z pliku: **A, B, C, D, E, F**.

??? question "8. Wykonaj na kartce algorytm Dijkstry od A dla tego samego grafu. Podaj odległości i najkrótszą drogę do F."

    Kolejność zatwierdzania: A (0), C (1), B (2), D (6), E (7), F (8).

    | B | C | D | E | F |
    | :---: | :---: | :---: | :---: | :---: |
    | 2 | 1 | 6 | 7 | 8 |

    Droga do F: **A → C → B → D → F** (1 + 1 + 4 + 2 = 8). Zwróć uwagę, że
    B osiągasz taniej przez C (1 + 1) niż bezpośrednio (3).

??? question "9. Kurier jedzie z A do F, ale musi zajechać do E. Ile trwa najkrótsza trasa i jak ją policzyć?"

    Dwa razy Dijkstra: z A do E — **7** (A → C → B → D → E), z E do F — **2**.
    Razem **9**, trasa A → C → B → D → E → F.

    Najkrótsza droga A → F bez warunku ma długość 8 i omija E — dlatego
    sama odległość do F nie odpowiada na pytanie.

??? question "10. `x = 2.5`. Co wypisze `print(f\"{x:7.3f}\")` i ile spacji stoi przed liczbą?"

    `··2.500` (znak · to spacja) — **2** spacje. Liczba `2.500` ma 5 znaków,
    pole 7, więc 7 − 5 = 2.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Jaka jest wartość wyrażenia 6 2 3 + * w ONP?",
    "opcje": ["11", "30", "15", "36"],
    "poprawna": 1,
    "wyjasnienie": "Najpierw 2 3 + = 5, potem 6 · 5 = 30. Wynik 15 to (6 + 2 + 3) — tak, jakby operatory działały na wszystkich liczbach naraz."
  },
  {
    "pytanie": "Przy obliczaniu ONP zdejmujesz ze stosu b, a potem a. Co odkładasz dla operatora −?",
    "opcje": ["b − a", "a − b", "|a − b|", "zależy od tego, która liczba jest większa"],
    "poprawna": 1,
    "wyjasnienie": "Pierwszy zdjęty element (b) to prawy argument, bo na stos trafił później. Dlatego 8 2 - to 8 − 2, a nie 2 − 8."
  },
  {
    "pytanie": "Który zapis jest ONP wyrażenia 2 + 3 · 4?",
    "opcje": ["2 3 + 4 *", "2 3 4 * +", "+ 2 * 3 4", "2 3 4 + *"],
    "poprawna": 1,
    "wyjasnienie": "Mnożenie ma pierwszeństwo, więc 3 4 * liczy się przed dodaniem. 2 3 + 4 * to (2 + 3) · 4, a + 2 * 3 4 to zapis prefiksowy."
  },
  {
    "pytanie": "Co trzeba zmienić w przeszukiwaniu wszerz, żeby przestało dawać najkrótszą drogę?",
    "opcje": ["Zamienić popleft() na pop()", "Zmienić kolejność kierunków", "Oznaczać pola przy zdejmowaniu zamiast przy dokładaniu", "Zamienić set na listę odwiedzonych"],
    "poprawna": 0,
    "wyjasnienie": "pop() zdejmuje z końca — kolejka staje się stosem i algorytm idzie w głąb. Kolejność kierunków zmienia tylko to, którą z równie krótkich dróg znajdzie BFS."
  },
  {
    "pytanie": "Ile kosztuje wstawienie elementu na początek listy Pythona z n elementami (insert(0, x))?",
    "opcje": ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    "poprawna": 2,
    "wyjasnienie": "Lista Pythona to tablica: każdy element trzeba przesunąć o jedno miejsce. W liście jednokierunkowej to samo kosztuje O(1) — nowy węzeł przed głową."
  },
  {
    "pytanie": "W liście jednokierunkowej masz odwołanie tylko do głowy. Ile przejść po nastepny trzeba, żeby odczytać 10. element?",
    "opcje": ["1", "9", "10", "log₂ 10"],
    "poprawna": 1,
    "wyjasnienie": "Głowa to 1. element, więc do 10. dochodzisz po 9 przejściach. To jest dostęp sekwencyjny."
  },
  {
    "pytanie": "Plik ma wiersz \"B D 4\". Co powinna z nim zrobić funkcja wczytująca graf nieskierowany?",
    "opcje": ["graf[\"B\"][\"D\"] = \"4\"", "graf[\"B\"][\"D\"] = 4 i graf[\"D\"][\"B\"] = 4", "graf[\"B\"] = {\"D\": 4}", "graf[\"B\"].append(\"D\")"],
    "poprawna": 1,
    "wyjasnienie": "Krawędź nieskierowana idzie w obie strony, a wagę zamienia się na liczbę. Trzecia odpowiedź nadpisuje wszystkich wcześniejszych sąsiadów B."
  },
  {
    "pytanie": "Dlaczego algorytm Dijkstry może się pomylić przy ujemnych wagach?",
    "opcje": ["Bo nie da się dodać liczby ujemnej do nieskończoności", "Bo zatwierdzony wierzchołek uznaje się za ostateczny, a ujemna krawędź mogłaby później skrócić drogę do niego", "Bo kopiec nie przyjmuje liczb ujemnych", "Bo graf z ujemnymi wagami musi być skierowany"],
    "poprawna": 1,
    "wyjasnienie": "Cała poprawność Dijkstry opiera się na tym, że dalsze krawędzie mogą drogę tylko wydłużyć. Kopiec przyjmuje liczby ujemne bez problemu."
  }
]
</script>
</div>

---

## Lista kontrolna przed sprawdzianem

Odhacz dopiero wtedy, gdy potrafisz to **zrobić**, a nie „kojarzysz”. Idź od
góry: dopóki blok K nie jest odhaczony w całości, nie ma sensu zaglądać do D.

**Poziom K — na ocenę 2**

- [ ] ★ zapisuję wyrażenie w ONP i obliczam jego wartość
- [ ] wiem, co znaczy LIFO, i nazywam operacje na stosie: `append`, `pop`
- [ ] wyjaśniam, co robi przeszukiwanie z nawrotami w ślepej uliczce
- [ ] rozpoznaję listę jedno-, dwukierunkową i cykliczną; wiem, co to dostęp sekwencyjny
- [ ] ★ odczytuję z pliku liczbę wierzchołków, krawędzi i stopień wierzchołka
- [ ] zapisuję wiersz macierzy sąsiedztwa
- [ ] formatuję liczbę w f-stringu: szerokość pola i miejsca po przecinku

**Poziom P — na ocenę 3**

- [ ] ★ obliczam ONP na kartce, zapisując stan stosu
- [ ] piszę `oblicz_onp` na stosie, z dobrą kolejnością argumentów
- [ ] ★ piszę BFS z `deque` w labiryncie i podaję długość najkrótszej drogi
- [ ] piszę `dodaj_na_koniec` i `usun` (z przypadkiem pustej listy i głowy)
- [ ] wczytuję graf z pliku do słownika słowników
- [ ] podaję kolejność BFS w grafie

**Poziom R — na ocenę 4**

- [ ] ★ zamieniam na ONP wyrażenie z nawiasami i priorytetami
- [ ] porównuję nawroty i BFS: która droga najkrótsza, czym grozi rekurencja
- [ ] znam koszt wstawiania i dostępu w liście i tablicy; dobieram rodzaj listy
- [ ] ★ wykonuję algorytm Dijkstry na kartce
- [ ] piszę Dijkstrę i odtwarzam drogę z `skad`

**Poziom D — na ocenę 5**

- [ ] rozpoznaję niepoprawne ONP, wiem, jak je wykryć, i znam złożoność O(n)
- [ ] uzasadniam, dlaczego kolejka daje najkrótszą drogę, a stos nie
- [ ] ★ buduję listę cykliczną i rozwiązuję na niej zadanie Flawiusza
- [ ] ★ znajduję najkrótszą drogę przez wskazany wierzchołek
- [ ] wyjaśniam problem ujemnych wag i podaję złożoność Dijkstry

Jeżeli któryś punkt zostaje nieodhaczony — wracasz do tematu z kolumny po prawej
w tabeli zakresu, a nie do tej strony. Ta jest streszczeniem, nie materiałem.

---

*Zakres odpowiada wymaganiom działu II wypisanym na stronie [wymagań
edukacyjnych](wymagania-i-bhp.md). Wyniki zadań powtórkowych policzono
programem 19 listopada 2026 r. Termin pracy klasowej zostanie podany
z tygodniowym wyprzedzeniem.*
