# -*- coding: utf-8 -*-
"""
Grafy. Znajdowanie najkrótszej drogi — szkielet do ćwiczeń.
Klasa 3, informatyka w zakresie rozszerzonym, PCEiKZ Szczucin.

Uzupełnij funkcje oznaczone słowem TODO, a potem uruchom ten plik.
Testy na dole sprawdzą twoje rozwiązanie i wypiszą, co przechodzi,
a co nie. Nie zmieniaj treści testów — zmieniaj funkcje.

Umowa co do danych: graf jest słownikiem słowników.
    graf["C"] == {"A": 2, "B": 1, "D": 8, "E": 10}
znaczy: z wierzchołka C wychodzą krawędzie do A (waga 2), do B (waga 1)
i tak dalej. Kolejność sąsiadów to kolejność, w jakiej krawędzie stały
w danych — od niej zależy, którą z równie dobrych dróg znajdzie BFS.
Droga to lista wierzchołków od startu do celu włącznie.
"""
from collections import deque

NIESKONCZONOSC = float("inf")

# Graf G z materiału: sześć wierzchołków, dziewięć krawędzi, nieskierowany.
G_TEKST = """A B 4
A C 2
B C 1
B D 5
C D 8
C E 10
D E 2
D F 6
E F 2"""

# Graf H z ćwiczenia 1: ulice jednokierunkowe, czyli graf skierowany.
H_TEKST = """S A 7
S B 2
B A 3
A C 1
B C 8
C T 2
B D 5
D T 6"""


# ─────────────────────────────────────────────────────── ZADANIE 1
def wczytaj_graf(tekst, skierowany=False):
    """Zamienia tekst z krawędziami na słownik słowników.

    Każdy niepusty wiersz to trzy pola rozdzielone spacją: skąd, dokąd,
    waga (liczba całkowita). W grafie nieskierowanym krawędź wpisujesz
    w obie strony. Każdy wierzchołek musi być kluczem słownika — także
    taki, z którego nic nie wychodzi (wtedy ma pusty słownik sąsiadów).

    Schemat:
      • graf = {}
      • dla każdego wiersza: u, v, w = wiersz.split(); w = int(w)
      • graf.setdefault(u, {}) i graf.setdefault(v, {})
      • graf[u][v] = w, a jeśli graf nieskierowany — także graf[v][u] = w
    """
    graf = {}
    for wiersz in tekst.splitlines():
        if not wiersz.strip():
            continue
        pass  # TODO: rozbij wiersz i dopisz krawędź według schematu wyżej
    return graf


# ─────────────────────────────────────────────────────── ZADANIE 2
def stopnie(graf):
    """Zwraca słownik: wierzchołek → liczba krawędzi z niego wychodzących.

    W grafie nieskierowanym to zwykły stopień wierzchołka.
    """
    return {}  # TODO: jedna linijka — słownik składany z len(...)


# ─────────────────────────────────────────────────────── ZADANIE 3
def bfs_droga(graf, start, cel):
    """Przeszukiwanie wszerz: droga o NAJMNIEJSZEJ LICZBIE KRAWĘDZI.

    Zwraca listę wierzchołków od startu do celu albo None, gdy celu nie
    da się osiągnąć. To ten sam algorytm co w labiryncie — zamiast czterech
    kierunków przeglądasz graf[v], czyli sąsiadów z listy sąsiedztwa.
    Mapa `skad` pamięta, skąd przyszliśmy do każdego wierzchołka.
    """
    kolejka = deque([start])
    odwiedzone = {start}
    skad = {}
    while kolejka:
        v = kolejka.popleft()
        if v == cel:
            return droga(skad, start, cel)
        pass  # TODO: każdego nieodwiedzonego sąsiada oznacz, zapamiętaj skąd, dołóż do kolejki
    return None


# ─────────────────────────────────────────────────────── ZADANIE 4
def dijkstra(graf, start):
    """Algorytm Dijkstry. Zwraca parę (odl, skad).

    odl  — słownik: wierzchołek → długość najkrótszej drogi od startu
           (NIESKONCZONOSC, jeśli wierzchołka nie da się osiągnąć),
    skad — słownik: wierzchołek → poprzednik na najkrótszej drodze.

    Wersja prosta, jak w sekcji 4 materiału:
      • odl = NIESKONCZONOSC dla wszystkich, odl[start] = 0
      • dopóki są niezatwierdzone wierzchołki:
          – wybierz niezatwierdzony v o najmniejszym odl[v]
          – jeżeli odl[v] to NIESKONCZONOSC → koniec (reszta nieosiągalna)
          – zatwierdź v
          – dla każdego sąsiada u z wagą w: jeżeli odl[v] + w < odl[u],
            to odl[u] = odl[v] + w i skad[u] = v
    Wersja z kopcem (heapq) z sekcji 5 też przejdzie testy.
    """
    odl = {v: NIESKONCZONOSC for v in graf}
    odl[start] = 0
    skad = {}
    zatwierdzone = set()
    # TODO: pętla według schematu wyżej
    return odl, skad


