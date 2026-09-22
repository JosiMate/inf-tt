# Wiesz, umiesz, zdasz — podsumowanie działu I

!!! abstract "O tym sprawdzianie"

    **1 godzina lekcyjna** · Dział I. Urządzenia komputerowe w sieci
    · podstawa programowa **III.1–III.4, IV.2, IV.5, V.1–V.3, R III.2**

    Termin: **wtorek 29 września 2026 r.**, na lekcji informatyki.
    Forma: **praca praktyczna przy komputerze**.

    Ta strona jest po to, żebyś wiedział dokładnie, czego się spodziewać —
    i żebyś miał materiał do powtórki w jednym miejscu, zamiast przeglądać
    sześć stron po kolei.

!!! success "Po tej powtórce potrafisz"

    1. odczytać konfigurację sieciową stanowiska i powiedzieć, co znaczy każda wartość
    2. policzyć adres sieci, adres rozgłoszeniowy i liczbę hostów z adresu i maski
    3. zdiagnozować brak łączności, wskazując, na którym etapie się urywa
    4. skrócić i rozwinąć adres IPv6 oraz uzasadnić potrzebę jego wdrażania
    5. sprawdzić dysk, system plików i konta w systemie operacyjnym
    6. ocenić wiarygodność źródła i legalnie użyć cudzego materiału

## Jak wygląda ten sprawdzian

| | |
| --- | --- |
| **Kiedy** | wtorek 29 września 2026 r., cała lekcja |
| **Forma** | zadania wykonywane przy komputerze, wynik zapisujesz w jednym dokumencie |
| **Ile zadań** | sześć, a w każdym kilka poleceń oznaczonych poziomem wymagań |
| **Jak liczy się ocena** | **poziomami, nie punktami** — patrz niżej |
| **Co oddajesz** | jeden plik `nr<numer w dzienniku>-dzial1` przez **Zadania domowe w dzienniku VULCAN**, do końca lekcji |
| **Czego potrzebujesz** | wiersz poleceń, przeglądarka, kalkulator, edytor tekstu |

!!! warning "Co wolno, a czego nie"

    **Wolno:** korzystać z wiersza poleceń i jego wbudowanej pomocy
    (`polecenie /?`), z kalkulatora systemowego i z arkusza kalkulacyjnego.
    Umiejętność dopytania programu o składnię jest częścią zawodu, nie
    ściąganiem.

    **Nie wolno:** otwierać tego serwisu ani innych materiałów z lekcji,
    korzystać z notatek, wyszukiwarki, czatów i komunikatorów — z jednym
    wyjątkiem: w zadaniu o źródłach internetowych **wyszukiwarka jest
    narzędziem zadania** i tam się z niej korzysta.

    Telefon zostaje w plecaku. Praca ma pokazać, co umiesz **ty**.

!!! tip "Poprawa"

    To jest praca obejmująca cały dział, więc ocenę z niej **można poprawić**:
    jeden raz, dobrowolnie, w ciągu dwóch tygodni od otrzymania ocenionej
    pracy, w terminie uzgodnionym ze mną. Poprawa obejmuje ten sam zakres
    i ma porównywalną trudność. W dzienniku zostają obie oceny, ale liczy się
    **wyższa** — przystąpienie do poprawy nigdy nie zaszkodzi.

    Zasady w całości: [wymagania edukacyjne i bhp](wymagania-i-bhp.md).

## Jak liczy się ocena

Ta praca **nie jest punktowana**. Nie ma progów procentowych i nie ma sytuacji,
w której brakuje ci jednego punktu do czwórki. Zamiast tego każde polecenie jest
oznaczone literą — poziomem wymagań, tym samym, który widzisz na
[stronie wymagań edukacyjnych](wymagania-i-bhp.md) i w etykietach przy treściach
na stronach tematów.

| Poziom | Wymagania | Daje ocenę |
| :---: | --- | :---: |
| **K** | konieczne | 2 |
| **P** | podstawowe | 3 |
| **R** | rozszerzające | 4 |
| **D** | dopełniające | 5 |

Ocenę wyznacza **najwyższy poziom, który zaliczysz w całości — razem ze
wszystkimi niższymi**. Nie da się dostać czwórki, przeskakując poziom
podstawowy.

