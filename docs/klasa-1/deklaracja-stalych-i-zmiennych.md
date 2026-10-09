# Deklaracja stałych i zmiennych w odniesieniu do wbudowanych typów danych

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział I. Wprowadzenie, środowisko pracy i podstawy programowania
    · efekt kształcenia **INF.03.01**

    Każdy program komputerowy przetwarza dane — od prostych liczb i tekstów po skomplikowane struktury. Aby przechowywać te informacje w pamięci operacyjnej komputera, używamy **zmiennych** oraz **stałych**. W tym temacie dowiesz się, jak poprawnie deklarować zmienne (`let`) i stałe (`const`) w języku JavaScript, poznasz podstawowe wbudowane typy danych, reguły czystego kodu (`camelCase`) oraz mechanizm typowania dynamicznego.

    ??? abstract "Plan dwóch lekcji"

        | Lekcja | Sekcje | Ćwiczenia |
        | :---: | --- | --- |
        | 1 | 1. Pojęcie zmiennej i stałej (`let`, `const`, `var`)<br>2. Wbudowane typy danych w JavaScript (`number`, `string`, `boolean`, `undefined`, `null`) | Ćwiczenie 1, Ćwiczenie 2 |
        | 2 | 3. Zasady deklaracji i konwencje nazewnictwa (`camelCase`)<br>4. Typowanie dynamiczne i przykłady z życia | Ćwiczenie 3, Ćwiczenie 4 |

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzedniej lekcji.** W jaki sposób w skrypcie JavaScript wypisać tekst lub wynik działania w konsoli deweloperskiej przeglądarki (F12)?
    2. **Sprzed kilku tygodni.** Który element komputera odpowiada za przechowywanie danych podczas działania programu (pamięć ulotna, czyszczona po wyłączeniu zasilania)?
    3. **Z dawniejszych tematów.** Czym różni się stała wartość (np. stała matematyczna $\pi$ lub stawka podatku VAT) od wartości zmieniającej się w czasie działania programu?

    ??? success "Odpowiedzi"

        1. Służy do tego polecenie `console.log("Twój tekst");`.
        2. Jest to pamięć operacyjna **RAM** (Random Access Memory).
        3. Stała ma niezmienną wartość przez cały czas działania programu, natomiast zmienna może przyjmować różne wartości w trakcie jego wykonywania.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Zadeklaruję zmienne za pomocą `let` oraz stałe za pomocą `const` i wyjaśnię różnicę między nimi.
    2. Rozróżnię i zastosuję podstawowe wbudowane typy danych: `number`, `string`, `boolean`, `undefined` oraz `null`.
    3. Zastosuję poprawne identyfikatory i konwencję `camelCase` oraz uniknę stosowania słów zastrzeżonych.
    4. Wyjaśnię zjawisko typowania dynamicznego w języku skryptowym i prześledzę zmianę typu zmiennej.
    5. Sprawdzę typ wartości za pomocą operatora `typeof` oraz zabezpieczę dane przed niepożądaną mutacją.

---

## 1. Zmienne i stałe — rezerwacja pamięci (`let`, `const`, `var`)

Zmienna lub stała to nazwany obszar w pamięci RAM komputera, przeznaczony do przechowywania określonej wartości. Deklarując zmienną, informujemy interpreter języka skryptowego, aby zarezerwował miejsce w pamięci i przypisał mu wybraną nazwę (identyfikator).

W języku JavaScript wyróżniamy trzy słowa kluczowe służące do deklaracji:

- **`const` (constant)** — deklaruje **stałą**. Wartość musimy przypisać od razu w momencie deklaracji. Próba późniejszej zmiany przypisanej wartości spowoduje błąd wykonania programu (`TypeError`).
- **`let`** — deklaruje **zmienną o zasięgu blokowym**. Wartość zmiennej zadeklarowanej przez `let` można wielokrotnie modyfikować w trakcie działania programu.
- **`var`** — starszy sposób deklaracji zmiennych (zasięg funkcyjny). W nowoczesnym standardzie JavaScript (ES6+) unika się stosowania `var` na rzecz `let` i `const`, aby zapobiec trudnym do wykrycia błędom.

