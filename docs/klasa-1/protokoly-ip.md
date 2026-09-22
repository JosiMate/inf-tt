# Protokoły IPv4 i IPv6

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział I. Urządzenia komputerowe w sieci
    · podstawa programowa **III.1**, **III.4**

    Na poprzedniej lekcji ustaliliśmy, że każde urządzenie w sieci ma adres IP.
    Teraz zajmiemy się samym protokołem: skąd wzięły się dwie jego wersje,
    dlaczego adresów IPv4 zabrakło, jak czyta się adres IPv6 i co się dzieje
    w twoim komputerze, który **używa obu naraz** — najczęściej bez pytania
    cię o zdanie.

!!! success "Cele lekcji"

    Po tych zajęciach potrafisz:

    1. wyjaśnić, za co odpowiada protokół IP, a za co protokoły warstwy wyższej
    2. policzyć, ile adresów daje 32 bity, i wyjaśnić, dlaczego to za mało
    3. wskazać, czym NAT przedłużył życie IPv4 i co przy okazji popsuł
    4. odczytać i **skrócić** adres IPv6 zgodnie z regułami zapisu
    5. rozpoznać rodzaj adresu IPv6 po jego początku: globalny, link-local, unikatowy lokalny, multicast
    6. wyjaśnić, czym jest prefiks `/64` i dlaczego w IPv6 jest tak powszechny
    7. opisać, skąd komputer bierze adres IPv6 — SLAAC i DHCPv6
    8. wymienić różnice między IPv4 a IPv6, w tym zniknięcie adresu rozgłoszeniowego
    9. sprawdzić poleceniami systemowymi, czy twoja sieć działa po IPv6, i odczytać wynik

## Jak czytać tę stronę

Materiał jest ułożony narastająco. Sekcje oznaczone etykietami odpowiadają
poziomom wymagań — jeśli celujesz w ocenę dobrą lub wyższą, nie pomijaj ich.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Co właściwie robi protokół IP

**IP** (*Internet Protocol*) odpowiada za jedną rzecz: **dostarczenie pakietu
pod wskazany adres**. Do każdego pakietu dokłada nagłówek z adresem nadawcy
i odbiorcy, a routery po drodze czytają ten nagłówek i przekazują pakiet dalej.

Czego IP **nie** robi:

| IP nie gwarantuje | Kto się tym zajmuje |
| --- | --- |
| że pakiet w ogóle dotrze | **TCP** — potwierdza odbiór i powtarza zgubione pakiety |
| że pakiety dotrą w kolejności wysłania | TCP — numeruje je i układa z powrotem |
| że dane nie zostaną podejrzane | TLS (to dlatego jest HTTPS, a nie HTTP) |
| szybkości ani stałego opóźnienia | nikt — sieć robi, co może |

Taki sposób działania nazywa się **best effort**: „zrobię, co w mojej mocy”.
Wygląda na wadę, a jest powodem, dla którego internet w ogóle działa — sieć
pośrednicząca jest prosta i szybka, a o niezawodność dbają komputery na
końcach.

!!! tip "Dwie wersje, jedno zadanie"

    IPv4 i IPv6 robią dokładnie to samo. Różnią się przede wszystkim **długością
    adresu**, a przez to liczbą urządzeń, które da się zaadresować. Reszta zmian
    wynika z doświadczeń trzydziestu lat używania IPv4.

    Numeru 5 nie pominięto przez przesąd: wersja 5 była eksperymentalnym
    protokołem strumieniowym i numer był zajęty.

## 2. IPv4 — ile tych adresów naprawdę jest

Adres IPv4 to **32 bity**. Możliwych kombinacji jest:

```text
2³² = 4 294 967 296   ≈ 4,3 miliarda
```

Brzmi dużo. Tylko że:

- z tej puli wypadają adresy prywatne, pętla zwrotna, multicast i pule zarezerwowane;
- w każdej sieci tracisz adres sieci i rozgłoszeniowy;
- ludzi jest ponad 8 miliardów, a **każdy** ma dziś telefon, laptop, telewizor, konsolę, zegarek i kilka rzeczy, o których nie pamięta.

