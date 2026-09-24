# Wiesz, umiesz, zdasz — podsumowanie działu IV

!!! abstract "O tym sprawdzianie"

    **1 godzina lekcyjna** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **I.1, I.2, III.1–III.3**

    Termin: **wtorek 15 grudnia 2026 r.**, na lekcji informatyki.
    Forma: **praca praktyczna przy komputerze**.

    Ta strona jest po to, żebyś wiedział dokładnie, czego się spodziewać —
    i żebyś miał materiał do powtórki w jednym miejscu, zamiast przeglądać
    cztery strony po kolei.

!!! success "Po tej powtórce potrafisz"

    1. stworzyć poprawną semantycznie stronę HTML5 zgodną ze standardami W3C
    2. zastosować CSS3, Box Model oraz układy Flexbox i Grid
    3. odróżniać grafikę rastrową od wektorowej i wybierać właściwy format pliku
    4. pracować na warstwach i maskach w nieniszczącej edycji obrazu
    5. stosować klatki kluczowe oraz animacje w CSS3
    6. optymalizować zasoby graficzne pod kątem wydajności stron WWW

## Jak wygląda ten sprawdzian

| | |
| --- | --- |
| **Kiedy** | wtorek 15 grudnia 2026 r., cała lekcja |
| **Forma** | zadania wykonywane przy komputerze, wynik zapisujesz w jednym dokumencie |
| **Ile zadań** | pięć zadań praktycznych oznaczonych poziomem wymagań |
| **Jak liczy się ocena** | **poziomami, nie punktami** — patrz niżej |
| **Co oddajesz** | spakowany folder `nr<numer w dzienniku>-dzial4.zip` przez **Zadania domowe w dzienniku VULCAN** |
| **Czego potrzebujesz** | edytor kodu (VS Code / VSCodium), przeglądarka, edytor grafiki (GIMP / Inkscape) |

---

## Jak liczy się ocena

| Poziom | Wymagania | Daje ocenę |
| :---: | --- | :---: |
| **K** | konieczne | 2 |
| **P** | podstawowe | 3 |
| **R** | rozszerzające | 4 |
| **D** | dopełniające | 5 |

Ocenę wyznacza **najwyższy poziom, który zaliczysz w całości — razem ze wszystkimi niższymi**.

---

## Powtórka w pigułce

### Tworzenie stron internetowych (HTML5 & CSS3)

- **Semantyka:** Używaj `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.
- **Box Model:** `width` + `padding` + `border` + `margin`. Domyślnie `box-sizing: content-box;`, zalecane `border-box`.
- **Flexbox:** `display: flex; justify-content: center; align-items: center;`.
- **CSS Grid:** `display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;`.

### Grafika 2D i 3D

- **Rastra:** Piksele, strata jakości przy skalowaniu. Formaty: JPEG (zdjęcia), PNG (przezroczystość), WebP (nowoczesny skompresowany format).
- **Wektor:** Krzywe matematyczne, bezstratne skalowanie. Formaty: SVG.
- **Barwy:** RGB (dla ekranów), CMYK (dla druku).
- **3D:** Siatka (mesh) -> Tekstura -> Światło -> Render.

### Animacja komputerowa

- **Klatki kluczowe:** Stany początkowe i końcowe z interpolacją pośrednią (tweening).
- **CSS Transitions:** `@keyframes` oraz właściwości `transition`, `animation`.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Jaki znacznik HTML5 należy zastosować do paska nawigacyjnego?",
    "typ": "jedna",
    "opcje": [
      "<menu>",
      "<nav>",
      "<navigation>",
      "<header>"
    ],
    "poprawna": 1,
    "wyjasnienie": "Znacznik <nav> jest semantycznym elementem HTML5 przeznaczonym dla bloków nawigacyjnych."
  },
  {
    "pytanie": "Format PNG jest najlepszym wyborem gdy potrzebujemy:",
    "typ": "jedna",
    "opcje": [
      "Animacji z dźwiękiem",
      "Obsługi przezroczystości (kanał alfa) i bezstratnej kompresji",
      "Niewielkiego pliku ze zdjęciem krajobrazu",
      "Modelu trójwymiarowego"
    ],
    "poprawna": 1,
    "wyjasnienie": "PNG obsługuje kanał alfa (przezroczystość) i bezstratną kompresję grafiki rastrowej."
  },
  {
    "pytanie": "Właściwość CSS `box-sizing: border-box;` powoduje, że:",
    "typ": "jedna",
    "opcje": [
      "Padding i border są wliczane do całkowitej szerokości elementu",
      "Margines zewnętrzny ulega podwojeniu",
      "Obramowanie staje się przezroczyste",
      "Element znika ze strony"
    ],
    "poprawna": 0,
    "wyjasnienie": "border-box sprawia, że padding i obramowanie wchodzą w zadeklarowaną szerokość i wysokość elementu."
  },
  {
    "pytanie": "Do czego stosuje się regułę `@keyframes` w CSS?",
    "typ": "jedna",
    "opcje": [
      "Do rezerwacji pamięci",
      "Do definiowania przebiegu animacji w czasie",
      "Do podłączania czcionek z serwera",
      "Do tworzenia zapytań dla drukarek"
    ],
    "poprawna": 1,
    "wyjasnienie": "@keyframes pozwala zdefiniować klatki kluczowe i przypisane do nich style w animacji CSS."
  },
  {
    "pytanie": "Jaka jest główna cecha grafiki wektorowej?",
    "typ": "jedna",
    "opcje": [
      "Możliwość zniekształceń przy powiększeniu",
      "Brak utraty jakości przy bezstratnym skalowaniu",
      "Wielkie rozmiary plików dla małych ikonek",
      "Zapis danych w postaci pikseli"
    ],
    "poprawna": 1,
    "wyjasnienie": "Grafika wektorowa opisuje obraz matemtycznie, pozwalając na skalowanie do dowolnych rozmiarów."
  }
]
</script>
</div>

---

## Lista kontrolna przed sprawdzianem

- [ ] Tworzę strukturalne i semantyczne pliki HTML5
- [ ] Podłączam arkusze stylów CSS i operuję selektorami
- [ ] Znam różnice między grafiką rastrową a wektorową
- [ ] Potrafię wyeksportować obraz do formatu WebP / SVG
- [ ] Znam działanie układów Flexbox i Grid

---

*Zakres odpowiada wymaganiom działu IV. Sprawdzian zapowiedziany 8 grudnia 2026 r.*