| Słowo kluczowe | Modyfikacja wartości | Obowiązkowa inicjalizacja | Zastosowanie |
| --- | :---: | :---: | --- |
| **`const`** | Nie (wartość stała) | Tak | Wartości stałe (stawka VAT, adres serwera, domyślny limit) |
| **`let`** | Tak (wartość zmienna) | Nie (domyślnie `undefined`) | Wartości zmieniające się (wynik punktowy, stan koszyka, licznik pętli) |
| **`var`** | Tak | Nie | Przestarzała konstrukcja — nie zaleca się stosowania |

 Przeanalizuj poniższy kod i zastanów się, co wypisze konsola po jego uruchomieniu:

```javascript
const maxLiczbaProbow = 3;
let bieżącaProba = 1;

bieżącaProba = 2;
console.log("Bieżąca próba:", bieżącaProba);

// maxLiczbaProbow = 5; // BŁĄD! TypeError: Assignment to constant variable.
```

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    Bieżąca próba: 2
    ```
    *(Gdybyśmy odkomentowali linię `maxLiczbaProbow = 5;`, przeglądarka zgłosiłaby błąd `TypeError`, ponieważ stałej `const` nie można modyfikować po przypisaniu).*

---

## 2. Wbudowane typy danych w JavaScript

W języku JavaScript występują typy danych podzielone na typy proste (prymitywne) oraz typy referencyjne (obiektowe). Na tym etapie skupiamy się na podstawowych **typach prostych**:

1. **`number`** — reprezentuje liczby całkowite oraz zmiennoprzecinkowe (np. `42`, `-7`, `3.14`).
2. **`string`** — reprezentuje tekst (łańcuch znaków). Tekst ujmujemy w cudzysłowy podwójne `"..."`, pojedyncze `'...'` lub grawisy `` `...` ``.
3. **`boolean`** — typ logiczny przyjmujący jedną z dwóch wartości: `true` (prawda) lub `false` (fałsz).
4. **`undefined`** — oznacza zmienną, która została zadeklarowana, ale nie przypisano jej jeszcze żadnej wartości.
5. **`null`** — celowy, jawny brak wartości lub obiektu (wartość pusta przypisana przez programistę).

Do sprawdzania aktualnego typu danych w kodzie służy operator **`typeof`**.

| Wartość | Typ danych (`typeof`) | Opis |
| --- | --- | --- |
| `100` lub `19.99` | `"number"` | Liczba całkowita lub rzeczywista |
| `"Jan Kowalski"` | `"string"` | Ciąg znaków (napis) |
| `true` lub `false` | `"boolean"` | Wartość logiczna |
| `let x;` | `"undefined"` | Brak przypisanej wartości |
| `null` | `"object"` *(zaszłości historyczne)* | Celowy brak wartości |

```javascript
let wynikGry = 150;
let nazwaGracza = "Anna";
let czyZalogowany = true;
let brakDanych;
let wybranaOpcja = null;

console.log(typeof wynikGry);
console.log(typeof nazwaGracza);
console.log(typeof czyZalogowany);
console.log(typeof brakDanych);
console.log(typeof wybranaOpcja);
```

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    number
    string
    boolean
    undefined
    object
    ```

---

## 3. Zasady deklaracji i konwencje nazewnictwa (`camelCase`)

Identyfikator (nazwa zmiennej lub stałej) musi być czytelny, jednoznaczny i zgodny z regułami języka.

### Zasady formalne (wymagane przez język):
- Nazwa może składać się z liter, cyfr, znaku podkreślenia `_` oraz znaku dolara `$`.
- Nazwa **nie może zaczynać się od cyfry** (np. `1miejsce` jest błędem syntaxu).
- W nazwach rozróżniana jest wielkość liter (`punkty` i `Punkty` to dwie różne zmienne).
- Nie wolno używać słów zastrzeżonych (kluczowych) języka JavaScript, takich jak `let`, `const`, `function`, `class`, `if`, `return`.

