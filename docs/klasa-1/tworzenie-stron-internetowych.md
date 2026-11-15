# Tworzenie stron internetowych

!!! abstract "O tym temacie"

    **3 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **II.3a**, **II.3f**

    Każda strona, którą otwierasz — dziennik, sklep, ta strona — to zwykły
    plik tekstowy z kodem **HTML**, który mówi przeglądarce, *co* jest na
    stronie, i plik **CSS**, który mówi, *jak* to ma wyglądać. Na tych
    lekcjach napiszesz własną stronę od zera w Notatniku albo w VS Code:
    z nagłówkami, listą, tabelą i menu, nadasz jej wygląd arkuszem stylów,
    ułożysz elementy w rzędy i siatkę, sprawdzisz ją na ekranie telefonu
    i opublikujesz w internecie.

    ??? abstract "Plan trzech lekcji"

        | Lekcja | Sekcje strony | Ćwiczenia | Zadania karty |
        | --- | --- | --- | --- |
        | 1 | 1–3: jak działa strona, szkielet HTML5 i semantyka, listy, tabele, odnośniki, obrazy | 1–2 | 1, początek 3 |
        | 2 | 4–6: arkusz stylów, selektory i kaskada, model pudełkowy | 3–4 | 2, 4 |
        | 3 | 7–10: Flexbox, Grid, strona na telefonie, dostępność, publikacja | 5–6 | 3, 5 |

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzednich lekcji.** Czym różni się szyfrowanie od funkcji skrótu?
    2. **Sprzed kilku tygodni.** Wpisujesz w przeglądarce `pceikz.pl`. Która usługa zamienia tę nazwę na adres IP i jakim protokołem przyjdzie strona, gdy przy adresie widać kłódkę?
    3. **Z dawniejszych tematów.** Dlaczego w Wordzie tytuł rozdziału formatuje się stylem *Nagłówek 1*, a nie samym pogrubieniem i większą czcionką?

    ??? success "Odpowiedzi"

        1. Szyfrowanie da się odwrócić kluczem; skrótu nie da się odwrócić — to „odcisk palca” danych.
        2. DNS zamienia nazwę na adres IP; strona przychodzi protokołem **HTTPS** (port 443). Dziś zobaczysz, *co* właściwie przychodzi: plik HTML.
        3. Styl mówi programowi, *czym* jest tekst (to tytuł rozdziału), więc działa spis treści i nawigacja. W HTML jest tak samo: znacznik `<h1>` mówi, że to nagłówek, a wygląd ustalamy osobno w CSS.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Napiszę szkielet dokumentu HTML5 ze znacznikami `header`, `nav`, `main` i `footer` i sprawdzę go walidatorem W3C.
    2. Dodam do strony nagłówki, akapity, listę, odnośnik i obraz z tekstem alternatywnym.
    3. Podłączę arkusz stylów i nadam elementom wygląd przez selektory elementu i klasy.
    4. :material-plus-circle: Dodam podstronę i tabelę z wierszem nagłówków, a całą stronę opublikuję w internecie.
    5. :material-plus-circle: Obliczę szerokość elementu z modelu pudełkowego, wyjaśnię `box-sizing: border-box` i sprawdzę wynik w narzędziach przeglądarki (F12).
    6. :material-plus-circle: Zbuduję poziome menu z `display: flex`.
    7. :material-star: Ułożę karty w siatkę CSS Grid, która na telefonie zmienia się w jedną kolumnę (`@media`), i powiem, kiedy wybrać Flexbox, a kiedy Grid.

!!! tip "Przykłady zmienisz na tej stronie"

    Pod przykładami są okienka z kodem i podglądem. Zmień coś w kodzie —
    podgląd odświeży się sam. **Zanim zmienisz, przewiduj**, co zobaczysz,
    a potem sprawdź w ramce „Przewiduj, potem sprawdź wynik”. Przyciski
    **Telefon** i **Komputer** zmieniają szerokość podglądu, a
    **Przywróć przykład** cofa twoje zmiany.

## Jak czytać tę stronę

| Oznaczenie | Co znaczy |
| --- | --- |
| bez oznaczenia | wymagania konieczne i podstawowe — na ocenę 2 i 3 |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające — na ocenę 4 |
| :material-star: **dopełnienie** | wymagania dopełniające — na ocenę 5 |

---

## 1. Jak działa strona internetowa

Przeglądarka pobiera z serwera plik tekstowy z kodem HTML i na jego
podstawie **rysuje** stronę. Kod składa się ze **znaczników** w nawiasach
ostrych. Większość znaczników ma część otwierającą i zamykającą, a między
nimi treść:

```html
<p>To jest <strong>ważny</strong> akapit.</p>
```

| Pojęcie | Przykład | Co znaczy |
| --- | --- | --- |
| **znacznik** (tag) | `<p>` … `</p>` | rodzaj elementu — tu akapit |
| **element** | `<p>To jest akapit.</p>` | znacznik otwierający + treść + zamykający |
| **atrybut** | `<a href="kontakt.html">` | dodatkowa informacja w znaczniku otwierającym: nazwa, `=`, wartość w cudzysłowie |
| **znacznik pusty** | `<img>`, `<br>`, `<meta>` | nie ma treści ani znacznika zamykającego |
| **zagnieżdżanie** | `<p>… <strong>…</strong> …</p>` | element w elemencie — zamykamy w odwrotnej kolejności niż otwieramy |