Adres IPv4 przydzielano w czasach, gdy sieć miała kilkaset węzłów
uniwersyteckich. Nikt nie planował lodówki z Wi-Fi.

!!! info "Kiedy dokładnie się skończyły"

    | Kiedy | Co się stało |
    | --- | --- |
    | luty 2011 | **IANA** rozdała regionalnym rejestrom ostatnie wolne bloki |
    | listopad 2019 | **RIPE NCC** — rejestr obsługujący Europę — rozdał ostatnie wolne adresy |
    | dziś | nowi operatorzy trafiają na **listę oczekujących**; dostają najwyżej jeden mały blok `/24`, i to z adresów odzyskanych po firmach, które zniknęły |

    Adresy IPv4 stały się towarem — kupuje się je i sprzedaje jak nieruchomość.

## 3. Czym przedłużono życie IPv4

### NAT — i co przy okazji popsuł

**NAT** poznałeś na poprzedniej lekcji: router podmienia adresy prywatne
na jeden publiczny, więc cała szkoła wychodzi do internetu z jednego adresu.
To przesunęło problem o kilkanaście lat, ale ma cenę:

| Skutek NAT | Co to znaczy w praktyce |
| --- | --- |
| połączenie można zestawić tylko **od środka na zewnątrz** | serwer w domu wymaga przekierowania portów; bez tego nikt się nie połączy |
| urządzenia w sieci nie mają własnego adresu w internecie | gry sieciowe i rozmowy wideo muszą się „przebijać” przez NAT |
| router musi pamiętać każde połączenie | to praca i pamięć, a przy awarii — zerwane sesje |
| jeden adres publiczny na wielu abonentów (**CGNAT**) | jeśli ktoś z tego adresu naruszy regulamin serwisu, blokada dotyka wszystkich |

### :material-plus-circle: **rozszerzenie** — pozostałe sposoby

| Sposób | Na czym polega |
| --- | --- |
| **CIDR** i maski zmiennej długości | zamiast sztywnych klas A/B/C przydziela się dokładnie tyle adresów, ile trzeba — `/30` dla łącza między routerami, `/24` dla pracowni |
| odzyskiwanie adresów | rejestry przejmują pule po firmach, które przestały istnieć |
| obrót adresami | legalna sprzedaż bloków między firmami, za realne pieniądze |

Wszystko to są półśrodki. Jedynym rozwiązaniem, które faktycznie rozwiązuje
problem, jest dłuższy adres.

## 4. IPv6 — 128 bitów

```text
2¹²⁸ = 340 282 366 920 938 463 463 374 607 431 768 211 456
     ≈ 3,4 × 10³⁸
```

Takie liczby nic nie mówią, więc jedno porównanie: to około **6,7 × 10²³
adresów na każdy metr kwadratowy powierzchni Ziemi** — z oceanami włącznie.
Nie chodzi o to, żeby je wszystkie wykorzystać. Chodzi o to, żeby **nigdy
więcej nie trzeba było oszczędzać**.

Adres zapisuje się **szesnastkowo**, w ośmiu grupach po cztery znaki,
rozdzielonych dwukropkami:

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
└──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘
  1    2    3    4    5    6    7    8      grup po 16 bitów
```

Każda grupa to 16 bitów, osiem grup to 128 bitów. W zapisie szesnastkowym
jedna cyfra odpowiada czterem bitom, a dozwolone znaki to `0–9` oraz `a–f`
(wielkość liter nie ma znaczenia, przyjęło się pisać małymi).

## 5. Skracanie zapisu

Pełny adres jest nie do zapamiętania, dlatego wolno go skrócić — **dwiema**
regułami, stosowanymi w tej kolejności.

**Reguła 1. Zera wiodące w grupie można pominąć.**

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
2001:db8:85a3:0:0:8a2e:370:7334
```

