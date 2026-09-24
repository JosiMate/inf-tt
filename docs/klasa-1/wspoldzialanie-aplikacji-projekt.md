# Współdziałanie aplikacji – projekt zespołowy

!!! abstract "O tym temacie"

    **3 godziny lekcyjne** · Dział V. Arkusz kalkulacyjny i bazy danych
    · podstawa programowa **I.1, I.2, II.1, II.2, III.1**

    W warunkach biznesowych rzadko korzysta się tylko z jednego programu. W ramach tego projektu zespołowego stworzysz zintegrowany system przepływu danych łączący arkusz kalkulacyjny, edytor tekstu, bazę danych oraz aplikacje w chmurze i wiadomości e-mail.

!!! success "Cele lekcji"

    Po tej lekcji potrafisz:

    1. zaplanować architekturę przepływu danych (data flow) w projekcie wieloaplikacyjnym
    2. przygotować relacyjną bazę danych lub ustrukturyzowany model tabel w arkuszu
    3. połączyć dane z arkusza kalkulacyjnego z dynamicznymi raportami w edytorze tekstu
    4. eksportować i importować dane pomiędzy arkuszem a zewnętrznymi plikami JSON / XML / CSV
    5. stosować osadzanie i łączenie obiektów (OLE — Object Linking and Embedding)
    6. zautomatyzować generowanie raportów PDF na podstawie dynamicznie aktualizowanych tabel
    7. wykorzystać narzędzia pracy w chmurze (Google Sheets / Microsoft 365) do współdzielenia danych
    8. osadzić interaktywne wykresy z arkusza w prezentacji lub na stronie internetowej
    9. stworzyć automatyczny ciąg korespondencji seryjnej z wygenerowaniem spersonalizowanych załączników PDF
    10. zaprezentować ukończony zintegrowany system przed grupą projektową

## Jak czytać tę stronę

Materiał podzielono na sekcje o różnym poziomie zaawansowania.

| Etykieta | Poziom |
| --- | --- |
| bez etykiety | wymagania konieczne i podstawowe (oceny 2–3) |
| :material-plus-circle: **rozszerzenie** | wymagania rozszerzające (ocena 4) |
| :material-star: **dopełnienie** | wymagania dopełniające (ocena 5) |

---

## 1. Architektura integracji aplikacji (Data Flow)

Projekt polega na stworzeniu spójnego systemu, w którym dane wprowadzone w jednym miejscu automatycznie aktualizują wszystkie powiązane raporty i prezentacje.

```text
[Baza CSV / Serwer SQL]
         │ (Import Power Query)
         ▼
[Arkusz Kalkulacyjny - Model & KPI]
         │
         ├───────────────► [Prezentacja - Interaktywny Wykres]
         │
         └───────────────► [Edytor Tekstu - Korespondencja Seryjna / Raport PDF]
```

---

## 2. Łączenie obiektów (OLE) i chmura

:material-plus-circle: **rozszerzenie**

Technologia **OLE (Object Linking and Embedding)** pozwala wkleić wykres z arkusza kalkulacyjnego do edytora tekstu lub prezentacji jako obiekt połączony. Zmiana danych w arkuszu automatycznie aktualizuje wygląd wykresu w raporcie Word/PowerPoint.

Współpraca w chmurze (Sheets/Excel Online) pozwala dodatkowo na równoległą edycję modelu przez wielu członków zespołu jednocześnie.

---

## 3. Automatyzacja sprawozdawczości

:material-star: **dopełnienie**

Finalnym osiągnięciem jest stworzenie systemu, w którym naciśnięcie jednego przycisku lub dodanie nowego pliku CSV uruchamia serię automatycznych kroków: przeliczenie wskaźników, aktualizację wykresów i wygenerowanie gotowych raportów PDF gotowych do wysyłki.

---

## Karta pracy

Z tego tematu oddajesz **kartę pracy**.

<div class="kp-podsumowanie" data-karta="wspoldzialanie-aplikacji-projekt"></div>

<span id="karta" class="kp-kotwica"></span>

???+ karta "Rozwiń kartę pracy"

    <div class="karta-pracy" data-karta="wspoldzialanie-aplikacji-projekt"></div>