Do pisania wystarczy edytor tekstu: Notatnik albo **VS Code**. Plik zapisz
z rozszerzeniem `.html` (np. `index.html`) i otwórz go w przeglądarce —
dwuklik albo przeciągnięcie na okno. Po każdej zmianie zapisz plik
i odśwież stronę (++f5++).

!!! example "Przewiduj"

    W kodzie między słowami „Ala” i „ma” jest sześć spacji, a przed „kota”
    — nowy wiersz. Jak przeglądarka wyświetli ten akapit?

    ??? success "Przewiduj, potem sprawdź wynik"

        `Ala ma kota` — w jednym wierszu, z pojedynczymi spacjami.
        Przeglądarka zamienia każdą grupę spacji i znaków nowego wiersza
        na **jedną spację**. Nowy akapit robi znacznik `<p>`, a odstępy —
        CSS (sekcja 6), nie spacje w kodzie.

<div class="html-podglad" markdown="0" data-wysokosc="110">
<script type="text/plain" data-jezyk="html">
<p>Ala      ma
kota.</p>
<p>To jest <strong>ważny</strong> akapit.</p>
</script>
</div>

---

## 2. Szkielet dokumentu HTML5 i znaczniki semantyczne

Każda strona ma ten sam szkielet. Część `head` opisuje stronę (nie widać jej
na ekranie), a `body` zawiera to, co widzi użytkownik.

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Moja strona</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Moja strona</h1>
  </header>
  <nav>
    <a href="index.html">Start</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
  <main>
    <article>
      <h2>O mnie</h2>
      <p>Uczę się w klasie 1TT.</p>
    </article>
  </main>
  <footer id="kontakt">
    <p>&copy; 2026 Jan Kowalski</p>
  </footer>
</body>
</html>
```

| Wiersz | Po co jest |
| --- | --- |
| `<!DOCTYPE html>` | mówi przeglądarce, że to HTML5 |
| `<html lang="pl">` | język strony — czytnik ekranu przeczyta tekst po polsku, wyszukiwarka wie, dla kogo jest strona |
| `<meta charset="UTF-8">` | kodowanie znaków — bez niego polskie litery zamienią się w „krzaczki” |
| `<meta name="viewport" …>` | strona na telefonie nie jest pomniejszana jak na ekranie komputera (sekcja 8) |
| `<title>` | tytuł na karcie przeglądarki i w wynikach wyszukiwania |
| `<link rel="stylesheet" …>` | podłącza arkusz stylów (sekcja 4) |

**Znaczniki semantyczne** mówią, *czym* jest dany fragment — tak jak styl
*Nagłówek 1* w Wordzie. Dzięki nim czytnik ekranu pozwala przeskoczyć do
menu albo treści, a wyszukiwarka wie, co jest najważniejsze.

| Znacznik | Co oznacza |
| --- | --- |
| `<header>` | nagłówek strony: logo, tytuł |
| `<nav>` | menu — blok głównych odnośników |
| `<main>` | główna treść strony (jeden na stronę) |
| `<article>` | samodzielna całość: artykuł, wpis, karta produktu |
| `<section>` | rozdział treści z własnym nagłówkiem |
| `<aside>` | treść poboczna: ramka, reklama, ciekawostka |
| `<footer>` | stopka: autor, kontakt, prawa autorskie |
| `<div>` | pojemnik **bez** znaczenia — tylko do stylowania, gdy żaden znacznik semantyczny nie pasuje |

**Walidator W3C** sprawdza, czy kod jest zgodny ze standardem: wejdź na
[validator.w3.org](https://validator.w3.org/#validate_by_upload), wybierz
*Validate by File Upload* i wskaż swój plik. *Errors* trzeba poprawić,
*Warnings* warto przeczytać. Najczęściej wychodzą niezamknięte znaczniki
i brak atrybutu `alt` przy obrazie.

---

## 3. Treść strony: nagłówki, listy, tabele, odnośniki, obrazy

### Nagłówki i akapity

Nagłówki mają sześć poziomów: `<h1>` (najważniejszy, zwykle jeden na
stronie) do `<h6>`. Używaj ich po kolei, jak spisu treści — nie po to, żeby
tekst był większy. Akapit to `<p>`, wyróżnienie — `<strong>` (ważne)
i `<em>` (akcent).

### Listy

```html
<ul>                  <!-- lista punktowana (unordered) -->
  <li>informatyka</li>
  <li>matematyka</li>
</ul>
<ol>                  <!-- lista numerowana (ordered) -->
  <li>Zapisz plik</li>
  <li>Odśwież stronę</li>
</ol>
```

Każdy punkt to `<li>`. Listę można zagnieździć — wstawiamy ją **wewnątrz**
elementu `<li>`. Menu w `<nav>` to też często lista `<ul>` z odnośnikami.

### Tabele

:material-plus-circle: **rozszerzenie**

```html
<table>
  <caption>Plan lekcji – poniedziałek</caption>
  <thead>
    <tr><th>Godzina</th><th>Przedmiot</th></tr>
  </thead>
  <tbody>
    <tr><td>8:00</td><td>Informatyka</td></tr>
    <tr><td>8:50</td><td>Matematyka</td></tr>
  </tbody>
