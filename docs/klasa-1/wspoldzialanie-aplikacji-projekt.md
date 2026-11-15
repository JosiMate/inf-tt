# Współdziałanie aplikacji – projekt zespołowy

!!! abstract "O tym temacie"

    **3 godziny lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **II.3b, II.3c, II.3d, II.4, IV.5**

    W zespołach po trzy–cztery osoby zbieracie albo dostajecie dane,
    analizujecie je we wspólnym arkuszu i przekazujecie wyniki dalej:
    do **raportu**, do **prezentacji** i do **korespondencji seryjnej**.
    Wykresy wklejacie **z łączem** — gdy zmienią się dane w arkuszu,
    zmienią się też w raporcie i na slajdzie. Tak pracują biura, szkoły
    i firmy: dane wpisuje się raz, a korzysta z nich wiele aplikacji.

    Oceniany jest nie tylko efekt, ale i to, **jak pracowałeś w zespole**.
    Dlatego każdy prowadzi własną kartę projektu i ma w arkuszu zespołu
    własną zakładkę z analizą.

    ??? abstract "Plan trzech lekcji"

        1. **Dane i analiza** — pytanie, dane (zbiór albo ankieta), role, schemat przepływu danych, analiza każdego w swojej zakładce (sekcje 1–5, ćwiczenia 1–2).
        2. **Integracja** — arkusz do Excela, wykresy z łączem w raporcie, test łącza, korespondencja seryjna (sekcje 6–7, ćwiczenia 3–4).
        3. **Prezentacja i wystąpienia** — slajdy z wykresem połączonym, oddanie folderu zespołu, wystąpienia (ćwiczenie 5).

        Szczegóły i to, co ma być gotowe po każdej lekcji: [Harmonogram](#4-harmonogram-trzy-lekcje).

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania (lekcja 1)"

    Odpowiedz w zeszycie, zanim zaczniesz projekt. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z tematu „Korespondencja seryjna”.** Z jakich dwóch składników powstaje korespondencja seryjna?
    2. **Z tematu „Wyciągamy wiedzę z danych”.** Jak w tabeli przestawnej policzyć, ile zamówień jest w każdej kategorii?
    3. **Z projektu w dziale II.** Jak sprawić, żeby numer „Rysunek 3” pod wykresem zmienił się sam, gdy wstawisz wcześniej inny rysunek?

    ??? success "Odpowiedzi"

        1. Z **dokumentu głównego** (stała treść i pola scalania) i ze **źródła danych** (tabela z nagłówkami kolumn, np. w arkuszu).
        2. Kategorię przeciągasz do **Wierszy**, a dowolne pole (np. numer zamówienia) do **Wartości** z funkcją **Licznik**.
        3. Wstawić **podpis automatyczny** (**Odwołania → Wstaw podpis**), a nie pisać numer ręcznie. Po zmianie: zaznacz wszystko i ++f9++.

!!! success "Kryteria sukcesu — sprawdź się na koniec projektu"

    Po tym projekcie:

    1. Wykonam zadania przypisane mi w planie zespołu i dotrzymam terminów.
    2. W swojej zakładce arkusza policzę coś funkcjami, zbuduję tabelę przestawną i opisany wykres, a pod nimi zapiszę wniosek.
    3. Wkleję wykres z arkusza do dokumentu z łączem, zmienię dane i pokażę, że wykres się zmienił.
    4. Przedstawię na wystąpieniu, co zespół odkrył w danych.
    5. :material-plus-circle: Narysuję schemat przepływu danych i uzasadnię, dlaczego każdą czynność robimy w tej, a nie innej aplikacji.
    6. :material-plus-circle: Przygotuję z wyników analizy źródło danych i przeprowadzę korespondencję seryjną z regułą Jeżeli.
    7. :material-star: Zbuduję quiz albo inne rozwiązanie, w którym dane same przechodzą przez kilka aplikacji — albo poprowadzę zespół jako lider.

## Jak czytać tę stronę

| Oznaczenie | Co znaczy |
| --- | --- |
| bez oznaczenia | wymagania konieczne i podstawowe — na ocenę 2 i 3 |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające — na ocenę 4 |
| :material-star: **dopełnienie** | wymagania dopełniające — na ocenę 5 |

---

## 1. Pytanie i dane

Projekt zaczyna się od **pytania**, na które odpowiadają dane — nie od
wykresu. Zespół wybiera jedną z dwóch dróg.

### Droga 1 — gotowy zbiór danych

Trzy zbiory z fikcyjnymi danymi. Każdy ma arkusz **Opis** z wyjaśnieniem
kolumn i pomysłami na pytania.

| Zbiór | Co zawiera | Do kogo korespondencja seryjna |
| --- | --- | --- |
| [:material-file-excel-outline: A. Sklep komputerowy](../pliki/wspoldzialanie/zbior-A-sklep-komputerowy.xlsx){ download="zbior-A-sklep-komputerowy.xlsx" } | 240 zamówień z trzech miesięcy, 60 klientów | listy z kodem rabatowym dla najlepszych klientów |
| [:material-file-excel-outline: B. Zawody lekkoatletyczne](../pliki/wspoldzialanie/zbior-B-zawody-lekkoatletyczne.xlsx){ download="zbior-B-zawody-lekkoatletyczne.xlsx" } | 72 zawodników, 104 starty w trzech konkurencjach | dyplomy dla miejsc 1–3 |
| [:material-file-excel-outline: C. Biblioteka szkolna](../pliki/wspoldzialanie/zbior-C-biblioteka-szkolna.xlsx){ download="zbior-C-biblioteka-szkolna.xlsx" } | 260 wypożyczeń, 80 czytelników | przypomnienia o zwrocie przetrzymanych książek |

### Droga 2 — własna ankieta

Zespół układa **anonimową** ankietę (6–10 pytań) w Formularzach Google
i zbiera odpowiedzi w klasie albo w kilku klasach — **do lekcji 2**.
Przykładowe tematy: jak dojeżdżamy do szkoły, ile czasu dziennie spędzamy
przed ekranem, co czytamy i oglądamy, jak uczymy się do sprawdzianów.

- Formularz zakłada osoba z kontem Google; w ustawieniach: **nie zbieraj adresów e-mail**.
- Pytania zamknięte (jednokrotny wybór, skala, liczba) — łatwo je policzyć. Najwyżej jedno pytanie otwarte.
- Odpowiedzi pobierasz: **Odpowiedzi → ⋮ (Więcej) → Pobierz odpowiedzi (.csv)**, otwierasz w Excelu przez **Dane → Z pliku tekstowego/CSV** — jak w temacie [Jak pobierać dane do arkusza](jak-pobierac-dane-do-arkusza-kalkulacyjnego.md) — i wklejacie do arkusza zespołu.
- Korespondencja seryjna: **jedna strona wyników dla każdej klasy**, która brała udział (źródło danych to tabela podsumowania: klasa, liczba odpowiedzi, średnie, odsetki).

!!! warning "Dane osobowe"

    W ankiecie **nie pytacie** o imię, nazwisko, adres, zdrowie ani o nic,
    co pozwala rozpoznać osobę. Imiona i nazwiska w zbiorach A–C są
    **wymyślone** — mimo to raport i prezentacja pokazują tylko wyniki
    zbiorcze, a korespondencja seryjna zostaje w folderze zespołu.

---

## 2. Przepływ danych między aplikacjami

:material-plus-circle: **rozszerzenie**

Każda aplikacja robi w projekcie to, w czym jest najlepsza, i przekazuje
wynik dalej:

```text
Formularze Google (ankieta) ──CSV──┐
zbiór danych .xlsx ────────────────┤
                                   ▼
             Arkusze Google — wspólna praca zespołu: dane, analizy, plan
                                   │  Plik → Pobierz → .xlsx (lekcja 2)
                                   ▼
             Excel — wykresy do raportu, tabela „Do scalania”
              │ wykres z łączem      │ wykres z łączem     │ źródło danych
              ▼                      ▼                     ▼
          Word — raport      PowerPoint — slajdy    Word — korespondencja seryjna → PDF
```

| Aplikacja | Co w niej robimy | Dlaczego tu |
| --- | --- | --- |
| Formularze Google | zbieramy odpowiedzi | każdy wypełnia na telefonie, odpowiedzi od razu są tabelą |
| Arkusze Google | dane, analizy, plan pracy | cały zespół pracuje naraz w jednym pliku, z domu też |
| Excel | ostateczne wykresy, źródło do scalania | wykresy z Excela da się wkleić **z łączem** do Worda i PowerPointa |
| Word | raport, korespondencja seryjna | style, podpisy, spisy; scalanie z arkuszem |
| PowerPoint | wystąpienie | wykres na slajdzie połączony z tymi samymi danymi |

### Trzy sposoby przeniesienia wykresu

| Sposób | Jak | Co się dzieje po zmianie danych w arkuszu |
| --- | --- | --- |
| **obraz** | Wklej specjalnie → Obraz | nic — to zdjęcie wykresu |
| **osadzenie** | opcja wklejania *… i osadź skoroszyt* | nic — kopia danych jest w dokumencie, a nie w arkuszu |
| **łącze** | ++ctrl+v++ albo opcja *… i połącz dane* | wykres pokazuje nowe dane po **Odśwież dane** |

!!! example "Przewiduj"

    Wykres wklejono do Worda raz jako obraz, raz z łączem. W Excelu
    sprzedaż za listopad zmieniono z 12 780 zł na 20 000 zł i plik
    zapisano. W Wordzie zaznaczasz oba wykresy i klikasz **Odśwież dane**
    tam, gdzie się da. Który słupek listopada urośnie?

    ??? success "Przewiduj, potem sprawdź wynik"

        Tylko na wykresie **z łączem**. Obraz to zdjęcie z chwili
        wklejenia — nie ma nawet przycisku **Odśwież dane**, bo Word nie
        wie, skąd obraz pochodzi.

---

## 3. Role w zespole

Każda osoba ma jedną rolę główną, ale **wszyscy analizują dane
i wszyscy występują**.

| Rola | Odpowiada za |
| --- | --- |
| **lider** | plan pracy w zakładce *Plan*, terminy, folder zespołu, oddanie projektu, kontakt z nauczycielem |
| **analityk** | dane: wklejenie, sprawdzenie, porządek kolumn; tabela *Do scalania*; poprawność formuł w całym arkuszu |
| **redaktor** | raport: tekst, wykresy z łączem, podpisy; korespondencja seryjna |
| **prelegent** | slajdy z wykresem połączonym, plan wystąpienia, pilnowanie czasu |

W zespole trzyosobowym rolę prelegenta dzielą między siebie redaktor
i analityk.

!!! tip "Zmiana ról"

    Kto chce pokazać, że potrafi pełnić **różne role** — wymaganie
    rozszerzające — przejmuje po lekcji 1 drugą rolę, np. analityk robi
    też korespondencję seryjną. Zapisujecie to w zakładce *Plan*
    i w kartach projektu obu osób.

---

## 4. Harmonogram — trzy lekcje

| Lekcja | Co robicie | Co ma być gotowe na koniec lekcji |
| :---: | --- | --- |
| **1** | droga i pytanie, role, dane w arkuszu zespołu, schemat przepływu, plan pracy; każdy — analiza w swojej zakładce; zespoły z ankietą — formularz i link dla ankietowanych | dane w zakładce *Dane* (albo formularz wysłany); w każdej zakładce osoby co najmniej jedna formuła i wykres; karta projektu: zadania 1–2 |
| **2** | pobranie arkusza do Excela, folder zespołu, test łącza (każdy), raport z wykresami z łączem, tabela *Do scalania* i korespondencja seryjna | raport w wersji roboczej z co najmniej dwoma wykresami z łączem; wynik scalania w PDF; karta: zadania 3–5 |
| **3** | slajdy z wykresem połączonym, ostatnie poprawki, wystąpienia zespołów — **4 minuty** i 2 minuty na pytania | folder zespołu oddany; wystąpienie; samoocena w karcie |

Między lekcjami pracujecie w domu — arkusz zespołu otwiera się z każdego
komputera.

---

## 5. Jak pracujecie w arkuszu zespołu

Każdy zespół dostaje ode mnie **dwa linki**: do arkusza zespołu (Arkusze
Google) i do raportu (Dokumenty Google). Otwierasz link i piszesz —
**bez logowania**, tak jak w projekcie z działu II. Arkusz ma przygotowane
zakładki:

| Zakładka | Co w niej jest | Kto pisze |
| --- | --- | --- |
| **Start** | droga, pytanie zespołu, numery w dzienniku i role | lider |
| **Plan** | zadanie, kto (numer), do kiedy, czy zrobione | lider, każdy odhacza swoje |
| **Przepływ** | tabela: aplikacja — co w niej robimy — co przekazujemy dalej | cały zespół |
| **Dane** | główna tabela zbioru (*Zamowienia*, *Wyniki*, *Wypozyczenia*) albo odpowiedzi z ankiety — **tylko do odczytu po lekcji 1** | analityk |
| **Klienci** / **Zawodnicy** / **Czytelnicy** | druga tabela zbioru — dodaje ją analityk (**+** na dole arkusza) pod nazwą z pliku | analityk |
| **nr …** | analiza jednej osoby: formuły, tabela przestawna, wykres, wniosek | każdy w swojej — wpisz numer w nazwie zakładki |
| **Do scalania** | tabela dla korespondencji seryjnej | analityk z redaktorem |

1. **Nie zmieniacie zakładki *Dane*** po jej wypełnieniu — analizy liczą się z niej formułami. Chcesz posortować albo przefiltrować? Zrób to w swojej zakładce (filtr albo funkcja `SORT`, `FILTER`).
2. **Uwagi do cudzej zakładki — komentarzem** (**Wstaw → Komentarz**) zaczynającym się od twojego numeru: „nr 7: w F2 brak $”.
3. **Nie wpisujecie imion i nazwisk** członków zespołu — tylko numery. Linku nie wysyłajcie nikomu spoza zespołu.

!!! tip "Nazwy funkcji w Arkuszach Google"

    W Arkuszach Google wpisujesz nazwy funkcji **po angielsku**, argumenty
    oddzielasz średnikiem — tak jak w Excelu. Po pobraniu pliku `.xlsx`
    Excel sam pokaże polskie nazwy.

    | Excel | Arkusze Google | Excel | Arkusze Google |
    | --- | --- | --- | --- |
    | `SUMA` | `SUM` | `LICZ.JEŻELI` | `COUNTIF` |
    | `ŚREDNIA` | `AVERAGE` | `SUMA.JEŻELI` | `SUMIF` |
    | `JEŻELI` | `IF` | `ŚREDNIA.JEŻELI` | `AVERAGEIF` |
    | `ZAOKR` | `ROUND` | `LICZ.WARUNKI` | `COUNTIFS` |
    | `WYSZUKAJ.PIONOWO` | `VLOOKUP` | `ILE.NIEPUSTYCH` | `COUNTA` |

    Tabela przestawna: **Wstaw → Tabela przestawna**; wykres: **Wstaw → Wykres**.

### Od lekcji 2: plik `.xlsx` i folder zespołu

Wykresy z łączem działają między plikami na dysku, dlatego na lekcji 2
analityk pobiera arkusz: **Plik → Pobierz → Microsoft Excel (.xlsx)**
i zakłada **folder zespołu**:

```text
zespol-3/
├── dane.xlsx              ← od tej chwili tu zmieniacie dane i wykresy
├── raport.docx            ← raport pobrany z Dokumentów Google, wykresy z łączem
├── prezentacja.pptx
├── korespondencja.docx    ← dokument główny korespondencji seryjnej
└── korespondencja.pdf     ← wynik scalania
```

Folder trzymacie na pendrivie albo w chmurze osoby z kontem i kopiujecie
na komputer, na którym pracujecie. Raport piszecie dalej w Dokumentach
Google, a wykresy wkleja redaktor w wersji `.docx` na lekcji 2 i 3.

---

## 6. Wykres z łączem w raporcie i na slajdzie

1. W Excelu (plik `dane.xlsx` z folderu zespołu) zaznacz wykres i skopiuj go: ++ctrl+c++.
2. W Wordzie albo PowerPoincie kliknij miejsce wklejenia i naciśnij ++ctrl+v++. Domyślna opcja wklejania wykresu to **Użyj motywu docelowego i połącz dane** — wykres dopasuje się do wyglądu dokumentu i zostanie połączony z plikiem Excela. Druga opcja z łączem, **Zachowaj formatowanie źródłowe i połącz dane**, zostawia wygląd z Excela.
3. Dodaj podpis: prawy przycisk na wykresie → **Wstaw podpis…**
4. Zmieniasz dane w Excelu i zapisujesz plik. W Wordzie zaznacz wykres → karta **Projektowanie wykresu → Odśwież dane**.

Jakie łącza ma dokument i do jakich plików prowadzą, sprawdzisz w
**Plik → Informacje → Edytuj łącza do plików**. Tam też zmienisz plik
źródłowy (**Zmień źródło…**), gdy folder trafi w inne miejsce.

!!! example "Przewiduj"

    Redaktor wkleił wykresy z łączem na komputerze w pracowni. W domu
    otwiera folder zespołu skopiowany z pendrive'a, zmienia dane w
    `dane.xlsx` i w Wordzie klika **Odśwież dane**. Co się stanie?

    ??? success "Przewiduj, potem sprawdź wynik"

        Prawdopodobnie Word **nie znajdzie pliku**: łącze pamięta pełną
        ścieżkę z komputera w pracowni, np. `D:\zespol-3\dane.xlsx`, a w
        domu folder ma inną ścieżkę. Wykres pokazuje wtedy ostatnie dane,
        jakie zapamiętał. Naprawa: **Plik → Informacje → Edytuj łącza do
        plików → Zmień źródło…** i wskazanie `dane.xlsx` w nowym miejscu.

---

## 7. Korespondencja seryjna z wyników analizy

:material-plus-circle: **rozszerzenie**

Źródłem danych nie musi być lista adresów wpisana ręcznie — może nim być
**wynik analizy**. Analityk przygotowuje w zakładce *Do scalania* zwykłą
tabelę (nie tabelę przestawną): pierwszy wiersz to nagłówki, potem jeden
wiersz = jeden dokument.

| Zbiór | Przykładowe kolumny w *Do scalania* |
| --- | --- |
| A. Sklep | ID klienta, Imię, Nazwisko, Płeć, Suma zakupów, Kod rabatowy |
| B. Zawody | Imię, Nazwisko, Płeć, Klasa, Konkurencja, Wynik, Jednostka, Miejsce |
| C. Biblioteka | Imię, Nazwisko, Płeć, Klasa, Tytuł, Termin zwrotu, Dni po terminie |
| Ankieta | Klasa, Liczba odpowiedzi, Średnia, Najczęstsza odpowiedź, Odsetek … |

Dane osób dobierasz funkcją wyszukiwania (`WYSZUKAJ.PIONOWO` albo
`WYSZUKAJ.X` w Excelu, `VLOOKUP` w Arkuszach) z arkusza *Klienci*,
*Zawodnicy* albo *Czytelnicy* — tak jak w temacie
[Zaawansowane formuły](zaawansowane-formuly.md).

W Wordzie, na karcie **Korespondencja**:

1. **Rozpocznij korespondencję seryjną → Listy** (dla dyplomów też).
2. **Wybierz adresatów → Użyj istniejącej listy…** → `dane.xlsx` → arkusz *Do scalania*.
3. Napisz treść i wstaw pola: **Wstaw pole scalania**.
4. Odmianę słów dobierz regułą: **Reguły → Jeżeli…Wtedy…W przeciwnym razie…** — np. jeśli *Płeć* = `K`, to „zajęła”, w przeciwnym razie „zajął”.
5. Sprawdź kilka rekordów: **Podgląd wyników**.
6. **Zakończ i scal → Edytuj pojedyncze dokumenty… → Wszystkie** — powstaje nowy dokument ze wszystkimi listami. Zapisz go jako `korespondencja.pdf` (**Plik → Zapisz jako → PDF**).

!!! example "Przewiduj"

    W zakładce *Do scalania* kolumna *Średnia* ma format z jednym miejscem
    po przecinku i w Excelu widać `4,3`. W komórce jest formuła
    `=ŚREDNIA(…)`, której dokładny wynik to 4,333333… Co pokaże pole
    «Średnia» w podglądzie korespondencji seryjnej?

    ??? success "Przewiduj, potem sprawdź wynik"

        Najpewniej długi ogon cyfr, np. `4,33333333333333`. Word pobiera
        z arkusza **wartość**, a nie to, co widać po sformatowaniu
        komórki — to ten sam problem co w temacie
        [Konsekwencje zaokrąglania liczb](konsekwencje-zaokraglania-liczb.md).
        Naprawa w źródle: `=ZAOKR(ŚREDNIA(…);1)`.

---

## 8. Quiz albo inne rozwiązanie z kilku aplikacji

:material-star: **dopełnienie**

Wymaganie na ocenę 5 to **rozwiązanie, w którym dane same przechodzą przez
kilka aplikacji**. Przykład — quiz z zaświadczeniami:

1. W Formularzach Google: **Ustawienia → Utwórz test**; przy pytaniach **Klucz odpowiedzi** i punkty. Pole „Pseudonim” zamiast imienia i nazwiska.
2. Klasa rozwiązuje quiz, a ty pobierasz odpowiedzi (CSV) i wklejasz je do zakładki w `dane.xlsx` (kolumna z wynikiem jest w pliku).
3. W Excelu liczysz procent wyniku i ocenę słowną funkcją `JEŻELI`.
4. Korespondencja seryjna: zaświadczenie dla każdego pseudonimu z wynikiem i zdaniem dobieranym regułą **Jeżeli** („zaliczony” / „spróbuj jeszcze raz”), zapis do PDF.
5. W raporcie: schemat tego przepływu, liczba uczestników, wykres z łączem z rozkładem wyników.

Inne rozwiązania, które spełniają to wymaganie — po uzgodnieniu ze mną:
generator dyplomów, który po dopisaniu nowego wyniku do arkusza daje nowy
komplet PDF; pulpit w Excelu z tabelą przestawną i fragmentatorem, którego
wykres jest połączony ze slajdem.

---

## 9. Wymagania wobec produktów

### Arkusz `dane.xlsx`

- zakładka *Dane* z danymi i nagłówkami kolumn; zakładka każdej osoby;
- w zakładce osoby: co najmniej **dwie różne funkcje** (np. `LICZ.JEŻELI`, `SUMA.JEŻELI`, `ŚREDNIA.JEŻELI`), **tabela przestawna**, **wykres** z tytułem i opisanymi osiami, **wniosek** jednym zdaniem;
- :material-plus-circle: zakładka *Przepływ* wypełniona; zakładka *Do scalania* liczona formułami z danych.

### Raport `raport.docx` — 2–3 strony

- strona tytułowa, pytanie zespołu, skąd są dane;
- co najmniej **dwa wykresy z łączem** z automatycznymi podpisami i krótki komentarz do każdego;
- wnioski — odpowiedź na pytanie zespołu;
- :material-plus-circle: schemat przepływu danych;
- :material-star: opis rozwiązania z sekcji 8.

### Prezentacja `prezentacja.pptx` — 4–5 slajdów na 4 minuty

- pytanie, dane, 2–3 najważniejsze wyniki, wniosek;
- co najmniej jeden wykres **z łączem** do `dane.xlsx`;
- notatki prelegenta.

### Korespondencja seryjna :material-plus-circle:

- dokument główny `korespondencja.docx` z polami scalania i co najmniej jedną regułą **Jeżeli**;
- wynik `korespondencja.pdf` — wszystkie dokumenty, bez długich ogonów cyfr.

!!! warning "Najczęstsze błędy w projektach"

    | Objaw | Przyczyna i naprawa |
    | --- | --- |
    | po zmianie danych wykres w raporcie się nie zmienia | wklejony jako obraz — wklej jeszcze raz ++ctrl+v++ z opcją *połącz dane*; albo nie kliknięto **Odśwież dane** |
    | „nie można odnaleźć pliku” przy odświeżaniu | folder zespołu jest w innym miejscu niż przy wklejaniu — **Edytuj łącza do plików → Zmień źródło…** |
    | formuły w zakładce osoby pokazują błąd po sortowaniu danych | ktoś sortował zakładkę *Dane* — cofnij (**Plik → Historia wersji**), sortuj w swojej zakładce |
    | `#NAME?` w Arkuszach Google | polska nazwa funkcji — w Arkuszach wpisuj nazwę angielską (tabela w sekcji 5) |
    | w korespondencji seryjnej `4,33333333333333` albo data w postaci `11/30/2026` | Word bierze wartość, nie format — `ZAOKR` w arkuszu; datę zamień na tekst funkcją `TEKST(…;"dd.mm.rrrr")` |
    | Word nie widzi arkusza *Do scalania* albo pól | tabela nie zaczyna się w A1 albo nie ma nagłówków; tabela przestawna zamiast zwykłej tabeli |
    | dyplom „zajął” dla zawodniczki | brak reguły **Jeżeli** albo w kolumnie *Płeć* jest `k` zamiast `K` — porównanie uwzględnia wielkość liter |
    | wszystko robi jedna osoba | każdy ma swoją zakładkę i swoje zadania w *Plan* od lekcji 1 — bez nich nie ma czego ocenić |

---

## 10. Jak oceniany jest projekt

Projekt oceniany jest **poziomami wymagań**. Każdy członek zespołu dostaje
**własną ocenę** — z produktów zespołu i z tego, co sam zrobił: z twojej
zakładki w arkuszu, z twoich zadań w *Plan*, z komentarzy podpisanych
twoim numerem i z karty projektu.

| Poziom | Co musisz pokazać | Ocena |
| :---: | --- | :---: |
| **K** | wykonałeś powierzone zadania; w twojej zakładce jest tabela z danymi, funkcja i prosty wykres | 2 |
| **P** | aktywnie pracowałeś: w twojej zakładce są dwie różne funkcje, tabela przestawna, opisany wykres i wniosek; wkleiłeś wykres z łączem i pokazałeś, że zmienia się z danymi; przedstawiłeś efekty na wystąpieniu | 3 |
| **R** | pełniłeś różne role i prezentowałeś efekty; zespół ma schemat przepływu z uzasadnieniem wyboru aplikacji, raport i prezentację z wykresami z łączem; przygotowałeś albo przeprowadziłeś korespondencję seryjną z regułą Jeżeli | 4 |
| **D** | byłeś liderem odpowiedzialnym za zespół i projekt **albo** zbudowałeś quiz lub inne rozwiązanie, w którym dane przechodzą przez kilka aplikacji (sekcja 8) | 5 |

Ocenę wyznacza najwyższy poziom spełniony w całości, razem z niższymi.
Zadanie na ocenę celującą jest opisane w spisie tematów, w zadaniach
działu V.

!!! warning "Projekt zespołowy nie jest ucieczką od pracy"

    Kto nie pracował, nie ma zakładki z analizą, zadań w planie ani
    komentarzy z numerem — a ja zaglądam do arkuszy zespołów na każdej
    lekcji. Zasady samodzielności i weryfikacji z
    [wymagań edukacyjnych](wymagania-i-bhp.md) dotyczą także projektów.

---

## Ćwiczenia

Ćwiczenia 1–2 robicie na lekcji 1, 3–4 na lekcji 2, 5 na lekcji 3.
Wyniki każdy wpisuje do swojej karty projektu.

### :material-console: Ćwiczenie 1 — pytanie, dane i przepływ

1. Wybierzcie drogę (zbiór A, B, C albo ankieta), sformułujcie pytanie i podzielcie role. Lider wypełnia zakładkę *Start*.
2. Analityk wkleja dane do zakładki *Dane*: otwórz plik zbioru w Excelu, w arkuszu z główną tabelą zaznacz dane (++ctrl+a++), skopiuj i wklej do komórki A1. Drugą tabelę zbioru wkleja tak samo do nowej zakładki o tej samej nazwie co w pliku. Zespół z ankietą — tworzy formularz i rozsyła link; do lekcji 2 analizuje kilka odpowiedzi testowych.
3. :material-plus-circle: Wypełnijcie zakładkę *Przepływ*: każda aplikacja, co w niej robicie, co przekazujecie dalej.
4. Lider wpisuje do *Plan* co najmniej osiem zadań z numerami osób i terminami.

### :material-console: Ćwiczenie 2 — moja analiza

W swojej zakładce **nr …** odpowiedz na jedno pytanie cząstkowe, np.
„Ile wypożyczeń miał każdy dział?”: dwie różne funkcje, tabela
przestawna, wykres z tytułem i opisanymi osiami, pod spodem wniosek
jednym zdaniem.

??? tip "Podpowiedź 1"

    Funkcje odwołują się do zakładki *Dane* — w Arkuszach Google tak:
    `=COUNTIF(Dane!F:F;"fantastyka")`. Nazwę zakładki z odstępem bierze się
    w apostrofy: `'Do scalania'!A2`.

??? tip "Podpowiedź 2"

    Tabela przestawna: zaznacz dane w zakładce *Dane* → **Wstaw → Tabela
    przestawna → Istniejący arkusz** → wskaż komórkę w swojej zakładce.
    W edytorze po prawej: **Wiersze** — np. *Dział*, **Wartości** — *Nr*
    z podsumowaniem **COUNTA**.

??? tip "Podpowiedź 3"

    Kolumny *Wartość* (ilość × cena) albo *Dni* (data zwrotu − data
    wypożyczenia) nie ma w danych — dodaj ją w swojej zakładce albo
    poproś analityka o kolumnę w *Dane* na lekcji 1, zanim inni zaczną
    liczyć. Wniosek to zdanie z liczbą: „Najwięcej przychodu dały myszy
    i klawiatury — 11 199 zł, czyli 31% sprzedaży”.

### :material-console: Ćwiczenie 3 — test łącza

Każdy robi to ćwiczenie sam, na kopii `dane.xlsx` z folderu zespołu.

1. Skopiuj swój wykres z Excela i wklej go do nowego dokumentu Worda dwa razy: ++ctrl+v++ (łącze) i **Wklej specjalnie → Obraz**.
2. Zmień w Excelu jedną liczbę, od której zależy wykres, i zapisz plik.
3. W Wordzie odśwież wykres z łączem. Zrób zrzut ekranu z oboma wykresami i oknem Excela.
4. Otwórz **Plik → Informacje → Edytuj łącza do plików** i odczytaj ścieżkę pliku źródłowego.

### :material-console: Ćwiczenie 4 — raport i korespondencja seryjna :material-plus-circle:

1. Redaktor pobiera raport z Dokumentów Google jako `.docx` do folderu zespołu i wkleja wykresy z łączem (sekcja 6).
2. Analityk przygotowuje zakładkę *Do scalania* formułami z danych (sekcja 7).
3. Redaktor albo osoba w drugiej roli przeprowadza korespondencję seryjną z regułą **Jeżeli** i zapisuje wynik do PDF.

??? tip "Podpowiedź 1"

    Zbiór B: posortuj wyniki w swojej kopii albo użyj filtra, żeby znaleźć
    miejsca 1–3 w każdej konkurencji osobno dla dziewcząt i chłopców.
    Pamiętaj: w biegu wygrywa **najkrótszy** czas.

??? tip "Podpowiedź 2"

    Zbiór C: dni po terminie to `=DATA(2026;11;30)-B2-30` (w Arkuszach
    Google `DATE`) dla książek bez daty zwrotu (stan danych na 30 listopada). Do scalania biorą się tylko
    wiersze z wynikiem większym od zera — skopiuj je jako wartości albo
    użyj **Edytuj listę adresatów** i odznacz pozostałe.

??? tip "Podpowiedź 3"

    Reguła w Wordzie: **Reguły → Jeżeli…Wtedy…W przeciwnym razie…** →
    Nazwa pola: *Płeć*, Porównanie: *Równa się*, Porównaj z: `K`, Wstaw
    ten tekst: `Szanowna Pani`, W przeciwnym razie: `Szanowny Panie`.
    Kody pól pokażesz i ukryjesz skrótem ++alt+f9++.

### :material-console: Ćwiczenie 5 — slajdy i wystąpienie

Prelegent buduje 4–5 slajdów z co najmniej jednym wykresem z łączem do
`dane.xlsx`. W 4 minuty pokażcie: pytanie, skąd dane, 2–3 wyniki,
przepływ danych między aplikacjami i wniosek. Na żywo zmieńcie jedną
liczbę w Excelu i odświeżcie wykres na slajdzie. Każdy mówi o swojej
części.

---

## Sprawdź się

Test z natychmiastową odpowiedzią. **Nie jest oceniany i nic nie wysyła.**

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Wykres wklejono do Worda z łączem. Gdzie są przechowywane jego dane?",
  "opcje": ["W dokumencie Worda — kopia danych", "W pliku Excela, z którego go skopiowano", "W chmurze Microsoftu", "Nigdzie — to obraz"],
  "poprawna": 1,
  "wyjasnienie": "Obiekt połączony korzysta z danych w pliku źródłowym, dlatego po zmianie arkusza i odświeżeniu wykres pokazuje nowe dane. Osadzony wykres ma kopię danych w dokumencie."
 },
 {
  "pytanie": "Po skopiowaniu folderu zespołu na inny komputer odświeżanie wykresu kończy się błędem. Co zrobić?",
  "opcje": ["Wkleić wykres jeszcze raz jako obraz", "Zmienić nazwę dokumentu Worda", "Plik → Informacje → Edytuj łącza do plików → Zmień źródło… i wskazać plik w nowym miejscu", "Zapisać dokument jako PDF"],
  "poprawna": 2,
  "wyjasnienie": "Łącze pamięta ścieżkę do pliku źródłowego. Po przeniesieniu folderu trzeba wskazać nowe położenie pliku."
 },
 {
  "pytanie": "Dlaczego zespół pracuje na danych w Arkuszach Google, a wykresy do raportu robi w Excelu?",
  "opcje": ["Arkusze Google nie mają wykresów", "Excel liczy dokładniej", "W Arkuszach Google nie ma tabel przestawnych", "Arkusze pozwalają pracować całemu zespołowi naraz, a wykres z Excela da się wkleić do Worda i PowerPointa z łączem"],
  "poprawna": 3,
  "wyjasnienie": "Każda aplikacja robi to, w czym jest najlepsza: wspólna praca w chmurze, łącza między plikami Office na dysku."
 },
 {
  "pytanie": "Komórka pokazuje 4,3, a pole korespondencji seryjnej 4,33333333333333. Gdzie najlepiej to naprawić?",
  "opcje": ["W arkuszu — funkcją ZAOKR w formule źródłowej", "W Wordzie — zmniejszyć czcionkę", "W arkuszu — przycisk „Zmniejsz liczbę miejsc dziesiętnych”", "Ręcznie poprawić każdy list po scaleniu"],
  "poprawna": 0,
  "wyjasnienie": "Word pobiera wartość komórki, a nie to, co widać po sformatowaniu. ZAOKR zmienia samą wartość."
 },
 {
  "pytanie": "Jak w korespondencji seryjnej uzyskać „zajęła” dla zawodniczek i „zajął” dla zawodników?",
  "opcje": ["Zrobić dwa osobne dokumenty główne", "Reguła Jeżeli…Wtedy…W przeciwnym razie… porównująca pole Płeć", "Napisać „zajął(-ęła)”", "Posortować dane według płci"],
  "poprawna": 1,
  "wyjasnienie": "Reguła sprawdza wartość pola w każdym rekordzie i wstawia odpowiedni tekst."
 },
 {
  "pytanie": "Jak ustalana jest ocena każdego członka zespołu?",
  "opcje": ["Wszyscy dostają ocenę za raport", "Ocenę wystawia lider", "Wyłącznie z wystąpienia", "Z produktów zespołu i z tego, co dana osoba zrobiła — zakładka z analizą, zadania w planie, komentarze i karta projektu"],
  "poprawna": 3,
  "wyjasnienie": "Każdy ma własną ocenę według poziomów wymagań; wkład każdej osoby widać w arkuszu zespołu i w karcie projektu."
 }
]
</script>
</div>