**Reguła 2. Jeden ciąg grup samych zer można zastąpić przez `::`.**

```text
2001:db8:85a3:0:0:8a2e:370:7334
2001:db8:85a3::8a2e:370:7334
```

Ćwiczenie na gotowych przykładach — zasłoń prawą kolumnę:

| Zapis pełny | Zapis skrócony |
| --- | --- |
| `2001:0db8:0000:0000:0000:0000:0000:0001` | `2001:db8::1` |
| `fe80:0000:0000:0000:1c2b:44ff:fe11:2233` | `fe80::1c2b:44ff:fe11:2233` |
| `0000:0000:0000:0000:0000:0000:0000:0001` | `::1` |
| `0000:0000:0000:0000:0000:0000:0000:0000` | `::` |
| `2001:0db8:0000:0042:0000:8a2e:0370:7334` | `2001:db8:0:42:0:8a2e:370:7334` |

!!! danger "Dlaczego ostatni wiersz nie ma `::`"

    Znak `::` wolno użyć w adresie **tylko raz**. Gdyby pojawił się dwa razy,
    nie dałoby się odtworzyć, ile zer kryje się w którym miejscu — a adres
    musi być jednoznaczny.

    W ostatnim przykładzie zerowe grupy są **dwie i rozdzielone**, więc żadnej
    nie zwijamy: zostaje `0`. Dodatkowa zasada: pojedynczej grupy zer nie
    zastępuje się przez `::`, bo skrót niczego nie skraca.

## 6. Rodzaje adresów IPv6

W IPv4 rodzaj adresu trzeba było sprawdzać w tabeli. W IPv6 widać go od razu —
po początku adresu.

| Początek | Nazwa | Odpowiednik z IPv4 | Do czego |
| --- | --- | --- | --- |
| `2000::/3` (czyli `2` albo `3` na początku) | **globalny unicast** | adres publiczny | zwykły adres widoczny w internecie |
| `fe80::/10` (zaczyna się od `fe80`) | **link-local** | trochę jak APIPA | tylko w obrębie jednego łącza; **każda** karta ma taki adres zawsze |
| `fc00::/7` (w praktyce `fd…`) | **unikatowy lokalny (ULA)** | adresy prywatne | sieci wewnętrzne, nieroutowane w internecie |
| `ff00::/8` (zaczyna się od `ff`) | **multicast** | multicast | wysyłka do grupy urządzeń |
| `::1` | **pętla zwrotna** | `127.0.0.1` | ten komputer |
| `::` | adres nieokreślony | `0.0.0.0` | „jeszcze nie mam adresu” |
| `2001:db8::/32` | pula dokumentacyjna | — | wyłącznie do przykładów, także na tej stronie |

!!! warning "Adresu rozgłoszeniowego w IPv6 nie ma"

    I to nie jest przeoczenie. Rozgłoszenie w IPv4 budzi **wszystkie**
    urządzenia w sieci, także te, których sprawa nie dotyczy. IPv6 zastąpił je
    **multicastem do wybranej grupy** — na przykład `ff02::1` to „wszystkie
    urządzenia na tym łączu”, a `ff02::2` — „wszystkie routery na tym łączu”.

    Typowe pytanie na sprawdzianie brzmi: *co w IPv6 zastąpiło adres
    rozgłoszeniowy?* Odpowiedź: multicast.

## 7. Prefiks zamiast maski

Maski `255.255.255.0` w IPv6 nie ma — jest tylko zapis z ukośnikiem, ten sam,
który w IPv4 znasz jako zapis skrócony.

```text
2001:db8:85a3:1::/64
                └── 64 bity to część sieciowa, pozostałe 64 to część hosta
```

**Sieć IPv6 ma prawie zawsze prefiks `/64`** — i to niezależnie od tego, czy
podłączasz dwa komputery, czy dwa tysiące. Taka sieć mieści
**2⁶⁴ ≈ 1,8 × 10¹⁹** adresów, czyli ponad cztery miliardy razy więcej, niż
wynosi **cała** pula IPv4.

