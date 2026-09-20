# E-usługi

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział I. Urządzenia komputerowe w sieci
    · podstawa programowa **IV.2**

    Sprawę, na którą kiedyś brało się wolne od pracy i szło do okienka, dziś
    załatwia się z telefonu w pięć minut. Ta lekcja jest o tym, **jak to
    działa**: skąd urząd wie, że to naprawdę ty, co znaczy, że coś zostało
    „doręczone”, dlaczego jedno przejęte konto potrafi zaboleć bardziej niż
    zgubiony portfel — i co ważnego zmieniło się w Polsce **1 stycznia 2026 r.**

!!! success "Cele lekcji"

    Po tych zajęciach potrafisz:

    1. zdefiniować e-usługę i odróżnić ją od zwykłej strony internetowej
    2. podać przykłady e-usług z różnych dziedzin i wskazać te, z których korzystasz
    3. wymienić sposoby potwierdzania tożsamości w polskich e-usługach i wskazać, do czego służy `login.gov.pl`
    4. opisać zabezpieczenia e-usług, w tym systemu **ePUAP**, i wyjaśnić, czym zastąpiły go **e-Doręczenia**
    5. wymienić zalety e-usług i problemy, jakie ze sobą niosą
    6. stosować zasady bezpiecznego korzystania z bankowości elektronicznej i rozpoznać próbę wyłudzenia
    7. wskazać, z jakich części składa się e-usługa i jakimi narzędziami można ją zbudować
    8. omówić kierunki rozwoju e-usług, w tym europejski portfel tożsamości cyfrowej

## Jak czytać tę stronę

Materiał jest ułożony narastająco. Sekcje oznaczone etykietami odpowiadają
poziomom wymagań — jeśli celujesz w ocenę dobrą lub wyższą, nie pomijaj ich.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

!!! danger "Na tej lekcji nie logujemy się do niczego prawdziwego"

    Komputer w pracowni jest **wspólny**. Nie wpisujemy na nim haseł do banku,
    do e-Urzędu Skarbowego ani do konta pacjenta — nawet „na chwilę”, nawet
    w trybie prywatnym. Wszystkie ćwiczenia da się wykonać, oglądając
    **strony logowania** i wyniki, bez podawania jakichkolwiek danych.

---

## 1. Czym jest e-usługa

**E-usługa** to usługa, która:

- jest świadczona **przez sieć**, bez jednoczesnej obecności stron,
- jest **zautomatyzowana** — po drugiej stronie w typowym przypadku nie siedzi człowiek, który przepisuje twój wniosek,
- uruchamia się **na twoje żądanie**, wtedy, kiedy jej potrzebujesz,
- **załatwia sprawę**, a nie tylko o niej informuje.

Ostatni punkt jest tym, który odróżnia e-usługę od zwykłej strony:

| To **nie** jest e-usługa | To **jest** e-usługa |
| --- | --- |
| strona szkoły z godzinami pracy sekretariatu | dziennik elektroniczny, w którym usprawiedliwiasz nieobecność |
| strona urzędu z wykazem formularzy do wydrukowania | złożenie wniosku przez internet i otrzymanie odpowiedzi |
| cennik biletów w PDF-ie | kupienie biletu w aplikacji i okazanie go w telefonie |
| e-mail do urzędnika z pytaniem | wniosek złożony w systemie, który nadaje mu numer i termin |

!!! tip "Skąd litera „e”"

    Przedrostek oznacza po prostu *electronic*. Stąd cała rodzina pojęć, które
    spotkasz w wymaganiach: **e-usługa**, **e-zasoby** (materiały dostępne
    w sieci), **e-learning** (nauka na odległość), **e-administracja**,
    **e-zdrowie**, **e-handel**.

## 2. Gdzie spotykasz e-usługi

