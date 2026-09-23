# Podstawy kryptografii

!!! abstract "O tym temacie"

    **2 godziny lekcyjne** · Dział III. Społeczeństwo w internecie
    · podstawa programowa **V.2, R III.2**

    Kryptografia to nauka o utajnianiu i zabezpieczaniu informacji. Leży u podstaw niemal każdego nowoczesnego systemu technicznego: od bezpiecznych zakupów w internecie, przez bankowość elektroniczną i podpisy cyfrowe, po kryptowaluty. Na tej lekcji poznasz zasady szyfrowania symetrycznego, asymetrycznego oraz funkcje skrótu.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. odróżnić pojęcia: kryptoanaliza, kryptografia i kryptologia
    2. wyjaśnić zasadę działania szyfrów symetrycznych (np. Szyfr Cezara, AES)
    3. zaszyfrować i odszyfrować wiadomość za pomocą szyfru przesunieniowego
    4. wyjaśnić zasadę kryptografii asymetrycznej z kluczem publicznym i prywatnym (np. RSA)
    5. opisać proces bezpiecznej wymiany kluczy (protokół Diffiego-Hellmana)
    6. zdefiniować funkcję skrótu (hash function, np. SHA-256) i podać jej właściwości
    7. wyjaśnić, jak działa podpis cyfrowy i zapewniana przez niego niezaprzeczalność
    8. omówić zastosowanie infrastruktury klucza publicznego (PKI) i certyfikatów X.509
    9. odróżnić steganografię (ukrywanie istnienia wiadomości) od kryptografii
    10. ocenić odporność szyfrów na ataki typu brute-force (przegląd wyczerpujący)

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Szyfrowanie symetryczne

**Szyfrowanie symetryczne** wykorzystuje **ten sam klucz** do szyfrowania wiadomości jawnej oraz do jej odszyfrowania.

### Szyfr Cezara (szyfr podstawieniowy)

Jedno z najstarszych narzędzi kryptograficznych. Polega na zastąpieniu każdego znaku tekstu jawnego znakiem przesuniętym w alfabecie o stałą liczbę pozycji $k$.

$$\text{Szyfrowanie: } C = (P + k) \bmod N$$
$$\text{Odszyfrowanie: } P = (C - k) \bmod N$$

| Tekst jawny | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Szyfrogram ($k=3$)** | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S |

!!! example "Przykład"

    Słowo `KOT` przy przesunięciu $k=3$ przyjmuje postać `NRW`.

Głównym problemem szyfrowania symetrycznego jest **bezpieczny przekaz klucza** — zanim nadawca i odbiorca rozpoczną poufną komunikację, muszą w bezpieczny sposób przekazać sobie wspólny klucz.

---

## 2. Kryptografia asymetryczna (z kluczem publicznym)

:material-plus-circle: **rozszerzenie**

W kryptografii asymetrycznej każdy uczestnik posiada **parę kluczy**:

- **Klucz publiczny:** udostępniany wszystkim użytkownikom. Służy do **szyfrowania** wiadomości przeznaczonych dla właściciela pary kluczy.
- **Klucz prywatny:** tajny, znany wyłącznie właścicielowi. Służy do **odszyfrowywania** wiadomości.

```text
[Nadawca] ──> Szyfruje KLUCZEM PUBLICZNYM Odbiorcy ──> [Szyfrogram]
                                                             │
                                                             ▼
[Odbiorca] ──> Odszyfrowuje swoim KLUCZEM PRYWATNYM ◄────────┘
```

### Podpis cyfrowy

Służy do weryfikacji tożsamości nadawcy oraz integralności wiadomości:
1. Nadawca oblicza skrót wiadomości i szyfruje go **swoim kluczem prywatnym** (tworząc podpis).
2. Odbiorca odszyfrowuje podpis **kluczem publicznym nadawcy** i porównuje go z wyliczonym skrótem odebranej wiadomości.

---

## 3. Funkcje skrótu (Hash) i steganografia

:material-star: **dopełnienie**

### Funkcja skrótu (Kryptograficzny skrót danych)

Matematyczna funkcja jednokierunkowa, która przekształca dowolnie duży blok danych w ciąg znaków o **stałej długości** (np. SHA-256 generuje skrót 256-bitowy).