Brzmi to jak marnotrawstwo, dopóki nie zobaczy się powodu: na `/64` opiera się
automatyczna konfiguracja adresu, opisana w następnej sekcji. Operator przydziela
klientowi zwykle `/56` albo `/48`, żeby ten mógł sobie **podzielić** przydział
na wiele sieci `/64` — osobno dla komputerów, osobno dla gości, osobno dla
urządzeń domowych.

## 8. Skąd komputer bierze adres IPv6

W IPv4 był jeden sposób: DHCP albo ustawienie ręczne. W IPv6 są dwa, i częściej
działa ten pierwszy.

=== "SLAAC — konfiguracja bez serwera"

    Router co jakiś czas ogłasza na łączu komunikat **Router Advertisement**:
    „tu jest sieć o prefiksie takim a takim, ja jestem bramą”. Komputer
    **sam** dokłada do prefiksu drugą połowę adresu i gotowe — bez serwera,
    bez dzierżawy, bez konfiguracji.

    Nazwa to *StateLess Address AutoConfiguration*: **bezstanowa**, bo nikt
    nigdzie nie zapisuje, kto jaki adres dostał.

=== "DHCPv6 — jak DHCP, które znasz"

    Działa jak DHCP w IPv4: serwer prowadzi ewidencję i przydziela adresy.
    Stosuje się go tam, gdzie administrator musi **wiedzieć**, które urządzenie
    ma który adres — w firmach i instytucjach.

    Obie metody potrafią działać jednocześnie: adres z SLAAC, a serwery DNS
    z DHCPv6.

!!! tip "Dlaczego masz kilka adresów IPv6 naraz"

    Po `ipconfig /all` zobaczysz zwykle trzy:

    | Adres | Skąd się wziął |
    | --- | --- |
    | zaczynający się od `fe80::` | link-local — karta nadaje go sobie sama, zawsze |
    | zwykły, zaczynający się od `2…` | z SLAAC albo DHCPv6 — ten jest widoczny w internecie |
    | opisany jako **tymczasowy** | zmienia się co kilkadziesiąt godzin, żeby nie dało się śledzić urządzenia po stałym adresie |

    Do połączeń wychodzących system używa **tymczasowego**. To nie usterka
    i nie trzeba tego wyłączać.

## 9. IPv4 kontra IPv6 — zestawienie

| Cecha | IPv4 | IPv6 |
| --- | --- | --- |
| długość adresu | 32 bity | 128 bitów |
| liczba adresów | ≈ 4,3 × 10⁹ | ≈ 3,4 × 10³⁸ |
| zapis | dziesiętny, `192.168.1.15` | szesnastkowy, `2001:db8::1` |
| granica sieci | maska, np. `255.255.255.0` | prefiks, np. `/64` |
| konfiguracja adresu | ręcznie albo DHCP | SLAAC, DHCPv6 albo ręcznie |
| adres rozgłoszeniowy | jest | **nie ma** — zastąpił go multicast |
| NAT | konieczny | niepotrzebny — adresów starczy dla każdego urządzenia |
| nagłówek pakietu | zmiennej długości, z sumą kontrolną | stały, prostszy — routery pracują szybciej |
| :material-star: **dopełnienie** — fragmentacja | routery mogą dzielić pakiet po drodze | dzieli tylko nadawca |
| :material-star: **dopełnienie** — rozwiązywanie adresów w LAN | ARP | *Neighbor Discovery* na multicaście |

## 10. Dlaczego nie ma „dnia przełączenia”

IPv4 i IPv6 to dwa **osobne** protokoły. Komputer z samym IPv6 nie otworzy
serwera, który ma wyłącznie IPv4. Dlatego przejście nie może polegać na
wyłączeniu jednego i włączeniu drugiego — internet stanąłby w miejscu.

Rozwiązaniem jest **dwustosowość** (*dual-stack*): urządzenie ma jednocześnie
adres IPv4 i IPv6 i wybiera ten, którym da się dojść do celu. Twój komputer
prawie na pewno tak właśnie działa.