| Dziedzina | Przykłady | Co realnie załatwiasz |
| --- | --- | --- |
| **Administracja** | `mObywatel`, `gov.pl`, e-Doręczenia | dowód i prawo jazdy w telefonie, wnioski, korespondencja z urzędem |
| **Podatki** | Twój e-PIT w e-Urzędzie Skarbowym | roczne rozliczenie — wypełnione za ciebie, do sprawdzenia i zatwierdzenia |
| **Zdrowie** | Internetowe Konto Pacjenta (`pacjent.gov.pl`) | e-recepta, e-skierowanie, historia wizyt, szczepienia, EKUZ |
| **Ubezpieczenia** | eZUS (dawniej PUE ZUS) | zwolnienia lekarskie, składki, wnioski |
| **Finanse** | bankowość internetowa i mobilna, BLIK | przelew, płatność, historia rachunku |
| **Edukacja** | dziennik elektroniczny, platformy e-learningowe, mLegitymacja | oceny, usprawiedliwienia, materiały, legitymacja w telefonie |
| **Transport** | aplikacje biletowe, e-TOLL | bilet, opłata za przejazd, rezerwacja |
| **Handel** | sklepy internetowe, serwisy ogłoszeniowe | zakup, zwrot, śledzenie przesyłki |

Większość z nich obsługujesz, nie zastanawiając się nad tym ani sekundy.
Ta lekcja jest o tym, co dzieje się pod spodem.

!!! info "Nie wszystko jest dla ciebie — jeszcze"

    Część e-usług wymaga pełnoletności albo zgody rodzica: własne konto
    w banku bez ograniczeń, samodzielne rozliczenie podatku, Profil Zaufany.
    Dostęp do Internetowego Konta Pacjenta osoby niepełnoletniej mają zwykle
    rodzice — do jej osiemnastych urodzin.

    To nie powód, żeby temat odpuścić. Za dwa–trzy lata **wszystkie** te sprawy
    będą twoje, a pierwszy kontakt z nimi lepiej mieć na lekcji niż pod presją
    terminu.

## 3. Skąd e-usługa wie, że to ty

Papierową sprawę załatwiało się, pokazując dowód w okienku. W sieci trzeba to
zrobić inaczej — i tu pojawia się **tożsamość cyfrowa**.

W Polsce działa jedno wspólne wejście: **`login.gov.pl`**, nazywane **węzłem
krajowym**. Nie jest osobną usługą — to strona, na którą przekierowuje cię
serwis, gdy trzeba potwierdzić, kim jesteś. Wybierasz tam jeden ze sposobów:

| Sposób | Na czym polega | Uwaga |
| --- | --- | --- |
| **Profil Zaufany** | bezpłatne konto państwowe; potwierdzenie SMS-em albo przez aplikację | najczęstszy sposób; zakłada się go przez bank albo w urzędzie |
| **aplikacja mObywatel** | potwierdzenie w telefonie, w aplikacji, którą już masz | najwygodniejszy, jeśli masz aktywną aplikację |
| **e-dowód** | dowód osobisty z warstwą elektroniczną + czytnik lub telefon z NFC | wymaga ustawionych kodów PIN |
| **bankowość elektroniczna** | bank potwierdza twoją tożsamość, bo sprawdził ją przy zakładaniu konta | działa tylko w bankach, które się do tego podłączyły |

!!! tip "Dlaczego bank może potwierdzić twoją tożsamość wobec urzędu"

    Bo zrobił to już wcześniej. Zakładając konto, okazałeś dokument
    i podpisałeś umowę — bank ma potwierdzoną wiedzę, kim jesteś. Państwo
    korzysta z tej wiedzy, zamiast sprawdzać wszystko drugi raz.

    Uwaga na kolejność: to **ty** wchodzisz na `login.gov.pl` i **stamtąd**
    wybierasz bank. Nigdy odwrotnie — nikt nie ma prawa prosić cię o hasło do
    banku „w celu weryfikacji w urzędzie”.

## 4. Zabezpieczenia e-usług

Dobrze zabezpieczona e-usługa opiera się na czterech rzeczach naraz.

| Co zabezpiecza | Jak to działa | Co widzisz |
| --- | --- | --- |
| **Uwierzytelnianie** — czy to ty | hasło **plus** drugi składnik: kod SMS, aplikacja, PIN do e-dowodu | logowanie w dwóch krokach |
| **Szyfrowanie transmisji** | protokół **TLS** — po drodze nikt nie odczyta danych | `https://` i kłódka w pasku adresu |
| **Podpis elektroniczny** — czy dokument jest twój i niezmieniony | podpis przypisany do konkretnej osoby i konkretnego pliku | „podpisz Profilem Zaufanym” |
| **Rozliczalność** — dowód, że sprawa się wydarzyła | system zapisuje, kto, co i kiedy zrobił; wystawia urzędowe potwierdzenie | UPO, numer sprawy, potwierdzenie doręczenia |