!!! tip "Reguła jednego pudła"

    Poziom jest zaliczony, gdy wykonasz **wszystkie jego polecenia z wyjątkiem
    najwyżej jednego**. Ta tolerancja istnieje po to, żeby jedna pomyłka albo
    jedno przeoczone polecenie nie przekreślało całego poziomu.

    Nie obejmuje ona poleceń oznaczonych gwiazdką **★** — to są umiejętności,
    bez których poziomu po prostu nie ma.

!!! warning "Co z tego wynika dla twojej strategii"

    Opłaca się iść **od dołu**. Domknij najpierw wszystkie polecenia z literą K,
    potem P, i dopiero wtedy sięgaj wyżej. Trzy efektowne odpowiedzi z poziomu D
    przy nieodrobionym P nie dadzą ci nic — bo oceny nie sumuje się z kawałków.

    Szóstki na tej pracy nie ma. Ocenę celującą zdobywa się osobno, **zadaniem
    działowym** ze [spisu tematów](index.md#zadania-na-ocene-celujaca).

    Ocenioną pracę dostaniesz razem z **kartą oceny**: zobaczysz w niej nie
    liczbę, tylko które konkretnie umiejętności masz zaliczone, a które trzeba
    domknąć. To jest też lista, od której zaczynasz, jeżeli idziesz na poprawę.

## Zakres — co musisz umieć na daną ocenę

Każdy wiersz to jedno polecenie na sprawdzianie. **★** oznacza umiejętność,
bez której poziomu nie da się zaliczyć — tolerancja jednego pudła jej nie
obejmuje.

=== "K — na ocenę 2"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** odczytać adres IPv4 i maskę poleceniem `ipconfig /all` | [Sieci komputerowe](sieci-komputerowe.md) |
    | rozstrzygnąć, czy adres jest prywatny, publiczny czy APIPA, i wskazać pulę | [Sieci komputerowe](sieci-komputerowe.md) |
    | **★** sprawdzić łączność poleceniem `ping` i odczytać z wyniku, czy jest odpowiedź | [Sieci komputerowe](sieci-komputerowe.md) |
    | wypisać konta użytkowników w systemie i wskazać konto administratora | [Systemy operacyjne](systemy-operacyjne.md) |
    | podać przykład e-usługi i odróżnić ją od zwykłej strony informacyjnej | [E-usługi](e-uslugi.md) |

=== "P — na ocenę 3"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | odczytać bramę domyślną, serwery DNS, adres MAC i serwer DHCP | [Sieci komputerowe](sieci-komputerowe.md) |
    | **★** wyznaczyć adres sieci i adres rozgłoszeniowy | [Sieci komputerowe](sieci-komputerowe.md) |
    | wykonać pełną sekwencję sprawdzania — od pętli zwrotnej po nazwę | [Sieci komputerowe](sieci-komputerowe.md) |
    | odczytać adres IPv6 stanowiska i nazwać jego rodzaj | [Protokoły IPv4 i IPv6](protokoly-ip.md) |
    | **★** ułożyć zapytanie z operatorem `site:` i podać adres trafnego wyniku | [Korzystanie z e-zasobów](e-zasoby.md) |
    | wyjaśnić, co obejmuje dozwolony użytek osobisty i gdzie leży jego granica | [Korzystanie z e-zasobów](e-zasoby.md) |

=== "R — na ocenę 4"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** wskazać, na którym etapie urywa się łączność, i nazwać przyczynę | [Sieci komputerowe](sieci-komputerowe.md) |
    | **★** ustalić system plików dysku systemowego, jego pojemność i wolne miejsce | [Systemy operacyjne](systemy-operacyjne.md) |
    | rozpoznać typ nośnika i rozstrzygnąć, czy defragmentacja ma sens | [Systemy operacyjne](systemy-operacyjne.md) |
    | podać polecenie potwierdzające usterkę i sposób jej usunięcia | [Sieci komputerowe](sieci-komputerowe.md) |
    | zawęzić wyniki operatorem `filetype:` i ocenić wiarygodność dokumentu | [Korzystanie z e-zasobów](e-zasoby.md) |

=== "D — na ocenę 5"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | **★** podać prefiks, zakres adresów hostów i ich liczbę **wraz ze wzorem** | [Sieci komputerowe](sieci-komputerowe.md) |
    | **★** skrócić i rozwinąć adres IPv6 oraz uzasadnić regułę jednego `::` | [Protokoły IPv4 i IPv6](protokoly-ip.md) |
    | dobrać najmniejszą wystarczającą maskę do zadanej liczby stanowisk | [Sieci komputerowe](sieci-komputerowe.md) |
    | uzasadnić potrzebę wdrażania IPv6, porównując go z IPv4 | [Protokoły IPv4 i IPv6](protokoly-ip.md) |
    | rozstrzygnąć o legalności użycia materiału, powołując się na licencję albo przepis | [Korzystanie z e-zasobów](e-zasoby.md) |

Pełna lista wymagań na każdą ocenę jest na stronie
[wymagań edukacyjnych](wymagania-i-bhp.md) — rozwiń „Dział I”.

## Powtórka w pigułce

### Sieci komputerowe

Adres IPv4 to **32 bity**: cztery liczby 0–255. Maska dzieli go na część
sieciową i część hosta.

```text
adres IP   192.168.1.15
maska      255.255.255.0   (/24)
sieć       192.168.1.0
rozgłoszeniowy 192.168.1.255
hosty      192.168.1.1 – 192.168.1.254   (254)
```

Liczba adresów dla urządzeń: **2<sup>liczba bitów hosta</sup> − 2**. Odpadają
adres sieci (same zera) i rozgłoszeniowy (same jedynki).

| Maska | Bity hosta | Hostów |
| --- | :---: | ---: |
| /24 | 8 | 254 |
| /25 | 7 | 126 |
| /26 | 6 | 62 |
| /27 | 5 | 30 |
| /28 | 4 | 14 |
| /30 | 2 | 2 |

Adresy do rozpoznania od razu: `10.0.0.0/8`, `172.16.0.0/12` i `192.168.0.0/16`
to pule **prywatne**; `127.0.0.1` to **pętla zwrotna**; `169.254.x.x` to
**APIPA**, czyli „nie dostałem adresu z DHCP”.

### Diagnostyka

Sprawdzasz **po kolei, od siebie na zewnątrz** — każdy krok odcina część przyczyn.

| Polecenie | Co pokazuje |
| --- | --- |
| `ipconfig /all` | adres, maska, brama, DNS, MAC, serwer DHCP |
| `ping 127.0.0.1` | czy działa stos sieciowy tego komputera |
| `ping <brama>` | czy jest łączność z routerem |
| `ping 1.1.1.1` | czy jest internet, z pominięciem DNS |
| `ping <nazwa>` | czy działa rozwiązywanie nazw |
| `tracert <nazwa>` | trasa pakietu, węzeł po węźle |
| `nslookup <nazwa>` | jaki adres zwraca serwer DNS |
| `ipconfig /flushdns` | czyści pamięć podręczną DNS |

| Działa | Nie działa | Wniosek |
| --- | --- | --- |
| — | brak adresu albo `169.254.x.x` | nie ma odpowiedzi z DHCP |
| ping do bramy | ping do `1.1.1.1` | problem poza siecią lokalną |
| ping do `1.1.1.1` | ping po nazwie | wina DNS |
| ping po nazwie | strona w przeglądarce | sieć jest sprawna — przyczyna po stronie serwera albo przeglądarki |

**Mb/s to nie MB/s.** Osiem bitów to bajt, więc łącze 300 Mb/s daje najwyżej
około 37,5 MB/s. Przy grach i rozmowach ważniejsze od przepustowości bywa
**opóźnienie**.

### Protokoły IPv4 i IPv6

IPv6 ma **128 bitów** zapisywanych szesnastkowo w ośmiu grupach po cztery znaki.
Dwie reguły skracania:

1. z każdej grupy usuwa się **zera wiodące**;
2. **jeden** najdłuższy ciąg grup samych zer zastępuje się `::` — i tylko jeden,
   bo inaczej nie dałoby się odtworzyć, ile grup wypadło.

```text
2001:0db8:0000:0000:0000:ff00:0042:8329
2001:db8::ff00:42:8329
```

| | IPv4 | IPv6 |
| --- | --- | --- |
| Długość adresu | 32 bity | 128 bitów |
| Zapis | dziesiętny, kropki | szesnastkowy, dwukropki |
| Podział sieci | maska | prefiks `/64` |
| Konfiguracja | DHCP | SLAAC albo DHCPv6 |
| NAT | konieczny | niepotrzebny |
| Rekord DNS | **A** | **AAAA** |

Nie było i nie będzie „dnia przełączenia” — oba protokoły działają równolegle
(**dual stack**), bo wyłączenie IPv4 odcięłoby wszystko, co go jeszcze używa.

### Systemy operacyjne

**Jądro** zarządza procesorem, pamięcią, urządzeniami i plikami. Pracuje
w **trybie jądra**; programy użytkownika — w **trybie użytkownika**. Sterowniki
w większości systemów działają w trybie jądra, bo muszą sięgać bezpośrednio do
sprzętu; ceną jest to, że błąd sterownika wywraca cały system.

| System plików | Gdzie spotykany | Ograniczenie, o którym trzeba pamiętać |
| --- | --- | --- |
| **NTFS** | dyski systemowe Windows | słabo obsługiwany zapisem poza Windows |
| **FAT32** | stare pendrive'y, karty | plik najwyżej 4 GB |
| **exFAT** | pendrive'y i karty dziś | brak księgowania zmian |
| **ext4** | Linux | Windows go nie czyta bez dodatków |

**Fragmentacja** dotyczy dysków talerzowych (HDD) — defragmentacja ma tam sens.
Dysków SSD **się nie defragmentuje**; system zamiast tego wykonuje operację
TRIM. Kopia zapasowa ma znaczenie tylko wtedy, gdy trzymasz ją **poza tym
komputerem** i gdy sprawdziłeś, że da się z niej odtworzyć dane.

### Nowe technologie

**Chmura** to cudzy komputer wynajęty przez sieć — zaleta: nie kupujesz sprzętu
i skalujesz się w minutę; wada: zależysz od łącza i od dostawcy. **Sztuczna
inteligencja** dziś to głównie modele uczone na danych: potrafią rozpoznawać
i generować, ale nie rozumieją i potrafią się mylić z pełnym przekonaniem.
**Internet rzeczy** dokłada sieć do przedmiotów — i razem z nią wszystkie
problemy bezpieczeństwa. Przy licencjach odróżniaj: oprogramowanie **własnościowe**,
**otwarte** (open source), **freeware**, **shareware** i **domenę publiczną**.

### E-usługi i e-zasoby

**E-usługa** to sprawa załatwiana w całości elektronicznie, a nie strona
z formularzem do wydrukowania. Tożsamość potwierdza się profilem zaufanym,
bankowością, e-dowodem albo aplikacją; wspólnym punktem logowania jest
`login.gov.pl`. Od 1 stycznia 2026 r. podstawą korespondencji z urzędami są
**e-Doręczenia**.

Przy źródłach: kto, kiedy, skąd to wie, po co to napisał, czy ktoś niezależny
potwierdza. Odpowiedź sztucznej inteligencji **nie jest źródłem** — bywa, że
podaje nieistniejący przypis.

Prawo autorskie w trzech zdaniach: **użytek osobisty** (art. 23) obejmuje
rodzinę i znajomych, nie grupę klasową; **cytat** (art. 29) wolno przytoczyć
we własnej pracy, ale trzeba podać twórcę i źródło (art. 34); **domena
publiczna** zaczyna się 70 lat po śmierci twórcy (art. 36). W licencjach CC:
`BY` — podaj autora, `SA` — udostępnij tak samo, `NC` — niekomercyjnie,
`ND` — bez przeróbek.

---

## Zadania powtórkowe

Rozwiąż **zanim** rozwiniesz odpowiedź. Sprawdzanie od razu po przeczytaniu
pytania daje złudzenie, że się umie.

??? question "1. Komputer ma adres `192.168.10.75` i maskę `255.255.255.192`. Podaj adres sieci, adres rozgłoszeniowy i liczbę hostów."

    Maska `255.255.255.192` to **/26** — sześć bitów hosta.

    Ostatni oktet maski (192) dzieli przestrzeń na bloki po **64** adresy:
    0–63, 64–127, 128–191, 192–255. Adres 75 wpada do bloku **64–127**.

    - adres sieci: `192.168.10.64`
    - adres rozgłoszeniowy: `192.168.10.127`
    - adresy dla urządzeń: `192.168.10.65` – `192.168.10.126`
    - liczba hostów: 2<sup>6</sup> − 2 = **62**

??? question "2. `ipconfig` pokazuje adres `169.254.13.200`. Co to znaczy i od czego zaczynasz naprawę?"

    To **APIPA** — adres, który komputer nadał sobie sam, bo nie dostał
    odpowiedzi od serwera DHCP. Sieć lokalna dla niego nie istnieje, więc nie
    ma sensu sprawdzać DNS ani pingować internetu.

    Kolejność: kabel i dioda na karcie → port w switchu → czy inni w pracowni
    mają adresy (jeśli nie, problem jest na routerze, nie u ciebie) →
    `ipconfig /release` i `/renew`.

??? question "3. `ping 1.1.1.1` działa, `ping pceikz.pl` zwraca „nie można odnaleźć hosta”. Gdzie leży usterka?"

    Skoro pakiety dochodzą do adresu numerycznego, to sieć i trasa na zewnątrz
    działają. Nie działa **zamiana nazwy na adres**, czyli DNS.

    Sprawdzasz `ipconfig /all` — czy w ogóle jest wpisany serwer DNS i czy to
    sensowny adres. Potem `nslookup pceikz.pl`, żeby zobaczyć, co odpowiada
    serwer, i `ipconfig /flushdns`, żeby wyrzucić stare wpisy z pamięci
    podręcznej.

??? question "4. Skróć adres `2001:0db8:0000:0000:00ab:0000:0000:1234` możliwie najbardziej."

    Najpierw zera wiodące: `2001:db8:0:0:ab:0:0:1234`.

    Są **dwa** ciągi grup zerowych, oba po dwie grupy. `::` wolno użyć tylko
    **raz**, więc skracamy pierwszy z nich (przy równej długości przyjmuje się
    ten bardziej z lewej):

    ```text
    2001:db8::ab:0:0:1234
    ```

    Zapis `2001:db8::ab::1234` jest **błędny** — z dwoma `::` nie da się
    odtworzyć, ile grup wypadło po której stronie.

??? question "5. Łącze ma 600 Mb/s. Ile najwyżej wyniesie prędkość pobierania pliku w MB/s i dlaczego w praktyce wyjdzie mniej?"

    600 : 8 = **75 MB/s**. To górna granica wynikająca z samej zamiany jednostek.

    W praktyce wyjdzie mniej, bo część przepustowości zajmują nagłówki
    protokołów, łącze dzielisz z innymi urządzeniami, serwer po drugiej stronie
    może oddawać wolniej, a przy Wi-Fi dochodzi jeszcze jakość sygnału.

??? question "6. Kolega chce zdefragmentować dysk SSD, „bo komputer zwolnił”. Co mu powiesz?"

    Że defragmentacja jest lekarstwem na chorobę, której SSD nie ma.
    Fragmentacja szkodziła dyskom talerzowym, bo głowica musiała fizycznie
    skakać po talerzu. SSD nie ma ruchomych części i sięga po każdy fragment
    tak samo szybko.

    Co gorsza, defragmentacja to masa niepotrzebnych zapisów, a komórki pamięci
    mają ograniczoną ich liczbę. Zamiast tego system sam wykonuje **TRIM**.
    Spowolnienia szukaj gdzie indziej: zajętość dysku, programy startujące
    z systemem, pamięć RAM, temperatura.

??? question "7. Znalazłeś w internecie zdjęcie opisane „CC BY-NC 4.0”. Chcesz go użyć w szkolnej gazetce, która jest sprzedawana po 2 zł. Wolno?"

    Nie. `NC` oznacza wyłącznie użycie **niekomercyjne**, a sprzedaż gazetki —
    nawet za symboliczną kwotę i nawet w szkole — jest użyciem komercyjnym.

    Wyjścia są trzy: znaleźć materiał na licencji bez `NC` (albo w domenie
    publicznej), poprosić autora o zgodę, albo rozdawać gazetkę za darmo.
    Gdyby zdjęcie było na `CC BY`, wystarczyłoby podać autora i licencję.

??? question "8. Czym e-usługa różni się od zwykłej strony internetowej urzędu?"

    Strona **informuje** — publikuje komunikaty, godziny pracy i formularze do
    wydrukowania. E-usługa **załatwia sprawę w całości elektronicznie**: jest
    w niej potwierdzenie tożsamości, złożenie wniosku, obieg dokumentu po
    stronie urzędu i potwierdzenie dla ciebie.

    Test praktyczny: jeżeli w którymkolwiek momencie trzeba coś wydrukować,
    podpisać długopisem i zanieść — to jeszcze nie jest e-usługa.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Adres 172.20.5.8 to adres:",
    "typ": "jedna",
    "opcje": [
      "publiczny, bo nie zaczyna się od 192.168",
      "prywatny — mieści się w puli 172.16.0.0/12",
      "APIPA",
      "pętli zwrotnej"
    ],
    "poprawna": 1,
    "wyjasnienie": "Pula prywatna 172.16.0.0/12 obejmuje adresy od 172.16.0.0 do 172.31.255.255, więc 172.20.5.8 się w niej mieści. Pule prywatne to trzy: 10, 172.16–172.31 i 192.168."
  },
  {
    "pytanie": "Ile adresów dla urządzeń daje maska /27?",
    "typ": "jedna",
    "opcje": [
      "32",
      "62",
      "30",
      "27"
    ],
    "poprawna": 2,
    "wyjasnienie": "/27 zostawia 5 bitów hosta: 2⁵ = 32 adresy, minus adres sieci i rozgłoszeniowy, czyli 30."
  },
  {
    "pytanie": "Którym poleceniem sprawdzisz, jaki adres zwraca serwer DNS dla podanej nazwy?",
    "typ": "jedna",
    "opcje": [
      "nslookup",
      "getmac",
      "netstat -an",
      "ipconfig /release"
    ],
    "poprawna": 0,
    "wyjasnienie": "nslookup odpytuje serwer DNS o wskazaną nazwę. getmac pokazuje adresy fizyczne kart, netstat — połączenia i porty, a ipconfig /release zwalnia dzierżawę DHCP."
  },
  {
    "pytanie": "Który zapis adresu IPv6 jest niepoprawny?",
    "typ": "jedna",
    "opcje": [
      "2001:db8::1",
      "::1",
      "fe80::a00:27ff:fe4e:66a1",
      "2001::db8::1"
    ],
    "poprawna": 3,
    "wyjasnienie": "Podwójny dwukropek wolno użyć tylko raz. Przy dwóch nie da się odtworzyć, ile grup zerowych wypadło po każdej stronie."
  },
  {
    "pytanie": "Dlaczego wdraża się IPv6, skoro IPv4 działa?",
    "typ": "jedna",
    "opcje": [
      "Bo IPv6 jest szybszy od IPv4 przy tej samej przepustowości",
      "Bo adresów IPv4 jest nieco ponad 4 miliardy i się skończyły",
      "Bo IPv4 nie obsługuje szyfrowania połączeń",
      "Bo tak nakazuje prawo telekomunikacyjne"
    ],
    "poprawna": 1,
    "wyjasnienie": "Powodem jest wyczerpanie puli 32-bitowej. NAT przedłużył życie IPv4, ale kosztem tego, że urządzenie w sieci lokalnej nie jest osiągalne z zewnątrz."
  },
  {
    "pytanie": "Nagrywasz dane na pendrive z systemem plików FAT32. Plik ma 6 GB. Co się stanie?",
    "typ": "jedna",
    "opcje": [
      "Zapisze się normalnie",
      "Zapisze się, ale wolniej niż na NTFS",
      "System podzieli plik automatycznie na części",
      "Zapis się nie powiedzie — FAT32 nie przyjmuje plików powyżej 4 GB"
    ],
    "poprawna": 3,
    "wyjasnienie": "To najbardziej praktyczne ograniczenie FAT32. Rozwiązaniem jest sformatowanie nośnika na exFAT albo NTFS — z tym że NTFS bywa kłopotliwy poza Windows."
  },
  {
    "pytanie": "Który sposób potwierdzenia tożsamości w e-usłudze jest najsłabszy?",
    "typ": "jedna",
    "opcje": [
      "Samo hasło, bez drugiego składnika",
      "Hasło i kod z aplikacji",
      "Profil zaufany potwierdzony przez bank",
      "E-dowód z czytnikiem NFC"
    ],
    "poprawna": 0,
    "wyjasnienie": "Hasło to jeden składnik — wystarczy je wykraść albo wyłudzić. Każda z pozostałych metod wymaga dodatkowo czegoś, co masz przy sobie."
  },
  {
    "pytanie": "Które zapytanie ograniczy wyniki do plików PDF w domenie edu.pl?",
    "typ": "jedna",
    "opcje": [
      "pdf edu.pl -sklep",
      "\"pdf\" OR \"edu.pl\"",
      "site:edu.pl filetype:pdf",
      "intitle:pdf inurl:edu"
    ],
    "poprawna": 2,
    "wyjasnienie": "site: zawęża do domeny, filetype: do formatu pliku. Operatory łączy się w jednym zapytaniu, wpisane po prostu obok siebie."
  },
  {
    "pytanie": "Cytujesz w pracy trzy zdania z artykułu i podajesz sam odsyłacz do strony. Co jest nie tak?",
    "typ": "jedna",
    "opcje": [
      "Nic — odsyłacz wystarczy",
      "Trzeba było poprosić autora o zgodę",
      "Trzy zdania to za długi cytat",
      "Brakuje imienia i nazwiska twórcy, których wymaga art. 34"
    ],
    "poprawna": 3,
    "wyjasnienie": "Prawo cytatu nie wymaga zgody autora, ale wymaga oznaczenia twórcy i źródła. Sam odsyłacz tego warunku nie spełnia."
  },
  {
    "pytanie": "Poprawiasz cudzy tekst we wspólnym dokumencie i nie chcesz nadpisać jego wersji. Czego użyjesz?",
    "typ": "jedna",
    "opcje": [
      "Trybu sugerowania",
      "Historii wersji",
      "Uprawnienia „tylko do odczytu” dla autora",
      "Kopii pliku odesłanej mailem"
    ],
    "poprawna": 0,
    "wyjasnienie": "W trybie sugerowania twoja zmiana jest propozycją, którą autor przyjmuje albo odrzuca. Historia wersji służy do oglądania i przywracania, nie do proponowania zmian."
  }
]
</script>
</div>