Wybiera szybko: przy nawiązywaniu połączenia system próbuje **obu wersji
równocześnie** i zostaje przy tej, która odpowie pierwsza. Mechanizm nazywa się
*Happy Eyeballs* i to dzięki niemu nie zauważasz, którego protokołu używasz.

!!! info "Jak daleko zaszło wdrożenie"

    Wiosną 2026 r. **około połowy** użytkowników łączących się z serwisami
    Google robiła to po IPv6; pomiary APNIC Labs z tego samego czasu dawały
    nieco niższą liczbę, około 42%. Różnica bierze się z innej metody pomiaru,
    nie z niezgody co do faktów.

    Wdrożenie jest bardzo nierówne: w części krajów większość ruchu idzie już
    po IPv6, w innych nie przekracza kilku procent. **Ile wynosi w Polsce i u
    twojego operatora — sprawdzisz sam w ćwiczeniu 3.** Podawanie tu liczby
    nie miałoby sensu: zmienia się z miesiąca na miesiąc.

## 11. Diagnostyka — wiersz polecenia

| Polecenie | Co pokazuje |
| --- | --- |
| `ipconfig /all` | wszystkie adresy karty: IPv4, IPv6, link-local, tymczasowy |
| `ping -4 <nazwa>` | wymusza połączenie po IPv4 |
| `ping -6 <nazwa>` | wymusza połączenie po IPv6 |
| `ping ::1` | sprawdza, czy obsługa IPv6 w systemie w ogóle działa |
| `tracert -6 <nazwa>` | trasa pakietu po IPv6 |
| `nslookup -type=AAAA <nazwa>` | czy domena ma w ogóle adres IPv6 |
| `netsh interface ipv6 show address` | to samo co `ipconfig`, ale dokładniej |

!!! tip "Rekord A i rekord AAAA"

    W systemie nazw domenowych adres IPv4 zapisuje rekord **A**, a adres IPv6 —
    rekord **AAAA** (czyta się „poczwórne A”, bo adres jest cztery razy
    dłuższy). Domena może mieć oba naraz i wtedy przeglądarka ma wybór.

    Jeżeli `ping -6 nazwa` odpowiada „nie można odnaleźć hosta”, a `ping -4`
    działa, to zwykle nie awaria: ta domena po prostu nie ma rekordu AAAA.

## Ćwiczenia

### :material-console: Ćwiczenie 1 — adresy IPv6 twojego stanowiska

Wykonaj `ipconfig /all`. Odszukaj **wszystkie** adresy IPv6 swojej karty
sieciowej i przypisz każdemu rodzaj: link-local, globalny, tymczasowy.
Sprawdź, czy jest brama domyślna IPv6.

Odpowiedz: czy twój komputer ma adres IPv6 widoczny w internecie, czy tylko
link-local? **Wynik zapisz w karcie pracy — zadanie 1.**

### :material-console: Ćwiczenie 2 — skracanie i rozwijanie

Wykonaj na kartce, bez komputera, a potem sprawdź wynik:

1. Skróć: `2001:0db8:0000:0000:00a3:0000:0000:1428`
2. Skróć: `fe80:0000:0000:0000:0204:61ff:fe9d:f156`
3. Rozwiń do pełnej postaci: `2001:db8::ff00:42:8329`
4. Wyjaśnij, dlaczego zapis `2001:db8::1::5` jest **błędny**.

Sprawdzenie: wpisz skrócony adres w `ping` — jeżeli system go przyjmie
(nawet gdy nie odpowie), zapis jest poprawny. **Wyniki — zadanie 2.**

### :material-console: Ćwiczenie 3 — czy ta sieć umie IPv6