Dwa rodzaje podpisu, które trzeba umieć rozróżnić:

| | **Podpis Profilem Zaufanym** | **Kwalifikowany podpis elektroniczny** |
| --- | --- | --- |
| do czego | sprawy urzędowe | sprawy urzędowe **i** cywilne, np. umowy |
| skutek prawny | uznawany w kontaktach z administracją | równy podpisowi własnoręcznemu |
| koszt | bezpłatny | płatny, kupowany u dostawcy |
| skąd | państwo | komercyjne centrum certyfikacji |

### :material-plus-circle: **rozszerzenie** — ePUAP i to, co po nim

**ePUAP** — *Elektroniczna Platforma Usług Administracji Publicznej* — był
przez kilkanaście lat głównym kanałem kontaktu z urzędem w Polsce. Działał tak:

1. logowałeś się **Profilem Zaufanym** przez węzeł krajowy;
2. wypełniałeś formularz i **podpisywałeś** go Profilem Zaufanym;
3. pismo trafiało do **skrytki ePUAP** urzędu, a ty dostawałeś **UPO** — Urzędowe Poświadczenie Odbioru, czyli dowód z datą i godziną;
4. odpowiedź urzędu lądowała w **twojej** skrytce.

To była porządna konstrukcja: tożsamość potwierdzona, treść podpisana,
transmisja szyfrowana, a UPO rozstrzygało spór o to, czy i kiedy pismo
wpłynęło.

!!! warning "Podręcznik mówi o ePUAP — i wymaga aktualizacji"

    **Od 1 stycznia 2026 r. podstawowym sposobem elektronicznej korespondencji
    z urzędami są e-Doręczenia**, a ePUAP zostaje tylko tam, gdzie osobne
    przepisy wciąż go dopuszczają. Skończył się okres przejściowy, w którym
    pismo wysłane przez ePUAP wywoływało pełny skutek doręczenia.

    Zabezpieczenia ePUAP nadal warto rozumieć — to wzorzec, na którym zbudowano
    następcę, i tego dotyczy wymaganie na ocenę dobrą. Ale jeżeli jutro
    miałbyś coś wysłać do urzędu, robisz to **przez e-Doręczenia**.

**e-Doręczenia** to elektroniczny odpowiednik listu poleconego za potwierdzeniem
odbioru. Każdy uczestnik ma **adres do doręczeń elektronicznych (ADE)** — ciąg
znaków, który wygląda jak `AE:PL-12345-67890-ABCDE-12`, a nie jak adres e-mail.
System potwierdza **wysłanie i odebranie**, i te potwierdzenia mają skutek
prawny: od nich liczą się terminy.

## 5. Zalety i problemy

| Zalety | Problemy |
| --- | --- |
| sprawa załatwiona o dowolnej porze, bez dojazdu i kolejki | **wykluczenie cyfrowe** — kto nie ma sprzętu, łącza albo umiejętności, zostaje z tyłu |
| krótszy czas oczekiwania, mniej papieru | **awaria** wyłącza wszystkich naraz, a termin biegnie dalej |
| formularz sam sprawdza błędy i pilnuje wymaganych pól | jedno konto otwiera wiele spraw — **jedno włamanie kosztuje więcej** |
| każda czynność zostawia ślad: kto, co, kiedy | ten sam ślad to **dane o tobie**, gromadzone latami |
| taniej dla urzędu i dla obywatela | e-usługi są **celem oszustów** — phishing podszywa się właśnie pod nie |
| dostęp do własnych danych: recept, ocen, historii | **uzależnienie od telefonu** — rozładowany albo zgubiony blokuje dostęp |

!!! warning "Wykluczenie cyfrowe to nie jest problem teoretyczny"

    Dotyczy osób starszych, mieszkańców terenów bez szybkiego internetu, osób
    z niepełnosprawnościami, dla których serwis zaprojektowano bez myślenia
    o dostępności, i osób, których po prostu nie stać na sprzęt. Dlatego prawo
    wymaga, żeby **równolegle zostawała droga tradycyjna** — papierowa albo
    w okienku. E-usługa ma być wyborem, nie przymusem.

