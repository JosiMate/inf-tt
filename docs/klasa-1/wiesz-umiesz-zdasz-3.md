# Wiesz, umiesz, zdasz — podsumowanie działu III

!!! abstract "O tym sprawdzianie"

    **1 godzina lekcyjna** · Dział III. Społeczeństwo w internecie
    · podstawa programowa **I.7–I.9, V.1–V.3, R III.2**

    Termin: **wtorek 22 grudnia 2026 r.**, na lekcji informatyki.
    Forma: **praca praktyczno-testowa przy komputerze**.

    Ta strona zawiera podsumowanie wiadomości z zakresu tożsamości cyfrowej, przemian społecznych, cyberbezpieczeństwa oraz kryptografii wraz z zestawem wymagań i zadań powtórkowych.

!!! success "Po tej powtórce potrafisz"

    1. kontrolować swój ślad cyfrowy i wizerunek zawodowy oraz egzekwować prawa RODO
    2. rozpoznać mechanizmy dezinformacji, fake newsów i bańki informacyjnej
    3. zidentyfikować i zneutralizować ataki socjotechniczne (Phishing, Smishing, Vishing)
    4. stosować dobre nawyki bezpiecznego korzystania z sieci i zgłaszać incydenty do CERT Polska
    5. szyfrować i odszyfrowywać wiadomości szyframi symetrycznymi i asymetrycznymi
    6. wyjaśnić zasadę działania podpisu cyfrowego oraz funkcji skrótu

## Jak wygląda ten sprawdzian

| | |
| --- | --- |
| **Kiedy** | wtorek 22 grudnia 2026 r., cała lekcja |
| **Forma** | praca przy komputerze (analiza przypadtku + zadania kryptograficzne + test) |
| **Ile zadań** | 6 zadań praktyczno-analitycznych oznaczonych poziomem wymagań |
| **Jak liczy się ocena** | **poziomami, nie punktami** |
| **Co oddajesz** | plik raportu z odpowiedziami i zrzutami przez **Zadania domowe w VULCAN** |

## Jak liczy się ocena

Ocenę wyznacza najwyższy poziom wymagań, który zaliczysz w całości (K, P, R, D).

| Poziom | Wymagania | Daje ocenę |
| :---: | --- | :---: |
| **K** | konieczne | 2 |
| **P** | podstawowe | 3 |
| **R** | rozszerzające | 4 |
| **D** | dopełniające | 5 |

---

## Zakres — co musisz umieć na daną ocenę

=== "K — na ocenę 2"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | odróżnić ślad cyfrowy aktywny od biernego | [Moja cyfrowa tożsamość](moja-cyfrowa-tozsamosc.md) |
    | wskazać oznaki ataku typu Phishing w wiadomości e-mail | [Cyberbezpieczeństwo](cyberbezpieczenstwo.md) |
    | zaszyfrować tekst szyfrem Cezara z podanym przesunięciem | [Podstawy kryptografii](podstawy-kryptografii.md) |

=== "P — na ocenę 3"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | weryfikować prawdziwość informacji w sieci (Fact-checking) | [Przemiany społeczne a technologie](przemiany-spoleczne-a-technologie.md) |
    | opisać procedurę zgłaszania SMS-ów phishingowych pod numer 8080 | [Cyberbezpieczeństwo](cyberbezpieczenstwo.md) |
    | wyjaśnić różnicę między kluczem prywatnym a publicznym | [Podstawy kryptografii](podstawy-kryptografii.md) |

=== "R — na ocenę 4"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | omówić prawo do bycia zapomnianym z art. 17 RODO | [Moja cyfrowa tożsamość](moja-cyfrowa-tozsamosc.md) |
    | opisać mechanizm działania oprogramowania Ransomware | [Cyberbezpieczeństwo](cyberbezpieczenstwo.md) |
    | wyjaśnić schemat tworzenia i weryfikacji podpisu cyfrowego | [Podstawy kryptografii](podstawy-kryptografii.md) |

=== "D — na ocenę 5"

    | Musisz umieć | Powtórz w temacie |
    | --- | --- |
    | omówić mechanizm bańki informacyjnej i algorytmów rekomendacyjnych | [Przemiany społeczne a technologie](przemiany-spoleczne-a-technologie.md) |
    | wyjaśnić rolę certyfikatów SSL/TLS i infrastruktury PKI | [Cyberbezpieczeństwo](cyberbezpieczenstwo.md) |
    | wyjaśnić właściwości funkcji skrótu i steganografii | [Podstawy kryptografii](podstawy-kryptografii.md) |

---

## Powtórka w pigułce

- **Ślad cyfrowy:** Zostawiasz świadomie (posty) oraz automatycznie (IP, cookies, EXIF).
- **Phishing:** Wychwytuj presję czasu, błędną domenę nadawcy oraz fałszywe odnośniki. Zgłaszaj SMS-y na numer **8080**.
- **Kryptografia symetryczna vs asymetryczna:** W symetrycznej jest jeden klucz wspólny, w asymetrycznej para: klucz publiczny (do szyfrowania) i klucz prywatny (do odszyfrowania / podpisu).
- **Podpis cyfrowy:** Gwarantuje autentyczność i niezaprzeczalność nadawcy oraz integralność wiadomości.

---

## Zadania powtórkowe

??? question "1. Po czym poznać, że strona logowania do banku jest prawdziwa i bezpieczna?"

    Przede wszystkim sprawdź adres URL w pasku przeglądarki (czy domena odpowiada co do litery oficjalnemu adresowi banku) oraz obecność protokołu HTTPS i certyfikatu SSL/TLS. Pamiętaj, że sama kłódka gwarantuje tylko szyfrowanie, więc kluczowa jest poprawność domeny.

??? question "2. Czym różni się zastosowanie klucza publicznego od klucza prywatnego w odbiorze wiadomości i podpisie cyfrowym?"

    Aby **wysłać tajną wiadomość do B**, nadawca A szyfruje ją **kluczem publicznym B** (odszyfruje ją tylko B swoim kluczem prywatnym). Aby **podpisać wiadomość**, nadawca A szyfruje jej skrót **swoim kluczem prywatnym** (każdy może zweryfikować podpis kluczem publicznym A).

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
  {
    "pytanie": "Na jaki numer przesyła się podejrzane SMS-y z linkami w Polsce?",
    "opcje": [
      "112",
      "8080",
      "997",
      "8000"
    ],
    "poprawna": 1,
    "wyjasnienie": "Numer 8080 obsługuje CERT Polska w celach wyłapywania kampanii smishingowych."
  },
  {
    "pytanie": "Który klucz służy do odszyfrowania wiadomości przesłanej w systemie asymetrycznym?",
    "opcje": [
      "Klucz publiczny nadawcy",
      "Klucz prywatny odbiorcy",
      "Klucz publiczny odbiorcy",
      "Klucz dostępu do Wi-Fi"
    ],
    "poprawna": 1,
    "wyjasnienie": "Tylko właściciel pary kluczy dysponuje kluczem prywatnym zdolnym odszyfrować treść zaszyfrowaną jego kluczem publicznym."
  }
]
</script>
</div>

---

## Lista kontrolna przed sprawdzianem

- [ ] potrafię odróżnić ślad aktywny od biernego i zarządzać prywatnością
- [ ] potrafię wskazać próby phishingu i zgłosić je do CERT Polska
- [ ] znam różnice między wirusem, trojanem a ransomware
- [ ] potrafię zaszyfrować i odszyfrować wiadomość szyfrem Cezara
- [ ] rozumiem zasadę działania klucza publicznego i prywatnego w RSA oraz podpisu cyfrowego