### Konwencja czystego kodu (`clean code`):
- Stosujemy notację **`camelCase`** (wielbłąda) — pierwszy wyraz piszemy małą literą, a każdy kolejny wyraz rozpoczynamy wielką literą, np. `liczbaPunktow`, `uzytkownikZalogowany`, `stawkaPodatkuVat`.
- Dla stałych o globalnym charakterze często stosuje się notację **`SNAKE_CASE_UPPER`**, np. `STAWKA_VAT = 0.23`.
- Nazwy powinny być w języku angielskim lub polskim (bez polskich znaków diakrytycznych, np. `cenaBrutto` zamiast `cenaBruttó`).

```javascript
// Dobre praktyki:
const stawkaVat = 0.23;
let uzytkownikZalogowany = false;
let liczbaProb = 0;

// Błędne lub niezalecane nazwy:
// let 1miejsce = "Jan";    // BŁĄD! Zaczyna się od cyfry
// let let = 5;              // BŁĄD! Słowo kluczowe
// let uzytkownik_zalogowany; // Niezgodne z konwencją camelCase w JS
```

---

## 4. Zjawisko typowania dynamicznego

JavaScript jest językiem o **typowaniu dynamicznym** (słabo typowanym). Oznacza to, że:

1. Podczas deklaracji zmiennej nie podajemy jej typu (typ jest określany automatycznie na podstawie przypisanej wartości).
2. W trakcie działania programu zmienna zadeklarowana słowem `let` może zmienić swój typ poprzez przypisanie wartości innego typu.