## 6. Bezpieczna bankowość elektroniczna

Bank jest najczęściej atakowaną e-usługą, bo prowadzi najkrótszą drogę do
pieniędzy. Atak prawie nigdy nie polega na łamaniu szyfrowania — polega na
**namówieniu cię**, żebyś sam oddał dostęp.

| Zasada | Dlaczego |
| --- | --- |
| adres banku **wpisuj sam** albo z własnej zakładki | link w SMS-ie i w mailu prowadzi tam, dokąd chce nadawca, a nie tam, co pokazuje |
| **czytaj treść SMS-a z kodem**, nie tylko cyfry | w treści jest kwota i odbiorca; to ostatni moment, żeby zauważyć podmianę |
| bank **nigdy** nie prosi o hasło, PIN ani kod przez telefon | kto o to prosi, jest oszustem — niezależnie od tego, jak się przedstawia |
| nie instaluj programów „do pomocy zdalnej” na prośbę kogoś, kto dzwoni | to najczęstszy sposób przejęcia komputera ofiary |
| włącz **powiadomienia** o każdej transakcji | zauważysz obcą operację w minuty, a nie na koniec miesiąca |
| **nie loguj się do banku** na cudzym ani wspólnym komputerze | nie wiesz, co na nim zainstalowano |
| oferta „zbyt dobra, żeby była prawdziwa” | bo nie jest |

!!! danger "Jak wygląda typowe wyłudzenie"

    Dostajesz SMS: *„Twoja przesyłka została wstrzymana. Dopłać 1,50 zł:
    [link]”*. Strona wygląda jak twój bank, ma nawet kłódkę — bo certyfikat
    TLS można dostać za darmo do **dowolnej** domeny, także oszukańczej.
    Wpisujesz login i hasło, potem „kod autoryzacyjny”. Kwota w SMS-ie
    z banku brzmi jednak inaczej niż 1,50 zł, ale kto by ją czytał.

    Trzy rzeczy, które demaskują atak, zanim będzie za późno: **pośpiech**
    („masz 24 godziny”), **niezgodna treść SMS-a z kodem** i **adres domeny**,
    który przy uważnym spojrzeniu nie jest adresem banku.

## 7. :material-plus-circle: **rozszerzenie** — z czego zbudowana jest e-usługa

Każda e-usługa, niezależnie od tego, czy wydaje zaświadczenie, czy sprzedaje
bilet, składa się z tych samych części:

| Część | Zadanie | Czym się to robi |
| --- | --- | --- |
| **interfejs** | to, co widzi użytkownik: formularz, przyciski | HTML i CSS, gotowe systemy stron, generatory formularzy |
| **logika** | sprawdzenie danych, wyliczenie, decyzja co dalej | kod po stronie serwera |
| **baza danych** | pamięta wnioski, stany spraw, historię | system bazodanowy |
| **tożsamość** | potwierdza, kto składa wniosek | węzeł krajowy, logowanie kontem, logowanie przez inny serwis |
| **płatności** | pobiera opłatę, gdy jest wymagana | operator płatności, BLIK, przelew |
| **powiadomienia** | informuje o zmianie stanu sprawy | e-mail, SMS, komunikat w aplikacji |
| **integracje (API)** | pobiera dane z innych systemów, zamiast pytać o nie ciebie | interfejsy programistyczne |

Ostatni wiersz jest najważniejszy i najmniej widoczny. To dzięki niemu
Twój e-PIT jest **wypełniony**, zanim go otworzysz: urząd ma już dane od
pracodawcy i nie musi prosić o nie ciebie po raz drugi.

!!! tip "Czym można zbudować prostą e-usługę bez pisania kodu"

    | Narzędzie | Do czego |
    | --- | --- |
    | formularze Google / Microsoft Forms | zapisy, ankiety, zgłoszenia — z automatycznym arkuszem wyników |
    | kreatory stron i systemy CMS | strona z formularzem, płatnością i kontem użytkownika |
    | platformy „no-code” | aplikacja z bazą danych, bez programowania |
    | rządowy generator formularzy (nFORMS) | formularze urzędowe publikowane na `mObywatel.gov.pl` |

    Zapisy na wycieczkę klasową z automatycznym zestawieniem zgód to też
    e-usługa — mała, ale spełniająca całą definicję z sekcji 1.

