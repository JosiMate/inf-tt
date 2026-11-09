# Cyberbezpieczeństwo

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział III. Społeczeństwo w internecie
    · podstawa programowa **III.1, III.2, III.3, V.1, V.3, V.4**

    Większość udanych ataków nie łamie żadnych zabezpieczeń technicznych.
    Przestępca pisze SMS o dopłacie do paczki, dzwoni „z banku” albo podsuwa
    plik „faktura.pdf.exe” — i czeka, aż ktoś sam otworzy mu drzwi. Dlatego
    ten temat jest o tym, jak **rozpoznać atak, zanim klikniesz**, co robi
    złośliwe oprogramowanie, jak chronić konto i dane i co zrobić, kiedy coś
    już się stało.

    W temacie [E-usługi](e-uslugi.md) poznałeś zasady bezpiecznej bankowości
    elektronicznej i podpis elektroniczny — tu z nich korzystamy, nie
    powtarzamy ich.

    ??? abstract "Plan dwóch lekcji"

        | Lekcja | Sekcje strony | Ćwiczenia |
        | --- | --- | --- |
        | 1 | 1–2: socjotechnika i phishing, złośliwe oprogramowanie i kopie zapasowe | 1–2 |
        | 2 | 3–5: hasła i 2FA, wyciek danych i zgłaszanie incydentów, certyfikaty i infrastruktura krytyczna | 3–5 |

??? rozgrzewka "Na rozgrzewkę — 3 minuty, bez zaglądania"

    Odpowiedz w zeszycie, zanim zaczniesz nowy temat. Odpowiedzi rozwiń
    dopiero wtedy, gdy wszyscy skończą — nie liczą się do oceny.

    1. **Z poprzedniej lekcji.** Czym jest deepfake i jak sprawdzisz, skąd pochodzi zdjęcie z internetu?
    2. **Sprzed kilku tygodni.** Dzwoni „pracownik banku” i prosi o kod z SMS-a, żeby „zablokować podejrzaną transakcję”. Co robisz?
    3. **Z dawniejszych tematów.** Strona ma adres `https://` i kłódkę. Co to oznacza — i czego **nie** oznacza?

    ??? success "Odpowiedzi"

        1. Nagranie albo obraz wygenerowany przez sztuczną inteligencję, pokazujący coś, czego nie było. Pochodzenie zdjęcia sprawdzisz wyszukiwaniem obrazem (np. Google Lens).
        2. Rozłączasz się i sam dzwonisz na numer z karty albo ze strony banku. Bank **nigdy** nie prosi o kody, hasła ani PIN — dziś zobaczysz, że to klasyczna socjotechnika.
        3. Oznacza, że transmisja jest szyfrowana. **Nie** oznacza, że strona jest uczciwa — certyfikat można dostać za darmo dla każdej domeny, także oszukańczej. Dziś do tego wrócimy.

!!! success "Kryteria sukcesu — sprawdź się na koniec tematu"

    Po tym temacie:

    1. Wskażę w podejrzanej wiadomości co najmniej trzy czerwone flagi phishingu i odczytam z adresu linku, dokąd naprawdę prowadzi.
    2. Odróżnię wirusa, robaka, trojana, ransomware i oprogramowanie szpiegujące i wymienię objawy zainfekowania komputera.
    3. Zaplanuję kopie zapasowe tak, żeby przetrwały atak ransomware.
    4. Ocenię siłę hasła i wyjaśnię, przed czym chroni uwierzytelnianie dwuskładnikowe.
    5. Opiszę, co zrobić po wycieku danych, i zgłoszę podejrzany SMS albo stronę do CERT Polska.
    6. Wyjaśnię, czym różnią się certyfikaty DV, OV i EV i czym jest infrastruktura krytyczna.

## Jak czytać tę stronę

| Oznaczenie | Co znaczy |
| --- | --- |
| bez oznaczenia | wymagania konieczne i podstawowe — na ocenę 2 i 3 |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające — na ocenę 4 |
| :material-star: **dopełnienie** | wymagania dopełniające — na ocenę 5 |

---

## 1. Socjotechnika i phishing

