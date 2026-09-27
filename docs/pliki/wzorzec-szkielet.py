# -*- coding: utf-8 -*-
"""
Wyszukiwanie wzorca w tekście — szkielet do ćwiczeń.
Klasa 3, informatyka w zakresie rozszerzonym, PCEiKZ Szczucin.

Uzupełnij funkcje oznaczone słowem TODO, a potem uruchom ten plik.
Testy na dole sprawdzą twoje rozwiązanie i wypiszą, co przechodzi,
a co nie. Nie zmieniaj treści testów — zmieniaj funkcje.

Umowa co do wyników: funkcje wyszukujące zwracają PARĘ
    (lista pozycji wystąpień, liczba porównań znaków)
Pozycje liczymy od zera i podajemy wszystkie, także nakładające się.
Porównanie znaków to każde sprawdzenie, czy znak tekstu jest równy
znakowi wzorca — i to udane, i to nieudane. Testy sprawdzają osobno
pozycje i osobno liczbę porównań, więc licznik musi stać dokładnie tam,
gdzie jest porównanie.
"""


# ─────────────────────────────────────────────────────── ZADANIE 1
def naiwny(tekst, wzorzec):
    """Algorytm naiwny.

    Dla każdego ustawienia s = 0, 1, …, n − m porównuj znaki od lewej:
    tekst[s + j] z wzorzec[j] dla j = 0, 1, … — przy pierwszej różnicy
    przerwij to ustawienie. Gdy zgodne są wszystkie m znaków, s jest
    pozycją wystąpienia. Potem przesuń wzorzec o 1.
    """
    n, m = len(tekst), len(wzorzec)
    pozycje, porownania = [], 0
    # TODO
    return pozycje, porownania


# ─────────────────────────────────────────────────────── ZADANIE 2
def tablica_pi(wzorzec):
    """Tablica prefikso-sufiksów (funkcja prefiksowa) dla algorytmu KMP.

    pi[q] = długość najdłuższego WŁAŚCIWEGO prefiksu napisu wzorzec[0..q],
    który jest jednocześnie jego sufiksem. Dla "ABABAC" → [0, 0, 1, 2, 3, 0].

    k to długość obecnie dopasowanego prefiksu. Dla q = 1, 2, …, m − 1:
      • dopóki k > 0 i wzorzec[k] != wzorzec[q] → k = pi[k − 1]
      • jeżeli wzorzec[k] == wzorzec[q] → k += 1
      • pi[q] = k
    """
    pi = [0] * len(wzorzec)
    # TODO
    return pi


# ─────────────────────────────────────────────────────── ZADANIE 3
def kmp(tekst, wzorzec):
    """Algorytm Knutha–Morrisa–Pratta.

    q = liczba znaków wzorca dopasowanych do tej pory. Dla każdego
    znaku tekstu tekst[i], po kolei, bez cofania się:
      • porównaj tekst[i] z wzorzec[q]   ← jedno porównanie
      • zgodne → q += 1 i przejdź do następnego znaku tekstu
      • różne i q == 0 → przejdź do następnego znaku tekstu
      • różne i q > 0 → q = pi[q − 1] i porównaj tekst[i] jeszcze raz
      • gdy q == m: wystąpienie na pozycji i − m + 1, potem q = pi[q − 1]
    Przechodzimy przez CAŁY tekst — bez kończenia wcześniej.
    """
    n, m = len(tekst), len(wzorzec)
    pi = tablica_pi(wzorzec)
    pozycje, porownania = [], 0
    # TODO
    return pozycje, porownania


# ─────────────────────────────────── ZADANIE 4 (na ocenę wyższą)
def horspool(tekst, wzorzec):
    """Algorytm Boyera–Moore'a–Horspoola.

    Tablica przesunięć: dla każdego znaku c na pozycjach k = 0 … m − 2
    wzorca przesuniecie[c] = m − 1 − k (późniejsze wpisy nadpisują
    wcześniejsze). Znak, którego tam nie ma, daje przesunięcie m.

    Dla ustawienia s porównuj znaki OD KOŃCA wzorca (j = m − 1, m − 2, …),
    przy pierwszej różnicy przerwij. Niezależnie od wyniku przesuń wzorzec
    o przesuniecie[tekst[s + m − 1]] — znaku tekstu pod końcem wzorca.
    """
    n, m = len(tekst), len(wzorzec)
    pozycje, porownania = [], 0
    # TODO
    return pozycje, porownania


# ─────────────────────────────────────────────────────── ZADANIE 5
def jest_rotacja(a, b):
    """Czy napis b powstaje z a przez przeniesienie kilku początkowych
    znaków na koniec? "cdeab" jest rotacją "abcde", "abced" — nie jest.

    Da się to rozstrzygnąć JEDNYM wyszukiwaniem wzorca w odpowiednio
    przygotowanym tekście — użyj swojej funkcji kmp. Nie używaj pętli
    po wszystkich rotacjach ani operatora in. Rotacja ma tę samą długość
    co napis wyjściowy.
    """
    return False  # TODO


