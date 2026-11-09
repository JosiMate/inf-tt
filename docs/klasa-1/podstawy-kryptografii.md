# Podstawy kryptografii

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział III. Społeczeństwo w internecie
    · podstawa programowa **R V.1, R V.2**

    Logujesz się do dziennika, płacisz BLIK-iem, piszesz na komunikatorze —
    i za każdym razem twoje dane lecą przez sieć, w której każdy po drodze
    mógłby je podejrzeć. Nie podejrzy, bo są **zaszyfrowane**. Na tych
    lekcjach zaczniesz od szyfru sprzed dwóch tysięcy lat, złamiesz go
    w kilka sekund, a potem zobaczysz, jak działają szyfry, których złamać
    się nie da: z kluczem publicznym, funkcje skrótu i podpis cyfrowy.

    ??? abstract "Plan dwóch lekcji"

        | Lekcja | Sekcje strony | Ćwiczenia |
        | --- | --- | --- |
        | 1 | 1–4: pojęcia, szyfry klasyczne, łamanie szyfru, szyfry symetryczne | 1–3 |
        | 2 | 5–9: klucz publiczny, funkcje skrótu, podpis cyfrowy, steganografia, kryptoanaliza Enigmy | 4–6 |

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzedniej lekcji.** Co gwarantuje kłódka przy adresie `https://`, a czego nie gwarantuje?
    2. **Sprzed kilku tygodni.** Czym różni się podpis Profilem Zaufanym od kwalifikowanego podpisu elektronicznego?
    3. **Z dawniejszych tematów.** Ile różnych wartości można zapisać na 8 bitach?

    ??? success "Odpowiedzi"

        1. Gwarantuje, że transmisja jest szyfrowana. Nie gwarantuje, że strona jest uczciwa — certyfikat DV dostanie każdy właściciel domeny.
        2. Podpis Profilem Zaufanym działa w sprawach urzędowych; kwalifikowany jest równy podpisowi własnoręcznemu, także w umowach. Dziś zobaczysz, co jest pod spodem każdego podpisu elektronicznego.
        3. 2^8^ = **256**. Każdy dodatkowy bit podwaja liczbę możliwości — dziś policzysz w ten sposób klucze szyfrów.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Wyjaśnię pojęcia: kryptologia, kryptografia, kryptoanaliza, tekst jawny, kryptogram, klucz.
    2. Zaszyfruję i odszyfruję wiadomość szyfrem Cezara i złamię go, sprawdzając wszystkie klucze.
    3. Wyjaśnię zasadę Kerckhoffsa i problem przekazania klucza w szyfrowaniu symetrycznym.
    4. Powiem, do czego służy klucz publiczny, a do czego prywatny — przy szyfrowaniu i przy podpisie cyfrowym.
    5. Obliczę skrót SHA-256, pokażę efekt lawinowy i wyjaśnię, dlaczego kolizja funkcji skrótu jest groźna.
    6. Odróżnię steganografię od kryptografii i opiszę, jak polscy kryptolodzy złamali Enigmę.

!!! tip "Przykłady uruchomisz na tej stronie"

    Pod niektórymi przykładami są okienka z Pythonem. Nie musisz umieć
    programować — wystarczy zmienić tekst albo liczbę w kodzie i kliknąć
    **▶ Uruchom** (albo ++ctrl+enter++). **Zanim klikniesz, przewiduj**, co
    wyjdzie — wynik sprawdzisz w ramce „Przewiduj, potem sprawdź wynik”.

## Jak czytać tę stronę

| Oznaczenie | Co znaczy |
| --- | --- |
| bez oznaczenia | wymagania konieczne i podstawowe — na ocenę 2 i 3 |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające — na ocenę 4 |
| :material-star: **dopełnienie** | wymagania dopełniające — na ocenę 5 |

---

## 1. Pojęcia