</table>
```

`<tr>` to wiersz, `<th>` komórka nagłówka, `<td>` zwykła komórka,
`<caption>` podpis tabeli. Komórkę na dwie kolumny
łączy atrybut `colspan="2"`, na dwa wiersze — `rowspan="2"`.

!!! warning "Tabela jest na dane, nie na układ strony"

    Kiedyś całe strony układano w tabelach. Dziś tabela służy tylko do
    danych w wierszach i kolumnach (plan lekcji, cennik, wyniki). Układ
    strony robi CSS: Flexbox i Grid (sekcja 7).

### Odnośniki i obrazy

```html
<a href="galeria.html">Galeria</a>                      <!-- plik w tym samym folderze -->
<a href="https://pceikz.pl">Strona szkoły</a>           <!-- adres pełny -->
<a href="#kontakt">Kontakt</a>                          <!-- element z id="kontakt" na tej stronie -->
<img src="obrazy/szkola.jpg" alt="Budynek szkoły od strony boiska">
```

Ścieżka `obrazy/szkola.jpg` jest **względna** — od folderu z plikiem HTML.
Atrybut `alt` to **tekst alternatywny**: czyta go czytnik ekranu
i widać go, gdy obrazu nie da się wyświetlić.

!!! example "Przewiduj"

    W okienku poniżej obraz `obrazy/szkola.jpg` nie istnieje. Co pokaże
    podgląd w jego miejscu? Ile punktów będzie miała lista numerowana i jak
    będą oznaczone punkty listy zagnieżdżonej?

    ??? success "Przewiduj, potem sprawdź wynik"

        W miejscu obrazu: ikonka zepsutego obrazu i tekst z `alt`.
        Lista numerowana ma **dwa** punkty (1 i 2) — lista zagnieżdżona
        jest częścią punktu 1 i ma własne oznaczenia (kółka), nie kolejne
        numery.

<div class="html-podglad" markdown="0" data-wysokosc="260">
<script type="text/plain" data-jezyk="html">
<h2>Moje przedmioty</h2>
<ol>
  <li>Przedmioty zawodowe
    <ul>
      <li>informatyka</li>
      <li>sieci komputerowe</li>
    </ul>
  </li>
  <li>Przedmioty ogólne</li>
</ol>
<img src="obrazy/szkola.jpg" alt="Budynek szkoły od strony boiska">
<table border="1">
  <tr><th>Godzina</th><th>Przedmiot</th></tr>
  <tr><td>8:00</td><td>Informatyka</td></tr>
</table>
</script>
</div>

---

## 4. Arkusz stylów CSS

**CSS** (kaskadowe arkusze stylów) opisuje wygląd: kolory, czcionki,
odstępy, układ. Style piszemy w **osobnym pliku** `style.css` i podłączamy
w `head` wierszem `<link rel="stylesheet" href="style.css">`. Jeden arkusz
może obsługiwać wszystkie podstrony — zmiana koloru w jednym miejscu
zmienia cały serwis.

```css
h1 {                          /* selektor: do czego */
  color: #1565c0;             /* właściwość: wartość; */
  font-family: Arial, sans-serif;
}
```

| Właściwość | Przykład | Co robi |
| --- | --- | --- |
| `color` | `color: #c62828;` | kolor tekstu |
| `background-color` | `background-color: lightyellow;` | kolor tła |
| `font-family` | `font-family: Georgia, serif;` | krój pisma (kolejne to zapasowe) |
| `font-size` | `font-size: 1.2rem;` | wielkość tekstu |
| `text-align` | `text-align: center;` | wyrównanie tekstu |
| `width`, `max-width` | `max-width: 800px;` | szerokość elementu |

Kolory zapisuje się nazwą (`teal`), szesnastkowo (`#1565c0`) albo jako
`rgb(21, 101, 192)`. Jednostka `px` to piksel; `rem` to wielokrotność
wielkości czcionki strony (zwykle 16 px) — tekst w `rem` powiększa się
razem z ustawieniami przeglądarki.

---

## 5. Selektory i kaskada

| Selektor | Przykład | Do czego się odnosi |
| --- | --- | --- |
| element | `p { … }` | wszystkie akapity |
| klasa | `.uwaga { … }` | elementy z `class="uwaga"` — może ich być wiele |
| identyfikator | `#kontakt { … }` | jeden element z `id="kontakt"` |
| potomek | `nav a { … }` | odnośniki wewnątrz `nav` |
| stan | `a:hover { … }` | odnośnik, gdy najedziesz myszą |

Klasę nadaje się w HTML atrybutem `class`, a w CSS pisze z **kropką**.
Jeden element może mieć kilka klas: `class="karta wyrozniona"`.

:material-plus-circle: **rozszerzenie — kaskada.** Gdy kilka reguł
ustawia tę samą właściwość, wygrywa reguła o **mocniejszym selektorze**
(identyfikator > klasa > element). Przy równej mocy wygrywa reguła
zapisana **później**.

