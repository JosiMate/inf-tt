# Wykorzystanie list w rozwiązywaniu problemów

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział II. Rozwiązywanie problemów z wykorzystaniem
    dynamicznych struktur danych · podstawa programowa **I.1, I.3, RI.2, RI.3,
    RI.4, RI.5, RI.10, II.1, RII.1, RII.2**

    Stos i kolejka z poprzednich tematów miały jedną wspólną cechę: wolno było
    ruszać tylko koniec. Lista zdejmuje to ograniczenie — element można wstawić
    i usunąć w dowolnym miejscu, i to bez przesuwania całej reszty.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. odróżnić listę jako strukturę dowiązaną od wbudowanej listy Pythona i powiedzieć, która jest tablicą
    2. wyjaśnić, czym jest węzeł i na czym polega sekwencyjny dostęp do danych
    3. zaimplementować listę jednokierunkową oraz operacje wstawiania, usuwania i przeglądania
    4. wyjaśnić, dlaczego do usunięcia węzła potrzebne jest odwołanie do jego poprzednika
    5. opisać listę dwukierunkową i cykliczną oraz wskazać problem, do którego każda z nich pasuje
    6. porównać listę z tablicą pod względem kosztu dostępu, wstawiania i usuwania — i uzasadnić wybór w konkretnym zadaniu
    7. rozwiązać zadanie Flawiusza, budując listę cykliczną

## 1. Dwa różne znaczenia słowa „lista"

To jest pierwsza rzecz do wyjaśnienia, bo inaczej cały temat wygląda na
wyważanie otwartych drzwi.

Kiedy w Pythonie piszesz `dane = [3, 1, 7]`, dostajesz **tablicę dynamiczną**:
ciągły obszar pamięci, w którym elementy leżą jeden za drugim. Stąd bierze się
jej największa zaleta — `dane[2]` znajduje element natychmiast, niezależnie od
tego, czy lista ma dziesięć elementów, czy milion. Wystarczy policzyć adres.

Stąd też bierze się jej wada. Żeby wstawić coś na początek, trzeba **przesunąć
wszystko pozostałe** o jedno miejsce w prawo.

**Lista dowiązana** — i to ją ma na myśli podstawa programowa — jest zbudowana
inaczej. Elementy leżą w pamięci gdziekolwiek, a spina je łańcuch odwołań:
każdy element trzyma wartość i wskazuje, gdzie jest następny.

| | tablica (lista Pythona) | lista dowiązana |
| --- | --- | --- |
| Rozmieszczenie w pamięci | ciągłe, element za elementem | dowolne, spięte odwołaniami |
| Dostęp do elementu numer *i* | natychmiastowy | trzeba przejść od początku |
| Wstawienie na początek | przesuwa całą resztę | przepięcie dwóch odwołań |
| Skąd wiadomo, gdzie koniec | z długości | ostatni węzeł wskazuje na nic |

!!! info "Po co się tego uczyć, skoro Python ma gotową listę"

    Po trzy rzeczy. Po pierwsze, **listy dowiązane są w środku** tego, czego
    używasz na co dzień: tak zbudowane są `collections.deque`, historia
    przeglądarki i cofanie zmian w edytorze. Po drugie, to jest **materiał
    maturalny** — na rozszerzeniu pojawiają się zadania, w których trzeba
    operować na wskaźnikach do węzłów. Po trzecie, dopiero porównanie obu
    struktur pozwala świadomie **wybrać** tę właściwą, zamiast zawsze sięgać
    po tę jedną, którą się zna.

## 2. Węzeł i łańcuch odwołań

Podstawowa cegiełka to **węzeł**: wartość plus odwołanie do następnego węzła.

```python
class Wezel:
    def __init__(self, wartosc):
        self.wartosc = wartosc
        self.nastepny = None      # na razie nic za nim nie stoi
```

Lista to odwołanie do **głowy**, czyli pierwszego węzła. Reszta wynika z niego:

```text
  glowa
    │
    ▼
  ┌─────┬───┐   ┌─────┬───┐   ┌─────┬───┐
  │  3  │ ──┼──▶│  1  │ ──┼──▶│  7  │ ╳ │
  └─────┴───┘   └─────┴───┘   └─────┴───┘
   wartość  odwołanie                 None
```