| Pojęcie | Znaczenie |
| --- | --- |
| **kryptologia** | nauka o szyfrach; obejmuje kryptografię i kryptoanalizę |
| **kryptografia** | tworzenie szyfrów — jak utajnić wiadomość |
| **kryptoanaliza** | łamanie szyfrów — jak odczytać wiadomość bez klucza |
| **tekst jawny** | wiadomość, którą każdy może przeczytać |
| **kryptogram** (szyfrogram) | wiadomość po zaszyfrowaniu |
| **klucz** | tajna informacja potrzebna do zaszyfrowania i odszyfrowania |
| **steganografia** | ukrywanie samego **faktu**, że wiadomość istnieje (sekcja 8) |

:material-plus-circle: **rozszerzenie** — **zasada Kerckhoffsa** (sformułował
ją Auguste Kerckhoffs w 1883 roku): bezpieczeństwo szyfru nie może zależeć od
tego, że algorytm jest tajny — **tajny ma być tylko klucz**. Algorytm prędzej
czy później wycieknie, ktoś go odtworzy albo wyczyta z programu. Dlatego
wszystkie współczesne szyfry są publicznie opisane i sprawdzane przez
kryptologów z całego świata, a ich siła siedzi w kluczu.

---

## 2. Szyfry klasyczne

**Szyfr podstawieniowy** zamienia każdą literę na inną. Najprostszy to
**szyfr Cezara**: każdą literę przesuwamy w alfabecie o **k** miejsc, a na
końcu alfabetu zawijamy na początek. Używamy alfabetu łacińskiego, 26 liter
bez polskich znaków.

```text
tekst jawny:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
klucz k = 3:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```

`KOT` z kluczem 3 to `NRW`. Odszyfrowanie to przesunięcie o 3 **wstecz**.

!!! example "Przewiduj"

    Zaszyfruj na kartce słowo `ZYSK` kluczem 3.

    ??? success "Przewiduj, potem sprawdź wynik"

        `CBVN` — Z zawija się na C, Y na B.

**Szyfr przestawieniowy** nie zmienia liter, tylko ich **kolejność**.
Przykład — szyfr płotkowy z dwoma rzędami: litery z miejsc nieparzystych
idą do górnego rzędu, z parzystych do dolnego, potem odczytujemy rząd po
rzędzie.

```text
I . F . R . A . Y . A        górny rząd:  IFRAYA
. N . O . M . T . K .        dolny rząd:  NOMTK
                             kryptogram:  IFRAYANOMTK
```

---

## 3. Łamanie szyfru Cezara

Szyfr Cezara ma tylko **25** kluczy, które coś zmieniają (klucz 26 to obrót
o cały alfabet). Wystarczy sprawdzić wszystkie — to **atak siłowy**.
W okienku program robi to za ciebie:

```python
def przesun(tekst, k):
    wynik = ""
    for znak in tekst:
        if "A" <= znak <= "Z":
            wynik += chr((ord(znak) - 65 + k) % 26 + 65)
        else:
            wynik += znak
    return wynik

kryptogram = "ZWVARHUPL D ZLYDLYVDUP V VZTLQ"
for k in range(1, 26):
    print(k, przesun(kryptogram, -k))
```

<div class="py-konsola"></div>

!!! example "Przewiduj"

    Przy którym kluczu pojawi się sensowny tekst? Podpowiedź: jednoliterowe
    słowa `D` i `V` to najpewniej polskie „w”, „o”, „i” albo „z”.

    ??? success "Przewiduj, potem sprawdź wynik"

        Przy kluczu **7**: `SPOTKANIE W SERWEROWNI O OSMEJ`. Wszystkie
        pozostałe wiersze to bełkot.

:material-plus-circle: **rozszerzenie** — nawet bez sprawdzania kluczy szyfr
Cezara zdradza **analiza częstości**: każda litera zawsze zamienia się w tę
samą, więc najczęstsza litera kryptogramu to najpewniej najczęstsza litera
języka. W polskim tekście bez ogonków to zwykle A, I albo E. Tak samo łamie
się każdy szyfr podstawieniowy, nawet z wymieszanym alfabetem.

---

## 4. Współczesne szyfry symetryczne

