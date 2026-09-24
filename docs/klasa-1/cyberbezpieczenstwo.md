# Cyberbezpieczeństwo

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział III. Społeczeństwo w internecie
    · podstawa programowa **V.1, V.2, V.3**

    Większość skutecznych ataków hakerskich nie opiera się na łamaniu skomplikowanych zabezpieczeń technicznych, lecz na wykorzystaniu słabości ludzkiej — niewiedzy, pośpiechu i zaufania. Na tej lekcji poznasz metody ataku stosowane przez cyberprzestępców, rodzaje złośliwego oprogramowania oraz zasady reagowania na incydenty bezpieczeństwa.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. zdefiniować pojęcie inżynierii społecznej (socjotechniki) w cyberbezpieczeństwie
    2. rozpoznać próby wyłudzenia danych typu Phishing, Smishing i Vishing
    3. zidentyfikować „czerwone flagi” w podejrzanych wiadomościach e-mail i SMS
    4. odróżnić od siebie typy złośliwego oprogramowania (Wirus, Robak, Trojan, Ransomware, Spyware)
    5. wyjaśnić mechanizm ataku typu Man-in-the-Middle oraz DDoS
    6. stosować bezpieczne nawyków przy korzystaniu z publicznych sieci Wi-Fi (sieci VPN)
    7. wyjaśnić rolę i działanie certyfikatów SSL/TLS i protokołu HTTPS
    8. wdrażać uwierzytelnianie dwuskładnikowe (2FA/MFA) przy użyciu kluczy sprzętowych (YubiKey) lub aplikacji
    9. zgłaszać podejrzane wiadomości i incydenty do zespołu CERT Polska
    10. postępować zgodnie z procedurą reakcji na wyciek haseł i danych osobowych

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Inżynieria społeczna (Socjotechnika)

**Inżynieria społeczna** to technika manipulacji polegająca na skłanianiu ludzi do wykonania określonych czynności (np. kliknięcia w link, pobrania załącznika) lub wyłudzeniu poufnych informacji (haseł, numerów PESEL, danych kart).

### Główne formy ataku

- **Phishing:** fałszywe wiadomości e-mail podszywające się pod banki, firmy kurierskie lub urzędy.
- **Smishing:** phishing realizowany poprzez wiadomości SMS (np. „Niedopłata do paczki 1,50 zł”).
- **Vishing:** phishing telefoniczny, w którym oszust podszywa się pod pracownika banku lub policjanta.

!!! danger "Czerwone flagi phishingu"

    1. **Presja czasu:** „Twoje konto zostanie zablokowane w ciągu 2 godzin!”
    2. **Podejrzany adres nadawcy:** domena różniąca się jedną literą (np. `pkn-orlen.pl` zamiast `orlen.pl`).
    3. **Nietypowy odnośnik:** skrócone linki lub adresy ip prowadzące do fałszywych ramek logowania.
    4. **Prośba o dane poufne:** żaden bank nigdy nie prosi o podanie pełnego hasła w wiadomości e-mail.

---

## 2. Złośliwe oprogramowanie (Malware)

:material-plus-circle: **rozszerzenie**

Oprogramowanie tworzone w celu wyrządzenia szkód w systemie komputerowym lub kradzieży danych.

```text
[Złośliwe oprogramowanie (Malware)]
  ├── Wirus: dokleja się do innych plików i wymaga uruchomienia przez użytkownika
  ├── Robak (Worm): rozprzestrzenia się samodzielnie przez sieć bez wiedzy użytkownika
  ├── Trojan: podszywa się pod pożyteczny program
  ├── Ransomware: szyfruje pliki na dysku i żąda okupu za klucz
  └── Spyware / Keylogger: śledzi klawisze i kradnie wpisywane hasła
```

---

## 3. Bezpieczna komunikacja i zgłaszanie incydentów

:material-star: **dopełnienie**

### Protokoły SSL/TLS i HTTPS

Zielona kłódka przy adresie strony i protokół **HTTPS** gwarantują, że połączenie między Twoją przeglądarką a serwerem jest **szyfrowane**. Uniemożliwia to podglądanie haseł w publicznych sieciach Wi-Fi (ochrona przed atakiem *Man-in-the-Middle*).

