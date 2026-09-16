# -*- coding: utf-8 -*-
"""
Listy jako dynamiczne struktury danych — szkielet do ćwiczeń.
Klasa 3, informatyka w zakresie rozszerzonym, PCEiKZ Szczucin.

Uzupełnij miejsca oznaczone słowem TODO, a potem uruchom ten plik.
Testy na dole sprawdzą twoje rozwiązanie i wypiszą, co przechodzi,
a co nie. Nie zmieniaj treści testów — zmieniaj metody i funkcje.

Uwaga na słowo „lista". W tym pliku lista to WŁASNA struktura zbudowana
z węzłów połączonych odwołaniami, a nie wbudowany typ `list` Pythona.
Wbudowanej listy używamy tylko tam, gdzie testy proszą o zwrócenie
zwykłego ciągu wartości do porównania.
"""


class Wezel:
    """Jeden element listy: wartość i odwołanie do następnego węzła.

    Ta klasa jest gotowa — niczego w niej nie zmieniasz.
    """

    def __init__(self, wartosc):
        self.wartosc = wartosc
        self.nastepny = None

    def __repr__(self):
        return f"Wezel({self.wartosc!r})"


# ═══════════════════════════════════════════════════════ ZADANIE 1
class ListaJednokierunkowa:
    """Lista jednokierunkowa z odwołaniem do głowy.

    Zapamiętujemy tylko `glowa` — do każdego kolejnego węzła docieramy,
    idąc po odwołaniach `nastepny`. To jest właśnie dostęp sekwencyjny.
    """

    def __init__(self):
        self.glowa = None

    # ─────────────────────────────────────────── przeglądanie
    def jako_lista(self):
        """Zwraca wartości wszystkich węzłów po kolei, jako zwykłą listę.

        Dla listy 3 → 1 → 7 ma zwrócić [3, 1, 7], a dla pustej [].
        Przejdź po łańcuchu, zaczynając od `self.glowa`, i dopóki
        bieżący węzeł nie jest `None`, dopisuj jego wartość i przechodź
        do `nastepny`.
        """
        wynik = []
        # TODO: przejdź po łańcuchu węzłów i zbierz wartości
        return wynik

    # ─────────────────────────────────────────── wstawianie
    def dodaj_na_poczatek(self, wartosc):
        """Wstawia nowy węzeł przed dotychczasową głową.

        Ta metoda jest gotowa — służy za wzór do pozostałych.
        Zwróć uwagę, że nie zależy od długości listy: to jest O(1).
        """
        nowy = Wezel(wartosc)
        nowy.nastepny = self.glowa
        self.glowa = nowy

    def dodaj_na_koniec(self, wartosc):
        """Dopisuje nowy węzeł na końcu listy.

        Dwa przypadki: lista pusta (nowy węzeł zostaje głową) oraz
        lista niepusta (trzeba dojść do ostatniego węzła, czyli takiego,
        którego `nastepny` jest `None`, i podpiąć nowy pod niego).
        """
        # TODO
        pass

    def wstaw_po(self, szukana, wartosc):
        """Wstawia nowy węzeł zaraz za pierwszym węzłem o wartości `szukana`.

        Zwraca True, gdy się udało, i False, gdy takiej wartości nie ma.
        Kolejność podpinania odwołań ma znaczenie — jeśli najpierw
        nadpiszesz `nastepny` znalezionego węzła, stracisz resztę listy.
        """
        # TODO
        return False

    # ─────────────────────────────────────────── usuwanie
    def usun(self, wartosc):
        """Usuwa pierwszy węzeł o podanej wartości.

        Zwraca True, gdy usunięto, i False, gdy wartości nie było.
        Osobno obsłuż przypadek, w którym usuwaną wartość ma głowa.
        Poza tym idziesz listą, trzymając odwołanie do POPRZEDNIEGO
        węzła — bez niego nie da się „przepiąć" łańcucha.
        """
        # TODO
        return False

    # ─────────────────────────────────────────── pomocnicze
    def __len__(self):
        """Długość listy — liczona przejściem, bo nigdzie jej nie trzymamy."""
        ile, biezacy = 0, self.glowa
        while biezacy is not None:
            ile += 1
            biezacy = biezacy.nastepny
        return ile


# ═══════════════════════════════════════════════════════ ZADANIE 2
def symuluj_kolejke(zdarzenia):
    """Symuluje kolejkę do okienka, używając listy jednokierunkowej.

    `zdarzenia` to lista napisów:
      • "+Anna"  → do kolejki dochodzi Anna (na koniec)
      • "-"      → obsłużono osobę z początku kolejki

    Funkcja zwraca parę (obsluzeni, pozostali):
      • obsluzeni — lista imion w kolejności obsługiwania,
      • pozostali — lista imion tych, którzy nadal czekają.

    Obsługa pustej kolejki ("-", gdy nikogo nie ma) nie kończy się
    błędem — zdarzenie jest po prostu pomijane.

    Kolejka działa według zasady FIFO, więc dochodzenie na koniec
    realizuje `dodaj_na_koniec`, a obsługa — zdjęcie głowy.
    """
    kolejka = ListaJednokierunkowa()
    obsluzeni = []
    # TODO: przetwórz zdarzenia
    return obsluzeni, kolejka.jako_lista()


