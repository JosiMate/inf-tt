# Responsywna strona WWW w systemie CMS – projekt zespołowy

!!! abstract "O tym temacie"

    **4 godziny lekcyjne** · Dział IV. Strony WWW i grafika komputerowa
    · podstawa programowa **II.3f**, **II.4**, **III.2**

    W zespołach po trzy–cztery osoby budujecie prawdziwy serwis internetowy
    dla wybranej organizacji: klubu, wydarzenia, przewodnika po okolicy.
    Treść piszecie w prostym języku **Markdown**, a system **MkDocs**
    z motywem Material sam zamienia ją w responsywną stronę i publikuje
    w internecie — tak powstał serwis, który właśnie czytasz.

    Pracujecie jak zespoły programistów: na **GitHubie**, ze **zgłoszeniami**
    (issues) do każdego zadania, **kamieniami milowymi** dla etapów projektu
    i **pull requestami**, które ktoś z zespołu przegląda przed scaleniem.
    Każda twoja zmiana jest podpisana twoim loginem — dlatego każdy dostaje
    **własną ocenę**, a do tego prowadzi własną kartę projektu.

    ??? abstract "Plan czterech lekcji"

        1. **Start projektu** — temat, role, repozytorium z szablonu, GitHub Pages, kamienie milowe, zgłoszenia, makieta (sekcje 1–4, ćwiczenie 1).
        2. **Treści** — Markdown, pierwszy pull request każdego, przeglądy (sekcja 6, ćwiczenie 2).
        3. **Wygląd i telefon** — kolory, obrazy, sprawdzenie na telefonie, moduły dla chętnych, zmiana ról (sekcja 7, ćwiczenie 3).
        4. **Testy i prezentacja** — audyt Lighthouse, poprawki, wystąpienia zespołów (sekcja 8, ćwiczenia 4–5).

        Szczegóły i to, co ma być gotowe po każdej lekcji: [Harmonogram](#5-harmonogram-cztery-lekcje).

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania (lekcja 1)"

    Odpowiedz w zeszycie, zanim zaczniesz projekt. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z tematu „Tworzenie stron internetowych”.** Dlaczego plik strony głównej nazywa się `index.html`?
    2. **Sprzed kilku tygodni.** Dlaczego na publicznej stronie nie umieszcza się imion i nazwisk, telefonów ani zdjęć kolegów bez ich zgody?
    3. **Z projektu w dziale II.** Jak we wspólnym dokumencie zaproponować poprawkę w cudzym tekście, żeby autor mógł ją przyjąć albo odrzucić?

    ??? success "Odpowiedzi"

        1. Gdy w adresie nie ma nazwy pliku, serwer otwiera właśnie `index.html`.
        2. Strona jest dostępna dla każdego i zapamiętują ją wyszukiwarki — dane osobowe raz opublikowane trudno usunąć, a ich publikacja wymaga zgody osoby (RODO, wizerunek).
        3. Tryb **sugerowania** — autor przyjmuje albo odrzuca zmianę. Na GitHubie taką rolę pełni **pull request**: propozycja zmiany, którą ktoś przegląda, zanim trafi do serwisu.

!!! success "Kryteria sukcesu — sprawdź się na koniec projektu"

    Po tym projekcie:

    1. Wykonam zadania przypisane mi w zgłoszeniach i dotrzymam terminów zespołu.
    2. Wprowadzę zmianę przez gałąź i pull request, który zamyka zgłoszenie, i przejrzę pull request kolegi.
    3. Napiszę podstronę w Markdownie: z nagłówkami, listą, odnośnikiem i obrazem z tekstem alternatywnym.
    4. Pokażę na wystąpieniu efekty pracy zespołu na komputerze i na telefonie.
    5. :material-plus-circle: Pełniąc różne role, rozbuduję serwis o podstrony, tabelę i grafikę i opublikuję go w GitHub Pages.
    6. :material-plus-circle: Przeprowadzę audyt Lighthouse, zgłoszę znalezione problemy i je poprawię.
    7. :material-star: Rozbuduję serwis o moduł (blog albo tagi) i dostosuję szablon — albo poprowadzę zespół jako lider.

## Jak czytać tę stronę

| Oznaczenie | Co znaczy |
| --- | --- |
| bez oznaczenia | wymagania konieczne i podstawowe — na ocenę 2 i 3 |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające — na ocenę 4 |
| :material-star: **dopełnienie** | wymagania dopełniające — na ocenę 5 |

---

## 1. Tematy do wyboru

Każdy zespół robi serwis dla innej organizacji. Organizacja może być
prawdziwa (wtedy korzystacie tylko z informacji publicznych) albo
wymyślona.

1. **Klub albo koło zainteresowań** — e-sport, robotyka, fotografia: kim jesteście, zajęcia, osiągnięcia, jak dołączyć.
2. **Wydarzenie szkolne** — turniej, dzień otwarty, konkurs: program, regulamin, zapisy, galeria.
3. **Przewodnik po okolicy** — miejsca warte odwiedzenia w powiecie: opisy, mapa dojazdu, tabela godzin otwarcia.
4. **Poradnik dla pierwszoklasisty** — pracownie, plan dnia, gdzie co załatwić, najczęstsze pytania.
5. **Mała firma** (wymyślona) — serwis komputerowy, kawiarnia: oferta, cennik w tabeli, kontakt.
6. **Własny temat** — po uzgodnieniu z nauczycielem na pierwszej lekcji.

!!! warning "Serwis jest publiczny"

    Na stronie i w repozytorium **nie umieszczacie** imion i nazwisk,
    telefonów, adresów ani zdjęć osób, które nie zgodziły się na publikację.
    Zespół podpisuje się nazwą, nie nazwiskami. Obrazy — tylko własne albo
    z licencją, która pozwala ich użyć, z podanym autorem.

---

## 2. Jak działa wasz system

**CMS** (*Content Management System*, system zarządzania treścią) pozwala
budować i zmieniać serwis bez pisania każdej strony w HTML. Są dwa główne
rodzaje:

| | CMS z bazą danych (np. WordPress, Joomla) | generator stron (MkDocs — wasz projekt) |
| --- | --- | --- |
| gdzie jest treść | w bazie danych (MySQL / MariaDB) | w plikach tekstowych `.md` w repozytorium |
| kiedy powstaje HTML | przy każdym wejściu na stronę — serwer uruchamia PHP | raz, po każdej zmianie — generator buduje gotowe pliki |
| czego potrzebuje serwer | PHP i bazy danych (jak w XAMPP) | tylko zwykłego hostingu plików (GitHub Pages) |
| jak się edytuje | panel administracyjny w przeglądarce | edytor plików na GitHubie |
| historia zmian | ograniczona | każda zmiana zapisana: kto, kiedy, co — i można ją cofnąć |

Droga od waszej zmiany do strony w internecie:

```text
plik .md na GitHubie ──► pull request ──► scalenie do main
       ──► GitHub Actions uruchamia MkDocs (zakładka Actions, ok. 1 minuty)
       ──► gotowy HTML w gałęzi gh-pages ──► GitHub Pages ──► https://login.github.io/repozytorium/
```

Motyw **Material** jest **responsywny**: menu na telefonie chowa się pod
przyciskiem, tabele dają się przewijać, obrazy się zmniejszają. Wasze
zadanie to sprawdzić, czy wasza treść też dobrze wygląda na małym ekranie.

---

## 3. Role w zespole

Każda osoba ma jedną rolę główną, ale **wszyscy piszą treść i wszyscy
robią pull requesty**. Rola mówi, kto za co odpowiada.

| Rola | Odpowiada za |
| --- | --- |
| **lider** | repozytorium i zaproszenia, kamienie milowe, przydział zgłoszeń, pilnowanie terminów, scalanie pull requestów, kontakt z nauczycielem |
| **projektant** | makieta, menu (`nav`), kolory i wygląd, grafika i logo, sprawdzanie na telefonie |
| **redaktor** | teksty: poprawność, styl, nagłówki, odnośniki, teksty alternatywne obrazów, prawa do obrazów |
| **tester** | przeglądy pull requestów, audyt Lighthouse, zgłaszanie błędów (szablon „Błąd”) i sprawdzanie poprawek |

W zespole trzyosobowym rolę testera dzielą między siebie projektant
i redaktor.

!!! tip "Zmiana ról w trakcie projektu"

    Kto chce pokazać, że potrafi pełnić **różne role** — wymaganie
    rozszerzające — zamienia się po drugiej lekcji rolą z kimś z zespołu.
    Zapisujecie to w kartach projektu obu osób, a zmianę widać też
    w zgłoszeniach: nowa rola, nowe zadania.

---

## 4. Praca zespołowa na GitHubie

Konto na [github.com](https://github.com) zakłada się od 13. roku życia.
Wybierz login **bez nazwiska** — będzie widoczny publicznie. Konto załóż
**przed pierwszą lekcją projektu** (trzeba potwierdzić e-mail). GitHub wymaga
od osób, które wprowadzają zmiany w repozytoriach, **weryfikacji dwuetapowej**
— gdy o nią poprosi, włącz ją aplikacją na telefonie i zapisz kody odzyskiwania.
Kto nie może założyć konta, ustala z nauczycielem na pierwszej lekcji inny
sposób pracy.

### Start: repozytorium zespołu (lider)

1. Otwórz [szablon projektu](https://github.com/JosiMate/szablon-projektu-www) → **Use this template → Create a new repository**. Nazwa, np. `klub-robotyki`; widoczność **Public**.
2. **Settings → Collaborators → Add people** — dodaj loginy zespołu. Każdy musi **przyjąć zaproszenie** (e-mail albo dzwonek powiadomień na GitHubie).
3. Zaczekaj na zielony znaczek w zakładce **Actions**, potem **Settings → Pages**: *Deploy from a branch*, gałąź `gh-pages`, folder `/ (root)`, *Save*. Po 1–2 minutach serwis działa pod `https://<twój-login>.github.io/<repozytorium>/`.
4. W `mkdocs.yml` wpisz nazwę serwisu, opis i adres (`site_url`) — pierwsze zgłoszenie dla siebie.

### Kamienie milowe = etapy projektu

**Issues → Milestones → New milestone** — cztery etapy, każdy z terminem
(data lekcji):

| Kamień milowy | Co obejmuje |
| --- | --- |
| **1. Koncepcja** | temat, grupa odbiorców, makieta strony głównej i menu, lista podstron |
| **2. Treści i grafika** | teksty podstron, obrazy, tabela, strona kontaktowa |
| **3. Wygląd i telefon** | kolory, menu, logo, sprawdzenie na telefonie, moduły dla chętnych |
| **4. Testy i prezentacja** | audyt Lighthouse, poprawki, przygotowanie wystąpienia |

Na stronie kamienia milowego widać pasek postępu — ile zgłoszeń zamknięto.

### Zgłoszenia (issues) — jedno zadanie, jedna osoba

**Issues → New issue → Zadanie**. Dobre zgłoszenie:

- ma tytuł zaczynający się od czasownika: *„Napisz podstronę Zajęcia”*, *„Dodaj tabelę godzin otwarcia”*;
- mówi, kiedy zadanie jest skończone (lista *Gotowe, gdy*);
- ma **jedną** przypisaną osobę (**Assignees**) i kamień milowy (**Milestone**);
- jest na jedną–dwie godziny pracy — większe dzielimy na kilka.

Błędy (także z audytu) zgłasza się szablonem **Błąd**: gdzie, co widać, co
powinno być, zrzut ekranu. Lider może dodatkowo założyć tablicę
**Projects → New project → Board** z kolumnami *Do zrobienia / W toku /
Gotowe* — zgłoszenia przesuwa się wtedy między kolumnami.

### Zmiana przez pull request

Nikt nie zmienia gałęzi `main` bezpośrednio. Każda zmiana idzie tak:

1. Otwórz plik w repozytorium (np. `docs/o-nas.md`) i kliknij ołówek (*Edit this file*). Więcej plików naraz wygodniej zmienisz w edytorze w przeglądarce: naciśnij ++period++ na stronie repozytorium.
2. Napisz zmianę, sprawdź ją w zakładce **Preview**.
3. **Commit changes…** → opisz zmianę w jednym zdaniu → wybierz **Create a new branch for this commit and start a pull request**.
4. W opisie pull requestu zostaw `Closes #numer` — numer twojego zgłoszenia — i odhacz listę kontrolną. **Create pull request**.
5. Ktoś z zespołu przegląda zmianę: **Files changed → Review changes** → komentarz albo **Approve**.
6. Po akceptacji lider (albo autor) klika **Merge pull request**. Zgłoszenie zamyka się samo, a po minucie zmiana jest na stronie.

Obrazy wgrywasz tak samo: w folderze `docs/img` → **Add file → Upload files**
→ nowa gałąź i pull request.

!!! example "Przewiduj"

    Pull request ma w opisie `Closes #7`. Tester go zaakceptował, a lider
    scalił. Co się stanie ze zgłoszeniem #7? A co, jeśli pull request
    zamknięto bez scalania?

    ??? success "Przewiduj, potem sprawdź wynik"

        Po scaleniu do `main` zgłoszenie #7 **zamknie się samo**, a przy nim
        pojawi się odnośnik do pull requestu. Jeśli pull request zamknięto
        bez scalania, zgłoszenie **zostaje otwarte** — zadanie nie jest
        zrobione.

---

## 5. Harmonogram — cztery lekcje

| Lekcja | Co robicie | Co ma być gotowe na koniec lekcji |
| :---: | --- | --- |
| **1** | wybór tematu, role, konta, repozytorium z szablonu, zaproszenia, GitHub Pages, kamienie milowe, makieta na kartce (zdjęcie w zgłoszeniu) | serwis z szablonu działa pod adresem; co najmniej 8 zgłoszeń z osobami i kamieniami milowymi; karta projektu: zadania 1 |
| **2** | każdy: pierwszy pull request; treści podstron, obrazy, tabela, przeglądy | wszystkie podstrony w wersji roboczej; każdy ma co najmniej jeden scalony pull request i jeden przegląd |
| **3** | wygląd i menu, sprawdzenie na telefonie, poprawki treści; chętni — moduły i własny szablon; zmiana ról | kamień milowy 3 zamknięty; serwis wygląda dobrze na telefonie |
| **4** | audyt Lighthouse, zgłoszenia z audytu i poprawki; wystąpienia zespołów — **5 minut** i 2 minuty na pytania | wyniki audytu przed i po poprawkach; wystąpienie; samoocena w karcie projektu |

Między lekcjami pracujecie w domu — repozytorium jest dostępne z każdego
komputera z przeglądarką.

---

## 6. Treść w Markdownie

Każda podstrona to plik `.md` w folderze `docs`. Markdown to zwykły tekst
z kilkoma znakami, które generator zamienia na znaczniki HTML — te same,
które znasz z tematu [Tworzenie stron internetowych](tworzenie-stron-internetowych.md).

| Chcesz | Piszesz w Markdownie | Wychodzi w HTML |
| --- | --- | --- |
| nagłówek | `## Zajęcia` | `<h2>` |
| pogrubienie | `**ważne**` | `<strong>` |
| lista punktowana | `- punkt` (każdy w nowym wierszu) | `<ul>` i `<li>` |
| lista numerowana | `1. krok` | `<ol>` i `<li>` |
| odnośnik do podstrony | `[Kontakt](kontakt.md)` | `<a href="…">` |
| obraz | `![Uczniowie przy robocie z klocków](img/robot.webp)` | `<img src="…" alt="…">` |
| tabela | `| Dzień | Godzina |` i pod spodem `| --- | --- |` | `<table>` |
| ramka (moduł *admonition*) | `!!! tip "Pamiętaj"` i treść wciętą o 4 spacje | wyróżniona ramka |

Pusty wiersz oddziela akapity. Nagłówek `#` (pierwszego stopnia) jest na
podstronie jeden — to jej tytuł.

!!! example "Przewiduj"

    Jakie znaczniki HTML powstaną z tego fragmentu i ile będzie punktów
    listy?

    ```markdown
    ## Nasze zajęcia
    - robotyka
    - druk 3D
    Zapisy w sekretariacie.
    ```

    ??? success "Przewiduj, potem sprawdź wynik"

        `<h2>Nasze zajęcia</h2>` i lista `<ul>` z **trzema** punktami:
        ostatni wiersz bez pustego wiersza przed nim dokleja się do
        punktu „druk 3D”. Żeby był osobnym akapitem, przed
        „Zapisy w sekretariacie.” musi być pusty wiersz.

### Menu serwisu — `nav` w `mkdocs.yml`

Kolejność i nazwy podstron w menu ustala sekcja `nav`:

```yaml
nav:
  - Start: index.md
  - Zajęcia: zajecia.md
  - Galeria: galeria.md
  - Kontakt: kontakt.md
```

!!! example "Przewiduj"

    Ktoś dopisał podstronę do `nav`, ale wiersz wciął **tabulatorem**
    zamiast dwóch spacji, i scalił zmianę. Co zobaczycie w zakładce
    **Actions** i co stanie się ze stroną w internecie?

    ??? success "Przewiduj, potem sprawdź wynik"

        W **Actions** — czerwony krzyżyk: YAML nie pozwala wcinać
        tabulatorami i budowanie się zatrzyma. Strona w internecie
        **zostaje w poprzedniej wersji** — nowa się nie opublikowała.
        Kliknij czerwone uruchomienie, przeczytaj komunikat błędu (zwykle
        z numerem wiersza), popraw i zrób nowy pull request.

---

## 7. Wygląd, obrazy i telefon

### Kolory i menu

W `mkdocs.yml`, w sekcji `theme`, projektant ustawia kolor przewodni
(`primary`) i akcent (`accent`), np. `teal`, `deep orange`, `green` — listę
nazw podaje [dokumentacja motywu Material](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/).

### Obrazy na stronę

- Zdjęcia zapisuj w **WebP** albo JPEG, a grafiki z napisami i logo w **SVG** albo PNG — tak jak w temacie [Grafika 2D i 3D](grafika-2d-i-3d.md).
- Zmniejsz zdjęcie do szerokości około 1200 px i rozmiaru do ~300 KB (GIMP: *Obraz → Skaluj obraz*, eksport do WebP; albo [Squoosh](https://squoosh.app) w przeglądarce).
- Nazwy plików małymi literami, bez spacji i polskich znaków: `turniej-2026.webp`.
- Każdy obraz z treścią ma tekst alternatywny w nawiasie kwadratowym `![…]`.

### Sprawdzenie na telefonie

Otwórz serwis na własnym telefonie albo w ++f12++ → ikona telefonu
(++ctrl+shift+m++). Sprawdź: czy menu się otwiera, czy tabele nie
rozpychają strony, czy tekst da się czytać bez powiększania, czy obrazy się
mieszczą. Każdy problem — zgłoszenie „Błąd”.

### :material-star: Moduły i własny szablon

:material-star: **dopełnienie**

W `mkdocs.yml` są zakomentowane (`#`) moduły dla chętnych. Żeby włączyć
moduł, usuń `#` i spację na początku wiersza — z zachowaniem wcięcia.

| Co | Jak |
| --- | --- |
| **logo i ikona karty** | wgraj `docs/img/logo.svg`, odkomentuj `logo:` i `favicon:` |
| **aktualności (blog)** | odkomentuj `- blog`, utwórz `docs/blog/index.md` (tytuł `# Aktualności`) i wpisy w `docs/blog/posts/` — każdy wpis zaczyna się od `---`, wiersza `date: 2026-12-01` i `---`; dodaj `Aktualności: blog/index.md` do `nav` |
| **tagi** | odkomentuj `- tags`; na początku podstrony między `---` wpisz `tags:` i listę tagów |
| **własne style** | odkomentuj `extra_css` i oba wiersze pod nim; reguły CSS pisz w `docs/stylesheets/extra.css` |

Szczegóły: [blog](https://squidfunk.github.io/mkdocs-material/plugins/blog/),
[tagi](https://squidfunk.github.io/mkdocs-material/plugins/tags/),
[własne CSS](https://squidfunk.github.io/mkdocs-material/customization/)
w dokumentacji motywu (po angielsku). Każdy moduł włączaj w osobnym pull
requeście — jeśli coś się zepsuje, łatwo znaleźć przyczynę.

---

## 8. Dostępność, wyszukiwarki i audyt Lighthouse

:material-plus-circle: **rozszerzenie**

**Dostępność** — zasady WCAG z tematu
[Tworzenie stron internetowych](tworzenie-stron-internetowych.md#9-dostepnosc):
teksty alternatywne, nagłówki po kolei, opisowe odnośniki. Kontrast tekstu
zwykłego z tłem według WCAG (poziom AA) to co najmniej **4,5 : 1** —
uważaj na jasne kolory przewodnie z białym tekstem.

**Wyszukiwarki (SEO)** — opis serwisu w `site_description` trafia do
znacznika `<meta name="description">`, a tytuł podstrony (nagłówek `#`)
do `<title>`. Tytuły mówią, co jest na stronie: „Zajęcia klubu robotyki”,
a nie „Strona 2”.

**Audyt Lighthouse** w Chrome: otwórz opublikowany serwis → ++f12++ →
zakładka **Lighthouse** → zaznacz kategorie i urządzenie (*Mobile*) →
**Analyze page load**. Wynik 0–100 w czterech kategoriach:

| Kategoria | Co sprawdza |
| --- | --- |
| **Performance** (wydajność) | szybkość wczytywania — najczęściej psują ją za duże obrazy |
| **Accessibility** (ułatwienia dostępu) | część zasad WCAG: `alt`, kontrast, nazwy odnośników, kolejność nagłówków |
| **Best Practices** (sprawdzone metody) | bezpieczeństwo i poprawność, np. HTTPS, błędy w konsoli |
| **SEO** | tytuły, opis, czytelność strony dla wyszukiwarek |

Pod wynikiem Lighthouse wypisuje konkretne problemy. Każdy problem, który
dotyczy **waszej treści** (np. obraz bez `alt`, za duże zdjęcie), tester
zgłasza jako „Błąd”, a po poprawkach audyt robi się jeszcze raz. Wynik
zależy też od komputera i łącza — porównujcie pomiary z tego samego
komputera. Lighthouse nie sprawdza wszystkiego: czy tekst alternatywny ma
sens, ocenia człowiek.

---

## 9. Wymagania wobec serwisu

### Podstawowe

- strona główna i co najmniej **cztery podstrony** w menu, w tym kontakt;
- na każdej podstronie nagłówek, akapity i co najmniej jedna lista albo odnośnik;
- co najmniej **cztery obrazy** z tekstem alternatywnym, własne albo z licencją (autor i źródło podane pod obrazem albo na podstronie „O serwisie”);
- uzupełnione `site_name`, `site_description` i `site_url`;
- serwis opublikowany i działający pod adresem GitHub Pages.

### :material-plus-circle: Rozszerzenie

- co najmniej jedna **tabela** z danymi (cennik, plan, godziny otwarcia);
- serwis sprawdzony na telefonie, problemy zgłoszone i poprawione;
- audyt Lighthouse przed poprawkami i po nich.

### :material-star: Dopełnienie

- włączony co najmniej jeden **moduł** (blog albo tagi) z treścią;
- **dostosowany szablon**: własna paleta kolorów, logo i co najmniej jedna własna reguła w `extra.css`;
- *Accessibility* w Lighthouse co najmniej 90.

!!! warning "Najczęstsze błędy w projektach"

    | Objaw | Przyczyna i naprawa |
    | --- | --- |
    | czerwony krzyżyk w **Actions**, strona się nie zmienia | błąd w `mkdocs.yml` (tabulator, brak spacji po `:` albo `-`) — przeczytaj log, popraw w nowym pull requeście |
    | pod adresem strony błąd 404 | GitHub Pages nie jest ustawione na gałąź `gh-pages` albo publikacja jeszcze trwa — sprawdź **Settings → Pages** i **Actions** |
    | obraz się nie wyświetla | zła ścieżka albo wielkość liter: `img/Robot.webp` a plik `robot.webp`; ścieżki zaczynają się od folderu `docs` |
    | podstrony nie ma w menu | plik nie jest dopisany do `nav` w `mkdocs.yml` |
    | zmiana scalona, a na stronie stara wersja | publikacja trwa około minuty; potem odśwież z pominięciem pamięci podręcznej (++ctrl+f5++) |
    | konflikt przy scalaniu pull requestu | dwie osoby zmieniły te same wiersze — jedno zgłoszenie = jeden plik = jedna osoba; konflikt rozwiązuje autor drugiego pull requestu (**Resolve conflicts**) |
    | wszystko robi lider, reszta nie ma zgłoszeń | każdy ma przypisane zgłoszenia od pierwszej lekcji — bez nich nie ma czego ocenić |
    | zdjęcie ma 5 MB, Performance ma słaby wynik | zmniejsz obraz i zapisz jako WebP (sekcja 7) |

---

## 10. Jak oceniany jest projekt

Projekt oceniany jest **poziomami wymagań**. Każdy członek zespołu dostaje
**własną ocenę** — z serwisu zespołu i z tego, co sam zrobił: widać to
w zgłoszeniach przypisanych do ciebie, w twoich pull requestach i przeglądach
(GitHub podpisuje je twoim loginem) oraz w karcie projektu.

| Poziom | Co musisz pokazać | Ocena |
| :---: | --- | :---: |
| **K** | uczestniczyłeś w pracy zespołu: jesteś w repozytorium i wykonałeś co najmniej jedno swoje zgłoszenie | 2 |
| **P** | aktywnie pracowałeś: co najmniej trzy twoje zgłoszenia zamknięte przez twoje pull requesty, co najmniej jeden przegląd pull requestu kolegi; twoja podstrona ma nagłówki, listę, odnośnik i obraz z `alt`; pokazałeś efekty na wystąpieniu | 3 |
| **R** | pełniłeś różne role; serwis zespołu spełnia wymagania podstawowe i rozszerzone, jest opublikowany i sprawdzony na telefonie; zgłosiłeś albo poprawiłeś problemy z audytu Lighthouse | 4 |
| **D** | byłeś liderem odpowiedzialnym za zespół i projekt (kamienie milowe, przydział, scalanie, terminy) **albo** samodzielnie rozbudowałeś serwis o moduł i dostosowałeś szablon; serwis jest responsywny i ma *Accessibility* co najmniej 90 | 5 |

Ocenę wyznacza najwyższy poziom spełniony w całości, razem z niższymi.
Zadanie na ocenę celującą jest opisane w spisie tematów, w zadaniach
działu IV.

!!! warning "Projekt zespołowy nie jest ucieczką od pracy"

    Kto nie pracował, nie ma zgłoszeń, pull requestów ani przeglądów
    podpisanych swoim loginem — a ja zaglądam do repozytoriów na każdej
    lekcji. Zasady samodzielności i weryfikacji z
    [wymagań edukacyjnych](wymagania-i-bhp.md) dotyczą także projektów.

---

## Ćwiczenia

Ćwiczenie 1 robicie na pierwszej lekcji, 2 na drugiej, 3 na trzeciej,
4 i 5 na czwartej. Wyniki każdy wpisuje do swojej karty projektu.

### :material-console: Ćwiczenie 1 — start projektu

1. Wybierzcie temat i role. Lider zakłada repozytorium z szablonu, zaprasza zespół i włącza GitHub Pages (sekcja 4).
2. Narysujcie na kartce makietę strony głównej i menu. Zdjęcie makiety dodajcie do zgłoszenia „Makieta”.
3. Załóżcie cztery kamienie milowe i co najmniej osiem zgłoszeń — każde z jedną osobą i kamieniem milowym.

### :material-console: Ćwiczenie 2 — pierwszy pull request

Każdy wykonuje jedno swoje zgłoszenie (np. podstronę) przez gałąź
i pull request z `Closes #…`, prosi kogoś z zespołu o przegląd
i przegląda pull request kolegi.

??? tip "Podpowiedź 1"

    Nowa podstrona to nowy plik: w folderze `docs` → **Add file → Create new
    file** → nazwa `zajecia.md`. Pierwszy wiersz to nagłówek `# Zajęcia`.
    Nie zapomnij dopisać pliku do `nav` — to może być osobne zgłoszenie
    projektanta.

??? tip "Podpowiedź 2"

    Przy zapisie wybierz **Create a new branch for this commit and start a
    pull request**, a nie *Commit directly to the main branch*. W opisie
    pull requestu wpisz `Closes #` i numer swojego zgłoszenia — GitHub
    podpowie listę.

??? tip "Podpowiedź 3"

    Przegląd: w pull requeście kolegi otwórz **Files changed**, przy
    wierszu kliknij **+**, żeby dodać komentarz, a na koniec **Review
    changes → Approve** albo **Comment**. Napisz przynajmniej jedną
    konkretną uwagę: literówka, brakujący `alt`, niejasny nagłówek.

### :material-console: Ćwiczenie 3 — wygląd i telefon :material-plus-circle:

1. Projektant ustawia kolory i menu; wszyscy sprawdzają serwis na telefonie i zgłaszają problemy.
2. Zespół uzupełnia tabelę i brakujące obrazy, poprawia zgłoszone błędy.
3. :material-star: Chętni włączają moduł (blog albo tagi) i dostosowują szablon (sekcja 7).

### :material-console: Ćwiczenie 4 — audyt Lighthouse :material-plus-circle:

1. Tester robi audyt opublikowanego serwisu w trybie *Mobile*, zapisuje cztery wyniki i dodaje zrzut do zgłoszenia „Audyt”.
2. Każdy problem dotyczący waszej treści — osobne zgłoszenie „Błąd”. Poprawki przez pull requesty.
3. Audyt jeszcze raz; wyniki przed i po wpisujecie do karty.

??? tip "Podpowiedź 1"

    Rozwiń kategorię z najniższym wynikiem — Lighthouse wypisuje problemy
    od najważniejszych. Interesują was te, które dotyczą obrazów, tekstów
    i kolorów, a nie samego motywu.

??? tip "Podpowiedź 2"

    *Image elements do not have [alt] attributes* — znajdź obraz bez
    tekstu w `![…]`. *Properly size images* albo duży *Largest Contentful
    Paint* — zmniejsz zdjęcie i zapisz w WebP.

??? tip "Podpowiedź 3"

    *Background and foreground colors do not have a sufficient contrast
    ratio* — zmień `primary` w `mkdocs.yml` na ciemniejszy kolor albo popraw
    regułę w `extra.css`. Po każdej poprawce poczekaj na publikację i zrób
    audyt od nowa.

### :material-console: Ćwiczenie 5 — wystąpienie

W 5 minut pokażcie serwis na komputerze i na telefonie (albo w trybie
urządzenia w ++f12++), opowiedzcie, dla kogo jest, pokażcie kamienie milowe
i jedną zmianę od zgłoszenia przez przegląd do strony. Każdy mówi o swojej
części.

---

## Sprawdź się

Test z natychmiastową odpowiedzią. **Nie jest oceniany i nic nie wysyła.**

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Czym różni się WordPress od MkDocs, którego używacie w projekcie?",
  "opcje": ["WordPress trzyma treść w bazie danych i buduje stronę przy każdym wejściu, MkDocs raz generuje gotowe pliki HTML z plików Markdown", "WordPress nie jest systemem CMS", "MkDocs wymaga PHP i bazy danych", "Nie ma żadnej różnicy"],
  "poprawna": 0,
  "wyjasnienie": "CMS z bazą danych potrzebuje PHP i bazy na serwerze; generator stron buduje HTML raz, a strona działa na zwykłym hostingu plików, np. GitHub Pages."
 },
 {
  "pytanie": "Jak powinno wyglądać dobre zgłoszenie (issue) w projekcie?",
  "opcje": ["„Strona” — bez opisu, dla całego zespołu", "„Dodaj tabelę godzin otwarcia” — z listą „Gotowe, gdy”, jedną osobą i kamieniem milowym", "„Zrobić wszystko do piątku”", "Zgłoszenia zakłada tylko nauczyciel"],
  "poprawna": 1,
  "wyjasnienie": "Jedno konkretne zadanie z czasownikiem w tytule, kryterium ukończenia, jedną przypisaną osobą i etapem projektu."
 },
 {
  "pytanie": "Pull request ma w opisie „Closes #4”. Co się stanie po jego scaleniu?",
  "opcje": ["Zostanie usunięte repozytorium", "Nic — to tylko komentarz", "Zgłoszenie #4 zamknie się samo", "Zgłoszenie #4 zostanie przypisane do lidera"],
  "poprawna": 2,
  "wyjasnienie": "Słowo kluczowe Closes łączy pull request ze zgłoszeniem; po scaleniu do głównej gałęzi zgłoszenie zamyka się automatycznie."
 },
 {
  "pytanie": "Po scaleniu zmiany w zakładce Actions jest czerwony krzyżyk. Co to znaczy?",
  "opcje": ["Strona została usunięta z internetu", "Repozytorium jest prywatne", "Ktoś odrzucił pull request", "Budowanie serwisu się nie udało — w internecie zostaje poprzednia wersja, trzeba przeczytać log i poprawić błąd"],
  "poprawna": 3,
  "wyjasnienie": "Najczęstsza przyczyna to błąd w mkdocs.yml, np. wcięcie tabulatorem. Log wskazuje wiersz z błędem."
 },
 {
  "pytanie": "Lighthouse w kategorii Performance daje słaby wynik, a serwis ma kilka zdjęć prosto z telefonu. Co najbardziej pomoże?",
  "opcje": ["Zmniejszenie zdjęć i zapis w formacie WebP", "Dodanie kolejnych podstron", "Zmiana koloru przewodniego", "Usunięcie wyszukiwarki"],
  "poprawna": 0,
  "wyjasnienie": "Zdjęcia z telefonu mają po kilka megabajtów. Szerokość około 1200 px i WebP zmniejszają je wielokrotnie."
 },
 {
  "pytanie": "Jak ustalana jest ocena każdego członka zespołu?",
  "opcje": ["Wszyscy dostają ocenę lidera", "Z serwisu zespołu i z tego, co dana osoba zrobiła — zgłoszenia, pull requesty i przeglądy z jej loginem oraz karta projektu", "Wyłącznie z wyniku Lighthouse", "Ocenę wystawia zespół w głosowaniu"],
  "poprawna": 1,
  "wyjasnienie": "Każdy ma własną ocenę według poziomów wymagań; udział każdej osoby widać w historii repozytorium i w karcie projektu."
 }
]
</script>
</div>

---

## Karta projektu

Kartę projektu prowadzi **każdy członek zespołu osobno** — przez wszystkie
cztery lekcje. Na jej podstawie i na podstawie repozytorium ustalana jest
twoja ocena.

<div class="kp-podsumowanie" data-karta="responsywna-strona-www-w-systemie-cms-projekt"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę projektu"

    !!! info "Twoje odpowiedzi zostają na twoim komputerze"

        Karta prowadzona przez cztery lekcje to także praca w domu — zapisuj
        postęp do pliku przyciskiem **Zapisz do pliku** pod kartą.

    <div class="karta-pracy" data-karta="responsywna-strona-www-w-systemie-cms-projekt"></div>

### Jak oddać projekt

1. Lider wpisuje **adres repozytorium i adres opublikowanego serwisu** w
   **Dzienniku VULCAN → Zadania domowe**, w zadaniu *Projekt zespołowy — dział IV*,
   najpóźniej w dniu wystąpień. Nie trzeba niczego wysyłać — sprawdzam
   serwis i repozytorium.
2. Każdy członek zespołu oddaje **swoją kartę projektu**: przyciskiem **Wyślij do
   nauczyciela** (z kodem z karteczki) albo jako plik Worda w tym samym zadaniu w dzienniku.

---

## Sprawdź, czy rozumiesz

??? question "Po co pull request, skoro można od razu zmienić plik w gałęzi main?"

    Zmiana w `main` od razu trafia do internetu — razem z literówką,
    złym obrazem albo błędem, który zatrzyma publikację. Pull request to
    propozycja: ktoś drugi ją przegląda, a zespół widzi, kto, co i dlaczego
    zmienił. Dzięki `Closes #…` każde zadanie ma ślad od zgłoszenia do
    strony. Tak pracują zespoły programistów — i to samo zobaczysz na
    praktykach zawodowych.

??? question ":material-plus-circle: Kiedy lepiej wybrać WordPressa, a kiedy generator stron jak MkDocs?"

    WordPress — gdy treść często zmieniają osoby, które nie chcą widzieć
    plików, i potrzebne są funkcje działające na serwerze: komentarze,
    sklep, formularze, konta użytkowników. Wymaga PHP, bazy danych
    i regularnych aktualizacji. Generator — gdy serwis to głównie treść
    (dokumentacja, poradnik, wizytówka): działa na darmowym hostingu
    plików, jest szybki, nie ma panelu administracyjnego do włamania,
    a historia zmian jest w repozytorium.

---

!!! info "Materiały uzupełniające"

    - Szablon repozytorium projektu: [JosiMate/szablon-projektu-www](https://github.com/JosiMate/szablon-projektu-www)
    - Dokumentacja motywu: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) (po angielsku)
    - Zgłoszenia, pull requesty i przeglądy: [GitHub Docs — Issues](https://docs.github.com/en/issues) i [Pull requests](https://docs.github.com/en/pull-requests) (po angielsku)
    - HTML, CSS i publikacja: temat [Tworzenie stron internetowych](tworzenie-stron-internetowych.md)

*Szablon repozytorium zbudowano i sprawdzono z MkDocs 1.6 i Material 9.8,
także z modułami blog i tagi. Stan sprawdzony 15 listopada 2026 r.*