!!! example "Przewiduj"

    W okienku są trzy reguły dla koloru akapitów. Jakiego koloru będzie
    akapit „Pierwszy”, a jakiego „Drugi” (z klasą `uwaga`)?

    ??? success "Przewiduj, potem sprawdź wynik"

        „Pierwszy” — **zielony**: obie reguły `p` są równie mocne, wygrywa
        późniejsza. „Drugi” — **czerwony**: selektor klasy jest mocniejszy
        od selektora elementu, więc kolejność nie ma znaczenia.

<div class="html-podglad" markdown="0" data-wysokosc="110">
<script type="text/plain" data-jezyk="html">
<p>Pierwszy</p>
<p class="uwaga">Drugi</p>
</script>
<script type="text/plain" data-jezyk="css">
p { color: blue; }
.uwaga { color: red; }
p { color: green; }
</script>
</div>

---

## 6. Model pudełkowy

:material-plus-circle: **rozszerzenie**

Każdy element na stronie to prostokątne **pudełko** z czterech warstw —
od środka:

| Warstwa | Właściwość | Co to jest |
| --- | --- | --- |
| treść | `width`, `height` | tekst, obraz |
| margines wewnętrzny | `padding` | odstęp między treścią a ramką — ma kolor tła elementu |
| ramka | `border` | obramowanie, np. `border: 5px solid navy;` |
| margines zewnętrzny | `margin` | odstęp od sąsiednich elementów — zawsze przezroczysty |

Domyślnie (`box-sizing: content-box`) `width` to szerokość **samej
treści**, a `padding` i `border` się do niej **dodają**:

```css
.pudelko {
  width: 200px;
  padding: 20px;
  border: 5px solid navy;
  margin: 10px;
}
```

Widoczna szerokość: 200 + 2·20 + 2·5 = 250 px, a z marginesami
element zajmuje 250 + 2·10 = 270 px.

Po dopisaniu `box-sizing: border-box;` wartość `width` obejmuje treść,
`padding` i ramkę: pudełko ma dokładnie **200 px**, a na treść zostaje
200 − 40 − 10 = 150 px. Dlatego wiele stron zaczyna arkusz od reguły
`* { box-sizing: border-box; }` — łatwiej wtedy policzyć układ.

!!! example "Przewiduj"

    W okienku są dwa pudełka z tym samym `width: 200px`, ale drugie ma
    `box-sizing: border-box`. Które będzie szersze i o ile pikseli?

    ??? success "Przewiduj, potem sprawdź wynik"

        Pierwsze: 250 px, drugie: 200 px — pierwsze jest szersze o 50 px.
        Sprawdź w narzędziach przeglądarki: ++f12++, kliknij prawym
        przyciskiem pudełko w podglądzie → *Zbadaj* i spójrz na schemat
        modelu pudełkowego w zakładce *Obliczone* (*Computed*).

<div class="html-podglad" markdown="0" data-wysokosc="230">
<script type="text/plain" data-jezyk="html">
<div class="pudelko">content-box</div>
<div class="pudelko nowe">border-box</div>
</script>
<script type="text/plain" data-jezyk="css">
.pudelko {
  width: 200px;
  padding: 20px;
  border: 5px solid navy;
  margin: 10px;
  background-color: lightblue;
}
.nowe {
  box-sizing: border-box;
}
</script>
</div>

---

## 7. Układ strony: Flexbox i Grid

### Flexbox — elementy w jednym rzędzie

:material-plus-circle: **rozszerzenie**

`display: flex` ustawia dzieci elementu w **rzędzie** (albo w kolumnie:
`flex-direction: column`). Idealny do menu, paska z logo i przyciskami,
wyśrodkowania.

| Właściwość kontenera | Co robi |
| --- | --- |
| `justify-content` | rozkład wzdłuż rzędu: `flex-start`, `center`, `space-between`, `space-around` |
| `align-items` | wyrównanie w poprzek rzędu: `center`, `stretch` |
| `gap` | odstęp między elementami |
| `flex-wrap: wrap` | elementy, które się nie mieszczą, przechodzą do nowego wiersza |

!!! example "Przewiduj"

    Menu ma trzy odnośniki i `justify-content: space-between`. Gdzie stanie
    pierwszy, drugi i trzeci odnośnik? Potem zmień wartość na `center`
    i na `space-around`.

    ??? success "Przewiduj, potem sprawdź wynik"

        Pierwszy przy lewej krawędzi, trzeci przy prawej, drugi pośrodku —
        wolne miejsce rozdziela się **między** elementy. Przy `center`
        wszystkie trzy stoją razem pośrodku, przy `space-around` wolne
        miejsce jest też przy krawędziach.

<div class="html-podglad" markdown="0" data-wysokosc="90">
<script type="text/plain" data-jezyk="html">
<nav class="menu">
  <a href="#">Start</a>
  <a href="#">Galeria</a>
  <a href="#">Kontakt</a>
</nav>
</script>
<script type="text/plain" data-jezyk="css">
.menu {
  display: flex;
  justify-content: space-between;
  background-color: #1565c0;
  padding: 10px;
}
.menu a {
  color: white;
  text-decoration: none;
  padding: 6px 12px;
}
.menu a:hover {
  background-color: #0d47a1;
}
</script>
</div>

### Grid — siatka wierszy i kolumn

:material-star: **dopełnienie**