W **szyfrowaniu symetrycznym** ten sam klucz szyfruje i odszyfrowuje — jak
w szyfrze Cezara. Współczesny standard to **AES** (od 2001 roku), z kluczem
o długości 128, 192 albo 256 bitów. Szyfruje dysk w laptopie, Wi-Fi w trybie
WPA2/WPA3 i dane w połączeniu HTTPS.

Ile jest kluczy 128-bitowych? 2^128^, czyli liczba 39-cyfrowa:
340 282 366 920 938 463 463 374 607 431 768 211 456. Sprawdzenie ich
wszystkich jest niewykonalne — dlatego atak siłowy, który z Cezarem trwał
sekundę, tu nie ma szans.

Szyfry symetryczne mają jednak jeden kłopot: **jak bezpiecznie przekazać
klucz**? Jeśli nadawca wyśle go przez sieć, podsłuchujący przechwyci klucz
razem z wiadomością. Spotkać się osobiście z każdym sklepem internetowym się
nie da. Rozwiązanie przyniosła kryptografia z kluczem publicznym.

---

## 5. Kryptografia asymetryczna — klucz publiczny i prywatny

:material-plus-circle: **rozszerzenie**

Każdy ma **parę kluczy**, powiązanych matematycznie:

| Klucz | Kto zna | Do czego służy |
| --- | --- | --- |
| **publiczny** | wszyscy — można go opublikować | do **szyfrowania** wiadomości dla właściciela i do **sprawdzania** jego podpisu |
| **prywatny** | tylko właściciel | do **odszyfrowania** wiadomości i do **złożenia** podpisu |

Pomyśl o otwartej kłódce: rozdajesz ich dziesiątki (klucz publiczny), każdy
może zatrzasnąć nią skrzynkę z listem do ciebie, ale otworzyć ją możesz tylko
ty — swoim kluczem (prywatnym). Najbardziej znany algorytm tego typu to
**RSA** (1977).

```text
Ania chce wysłać list Bartkowi:
  Ania szyfruje KLUCZEM PUBLICZNYM Bartka  ──>  kryptogram  ──>  Bartek odszyfrowuje SWOIM KLUCZEM PRYWATNYM
```

Szyfrowanie asymetryczne jest dużo wolniejsze od symetrycznego. Dlatego
w HTTPS działa to **razem**: na początku połączenia przeglądarka i serwer
z pomocą kryptografii asymetrycznej uzgadniają jednorazowy klucz, a całą
resztę danych szyfrują już szybkim szyfrem symetrycznym, np. AES. Problem
przekazania klucza z sekcji 4 jest rozwiązany.

---

## 6. Funkcje skrótu

**Funkcja skrótu** (haszująca) zamienia dane dowolnej długości — słowo, plik,
film — w ciąg o **stałej długości**. SHA-256 daje zawsze 256 bitów, czyli 64
znaki szesnastkowe.

```python
import hashlib

for tekst in ["Przelew 100 zł", "Przelew 900 zł", "Przelew 100 zł"]:
    print(hashlib.sha256(tekst.encode()).hexdigest())
```

<div class="py-konsola"></div>

??? success "Przewiduj, potem sprawdź wynik"

    ```text
    0cfa4742c4e89b0112a2195c5257294cdb0c53e0131886d8c646b99be6e09ead
    f5038c6679d5b23dc39419ec1c11b5695017df7872b1d9ca1d33f323db52b486
    0cfa4742c4e89b0112a2195c5257294cdb0c53e0131886d8c646b99be6e09ead
    ```

    Pierwszy i trzeci skrót są **identyczne** — te same dane dają zawsze ten
    sam skrót. Zmiana jednej cyfry (1 → 9) zmieniła skrót **całkowicie**:
    to **efekt lawinowy**.

Cechy dobrej funkcji skrótu:

- **jednokierunkowość** — ze skrótu nie da się odtworzyć danych;
- **efekt lawinowy** — najmniejsza zmiana danych zmienia cały skrót;
- **odporność na kolizje** — praktycznie nie da się znaleźć dwóch różnych danych o tym samym skrócie.