---

## Karta projektu

Kartę projektu prowadzi **każdy członek zespołu osobno** — przez wszystkie
trzy lekcje. Na jej podstawie i na podstawie arkusza zespołu ustalana jest
twoja ocena.

<div class="kp-podsumowanie" data-karta="wspoldzialanie-aplikacji-projekt"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę projektu"

    !!! info "Twoje odpowiedzi zostają na twoim komputerze"

        Karta prowadzona przez trzy lekcje to także praca w domu — zapisuj
        postęp do pliku przyciskiem **Zapisz do pliku** pod kartą.

    <div class="karta-pracy" data-karta="wspoldzialanie-aplikacji-projekt"></div>

### Jak oddać projekt

1. Lider pakuje **folder zespołu** do jednego pliku `.zip` (prawy przycisk
   na folderze → kompresuj do pliku ZIP) i oddaje go w
   **Dzienniku VULCAN → Zadania domowe**, w zadaniu *Projekt zespołowy — dział V*,
   najpóźniej w dniu wystąpień.
2. Każdy członek zespołu oddaje **swoją kartę projektu**: przyciskiem **Wyślij do
   nauczyciela** (z kodem z karteczki) albo jako plik Worda w tym samym zadaniu w dzienniku.

---

## Sprawdź, czy rozumiesz

