/* Podgląd HTML i CSS na żywo — uczeń zmienia kod, strona obok odświeża się sama.
 *
 * Autorowanie w Markdownie (kod w znacznikach script, żeby Markdown go nie ruszał):
 *
 *     <div class="html-podglad" markdown="0" data-wysokosc="220">
 *     <script type="text/plain" data-jezyk="html">
 *     <h1>Witaj</h1>
 *     </script>
 *     <script type="text/plain" data-jezyk="css">
 *     h1 { color: teal; }
 *     </script>
 *     </div>
 *
 * Bloku CSS może nie być. data-wysokosc — wysokość podglądu w pikselach
 * (domyślnie 200). Podgląd działa w ramce z atrybutem sandbox bez skryptów:
 * nic nie jest wysyłane ani zapisywane, „Przywróć przykład” cofa zmiany.
 * Przyciski „Telefon” i „Komputer” zmieniają szerokość ramki — do sprawdzania
 * reguł @media. Ramkę można badać w narzędziach przeglądarki (F12).
 */
(function () {
  "use strict";

  const esc = (s) => String(s).replace(/[&<>"]/g, (z) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[z]));

  // Usuwa wspólne wcięcie (kod w Markdownie bywa wcięty) i puste linie na brzegach.
  function bezWciecia(t) {
    const linie = String(t).replace(/\t/g, "  ").split("\n");
    while (linie.length && !linie[0].trim()) linie.shift();
    while (linie.length && !linie[linie.length - 1].trim()) linie.pop();
    const wc = Math.min(...linie.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
    return linie.map((l) => l.slice(isFinite(wc) ? wc : 0)).join("\n");
  }

  function dokument(html, css) {
    const pelny = /<html[\s>]/i.test(html);
    const styl = css ? `<style>\n${css}\n</style>` : "";
    if (pelny) return html.replace(/<\/head>/i, `${styl}</head>`);
    return `<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>body{font-family:system-ui,sans-serif;margin:12px;line-height:1.4}</style>${styl}</head><body>${html}</body></html>`;
  }

  function uruchom(host) {
    if (host.dataset.gotowe) return;
    host.dataset.gotowe = "1";
    const zrodla = {};
    host.querySelectorAll("script[data-jezyk]").forEach((s) => { zrodla[s.dataset.jezyk] = bezWciecia(s.textContent); });
    const wys = parseInt(host.dataset.wysokosc, 10) || 200;
    const pola = ["html", "css"].filter((j) => j in zrodla);
    host.innerHTML = `
      <div class="hp-edytory hp-${pola.length}">${pola.map((j) => `
        <label class="hp-pole"><span class="hp-etyk">${j.toUpperCase()}</span>
          <textarea data-jezyk="${j}" spellcheck="false" autocomplete="off" autocapitalize="off"
            aria-label="Kod ${j.toUpperCase()} – możesz go zmieniać">${esc(zrodla[j])}</textarea></label>`).join("")}
      </div>
      <div class="hp-pasek">
        <span class="hp-etyk">Podgląd</span>
        <span class="hp-przyciski">
          <button type="button" class="md-button hp-szer" data-szer="360" title="Szerokość ekranu telefonu (360 px)">Telefon</button>
          <button type="button" class="md-button hp-szer hp-wyb" data-szer="" title="Pełna szerokość">Komputer</button>
          <button type="button" class="md-button hp-reset" title="Wróć do kodu z przykładu">Przywróć przykład</button>
        </span>
      </div>
      <div class="hp-ramka-wrap"><iframe class="hp-ramka" sandbox title="Podgląd strony" style="height:${wys}px"></iframe></div>`;
    const ramka = host.querySelector("iframe");
    const pole = (j) => host.querySelector(`textarea[data-jezyk="${j}"]`);
    let czas = null;
    const odswiez = () => { ramka.srcdoc = dokument(pole("html") ? pole("html").value : "", pole("css") ? pole("css").value : ""); };
    host.querySelectorAll("textarea").forEach((t) => {
      const dopasuj = () => { t.style.height = "auto"; t.style.height = Math.min(Math.max(t.scrollHeight + 4, 80), 420) + "px"; };
      t.addEventListener("input", () => { dopasuj(); clearTimeout(czas); czas = setTimeout(odswiez, 250); });
      t.addEventListener("keydown", (e) => {          // Tab wstawia dwie spacje; Esc oddaje fokus stronie
        if (e.key === "Tab" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault();
          const a = t.selectionStart, b = t.selectionEnd;
          t.value = t.value.slice(0, a) + "  " + t.value.slice(b);
          t.selectionStart = t.selectionEnd = a + 2;
          t.dispatchEvent(new Event("input"));
        }
        if (e.key === "Escape") t.blur();
      });
      requestAnimationFrame(dopasuj);
    });
    host.querySelector(".hp-reset").addEventListener("click", () => {
      pola.forEach((j) => { pole(j).value = zrodla[j]; pole(j).dispatchEvent(new Event("input")); });
      odswiez();
    });
    host.querySelectorAll(".hp-szer").forEach((b) => b.addEventListener("click", () => {
      host.querySelectorAll(".hp-szer").forEach((x) => x.classList.toggle("hp-wyb", x === b));
      ramka.style.width = b.dataset.szer ? b.dataset.szer + "px" : "";
    }));
    odswiez();
  }

  function start() {
    document.querySelectorAll(".html-podglad").forEach(uruchom);
  }

  // navigation.instant podmienia treść bez przeładowania strony, więc
  // montujemy się na document$, a nie na DOMContentLoaded.
  if (typeof document$ !== "undefined") document$.subscribe(start);
  else document.addEventListener("DOMContentLoaded", start);
})();