---

## Lista kontrolna przed sprawdzianem

Odhacz dopiero wtedy, gdy potrafisz to **zrobić**, a nie „kojarzysz”. Idź od
góry: dopóki blok K nie jest odhaczony w całości, nie ma sensu zaglądać do D.

**Poziom K — na ocenę 2**

- [ ] ★ odczytuję adres IPv4 i maskę z `ipconfig /all`
- [ ] rozpoznaję adres prywatny, publiczny, APIPA i pętlę zwrotną
- [ ] ★ sprawdzam łączność `pingiem` i czytam, czy jest odpowiedź
- [ ] wypisuję konta w systemie i wskazuję administratora
- [ ] podaję przykład e-usługi i mówię, czym różni się od zwykłej strony

**Poziom P — na ocenę 3**

- [ ] odczytuję bramę, serwery DNS, adres MAC i serwer DHCP
- [ ] ★ liczę adres sieci i adres rozgłoszeniowy
- [ ] wykonuję pełną sekwencję diagnostyczną w dobrej kolejności
- [ ] odczytuję adres IPv6 stanowiska i nazywam jego rodzaj
- [ ] ★ układam zapytanie z operatorem `site:`
- [ ] wiem, co obejmuje użytek osobisty i gdzie jest jego granica

**Poziom R — na ocenę 4**