Żeby dostać się do siódemki, trzeba przejść przez trójkę i jedynkę — nie ma
drogi na skróty. To właśnie znaczy **dostęp sekwencyjny**: do elementu numer
*i* dochodzi się, przechodząc przez wszystkie wcześniejsze.

```python
biezacy = self.glowa
while biezacy is not None:
    print(biezacy.wartosc)
    biezacy = biezacy.nastepny
```

Ta pętla jest wzorcem, który wróci w każdej operacji na liście. Warunek
`is not None` jest tu ważniejszy, niż wygląda — to on rozpoznaje koniec
łańcucha.

## 3. Operacje na liście jednokierunkowej

=== "Wstawianie na początek"

    Najtańsza operacja, jaką lista ma do zaoferowania. Nowy węzeł przejmuje
    dotychczasową głowę jako swojego następnika i sam staje się głową.

    ```python
    def dodaj_na_poczatek(self, wartosc):
        nowy = Wezel(wartosc)
        nowy.nastepny = self.glowa
        self.glowa = nowy
    ```

    Dwa przypisania i koniec — **niezależnie od tego, czy lista ma trzy
    elementy, czy trzy miliony**. Tablica w tym miejscu musiałaby przesunąć
    wszystko.

=== "Wstawianie w środku"

    Nowy węzeł wchodzi między znaleziony węzeł a jego następnika.

    ```python
    def wstaw_po(self, szukana, wartosc):
        biezacy = self.glowa
        while biezacy is not None:
            if biezacy.wartosc == szukana:
                nowy = Wezel(wartosc)
                nowy.nastepny = biezacy.nastepny   # najpierw podepnij ogon
                biezacy.nastepny = nowy            # dopiero potem przepnij
                return True
            biezacy = biezacy.nastepny
        return False
    ```

=== "Usuwanie"

    Usunięcie węzła polega na tym, że **poprzednik zaczyna wskazywać na
    następnika**. Usunięty węzeł nie jest przez nic trzymany i znika.

    ```python
    def usun(self, wartosc):
        if self.glowa is None:
            return False
        if self.glowa.wartosc == wartosc:          # przypadek szczególny
            self.glowa = self.glowa.nastepny
            return True
        poprzedni = self.glowa
        while poprzedni.nastepny is not None:
            if poprzedni.nastepny.wartosc == wartosc:
                poprzedni.nastepny = poprzedni.nastepny.nastepny
                return True
            poprzedni = poprzedni.nastepny
        return False
    ```

!!! danger "Kolejność przypisań i zgubiony ogon"

    Przy wstawianiu w środku łatwo napisać to odwrotnie:

    ```python
    biezacy.nastepny = nowy            # ŹLE — jako pierwsze
    nowy.nastepny = biezacy.nastepny   # …a tu już nie ma czego podpiąć
    ```

    Po pierwszym wierszu nic już nie wskazuje na resztę listy. Drugi wiersz
    podpina nowy węzeł **sam pod siebie** i lista kończy się w tym miejscu.
    Zasada: **najpierw podepnij ogon do nowego węzła, dopiero potem przepnij
    poprzednika**.

!!! warning "Dlaczego usuwanie wymaga poprzednika"

    Mając w ręku sam węzeł do usunięcia, nie da się go usunąć — bo nie wiadomo,
    kto na niego wskazuje, a lista jednokierunkowa nie pozwala cofnąć się o krok.
    Dlatego w pętli trzymamy `poprzedni` i zaglądamy o jeden węzeł do przodu.
    W liście **dwukierunkowej** problem znika, bo każdy węzeł zna swojego
    poprzednika.

Koszt operacji — przez *n* oznaczamy długość listy:

| Operacja | Lista dowiązana | Tablica (lista Pythona) |
| --- | --- | --- |
| Odczyt elementu numer *i* | O(n) — trzeba dojść | **O(1)** |
| Wstawienie na początek | **O(1)** | O(n) — przesunięcie reszty |
| Wstawienie na koniec | O(n), chyba że trzymamy ogon | **O(1)** amortyzowane |
| Usunięcie, gdy stoimy na poprzedniku | **O(1)** | O(n) |
| Znalezienie wartości | O(n) | O(n) |

Wniosek nie brzmi „lista jest lepsza", tylko: **lista wygrywa tam, gdzie dużo
się wstawia i usuwa, a rzadko sięga po element z numerem**. Tablica wygrywa
w sytuacji odwrotnej.