---

## Ćwiczenia

### :material-console: Ćwiczenie 1 — Schemat przepływu danych
1. Opracuj w zespole diagram przepływu danych dla systemu obsługi zamówień w firmie.

### :material-console: Ćwiczenie 2 — Osadzanie wykresu z łączem OLE
1. Utwórz wykres sprzedaży w arkuszu.
2. Wklej go do edytora tekstu opcją *Wklej z łączem*. Zmień dane w arkuszu i sprawdź, czy wykres w edytorze uległ zmianie.

### :material-console: Ćwiczenie 3 — Generator sprawozdań PDF
1. Skonfiguruj szablon w edytorze tekstu zasilany danymi z arkusza i wygeneruj komplet sprawozdań w formacie PDF.

---

## Sprawdź się

<div class="quiz" markdown="0">
<script type="application/json">
[
 {
  "pytanie": "Co gwarantuje użycie łącza OLE przy wklejaniu wykresu z arkusza do dokumentu tekstowego?",
  "opcje": [
   "Zmiana danych w arkuszu automatycznie zaktualizuje wykres w dokumencie tekstowym",
   "Plik tekstowy zmniejszy swoją objętość dwukrotnie",
   "Zabezpieczenie dokumentu hasłem",
   "Automatyczne tłumaczenie podpisów"
  ],
  "poprawna": 0,
  "wyjasnienie": "OLE (Object Linking and Embedding) utrzymuje aktywne połączenie ze źródłowym plikiem danych."
 },
 {
  "pytanie": "Jaki format jest powszechnie stosowany do wymiany ustrukturyzowanych danych między serwerem a aplikacjami?",
  "opcje": [
   "JSON / XML",
   "EXE / DLL",
   "MP3 / WAV",
   "PNG / BMP"
  ],
  "poprawna": 0,
  "wyjasnienie": "Formats JSON oraz XML są uniwersalnymi standardami wymiany danych w sieci."
 },
 {
  "pytanie": "Jaka jest główna zaleta pracy nad modelem danych w arkuszu chmurowym?",
  "opcje": [
   "Możliwość symultanicznej pracy wielu osób na jednym pliku bez tworzenia tylu różnych wersji",
   "Brak konieczności stosowania formuł",
   "Brak wymogu posiadania przeglądarki",
   "Szybsze drukowanie"
  ],
  "poprawna": 0,
  "wyjasnienie": "Arkusze w chmurze pozwalają na pracę zespołową na żywo bez powielania plików."
 },
 {
  "pytanie": "Do czego służy diagram przepływu danych (Data Flow Diagram)?",
  "opcje": [
   "Do wizualizacji drogi, jaką przebywają dane od źródła, przez przetworzenie, do raportu końcowego",
   "Do rysowania schematów sieci elektrycznych",
   "Do formatowania nagłówków",
   "Do sprawdzania pisowni"
  ],
  "poprawna": 0,
  "wyjasnienie": "Diagram przepływu danych ilustruje poszczególne etapy i kierunki przesyłania informacji w systemie."
 },
 {
  "pytanie": "Co jest celem automatyzacji sprawozdawczości biznesowej?",
  "opcje": [
   "Oszczędność czasu i wyeliminowanie błędów ludzkich przy cyklicznym generowaniu raportów",
   "Zwiększenie zużycia papieru",
   "Modyfikacja kolorów na wykresie",
   "Zablokowanie dostępu dla pracowników"
  ],
  "poprawna": 0,
  "wyjasnienie": "Automatyzacja pozwala na błyskawiczne tworzenie powtarzalnych sprawozdań bez ręcznego przepisywania danych."
 }
]
</script>
</div>

---

## Podsumowanie

Współdziałanie aplikacji poprzez integrację danych, połączenia OLE oraz automatyzację sprawozdawczą pozwala tworzyć profesjonalne ekosystemy robocze w nowoczesnym środowisku cyfrowym.

---

!!! info "Zgodność z podstawą programową"

    Materiały zgodne z podstawą programową dla szkół ponadpodstawowych (Informatyka – zakres rozszerzony, Dział V: Arkusz kalkulacyjny i bazy danych).