## 8. :material-star: **dopełnienie** — dokąd to zmierza

| Kierunek | Na czym polega |
| --- | --- |
| **europejski portfel tożsamości cyfrowej** | jedna aplikacja do potwierdzania tożsamości **we wszystkich krajach UE**; w Polsce ma działać w powiązaniu z aplikacją mObywatel, wdrożenie planowane od końca 2026 r. |
| **zasada „tylko raz”** | urząd nie pyta o dane, które państwo już ma — pobiera je z innego rejestru |
| **usługi, które same się zgłaszają** | zamiast wniosku: powiadomienie „masz prawo do…”, z jednym przyciskiem |
| **sztuczna inteligencja w obsłudze** | asystenci odpowiadający na pytania, wstępna klasyfikacja wniosków |
| **dostępność jako obowiązek** | serwisy publiczne muszą być użyteczne dla osób z niepełnosprawnościami — to wymóg prawa, nie dobra wola |

Każdy z tych kierunków ma drugą stronę. Wygoda jednego konta do wszystkiego
oznacza, że **jedno przejęte konto** otwiera wszystko. Sprawniejsza wymiana
danych między urzędami oznacza, że **błąd w jednym rejestrze** rozejdzie się po
pozostałych. Dlatego przy e-usługach rozmowa o bezpieczeństwie i o prywatności
nie jest dodatkiem do tematu — jest tematem.

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — inwentaryzacja własnych e-usług

Wypisz **pięć** e-usług, z których korzystasz ty albo twoja rodzina. Dla każdej
podaj: dziedzinę, co konkretnie się przez nią załatwia i jak potwierdza się
w niej tożsamość (hasło, kod SMS, aplikacja, Profil Zaufany, brak).

Przy każdej odpowiedz na pytanie kontrolne: **czy da się tę samą sprawę
załatwić bez internetu?** Jeżeli nie — kto na tym traci?
**Wynik zapisz w karcie pracy — zadanie 1.**

### :material-console: Ćwiczenie 2 — strony logowania pod lupą

Bez logowania się i bez podawania jakichkolwiek danych otwórz strony logowania
**trzech** serwisów: `login.gov.pl`, `pacjent.gov.pl` i strony dowolnego banku.

Dla każdej sprawdź i zapisz:

1. jakie sposoby potwierdzenia tożsamości oferuje;
2. czy połączenie jest szyfrowane — kliknij kłódkę i odczytaj, **dla jakiej domeny** wystawiono certyfikat;
3. czy strona wymaga drugiego składnika, czy wystarczy samo hasło.

Porównaj wyniki i napisz, który z trzech serwisów ma najmocniejsze
zabezpieczenia. **Wynik — zadanie 2.**

### :material-console: Ćwiczenie 3 — rozbierz wyłudzenie na części

Nauczyciel poda ci treść wiadomości (SMS-a albo maila) podszywającej się pod
e-usługę. Wskaż w niej **cztery** elementy typowe dla oszustwa: presję czasu,
adres domeny, niezgodność treści z rzekomym nadawcą i to, o co właściwie
wiadomość prosi.

Następnie napisz, co zrobiłbyś po kliknięciu w taki link i podaniu danych —
krok po kroku, w kolejności. **Wynik i wnioski — zadanie 3.**

### :material-console: Ćwiczenie 4 — zaprojektuj e-usługę dla szkoły

Wybierz sprawę, którą w twojej szkole załatwia się dziś na papierze — zgoda na
wycieczkę, zapisy na konsultacje, zamówienie obiadów, wypożyczenie sprzętu.
Zaprojektuj dla niej e-usługę: jakie pola ma formularz, kto się loguje i czym,
gdzie trafiają dane, kto dostaje powiadomienie i jak wygląda potwierdzenie dla
ucznia.

