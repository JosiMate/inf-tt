/* Lista kontrolna do odhaczania.
 *
 * Markdown „- [ ] punkt” (pymdownx.tasklist) daje na stronie pola wyboru,
 * których nie da się kliknąć — to tylko obrazek listy. Ten skrypt:
 *   1. odblokowuje je i pamięta zaznaczenia w przeglądarce (osobno dla każdej
 *      strony),
 *   2. dokłada pod ostatnią listą licznik „odhaczone X z Y”,
 *   3. pozwala pobrać listę jako dokument Word — z polami wyboru, które da się
 *      zaznaczać w samym Wordzie, i z tym, co uczeń już odhaczył na stronie.
 *
 * Działa na każdej stronie serwisu, na której jest lista zadań; nic nie trzeba
 * dopisywać w Markdownie.
 */
(function () {
  "use strict";

  const KATALOG = (document.currentScript && document.currentScript.src)
    ? document.currentScript.src.replace(/[^/]+$/, "") : "";
  const SERWIS = "inf-tt";

  let ladowanie = null;
  function zaladujDocx() {
    if (typeof docx !== "undefined") return Promise.resolve();
    if (ladowanie) return ladowanie;
    ladowanie = new Promise((ok, blad) => {
      const s = document.createElement("script");
      s.src = KATALOG + "docx.umd.js";
      s.onload = () => (typeof docx !== "undefined" ? ok() : blad(new Error("moduł wczytany, ale pusty")));
      s.onerror = () => { ladowanie = null; blad(new Error("nie udało się pobrać modułu")); };
      document.head.appendChild(s);
    });
    return ladowanie;
  }

  /* Klucz strony bez „index.html” i końcowego ukośnika — ta sama strona
     otwarta na dwa sposoby ma mieć jedne zaznaczenia. */
  const kluczStrony = () => "lista:" + SERWIS + ":" +
    location.pathname.replace(/index\.html$/, "").replace(/\/+$/, "");

  /* Punkt rozpoznajemy po treści, nie po numerze: dopisanie punktu w środku
     listy nie może przesunąć zaznaczeń ucznia na sąsiednie wiersze. */
  const kluczPunktu = (li) => tekstPunktu(li).replace(/\s+/g, " ").trim();
  const tekstPunktu = (li) => {
    const kopia = li.cloneNode(true);
    kopia.querySelectorAll(".task-list-control, ul, ol").forEach((x) => x.remove());
    return kopia.textContent;
  };

  function wczytaj(klucz) {
    try { return new Set(JSON.parse(localStorage.getItem(klucz)) || []); }
    catch { return new Set(); }
  }
  function zapisz(klucz, zbior) {
    try {
      if (zbior.size) localStorage.setItem(klucz, JSON.stringify([...zbior]));
      else localStorage.removeItem(klucz);
      return true;
    } catch { return false; }
  }

  /* Pogrubiony akapit tuż nad listą („Poziom K — na ocenę 2”) jest jej
     nagłówkiem — trafia też do dokumentu. */
  function etykietaListy(ul) {
    const p = ul.previousElementSibling;
    if (!p || p.tagName !== "P") return "";
    const tekst = p.textContent.trim();
    const mocne = [...p.querySelectorAll("strong, b")].map((x) => x.textContent).join("").trim();
    return tekst && tekst === mocne ? tekst : "";
  }

  function naglowekSekcji(ul) {
    for (let el = ul.previousElementSibling; el; el = el.previousElementSibling) {
      if (/^H[1-3]$/.test(el.tagName)) return el.textContent.replace(/[#¶]\s*$/, "").trim();
    }
    return "Lista kontrolna";
  }

  function start() {
    const tresc = document.querySelector("article.md-content__inner") || document.querySelector(".md-typeset");
    if (!tresc) return;
    // Tylko listy najwyższego poziomu — zagnieżdżone są częścią punktu wyżej.
    const listy = [...tresc.querySelectorAll("ul.task-list")].filter((ul) => !ul.parentElement.closest("ul.task-list"));
    if (!listy.length || tresc.dataset.listaGotowa) return;
    tresc.dataset.listaGotowa = "1";

    const klucz = kluczStrony();
    const zaznaczone = wczytaj(klucz);
    const pola = [];

    listy.forEach((ul) => {
      ul.querySelectorAll(":scope > li.task-list-item").forEach((li) => {
        const pole = li.querySelector(":scope > .task-list-control input[type=checkbox], :scope > input[type=checkbox]");
        if (!pole) return;
        const k = kluczPunktu(li);
        pole.disabled = false;
        pole.removeAttribute("disabled");
        pole.checked = zaznaczone.has(k);
        li.classList.add("lk-punkt");
        li.classList.toggle("lk-zrobione", pole.checked);
        pole.addEventListener("change", () => {
          if (pole.checked) zaznaczone.add(k); else zaznaczone.delete(k);
          li.classList.toggle("lk-zrobione", pole.checked);
          const ok = zapisz(klucz, zaznaczone);
          odswiez(ok);
        });
        /* Samo pole ma kilkanaście pikseli — kliknięcie w treść punktu też
           go odhacza. Nie wtedy, gdy uczeń zaznacza tekst albo klika odnośnik. */
        li.addEventListener("click", (e) => {
          if (e.target.closest("a, input, label, button, ul ul, ol")) return;
          if (String(window.getSelection && window.getSelection()).trim()) return;
          pole.click();
        });
        pola.push({ li, pole });
      });
    });
    if (!pola.length) return;

    const pasek = document.createElement("div");
    pasek.className = "lk-pasek";
    pasek.innerHTML = `<p class="lk-licznik" aria-live="polite"></p>
      <button type="button" class="md-button md-button--primary lk-pobierz">Pobierz listę jako dokument Word</button>
      <button type="button" class="md-button lk-wyczysc">Odznacz wszystko</button>
      <p class="lk-status" role="status" aria-live="polite"></p>`;
    listy[listy.length - 1].after(pasek);
    const licznik = pasek.querySelector(".lk-licznik");
    const status = pasek.querySelector(".lk-status");

    function odswiez(zapisano = true) {
      const n = pola.filter((x) => x.pole.checked).length;
      licznik.textContent = `Odhaczone: ${n} z ${pola.length}` +
        (n === pola.length ? " — komplet." : "");
      licznik.classList.toggle("lk-komplet", n === pola.length);
      if (!zapisano) {
        status.textContent = "Przeglądarka nie zapamiętuje zaznaczeń (tryb prywatny?). " +
          "Pobierz listę jako dokument Word, żeby ich nie stracić.";
        status.className = "lk-status lk-blad";
      }
    }
    odswiez();

    pasek.querySelector(".lk-wyczysc").addEventListener("click", () => {
      pola.forEach(({ li, pole }) => { pole.checked = false; li.classList.remove("lk-zrobione"); });
      zaznaczone.clear();
      odswiez(zapisz(klucz, zaznaczone));
      status.textContent = "";
    });

    pasek.querySelector(".lk-pobierz").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      btn.disabled = true;
      status.className = "lk-status";
      status.textContent = typeof docx === "undefined" ? "Pobieram moduł tworzący dokumenty…" : "Składam dokument…";
      try {
        const nazwa = await generuj(listy);
        status.textContent = `Pobrano plik ${nazwa}. Pola wyboru działają też w Wordzie — kliknij, żeby odhaczyć.`;
        status.className = "lk-status lk-ok";
      } catch (err) {
        status.textContent = "Nie udało się utworzyć dokumentu (" + err.message + "). Możesz wydrukować stronę (Ctrl + P).";
        status.className = "lk-status lk-blad";
      } finally { btn.disabled = false; }
    });
  }

  /* Treść punktu na kawałki z krojem: kod (`ipconfig /all`) czcionką stałej
     szerokości, pogrubienia pogrubione — reszta zwykłym tekstem. */
  function kawalki(li) {
    const kopia = li.cloneNode(true);
    kopia.querySelectorAll(".task-list-control, ul, ol").forEach((x) => x.remove());
    const wynik = [];
    const idz = (w, s) => {
      for (const d of w.childNodes) {
        if (d.nodeType === 3) {
          const t = d.textContent.replace(/\s+/g, " ");
          if (t) wynik.push({ t, ...s });
        } else if (d.nodeType === 1) {
          idz(d, { ...s,
            bold: s.bold || /^(STRONG|B)$/.test(d.tagName),
            italics: s.italics || /^(EM|I)$/.test(d.tagName),
            mono: s.mono || /^(CODE|KBD)$/.test(d.tagName) });
        }
      }
    };
    idz(kopia, {});
    if (wynik.length) {
      wynik[0].t = wynik[0].t.replace(/^\s+/, "");
      wynik[wynik.length - 1].t = wynik[wynik.length - 1].t.replace(/\s+$/, "");
    }
    return wynik;
  }

  async function generuj(listy) {
    await zaladujDocx();
    const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, CheckBox, Footer, PageNumber } = docx;
    const AKCENT = "5B21B6", SZARY = "7F7F7F";
    const T = (t, o = {}) => new TextRun({ text: t, bold: o.bold, italics: o.italics,
      size: o.size ?? 22, color: o.color, font: o.mono ? "Consolas" : "Calibri" });

    const h1 = document.querySelector(".md-content h1");
    const tytulStrony = h1 ? h1.textContent.replace(/[#¶]\s*$/, "").trim() : document.title;
    const tytulListy = naglowekSekcji(listy[0]);
    const wszystkie = listy.flatMap((ul) => [...ul.querySelectorAll(":scope > li.task-list-item")]);
    const odhaczone = wszystkie.filter((li) => li.querySelector("input[type=checkbox]")?.checked).length;
    const dzis = new Date().toLocaleDateString("pl-PL", { day: "2-digit", month: "2-digit", year: "numeric" });

    const dzieci = [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
        children: [T("PCEiKZ Szczucin · informatyka, zakres rozszerzony", { size: 19, color: SZARY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 60 },
        children: [T(tytulListy.toUpperCase(), { bold: true, size: 28, color: AKCENT })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: AKCENT, space: 6 } },
        children: [T(tytulStrony, { size: 23 })] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        T(`Stan na ${dzis}: odhaczone ${odhaczone} z ${wszystkie.length}. `, { size: 20, color: SZARY }),
        T("Kliknij pole wyboru, żeby odhaczyć punkt w Wordzie.", { size: 20, color: SZARY, italics: true }),
      ] }),
    ];

    for (const ul of listy) {
      const etykieta = etykietaListy(ul);
      if (etykieta) {
        dzieci.push(new Paragraph({ spacing: { before: 220, after: 100 }, keepNext: true,
          children: [T(etykieta, { bold: true, size: 24, color: AKCENT })] }));
      }
      for (const li of ul.querySelectorAll(":scope > li.task-list-item")) {
        const zaznaczony = !!li.querySelector("input[type=checkbox]")?.checked;
        dzieci.push(new Paragraph({
          spacing: { after: 90 }, indent: { left: 440, hanging: 440 },
          children: [
            // Segoe UI Symbol, nie domyślny MS Gothic: z MS Gothic LibreOffice
            // rysuje puste pola jako przekreślone, a uczniowie mają go w domu.
            new CheckBox({ checked: zaznaczony,
              checkedState: { value: "2611", font: "Segoe UI Symbol" },
              uncheckedState: { value: "2610", font: "Segoe UI Symbol" } }),
            T("\t"),
            ...kawalki(li).map((k) => T(k.t, k)),
          ],
          tabStops: [{ type: "left", position: 440 }],
        }));
      }
    }

    const doc = new Document({
      creator: "PCEiKZ Szczucin", title: `${tytulListy} — ${tytulStrony}`,
      styles: { default: { document: { run: { font: "Calibri", size: 22 } } } },
      sections: [{
        properties: { page: { margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } } },
        footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
          children: [new TextRun({ children: [tytulListy + "  ·  s. ", PageNumber.CURRENT, " z ",
            PageNumber.TOTAL_PAGES], font: "Calibri", size: 16, color: SZARY })] })] }) },
        children: dzieci,
      }],
    });

    const blob = await Packer.toBlob(doc);
    const slug = location.pathname.replace(/index\.html$/, "").replace(/\/+$/, "").split("/").pop() || "strona";
    const nazwa = `lista-kontrolna-${slug}.docx`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = nazwa; document.body.appendChild(a); a.click();
    a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
    return nazwa;
  }

  // Material przeładowuje treść bez odświeżania strony — trzeba wpiąć się w document$
  if (typeof document$ !== "undefined") document$.subscribe(start);
  else document.addEventListener("DOMContentLoaded", start);
})();
