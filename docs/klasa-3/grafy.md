# Grafy. Znajdowanie najkrótszej drogi

!!! abstract "O tym temacie"

    **6 godzin lekcyjnych** · Dział II. Rozwiązywanie problemów z wykorzystaniem
    dynamicznych struktur danych · podstawa programowa **I.1, I.3, RI.2, RI.3,
    RI.4, RI.5, RI.10, II.1, RII.1, RII.2, RI+II.3h**

    W labiryncie każdy krok kosztował tyle samo, więc kolejka wystarczyła, żeby
    znaleźć drogę najkrótszą. Na mapie tak nie jest: dwa odcinki drogi mają
    różne długości, dwa łącza w sieci — różną przepustowość. W tym temacie
    zapiszesz taką mapę jako **graf z wagami**, przejdziesz go wszerz i w głąb,
    a potem poznasz **algorytm Dijkstry** — ten, który liczy trasy w nawigacji
    i w routerach.

    ??? abstract "Plan sześciu lekcji"

        | Lekcja | Sekcje | Ćwiczenia |
        | :---: | --- | --- |
        | 1 | 1–2: pojęcia, trzy sposoby zapisu grafu | 1 (punkty 1–2), 2 |
        | 2 | 3: przeszukiwanie wszerz i w głąb | 3 |
        | 3 | 4: algorytm Dijkstry na kartce, wizualizator | 1 (punkt 3) |
        | 4 | 5: algorytm Dijkstry w Pythonie | 4 |
        | 5 | odtwarzanie drogi, zmienione warunki | 5, 6 |
        | 6 | 6: złożoność, zastosowania, ujemne wagi | 7, quiz, karta pracy |

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzedniej lekcji.** Wyznacz tablicę przesunięć Horspoola dla wzorca `ABRA`.
    2. **Sprzed kilku tygodni.** Dlaczego przeszukiwanie wszerz z kolejką znajduje w labiryncie drogę najkrótszą?
    3. **Z dawniejszych tematów.** Która struktura danych działa według zasady „ostatni przyszedł, pierwszy wychodzi” (LIFO) i do czego służyła przy ONP?

    ??? success "Odpowiedzi"

        1. A: 3, B: 2, R: 1, każdy inny znak: 4 — ostatniej litery wzorca nie liczymy.
        2. Pola wychodzą z kolejki w kolejności rosnącej odległości od startu, a każdy krok kosztuje tyle samo — jeden. Dziś zobaczysz, co się psuje, gdy kroki mają różne koszty.
        3. **Stos.** Przy obliczaniu wyrażenia w ONP liczby odkłada się na stos, a operator zdejmuje dwie ostatnie. Dziś stos wróci w przeszukiwaniu w głąb.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Wyjaśnię pojęcia: wierzchołek, krawędź, stopień, graf skierowany, graf ważony — i policzę stopnie wierzchołków.
    2. Zapiszę graf jako listę krawędzi, macierz sąsiedztwa i słownik list sąsiedztwa w Pythonie.
    3. Przejdę graf wszerz (BFS) i w głąb (DFS) i powiem, który z nich daje drogę o najmniejszej liczbie krawędzi.
    4. Przeprowadzę algorytm Dijkstry na kartce, zapisując tabelę odległości krok po kroku.
    5. Napiszę algorytm Dijkstry w Pythonie i odtworzę z niego najkrótszą drogę.
    6. Podam złożoność algorytmu Dijkstry i rozpoznam, kiedy się nie nadaje.
    7. Rozwiążę zadanie o zmienionych warunkach: najkrótszą drogę przez wskazany punkt.

!!! tip "Przykłady uruchomisz na tej stronie"

    Pod przykładami są okienka z Pythonem: zmień kod i kliknij **▶ Uruchom**
    (albo ++ctrl+enter++). **Zanim klikniesz, przewiduj** wynik — sprawdzisz
    go w ramce „Przewiduj, potem sprawdź wynik”. Pod ćwiczeniami są
    podpowiedzi; odsłaniaj je po kolei, dopiero gdy utkniesz. Wizualizator
    w sekcjach 3 i 4 pokazuje przeszukiwanie wszerz i algorytm Dijkstry krok
    po kroku — liczy tak samo jak funkcje w szkielecie ćwiczeń.

## 1. Graf — pojęcia

Mapa okolicy szkoły, sieć komputerowa w pracowni, znajomi w serwisie
społecznościowym — za każdym razem są jakieś **obiekty** i **połączenia**
między nimi. Matematyk i informatyk nazywają to **grafem**.

- **Wierzchołki** (*węzły*) — obiekty: skrzyżowania, routery, osoby.
  Oznaczamy je literami albo numerami; ich liczbę zapisujemy `V`.
- **Krawędzie** — połączenia między dwoma wierzchołkami: odcinki drogi, kable,
  znajomości. Ich liczbę zapisujemy `E`.
- **Graf nieskierowany** — krawędź działa w obie strony (droga dwukierunkowa,
  kabel). **Graf skierowany** — krawędź ma kierunek, rysujemy ją strzałką
  (ulica jednokierunkowa, obserwowanie kogoś w serwisie).
- **Graf ważony** — każda krawędź ma liczbę, **wagę**: długość odcinka w km,
  czas przejazdu w minutach, koszt łącza.
- **Stopień wierzchołka** — liczba krawędzi, które się w nim stykają.
  W grafie skierowanym liczymy osobno krawędzie wychodzące i wchodzące.