Wskaż też **narzędzie**, którym dałoby się to zbudować bez programowania.
**Wynik — zadanie 4.**

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Które z poniższych jest e-usługą?",
    "typ": "jedna",
    "opcje": [
      "Strona urzędu z wykazem formularzy do wydrukowania",
      "Cennik biletów opublikowany w pliku PDF",
      "Strona szkoły z godzinami pracy sekretariatu",
      "Złożenie wniosku przez internet i otrzymanie potwierdzenia z numerem sprawy"
    ],
    "poprawna": 3,
    "wyjasnienie": "E-usługa załatwia sprawę, a nie tylko o niej informuje. Strona z formularzami do wydrukowania jest źródłem informacji — sprawę i tak trzeba załatwić gdzie indziej."
  },
  {
    "pytanie": "Do czego służy login.gov.pl?",
    "typ": "jedna",
    "opcje": [
      "To wspólne wejście, na którym potwierdzasz tożsamość na potrzeby wielu e-usług",
      "To serwis do zakładania kont bankowych",
      "To wyszukiwarka urzędów",
      "To aplikacja do przechowywania dokumentów w telefonie"
    ],
    "poprawna": 0,
    "wyjasnienie": "login.gov.pl, czyli węzeł krajowy, jest pośrednikiem: serwis przekierowuje cię tam, a ty wybierasz Profil Zaufany, mObywatela, e-dowód albo bank."
  },
  {
    "pytanie": "Czym było UPO w systemie ePUAP?",
    "typ": "jedna",
    "opcje": [
      "Hasłem jednorazowym do logowania",
      "Urzędowym Poświadczeniem Odbioru — dowodem z datą i godziną, że pismo wpłynęło",
      "Rodzajem podpisu kwalifikowanego",
      "Numerem skrytki urzędu"
    ],
    "poprawna": 1,
    "wyjasnienie": "UPO rozstrzygało spór o to, czy i kiedy pismo wpłynęło. Dziś tę rolę pełnią potwierdzenia wysłania i odebrania w e-Doręczeniach."
  },
  {
    "pytanie": "Co zmieniło się 1 stycznia 2026 r. w kontakcie z urzędami w Polsce?",
    "typ": "jedna",
    "opcje": [
      "Zlikwidowano Profil Zaufany",
      "Wprowadzono obowiązek posiadania podpisu kwalifikowanego",
      "Podstawowym sposobem elektronicznej korespondencji stały się e-Doręczenia, a ePUAP został tylko tam, gdzie dopuszczają go osobne przepisy",
      "Wszystkie sprawy trzeba znów załatwiać osobiście"
    ],
    "poprawna": 2,
    "wyjasnienie": "Skończył się okres przejściowy, w którym pismo wysłane przez ePUAP wywoływało pełny skutek doręczenia. Kanałem podstawowym są e-Doręczenia."
  },
  {
    "pytanie": "Czym różni się podpis Profilem Zaufanym od kwalifikowanego podpisu elektronicznego?",
    "typ": "jedna",
    "opcje": [
      "Niczym — to dwie nazwy tego samego",
      "Profil Zaufany jest płatny, a kwalifikowany bezpłatny",
      "Profil Zaufany jest bezpłatny i służy sprawom urzędowym, a podpis kwalifikowany jest płatny i ma moc podpisu własnoręcznego także w sprawach cywilnych",
      "Podpis kwalifikowany działa tylko w aplikacji mObywatel"
    ],
    "poprawna": 2,
    "wyjasnienie": "Zakres zastosowania jest tym, co je różni. Umowy cywilnoprawne podpisuje się podpisem kwalifikowanym, bo tylko on jest prawnie równy podpisowi odręcznemu."
  },
  {
    "pytanie": "Strona ma kłódkę i adres zaczynający się od https. Co z tego wynika?",
    "typ": "jedna",
    "opcje": [
      "Że strona jest bezpieczna i można jej zaufać",
      "Że to na pewno strona twojego banku",
      "Że została sprawdzona przez urząd",
      "Tylko tyle, że transmisja jest szyfrowana — certyfikat można dostać także do domeny oszusta"
    ],
    "poprawna": 3,
    "wyjasnienie": "Kłódka mówi o szyfrowaniu, nie o uczciwości właściciela. Dlatego zawsze sprawdza się, DLA JAKIEJ DOMENY wystawiono certyfikat."
  },
  {
    "pytanie": "Dzwoni osoba podająca się za pracownika banku i prosi o kod z SMS-a, żeby „zatrzymać podejrzaną transakcję”. Co robisz?",
    "typ": "jedna",
    "opcje": [
      "Podaję kod, skoro chodzi o bezpieczeństwo",
      "Nie podaję kodu — bank nigdy o niego nie prosi; rozłączam się i dzwonię na numer z własnej karty albo z aplikacji",
      "Podaję kod, ale tylko część",
      "Instaluję program do pomocy zdalnej, który poleci rozmówca"
    ],
    "poprawna": 1,
    "wyjasnienie": "Kod z SMS-a autoryzuje operację, więc podanie go to zgoda na przelew. Numer telefonu da się podrobić, dlatego oddzwania się zawsze na numer z własnego źródła."
  },
  {
    "pytanie": "Które zjawisko jest najpoważniejszym problemem społecznym związanym z e-usługami?",
    "typ": "jedna",
    "opcje": [
      "Wykluczenie cyfrowe — osoby bez sprzętu, łącza lub umiejętności tracą dostęp do spraw, które ich dotyczą",
      "Zbyt duża liczba dostępnych formularzy",
      "To, że urzędy działają krócej niż kiedyś",
      "Brak możliwości wydrukowania potwierdzenia"
    ],
    "poprawna": 0,
    "wyjasnienie": "Dlatego prawo wymaga zostawienia drogi tradycyjnej. E-usługa ma być wyborem, a nie warunkiem załatwienia sprawy."
  },
  {
    "pytanie": "Dlaczego Twój e-PIT jest wypełniony, zanim go otworzysz?",
    "typ": "jedna",
    "opcje": [
      "Bo urząd zgaduje wysokość zarobków",
      "Bo podatnik wypełnia go rok wcześniej",
      "Bo system pobiera dane z innych rejestrów przez interfejsy programistyczne — między innymi dane przekazane przez pracodawcę",
      "Bo każdy płaci taką samą kwotę"
    ],
    "poprawna": 2,
    "wyjasnienie": "To działanie integracji przez API i zasady „tylko raz”: państwo nie pyta o dane, które już ma."
  },
  {
    "pytanie": "Czym jest ADE w e-Doręczeniach?",
    "typ": "jedna",
    "opcje": [
      "Nazwą aplikacji mobilnej",
      "Adresem do doręczeń elektronicznych — identyfikatorem uczestnika, innym niż adres e-mail",
      "Kodem autoryzacyjnym transakcji",
      "Rodzajem certyfikatu TLS"
    ],
    "poprawna": 1,
    "wyjasnienie": "ADE wygląda jak ciąg znaków zaczynający się od AE:PL. To on, a nie adres e-mail, identyfikuje uczestnika systemu e-Doręczeń."
  }
]
</script>
</div>