### Gdzie zgłaszać incydenty w Polsce?

Każdy obywatel może zgłosić incydent cyberbezpieczeństwa do państwowego zespołu **CERT Polska** (NASK):
- **Podejrzane SMS-y:** przekaż treść wiadomości na darmowy numer **8080**.
- **Strony phishingowe i incydenty:** zgłoś na stronie `incydent.cert.pl`.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy** w formacie `.docx`.

<div class="kp-podsumowanie" data-karta="cyberbezpieczenstwo"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="cyberbezpieczenstwo"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Analiza fałszywego e-maila
1. Otwórz podaną treść podejrzanej wiadomości e-mail.
2. Odczytaj nagłówki wiadomości i wskaż 3 elementy potwierdzające próbę phishingu.

### :material-console: Ćwiczenie 2 — Reagowanie na podejrzany SMS
1. Wyobraź sobie, że otrzymałeś SMS: *"Twoja paczka wymaga dopłaty 1.40 PLN. Wejdź na https://bit.ly/xyz"*.
2. Opisz prawidłową procedurę postępowania (zgłoszenie na numer 8080, brak klikania w link, blokada numeru).

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Na czym polega atak typu Phishing?",
  "opcje": [
   "Na fizycznej kradzieży laptopa",
   "Na podszywaniu się pod zaufaną instytucję w celu wyłudzenia poufnych danych",
   "Na przeciążeniu łącz internetowych",
   "Na automatycznej aktualizacji systemu"
  ],
  "poprawna": 1,
  "wyjasnienie": "Phishing polega na łowieniu danych (np. haseł, kart) poprzez wiadomości z fałszywymi linkami."
 },
 {
  "pytanie": "Co robi oprogramowanie typu Ransomware?",
  "opcje": [
   "Wyświetla wyskakujące reklamy",
   "Szyfruje pliki na dysku i żąda okupu za ich odszyfrowanie",
   "Usuwa pliki tymczasowe przeglądarki",
   "Mierzy temperaturę procesora"
  ],
  "poprawna": 1,
  "wyjasnienie": "Ransomware szantażuje użytkownika blokując dostęp do jego własnych plików."
 },
 {
  "pytanie": "Na jaki bezpłatny numer należy przekazywać podejrzane wiadomości SMS w Polsce?",
  "opcje": [
   "112",
   "8080 (CERT Polska)",
   "997",
   "0800"
  ],
  "poprawna": 1,
  "wyjasnienie": "Numer 8080 jest dedykowanym numerem CERT Polska do zgłaszania incydentów SMS."
 },
 {
  "pytanie": "Co gwarantuje protokół HTTPS i certyfikat SSL/TLS na stronie WWW?",
  "opcje": [
   "Że strona jest w 100% bezpieczna i stworzona przez rząd",
   "Szyfrowanie połączenia między przeglądarką a serwerem",
   "Brak jakichkolwiek reklam na stronie",
   "Szybsze pobieranie plików"
  ],
  "poprawna": 1,
  "wyjasnienie": "HTTPS zapewnia poufność transmisji poprzez szyfrowanie przesyłanych danych."
 },
 {
  "pytanie": "Czym różni się Robak (Worm) od tradycyjnego Wirusa?",
  "opcje": [
   "Wirus jest pożyteczny, a Robak złośliwy",
   "Robak potrafi rozprzestrzeniać się samoczynnie w sieci bez udziału użytkownika",
   "Wirus działa tylko na smartfonach",
   "Robak szyfruje cały dysk"
  ],
  "poprawna": 1,
  "wyjasnienie": "Robak sieciowy nie potrzebuje programu żywiciela ani akcji użytkownika, by infekować kolejne komputery."
 }
]
</script>
</div>

---

## Podsumowanie

Najsłabszym ogniwem każdego systemu bezpieczeństwa pozostaje człowiek. Świadomość zagrożeń, ostrożność przy klikaniu w linki, włączone 2FA oraz korzystanie z HTTPS to podstawowe filary ochrony w internecie.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział III: Społeczeństwo w internecie).