1. Wykonaj `ping ::1` — sprawdzasz sam system, nie sieć.
2. Wykonaj `nslookup -type=AAAA google.com` i zapisz, czy domena ma adres IPv6.
3. Wykonaj `ping -6 google.com`, a potem `ping -4 google.com`. Porównaj czasy.
4. Otwórz **[test-ipv6.com](https://test-ipv6.com/)** i zapisz wynik oraz ocenę
   w skali 0–10.
5. Wejdź na **[statystyki IPv6 Google](https://www.google.com/intl/en/ipv6/statistics.html)**,
   znajdź wykres z podziałem na kraje i odczytaj wartość dla Polski.

Porównaj wynik ze szkoły z wynikiem z domu, jeśli masz taką możliwość —
to zwykle dwie różne odpowiedzi. **Wnioski — zadanie 3.**

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Ile bitów ma adres IPv6 i ile grup widać w jego zapisie?",
    "typ": "jedna",
    "opcje": [
      "256 bitów w szesnastu grupach",
      "64 bity w czterech grupach",
      "128 bitów w ośmiu grupach po cztery znaki szesnastkowe",
      "128 bitów w czterech grupach dziesiętnych"
    ],
    "poprawna": 2,
    "wyjasnienie": "Osiem grup po 16 bitów daje 128 bitów. Każda grupa zapisana jest czterema znakami szesnastkowymi, bo jedna taka cyfra odpowiada czterem bitom."
  },
  {
    "pytanie": "Który zapis jest poprawnym skróceniem adresu 2001:0db8:0000:0000:0000:0000:0000:0001?",
    "typ": "jedna",
    "opcje": [
      "2001:db8::1",
      "2001:0db8::0001",
      "2001:db8:0::0:1",
      "2001::db8::1"
    ],
    "poprawna": 0,
    "wyjasnienie": "Zera wiodące w grupie znikają, a ciąg zerowych grup zastępuje jedno ::. Ostatnia odpowiedź ma dwa razy :: i jest błędna — nie dałoby się odtworzyć, ile zer kryje się w którym miejscu."
  },
  {
    "pytanie": "Dlaczego w jednym adresie IPv6 wolno użyć znaku :: tylko raz?",
    "typ": "jedna",
    "opcje": [
      "Bo tak działają tylko adresy link-local",
      "Bo drugi :: oznacza już numer portu",
      "Bo adres byłby za długi",
      "Bo nie dałoby się odtworzyć, ile zerowych grup kryje się w którym miejscu"
    ],
    "poprawna": 3,
    "wyjasnienie": "Skrót :: mówi „tu są same zera”, ale nie mówi ile grup. Przy dwóch takich skrótach adres miałby kilka możliwych rozwinięć, a musi być jednoznaczny."
  },
  {
    "pytanie": "Karta sieciowa ma adres zaczynający się od fe80::. Co to znaczy?",
    "typ": "jedna",
    "opcje": [
      "To adres publiczny, widoczny w internecie",
      "To adres link-local — działa tylko w obrębie jednego łącza",
      "To adres multicast",
      "To znaczy, że IPv6 jest wyłączone"
    ],
    "poprawna": 1,
    "wyjasnienie": "Pula fe80::/10 to adresy link-local. Każda karta nadaje sobie taki adres zawsze; służy do porozumiewania się z urządzeniami w tej samej sieci, ale nie wychodzi poza router."
  },
  {
    "pytanie": "Co w IPv6 zastąpiło adres rozgłoszeniowy znany z IPv4?",
    "typ": "jedna",
    "opcje": [
      "NAT",
      "Nic — rozgłoszenie działa tak samo",
      "Adres pętli zwrotnej ::1",
      "Multicast do wybranej grupy urządzeń, np. ff02::1"
    ],
    "poprawna": 3,
    "wyjasnienie": "Rozgłoszenie w IPv4 budziło wszystkie urządzenia w sieci. IPv6 wysyła komunikat tylko do grupy, której sprawa dotyczy — stąd adresy zaczynające się od ff."
  },
  {
    "pytanie": "Sieć IPv6 ma prefiks /64. Ile bitów zostaje na część hosta?",
    "typ": "jedna",
    "opcje": [
      "8",
      "32",
      "64",
      "128"
    ],
    "poprawna": 2,
    "wyjasnienie": "Prefiks podaje długość części sieciowej. Adres ma 128 bitów, więc na część hosta zostaje 128 − 64 = 64 bity — to około 1,8 × 10¹⁹ adresów w jednej sieci."
  },
  {
    "pytanie": "Czym różni się SLAAC od DHCPv6?",
    "typ": "jedna",
    "opcje": [
      "SLAAC działa tylko w IPv4",
      "W SLAAC komputer sam tworzy adres na podstawie prefiksu ogłoszonego przez router, a DHCPv6 przydziela adresy z serwera i prowadzi ich ewidencję",
      "DHCPv6 nie wymaga routera",
      "To dwie nazwy tego samego mechanizmu"
    ],
    "poprawna": 1,
    "wyjasnienie": "SLAAC jest bezstanowy — nikt nie zapisuje, kto jaki adres dostał. DHCPv6 działa jak znane z IPv4 DHCP i stosuje się go tam, gdzie administrator musi wiedzieć, które urządzenie ma który adres."
  },
  {
    "pytanie": "Polecenie ping -6 nazwa.pl zwraca „nie można odnaleźć hosta”, a ping -4 nazwa.pl działa. Co to najczęściej oznacza?",
    "typ": "jedna",
    "opcje": [
      "Ta domena nie ma rekordu AAAA, czyli nie ma adresu IPv6",
      "Kabel sieciowy jest uszkodzony",
      "Serwer DNS nie działa",
      "Obsługa IPv6 w systemie jest zepsuta"
    ],
    "poprawna": 0,
    "wyjasnienie": "Adres IPv4 zapisuje w DNS rekord A, a IPv6 — rekord AAAA. Jeżeli domena ma tylko rekord A, połączenia po IPv6 nie da się nawiązać, choć sieć i system są sprawne. Sprawdzisz to poleceniem nslookup -type=AAAA."
  },
  {
    "pytanie": "Na czym polega dwustosowość (dual-stack)?",
    "typ": "jedna",
    "opcje": [
      "Na tłumaczeniu adresów IPv6 na IPv4 w routerze",
      "Na podłączeniu do dwóch operatorów naraz",
      "Na tym, że urządzenie ma dwie karty sieciowe",
      "Na tym, że urządzenie ma jednocześnie adres IPv4 i IPv6 i używa tego, którym da się dojść do celu"
    ],
    "poprawna": 3,
    "wyjasnienie": "IPv4 i IPv6 to osobne protokoły i same się ze sobą nie dogadają. Dwustosowość pozwala przejść okres przejściowy bez dnia przełączenia — urządzenie po prostu ma oba adresy."
  }
]
</script>
</div>