---

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj go
przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="e-uslugi"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="e-uslugi"></div>

---

## Sprawdź, czy rozumiesz

??? question "Kolega twierdzi, że strona jego banku jest bezpieczna, bo „ma kłódkę”. Co jest nie tak z tym rozumowaniem?"

    Kłódka potwierdza **tylko** jedno: że połączenie jest szyfrowane i że
    certyfikat został wystawiony dla domeny widocznej w pasku adresu. Nie mówi
    nic o tym, kto tę domenę zarejestrował ani w jakim celu. Certyfikaty są
    darmowe i dostaje je każdy, kto wykaże, że kontroluje domenę — także
    oszust, który zarejestrował adres łudząco podobny do bankowego.

    Sprawdza się więc nie obecność kłódki, tylko **nazwę domeny**: czy to
    dokładnie ten adres banku, który znasz, bez dodatkowych członów
    i bez podmienionych liter.

??? question "Dlaczego prawo wymaga, żeby obok e-usługi zostawała droga papierowa, skoro elektroniczna jest tańsza i szybsza?"

    Bo inaczej państwo odcięłoby od własnych spraw tych, którzy nie mogą z tej
    drogi skorzystać: osoby starsze, mieszkańców miejsc bez zasięgu, osoby
    z niepełnosprawnościami, dla których serwis zaprojektowano niedostępnie,
    i osoby, których nie stać na sprzęt. Dostęp do urzędu jest prawem, a nie
    usługą dla tych, którym akurat wyszło z technologią.

    Uwaga: to nie jest argument przeciw e-usługom. To argument za tym, żeby
    **równolegle** utrzymywać obie drogi, dopóki wykluczenie realnie istnieje.