# ═══════════════════════════════════════════════════════ ZADANIE 3
def josephus(n, k):
    """Zadanie Flawiusza: n osób stoi w kole, odliczamy co k-tą i ona odpada.

    Zwraca numer osoby, która zostaje na końcu (numerujemy od 1).
    Odliczanie zaczynamy od osoby numer 1, czyli przy k = 2 pierwsza
    odpada osoba numer 2.

    Zbuduj listę CYKLICZNĄ — taką, w której `nastepny` ostatniego węzła
    wskazuje z powrotem na głowę. Wtedy nie trzeba pilnować końca koła:
    idziesz w kółko, co k-tego usuwasz, i kończysz, gdy zostanie jeden
    węzeł (czyli gdy jego `nastepny` wskazuje na niego samego).

    Wskazówka: żeby usunąć węzeł z listy jednokierunkowej, trzeba stać
    na tym POPRZEDNIM. Wygodnie jest więc odliczać k-1 kroków.
    """
    # TODO
    return None


# ═══════════════════════════════════════════════════════ TESTY
def _zbuduj(wartosci):
    """Pomocnicza: buduje listę z podanych wartości, dodając na początek."""
    lista = ListaJednokierunkowa()
    for w in reversed(wartosci):
        lista.dodaj_na_poczatek(w)
    return lista


def sprawdz():
    zaliczone, wszystkie = 0, 0

    def test(opis, warunek_fn):
        nonlocal zaliczone, wszystkie
        wszystkie += 1
        try:
            ok, wynik = warunek_fn()
        except Exception as blad:
            ok, wynik = False, f"błąd: {blad}"
        zaliczone += ok
        print(f"  {'OK  ' if ok else 'ŹLE '} {opis:46s} {wynik}")

    print("Zadanie 1 — lista jednokierunkowa")

    def t_przeglad():
        w = _zbuduj([3, 1, 7]).jako_lista()
        return w == [3, 1, 7], w
    test("przeglądanie 3 → 1 → 7", t_przeglad)

    def t_pusta():
        w = ListaJednokierunkowa().jako_lista()
        return w == [], w
    test("przeglądanie pustej listy", t_pusta)

    def t_koniec():
        lista = ListaJednokierunkowa()
        for x in ("a", "b", "c"):
            lista.dodaj_na_koniec(x)
        w = lista.jako_lista()
        return w == ["a", "b", "c"], w
    test("dodawanie na koniec do pustej listy", t_koniec)

    def t_wstaw():
        lista = _zbuduj([1, 2, 4])
        udalo = lista.wstaw_po(2, 3)
        w = lista.jako_lista()
        return (udalo is True and w == [1, 2, 3, 4]), w
    test("wstawianie 3 po wartości 2", t_wstaw)

    def t_wstaw_brak():
        lista = _zbuduj([1, 2])
        udalo = lista.wstaw_po(9, 99)
        return (udalo is False and lista.jako_lista() == [1, 2]), udalo
    test("wstawianie po wartości, której nie ma", t_wstaw_brak)

    def t_usun_srodek():
        lista = _zbuduj([1, 2, 3])
        udalo = lista.usun(2)
        w = lista.jako_lista()
        return (udalo is True and w == [1, 3]), w
    test("usuwanie ze środka", t_usun_srodek)

    def t_usun_glowe():
        lista = _zbuduj([1, 2, 3])
        lista.usun(1)
        w = lista.jako_lista()
        return w == [2, 3], w
    test("usuwanie głowy", t_usun_glowe)

    def t_usun_brak():
        lista = _zbuduj([1, 2])
        udalo = lista.usun(5)
        return (udalo is False and lista.jako_lista() == [1, 2]), udalo
    test("usuwanie wartości, której nie ma", t_usun_brak)

    print("\nZadanie 2 — kolejka do okienka")

    def t_kolejka():
        w = symuluj_kolejke(["+Anna", "+Bartek", "-", "+Cela", "-"])
        return w == (["Anna", "Bartek"], ["Cela"]), w
    test("dwie osoby obsłużone, jedna czeka", t_kolejka)

    def t_kolejka_pusta():
        w = symuluj_kolejke(["-", "+Ola", "-", "-"])
        return w == (["Ola"], []), w
    test("obsługa pustej kolejki nie psuje symulacji", t_kolejka_pusta)

    print("\nZadanie 3 — zadanie Flawiusza (lista cykliczna)")
    for n, k, oczekiwane in ((1, 3, 1), (5, 2, 3), (7, 3, 4), (10, 2, 5), (41, 3, 31)):
        def t_jos(n=n, k=k, oczekiwane=oczekiwane):
            w = josephus(n, k)
            return w == oczekiwane, f"josephus({n}, {k}) = {w}, oczekiwane {oczekiwane}"
        test(f"n = {n}, k = {k}", t_jos)

    print(f"\nZaliczone: {zaliczone} z {wszystkie}")
    if zaliczone == wszystkie:
        print("Wszystko działa. Zajrzyj teraz do zadań na ocenę celującą.")


if __name__ == "__main__":
    sprawdz()