Cechy dobrej funkcji skrótu:
- **Jednokierunkowość:** z wygenerowanego skrótu nie da się odtworzyć pierwotnej wiadomości.
- **Efekt lawinowy:** zmiana choćby jednego bita w tekście wejściowym zmienia drastycznie cały skrót.
- **Odporność na kolizje:** praktycznie niemożliwe jest znalezienie dwóch różnych wiadomości dających ten sam skrót.

### Steganografia

Podczas gdy kryptografia utajnia *treść* wiadomości, **steganografia** utajnia sam *fakt istnienia* komunikacji (np. ukrywając tajny tekst w mało znaczących bitach pliku graficznego BMP lub PNG).

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy** w formacie `.docx`.

<div class="kp-podsumowanie" data-karta="podstawy-kryptografii"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="podstawy-kryptografii"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Szyfr Cezara
1. Zaszyfruj słowo `TECHNIKUM` szyfrem Cezara z kluczem $k=4$.
2. Odszyfruj napis `NQF` wiedząc, że użyto klucza $k=2$.

### :material-console: Ćwiczenie 2 — Obliczanie skrótu SHA-256 w konsoli
1. Otwórz wiersz poleceń lub terminal.
2. Wykonaj polecenie PowerShell/Linux generujące skrót pliku:
   ```powershell
   Get-FileHash plik.txt -Algorithm SHA256
   ```
3. Zmień jedną literę w pliku, zapisz go i ponownie oblicz skrót. Zaobserwuj efekt lawinowy.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Czym różni się kryptografia symetryczna od asymetrycznej?",
  "opcje": [
   "Symetryczna używa jednego klucza do szyfrowania i odszyfrowania, a asymetryczna pary kluczy (publicznego i prywatnego)",
   "Symetryczna szyfruje tylko obrazy, a asymetryczna tekst",
   "Symetryczna jest nowsza od asymetrycznej",
   "Nie ma między nimi żadnej różnicy"
  ],
  "poprawna": 0,
  "wyjasnienie": "Kryptografia symetryczna opiera się na wspólnym kluczu tajnym, a asymetryczna na parze połączonych matematycznie kluczy."
 },
 {
  "pytanie": "Którego klucza używasz do zaszyfrowania wiadomości e-mail dla kolegi w systemie asymetrycznym?",
  "opcje": [
   "Swojego klucza prywatnego",
   "Swojego klucza publicznego",
   "Klucza publicznego kolegi",
   "Klucza prywatnego kolegi"
  ],
  "poprawna": 2,
  "wyjasnienie": "Wiadomość szyfrujesz kluczem publicznym odbiorcy, aby tylko on mógł ją odszyfrować swoim kluczem prywatnym."
 },
 {
  "pytanie": "Jak nazywa się właściwość funkcji skrótu polegająca na tym, że drobna zmiana danych wejściowych powoduje całkowitą zmianę skrótu?",
  "opcje": [
   "Efekt cieplarniany",
   "Efekt lawinowy",
   "Kolizja",
   "Kryptoanaliza"
  ],
  "poprawna": 1,
  "wyjasnienie": "Efekt lawinowy sprawia, że skróty zupełnie różnych plików różnią się w sposób nieprzewidywalny."
 },
 {
  "pytanie": "Co to jest steganografia?",
  "opcje": [
   "Ukrywanie faktu istnienia wiadomości (np. w pliku graficznym)",
   "Szyfrowanie pliku hasłem 256-bitowym",
   "Usuwanie wirusów z dysku",
   "Tworzenie kopii zapasowej"
  ],
  "poprawna": 0,
  "wyjasnienie": "Steganografia polega na ukrywaniu faktu przekazywania informacji, w przeciwieństwie do kryptografii, która utajnia jej treść."
 },
 {
  "pytanie": "Czym szyfruje się podpis cyfrowy, aby odbiorca mógł zweryfikować tożsamość nadawcy?",
  "opcje": [
   "Kluczem prywatnym nadawcy",
   "Kluczem publicznym odbiorcy",
   "Hasłem do konta bankowego",
   "Kluczem symetrycznym AES"
  ],
  "poprawna": 0,
  "wyjasnienie": "Nadawca szyfruje skrót swoim kluczem prywatnym — odbiorca sprawdza go publicznym kluczem nadawcy."
 }
]
</script>
</div>

---

## Podsumowanie

Kryptografia umożliwia bezpieczne przetwarzanie danych, autoryzację tożsamości oraz zapewnienie integralności cyfrowego świata.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział III: Społeczeństwo w internecie).