??? question "Po co wklejać wykres z łączem, skoro można zrobić zrzut ekranu?"

    Bo dane się zmieniają: ankieta zbiera kolejne odpowiedzi, sklep
    sprzedaje dalej, ktoś znajduje błąd w danych. Z łączem poprawiasz
    liczbę raz, w arkuszu, a raport i slajd odświeżasz jednym
    poleceniem. Ze zrzutami każdą zmianę trzeba powtórzyć w każdym
    dokumencie — i łatwo o raport z innymi liczbami niż prezentacja.

??? question ":material-plus-circle: Kiedy lepiej osadzić wykres, a nie go połączyć?"

    Gdy dokument wysyłasz komuś, kto nie ma pliku źródłowego, a powinien
    móc zmienić wykres — osadzony wykres ma dane w sobie (kosztem
    większego pliku). Gdy dokument ma pokazać stan z konkretnego dnia
    i nie powinien się już zmieniać — osadzenie albo obraz. Łącze wybierasz,
    gdy dane będą się zmieniać, a pliki leżą razem w jednym folderze.

---

!!! info "Materiały uzupełniające"

    - Microsoft: [Wstawianie wykresu programu Excel w dokumencie programu Word](https://support.microsoft.com/pl-pl/office/wstawianie-wykresu-programu-excel-w-dokumencie-programu-word-41bf021e-ba7c-44ef-9914-0d7e88062257)
    - Microsoft: [Przygotowanie źródła danych programu Excel dla korespondencji seryjnej](https://support.microsoft.com/pl-pl/word/prepare-your-excel-data-source-for-a-word-mail-merge) i [Ustawianie reguł dla korespondencji seryjnej](https://support.microsoft.com/pl-PL/Word/set-the-rules-for-a-mail-merge)
    - Google: [Wyświetlanie odpowiedzi z formularza i zarządzanie nimi](https://support.google.com/docs/answer/139706?hl=pl)
    - Tematy działu: [Jak pobierać dane do arkusza](jak-pobierac-dane-do-arkusza-kalkulacyjnego.md), [Wyciągamy wiedzę z danych](wyciagamy-wiedze-z-danych.md), [Zaawansowane formuły](zaawansowane-formuly.md), [Korespondencja seryjna](korespondencja-seryjna.md)

*Zbiory danych są fikcyjne i wygenerowane do ćwiczeń. Stan sprawdzony 15 listopada 2026 r.*