## 4. Lista dwukierunkowa i cykliczna

=== "Dwukierunkowa"

    Każdy węzeł trzyma dwa odwołania: do następnika i do poprzednika.

    ```python
    class WezelDwu:
        def __init__(self, wartosc):
            self.wartosc = wartosc
            self.nastepny = None
            self.poprzedni = None
    ```

    Co to daje: można iść w obie strony, a usunięcie węzła, który już się ma,
    kosztuje O(1) — bez szukania poprzednika. Płaci się za to **pamięcią**
    (drugie odwołanie w każdym węźle) i **uwagą**: przy każdej zmianie trzeba
    poprawić dwa odwołania zamiast jednego, a pomyłka rozspójnia listę tak,
    że przejście w jedną stronę daje inny wynik niż w drugą.

    Do czego pasuje: historia przeglądarki (wstecz i dalej), cofanie
    i ponawianie zmian w edytorze, odtwarzacz z poprzednim i następnym utworem.

=== "Cykliczna"

    Ostatni węzeł wskazuje z powrotem na głowę — łańcuch zamyka się w koło.

    ```python
    ostatni.nastepny = glowa
    ```

    Znika pojęcie końca, więc **znika warunek brzegowy**: nie trzeba sprawdzać,
    czy doszliśmy do `None` — po prostu idzie się dalej. Zamiast tego trzeba
    pilnować, żeby nie krążyć w nieskończoność: warunkiem zakończenia jest
    zwykle liczba elementów albo to, że został jeden węzeł wskazujący sam na
    siebie.

    Do czego pasuje: wszystko, co dzieje się „w kółko" — kolejka graczy przy
    stole, przydzielanie czasu procesora kolejnym zadaniom, zadanie Flawiusza
    z sekcji 6.

=== "Jak wybrać"

    | Problem | Rodzaj listy | Dlaczego |
    | --- | --- | --- |
    | Kolejka do okienka | jednokierunkowa | wchodzi się z jednej strony, wychodzi z drugiej |
    | Cofanie zmian w edytorze | dwukierunkowa | trzeba umieć wrócić o krok |
    | Kolejka graczy przy stole | cykliczna | po ostatnim znów idzie pierwszy |
    | Lista obecności do odczytania po numerze | żadna — użyj tablicy | liczy się dostęp po indeksie |

    Ostatni wiersz jest tu celowo. **Dobranie struktury to także umiejętność
    stwierdzenia, że lista nie jest potrzebna.**

## 5. Ile naprawdę kosztuje wstawianie na początek

Tabela z sekcji 3 to teoria. Na lekcji sprawdzasz ją pomiarem: wstawiasz
2000 elementów na początek wbudowanej listy Pythona i mierzysz czas dla
list o różnej długości początkowej.

```python
import timeit

for n in (10_000, 50_000, 100_000):
    czas = timeit.timeit(
        "for x in range(2000): dane.insert(0, x)",
        setup=f"dane = list(range({n}))",
        number=3) / 3
    print(f"n = {n:>7}   {czas * 1000:7.1f} ms")
```

Zobaczysz, że **czas rośnie mniej więcej proporcjonalnie do `n`**: przy liście
pięć razy dłuższej te same 2000 wstawień zajmuje około pięciu razy więcej
czasu. To jest O(n) na każde wstawienie, zmierzone we własnym komputerze.

Powtórz ten sam pomiar dla `dane.append(x)` — czas nie będzie zależał od `n`.
Różnica między tymi dwoma wykresami jest całą treścią tej lekcji.

## 6. Zadanie Flawiusza

Historia jest taka: Józef Flawiusz, historyk żydowski z I wieku, miał wraz
z czterdziestoma towarzyszami wpaść w ręce Rzymian. Postanowili odliczać w kole
i co trzeci miał ginąć z ręki następnego. Flawiusz — jak sam pisze — stanął
w miejscu, w którym zostaje się do końca.

Problem w wersji szkolnej: **n osób stoi w kole, odliczamy co k-tą i ona
odpada. Kto zostaje?**

Dla n = 7 i k = 3 kolejno odpadają osoby 3, 6, 2, 7, 5, 1, a zostaje **4**.

