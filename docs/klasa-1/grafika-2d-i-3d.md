# Grafika 2D i 3D

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **I.1, I.2, III.3**

    Komputerowe przetwarzanie obrazu to kluczowy element współczesnych mediów. Na tych zajęciach dowiesz się, czym różni się grafika rastrowa od wektorowej, poznasz modele barw (RGB, CMYK), podstawy edycji obrazów w programach graficznych oraz zasady modelowania i renderowania obiektów w przestrzeni trójwymiarowej (3D).

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. wyjaśnić różnice pomiędzy grafiką rastrową a wektorową i wskazać ich zastosowania
    2. opisać modele barw RGB, CMYK oraz HSL i ich przeznaczenie (ekran vs druk)
    3. przeliczać rozdzielczość obrazu (DPI/PPI) oraz rozmiary plików graficznych
    4. operować na warstwach, maskach i zaznaczeniach w programie do grafiki rastrowej
    5. tworzyć i modyfikować kształty wektorowe oraz krzywe Beziera
    6. stosować retusz, korekcję barwną oraz filtry w obróbce zdjęć
    7. eksportować obrazy do odpowiednich formatów (JPEG, PNG, SVG, WebP) z uwzględnieniem kompresji
    8. opisać podstawy przestrzeni 3D (osie X, Y, Z), obiekty siatkowe (mesh) i przekształcenia
    9. stosować materiały, tekstury i oświetlenie w scenach trójwymiarowych
    10. przeprowadzić proces renderowania sceny 3D do pliku dwuwymiarowego

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Grafika rastrowa vs wektorowa i modele barw

Grafika komputerowa dzieli się na dwa podstawowe typy:

- **Rastrowa:** obraz zbudowany z siatki pikseli. Przy powiększaniu traci jakość (pikseloza).
- **Wektorowa:** obraz opisany wzorami matematycznymi (punkty, linie, krzywe). Scalalna bez utraty jakości.

| Cecha | Grafika Rastrowa | Grafika Wektorowa |
| --- | --- | --- |
| **Podstawowy element** | Piksel | Obiekt / Krzywa Beziera |
| **Skalowalność** | Zależna od rozdzielczości | Nieograniczona |
| **Formaty plików** | JPEG, PNG, GIF, WebP | SVG, EPS, CDR, AI |
| **Model barw** | RGB (ekrany), CMYK (druk) | RGB, CMYK |

---

## 2. Praca na warstwach, maski i obróbka wektorowa

:material-plus-circle: **rozszerzenie**

Nieniszcząca edycja grafiki rastrowej opiera się na **warstwach** i **maskach**.
Maska warstwy pozwala ukrywać lub odsłaniać fragmenty obrazu bez trwałego usuwania pikseli (czarny kolor ukrywa, biały odsłania).

W grafice wektorowej kluczową rolę grają **krzywe Beziera**, w których kształt linii kontrolowany jest przez punkty węzłowe oraz uchwyty kierunkowe.

---

## 3. Podstawy grafiki 3D: siatki, materiały i render

:material-star: **dopełnienie**

Grafika 3D wprowadza trzecią oś współrzędnych (**Z** — głębia). Proces tworzenia obrazu 3D składa się z kroków:

1. **Modelowanie:** tworzenie siatki (mesh) z wierzchołków, krawędzi i wielokątów (faces).
2. **Teksturowanie:** nakładanie materiałów i obrazów na powierzchnię modelu (mapowanie UV).
3. **Oświetlenie i kamera:** ustawienie źródeł światła i punktu widzenia.
4. **Renderowanie:** obliczanie ostatecznego obrazu 2D na podstawie właściwości fizycznych światła.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="grafika-2d-i-3d"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="grafika-2d-i-3d"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Fotomontaż z użyciem masek warstwy
1. Otwórz dwa zdjęcia w programie do edycji rastrowej (np. GIMP / Photoshop).
2. Wykorzystaj maskę warstwy i miękki pędzel, aby łagodnie połączyć oba obrazy bez wycinania pikseli.

### :material-console: Ćwiczenie 2 — Logo wektorowe z krzywych Beziera
1. W programie wektorowym (np. Inkscape) narysuj proste logo wykorzystując narzędzie pióra (krzywe Beziera).
2. Wyeksportuj wynikowy plik do formatu **SVG** oraz **PNG** z przezroczystym tłem.

### :material-console: Ćwiczenie 3 — Prosty model 3D i render
1. W programie 3D (np. Blender) stwórz prostą scenę składającą się z dwóch obiektów (np. sześcian i kula).
2. Przypisz materiał z kolorem i odbiciem, ustaw światło i wykonaj render do pliku PNG.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Jaka jest główna zaleta grafiki wektorowej w porównaniu do rastrowej?",
  "opcje": [
   "Mniejszy rozmiar pliku przy zdjęciach",
   "Nieograniczona skalowalność bez utraty jakości",
   "Większa paleta kolorów",
   "Szybsze wyświetlanie w przeglądarce"
  ],
  "poprawna": 1,
  "wyjasnienie": "Grafika wektorowa opisana jest wzorami matematycznymi, co pozwala na jej bezstratne skalowanie do dowolnych rozmiarów."
 },
 {
  "pytanie": "Który model barw stosuje się do materiałów przeznaczonych do druku?",
  "opcje": [
   "RGB",
   "CMYK",
   "HSL",
   "HEX"
  ],
  "poprawna": 1,
  "wyjasnienie": "Model CMYK (Cyan, Magenta, Yellow, Key/Black) opiera się na mieszaniu farb drukarskich (subtraraktywne mieszanie barw)."
 },
 {
  "pytanie": "Do czego służy maska warstwy w edytorze grafiki rastrowej?",
  "opcje": [
   "Do bezpowrotnego usuwania tła",
   "Do ukrywania lub odsłaniania fragmentów warstwy w sposób nieniszczący",
   "Do zmieszania kolorów na całej stronie",
   "Do automatycznego zapisu pliku"
  ],
  "poprawna": 1,
  "wyjasnienie": "Maska warstwy pozwala kontrolować przezroczystość poszczególnych obszarów bez modyfikacji oryginalnych pikseli."
 },
 {
  "pytanie": "Co oznacza skrót SVG?",
  "opcje": [
   "Scalable Vector Graphics",
   "Standard Video Grid",
   "System Visual Graphical",
   "Simple Vector Geometry"
  ],
  "poprawna": 0,
  "wyjasnienie": "SVG to dwuwymiarowy format grafiki wektorowej oparty na języku XML."
 },
 {
  "pytanie": "Jak nazywa się proces generowania końcowego obrazu 2D ze sceny trójwymiarowej w grafice 3D?",
  "opcje": [
   "Teksturowanie",
   "Renderowanie",
   "Modelowanie",
   "Skalowanie"
  ],
  "poprawna": 1,
  "wyjasnienie": "Renderowanie (rendering) to proces obliczania perspektywy, oświetlenia i cieni ze sceny 3D do pliku graficznego."
 }
]
</script>
</div>

---

## Podsumowanie

Znajomość cech grafiki rastrowej i wektorowej umożliwia właściwy dobór narzędzi i formatów plików do zadań projektowych. Operowanie na warstwach, maskach oraz krzywych wektorowych stanowi fundament obróbki dwuwymiarowej, natomiast grafika 3D otwiera możliwości tworzenia realistycznych wizualizacji przestrzennych.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział IV: Strony WWW i grafika komputerowa).