- **Droga** (*ścieżka*) — ciąg wierzchołków, w którym każde dwa kolejne są
  połączone krawędzią. **Długość drogi** w grafie ważonym to suma wag jej
  krawędzi; w grafie bez wag — liczba krawędzi.

Przez cały temat będziemy pracować na dwóch grafach. **Graf G** — nieskierowany,
ważony, 6 wierzchołków i 9 krawędzi:

<figure class="gr-rysunek" markdown="0"><svg viewBox="0 0 100 60" class="gr-svg" role="img" aria-label="Graf G: sześć wierzchołków A–F, dziewięć krawędzi z wagami"><line x1="11.37" y1="27.5" x2="31.63" y2="12.5" class="gr-kraw"/><rect x="18.9" y="17.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="21.5" y="20.05" class="gr-waga">4</text><line x1="11.37" y1="32.5" x2="31.63" y2="47.5" class="gr-kraw"/><rect x="18.9" y="37.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="21.5" y="40.05" class="gr-waga">2</text><line x1="35" y1="14.2" x2="35" y2="45.8" class="gr-kraw"/><rect x="32.4" y="27.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="35" y="30.05" class="gr-waga">1</text><line x1="39.2" y1="10" x2="60.8" y2="10" class="gr-kraw"/><rect x="47.4" y="7.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="10.05" class="gr-waga">5</text><line x1="37.52" y1="46.64" x2="62.48" y2="13.36" class="gr-kraw"/><rect x="47.4" y="27.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="30.05" class="gr-waga">8</text><line x1="39.2" y1="50" x2="60.8" y2="50" class="gr-kraw"/><rect x="47.4" y="47.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="50.05" class="gr-waga">10</text><line x1="65" y1="14.2" x2="65" y2="45.8" class="gr-kraw"/><rect x="62.4" y="27.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="65" y="30.05" class="gr-waga">2</text><line x1="68.37" y1="12.5" x2="88.63" y2="27.5" class="gr-kraw"/><rect x="75.9" y="17.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="78.5" y="20.05" class="gr-waga">6</text><line x1="68.37" y1="47.5" x2="88.63" y2="32.5" class="gr-kraw"/><rect x="75.9" y="37.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="78.5" y="40.05" class="gr-waga">2</text><circle cx="8" cy="30" r="4.2" class="gr-kolo"/><text x="8" y="30.1" class="gr-nazwa">A</text><circle cx="35" cy="10" r="4.2" class="gr-kolo"/><text x="35" y="10.1" class="gr-nazwa">B</text><circle cx="35" cy="50" r="4.2" class="gr-kolo"/><text x="35" y="50.1" class="gr-nazwa">C</text><circle cx="65" cy="10" r="4.2" class="gr-kolo"/><text x="65" y="10.1" class="gr-nazwa">D</text><circle cx="65" cy="50" r="4.2" class="gr-kolo"/><text x="65" y="50.1" class="gr-nazwa">E</text><circle cx="92" cy="30" r="4.2" class="gr-kolo"/><text x="92" y="30.1" class="gr-nazwa">F</text></svg><figcaption>Graf G — liczby przy krawędziach to wagi</figcaption></figure>

**Graf H** — skierowany: ulice jednokierunkowe od szkoły `S` do teatru `T`.