`display: grid` układa dzieci w **siatce** — w dwóch wymiarach naraz.
Kolumny opisuje `grid-template-columns`; jednostka `fr` to „część wolnego
miejsca”. Zapis `repeat(3, 1fr)` znaczy: trzy równe kolumny.

Kontener ma 800 px szerokości, `grid-template-columns: 1fr 2fr 1fr`
i `gap: 20px`. Na kolumny zostaje 800 − 2·20 = 760 px, które dzielimy
na 1 + 2 + 1 = 4 części po 190 px: kolumny mają **190, 380 i 190 px**.

| Wybierz | Gdy |
| --- | --- |
| **Flexbox** | układasz elementy w **jednym** kierunku — menu, pasek, rząd przycisków; liczba elementów może się zmieniać |
| **Grid** | potrzebujesz **wierszy i kolumn naraz** — galeria kart, układ całej strony z nagłówkiem, treścią i panelem bocznym |

---

## 8. Strona na telefonie

:material-star: **dopełnienie**

Strona **responsywna** (RWD) dopasowuje układ do szerokości ekranu. Potrzebne
są dwie rzeczy: znacznik `viewport` w `head` (sekcja 2) i **zapytania
o media** — reguły CSS, które działają tylko na wąskim albo szerokim
ekranie:

```css
@media (max-width: 600px) {
  .karty { grid-template-columns: 1fr; }    /* na wąskim ekranie: jedna kolumna */
}
```

!!! example "Przewiduj"

    W okienku karty ułożono w trzy kolumny, a reguła `@media` zmienia to dla
    ekranów do 600 px. Ile kolumn zobaczysz po kliknięciu **Telefon**
    (360 px)? A gdyby w regule było `max-width: 300px`?

    ??? success "Przewiduj, potem sprawdź wynik"

        Na telefonie — **jedną** kolumnę: 360 px to mniej niż 600 px, więc
        reguła działa. Przy `max-width: 300px` reguła nie zadziała dla
        360 px i zostaną trzy wąskie kolumny. Sprawdź to w okienku.

<div class="html-podglad" markdown="0" data-wysokosc="300">
<script type="text/plain" data-jezyk="html">
<div class="karty">
  <article class="karta"><h3>HTML</h3><p>Treść i struktura.</p></article>
  <article class="karta"><h3>CSS</h3><p>Wygląd i układ.</p></article>
  <article class="karta"><h3>JS</h3><p>Zachowanie strony.</p></article>