# ═══════════════════════════════════════════════════════ TESTY
TESTY = [
    # tekst, wzorzec, pozycje, porównania: naiwny, kmp, horspool
    ("ABRAKADABRA", "ABRA", [0, 7], 16, 13, 9),
    ("banana", "ana", [1, 3], 8, 6, 7),
    ("aaaaaaaaab", "aaab", [6], 28, 16, 10),
    ("abc", "d", [], 3, 3, 3),
    ("aaaa", "aa", [0, 1, 2], 6, 4, 6),
    ("GCATCGCAGAGAGTATACAGTACG", "GCAGAGAG", [5], 30, 27, 21),
]

TESTY_PI = [
    ("ABABAC", [0, 0, 1, 2, 3, 0]),
    ("ABABCABAB", [0, 0, 1, 2, 0, 1, 2, 3, 4]),
    ("AABAAAB", [0, 1, 0, 1, 2, 2, 3]),
    ("abcd", [0, 0, 0, 0]),
]

TESTY_ROTACJI = [
    ("abcde", "cdeab", True),
    ("abcde", "abced", False),
    ("kajak", "akkaj", True),
    ("abc", "abcabc", False),
]


def _test_wyszukiwania(nazwa, funkcja, kolumna):
    zaliczone = 0
    for wiersz in TESTY:
        tekst, wzorzec, pozycje = wiersz[:3]
        porownania = wiersz[kolumna]
        try:
            poz, por = funkcja(tekst, wzorzec)
            ok_p, ok_c = poz == pozycje, por == porownania
        except Exception as blad:
            poz, por, ok_p, ok_c = f"błąd: {blad}", "—", False, False
        print(f"  {'OK  ' if ok_p else 'ŹLE '} {tekst[:14]:14s} {wzorzec:9s} pozycje {str(poz):10s}"
              f"   {'OK  ' if ok_c else 'ŹLE '} porównań {por} (oczekiwane {porownania})")
        zaliczone += ok_p + ok_c
    return zaliczone


def sprawdz():
    zaliczone, wszystkie = 0, 3 * 2 * len(TESTY) + len(TESTY_PI) + len(TESTY_ROTACJI)

    print("Zadanie 1 — algorytm naiwny")
    zaliczone += _test_wyszukiwania("naiwny", naiwny, 3)

    print("\nZadanie 2 — tablica π")
    for wzorzec, oczekiwane in TESTY_PI:
        try:
            wynik = tablica_pi(wzorzec)
            ok = wynik == oczekiwane
        except Exception as blad:
            wynik, ok = f"błąd: {blad}", False
        print(f"  {'OK  ' if ok else 'ŹLE '} {wzorzec:10s} → {wynik}   (oczekiwane {oczekiwane})")
        zaliczone += ok

    print("\nZadanie 3 — algorytm KMP")
    zaliczone += _test_wyszukiwania("kmp", kmp, 4)

    print("\nZadanie 4 — algorytm Horspoola (na ocenę wyższą)")
    zaliczone += _test_wyszukiwania("horspool", horspool, 5)

    print("\nZadanie 5 — rotacja napisu")
    for a, b, oczekiwane in TESTY_ROTACJI:
        try:
            wynik = jest_rotacja(a, b)
            ok = wynik is oczekiwane
        except Exception as blad:
            wynik, ok = f"błąd: {blad}", False
        print(f"  {'OK  ' if ok else 'ŹLE '} jest_rotacja({a!r}, {b!r}) = {wynik}   (oczekiwane {oczekiwane})")
        zaliczone += ok

    print(f"\nZaliczone: {zaliczone} z {wszystkie}")
    if zaliczone == wszystkie:
        print("Wszystko działa. Uruchom porownaj() — i zajrzyj do zadań na ocenę celującą.")


# ═══════════════════════════════════════════════════════ POMIAR
def _dna(dlugosc, ziarno=2026):
    """Pseudolosowa sekwencja DNA — zawsze ta sama dla tego samego ziarna."""
    x, wynik = ziarno, []
    for _ in range(dlugosc):
        x = (1103515245 * x + 12345) % 2 ** 31
        wynik.append("ACGT"[x >> 16 & 3])
    return "".join(wynik)


PAN_TADEUSZ = ("Litwo! Ojczyzno moja! ty jesteś jak zdrowie. Ile cię trzeba cenić, "
               "ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie "
               "widzę i opisuję, bo tęsknię po tobie. ") * 20


def porownaj():
    """Liczba porównań trzech algorytmów na czterech zestawach danych.

    Wywołaj ją, dopisując porownaj() na końcu pliku.
    """
    dna = _dna(5000)
    zestawy = [
        ("tekst polski", PAN_TADEUSZ, "tęsknię po tobie"),
        ("DNA", dna, dna[3000:3012]),
        ("najgorszy dla naiwnego", "a" * 5000, "a" * 11 + "b"),
        ("najgorszy dla Horspoola", "a" * 5000, "b" + "a" * 11),
    ]
    print(f"\n{'dane':24s} {'n':>6s} {'m':>3s} {'naiwny':>9s} {'KMP':>9s} {'Horspool':>9s}")
    for nazwa, tekst, wzorzec in zestawy:
        wyniki = [f(tekst, wzorzec)[1] for f in (naiwny, kmp, horspool)]
        print(f"{nazwa:24s} {len(tekst):6d} {len(wzorzec):3d}" + "".join(f"{w:9d}" for w in wyniki))


if __name__ == "__main__":
    sprawdz()