---

## Karta pracy

Wypełnij kartę na tej stronie, a potem pobierz gotowy dokument Worda i oddaj go
przez **Zadania domowe w dzienniku VULCAN**.

<div class="kp-podsumowanie" data-karta="protokoly-ip"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="protokoly-ip"></div>

---

## Sprawdź, czy rozumiesz

??? question "Skoro adresów IPv6 jest tak dużo, dlaczego w ogóle dzieli się je na sieci /64, zamiast przydzielać pojedynczo?"

    Adres musi nieść informację, **gdzie** urządzenie się znajduje, inaczej
    routery nie miałyby po czym wyznaczać trasy. Podział na część sieciową
    i hosta jest tym, co pozwala routerowi podjąć decyzję, patrząc tylko na
    początek adresu, a nie na listę wszystkich urządzeń świata. Stały rozmiar
    `/64` dodatkowo upraszcza automatyczną konfigurację: każdy host wie, że
    druga połowa adresu należy do niego.

??? question "Czy włączenie IPv6 sprawia, że komputer jest mniej bezpieczny, bo „każdy ma teraz adres publiczny”?"

    Nie sam z siebie, ale zmienia się to, co chroni. W sieci z NAT połączeń
    z zewnątrz nie dało się zestawić przypadkiem — ochrona brała się z efektu
    ubocznego, nie z decyzji. W IPv6 tę rolę przejmuje **zapora**, która
    domyślnie blokuje ruch przychodzący; to ona, a nie NAT, jest właściwym
    narzędziem. Dodatkowo adresy tymczasowe utrudniają śledzenie urządzenia
    po adresie. Wniosek: bezpieczeństwo ma wynikać z zapory i aktualizacji,
    a nie z tego, że akurat zabrakło adresów.

