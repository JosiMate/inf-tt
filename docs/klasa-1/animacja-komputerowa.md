# Animacja komputerowa

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **I.1, I.2, III.3**

    Animacja komputerowa polega na stwarzaniu złudzenia ruchu poprzez szybkie wyświetlanie serii obrazów. Na tych zajęciach poznasz zasady tworzenia animacji poklatkowej, kluczowej (keyframing), interpolacji klatek, wykorzystanie kości i szkieletów oraz animacje w CSS3 i skryptach sieciowych.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. wyjaśnić zasadę iluzji ruchu i pojęcie liczby klatek na sekundę (FPS)
    2. odróżnić animację poklatkową (frame-by-frame) od animacji z interpolacją (tweening)
    3. tworzyć klatki kluczowe (keyframes) i modyfikować ścieżki ruchu
    4. stosować zasady interpolacji liniowej i krzywych przejścia (easing)
    5. przygotowywać animacje poklatkowe w formacie GIF oraz APNG
    6. projektować animacje wektorowe i przekształcenia kształtów (morphing)
    7. opisać zasady riggingu (tworzenie szkieletu i kości dla postaci 2D/3D)
    8. stosować regułę `@keyframes` oraz właściwości `animation` i `transition` w CSS3
    9. sterować zdarzeniami animacji na stronie za pomocą języka JavaScript
    10. optymalizować płynność animacji oraz rozmiary plików wyjściowych

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Klatki kluczowe i interpolacja ruchu

W tradycyjnej animacji rysuje się każdą klatkę osobno. Animacja komputerowa wykorzystuje **klatki kluczowe (keyframes)**, w których animator określa ważne stany obiektu (pozycja, skala, obrót), a program automatycznie oblicza klatki pośrednie (**interpolacja / tweening**).

```text
[Klatka kluczowa 1] ------------ (Interpolacja / Tweening) ------------> [Klatka kluczowa 2]
 Pozycja: X=0, Y=0                                                      Pozycja: X=300, Y=0
```

---

## 2. Animacje w CSS3 (`@keyframes` i `transition`)

:material-plus-circle: **rozszerzenie**

Przeglądarki internetowe potrafią płynnie animować elementy HTML bez użycia ciężkich skryptów, dzięki wsparciu sprzętowemu dla CSS3.

```css
/* Przejście po najechaniu myszą */
.box {
    transition: transform 0.3s ease-in-out;
}
.box:hover {
    transform: scale(1.2) rotate(10deg);
}

/* Animacja ciągła w CSS */
@keyframes obrot {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.loader {
    animation: obrot 2s linear infinite;
}
```

---

## 3. Rigging i animacja szkieletowa 2D/3D

:material-star: **dopełnienie**

**Rigging** polega na stworzeniu wewnątrz obiektu lub postaci układu połączonych ze sobą kości (szkieletu). Dzięki temu animowanie postaci sprowadza się do przemieszczania kości, a siatka (mesh) odkształca się automatycznie.

- **Kinematyka prosta (FK):** ruch kości nadrzędnej obraca wszystkie kości podporządkowane.
- **Kinematyka odwrotna (IK):** przemieszczenie dłoni lub stopy automatycznie wylicza zgięcie łokcia lub kolana.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="animacja-komputerowa"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="animacja-komputerowa"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Animowany GIF poklatkowy
1. Stwórz sekwencję 5–10 rysunków przestawiających ruchomy obiekt.
2. Połącz je w edytorze graficznym w animowany plik `.gif` z opóźnieniem klatek 100 ms.

### :material-console: Ćwiczenie 2 — Animacja przcisku w CSS3
1. Zbuduj przycisk na stronie WWW.
2. Dodaj właściwość `transition` tak, aby przy najechaniu kursor mmiękkie zmienił kolor i delikatnie się powiększył.

### :material-console: Ćwiczenie 3 — Pętla animacji `@keyframes`
1. Stwórz element reprezentujący banner reklamowy lub wskaźnik ładowania.
2. Zaimplementuj płynną animację przesuwania i znikania tekstu przy użyciu `@keyframes` i `opacity`.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Co oznacza skrót FPS w kontekście animacji i wideo?",
  "opcje": [
   "Frames Per Second (klatki na sekundę)",
   "First Personal System",
   "File Process Speed",
   "Format Position Standard"
  ],
  "poprawna": 0,
  "wyjasnienie": "FPS określa liczbę wyświetlanych klatek obrazu na sekundę. Standardem płynnego ruchu jest 24-60 FPS."
 },
 {
  "pytanie": "Czym różnią się klatki kluczowe od klatek pośrednich?",
  "opcje": [
   "Klatki kluczowe są większe objętościowo",
   "Klatki kluczowe definiują główne stany obiektu, a klatki pośrednie są wyliczane automatycznie",
   "Klatki kluczowe występują tylko na początku filmu",
   "Nie ma między nimi żadnej różnicy"
  ],
  "poprawna": 1,
  "wyjasnienie": "Animator ustawia stan w klatkach kluczowych, a oprogramowanie interpoluje wartości pomiędzy nimi (tweening)."
 },
 {
  "pytanie": "Która reguła CSS służy do definiowania etapów animacji w CSS3?",
  "opcje": [
   "@animation",
   "@keyframes",
   "@transition",
   "@media"
  ],
  "poprawna": 1,
  "wyjasnienie": "Reguła @keyframes pozwala określić poszczególne kroki animacji i przypisywane im style."
 },
 {
  "pytanie": "Na czym polega proces zwany riggingiem w animacji?",
  "opcje": [
   "Na renderowaniu filmu do pliku MP4",
   "Na dodawaniu efektów dźwiękowych",
   "Na tworzeniu wewnętrznej struktury szkieletowej (kości) dla animowanego obiektu",
   "Na kompresji animowanego pliku GIF"
  ],
  "poprawna": 2,
  "wyjasnienie": "Rigging polega na połączeniu siatki modelu ze szkieletem z kości, co ułatwia późniejsze animowanie ruchu."
 },
 {
  "pytanie": "Co oznacza pojęcie 'easing' w interpolacji animacji?",
  "opcje": [
   "Usuwanie klatek z animacji",
   "Nieliniowe przyspieszanie i zwalnianie ruchu, nadające mu naturalność",
   "Zmianę rozdzielczości obrazu",
   "Konwersję z formatu 3D na 2D"
  ],
  "poprawna": 1,
  "wyjasnienie": "Easing określa tempo zmian w czasie (np. ease-in, ease-out), sprawiając że ruch wygląda realistycznie."
 }
]
</script>
</div>

---

## Podsumowanie

Animacja komputerowa opiera się na automatycznym wyliczaniu klatek pośrednich między stanami kluczowymi. Narzędzia takie jak CSS3 umożliwiają tworzenie wydajnych animacji na stronach WWW, natomiast zaawansowany rigging i kinematyka stanowią podstawę trójwymiarowych animacji postaci.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział IV: Strony WWW i grafika komputerowa).