**Socjotechnika** (inżynieria społeczna) to nakłanianie ludzi, żeby sami
zrobili coś, co pomaga atakującemu: kliknęli w link, podali hasło, zainstalowali
program, przelali pieniądze. Działa na emocje — strach, pośpiech, ciekawość,
chęć pomocy — a nie na słabości systemu.

| Forma | Kanał | Typowy przykład |
| --- | --- | --- |
| **phishing** | e-mail | „Twoje konto zostanie zablokowane — zaloguj się, żeby je odblokować” |
| **smishing** | SMS | „Dopłać 1,50 zł do przesyłki: [link]” |
| **vishing** | rozmowa telefoniczna | „Tu dział bezpieczeństwa banku, ktoś próbuje wypłacić pana pieniądze” |
| oszustwo „na BLIK-a” | komunikator | przejęte konto znajomego prosi o kod BLIK „na chwilę, oddam jutro” |

Każda z tych form ma ten sam cel: **żebyś działał szybko i nie sprawdzał**.

!!! danger "Czerwone flagi"

    1. **Pośpiech i groźba** — „masz 12 godzin”, „konto zostanie zablokowane”.
    2. **Adres nadawcy nie pasuje do firmy** — inna domena, darmowa skrzynka, literówka.
    3. **Link prowadzi gdzie indziej**, niż pokazuje tekst — sprawdzisz to, najeżdżając na niego kursorem (adres pokaże się w rogu okna).
    4. **Prośba o dane, kod albo instalację programu** — bank, kurier i urząd o to nie proszą.
    5. **Ogólne powitanie** („Szanowny Kliencie”) i wiadomość, której się nie spodziewałeś.
    6. **Niska kwota** — 1,50 zł albo 2,99 zł nie budzi czujności, a na stronie trzeba podać dane karty.

### Gdzie naprawdę prowadzi link

Domenę w adresie czyta się **od prawej strony, do pierwszego ukośnika `/`
po `https://`**. O tym, do kogo należy strona, decydują dwa ostatnie człony:
w `https://moje.szybkapaczka.pl/oplata` to `szybkapaczka.pl`. Wszystko, co
stoi przed nimi, właściciel domeny może nazwać dowolnie.

!!! example "Przewiduj"

    Firma kurierska ma domenę `szybkapaczka.pl`. Który adres prowadzi na jej
    serwer?

    ```text
    A. https://szybkapaczka.pl.oplata24.top/pay
    B. https://szybkapaczka-pl.com/oplata
    C. https://moje.szybkapaczka.pl/oplata
    D. https://szybkapaczka.pl@oplata24.top/pay
    ```

    ??? success "Przewiduj, potem sprawdź wynik"

        Tylko **C**. W A domeną jest `oplata24.top` — „szybkapaczka.pl” to
        tylko początek nazwy, który wymyślił oszust. B to zupełnie inna domena
        (`szybkapaczka-pl.com`), łudząco podobna. D to sztuczka ze znakiem `@`:
        wszystko przed nim przeglądarka traktuje jak nazwę użytkownika, więc
        strona otworzy się na `oplata24.top`.

---

## 2. Złośliwe oprogramowanie

**Złośliwe oprogramowanie** (ang. *malware*) to program napisany po to, żeby
zaszkodzić: ukraść dane, zaszyfrować pliki, przejąć komputer.

| Rodzaj | Jak się rozprzestrzenia | Co robi |
| --- | --- | --- |
| **wirus** | dołącza się do innego pliku; działa, gdy ktoś ten plik uruchomi | psuje lub usuwa dane, zaraża kolejne pliki |
| **robak** | sam, przez sieć — wykorzystuje luki w niezałatanych systemach | zaraża kolejne komputery bez udziału człowieka |
| **trojan** | udaje przydatny program, ofiara instaluje go sama | otwiera atakującemu dostęp do komputera |
| **ransomware** | najczęściej przez załącznik, fałszywą aktualizację albo trojana | szyfruje pliki i żąda okupu za klucz |
| **oprogramowanie szpiegujące** (spyware, keylogger) | jak trojan — dołączone do „darmowego” programu | zapisuje naciśnięte klawisze, kradnie hasła i pliki |

:material-plus-circle: **rozszerzenie** — **objawy, że komputer może być
zainfekowany**:

- działa wyraźnie wolniej, wentylator pracuje, choć nic nie robisz;
- w Menedżerze zadań są nieznane procesy, a antywirus „sam się wyłączył”;
- przeglądarka ma nową stronę startową, wyskakujące reklamy, dziwne rozszerzenia;
- znajomi dostają od ciebie wiadomości, których nie wysłałeś;
- pliki mają nowe rozszerzenia i nie dają się otworzyć, a na pulpicie leży „instrukcja zapłaty” — to już ransomware.

Żaden z tych objawów osobno nie przesądza sprawy, ale kilka naraz to powód,
żeby odłączyć komputer od sieci i zgłosić to administratorowi.

### Ransomware i kopie zapasowe

Po ataku ransomware pliki są zaszyfrowane, a przestępca żąda okupu, zwykle
w kryptowalucie. **Zapłacenie nie gwarantuje odzyskania danych** i finansuje
kolejne ataki. Dla części rodzajów ransomware darmowe narzędzia do
odszyfrowania publikuje projekt [No More Ransom](https://www.nomoreransom.org/).
Jedyną pewną ochroną jest jednak **kopia zapasowa**, której atak nie dosięgnie.

!!! example "Przewiduj"

    Pani z sekretariatu robi co wieczór kopię wszystkich dokumentów na dysk
    zewnętrzny, który jest stale podłączony do komputera. Komputer zaatakował
    ransomware. Czy dokumenty da się odtworzyć z kopii?

    ??? success "Przewiduj, potem sprawdź wynik"

        **Najpewniej nie.** Ransomware szyfruje wszystko, do czego ma dostęp —
        także podłączony dysk zewnętrzny i dyski sieciowe. Kopia, która ma
        przetrwać atak, musi być **odłączona** (offline) albo w miejscu,
        którego zaatakowany komputer nie może nadpisać.

Sprawdzona zasada to **3-2-1**: **3** kopie danych, na **2** różnych
nośnikach, **1** poza miejscem pracy (w innym budynku albo w chmurze z historią
wersji). Kopia, której nikt nigdy nie próbował odtworzyć, jest tylko nadzieją
na kopię.

---

## 3. Hasła i uwierzytelnianie dwuskładnikowe

Logując się, potwierdzasz, że to ty — to **uwierzytelnianie**. Składniki są
trzy rodzaje:

| Składnik | Przykłady |
| --- | --- |
| coś, co **wiesz** | hasło, PIN |
| coś, co **masz** | telefon z aplikacją banku, klucz sprzętowy, karta |
| coś, czym **jesteś** | odcisk palca, twarz |

**Uwierzytelnianie dwuskładnikowe** (2FA) łączy dwa różne rodzaje. Jeśli
ktoś pozna twoje hasło — z wycieku albo z fałszywej strony — bez twojego
telefonu dalej się nie zaloguje. Dlatego 2FA włącza się wszędzie, gdzie się
da: poczta, media społecznościowe, konto szkolne.

!!! example "Przewiduj"

    Które hasło jest najtrudniejsze do odgadnięcia przez program, który
    sprawdza miliardy haseł?

    ```text
    A. P@ssw0rd!
    B. Szczucin2026
    C. Kx7#q
    D. rower-sufit-mleko-zegar
    ```

    ??? success "Przewiduj, potem sprawdź wynik"

        **D.** O sile hasła decyduje przede wszystkim **długość** i to, czy
        da się je przewidzieć. A to znany wzorzec (słowo z cyframi zamiast
        liter) — takie zamiany programy sprawdzają w pierwszej kolejności.
        B to nazwa miejscowości i rok — dane, które łatwo zgadnąć. C jest
        losowe, ale ma tylko 5 znaków. D to cztery przypadkowe słowa — długie
        i łatwe do zapamiętania.

Trzy zasady, które wystarczą na co dzień:

1. **Każde konto — inne hasło.** Wyciek z jednego sklepu nie otwiera wtedy poczty i banku.
2. Hasła zapamiętuje **menedżer haseł** (wbudowany w przeglądarkę albo osobny program); ty pamiętasz jedno, długie hasło główne.
3. Hasło do poczty jest najważniejsze — przez „nie pamiętam hasła” poczta otwiera wszystkie inne konta.

---

## 4. Wyciek danych i zgłaszanie incydentów

Dostajesz wiadomość: „sklep, w którym masz konto, padł ofiarą ataku; wyciekły
adresy e-mail i hasła”. Co teraz?

1. **Zmień hasło** w tym serwisie — i wszędzie tam, gdzie miałeś takie samo.
2. **Włącz 2FA**, jeśli jeszcze go nie masz.
3. Uważaj na wiadomości w najbliższych tygodniach — przestępcy wykorzystują wyciek, żeby pisać do ciebie „wiarygodnie”, z twoim imieniem i historią zamówień.
4. Jeśli wyciekł numer PESEL — **zastrzeż go** w aplikacji mObywatel albo na gov.pl; bank nie udzieli wtedy na ciebie kredytu bez cofnięcia zastrzeżenia.
5. Czy twój adres był w znanych wyciekach, sprawdzisz w serwisie [Have I Been Pwned](https://haveibeenpwned.com/).

Firma, z której wyciekły dane osobowe, ma obowiązek zgłosić to do **Urzędu
Ochrony Danych Osobowych** w ciągu **72 godzin** od wykrycia, a gdy ryzyko jest
wysokie — zawiadomić także poszkodowanych (RODO, art. 33 i 34). To łączy
ochronę danych osobowych z cyberbezpieczeństwem: wyciek to jednocześnie
incydent bezpieczeństwa i naruszenie ochrony danych.

### Gdzie zgłaszać

W Polsce incydenty od obywateli przyjmuje **CERT Polska** — zespół działający
w instytucie NASK:

| Co | Gdzie |
| --- | --- |
| podejrzany SMS | przekaż go **bez zmian** na bezpłatny numer **8080** |
| strona wyłudzająca dane, podejrzany e-mail, inny incydent | formularz na [incydent.cert.pl](https://incydent.cert.pl/) |
| oszustwo, w którym straciłeś pieniądze | **policja** i natychmiast **bank** (zablokowanie karty i dostępu) |

Zgłoszone strony trafiają na listę ostrzeżeń, z której korzystają operatorzy
sieci — wiele osób w ogóle ich nie zobaczy.

### :material-star: **dopełnienie** — infrastruktura krytyczna

**Infrastruktura krytyczna** to systemy, bez których państwo i społeczeństwo
nie funkcjonują: zaopatrzenie w energię i paliwa, wodę i żywność, łączność
i sieci teleinformatyczne, systemy finansowe, ochrona zdrowia, transport,
służby ratunkowe. Coraz więcej z nich steruje się przez sieć — elektrownie,
wodociągi, sygnalizacja kolejowa — więc atak komputerowy może mieć skutki
fizyczne. W grudniu 2015 roku atak na ukraińskie sieci energetyczne pozbawił
prądu setki tysięcy odbiorców na kilka godzin.

Jak się ją chroni:

- **przepisy** — ustawa o krajowym systemie cyberbezpieczeństwa (z 2018 roku,
  w 2026 roku znowelizowana pod unijną dyrektywę NIS2) nakłada na **podmioty
  kluczowe i ważne** — m.in. energetykę, transport, banki, szpitale,
  wodociągi — obowiązki: zarządzanie ryzykiem, zgłaszanie incydentów do
  zespołów CSIRT, wyznaczenie osób do kontaktu, regularne audyty;
- **zespoły reagowania** — w Polsce są trzy krajowe: **CSIRT GOV** (przy ABW),
  **CSIRT MON** i **CSIRT NASK** (CERT Polska);
- **technika** — oddzielenie sieci sterujących urządzeniami od internetu
  i od sieci biurowej, kopie zapasowe, ręczne sterowanie awaryjne, regularne
  ćwiczenia.

---

## 5. :material-star: **dopełnienie** — HTTPS i certyfikaty

Połączenie HTTPS jest szyfrowane protokołem **TLS** (dawniej SSL — ta nazwa
została w mowie potocznej, ale samego SSL dziś się nie używa). Żeby
przeglądarka wiedziała, że rozmawia z właściwym serwerem, serwer pokazuje
**certyfikat** wystawiony przez zaufany urząd certyfikacji. Certyfikaty różnią
się tym, **co urząd sprawdził przed wystawieniem**:

| Typ | Co sprawdzono | Kto może dostać |
| --- | --- | --- |
| **DV** (*Domain Validation*) | tylko to, że wnioskodawca kontroluje domenę | każdy właściciel domeny — automatycznie, w kilka minut, także za darmo |
| **OV** (*Organization Validation*) | domenę **i** istnienie firmy w rejestrach | zarejestrowana organizacja |
| **EV** (*Extended Validation*) | najdokładniej: firmę, jej adres, uprawnienia osoby składającej wniosek | zarejestrowana organizacja po pełnej weryfikacji |

**Szyfrowanie jest przy każdym typie tak samo silne.** Kolejne typy podnoszą
poziom bezpieczeństwa czym innym: pewnością, **kto** stoi za stroną. Strona
oszusta bez trudu dostanie certyfikat DV, ale OV ani EV na nieistniejącą firmę
— nie. Dawniej przeglądarki pokazywały przy EV nazwę firmy na zielono w pasku
adresu; dziś tego nie robią i dane z certyfikatu trzeba sprawdzić samemu:
kliknij ikonę obok adresu strony i otwórz szczegóły certyfikatu.

!!! warning "Najczęstsze błędy"

    | Objaw | Przyczyna i naprawa |
    | --- | --- |
    | „Strona ma kłódkę, więc jest bezpieczna” | kłódka to tylko szyfrowanie — sprawdź **domenę** i to, skąd masz link |
    | „Link w SMS-ie pokazywał adres banku” | tekst linku może być dowolny; liczy się adres docelowy — wpisuj adres banku sam |
    | kopia zapasowa zaszyfrowana razem z plikami | dysk z kopią był stale podłączony — kopia offline albo w chmurze z historią wersji |
    | jedno hasło do wszystkiego, „bo to tylko sklep” | wyciek ze sklepu otwiera pocztę — każde konto osobne hasło, menedżer haseł |
    | kod BLIK wysłany „koledze” z Messengera | konto kolegi przejęte — zadzwoń do niego, zanim cokolwiek wyślesz |
    | „Zapłacę okup, odzyskam pliki” | brak gwarancji; najpierw [No More Ransom](https://www.nomoreransom.org/), zgłoszenie i odtworzenie z kopii |

---

## Ćwiczenia

Ćwiczenia 1–2 robisz na pierwszej lekcji, 3–5 na drugiej. Wyniki wpisujesz
do karty pracy na dole strony.

### :material-console: Ćwiczenie 1 — wiadomość od kuriera

Do skrzynki trafiła wiadomość poniżej. Wypisz w karcie co najmniej **pięć**
czerwonych flag i odczytaj z adresu przycisku, na jaki serwer prowadzi.
Napisz, co zrobisz z tą wiadomością.

```text
Od:           Szybka Paczka <powiadomienia@szybkapaczka-dostawy.com>
Odpowiedz do: zwroty.szybkapaczka@poczta-darmowa.net
Temat:        OSTATNIE WEZWANIE: przesyłka nr 48213 zostanie zwrócona

Szanowny Kliencie,

Twoja przesyłka nie mogła zostać doręczona z powodu nieuregulowanej
opłaty celnej w wysokości 2,99 zł. Jeśli nie dokonasz płatności
w ciągu 12 godzin, paczka wróci do nadawcy, a Ty zostaniesz obciążony
kosztem zwrotu 89 zł.

               [ OPŁAĆ PRZESYŁKĘ ]

Zespół Obsługi Klienta Szybka Paczka

Adres przycisku (po najechaniu kursorem):
http://szybkapaczka.pl.oplata-celna24.top/pay?id=48213
```

*Firma, numery i adresy są zmyślone na potrzeby ćwiczenia.*

??? tip "Podpowiedź 1"

    Przejdź po kolei po ramce „Czerwone flagi” w sekcji 1 i przy każdej sprawdź,
    czy pasuje do tej wiadomości. Zacznij od dwóch adresów na górze.

??? tip "Podpowiedź 2"

    Porównaj domenę nadawcy z domeną z linku i z adresem „Odpowiedz do”.
    Zwróć uwagę na czas na reakcję, kwotę i powitanie.

??? tip "Podpowiedź 3"

    Flagi: domena nadawcy to `szybkapaczka-dostawy.com`, a odpowiedzi idą na
    darmową skrzynkę; 12 godzin i groźba kosztu 89 zł; mała kwota 2,99 zł;
    „Szanowny Kliencie”; link prowadzi na `oplata-celna24.top` i to przez
    `http`. Wiadomość zgłaszasz (sekcja 4) i usuwasz, nie klikając.

### :material-console: Ćwiczenie 2 — komputer w sekretariacie :material-plus-circle:

Opis zgłoszenia: *„Od wczoraj komputer strasznie zwalnia, wentylator wyje.
W przeglądarce jest nowa wyszukiwarka, której nikt nie instalował. Rano
koleżanka z innej szkoły zapytała, czemu wysłałam jej plik »zaproszenie.zip«.
Kopię dokumentów robimy co piątek na dysk USB, który zawsze jest podłączony.”*

Wypisz w karcie objawy infekcji z tego opisu, napisz, co trzeba zrobić
najpierw, i zaproponuj sekretariatowi kopie zapasowe według zasady 3-2-1.

??? tip "Podpowiedź 1"

    Objawy są w czterech zdaniach opisu — przy każdym zdaniu zapytaj, który
    punkt z listy objawów w sekcji 2 mu odpowiada.

??? tip "Podpowiedź 2"

    Pierwszy krok to zatrzymanie szkód: komputer, który rozsyła pliki,
    trzeba odciąć od sieci. Potem — kto ma o tym wiedzieć?

??? tip "Podpowiedź 3"

    3-2-1 dla sekretariatu: dokumenty na komputerze (1), kopia na dysku USB,
    który podłącza się **tylko** na czas kopii (2), i kopia w chmurze szkoły
    z historią wersji albo na dysku trzymanym w innym budynku (3).

### :material-console: Ćwiczenie 3 — hasła

Uszereguj w karcie hasła od najsłabszego do najsilniejszego i każde ocen
jednym zdaniem: `marta2009`, `Qwerty123!`, `7#kP`, `trzy-zielone-kalosze-w-szafie`.
Potem napisz, jak ułożysz hasło do poczty, którego nie zapomnisz, i sprawdź
w ustawieniach swojego konta szkolnego albo prywatnej poczty, czy masz
włączone 2FA (w karcie wpisz tylko „tak” albo „nie” — żadnych haseł).

??? tip "Podpowiedź 1"

    Przy każdym haśle zapytaj: ile ma znaków i czy ktoś, kto mnie zna albo
    zna popularne wzorce, mógłby je zgadnąć?

??? tip "Podpowiedź 2"

    `Qwerty123!` to klawisze po kolei i liczby po kolei — jedno z najczęściej
    używanych haseł. `marta2009` to imię i rok, `7#kP` jest losowe, ale krótkie.

??? tip "Podpowiedź 3"

    Od najsłabszego: `Qwerty123!` i `marta2009` (przewidywalne), `7#kP`
    (za krótkie), najsilniejsze `trzy-zielone-kalosze-w-szafie` (długie, cztery
    słowa bez związku z tobą).

### :material-console: Ćwiczenie 4 — wyciek i podejrzany SMS

Dwie sytuacje:

1. Dostajesz e-mail ze sklepu internetowego: wyciekły adresy, hasła
   i numery telefonów klientów. Masz tam konto z tym samym hasłem co do poczty.
2. Dzień później przychodzi SMS: *„Twoja paczka wymaga dopłaty 1,40 zł.
   Wejdź na …”*.

Opisz w karcie krok po kroku, co robisz w każdej sytuacji i komu co zgłaszasz.

### :material-console: Ćwiczenie 5 — certyfikat i infrastruktura :material-star:

1. Otwórz stronę dowolnego banku i stronę `gov.pl`. Kliknij ikonę obok adresu
   i obejrzyj szczegóły certyfikatu: dla kogo wystawiony, przez kogo, do kiedy
   ważny. Po polach z nazwą organizacji oceń, czy to DV, czy OV/EV, i zapisz
   wyniki w karcie.
2. Wybierz jeden rodzaj infrastruktury krytycznej w swojej okolicy
   (np. wodociąg, szpital, sieć energetyczna) i opisz w trzech–czterech
   zdaniach, co by się stało po skutecznym ataku i jak można się przed nim
   zabezpieczyć.

---

## Sprawdź się

Test z natychmiastową odpowiedzią. **Nie jest oceniany i nic nie wysyła.**

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Na czym polega phishing?",
  "opcje": [
   "Na przeciążeniu serwera ogromną liczbą zapytań",
   "Na fizycznej kradzieży komputera",
   "Na podszyciu się pod zaufaną firmę lub instytucję, żeby wyłudzić dane albo pieniądze",
   "Na odgadywaniu hasła przez sprawdzanie wszystkich możliwości"
  ],
  "poprawna": 2,
  "wyjasnienie": "Phishing działa na człowieka, nie na system: fałszywa wiadomość namawia, żeby ofiara sama podała dane. Przeciążenie serwera to atak DDoS, a sprawdzanie wszystkich haseł — atak siłowy."
 },
 {
  "pytanie": "Do kogo należy strona https://bank.pl.weryfikacja-konta.top/logowanie?",
  "opcje": [
   "Do właściciela domeny weryfikacja-konta.top",
   "Do banku z domeną bank.pl",
   "Do operatora sieci komórkowej",
   "Nie da się tego ocenić z adresu"
  ],
  "poprawna": 0,
  "wyjasnienie": "Domenę czyta się od prawej strony do pierwszego ukośnika: rozstrzygają dwa ostatnie człony, weryfikacja-konta.top. „bank.pl” to tylko początek nazwy wymyślony przez oszusta."
 },
 {
  "pytanie": "Czym robak różni się od wirusa?",
  "opcje": [
   "Robak działa tylko na telefonach",
   "Robak rozprzestrzenia się sam przez sieć, bez udziału użytkownika",
   "Wirus nie może uszkodzić plików",
   "Robak zawsze szyfruje dysk"
  ],
  "poprawna": 1,
  "wyjasnienie": "Wirus potrzebuje, żeby ktoś uruchomił zarażony plik. Robak wykorzystuje luki w systemach i sam zaraża kolejne komputery w sieci."
 },
 {
  "pytanie": "Firma robi kopię zapasową co noc na dysk sieciowy, który jest zawsze dostępny ze wszystkich komputerów. Co się stanie po ataku ransomware?",
  "opcje": [
   "Kopia na pewno przetrwa, bo jest na innym urządzeniu",
   "Ransomware nie atakuje dysków sieciowych",
   "Kopię najpewniej też zaszyfruje — potrzebna jest kopia offline albo w miejscu, którego zaatakowany komputer nie nadpisze",
   "Wystarczy zapłacić okup, bo przestępcy zawsze oddają klucz"
  ],
  "poprawna": 2,
  "wyjasnienie": "Ransomware szyfruje wszystko, do czego zaatakowany komputer ma dostęp do zapisu. Zasada 3-2-1: trzy kopie, dwa nośniki, jedna poza miejscem pracy."
 },
 {
  "pytanie": "Które hasło jest najsilniejsze?",
  "opcje": ["P@ssw0rd2026", "Ab3$", "szczucin", "kalosz-latarnia-mak-orbita"],
  "poprawna": 3,
  "wyjasnienie": "Decyduje długość i nieprzewidywalność. Cztery przypadkowe słowa dają długie hasło, łatwe do zapamiętania. P@ssw0rd to znany wzorzec, Ab3$ jest za krótkie, a szczucin to jedno słowo ze słownika."
 },
 {
  "pytanie": "Na jaki numer przekazujesz podejrzany SMS, żeby trafił do CERT Polska?",
  "odpowiedz": ["8080"],
  "wyjasnienie": "8080 to bezpłatny numer CERT Polska do zgłaszania SMS-ów. Przekazujesz wiadomość bez zmian, a zgłoszone strony trafiają na listę ostrzeżeń."
 },
 {
  "pytanie": "Co gwarantuje kłódka i adres https:// w pasku przeglądarki?",
  "opcje": [
   "Że strona należy do uczciwej firmy",
   "Że transmisja między przeglądarką a serwerem jest szyfrowana",
   "Że na stronie nie ma wirusów",
   "Że strona została sprawdzona przez CERT Polska"
  ],
  "poprawna": 1,
  "wyjasnienie": "HTTPS szyfruje transmisję. Certyfikat DV dostanie każdy właściciel domeny, także oszust, więc kłódka nie mówi nic o uczciwości strony."
 },
 {
  "pytanie": "Czym certyfikat EV różni się od certyfikatu DV?",
  "opcje": [
   "Szyfruje silniejszym algorytmem",
   "Przed wystawieniem sprawdzono nie tylko domenę, ale też firmę i osobę składającą wniosek",
   "Jest darmowy i wystawiany automatycznie",
   "Działa bez protokołu TLS"
  ],
  "poprawna": 1,
  "wyjasnienie": "Siła szyfrowania jest taka sama. EV daje większą pewność, kto stoi za stroną, bo urząd certyfikacji sprawdził organizację. Darmowe i automatyczne są certyfikaty DV."
 }
]
</script>
</div>

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**. Kartę wypełniasz przez obie lekcje:
zadania 1–2 na pierwszej, 3–5 na drugiej.

<div class="kp-podsumowanie" data-karta="cyberbezpieczenstwo"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    !!! info "Twoje odpowiedzi zostają na twoim komputerze"

        Formularz niczego nie wysyła sam. Do nauczyciela karta trafia dopiero po
        kliknięciu **Wyślij do nauczyciela** (z kodem z karteczki) albo gdy
        dołączysz pobrany plik Worda w dzienniku. Wyczyszczenie danych
        przeglądania usunie odpowiedzi — kiedy skończysz, wyślij albo pobierz kartę.

    <div class="karta-pracy" data-karta="cyberbezpieczenstwo"></div>

### Jak ją oddać

Kliknij **Wyślij do nauczyciela** pod kartą albo pobierz kartę w Wordzie
i dołącz ją w **Dzienniku VULCAN → Zadania domowe**, w zadaniu
*Cyberbezpieczeństwo — karta pracy*. Termin: najbliższa lekcja.

---

## Sprawdź, czy rozumiesz

??? question "Kolega mówi: „Mam antywirusa, więc phishing mnie nie dotyczy”. Co mu odpowiesz?"

    Antywirus wyłapuje złośliwe programy, ale phishing nie musi niczego
    instalować: wystarczy, że ofiara sama wpisze hasło na fałszywej stronie.
    Przed tym chroni tylko uważność — sprawdzenie domeny i nadawcy — oraz
    2FA, które utrudnia użycie skradzionego hasła.

??? question ":material-plus-circle: Dlaczego zasada 3-2-1 każe trzymać jedną kopię poza miejscem pracy?"

    Bo niektóre zagrożenia niszczą wszystko w jednym miejscu naraz: pożar,
    zalanie, kradzież sprzętu, ransomware, który dosięgnie każdego
    podłączonego dysku. Kopia w innym budynku albo w chmurze z historią wersji
    przetrwa każde z nich.

??? question ":material-star: Oszust zrobił stronę `bank-logowanie-24.pl` z certyfikatem i kłódką. Jaki to najpewniej certyfikat i dlaczego nie EV?"

    DV — wystarczy, że kontroluje domenę, a dostanie go automatycznie, nawet
    za darmo. EV wymaga sprawdzenia zarejestrowanej firmy i osoby, która składa
    wniosek, więc na fikcyjną firmę go nie dostanie. Nie zmienia to faktu,
    że szyfrowanie obu certyfikatów jest tak samo silne — różnią się tym,
    co wiadomo o właścicielu.

---

!!! info "Materiały uzupełniające"

    - Zasady bezpiecznej bankowości i podpis elektroniczny: temat [E-usługi](e-uslugi.md)
    - Kłódka i HTTPS w sieci: temat [Sieci komputerowe – budowa i usługi](sieci-komputerowe.md)
    - Zgłaszanie incydentów: [CERT Polska — incydent.cert.pl](https://incydent.cert.pl/)

*Stan sprawdzony 9 listopada 2026 r. Adresy, firmy i hasła w ćwiczeniach są
zmyślone na potrzeby lekcji.*