Lista cykliczna nadaje się tu idealnie, bo koło jest w tym zadaniu dosłowne.
Sposób postępowania:

1. zbuduj listę węzłów o numerach od 1 do n i domknij ją w koło;
2. ustaw się **przed** osobą numer 1 — czyli na ostatnim węźle;
3. dopóki nie został jeden węzeł: przejdź k−1 kroków i usuń następnika;
4. zwróć wartość węzła, który został.

!!! question "Dlaczego k−1, a nie k"

    Bo do usunięcia węzła trzeba stać na jego poprzedniku. Przejście k−1 kroków
    stawia cię dokładnie przed osobą, która ma odpaść — i wtedy jedno przepięcie
    ją usuwa. To ten sam mechanizm co w sekcji 3, tylko bez końca listy, o który
    trzeba by się martwić.

## Ćwiczenia

Pobierz szkielet z gotowymi testami. Uzupełniasz metody i funkcje oznaczone
słowem TODO, uruchamiasz plik i od razu widzisz, co przechodzi.

[:material-language-python: Szkielet z testami (.py)](../pliki/listy-szkielet.py){ .md-button .md-button--primary download="listy-szkielet.py" }

!!! note "Ćwiczenie 1. Lista jednokierunkowa"

    Uzupełnij w klasie `ListaJednokierunkowa` cztery miejsca: `jako_lista`,
    `dodaj_na_koniec`, `wstaw_po` i `usun`. Osiem pierwszych testów sprawdza
    dokładnie te metody, razem z przypadkami brzegowymi: pusta lista, usuwanie
    głowy, szukanie wartości, której nie ma.

    `dodaj_na_poczatek` jest już napisane — przeczytaj je najpierw, bo reszta
    działa na tej samej zasadzie.

!!! note "Ćwiczenie 2. Kolejka do okienka"

    Uzupełnij `symuluj_kolejke`. Funkcja dostaje listę zdarzeń: `"+Anna"`
    znaczy, że Anna staje na końcu kolejki, a `"-"` — że obsłużono osobę
    z początku. Zwraca obsłużonych w kolejności i tych, którzy zostali.

    Zwróć uwagę, gdzie w tej symulacji jest FIFO, a gdzie LIFO — i dlaczego
    dochodzenie na koniec kosztuje tu więcej niż obsługa z początku.

!!! note "Ćwiczenie 3. Zadanie Flawiusza"

    Uzupełnij `josephus(n, k)`, budując listę cykliczną. Pięć testów obejmuje
    także przypadek n = 1 (nikt nie odpada) oraz oryginalne n = 41, k = 3.

    Gdy komplet piętnastu testów świeci na zielono, sprawdź na kartce wynik
    dla n = 7 i k = 3, prowadząc zapis kolejnych odpadających — musi zgadzać
    się z sekcją 6.