Gdzie to działa: serwis nie przechowuje twojego hasła, tylko jego skrót —
przy logowaniu liczy skrót z tego, co wpisałeś, i porównuje. Strona z plikiem
do pobrania podaje jego skrót, a ty sprawdzasz, czy pobrany plik jest
nienaruszony:

```powershell
Get-FileHash plik.zip -Algorithm SHA256
```

W Linuksie to samo robi polecenie `sha256sum plik.zip`.

### :material-star: **dopełnienie** — kolizje i kryptoanaliza

Skrótów jest skończenie wiele, a możliwych danych nieskończenie wiele — więc
kolizje **muszą istnieć**. Funkcja jest bezpieczna, dopóki nikt nie potrafi
ich **znaleźć** w rozsądnym czasie. Kiedy kryptoanalitycy się tego nauczą,
funkcja przestaje się nadawać do podpisów i certyfikatów: oszust mógłby
przygotować dwa dokumenty o tym samym skrócie — niewinny do podpisania
i fałszywy, pod którym podpis też będzie ważny.

| Funkcja | Co się stało |
| --- | --- |
| **MD5** | w 2004 roku pokazano, jak szybko znajdować kolizje; dziś nie używa się jej do zabezpieczeń |
| **SHA-1** | w 2017 roku Google z instytutem CWI w Amsterdamie opublikowały dwa różne pliki PDF o tym samym skrócie SHA-1 |
| **SHA-256** | nikt nie znalazł kolizji; stosowana w certyfikatach, podpisach i kryptowalutach |

---

## 7. Podpis cyfrowy

:material-plus-circle: **rozszerzenie**

Podpis cyfrowy łączy skrót z kluczem prywatnym i potwierdza dwie rzeczy:
**kto** podpisał i że dokument **nie został zmieniony**. W uproszczeniu:

1. Nadawca liczy skrót dokumentu i szyfruje go **swoim kluczem prywatnym** — to jest podpis.
2. Odbiorca odszyfrowuje podpis **kluczem publicznym nadawcy** i porównuje wynik ze skrótem, który sam policzył z otrzymanego dokumentu.
3. Skróty równe — podpisał właściciel klucza prywatnego i nikt nie zmienił ani litery. Różne — dokument zmieniono albo podpis nie jest jego.

Na tym działają podpisy z tematu [E-usługi](e-uslugi.md): podpis kwalifikowany,
podpis zaufany i podpis osobisty w e-dowodzie. Różnią się tym, **kto
potwierdził**, do kogo należy para kluczy — i dlatego mają różną moc prawną.

---

## 8. Steganografia

:material-plus-circle: **rozszerzenie**

Kryptografia utajnia **treść** — każdy widzi, że jest jakaś wiadomość, ale nie
może jej przeczytać. **Steganografia** ukrywa **sam fakt**, że wiadomość
istnieje. Dawniej pisano atramentem sympatycznym; dziś tekst chowa się np.
w najmniej znaczących bitach pikseli zdjęcia — kolor zmienia się o jedną
jednostkę na 256, czego oko nie zauważy. Obie metody można łączyć:
najpierw zaszyfrować, potem ukryć.

---

## 9. :material-star: **dopełnienie** — kryptoanaliza Enigmy

Najsłynniejszy przykład zaawansowanej kryptoanalizy ma polskich autorów.
Niemiecka maszyna szyfrująca **Enigma** zmieniała sposób szyfrowania przy
każdej literze, a liczba jej ustawień była ogromna. W grudniu 1932 roku
**Marian Rejewski** z Biura Szyfrów Sztabu Głównego, korzystając z teorii
permutacji i dokumentów zdobytych przez wywiad francuski, odtworzył wewnętrzne
połączenia maszyny. Z **Jerzym Różyckim** i **Henrykiem Zygalskim** opracował
potem metody i urządzenia do szybkiego odtwarzania kluczy dziennych: cyklometr,
płachty Zygalskiego i **bombę kryptologiczną**. W lipcu 1939 roku, pod Warszawą
w Pyrach, Polacy przekazali swoją wiedzę i kopie Enigmy Francuzom i Brytyjczykom
— na tej podstawie w Bletchley Park łamano Enigmę przez całą wojnę.