</div>
</script>
<script type="text/plain" data-jezyk="css">
.karty {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.karta {
  background-color: #e3f2fd;
  border-radius: 8px;
  padding: 10px;
}
@media (max-width: 600px) {
  .karty { grid-template-columns: 1fr; }
}
</script>
</div>

Na komputerze stronę na wąskim ekranie sprawdzisz w ++f12++ → ikona
telefonu (*Toggle device toolbar*, ++ctrl+shift+m++).

---

## 9. Dostępność

:material-plus-circle: **rozszerzenie**

Ze strony korzystają też osoby słabo widzące, niewidome (czytnik ekranu),
z trudnościami ruchowymi (tylko klawiatura). Zasady opisują wytyczne
**WCAG** (*Web Content Accessibility Guidelines*); w Polsce strony urzędów
i szkół publicznych muszą je spełniać. Najważniejsze na start:

- każdy obraz z treścią ma sensowny `alt` (obraz czysto ozdobny: `alt=""`);
- nagłówki `h1`–`h6` idą po kolei i opisują treść;
- tekst ma wyraźny **kontrast** z tłem — jasnoszary na białym jest trudny do przeczytania;
- odnośnik mówi, dokąd prowadzi: „Plan lekcji klasy 1TT”, a nie „kliknij tutaj”;
- ustawiony jest język strony: `<html lang="pl">`.

Część wytycznych sprawdza automatycznie audyt **Lighthouse** w Chrome
(++f12++ → *Lighthouse* → *Accessibility*), ale nie wszystkie — sens
tekstu alternatywnego czy kolejność czytania trzeba ocenić samemu.

---

## 10. Publikacja strony w internecie

:material-plus-circle: **rozszerzenie**

Strona na twoim dysku działa tylko u ciebie. Żeby otworzył ją ktoś inny,
pliki muszą trafić na **serwer WWW** (hosting). Bezpłatnie zrobisz to
w **GitHub Pages** — na tym serwisie działa też strona, którą czytasz.

1. Zaloguj się na [github.com](https://github.com) (konto zakłada się od 13. roku życia).
2. Utwórz **publiczne** repozytorium, np. `moja-strona`.
3. *Add file → Upload files*: przeciągnij `index.html`, `style.css` i folder z obrazami. Kliknij *Commit changes*.
4. *Settings → Pages*: w *Build and deployment* wybierz *Deploy from a branch*, gałąź `main`, folder `/ (root)`, *Save*.
5. Po minucie–dwóch strona będzie pod adresem `https://<twój-login>.github.io/moja-strona/`.

!!! warning "Serwer to nie twój komputer"

    - Strona główna musi się nazywać **`index.html`** — tę nazwę serwer otwiera, gdy w adresie nie ma nazwy pliku.
    - Serwer rozróżnia wielkie i małe litery: `Style.css` i `style.css` to dwa różne pliki. Na Windowsie strona działa, po publikacji style znikają.
    - W nazwach plików nie używaj spacji ani polskich liter: `o-mnie.html`, a nie `O mnie.html`.

Jeśli nie możesz założyć konta, opisz w karcie pracy, jak przebiega
publikacja, i pokaż stronę nauczycielowi na swoim komputerze.

---

!!! warning "Najczęstsze błędy"

    | Objaw | Przyczyna i naprawa |
    | --- | --- |
    | zmiany w pliku nie widać na stronie | plik nie jest zapisany albo strona nie jest odświeżona — ++ctrl+s++, potem ++f5++ |
    | style w ogóle nie działają | zła ścieżka w `<link href="…">` albo literówka w nazwie pliku; sprawdź w ++f12++ → *Konsola*, czy jest błąd 404 |
    | reguła `uwaga { … }` nic nie zmienia | przy klasie brak kropki — ma być `.uwaga` |
    | polskie litery wyglądają jak „Ä…” | brak `<meta charset="UTF-8">` albo plik zapisany w innym kodowaniu niż UTF-8 |
    | pół strony jest pogrubione albo w linku | niezamknięty znacznik `<strong>` lub `<a>` — pokaże to walidator W3C |
    | odstępy robione wieloma `<br>` albo spacjami | odstępy ustawia CSS: `margin`, `padding` |
    | :material-plus-circle: pudełko wyszło szersze, niż wpisano w `width` | `padding` i `border` dodają się do `width` — policz albo dodaj `box-sizing: border-box` |
    | :material-plus-circle: `justify-content` nic nie robi | brak `display: flex` w **kontenerze**; właściwości Flexboxa ustawia się rodzicowi, nie dzieciom |
    | :material-star: na telefonie strona jest malutka i trzeba ją powiększać | brak znacznika `<meta name="viewport" …>` |

---

## Ćwiczenia

Ćwiczenia 1–2 robisz na pierwszej lekcji, 3–4 na drugiej, 5–6 na trzeciej.
Wszystkie robisz na **jednej, własnej stronie** — o sobie, o swoim hobby
albo o klasie. Wyniki wpisujesz do karty pracy na dole strony.

### :material-console: Ćwiczenie 1 — szkielet strony

1. Utwórz folder `strona`, a w nim plik `index.html` ze szkieletem z sekcji 2. Wpisz własny tytuł.
2. Dodaj `header` z nagłówkiem `h1`, `nav` z co najmniej trzema odnośnikami (mogą prowadzić do `#` sekcji na tej stronie), `main` z dwoma akapitami i `footer` z twoim imieniem.
3. Sprawdź plik walidatorem W3C i popraw błędy. Wpisz do karty użyte znaczniki i wynik walidacji.

### :material-console: Ćwiczenie 2 — lista, obraz, tabela i podstrona

1. Dodaj do `main` listę punktowaną (np. twoje zainteresowania) i numerowaną (np. kroki przepisu).
2. Dodaj obraz z folderu `obrazy` z sensownym tekstem `alt`. Sprawdź walidatorem jeszcze raz.
3. :material-plus-circle: Dodaj tabelę z podpisem, wierszem nagłówków i co najmniej trzema wierszami danych (np. plan lekcji z jednego dnia).
4. :material-plus-circle: Utwórz podstronę, np. `galeria.html`, z tym samym nagłówkiem i menu. Połącz obie strony odnośnikami w menu.

??? tip "Podpowiedź 1"

    Tabela rośnie wiersz po wierszu: każdy `<tr>` to jeden wiersz, a w nim
    tyle komórek, ile kolumn. Policz komórki w każdym wierszu — w każdym
    musi być tyle samo.

??? tip "Podpowiedź 2"

    Nagłówki kolumn wpisz w `<th>` w pierwszym wierszu, w `<thead>`.
    Pozostałe wiersze umieść w `<tbody>`, a komórki w `<td>`. Podpis
    `<caption>` jest pierwszym elementem w `<table>`.

??? tip "Podpowiedź 3"

    Jeśli obraz się nie wyświetla, a widać tekst `alt` — ścieżka jest zła.
    Obraz `kot.jpg` w folderze `obrazy` obok `index.html` to
    `src="obrazy/kot.jpg"`. Sprawdź wielkość liter i rozszerzenie
    (`.jpg` czy `.jpeg`).

### :material-console: Ćwiczenie 3 — arkusz stylów

1. Utwórz w tym samym folderze plik `style.css` i podłącz go w `head`.
2. Ustaw krój pisma i kolor tekstu dla `body`, kolor tła dla `header` i `footer`.
3. Nadaj jednemu akapitowi klasę `wyrozniony` i ustaw dla niej tło i ramkę. Ustaw styl odnośników w menu (`nav a`) i ich wygląd po najechaniu (`nav a:hover`).
4. Wpisz do karty dwie swoje reguły: jedną z selektorem elementu, drugą z selektorem klasy.

### :material-console: Ćwiczenie 4 — model pudełkowy :material-plus-circle:

1. Ustaw dla klasy `wyrozniony`: `width: 300px; padding: 15px; border: 4px solid; margin: 20px;`. Oblicz w zeszycie widoczną szerokość akapitu.
2. Otwórz ++f12++, kliknij akapit narzędziem *Zbadaj* i porównaj wynik ze schematem modelu pudełkowego.
3. Dodaj `box-sizing: border-box;` i sprawdź, co się zmieniło. Zapisz obliczenia i wyjaśnienie w karcie, dołącz zrzut ekranu z ++f12++.

??? tip "Podpowiedź 1"

    Szerokość widoczna to treść + lewy i prawy `padding` + lewa i prawa
    ramka. Margines nie należy do pudełka — to odstęp od sąsiadów.

??? tip "Podpowiedź 2"

    `padding: 15px` oznacza 15 px z **każdej** strony, więc w poziomie
    dodaje 2·15 px. Tak samo ramka 4 px dodaje 2·4 px.

??? tip "Podpowiedź 3"

    300 + 30 + 8 = 338 px przy `content-box`. Przy `border-box`
    pudełko ma 300 px, a treść 300 − 30 − 8 = 262 px — w ++f12++
    zobaczysz te liczby na schemacie.

### :material-console: Ćwiczenie 5 — menu, siatka i telefon :material-plus-circle: :material-star:

1. :material-plus-circle: Ułóż odnośniki w `nav` w poziomym pasku z `display: flex`, z odstępami (`gap`) i wyróżnieniem po najechaniu.
2. :material-star: Dodaj w `main` sekcję z co najmniej czterema kartami (`article`) i ułóż je w siatkę `display: grid` z trzema kolumnami.
3. :material-star: Dopisz regułę `@media`, po której na ekranie węższym niż 600 px karty są w jednej kolumnie. Zrób zrzuty na szerokim i wąskim ekranie (++f12++ → ikona telefonu).

??? tip "Podpowiedź 1"

    Właściwości `display: flex`, `gap`, `justify-content` ustawiasz
    **rodzicowi** — elementowi `nav` — a nie odnośnikom. Odnośnikom zostaw
    kolory i `padding`.

??? tip "Podpowiedź 2"

    Karty muszą mieć wspólnego rodzica, np. `<section class="karty">`.
    To jemu dajesz `display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 16px;`. Wzór masz w okienku z sekcji 8.

??? tip "Podpowiedź 3"

    Reguła `@media` musi być **na końcu** arkusza — inaczej późniejsza reguła
    `.karty` nadpisze ją z powrotem na trzy kolumny. Sprawdź też, czy masz
    znacznik `viewport` w `head`.

### :material-console: Ćwiczenie 6 — publikacja :material-plus-circle:

Opublikuj stronę w GitHub Pages według kroków z sekcji 10. Otwórz ją na
telefonie. Wpisz do karty adres strony i jedną rzecz, która po publikacji
działała inaczej niż na twoim komputerze (albo napisz, że wszystko
działało tak samo).

---

## Sprawdź się

Test z natychmiastową odpowiedzią. **Nie jest oceniany i nic nie wysyła.**

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Który znacznik HTML5 oznacza główną treść strony?",
  "opcje": ["<content>", "<main>", "<section>", "<body>"],
  "poprawna": 1,
  "wyjasnienie": "<main> zawiera główną treść i występuje na stronie raz. <body> obejmuje wszystko, co widać — także nagłówek, menu i stopkę."
 },
 {
  "pytanie": "W kodzie akapitu między dwoma słowami jest pięć spacji i nowy wiersz. Co zobaczysz w przeglądarce?",
  "opcje": ["pięć spacji i nowy wiersz", "jedną spację", "nowy wiersz bez spacji", "błąd strony"],
  "poprawna": 1,
  "wyjasnienie": "Przeglądarka zamienia każdą grupę spacji i znaków nowego wiersza na jedną spację. Odstępy ustawia się w CSS."
 },
 {
  "pytanie": "Który wiersz podłącza do strony plik style.css?",
  "opcje": ["<style src=\"style.css\">", "<css href=\"style.css\">", "<script src=\"style.css\"><\/script>", "<link rel=\"stylesheet\" href=\"style.css\">"],
  "poprawna": 3,
  "wyjasnienie": "Zewnętrzny arkusz stylów podłącza znacznik <link> z atrybutami rel=\"stylesheet\" i href w części <head>."
 },
 {
  "pytanie": "Jaki selektor CSS wybierze wszystkie elementy z atrybutem class=\"menu\"?",
  "opcje": [".menu", "#menu", "menu", "class=menu"],
  "poprawna": 0,
  "wyjasnienie": "Klasę zapisuje się w CSS z kropką. #menu wybiera element z id=\"menu\", a samo menu — znaczniki <menu>."
 },
 {
  "pytanie": "Pudełko ma width: 200px, padding: 20px, border: 5px i domyślne box-sizing. Jaka jest jego widoczna szerokość?",
  "opcje": ["200 px", "225 px", "250 px", "270 px"],
  "poprawna": 2,
  "wyjasnienie": "200 + 2·20 + 2·5 = 250 px. Margines nie należy do pudełka. Przy box-sizing: border-box byłoby 200 px."
 },
 {
  "pytanie": "Co robi justify-content: space-between w kontenerze z display: flex?",
  "opcje": ["skupia elementy na środku", "rozkłada wolne miejsce między elementy — pierwszy przy lewej krawędzi, ostatni przy prawej", "ustawia elementy jeden pod drugim", "dodaje ramkę między elementami"],
  "poprawna": 1,
  "wyjasnienie": "space-between dzieli wolne miejsce tylko między elementami; skrajne stoją przy krawędziach kontenera."
 },
 {
  "pytanie": "Kontener ma 600 px, grid-template-columns: 1fr 2fr i brak odstępów. Ile szerokości ma druga kolumna?",
  "opcje": ["200 px", "300 px", "400 px", "2 px"],
  "poprawna": 2,
  "wyjasnienie": "1fr + 2fr = 3 części po 200 px; druga kolumna ma 2 części, czyli 400 px."
 },
 {
  "pytanie": "Po co jest reguła @media (max-width: 600px) { … }?",
  "opcje": ["odtwarza filmy na stronie", "zmniejsza obrazy na serwerze", "stosuje style tylko na ekranach o szerokości do 600 px", "blokuje stronę na telefonach"],
  "poprawna": 2,
  "wyjasnienie": "Zapytanie o media włącza reguły tylko na ekranach spełniających warunek — tak buduje się stronę responsywną."
 },
 {
  "pytanie": "Opublikowałeś stronę, ale pod adresem bez nazwy pliku serwer pokazuje błąd 404. Najbardziej prawdopodobna przyczyna:",
  "opcje": ["strona główna nie nazywa się index.html", "brak atrybutu alt przy obrazie", "brak znacznika <footer>", "zbyt długi tytuł strony"],
  "poprawna": 0,
  "wyjasnienie": "Gdy w adresie nie ma nazwy pliku, serwer szuka index.html. Plik Strona.html trzeba by wpisać w adresie."
 },
 {
  "pytanie": "Do czego służy atrybut alt w znaczniku <img>?",
  "opcje": ["ustala szerokość obrazu", "podaje tekst alternatywny dla czytnika ekranu i na wypadek, gdy obrazu nie da się wyświetlić", "wskazuje adres pliku z obrazem", "dodaje podpis pod obrazem dla wszystkich"],
  "poprawna": 1,
  "wyjasnienie": "alt to tekst zastępczy — jedna z podstawowych zasad dostępności WCAG. Adres pliku podaje src."
 }
]
</script>
</div>

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**. Wypełniasz ją przez wszystkie trzy
lekcje: zadanie 1 na pierwszej, 2 i 4 na drugiej, 3 i 5 na trzeciej (tabelę
i podstronę do zadania 3 robisz już na pierwszej lekcji).