- [ ] ★ wskazuję, na którym etapie urywa się łączność, i nazywam przyczynę
- [ ] ★ sprawdzam system plików dysku, jego pojemność i wolne miejsce
- [ ] rozpoznaję HDD i SSD oraz wiem, czego nie robi się na SSD
- [ ] podaję polecenie potwierdzające usterkę i sposób jej usunięcia
- [ ] zawężam wyniki przez `filetype:` i oceniam wiarygodność dokumentu

**Poziom D — na ocenę 5**

- [ ] ★ liczę liczbę hostów wraz ze wzorem i podaję zakres adresów
- [ ] ★ skracam i rozwijam adres IPv6, znam regułę jednego `::`
- [ ] dobieram maskę do zadanej liczby stanowisk
- [ ] uzasadniam, po co wdraża się IPv6, porównując go z IPv4
- [ ] rozstrzygam o licencji i powołuję się na przepis

Jeżeli któryś punkt zostaje nieodhaczony — wracasz do tematu z kolumny po prawej
w tabeli zakresu, a nie do tej strony. Ta jest streszczeniem, nie materiałem.

---

*Zakres odpowiada wymaganiom działu I wypisanym na stronie [wymagań
edukacyjnych](wymagania-i-bhp.md). Sprawdzian zapowiedziany 22 września 2026 r.,
zgodnie z zasadą tygodniowego wyprzedzenia.*