Lekcja z tej historii to zasada Kerckhoffsa w praktyce: Niemcy ufali
tajności maszyny, a kryptolodzy ją odtworzyli. Złamanie nie wymagało ataku
siłowego, tylko matematyki i błędów popełnianych przez szyfrantów — na
przykład powtarzania klucza na początku depeszy.

!!! warning "Najczęstsze błędy"

    | Objaw | Przyczyna i naprawa |
    | --- | --- |
    | przy odszyfrowaniu Cezara litery przesunięte w złą stronę | odszyfrowanie to przesunięcie **wstecz** o k |
    | „Szyfrowałem kluczem prywatnym, żeby tylko odbiorca przeczytał” | kluczem prywatnym nadawcy podpisuje się, a nie szyfruje — dla odbiorcy szyfruje się **jego kluczem publicznym** |
    | „Odszyfruję skrót i odzyskam hasło” | skrót nie jest szyfrem — jest jednokierunkowy, nie ma klucza do odszyfrowania |
    | steganografia i kryptografia traktowane jako to samo | kryptografia ukrywa treść, steganografia — istnienie wiadomości |
    | „Mój szyfr jest bezpieczny, bo nikt nie zna algorytmu” | zasada Kerckhoffsa — tajny ma być klucz, nie algorytm |

---

## Ćwiczenia

Ćwiczenia 1–3 robisz na pierwszej lekcji, 4–6 na drugiej. Wyniki wpisujesz
do karty pracy na dole strony.

### :material-console: Ćwiczenie 1 — szyfr Cezara na kartce

Bez komputera:

1. Zaszyfruj `INFORMATYKA` kluczem 3 i `TECHNIKUM` kluczem 4.
2. Odszyfruj `NQF` — użyto klucza 2.

Wynik sprawdź w okienku z sekcji 3: zmień w nim kryptogram i klucz.

### :material-console: Ćwiczenie 2 — złam kryptogram

W okienku z sekcji 3 wstaw kryptogram `SDCAX TJACTXFTJ I BIHOAXF` i znajdź
klucz. Zapisz w karcie klucz i tekst jawny.

??? tip "Podpowiedź 1"

    Zamień w kodzie tylko napis w cudzysłowie po `kryptogram =`. Cudzysłowy
    zostają.

??? tip "Podpowiedź 2"

    Program wypisze 25 wierszy. Szukaj takiego, w którym są polskie słowa
    (bez ogonków) — nie musisz czytać wszystkich, wystarczy pierwsze słowo.

??? tip "Podpowiedź 3"

    Pierwsze słowo `SDCAX` przy dobrym kluczu zamienia się w `JUTRO`. Ile
    miejsc dzieli w alfabecie S i J?

### :material-console: Ćwiczenie 3 — pojęcia i zasada Kerckhoffsa :material-plus-circle:

Dopasuj w karcie pojęcia do opisów: kryptologia, kryptografia, kryptoanaliza,
kryptogram, steganografia. Potem oceń zdanie kolegi: *„Napisałem własny szyfr
i nikomu nie pokażę, jak działa — dzięki temu jest bezpieczny”*.

### :material-console: Ćwiczenie 4 — Ania, Bartek i klucze :material-plus-circle:

Ania i Bartek mają po parze kluczy. Odpowiedz w karcie:

1. Którym kluczem Ania szyfruje list do Bartka, a którym Bartek go odczyta?
2. Którym kluczem Ania podpisuje umowę, a którym Bartek sprawdzi jej podpis?
3. Ktoś po drodze zmienił w umowie jedno słowo. Co pokaże sprawdzenie podpisu i dlaczego?

??? tip "Podpowiedź 1"

    Zacznij od tabeli w sekcji 5: kto zna który klucz? Odczytać list może tylko
    ktoś, kto zna klucz nieznany innym.

??? tip "Podpowiedź 2"

    Szyfrowanie: odczytać ma tylko odbiorca. Podpis: sprawdzić ma móc każdy,
    a złożyć — tylko nadawca.

