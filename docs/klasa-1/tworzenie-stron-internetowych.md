# Tworzenie stron internetowych

!!! abstract "O tym temacie"

    **3 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **I.1, I.2, III.1, III.2**

    Tworzenie nowoczesnych stron internetowych opiera się na rozdziale struktury dokumentu (HTML5) od jego wyglądu i układu (CSS3). Na tych zajęciach poznasz język HTML, reguły stylów CSS, budowanie układów stron z wykorzystaniem modeli Flexbox i Grid oraz podstawy semantyki i dostępności cyfrowej.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. opisać podstawową strukturę dokumentu HTML5 i rolę znaczników nagłówkowych
    2. stosować semantyczne znaczniki HTML5 do budowy czytelnej struktury strony
    3. formatować tekst, wstawiać odnośniki, listy oraz obrazy w HTML
    4. dodawać i podłączać kaskadowe arkusze stylów (CSS) do dokumentu HTML
    5. stosować selektory CSS (elementów, klas, identyfikatorów i pseudoklas)
    6. operować modelem pudełkowym (box model: margin, border, padding, content)
    7. budować elastyczne układy stron z wykorzystaniem układu Flexbox
    8. projektować dwuwymiarowe siatki elementów za pomocą CSS Grid
    9. tworzyć podstawowe reguły zapytania o media (Media Queries) dla urządzeń mobilnych
    10. stosować zasady dostępności cyfrowej (WCAG) i sprawdzić poprawność kodu w walidatorze W3C

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Struktura dokumentu HTML5 i semantyka

Język **HTML** (HyperText Markup Language) odpowiada za treść i strukturę strony. Znaczniki semantyczne opisują znaczenie elementów, co ma kluczowe znaczenie dla wyszukiwarek (SEO) oraz czytników ekranu.

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moja Strona</title>
</head>
<body>
    <header>
        <h1>Tytuł strony</h1>
    </header>
    <nav>
        <a href="#o-nas">O nas</a>
    </nav>
    <main>
        <article>
            <h2>Artykuł</h2>
            <p>Treść artykułu...</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2026 Wszelkie prawa zastrzeżone.</p>
    </footer>
</body>
</html>
```

---

## 2. Kaskadowe Arkusze Stylów (CSS) i Box Model

:material-plus-circle: **rozszerzenie**

**CSS** (Cascading Style Sheets) odpowiada za warstwę wizualną. Każdy element w HTML traktowany jest jako prostokątne pudełko opisane przez **Box Model**.

| Składnik | Opis |
| --- | --- |
| **Content** | Treść elementu (tekst, obraz) |
| **Padding** | Wewnętrzny odstęp między treścią a ramką |
| **Border** | Obramowanie elementu |
| **Margin** | Zewnętrzny margines oddzielający element od innych |

---

## 3. Układy stron: Flexbox i CSS Grid

:material-star: **dopełnienie**

Tworzenie nowoczesnych interfejsów opiera się na dwóch systemach układu:

- **Flexbox:** jednowymiarowy system układu (wiersz lub kolumna), idealny do nawigacji i wyrównywania elementów.
- **CSS Grid:** dwuwymiarowy system siatkowy, dedykowany dla całych szablonów stron.

```css
/* Przykładowy układ Flexbox */
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="tworzenie-stron-internetowych"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="tworzenie-stron-internetowych"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Nagłówek i semantyka HTML
1. Stwórz plik `index.html` ze strukturalnymi znacznikami `<header>`, `<nav>`, `<main>`, `<article>` i `<footer>`.
2. Dodaj menu z odnośnikami oraz nagłówek stopki z prawami autorskimi.

### :material-console: Ćwiczenie 2 — Stylowanie i Box Model
1. Stwórz plik `style.css` i podłącz go do HTML.
2. Zdefiniuj klasy z różnymi wartościami `padding`, `margin` i `border`.
3. Sprawdź zachowanie Box Model w narzędziach deweloperskich przeglądarki (`F12`).

### :material-console: Ćwiczenie 3 — Menu Flexbox
1. Zbuduj poziomy pasek nawigacji wykorzystując `display: flex`.
2. Użyj `justify-content: space-around;` oraz stylów hover dla linków.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Który znacznik HTML5 jest używany do zdefiniowania głównej treści dokumentu?",
  "opcje": [
   "<content>",
   "<main>",
   "<section>",
   "<body>"
  ],
  "poprawna": 1,
  "wyjasnienie": "Znacznik <main> reprezentuje dominującą treść w sekcji <body> dokumentu."
 },
 {
  "pytanie": "Co wchodzi w skład modelu pudełkowego (Box Model) w CSS?",
  "opcje": [
   "Content, Padding, Border, Margin",
   "Font, Color, Background, Position",
   "Display, Flex, Grid, Block",
   "Width, Height, Top, Left"
  ],
  "poprawna": 0,
  "wyjasnienie": "Box model składa się z zawartości (content), marginesu wewnętrznego (padding), obramowania (border) i marginesu zewnętrznego (margin)."
 },
 {
  "pytanie": "Do czego służy właściwość CSS `justify-content` w układzie Flexbox?",
  "opcje": [
   "Wyrównuje elementy wzdłuż głównej osi flexboxa",
   "Zmienia czcionkę tekstu",
   "Ustawia margines zewnętrzny",
   "Tworzy obramowanie wokół kontenera"
  ],
  "poprawna": 0,
  "wyjasnienie": "justify-content określa sposób rozmieszczenia elementów wzdłuż osi głównej (domyślnie poziomej)."
 },
 {
  "pytanie": "Jaki jest cel stosowania Media Queries w CSS?",
  "opcje": [
   "Odtwarzanie plików wideo i audio",
   "Dostosowanie wyglądu strony do cech urządzenia (np. szerokości ekranu)",
   "Szyfrowanie połączenia ze stroną",
   "Kompresja obrazów na serwerze"
  ],
  "poprawna": 1,
  "wyjasnienie": "Media Queries pozwalają na stosowanie stylów CSS w zależności od parametrów urządzenia, np. szerokości ekranu."
 },
 {
  "pytanie": "Co oznacza skrót WCAG?",
  "opcje": [
   "Web Content Accessibility Guidelines",
   "World Code Authority Group",
   "Web Creator Alliance Guide",
   "Wide Connection Access Protocol"
  ],
  "poprawna": 0,
  "wyjasnienie": "WCAG to wytyczne dotyczące dostępności treści internetowych dla osób z niepełnosprawnościami."
 }
]
</script>
</div>

---

## Podsumowanie

Tworzenie nowoczesnych stron internetowych opiera się na separacji struktury (HTML5) i prezentacji (CSS3). Stosowanie semantycznych znaczników HTML poprawia dostępność i pozycjonowanie, a elastyczne układy Flexbox i CSS Grid umożliwiają wygodne projektowanie responsywnych stron WWW.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział IV: Strony WWW i grafika komputerowa).