```javascript
let dane = 100; // Dane są typu number
console.log("Typ początkowy:", typeof dane);

dane = "Sto punktów"; // Przypisanie tekstu zmiana typu na string
console.log("Typ po zmianie:", typeof dane);

dane = true; // Zmiana typu na boolean
console.log("Typ końcowy:", typeof dane);
```

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    Typ początkowy: number
    Typ po zmianie: string
    Typ końcowy: boolean
    ```

!!! warning "Najczęstsze błędy początkujących"

    | Błąd | Objaw | Przyczyna i rozwiązanie |
    | --- | --- | --- |
    | Próba nadpisania `const` | `TypeError: Assignment to constant variable` | Zadeklarowano stałą `const`, a potem próbowano przypisać nową wartość. Zmień deklarację na `let`, jeśli wartość ma się zmieniać. |
    | Niezamierzona konkatenacja | `"105"` zamiast `15` przy `console.log("10" + 5)` | Dodanie liczby do tekstu powoduje konwersję liczby na tekst i połączenie napisów. Używaj typów liczbowych (`number`) przy obliczeniach. |
    | Odwołanie do `undefined` | `undefined` w wynikach | Zmienna została zadeklarowana, ale nie ma przypisanej wartości. Upewnij się, że zmienna została zainicjalizowana. |

---

## Ćwiczenia

Wykonaj poniższe zadania w edytorze kodu (np. VS Code) oraz w przeglądarce internetowej z konsolą F12.

!!! note "Ćwiczenie 1. Profil użytkownika i test mutowalności (Ocena 2–3)"

    1. Stwórz plik `script.js` i podepnij go pod prosty plik `index.html`.
    2. Zadeklaruj za pomocą `const` stałe: `idUzytkownika` (liczba) oraz `PESEL` (tekst).
    3. Zadeklaruj za pomocą `let` zmienne: `imieUzytkownika` (tekst), `wiek` (liczba) oraz `czyAktywny` (boolean).
    4. Wypisz wszystkie wartości w konsoli (`console.log`).
    5. Zwiększ wartość `wiek` o 1, a następnie spróbuj zmienić `idUzytkownika` na inną wartość. Zaobserwuj komunikat o błędzie w konsoli F12.

    ??? tip "Podpowiedź 1"

        Pamiętaj, że stałe `const` deklarujemy z wartością początkową, np. `const idUzytkownika = 101;`.

    ??? tip "Podpowiedź 2"

        Modyfikacja zmiennej liczbowej odbywa się poprzez przypisanie, np. `wiek = wiek + 1;` lub `wiek++;`.

    ??? tip "Podpowiedź 3"

        Zakomentuj linię próby modyfikacji stałej `const`, aby reszta skryptu wykonywała się bez zatrzymania.

!!! note "Ćwiczenie 2. Badanie typów danych i typowanie dynamiczne (Ocena 3–4)"

    1. Zadeklaruj zmienną `let wynik`.
    2. Sprawdź i wypisz w konsoli jej typ za pomocą `typeof wynik`.
    3. Przypisz do `wynik` liczbę `25.5` i wypisz typ.
    4. Przypisz do `wynik` napis `"Brak punktów"` i wypisz typ.
    5. Przypisz do `wynik` wartość `null` i sprawdź typ w konsoli.

    ??? tip "Podpowiedź 1"

        Gdy deklarujesz `let wynik;` bez wartości, jej typ to `"undefined"`.

    ??? tip "Podpowiedź 2"

        Operator `typeof` używamy bezpośrednio przed zmienną: `console.log(typeof wynik);`.

    ??? tip "Podpowiedź 3"

        Pamiętaj, że `typeof null` zwróci `"object"` — jest to znany błąd historyczny w JavaScript.

!!! note "Ćwiczenie 3. Mini-kalkulator cen netto i brutto (Ocena 4–5)"

    1. Zadeklaruj stałą `STAWKA_VAT = 0.23`.
    2. Zadeklaruj zmienne `cenaNetto` (np. `100`) oraz `nazwaProduktu` (np. `"Klawiatura"`).
    3. Oblicz cenę brutto wzorem: `cenaBrutto = cenaNetto * (1 + STAWKA_VAT)`.
    4. Wypisz w konsoli czytelny komunikat wykorzystując szablon tekstu (template literal z grawisami): ``Produkt: ${nazwaProduktu}, Cena netto: ${cenaNetto} zł, Cena brutto: ${cenaBrutto} zł``.

    ??? tip "Podpowiedź 1"

        Użyj stałej `const STAWKA_VAT = 0.23;`, ponieważ stawka podatku nie zmienia się w trakcie obliczeń.

    ??? tip "Podpowiedź 2"

        Grawisy `` ` `` znajdują się pod klawiszem Esc. Wewnątrz grawisów zmienne wstawiasz przez `${zmienna}`.

    ??? tip "Podpowiedź 3"

        Sprawdź, co się stanie, gdy `cenaNetto` będzie zapisana jako tekst `"100"` zamiast liczby `100`.