??? tip "Podpowiedź 3"

    List: publiczny Bartka → prywatny Bartka. Podpis: prywatny Ani → publiczny
    Ani. Po zmianie słowa skrót umowy będzie zupełnie inny (efekt lawinowy),
    więc nie zgodzi się z odszyfrowanym podpisem.

### :material-console: Ćwiczenie 5 — skróty w praktyce :material-star:

1. W okienku z sekcji 6 policz skrót SHA-256 swojego imienia i swojego imienia
   z kropką na końcu. Porównaj je i zapisz w karcie pierwsze 8 znaków obu.
2. Utwórz na pulpicie plik `test.txt` z jednym zdaniem i policz jego skrót
   w PowerShellu (`Get-FileHash`). Zmień jedną literę, zapisz, policz jeszcze
   raz. Zapisz w karcie, ile znaków ma skrót i co się zmieniło.

### :material-console: Ćwiczenie 6 — kryptoanaliza :material-star:

Odpowiedz w karcie w trzech–czterech zdaniach na każde pytanie:

1. Dlaczego znalezienie kolizji SHA-1 w 2017 roku sprawiło, że przestano jej
   używać w certyfikatach i podpisach?
2. Co zrobili Rejewski, Różycki i Zygalski i dlaczego ich praca jest
   przykładem zasady Kerckhoffsa?

---

## Sprawdź się

Test z natychmiastową odpowiedzią. **Nie jest oceniany i nic nie wysyła.**

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Czym zajmuje się kryptoanaliza?",
  "opcje": [
   "Tworzeniem nowych szyfrów",
   "Ukrywaniem faktu istnienia wiadomości",
   "Łamaniem szyfrów — odczytywaniem wiadomości bez znajomości klucza",
   "Przechowywaniem kluczy"
  ],
  "poprawna": 2,
  "wyjasnienie": "Kryptologia to kryptografia (tworzenie szyfrów) i kryptoanaliza (łamanie). Ukrywanie faktu istnienia wiadomości to steganografia."
 },
 {
  "pytanie": "Zaszyfruj szyfrem Cezara z kluczem 3 słowo PIES.",
  "odpowiedz": ["SLHV"],
  "wyjasnienie": "P → S, I → L, E → H, S → V — każda litera trzy miejsca dalej."
 },
 {
  "pytanie": "Co mówi zasada Kerckhoffsa?",
  "opcje": [
   "Bezpieczeństwo szyfru ma zależeć tylko od tajności klucza, a nie algorytmu",
   "Klucz trzeba zmieniać codziennie",
   "Każdy szyfr da się złamać atakiem siłowym",
   "Algorytm szyfrowania musi być tajny"
  ],
  "poprawna": 0,
  "wyjasnienie": "Algorytm prędzej czy później wycieknie albo zostanie odtworzony — dlatego cała siła szyfru ma być w kluczu. Współczesne szyfry są publiczne."
 },
 {
  "pytanie": "Którego klucza używasz, żeby zaszyfrować wiadomość dla kolegi w systemie asymetrycznym?",
  "opcje": [
   "Swojego prywatnego",
   "Klucza publicznego kolegi",
   "Swojego publicznego",
   "Klucza prywatnego kolegi"
  ],
  "poprawna": 1,
  "wyjasnienie": "Szyfrujesz kluczem publicznym odbiorcy — odszyfrować może tylko on, swoim kluczem prywatnym. Klucza prywatnego kolegi nie znasz i znać nie powinieneś."
 },
 {
  "pytanie": "Dlaczego HTTPS łączy szyfrowanie asymetryczne z symetrycznym?",
  "opcje": [
   "Bo szyfry symetryczne są niebezpieczne",
   "Bo przeglądarki nie potrafią szyfrować symetrycznie",
   "Bo tak wymaga certyfikat EV",
   "Asymetryczne pozwala bezpiecznie uzgodnić klucz, a szybkie symetryczne szyfruje resztę danych"
  ],
  "poprawna": 3,
  "wyjasnienie": "Asymetryczne rozwiązuje problem przekazania klucza, ale jest wolne. Dlatego służy tylko do uzgodnienia klucza sesji, a dane szyfruje AES."
 },
 {
  "pytanie": "Jak nazywa się cecha funkcji skrótu: zmiana jednego znaku w danych całkowicie zmienia skrót?",
  "opcje": ["kolizja", "efekt lawinowy", "jednokierunkowość", "steganografia"],
  "poprawna": 1,
  "wyjasnienie": "To efekt lawinowy. Jednokierunkowość to niemożność odtworzenia danych ze skrótu, a kolizja — dwa różne dane o tym samym skrócie."
 },
 {
  "pytanie": "Ile znaków szesnastkowych ma skrót SHA-256? Wpisz liczbę.",
  "odpowiedz": ["64"],
  "wyjasnienie": "256 bitów, a jedna cyfra szesnastkowa to 4 bity: 256 / 4 = 64."
 },
 {
  "pytanie": "Czym steganografia różni się od kryptografii?",
  "opcje": [
   "Steganografia ukrywa fakt istnienia wiadomości, kryptografia jej treść",
   "Steganografia używa klucza publicznego",
   "Kryptografia działa tylko na obrazach",
   "Niczym — to dwie nazwy tego samego"
  ],
  "poprawna": 0,
  "wyjasnienie": "Kryptogram widać, ale nie da się go przeczytać. Wiadomość ukrytą steganograficznie — np. w pikselach zdjęcia — trudno w ogóle zauważyć."
 }
]
</script>
</div>

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**. Kartę wypełniasz przez obie lekcje:
zadania 1 i 4 na pierwszej, 2, 3 i 5 na drugiej.