??? question "`ipconfig` pokazuje tylko adres zaczynający się od fe80:: i żadnej bramy IPv6. Co to mówi o sieci?"

    Że karta działa — adres link-local nadaje sobie sama — ale **w tej sieci
    nikt nie ogłasza prefiksu IPv6**. Nie ma routera z włączonym IPv6 ani
    serwera DHCPv6, więc komputer nie ma z czego zbudować adresu globalnego.
    Ruch do internetu pójdzie w całości po IPv4. To typowy obraz sieci, w której
    IPv6 po prostu nie zostało wdrożone.

??? question "Dlaczego nie da się po prostu wyłączyć IPv4 w całym internecie w jednym terminie?"

    Bo IPv4 i IPv6 nie potrafią się ze sobą porozumieć — to dwa osobne
    protokoły, nie dwie wersje tego samego formularza. Komputer z samym IPv6
    nie połączy się z serwerem, który ma wyłącznie IPv4, i odwrotnie. Wyłączenie
    IPv4 odcięłoby wszystko, co nie zostało jeszcze przygotowane, a takich
    serwerów i urządzeń wciąż są miliony. Dlatego obowiązuje dwustosowość:
    obie wersje działają równolegle, a IPv4 będzie wygasać stopniowo.

??? question ":material-star: Firma dostała od operatora przydział /56. Ile sieci /64 może z niego zbudować?"

    Różnica między prefiksami wynosi 64 − 56 = 8 bitów, a osiem bitów daje
    2⁸ = **256** sieci `/64`. Każda z nich mieści 2⁶⁴ adresów. Dla porównania:
    typowy klient domowy dostaje `/56` albo `/48` — ten drugi przydział to
    65 536 sieci `/64`. Taka rozrzutność jest celowa; dzielenie adresów na styk
    było problemem IPv4, którego nie chciano powtórzyć.

---

!!! info "Źródła i materiały uzupełniające"

    - Specyfikacja IPv6: [RFC 8200 — Internet Protocol, Version 6](https://www.rfc-editor.org/rfc/rfc8200)
    - Zasady skracania zapisu: [RFC 5952 — A Recommendation for IPv6 Address Text Representation](https://www.rfc-editor.org/rfc/rfc5952)
    - Automatyczna konfiguracja: [RFC 4862 — IPv6 Stateless Address Autoconfiguration](https://www.rfc-editor.org/rfc/rfc4862)
    - Adresy prywatne IPv4: [RFC 1918](https://www.rfc-editor.org/rfc/rfc1918)
    - Wyczerpanie puli IPv4 w Europie: [RIPE NCC — The RIPE NCC has run out of IPv4 Addresses](https://www.ripe.net/about-us/news/the-ripe-ncc-has-run-out-of-ipv4-addresses/)
    - Bieżące statystyki wdrożenia: [Google IPv6 Statistics](https://www.google.com/intl/en/ipv6/statistics.html)
    - Test własnego łącza: [test-ipv6.com](https://test-ipv6.com/)
    - Podręcznik: *Informatyka na czasie* — zakres rozszerzony, część 1, dział I

*Dane o wdrożeniu sprawdzone 20 września 2026 r.: udział ruchu IPv6 wśród
użytkowników Google przekroczył 50% wiosną 2026 r., pomiary APNIC Labs z tego
samego okresu dawały około 42%. Adresy w przykładach pochodzą z puli
dokumentacyjnej `2001:db8::/32` i nie należą do żadnego rzeczywistego
urządzenia.*