<figure class="gr-rysunek" markdown="0"><svg viewBox="0 0 100 60" class="gr-svg" role="img" aria-label="Graf H: skierowany, wierzchołki S, A, B, C, D, T"><defs><marker id="gr-grot-H" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="gr-grot"/></marker></defs><line x1="11.37" y1="27.5" x2="31.14" y2="12.86" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="18.9" y="17.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="21.5" y="20.05" class="gr-waga">7</text><line x1="11.37" y1="32.5" x2="31.14" y2="47.14" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="18.9" y="37.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="21.5" y="40.05" class="gr-waga">2</text><line x1="35" y1="45.8" x2="35" y2="14.8" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="32.4" y="27.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="35" y="30.05" class="gr-waga">3</text><line x1="39.2" y1="10" x2="60.2" y2="10" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="47.4" y="7.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="10.05" class="gr-waga">1</text><line x1="37.52" y1="46.64" x2="62.12" y2="13.84" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="47.4" y="27.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="30.05" class="gr-waga">8</text><line x1="68.37" y1="12.5" x2="88.14" y2="27.14" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="75.9" y="17.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="78.5" y="20.05" class="gr-waga">2</text><line x1="39.2" y1="50" x2="60.2" y2="50" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="47.4" y="47.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="50" y="50.05" class="gr-waga">5</text><line x1="68.37" y1="47.5" x2="88.14" y2="32.86" class="gr-kraw" marker-end="url(#gr-grot-H)"/><rect x="75.9" y="37.8" width="5.2" height="4.4" rx="1" class="gr-waga-tlo"/><text x="78.5" y="40.05" class="gr-waga">6</text><circle cx="8" cy="30" r="4.2" class="gr-kolo"/><text x="8" y="30.1" class="gr-nazwa">S</text><circle cx="35" cy="10" r="4.2" class="gr-kolo"/><text x="35" y="10.1" class="gr-nazwa">A</text><circle cx="35" cy="50" r="4.2" class="gr-kolo"/><text x="35" y="50.1" class="gr-nazwa">B</text><circle cx="65" cy="10" r="4.2" class="gr-kolo"/><text x="65" y="10.1" class="gr-nazwa">C</text><circle cx="65" cy="50" r="4.2" class="gr-kolo"/><text x="65" y="50.1" class="gr-nazwa">D</text><circle cx="92" cy="30" r="4.2" class="gr-kolo"/><text x="92" y="30.1" class="gr-nazwa">T</text></svg><figcaption>Graf H — krawędzie skierowane, wagi to minuty przejazdu</figcaption></figure>

!!! example "Przewiduj"

    Policz stopnie wszystkich wierzchołków grafu G i dodaj je. Ile wyjdzie?
    Czy da się to przewidzieć bez liczenia, znając tylko liczbę krawędzi?

    ??? success "Przewiduj, potem sprawdź wynik"

        A: 2, B: 3, C: 4, D: 4, E: 3, F: 2 — razem **18**, czyli dwa razy
        tyle, ile krawędzi. Każda krawędź ma dwa końce, więc w sumie stopni
        liczy się dwukrotnie. Dlatego w każdym grafie nieskierowanym suma
        stopni jest parzysta.

## 2. Jak zapisać graf

Rysunek jest dla człowieka. Program potrzebuje graf zapisany w strukturze
danych. Są trzy typowe sposoby — każdy pokażemy na grafie G.

**Lista krawędzi** — po jednej krawędzi w wierszu: skąd, dokąd, waga. Tak
zwykle wyglądają dane w pliku, także w zadaniach maturalnych:

```text
A B 4
A C 2
B C 1
B D 5
C D 8
C E 10
D E 2
D F 6
E F 2
```

**Macierz sąsiedztwa** — tabela `V × V`: w wierszu `u` i kolumnie `v` stoi
waga krawędzi `u–v` albo znak „—”, gdy krawędzi nie ma. Graf nieskierowany
ma macierz symetryczną względem przekątnej.

| | A | B | C | D | E | F |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | — | 4 | 2 | — | — | — |
| **B** | 4 | — | 1 | 5 | — | — |
| **C** | 2 | 1 | — | 8 | 10 | — |
| **D** | — | 5 | 8 | — | 2 | 6 |
| **E** | — | — | 10 | 2 | — | 2 |
| **F** | — | — | — | 6 | 2 | — |

**Lista sąsiedztwa** — dla każdego wierzchołka spis jego sąsiadów z wagami.
W Pythonie najwygodniej jako **słownik słowników**: `G["C"]["E"]` to waga
krawędzi z C do E.

```python
G = {
    "A": {"B": 4, "C": 2},
    "B": {"A": 4, "C": 1, "D": 5},
    "C": {"A": 2, "B": 1, "D": 8, "E": 10},
    "D": {"B": 5, "C": 8, "E": 2, "F": 6},
    "E": {"C": 10, "D": 2, "F": 2},
    "F": {"D": 6, "E": 2},
}

print(G["C"])
print(G["D"]["E"], "E" in G["A"])
print({v: len(s) for v, s in G.items()})
print(sum(len(s) for s in G.values()))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    {'A': 2, 'B': 1, 'D': 8, 'E': 10}
    2 False
    {'A': 2, 'B': 3, 'C': 4, 'D': 4, 'E': 3, 'F': 2}
    18
    ```

    `len(G["C"])` to stopień wierzchołka C. Ostatni wiersz to suma stopni
    z sekcji 1 — każda krawędź jest w słowniku zapisana dwa razy, u obu końców.

Który zapis wybrać?

| Zapis | Pamięć | Czy jest krawędź `u–v`? | Wszyscy sąsiedzi `v` |
| --- | :---: | :---: | :---: |
| lista krawędzi | O(E) | O(E) — przejrzyj całą listę | O(E) |
| macierz sąsiedztwa | O(V²) | O(1) | O(V) — cały wiersz |
| słownik list sąsiedztwa | O(V + E) | O(1) — `v in G[u]` | tyle, ilu ma sąsiadów |

Mapa drogowa ma miliony skrzyżowań, ale z każdego wychodzi kilka ulic — taki
graf nazywamy **rzadkim**. Macierz dla miliona wierzchołków miałaby bilion pól,
prawie wszystkie puste. Dlatego algorytmy w tym temacie piszemy na **liście
sąsiedztwa**, a listę krawędzi traktujemy jako format wejściowy, który trzeba
wczytać (ćwiczenie 2).

## 3. Przeszukiwanie wszerz i w głąb

Labirynt z poprzedniego działu też był grafem — pola to wierzchołki, a sąsiadów
wyliczaliśmy ze współrzędnych. Teraz sąsiadów bierzemy wprost ze słownika:
`for u in graf[v]`. Reszta kodu się nie zmienia.

- **Przeszukiwanie wszerz** (BFS, *breadth-first search*) używa **kolejki**.
  Rozchodzi się falą: najpierw wszyscy sąsiedzi startu, potem ich sąsiedzi…
- **Przeszukiwanie w głąb** (DFS, *depth-first search*) używa **stosu** —
  najczęściej niejawnie, przez rekurencję. Idzie jak najdalej, a gdy utknie,
  wraca do ostatniego rozgałęzienia.

```python
from collections import deque

G = {
    "A": {"B": 4, "C": 2},
    "B": {"A": 4, "C": 1, "D": 5},
    "C": {"A": 2, "B": 1, "D": 8, "E": 10},
    "D": {"B": 5, "C": 8, "E": 2, "F": 6},
    "E": {"C": 10, "D": 2, "F": 2},
    "F": {"D": 6, "E": 2},
}

def bfs(graf, start):
    krawedzi = {start: 0}          # ile krawędzi od startu
    kolejka = deque([start])
    while kolejka:
        v = kolejka.popleft()
        for u in graf[v]:
            if u not in krawedzi:
                krawedzi[u] = krawedzi[v] + 1
                kolejka.append(u)
    return krawedzi

def dfs(graf, v, odwiedzone):
    odwiedzone.append(v)
    for u in graf[v]:
        if u not in odwiedzone:
            dfs(graf, u, odwiedzone)
    return odwiedzone

print(bfs(G, "A"))
print(dfs(G, "A", []))
print(dfs(G, "F", []))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    {'A': 0, 'B': 1, 'C': 1, 'D': 2, 'E': 2, 'F': 3}
    ['A', 'B', 'C', 'D', 'E', 'F']
    ['F', 'D', 'B', 'A', 'C', 'E']
    ```

    BFS mówi, że do F prowadzą co najmniej **3 krawędzie**. DFS ze startu A
    poszedł łańcuchem A → B → C → D → E → F — gdyby szukać nim drogi do F,
    znalazłby pięć krawędzi zamiast trzech. Kolejność sąsiadów w słowniku
    decyduje, w którą stronę DFS skręci najpierw.

Prześledź BFS w wizualizatorze: start A, cel F. Pod rysunkiem widać kolejkę,
a przy wierzchołkach — liczbę krawędzi od startu.

<div class="graf-wiz" markdown="0">
<script type="application/json">
{"wierzcholki": {"A": [8, 30], "B": [35, 10], "C": [35, 50], "D": [65, 10], "E": [65, 50], "F": [92, 30]}, "krawedzie": [["A", "B", 4], ["A", "C", 2], ["B", "C", 1], ["B", "D", 5], ["C", "D", 8], ["C", "E", 10], ["D", "E", 2], ["D", "F", 6], ["E", "F", 2]], "skierowany": false, "start": "A", "cel": "F", "tryb": "bfs"}
</script>
</div>

BFS znajduje drogę **A → B → D → F**: trzy krawędzie, najmniej jak się da.
Ale jej długość to 4 + 5 + 6 = **15**. Spójrz na rysunek — da się taniej.
BFS liczy krawędzie, a nie wagi, więc w grafie ważonym potrzebujemy innego
algorytmu.

## 4. Algorytm Dijkstry — idea i obliczenia na kartce

Pomysł Edsgera Dijkstry: utrzymujemy dla każdego wierzchołka **najlepszą znaną
dotąd odległość** od startu i stopniowo je **zatwierdzamy**.

1. Odległość do startu wynosi 0, do wszystkich innych — ∞ (jeszcze nie znamy
   żadnej drogi).
2. Spośród **niezatwierdzonych** wierzchołków wybierz ten o **najmniejszej**
   odległości i go zatwierdź — jego odległość jest już ostateczna.
3. Dla każdego sąsiada `u` zatwierdzonego wierzchołka `v` sprawdź, czy droga
   przez `v` jest krótsza: jeśli `odl[v] + waga(v, u) < odl[u]`, popraw
   `odl[u]` i zapamiętaj `skąd[u] = v`. To poprawianie nazywa się
   **relaksacją** krawędzi.
4. Wróć do punktu 2, dopóki zostały niezatwierdzone wierzchołki.

Dlaczego zatwierdzona odległość jest ostateczna? Każda inna droga do
zatwierdzanego wierzchołka musi wyjść ze zbioru zatwierdzonych przez jakiś
wierzchołek o odległości **nie mniejszej** — przecież wybraliśmy najmniejszą.
Dalsze krawędzie mają wagi nieujemne, więc mogą ją tylko wydłużyć.

!!! example "Przewiduj"

    Startujemy z A w grafie G. Po zatwierdzeniu A mamy B = 4 i C = 2. Który
    wierzchołek zostanie zatwierdzony jako drugi i co się wtedy stanie
    z odległością do B?

    ??? success "Przewiduj, potem sprawdź wynik"

        Drugi jest **C** (2 < 4). Przez C do B jest 2 + 1 = 3 < 4, więc B
        dostaje odległość 3 i `skąd[B] = C`. Okrężna droga przez C okazała się
        krótsza od bezpośredniej krawędzi.

Na kartce prowadzimy tabelę: wiersz to jeden krok, kolumny to wierzchołki.
Wartość zatwierdzona w danym kroku jest **pogrubiona**, a w następnych
wierszach w jej kolumnie stawiamy kreskę.

| Krok | zatwierdzamy | A | B | C | D | E | F |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| start | — | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | A | **0** | 4 (A) | 2 (A) | ∞ | ∞ | ∞ |
| 2 | C | — | 3 (C) | **2** | 10 (C) | 12 (C) | ∞ |
| 3 | B | — | **3** | — | 8 (B) | 12 (C) | ∞ |
| 4 | D | — | — | — | **8** | 10 (D) | 14 (D) |
| 5 | E | — | — | — | — | **10** | 12 (E) |
| 6 | F | — | — | — | — | — | **12** |

W nawiasie stoi poprzednik, czyli `skąd`. Drogę do F odczytujemy **od końca**:
F ← E ← D ← B ← C ← A, czyli **A → C → B → D → E → F**, długość **12**.
Ma pięć krawędzi — dwa razy więcej niż droga z BFS — a jest o 3 krótsza.

Sprawdź tabelę w wizualizatorze. Przycisk **Krok** zatwierdza jeden
wierzchołek; tabela pod rysunkiem to te same liczby co wyżej. Przełącz też na
**BFS** i porównaj drogi.

<div class="graf-wiz" markdown="0">
<script type="application/json">
{"wierzcholki": {"A": [8, 30], "B": [35, 10], "C": [35, 50], "D": [65, 10], "E": [65, 50], "F": [92, 30]}, "krawedzie": [["A", "B", 4], ["A", "C", 2], ["B", "C", 1], ["B", "D", 5], ["C", "D", 8], ["C", "E", 10], ["D", "E", 2], ["D", "F", 6], ["E", "F", 2]], "skierowany": false, "start": "A", "cel": "F", "tryb": "dijkstra"}
</script>
</div>

## 5. Algorytm Dijkstry w Pythonie

W punkcie 2 trzeba szybko znaleźć niezatwierdzony wierzchołek o najmniejszej
odległości. Najprościej przejrzeć je wszystkie — to `V` porównań w każdym
z `V` kroków. Szybciej działa **kopiec** (*kolejka priorytetowa*), który
zawsze oddaje najmniejszy element. W Pythonie daje go moduł `heapq`:
`heappush(kopiec, x)` wkłada, `heappop(kopiec)` wyjmuje najmniejszy.
Do kopca wkładamy pary `(odległość, wierzchołek)` — pary porównują się
najpierw pierwszym elementem.

```python
import heapq

G = {
    "A": {"B": 4, "C": 2},
    "B": {"A": 4, "C": 1, "D": 5},
    "C": {"A": 2, "B": 1, "D": 8, "E": 10},
    "D": {"B": 5, "C": 8, "E": 2, "F": 6},
    "E": {"C": 10, "D": 2, "F": 2},
    "F": {"D": 6, "E": 2},
}

def dijkstra(graf, start):
    odl = {v: float("inf") for v in graf}
    odl[start] = 0
    kopiec = [(0, start)]               # pary (odległość, wierzchołek)
    zatwierdzone = set()
    while kopiec:
        d, v = heapq.heappop(kopiec)    # najbliższy z kopca
        if v in zatwierdzone:
            continue                    # stary, nieaktualny wpis
        zatwierdzone.add(v)
        for u, w in graf[v].items():
            if d + w < odl[u]:
                odl[u] = d + w
                heapq.heappush(kopiec, (odl[u], u))
    return odl

print(dijkstra(G, "A"))
print(dijkstra(G, "F")["A"])
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    {'A': 0, 'B': 3, 'C': 2, 'D': 8, 'E': 10, 'F': 12}
    12
    ```

    Pierwszy wiersz to ostatni wiersz tabeli z sekcji 4. Drugi: w grafie
    nieskierowanym droga z F do A jest tak samo długa jak z A do F.

Linijka `if v in zatwierdzone: continue` jest potrzebna, bo tego samego
wierzchołka nie da się w kopcu „poprawić”. Gdy B dostaje lepszą odległość 3,
wkładamy nową parę `(3, "B")`, a stara `(4, "B")` zostaje w kopcu. Wyjdzie
z niego później i zostanie pominięta.

Funkcja zwraca tylko odległości. Żeby odtworzyć samą drogę, trzeba przy każdej
poprawie zapamiętać `skad[u] = v`, a potem przejść po `skad` od celu do startu
i odwrócić listę — dokładnie jak w labiryncie. To zadania 4 i 5 w szkielecie.

## 6. Złożoność, zastosowania i ograniczenia

| Wersja | Wybór najbliższego | Złożoność | Kiedy |
| --- | --- | :---: | --- |
| prosta (z sekcji 4) | przejrzenie wszystkich niezatwierdzonych | O(V²) | mały albo gęsty graf, macierz sąsiedztwa |
| z kopcem (z sekcji 5) | `heappop` | O((V + E) · log V) | graf rzadki — mapy, sieci |
| BFS (dla porównania) | kolejka | O(V + E) | wszystkie krawędzie mają tę samą wagę |

Gdzie się to liczy:

- **Nawigacja.** Skrzyżowania to wierzchołki, odcinki ulic to krawędzie,
  waga to czas przejazdu. Przy milionach skrzyżowań używa się ulepszeń
  algorytmu Dijkstry, na przykład algorytmu A\*, który kieruje poszukiwania
  w stronę celu — ale zasada „zatwierdzaj najbliższy” zostaje.
- **Routing w sieci.** Protokół OSPF, który poznasz przy sieciach komputerowych,
  zbiera od routerów mapę łączy z kosztami i każdy router liczy z niej
  algorytmem Dijkstry najkrótsze trasy do wszystkich sieci.
- **Gry i robotyka.** Postać lub robot szuka drogi po siatce pól, gdzie bagno
  kosztuje więcej niż droga — to labirynt z wagami.

**Wagi muszą być nieujemne.** Uzasadnienie z sekcji 4 („dalsze krawędzie mogą
drogę tylko wydłużyć”) przestaje działać, gdy krawędź może drogę skrócić.

```python
import heapq

def dijkstra(graf, start):
    odl = {v: float("inf") for v in graf}
    odl[start] = 0
    kopiec = [(0, start)]
    zatwierdzone = set()
    while kopiec:
        d, v = heapq.heappop(kopiec)
        if v in zatwierdzone:
            continue
        zatwierdzone.add(v)
        for u, w in graf[v].items():
            if d + w < odl[u]:
                odl[u] = d + w
                heapq.heappush(kopiec, (odl[u], u))
    return odl

K = {"A": {"B": 2, "C": 3}, "B": {"D": 1}, "C": {"B": -2}, "D": {}}
print(dijkstra(K, "A"))
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    {'A': 0, 'B': 1, 'C': 3, 'D': 3}
    ```

    Najkrótsza droga do D to A → C → B → D o długości 3 − 2 + 1 = **2**,
    a program podaje 3. B zostało zatwierdzone z odległością 2 i od razu
    „rozesłało” ją do D. Lepsza odległość B = 1 przyszła później, ale B było
    już zatwierdzone, więc D jej nie dostało. Dla grafów z ujemnymi wagami
    stosuje się inne algorytmy, na przykład Bellmana–Forda.

!!! warning "Najczęstsze błędy"

    | Objaw | Przyczyna | Co zrobić |
    | --- | --- | --- |
    | `KeyError: 'T'` przy wierzchołku, z którego nic nie wychodzi | przy wczytywaniu dodano do słownika tylko początek krawędzi | `setdefault` dla **obu** końców krawędzi |
    | w grafie nieskierowanym nie da się wrócić tą samą drogą | krawędź wpisana tylko jako `graf[u][v]` | dopisz też `graf[v][u] = w` |
    | BFS wkłada ten sam wierzchołek do kolejki kilka razy | oznaczanie odwiedzonych dopiero po zdjęciu z kolejki | oznaczaj w chwili wkładania do kolejki |
    | Dijkstra daje drogę o najmniejszej liczbie krawędzi, a nie najkrótszą | wybierany jest wierzchołek zdjęty z kolejki, a nie ten o najmniejszej odległości | wybieraj `min` po odległości albo używaj `heapq` |
    | droga wychodzi od celu do startu | lista zbierana od końca nie została odwrócona | `d.reverse()` albo `d[::-1]` |
    | wynik dla grafu z ujemną wagą jest za duży | algorytm Dijkstry zakłada wagi nieujemne | sprawdź dane; przy ujemnych wagach — inny algorytm |

## Ćwiczenia

Minimum dla wszystkich to ćwiczenia 1–3. Ćwiczenia 4–5 są na ocenę dobrą,
6–7 na bardzo dobrą. Pobierz szkielet z gotowymi testami: uzupełniasz sześć
funkcji, uruchamiasz plik i od razu widzisz, co przechodzi.

[:material-language-python: Szkielet z testami (.py)](../pliki/grafy-szkielet.py){ .md-button .md-button--primary download="grafy-szkielet.py" }

W okienku niżej ten sam szkielet jest już wczytany: uzupełniasz funkcje,
a **▶ Uruchom** wykonuje cały plik razem z testami. Okienko pamięta twój kod
tylko w tej przeglądarce — na koniec lekcji zapisz go przyciskiem
**⤓ Zapisz .py**, bo plik przyda się do karty pracy. Program działający
dłużej niż 10 sekund okienko przerywa.

<div class="py-konsola" data-plik="../../pliki/grafy-szkielet.py"></div>

!!! note "Ćwiczenie 1. Na kartce, zanim usiądziesz do kodu"

    Pracujesz na grafie H z sekcji 1.

    1. Podaj liczbę wierzchołków i krawędzi. Dla każdego wierzchołka podaj
       liczbę krawędzi wychodzących i wchodzących.
    2. Zapisz macierz sąsiedztwa grafu H. Czy jest symetryczna? Dlaczego?
    3. Przeprowadź algorytm Dijkstry ze startu S w tabeli jak w sekcji 4.
       Podaj odległości do wszystkich wierzchołków i najkrótszą drogę z S do T.
    4. Jaką drogę z S do T znajdzie BFS i ile ona kosztuje?

    ??? success "Sprawdź w wizualizatorze — dopiero po rozwiązaniu na kartce"

        <div class="graf-wiz" markdown="0">
        <script type="application/json">
        {"wierzcholki": {"S": [8, 30], "A": [35, 10], "B": [35, 50], "C": [65, 10], "D": [65, 50], "T": [92, 30]}, "krawedzie": [["S", "A", 7], ["S", "B", 2], ["B", "A", 3], ["A", "C", 1], ["B", "C", 8], ["C", "T", 2], ["B", "D", 5], ["D", "T", 6]], "skierowany": true, "start": "S", "cel": "T", "tryb": "dijkstra"}
        </script>
        </div>

!!! note "Ćwiczenie 2. Wczytanie grafu i stopnie"

    Uzupełnij w szkielecie `wczytaj_graf` i `stopnie` (zadania 1 i 2).
    Funkcja `wczytaj_graf` zamienia listę krawędzi na słownik słowników jak
    w sekcji 2; parametr `skierowany` mówi, czy wpisać krawędź w obie strony.
    Mają przechodzić cztery pierwsze testy.

    ??? tip "Podpowiedź 1"

        Jeden wiersz to trzy słowa: `u, v, w = wiersz.split()`. Waga przychodzi jako tekst — zamień ją przez `int(w)`.

    ??? tip "Podpowiedź 2"

        `graf.setdefault(u, {})` dodaje pusty słownik tylko wtedy, gdy klucza jeszcze nie ma. Zrób to dla `u` i dla `v` — wtedy także T, z którego nic nie wychodzi, będzie w grafie.

    ??? tip "Podpowiedź 3"

        Po `setdefault`: `graf[u][v] = w`, a pod `if not skierowany:` jeszcze `graf[v][u] = w`. `stopnie`: `return {v: len(s) for v, s in graf.items()}`.

!!! note "Ćwiczenie 3. Droga przeszukiwaniem wszerz"

    Uzupełnij `bfs_droga` (zadanie 3). Kolejka, zbiór odwiedzonych i mapa
    `skad` są już przygotowane; brakuje pętli po sąsiadach. Do odtworzenia
    drogi funkcja woła `droga` z zadania 5 — bez niej testy zadania 3 nie
    przejdą, więc napisz ją od razu (podpowiedzi są pod ćwiczeniem 5).

    ??? tip "Podpowiedź 1"

        To ten sam algorytm co w labiryncie. Zamiast czterech kierunków przeglądasz `graf[v]` — klucze tego słownika to sąsiedzi.

    ??? tip "Podpowiedź 2"

        Dla każdego sąsiada `u`, którego nie ma w `odwiedzone`: dodaj go do `odwiedzone`, zapisz `skad[u] = v` i dołóż na koniec kolejki.

    ??? tip "Podpowiedź 3"

        ```python
        for u in graf[v]:
            if u not in odwiedzone:
                odwiedzone.add(u)
                skad[u] = v
                kolejka.append(u)
        ```

!!! note "Ćwiczenie 4. Algorytm Dijkstry (na ocenę dobrą)"

    Uzupełnij `dijkstra` (zadanie 4). Funkcja zwraca parę: słownik odległości
    i słownik `skad`. Możesz napisać wersję prostą według schematu
    w docstringu albo wersję z kopcem z sekcji 5 — obie przejdą testy.

    ??? tip "Podpowiedź 1"

        Pętla `while len(zatwierdzone) < len(graf):`. W środku trzy kroki z sekcji 4: wybierz, zatwierdź, popraw sąsiadów.

    ??? tip "Podpowiedź 2"

        Najbliższy niezatwierdzony: `v = min((x for x in graf if x not in zatwierdzone), key=lambda x: odl[x])`. Jeśli `odl[v] == NIESKONCZONOSC`, przerwij pętlę — reszta jest nieosiągalna.

    ??? tip "Podpowiedź 3"

        Po `zatwierdzone.add(v)`: `for u, w in graf[v].items():` i `if odl[v] + w < odl[u]:` — wtedy `odl[u] = odl[v] + w` oraz `skad[u] = v`.

!!! note "Ćwiczenie 5. Odtworzenie drogi i porównanie z BFS (na ocenę dobrą)"

    Jeśli `droga` jeszcze nie działa, uzupełnij ją (zadanie 5). Gdy wszystkie
    testy zadań 1–5 przechodzą,
    dopisz na końcu pliku program, który dla grafu G wypisze drogę A → F
    znalezioną przez BFS i przez algorytm Dijkstry oraz koszt każdej z nich
    (`koszt_drogi` jest gotowa). Wynik wklej do karty pracy.

    ??? tip "Podpowiedź 1"

        Zacznij od listy `[cel]` i dopóki ostatni element nie jest startem, dokładaj jego poprzednika ze `skad`.

    ??? tip "Podpowiedź 2"

        Najpierw przypadek bez drogi: jeśli `cel != start` i `cel not in skad`, zwróć `None`. Na końcu odwróć listę.

    ??? tip "Podpowiedź 3"

        ```python
        if cel != start and cel not in skad:
            return None
        d = [cel]
        while d[-1] != start:
            d.append(skad[d[-1]])
        return d[::-1]
        ```

!!! note "Ćwiczenie 6. Zmienione warunki: droga przez punkt (na ocenę bardzo dobrą)"

    Kurier jedzie ze szkoły S do teatru T, ale po drodze musi odebrać paczkę
    w punkcie D. Napisz `przez_punkt(graf, start, punkt, cel)` (zadanie 6),
    która zwraca koszt i całą drogę. Wystarczą **dwa** wywołania funkcji
    `dijkstra`. W karcie pracy wyjaśnij, dlaczego nie da się po prostu
    znaleźć najkrótszej drogi S → T i sprawdzić, czy przechodzi przez D.

    ??? tip "Podpowiedź 1"

        Droga składa się z dwóch odcinków: start → punkt i punkt → cel. Każdy z nich musi być najkrótszy.

    ??? tip "Podpowiedź 2"

        Pierwsze wywołanie: `dijkstra(graf, start)`, drugie: `dijkstra(graf, punkt)`. Koszt to `odl1[punkt] + odl2[cel]`; jeśli wychodzi nieskończoność, zwróć `(NIESKONCZONOSC, None)`.

    ??? tip "Podpowiedź 3"

        Drogi odcinków odtwórz funkcją `droga` i sklej je bez powtórzenia punktu: `d1 + d2[1:]`.

!!! tip "Ćwiczenie 7. Wybór metody (na ocenę bardzo dobrą)"

    Dla każdej sytuacji wybierz BFS, algorytm Dijkstry albo „żaden z nich”
    i uzasadnij wybór jednym zdaniem:

    1. plan metra, w którym przejazd między dowolnymi sąsiednimi stacjami trwa tyle samo, a pytamy o najmniejszą liczbę przystanków;
    2. mapa województwa z odległościami między miejscowościami w kilometrach;
    3. gra, w której przejście przez niektóre pola **dodaje** czas zamiast go zabierać (waga ujemna);
    4. sieć firmowa z routerami i łączami o różnych kosztach, ustalonych przez administratora.

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Graf nieskierowany ma 9 krawędzi. Ile wynosi suma stopni jego wierzchołków?",
  "opcje": ["9", "18", "81", "Zależy od tego, jak krawędzie są rozmieszczone"],
  "poprawna": 1,
  "wyjasnienie": "Każda krawędź ma dwa końce, więc w sumie stopni liczy się dwa razy: 2 · 9 = 18. Rozmieszczenie zmienia stopnie poszczególnych wierzchołków, ale nie ich sumę."
 },
 {
  "pytanie": "Graf ma 1 000 000 wierzchołków, a z każdego wychodzi średnio 4 krawędzie. Który zapis zajmie najmniej pamięci?",
  "opcje": ["Lista sąsiedztwa", "Macierz sąsiedztwa", "Oba zajmą tyle samo", "Macierz, bo ma tylko liczby"],
  "poprawna": 0,
  "wyjasnienie": "Lista sąsiedztwa zajmuje O(V + E) — kilka milionów wpisów. Macierz zawsze ma V² pól, tu bilion, prawie wszystkie puste."
 },
 {
  "pytanie": "Co gwarantuje przeszukiwanie wszerz (BFS) w grafie ważonym?",
  "opcje": ["Drogę o najmniejszej sumie wag", "Drogę o największej sumie wag", "Drogę o najmniejszej liczbie krawędzi", "Nic — znajduje dowolną drogę"],
  "poprawna": 2,
  "wyjasnienie": "BFS odwiedza wierzchołki w kolejności liczby krawędzi od startu i wag w ogóle nie czyta. W grafie G droga z BFS A → B → D → F ma 3 krawędzie, ale kosztuje 15, a najkrótsza kosztuje 12."
 },
 {
  "pytanie": "Algorytm Dijkstry z wierzchołka A w grafie G z tej strony. Ile wynosi odległość do D?",
  "odpowiedz": ["8"],
  "wyjasnienie": "A → C → B → D: 2 + 1 + 5 = 8. Bezpośrednio z C do D jest 2 + 8 = 10, a przez B od razu z A — 4 + 5 = 9."
 },
 {
  "pytanie": "Który wierzchołek algorytm Dijkstry zatwierdza w kolejnym kroku?",
  "opcje": ["Ostatnio dodany do kolejki", "Sąsiada ostatnio zatwierdzonego o najmniejszej wadze krawędzi", "Ten, który ma najwięcej sąsiadów", "Niezatwierdzony o najmniejszej znanej odległości od startu"],
  "poprawna": 3,
  "wyjasnienie": "Liczy się odległość od startu, nie waga pojedynczej krawędzi. Najbliższy niezatwierdzony nie może już dostać krótszej drogi, bo każda inna prowadzi przez wierzchołki co najmniej tak samo odległe."
 },
 {
  "pytanie": "Dlaczego algorytm Dijkstry może się pomylić, gdy w grafie są wagi ujemne?",
  "opcje": ["Bo Python nie dodaje liczb ujemnych do nieskończoności", "Bo zatwierdzony wierzchołek mógłby później dostać krótszą drogę przez krawędź ujemną", "Bo kopiec nie przyjmuje liczb ujemnych", "Bo graf z wagą ujemną musi być skierowany"],
  "poprawna": 1,
  "wyjasnienie": "Zatwierdzenie opiera się na tym, że dalsze krawędzie mogą drogę tylko wydłużyć. Krawędź ujemna ją skraca, więc zatwierdzona odległość przestaje być ostateczna. Kopiec i Python radzą sobie z liczbami ujemnymi bez problemu."
 },
 {
  "pytanie": "Jaka jest złożoność algorytmu Dijkstry z kopcem dla grafu o V wierzchołkach i E krawędziach?",
  "opcje": ["O((V + E) · log V)", "O(V + E)", "O(V²)", "O(V · E)"],
  "poprawna": 0,
  "wyjasnienie": "Każda krawędź może wstawić jeden element do kopca, a każda operacja na kopcu kosztuje O(log V). O(V + E) ma BFS, a O(V²) — prosta wersja Dijkstry z przeglądaniem wszystkich wierzchołków."
 },
 {
  "pytanie": "Jak znaleźć najkrótszą drogę z S do T, która musi przejść przez P?",
  "opcje": ["Znaleźć najkrótszą S → T i dopisać do niej P", "Uruchomić Dijkstrę z P i zsumować odległości do S i do T", "Uruchomić Dijkstrę z S i z P, a potem zsumować odl_S[P] + odl_P[T]", "Usunąć z grafu wszystkie wierzchołki poza S, P i T"],
  "poprawna": 2,
  "wyjasnienie": "Droga składa się z dwóch najkrótszych odcinków: S → P i P → T. W grafie skierowanym odległość z P do S nie musi być równa odległości z S do P, więc jedno wywołanie z P nie wystarczy."
 }
]
</script>
</div>

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj
go przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="grafy"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="grafy"></div>

---

*Algorytm opisał Edsger W. Dijkstra w artykule „A note on two problems in
connexion with graphs” (Numerische Mathematik, t. 1, 1959). Użycie algorytmu
Dijkstry do wyznaczania tras w protokole OSPF opisuje dokument RFC 2328.
Odległości, drogi i wyniki przykładów na tej stronie policzono funkcjami
ze szkieletu ćwiczeń 8 października 2026 r.*