<div class="kp-podsumowanie" data-karta="podstawy-kryptografii"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    !!! info "Twoje odpowiedzi zostają na twoim komputerze"

        Formularz niczego nie wysyła sam. Do nauczyciela karta trafia dopiero po
        kliknięciu **Wyślij do nauczyciela** (z kodem z karteczki) albo gdy
        dołączysz pobrany plik Worda w dzienniku. Wyczyszczenie danych
        przeglądania usunie odpowiedzi — kiedy skończysz, wyślij albo pobierz kartę.

    <div class="karta-pracy" data-karta="podstawy-kryptografii"></div>

### Jak ją oddać

Kliknij **Wyślij do nauczyciela** pod kartą albo pobierz kartę w Wordzie
i dołącz ją w **Dzienniku VULCAN → Zadania domowe**, w zadaniu
*Podstawy kryptografii — karta pracy*. Termin: najbliższa lekcja.

---

## Sprawdź, czy rozumiesz

??? question "Dlaczego szyfr Cezara jest słaby, a AES nie, skoro oba są symetryczne?"

    Cezar ma 25 kluczy — komputer sprawdzi je w ułamku sekundy, a każda litera
    zawsze zamienia się w tę samą, więc wystarczy analiza częstości. AES ma
    2^128^ albo więcej kluczy i miesza bity tak, że nie zostaje śladu częstości
    liter. Oba algorytmy są jawne — różni je liczba kluczy i to, co algorytm
    robi z danymi.

??? question ":material-plus-circle: Serwis przechowuje skróty haseł, a nie hasła. Co zyskują użytkownicy, jeśli baza wycieknie?"

    Ze skrótu nie da się odtworzyć hasła — przestępca nie odczyta haseł wprost.
    Może jednak liczyć skróty popularnych haseł i porównywać — dlatego proste
    hasła i tak padną, a długie, nietypowe zostaną bezpieczne.

---

!!! info "Materiały uzupełniające"

    - HTTPS, certyfikaty i bezpieczeństwo kont: temat [Cyberbezpieczeństwo](cyberbezpieczenstwo.md)
    - Podpis zaufany, kwalifikowany i osobisty: temat [E-usługi](e-uslugi.md)

*Kryptogramy i skróty na tej stronie policzono programami z okienek. Stan
sprawdzony 9 listopada 2026 r.*