<div class="kp-podsumowanie" data-karta="tworzenie-stron-internetowych"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    !!! info "Twoje odpowiedzi zostają na twoim komputerze"

        Formularz niczego nie wysyła sam. Do nauczyciela karta trafia dopiero po
        kliknięciu **Wyślij do nauczyciela** (z kodem z karteczki) albo gdy
        dołączysz pobrany plik Worda w dzienniku. Wyczyszczenie danych
        przeglądania usunie odpowiedzi — kiedy skończysz, wyślij albo pobierz kartę.

    <div class="karta-pracy" data-karta="tworzenie-stron-internetowych"></div>

### Jak ją oddać

Kliknij **Wyślij do nauczyciela** pod kartą albo pobierz kartę w Wordzie
i dołącz ją w **Dzienniku VULCAN → Zadania domowe**, w zadaniu
*Tworzenie stron internetowych — karta pracy*. Termin: najbliższa lekcja
po trzeciej lekcji tematu.

---

## Sprawdź, czy rozumiesz

??? question "Dlaczego treść piszemy w HTML, a wygląd w osobnym pliku CSS?"

    Bo to dwie różne sprawy. HTML mówi, czym jest fragment (nagłówek, menu,
    lista) — z tego korzystają czytnik ekranu i wyszukiwarka. CSS mówi, jak
    to wygląda. Jeden arkusz stylów obsługuje wszystkie podstrony, więc zmiana
    koloru menu to jedna linijka, a nie poprawianie dziesięciu plików. Ten
    sam HTML może też dostać inny wygląd na telefonie (`@media`).

??? question ":material-plus-circle: Kolega ułożył menu w tabeli o jednym wierszu. Działa. Co jest nie tak?"

    Tabela oznacza dane w wierszach i kolumnach — czytnik ekranu ogłosi
    „tabela, jeden wiersz, cztery kolumny”, zamiast „nawigacja”. Menu to
    `nav` z listą odnośników, a układ w rzędzie daje `display: flex`. Taki
    kod łatwo też przestawić w kolumnę na telefonie.

---

!!! info "Materiały uzupełniające"

    - Walidator W3C: [validator.w3.org](https://validator.w3.org/)
    - Kurs i dokumentacja HTML i CSS: [MDN — HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) i [MDN — CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) (po angielsku)
    - Projekt zespołowy z tego działu: [Responsywna strona WWW w systemie CMS](responsywna-strona-www-w-systemie-cms-projekt.md)
    - Formaty grafiki na stronę (JPEG, PNG, WebP, SVG): temat [Grafika 2D i 3D](grafika-2d-i-3d.md)

*Szerokości w przykładach przeliczono i sprawdzono w narzędziach
przeglądarki. Stan sprawdzony 15 listopada 2026 r.*