??? question "Zgubiłeś telefon, w którym miałeś aplikację potwierdzającą logowanie. Jak duży to problem i co robisz?"

    Problem jest realny, bo telefon był twoim **drugim składnikiem**
    uwierzytelniania — bez niego nie potwierdzisz logowania, a znalazca, jeśli
    telefon nie był zabezpieczony, ma połowę drogi do twoich kont.

    Kolejność działań: zablokować kartę SIM u operatora, zdalnie zablokować albo
    wyczyścić telefon, zmienić hasła do najważniejszych kont z innego urządzenia,
    a w aplikacjach odłączyć zgubione urządzenie z listy zaufanych. Na przyszłość:
    blokada ekranu, szyfrowanie i **zapasowa metoda logowania** ustawiona wcześniej,
    a nie w panice.

??? question ":material-plus-circle: Urząd wysłał pismo na twój adres do doręczeń elektronicznych, a ty go nie odczytałeś. Czy termin na odpowiedź biegnie?"

    Tak — i to jest najważniejsza praktyczna różnica między e-Doręczeniami
    a zwykłym e-mailem. System odnotowuje wysłanie i odebranie, a po upływie
    określonego czasu pismo uznaje się za doręczone także wtedy, gdy adresat go
    nie otworzył. Działa to tak samo jak awizowany list polecony: nieodebranie
    nie zatrzymuje terminu.

    Wniosek praktyczny: skrzynkę do doręczeń elektronicznych trzeba sprawdzać
    równie regularnie jak skrzynkę na listy — z tą różnicą, że tutaj nie ma
    listonosza, który zostawi karteczkę.

??? question ":material-star: Rząd planuje jedną aplikację, w której trzymasz dokumenty i którą potwierdzasz tożsamość we wszystkich krajach UE. Wymień jedną poważną zaletę i jedno poważne ryzyko."

    **Zaleta**: koniec z osobnym kontem, hasłem i procedurą w każdym państwie
    i w każdej instytucji. Tożsamość potwierdzasz raz, jednym narzędziem, które
    działa transgranicznie — co ma znaczenie przy studiach, pracy i leczeniu
    za granicą.

    **Ryzyko**: wszystko w jednym miejscu to także jeden cel. Przejęcie takiej
    aplikacji albo jej kompromitacja dotyka naraz wszystkich spraw właściciela,
    a nie jednej usługi. Do tego dochodzi pytanie o to, kto i w jakim zakresie
    widzi, gdzie i kiedy potwierdzałeś swoją tożsamość — bo sama historia
    użycia jest informacją o twoim życiu.

    Dobra odpowiedź zauważa, że to ta sama cecha — centralizacja — raz działa
    na korzyść, a raz przeciw.

---

!!! info "Źródła i materiały uzupełniające"

    - Zmiany od 1 stycznia 2026 r.: [gov.pl — e-Doręczenia](https://www.gov.pl/web/e-doreczenia/zmiany-w-komunikacji-elektronicznej-od-1-stycznia-2026-roku)
    - Wspólne logowanie do e-usług: [login.gov.pl](https://login.gov.pl/) oraz [Węzeł Krajowy](https://www.gov.pl/web/login)
    - Konto pacjenta: [pacjent.gov.pl — Internetowe Konto Pacjenta](https://pacjent.gov.pl/internetowe-konto-pacjenta)
    - Rozliczenie podatku: [podatki.gov.pl — e-Urząd Skarbowy](https://www.podatki.gov.pl/e-urzad-skarbowy/)
    - Dokumenty w telefonie: [info.mobywatel.gov.pl](https://info.mobywatel.gov.pl/)
    - Zgłaszanie oszustw i podejrzanych wiadomości: [CERT Polska — incydent.cert.pl](https://incydent.cert.pl/)
    - Podręcznik: *Informatyka na czasie* — zakres rozszerzony, część 1, dział I

*Stan e-usług sprawdzony 20 września 2026 r. Od 1 stycznia 2026 r. e-Doręczenia
są podstawowym sposobem elektronicznej korespondencji z urzędami, a ePUAP
pozostaje tylko tam, gdzie dopuszczają go osobne przepisy; portal PUE ZUS
występuje obecnie pod nazwą eZUS. Terminy i nazwy usług publicznych zmieniają
się często — przed sprawdzianem zajrzyj na `gov.pl`.*
