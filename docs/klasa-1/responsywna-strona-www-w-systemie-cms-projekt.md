# Responsywna strona WWW w systemie CMS – projekt zespołowy

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **I.1, I.2, III.1, III.2, III.3**

    W ramach tego projektu zespołowego zaprojektujesz i wdrożysz kompletną, responsywną witrynę internetową. Wykorzystasz nowoczesny system zarządzania treścią (CMS) lub generator stron statycznych, przygotujesz autorskie materiały graficzne oraz zadbasz o dostępność i optymalizację SEO.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. zaplanować strukturę, makietę (wireframe) i architekturę informacji witryny
    2. podzielić zadania w zespole projektowym z wykorzystaniem tablicy Kanban
    3. zainstalować i skonfigurować system CMS (np. WordPress) lub generator stron statycznych (np. MkDocs / Hugo)
    4. stworzyć i dostosować motyw witryny odpowiadający wymaganiom responsywności (RWD)
    5. przygotować i zoptymalizować autorskie zasoby graficzne (logo, obrazy, ikony)
    6. zorganizować nawigację i strukturę kategorii/wpisów w serwisie
    7. zaimplementować formularz kontaktowy oraz elementy interaktywne
    8. zadbać o optymalizację pod kątem wyszukiwarek (SEO) i szybkości ładowania
    9. przeprowadzić audyt dostępności cyfrowej serwisu (WCAG / Lighthouse)
    10. zaprezentować gotowy projekt i przeprowadzić wdrożenie na serwerze testowym

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Etapy realizacji projektu WWW

Praca nad projektem serwisu internetowego podzielona jest na 4 fazy:

1. **Koncepcja i makiety:** określenie celu strony, grupy docelowej oraz stworzenie makiet RWD (desktop, tablet, mobile).
2. **Przygotowanie zasobów:** opracowanie tekstów, logotypu wektorowego (SVG) oraz optymalizacja zdjęć (WebP).
3. **Wdrożenie w CMS:** konfiguracja struktury stron, wpisów, menu oraz instalacja wtyczek.
4. **Testy i audyt:** weryfikacja poprawności wyświetlania na urządzeniach mobilnych oraz test Lighthouse.

---

## 2. Optymalizacja i dostępność (SEO & WCAG)

:material-plus-circle: **rozszerzenie**

Opublikowanie strony to nie wszystko — musi być ona łatwo odnajdywalna i dostępna dla wszystkich użytkowników.

- **Opisy alternatywne (`alt`):** każdy obrazek musi posiadać czytelny opis alternatywny dla czytników ekranu.
- **Współczynnik kontrastu:** tekst musi wyraźnie odcinać się od tła (min. 4.5:1 dla zwykłego tekstu).
- **Meta tagi:** poprawne ustawienie `<title>` oraz `<meta name="description">` dla wyszukiwarek.

---

## 3. Audyt wydajności (Lighthouse)

:material-star: **dopełnienie**

Narzędzie **Google Lighthouse** pozwala na ocenę strony w 4 kategoriach: Wydajność (Performance), Dostępność (Accessibility), Dobre praktyki (Best Practices) oraz SEO.

```text
[Audyt Lighthouse]
  ├── Performance: min. 80/100 (zoptymalizowane obrazy WebP, leniwe ładowanie loading="lazy")
  ├── Accessibility: 100/100 (odpowiedni kontrast, etykiety form, znaczniki semantyczne)
  └── SEO: 100/100 (meta opisy, nagłówki H1-H3, plik sitemap.xml)
```

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="responsywna-strona-www-w-systemie-cms-projekt"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="responsywna-strona-www-w-systemie-cms-projekt"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Makieta i podział ról
1. W zespole 3-osobowym przygotujcie makietę strony głównej i podstrony kontaktowej.
2. Rozdzielcie role: Projektant/Grafik, Programista/Koder CMS, Redaktor treści.

### :material-console: Ćwiczenie 2 — Konfiguracja CMS i struktury
1. Zainstalujcie wybrany system CMS lub skonfigurujcie generator stron statycznych.
2. Stwórzcie menu główne, stopkę oraz strukturę kategorii.

### :material-console: Ćwiczenie 3 — Audyt i prezentacja projektu
1. Uruchomcie test Lighthouse na gotowej stronie i usuńcie wykryte błędy dostępności.
2. Zaprezentujcie działający serwis na forum klasy.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Do czego służy makieta (wireframe) przed przystąpieniem do kodowania strony?",
  "opcje": [
   "Do automatycznego wygenerowania kodu w serwisie",
   "Do rozplanowania układu treści i nawigacji na ekranie",
   "Do przetestowania szybkości ładowania serwera",
   "Do rejestracji domeny internetowej"
  ],
  "poprawna": 1,
  "wyjasnienie": "Makieta pozwala zaplanować strukturę oraz rozmieszczenie elementów interfejsu przed etapie wdrażania."
 },
 {
  "pytanie": "Dlaczego w nowo projektowanych serwisach preferuje się format obrazów WebP zamiast JPEG?",
  "opcje": [
   "WebP oferuje znacznie lepszą kompresję przy zachowaniu wysokiej jakości, co przyspiesza ładowanie strony",
   "WebP pozwala na zapis dźwięku",
   "Format JPEG nie jest już obsługiwany przez przeglądarki",
   "WebP nie wymaga podawania wymiarów obrazu"
  ],
  "poprawna": 0,
  "wyjasnienie": "WebP zapewnia mniejszy rozmiar plików przy wysokiej jakości obrazu, co znacząco skraca czas wczytywania strony."
 },
 {
  "pytanie": "Co mierzy narzędzie Google Lighthouse w kategorii Accessibility?",
  "opcje": [
   "Liczbę odwiedzin na stronie",
   "Dostępność i użyteczność serwisu dla osób z niepełnosprawnościami (np. kontrast, atrybuty alt)",
   "Cenę serwera i domeny",
   "Zabezpieczenia przed atakami hakerskimi"
  ],
  "poprawna": 1,
  "wyjasnienie": "Kategoria Accessibility sprawdza przestrzeganie standardów WCAG (m.in. atrybuty ALT, kontrast tekstu)."
 },
 {
  "pytanie": "Jaka jest rola atrybutu `loading=\"lazy\"` w znaczniku `<img>`?",
  "opcje": [
   "Ukrywa obraz na urządzeniach mobilnych",
   "Odroczone ładowanie obrazu dopiero w momencie, gdy zbliża się on do widocznego obszaru ekranu",
   "Zmienia kolory obrazu na czarno-białe",
   "Dodaje ramkę wokół grafiki"
  ],
  "poprawna": 1,
  "wyjasnienie": "Leniwe ładowanie (lazy loading) wstrzymuje pobieranie obrazów do czasu przeewinięcia do nich strony."
 },
 {
  "pytanie": "Co oznacza skrót CMS?",
  "opcje": [
   "Content Management System",
   "Computer Main System",
   "Cascading Media Style",
   "Code Modular Structure"
  ],
  "poprawna": 0,
  "wyjasnienie": "CMS (System Zarządzania Treścią) to oprogramowanie pozwalające na łatwe tworzenie i edycję zawartości serwisów WWW."
 }
]
</script>
</div>

---

## Podsumowanie

Realizacja kompleksowego projektu strony internetowej wymaga połączenia umiejętności projektowania interfejsów, przygotowania zoptymalizowanych zasobów graficznych, wdrożenia systemu CMS oraz przeprowadzenia testów jakościowych i dostępności.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział IV: Strony WWW i grafika komputerowa).