!!! tip "Ćwiczenie 4. Pomiar"

    Wykonaj pomiar z sekcji 5 dla `insert(0, x)` oraz dla `append(x)`. Zapisz
    czasy dla trzech długości listy i odpowiedz, która z nich zachowuje się
    jak O(1), a która jak O(n) — na podstawie własnych liczb, nie tabeli
    z podręcznika.

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Czym w rzeczywistości jest wbudowany typ list w Pythonie?",
    "typ": "jedna",
    "opcje": [
      "Listą jednokierunkową",
      "Tablicą dynamiczną — elementy leżą w pamięci obok siebie",
      "Listą dwukierunkową",
      "Listą cykliczną"
    ],
    "poprawna": 1,
    "wyjasnienie": "Dlatego dane[i] działa natychmiast, a insert(0, x) musi przesunąć całą resztę. Lista dowiązana zachowuje się dokładnie odwrotnie."
  },
  {
    "pytanie": "Co oznacza sekwencyjny dostęp do danych na liście?",
    "typ": "jedna",
    "opcje": [
      "Dane są posortowane rosnąco",
      "Do elementu numer i dochodzi się, przechodząc przez wszystkie wcześniejsze",
      "Elementy są numerowane po kolei od zera",
      "Listę można przeglądać tylko raz"
    ],
    "poprawna": 1,
    "wyjasnienie": "Węzły leżą w pamięci gdziekolwiek, więc nie da się policzyć adresu i trzeba iść po łańcuchu odwołań."
  },
  {
    "pytanie": "Po czym poznajesz ostatni węzeł listy jednokierunkowej?",
    "typ": "jedna",
    "opcje": [
      "Jego wartość jest pusta",
      "Jego odwołanie nastepny wskazuje na None",
      "Jest zapamiętany w polu ogon",
      "Jego odwołanie nastepny wskazuje na głowę"
    ],
    "poprawna": 1,
    "wyjasnienie": "Wskazanie na głowę oznaczałoby listę cykliczną. W zwykłej jednokierunkowej łańcuch kończy się na None."
  },
  {
    "pytanie": "Wstawiasz węzeł w środek listy. Która kolejność przypisań jest poprawna?",
    "typ": "jedna",
    "opcje": [
      "Najpierw nowy.nastepny = biezacy.nastepny, potem biezacy.nastepny = nowy",
      "Najpierw biezacy.nastepny = nowy, potem nowy.nastepny = biezacy.nastepny",
      "Kolejność nie ma znaczenia",
      "Trzeba najpierw usunąć biezacy, a potem wstawić dwa węzły"
    ],
    "poprawna": 0,
    "wyjasnienie": "Odwrotna kolejność gubi ogon: po przepięciu poprzednika nic już nie wskazuje na resztę listy, a nowy węzeł podpina się sam pod siebie."
  },
  {
    "pytanie": "Dlaczego do usunięcia węzła z listy jednokierunkowej potrzebny jest jego poprzednik?",
    "typ": "jedna",
    "opcje": [
      "Bo trzeba zwolnić pamięć w odpowiedniej kolejności",
      "Bo to poprzednik musi zacząć wskazywać na następnika usuwanego węzła",
      "Bo Python nie pozwala usuwać obiektów, do których coś wskazuje",
      "Bo inaczej lista przestanie być posortowana"
    ],
    "poprawna": 1,
    "wyjasnienie": "Z samego węzła nie da się dojść do tego, kto na niego wskazuje — lista jednokierunkowa nie pozwala cofnąć się o krok. W dwukierunkowej problem znika."
  },
  {
    "pytanie": "Która operacja na liście dowiązanej jest tańsza niż na tablicy?",
    "typ": "jedna",
    "opcje": [
      "Odczyt elementu o podanym numerze",
      "Wstawienie na początek",
      "Sprawdzenie długości",
      "Posortowanie elementów"
    ],
    "poprawna": 1,
    "wyjasnienie": "Wstawienie na początek listy to przepięcie dwóch odwołań, czyli O(1). Tablica musi przesunąć wszystkie pozostałe elementy, czyli O(n)."
  },
  {
    "pytanie": "Do którego problemu najlepiej pasuje lista cykliczna?",
    "typ": "jedna",
    "opcje": [
      "Odczytywanie listy obecności po numerze w dzienniku",
      "Cofanie zmian w edytorze tekstu",
      "Przydzielanie kolejki graczy siedzących wokół stołu",
      "Wyszukiwanie największej wartości w zbiorze"
    ],
    "poprawna": 2,
    "wyjasnienie": "Po ostatnim graczu znów idzie pierwszy, więc koło jest tu dosłowne. Cofanie zmian to lista dwukierunkowa, a odczyt po numerze to zadanie dla tablicy."
  },
  {
    "pytanie": "W zadaniu Flawiusza odliczasz co k-tą osobę. Dlaczego w pętli robisz k−1 kroków?",
    "typ": "jedna",
    "opcje": [
      "Bo numerowanie zaczyna się od zera",
      "Bo żeby usunąć węzeł, trzeba stać na jego poprzedniku",
      "Bo pierwsza osoba nigdy nie odpada",
      "Bo ostatni krok wykonuje się poza pętlą"
    ],
    "poprawna": 1,
    "wyjasnienie": "Po k−1 krokach stoisz dokładnie przed osobą, która ma odpaść, i jedno przepięcie odwołania ją usuwa."
  }
]
</script>
</div>

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj
go przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="listy"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="listy"></div>

---

*Zadanie Flawiusza opisał sam Józef Flawiusz w „Wojnie żydowskiej" (I w. n.e.);
w matematyce funkcjonuje jako problem Josephusa. Listy dowiązane jako struktura
danych pojawiły się w języku IPL Allena Newella, Cliffa Shawa i Herberta Simona
w latach pięćdziesiątych XX wieku.*