!!! note "Ćwiczenie 4. Walidacja typów wejściowych i ochrona danych (Ocena 5–6)"

    1. Napisz funkcję lub skrypt sprawdzający podane zmienne wejściowe `poleLiczbowe` oraz `poleTekstowe`.
    2. Użyj instrukcji warunkowej oraz operatora `typeof`, aby upewnić się, że `poleLiczbowe` ma typ `"number"`.
    3. Jeśli typ jest niepoprawny (np. przekazano tekst), wypisz w konsoli ostrzeżenie `"Błąd: Wprowadzona wartość nie jest liczbą!"`.
    4. Zabezpiecz obiekt konfiguracyjny lub tablicę za pomocą `const` i wyjaśnij w komentarzu kodu, czym różni się blokada ponownego przypisania zmiennej od mutacji zawartości obiektu.

    ??? tip "Podpowiedź 1"

        Warunek sprawdzający typ: `if (typeof poleLiczbowe === "number") { ... } else { ... }`.

    ??? tip "Podpowiedź 2"

        Możesz przetestować działanie podając `let poleLiczbowe = "123";` oraz `let poleLiczbowe = 123;`.

    ??? tip "Podpowiedź 3"

        Słowo `const` zabrania przypisania do zmiennej innego obiektu, ale w obiektach pozwala modyfikować ich właściwości.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Które słowo kluczowe służy w nowoczesnym JavaScript do deklaracji stałej, której wartości nie można zmodyfikować?",
  "opcje": [
   "var",
   "let",
   "const",
   "static"
  ],
  "poprawna": 2,
  "wyjasnienie": "Słowo kluczowe const służy do tworzenia stałych. Przypisanie nowej wartości do stałej zadeklarowanej przez const wywoła błąd TypeError."
 },
 {
  "pytanie": "Jaki typ danych zostanie zwrócony przez operator typeof dla zmiennej zdeklarowanej jako let x; (bez przypisanej wartości)?",
  "opcje": [
   "null",
   "undefined",
   "number",
   "string"
  ],
  "poprawna": 1,
  "wyjasnienie": "Zmienna zdeklarowana bez wartości domyślnie posiada wartość i typ undefined."
 },
 {
  "pytanie": "Która z poniższych nazw zmiennych jest poprawna i zgodna z konwencją camelCase?",
  "opcje": [
   "1liczbaPunktow",
   "liczba-punktow",
   "liczbaPunktow",
   "Liczba_Punktow"
  ],
  "poprawna": 2,
  "wyjasnienie": "Konwencja camelCase polega na pisaniu pierwszego wyrazu małą literą, a kolejnych z wielkiej litery, bez spacji, cyfr na początku i myślników."
 },
 {
  "pytanie": "Co to jest typowanie dynamiczne w języku JavaScript?",
  "opcje": [
   "Konieczność rygorystycznego definiowania typów przed uruchomieniem programu",
   "Możliwość zmiany typu wartości przechowywanej w zmiennej w trakcie działania programu",
   "Brak możliwości używania liczb zmiennoprzecinkowych",
   "Automatyczne szyfrowanie typów danych w pamięci RAM"
  ],
  "poprawna": 1,
  "wyjasnienie": "Typowanie dynamiczne oznacza, że typ zmiennej jest ustalany na podstawie aktualnie przechowywanej wartości i może ulegać zmianie w czasie działania programu."
 },
 {
  "pytanie": "Jaki wynik da wykonanie instrukcji console.log(typeof \"100\"); ?",
  "opcje": [
   "number",
   "string",
   "boolean",
   "undefined"
  ],
  "poprawna": 1,
  "wyjasnienie": "Wartość w ujęta w cudzysłów \"100\" jest ciągiem znaków (tekstem), dlatego typeof zwraca string."
 },
 {
  "pytanie": "Co stanie się po wykonaniu kodu: const VAT = 0.23; VAT = 0.08; ?",
  "opcje": [
   "Stawka VAT zostanie bezproblemowo zmieniona na 0.08",
   "Program wyemituje błąd TypeError o braku możliwości zmiany stałej",
   "Zmienna VAT przyjmie wartość NaN",
   "Wartość VAT zmieni się na 0.31"
  ],
  "poprawna": 1,
  "wyjasnienie": "Próba ponownego przypisania wartości do stałej zadeklarowanej za pomocą const powoduje wyrzucenie błędu TypeError."
 },
 {
  "pytanie": "Czym różni się undefined od null w JavaScript?",
  "opcje": [
   "undefined oznacza brak przypisania wartości przez system/brak inicjalizacji, a null to celowy brak wartości przypisany przez programistę",
   "undefined dotyczy tylko liczb, a null tylko tekstów",
   "null to słowo kluczowe w HTML, a undefined w CSS",
   "Nie ma między nimi żadnej różnicy"
  ],
  "poprawna": 0,
  "wyjasnienie": "undefined jest wartością domyślną dla niezainicjalizowanych zmiennych, natomiast null to jawna wartość oznaczająca pustość/brak obiektu przypisana świadomie przez programistę."
 }
]
</script>
</div>

---

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj
go przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="deklaracja-stalych-i-zmiennych"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="deklaracja-stalych-i-zmiennych"></div>

---

*Standard ECMAScript (ES6+) określa specyfikację języka JavaScript. Zgodnie z zasadami czystego kodu (Clean Code) rekomenduje się stosowanie const jako wyboru domyślnego, let wyłącznie gdy zmienna zmienia wartość, oraz unikanie var.*