# ─────────────────────────────────────────────────────── ZADANIE 5
def droga(skad, start, cel):
    """Odtwarza drogę z mapy `skad`: od celu wstecz do startu, potem odwraca.

    Zwraca listę od startu do celu albo None, gdy cel nie jest startem
    i nie ma go w `skad` (czyli nie został osiągnięty).
    """
    return None  # TODO


def koszt_drogi(graf, d):
    """Suma wag krawędzi wzdłuż drogi d. Gotowe — przyda się w zadaniach."""
    return sum(graf[a][b] for a, b in zip(d, d[1:]))


# ──────────────────────────────────── ZADANIE 6 (na ocenę wyższą)
def przez_punkt(graf, start, punkt, cel):
    """Najkrótsza droga ze startu do celu, która MUSI przejść przez punkt.

    Zwraca parę (koszt, droga). Gdy któregoś odcinka nie da się przejść:
    (NIESKONCZONOSC, None). Wystarczą dwa wywołania twojej funkcji
    dijkstra — pomyśl, z których wierzchołków.
    """
    return (NIESKONCZONOSC, None)  # TODO


# ══════════════════════════════════════════════════════ TESTY
def _test(opis, wynik_f, oczekiwane):
    try:
        wynik = wynik_f()
        ok = wynik == oczekiwane
    except Exception as blad:
        wynik, ok = f"błąd: {blad}", False
    print(f"  {'OK  ' if ok else 'ŹLE '} {opis} = {wynik}")
    if not ok:
        print(f"       oczekiwane: {oczekiwane}")
    return ok


def sprawdz():
    zaliczone = 0
    G = wczytaj_graf(G_TEKST)
    H = wczytaj_graf(H_TEKST, skierowany=True)

    print("Zadanie 1 — wczytywanie grafu")
    zaliczone += _test('G["C"]', lambda: G["C"], {"A": 2, "B": 1, "D": 8, "E": 10})
    zaliczone += _test('H["B"], H["T"]', lambda: (H["B"], H["T"]), ({"A": 3, "C": 8, "D": 5}, {}))

    print("\nZadanie 2 — stopnie wierzchołków")
    zaliczone += _test("stopnie(G)", lambda: stopnie(G),
                       {"A": 2, "B": 3, "C": 4, "D": 4, "E": 3, "F": 2})
    zaliczone += _test("stopnie(H)", lambda: stopnie(H),
                       {"S": 2, "A": 1, "B": 3, "C": 1, "T": 0, "D": 1})

    print("\nZadanie 3 — przeszukiwanie wszerz")
    zaliczone += _test('bfs_droga(G, "A", "F")', lambda: bfs_droga(G, "A", "F"), ["A", "B", "D", "F"])
    zaliczone += _test('bfs_droga(H, "S", "T")', lambda: bfs_droga(H, "S", "T"), ["S", "A", "C", "T"])
    zaliczone += _test('bfs_droga(H, "T", "S")', lambda: bfs_droga(H, "T", "S"), None)

    print("\nZadanie 4 — algorytm Dijkstry")
    zaliczone += _test('dijkstra(G, "A") — odległości', lambda: dijkstra(G, "A")[0],
                       {"A": 0, "B": 3, "C": 2, "D": 8, "E": 10, "F": 12})
    zaliczone += _test('dijkstra(H, "S") — odległości', lambda: dijkstra(H, "S")[0],
                       {"S": 0, "A": 5, "B": 2, "C": 6, "T": 8, "D": 7})

    print("\nZadanie 5 — odtwarzanie drogi")
    zaliczone += _test('droga A → F w G', lambda: droga(dijkstra(G, "A")[1], "A", "F"),
                       ["A", "C", "B", "D", "E", "F"])
    zaliczone += _test('droga S → T w H', lambda: droga(dijkstra(H, "S")[1], "S", "T"),
                       ["S", "B", "A", "C", "T"])
    zaliczone += _test('droga T → S w H', lambda: droga(dijkstra(H, "T")[1], "T", "S"), None)

    print("\nZadanie 6 — przez punkt (na ocenę wyższą)")
    zaliczone += _test('przez_punkt(H, "S", "D", "T")', lambda: przez_punkt(H, "S", "D", "T"),
                       (13, ["S", "B", "D", "T"]))
    zaliczone += _test('przez_punkt(H, "T", "S", "A")', lambda: przez_punkt(H, "T", "S", "A"),
                       (NIESKONCZONOSC, None))

    print(f"\nZaliczone: {zaliczone} z 14")
    if zaliczone == 14:
        print("Wszystko działa. Porównaj BFS z Dijkstrą: wypisz obie drogi A → F i ich koszty.")


if __name__ == "__main__":
    sprawdz()
