/* Wizualizator grafu — przeszukiwanie wszerz (BFS) i algorytm Dijkstry.
 *
 * Autorowanie w Markdownie — kontener z danymi w znaczniku script:
 *
 *     <div class="graf-wiz" markdown="0">
 *     <script type="application/json">
 *     {
 *       "wierzcholki": { "A": [10, 30], "B": [35, 8], "C": [35, 52] },
 *       "krawedzie": [["A", "B", 4], ["A", "C", 2], ["B", "C", 1]],
 *       "skierowany": false,
 *       "start": "A",
 *       "cel": "C",
 *       "tryb": "dijkstra"
 *     }
 *     </script>
 *     </div>
 *
 * Współrzędne wierzchołków są w układzie 100 × 60 (lewy górny róg to 0, 0).
 * „tryb” (opcjonalny): "bfs" albo "dijkstra". „cel” (opcjonalny): wierzchołek,
 * do którego na końcu rysujemy drogę.
 *
 * Widget liczy w przeglądarce dokładnie tak jak funkcje ze szkieletu ćwiczeń
 * (grafy-szkielet.py): sąsiedzi w kolejności krawędzi z danych, Dijkstra
 * w wersji prostej — w każdym kroku zatwierdza niezatwierdzony wierzchołek
 * o najmniejszej odległości (przy remisie: pierwszy w kolejności z danych).
 */
(function () {
  "use strict";

  const INF = Infinity;
  const pokazOdl = (d) => (d === INF ? "∞" : String(d));
  const esc = (t) => String(t).replace(/[&<>"]/g, (z) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[z]));
  const pogrubienia = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  function odmien(n, poj, mn, dop) {
    if (n === 1) return poj;
    const j = n % 10, d = n % 100;
    return (j >= 2 && j <= 4 && !(d >= 12 && d <= 14)) ? mn : dop;
  }

  /* ─────────────────────────────────────────────── graf z danych
     Ta sama kolejność co w wczytaj_graf() ze szkieletu: wierzchołki
     w kolejności pierwszego pojawienia się, sąsiedzi w kolejności krawędzi. */
  function wczytaj(dane) {
    const kolejnosc = [];
    const sasiedzi = new Map();
    const dodaj = (v) => { if (!sasiedzi.has(v)) { sasiedzi.set(v, []); kolejnosc.push(v); } };
    const skierowany = !!dane.skierowany;
    for (const [u, v, w] of dane.krawedzie) {
      dodaj(u); dodaj(v);
      sasiedzi.get(u).push({ v, w: Number(w) });
      if (!skierowany) sasiedzi.get(v).push({ v: u, w: Number(w) });
    }
    for (const v of Object.keys(dane.wierzcholki || {})) dodaj(v);
    if (!sasiedzi.has(dane.start)) throw new Error(`brak wierzchołka startowego ${dane.start}`);
    return { kolejnosc, sasiedzi, skierowany, krawedzie: dane.krawedzie, poz: dane.wierzcholki, start: dane.start, cel: dane.cel || null };
  }

  /* ─────────────────────────────────────── stan przeszukiwania */
  function nowyStan(g, tryb) {
    const odl = new Map(g.kolejnosc.map((v) => [v, INF]));
    odl.set(g.start, 0);
    return {
      tryb,
      odl,
      skad: new Map(),
      zatwierdzone: new Set(),
      kolejka: tryb === "bfs" ? [g.start] : [],
      odwiedzone: new Set([g.start]),
      biezacy: null,
      zmienione: new Set(),
      droga: null,
      koniec: false,
      kroki: 0,
      opis: tryb === "bfs"
        ? `Start ${g.start} w kolejce. Rozchodzimy się falą: najpierw wierzchołki o jedną krawędź od startu, potem o dwie…`
        : `Odległość do ${g.start} wynosi 0, do pozostałych ∞. W każdym kroku zatwierdzamy najbliższy niezatwierdzony wierzchołek i poprawiamy odległości jego sąsiadów.`,
    };
  }

  function odtworz(g, s, cel) {
    if (cel !== g.start && !s.skad.has(cel)) return null;
    const d = [cel];
    while (d[d.length - 1] !== g.start) d.push(s.skad.get(d[d.length - 1]));
    return d.reverse();
  }

  function krokBFS(g, s) {
    s.zmienione = new Set();
    if (!s.kolejka.length) {
      s.koniec = true; s.biezacy = null;
      s.opis = g.cel ? `Kolejka pusta — do ${g.cel} nie da się dojść.` : "Kolejka pusta — odwiedziliśmy wszystko, co osiągalne.";
      return;
    }
    const v = s.kolejka.shift();
    s.biezacy = v;
    s.zatwierdzone.add(v);
    s.kroki += 1;
    if (g.cel && v === g.cel) {
      s.droga = odtworz(g, s, v);
      s.koniec = true;
      const kr = s.droga.length - 1;
      s.opis = `${v} wychodzi z kolejki — to cel. Droga odtworzona po mapie „skąd”: ${s.droga.join(" → ")}, `
             + `**${kr} ${odmien(kr, "krawędź", "krawędzie", "krawędzi")}**. Najmniej krawędzi — ale czy najkrócej, gdy krawędzie mają wagi?`;
      return;
    }
    const nowe = [];
    for (const { v: u } of g.sasiedzi.get(v)) {
      if (!s.odwiedzone.has(u)) {
        s.odwiedzone.add(u);
        s.skad.set(u, v);
        s.odl.set(u, s.odl.get(v) + 1);
        s.kolejka.push(u);
        nowe.push(u);
        s.zmienione.add(u);
      }
    }
    s.opis = nowe.length
      ? (nowe.length === 1
        ? `Zdejmujemy ${v} z początku kolejki. Nowy sąsiad ${nowe[0]} idzie na koniec kolejki — o jedną krawędź dalej od startu niż ${v}.`
        : `Zdejmujemy ${v} z początku kolejki. Nowi sąsiedzi ${nowe.join(", ")} idą na koniec kolejki — każdy o jedną krawędź dalej od startu niż ${v}.`)
      : `Zdejmujemy ${v} z początku kolejki. Wszyscy sąsiedzi już odwiedzeni — kolejka się skraca.`;
    if (!s.kolejka.length && !g.cel) { s.koniec = true; }
  }

  function krokDijkstra(g, s) {
    s.zmienione = new Set();
    let v = null;
    for (const x of g.kolejnosc) {
      if (s.zatwierdzone.has(x)) continue;
      if (v === null || s.odl.get(x) < s.odl.get(v)) v = x;
    }
    if (v === null || s.odl.get(v) === INF) {
      s.koniec = true; s.biezacy = null;
      s.opis = v === null
        ? "Wszystkie wierzchołki zatwierdzone — odległości w tabeli są ostateczne."
        : "Zostały tylko wierzchołki z odległością ∞ — nie da się do nich dojść. Koniec.";
      if (g.cel && !s.droga) s.droga = odtworz(g, s, g.cel);
      return;
    }
    s.biezacy = v;
    s.zatwierdzone.add(v);
    s.kroki += 1;
    const poprawki = [];
    for (const { v: u, w } of g.sasiedzi.get(v)) {
      if (s.zatwierdzone.has(u)) continue;
      const nowa = s.odl.get(v) + w;
      if (nowa < s.odl.get(u)) {
        poprawki.push(`${u}: ${pokazOdl(s.odl.get(u))} → ${nowa}`);
        s.odl.set(u, nowa);
        s.skad.set(u, v);
        s.zmienione.add(u);
      }
    }
    let opis = `Zatwierdzamy **${v}** (odległość ${s.odl.get(v)}) — najbliższy z niezatwierdzonych, więc krótszej drogi do niego już nie będzie. `;
    opis += poprawki.length ? `Poprawiamy przez ${v}: ${poprawki.join(", ")}.` : `Przez ${v} nie da się niczego poprawić.`;
    if (g.cel && v === g.cel) {
      s.droga = odtworz(g, s, v);
      opis += ` Cel ${v} zatwierdzony: droga ${s.droga.join(" → ")}, długość **${s.odl.get(v)}**.`;
    }
    s.opis = opis;
    if (s.zatwierdzone.size === g.kolejnosc.length) {
      s.koniec = true;
      if (g.cel && !s.droga) s.droga = odtworz(g, s, g.cel);
    }
  }

  const krok = (g, s) => (s.tryb === "bfs" ? krokBFS : krokDijkstra)(g, s);

  /* ─────────────────────────────────────────────────── rysowanie */
  const NS = "http://www.w3.org/2000/svg";
  const el = (nazwa, atr = {}) => {
    const e = document.createElementNS(NS, nazwa);
    for (const [k, v] of Object.entries(atr)) e.setAttribute(k, v);
    return e;
  };
  const R = 4.2;

  function zbuduj(host, g, id) {
    host.innerHTML = `
      <div class="gr">
        <div class="lb-sterowanie">
          <div class="lb-tryby" role="group" aria-label="Wybór algorytmu">
            <button type="button" class="lb-tryb" data-tryb="bfs">BFS — kolejka</button>
            <button type="button" class="lb-tryb" data-tryb="dijkstra">Dijkstra — wagi</button>
          </div>
          <div class="lb-przyciski">
            <button type="button" class="gr-krok">Krok</button>
            <button type="button" class="gr-graj">Do końca</button>
            <button type="button" class="gr-reset">Od nowa</button>
          </div>
        </div>
        <div class="gr-rysunek"></div>
        <p class="gr-opis lb-opis"></p>
        <div class="gr-tabela-owijka"><table class="gr-tabela"></table></div>
        <div class="lb-pojemnik gr-pojemnik">
          <span class="lb-etykieta">Kolejka (wychodzi z lewej):</span>
          <span class="lb-zawartosc gr-kolejka"></span>
        </div>
        <p class="lb-legenda">
          <span class="lb-poz"><span class="gr-kl gr-kl-start"></span> start</span>
          <span class="lb-poz"><span class="gr-kl gr-kl-cel"></span> cel</span>
          <span class="lb-poz"><span class="gr-kl gr-kl-zatw"></span> <span class="gr-leg-zatw">zatwierdzony</span></span>
          <span class="lb-poz"><span class="gr-kl gr-kl-zm"></span> właśnie poprawiony</span>
          <span class="lb-poz"><span class="gr-kl gr-kl-biez"></span> bieżący</span>
          <span class="lb-poz"><span class="gr-kl gr-kl-droga"></span> znaleziona droga</span>
        </p>
      </div>`;

    const svg = el("svg", { viewBox: "-7 -1 114 62", class: "gr-svg", role: "img", "aria-label": "Graf" });
    const defs = el("defs");
    const mk = el("marker", { id: `gr-grot-${id}`, viewBox: "0 0 10 10", refX: "10", refY: "5", markerWidth: "4", markerHeight: "4", orient: "auto-start-reverse" });
    mk.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", class: "gr-grot" }));
    defs.appendChild(mk);
    const mkD = mk.cloneNode(true);
    mkD.setAttribute("id", `gr-grot-droga-${id}`);
    mkD.firstChild.setAttribute("class", "gr-grot gr-grot-droga");
    defs.appendChild(mkD);
    svg.appendChild(defs);

    const krawedzie = [];
    const katy = new Map();   // kierunki krawędzi przy każdym wierzchołku
    const dodajKat = (v, dx, dy) => { if (!katy.has(v)) katy.set(v, []); katy.get(v).push(Math.atan2(dy, dx)); };
    for (const [u, v, w] of g.krawedzie) {
      const [x1, y1] = g.poz[u], [x2, y2] = g.poz[v];
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
      const ux = dx / len, uy = dy / len;
      dodajKat(u, dx, dy); dodajKat(v, -dx, -dy);
      const linia = el("line", {
        x1: x1 + ux * R, y1: y1 + uy * R, x2: x2 - ux * (R + (g.skierowany ? 0.6 : 0)), y2: y2 - uy * (R + (g.skierowany ? 0.6 : 0)),
        class: "gr-kraw",
      });
      if (g.skierowany) linia.setAttribute("marker-end", `url(#gr-grot-${id})`);
      svg.appendChild(linia);
      // Waga na środku krawędzi, na tle, które przerywa linię.
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const tlo = el("rect", { x: mx - 2.6, y: my - 2.2, width: 5.2, height: 4.4, rx: 1, class: "gr-waga-tlo" });
      const t = el("text", { x: mx, y: my + 0.05, class: "gr-waga" });
      t.textContent = w;
      svg.appendChild(tlo); svg.appendChild(t);
      krawedzie.push({ u, v, linia });
    }

    const wezly = new Map();
    for (const v of g.kolejnosc) {
      if (!g.poz[v]) continue;
      const [x, y] = g.poz[v];
      const grupa = el("g", { class: "gr-wezel" });
      const kolo = el("circle", { cx: x, cy: y, r: R, class: "gr-kolo" });
      const nazwa = el("text", { x, y: y + 0.1, class: "gr-nazwa" });
      nazwa.textContent = v;
      // Odległość stawiamy po tej stronie wierzchołka, gdzie nie ma krawędzi.
      let najlepszy = Math.PI / 2, zapas = -1;
      for (const kat of [Math.PI / 2, -Math.PI / 2, Math.PI / 4, 3 * Math.PI / 4, -Math.PI / 4, -3 * Math.PI / 4, 0, Math.PI]) {
        let min = Math.PI;
        for (const k of katy.get(v) || []) {
          const r = Math.abs(((kat - k) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI);
          min = Math.min(min, r);
        }
        if (min > zapas + 0.01) { zapas = min; najlepszy = kat; }
      }
      const odl = el("text", { x: x + Math.cos(najlepszy) * (R + 3), y: y + Math.sin(najlepszy) * (R + 3), class: "gr-odl" });
      grupa.appendChild(kolo); grupa.appendChild(nazwa); grupa.appendChild(odl);
      svg.appendChild(grupa);
      wezly.set(v, { kolo, odl, grupa });
    }
    host.querySelector(".gr-rysunek").appendChild(svg);
    return { wezly, krawedzie, id };
  }

  function odswiez(host, g, s, widok) {
    const naDrodze = new Set();
    const krDrogi = new Set();
    if (s.droga) {
      s.droga.forEach((v) => naDrodze.add(v));
      for (let i = 0; i + 1 < s.droga.length; i++) krDrogi.add(s.droga[i] + ">" + s.droga[i + 1]);
    }
    for (const [v, w] of widok.wezly) {
      const k = w.kolo.classList;
      k.toggle("gr-zatw", s.zatwierdzone.has(v));
      k.toggle("gr-zm", s.zmienione.has(v));
      k.toggle("gr-biez", !s.koniec && s.biezacy === v);
      k.toggle("gr-start", v === g.start);
      k.toggle("gr-cel", v === g.cel);
      k.toggle("gr-na-drodze", naDrodze.has(v));
      const d = s.odl.get(v);
      w.odl.textContent = s.tryb === "bfs"
        ? (d === INF ? "" : `${d} kr.`)
        : pokazOdl(d);
    }
    for (const kr of widok.krawedzie) {
      const na = krDrogi.has(kr.u + ">" + kr.v) || (!g.skierowany && krDrogi.has(kr.v + ">" + kr.u));
      kr.linia.classList.toggle("gr-kraw-droga", na);
      if (g.skierowany) kr.linia.setAttribute("marker-end", `url(#gr-grot-${na ? "droga-" : ""}${widok.id})`);
    }

    host.querySelector(".gr-opis").innerHTML = pogrubienia(s.opis);

    // Tabela: jeden wiersz na wierzchołek.
    const nagl = s.tryb === "bfs" ? ["", "krawędzi od startu", "skąd", "zdjęty z kolejki"] : ["", "odległość", "skąd", "zatwierdzony"];
    let html = `<thead><tr>${nagl.map((t) => `<th>${t}</th>`).join("")}</tr></thead><tbody>`;
    for (const v of g.kolejnosc) {
      const zm = s.zmienione.has(v) ? " class=\"gr-wiersz-zm\"" : "";
      html += `<tr${zm}><th>${esc(v)}</th><td>${pokazOdl(s.odl.get(v))}</td><td>${s.skad.has(v) ? esc(s.skad.get(v)) : "—"}</td><td>${s.zatwierdzone.has(v) ? "✓" : ""}</td></tr>`;
    }
    host.querySelector(".gr-tabela").innerHTML = html + "</tbody>";

    const poj = host.querySelector(".gr-pojemnik");
    poj.hidden = s.tryb !== "bfs";
    host.querySelector(".gr-kolejka").textContent = s.kolejka.join("  ") || "pusta";
    host.querySelector(".gr-leg-zatw").textContent = s.tryb === "bfs" ? "zdjęty z kolejki" : "zatwierdzony";

    host.querySelectorAll(".lb-tryb").forEach((b) => b.classList.toggle("lb-wybrany", b.dataset.tryb === s.tryb));
    host.querySelector(".gr-krok").disabled = s.koniec;
    host.querySelector(".gr-graj").disabled = s.koniec;
  }

  /* ───────────────────────────────────────────────────── montaż */
  let licznik = 0;
  function uruchom(host) {
    if (host.dataset.gotowe) return;
    host.dataset.gotowe = "1";
    // navigation.instant odtwarza skrypty z treści strony bez atrybutu type,
    // więc po przejściu z menu znacznik ma już postać <script> bez typu.
    const zrodlo = host.querySelector("script[type='application/json'], script:not([src])");
    let dane, g;
    try {
      dane = JSON.parse(zrodlo.textContent);
      g = wczytaj(dane);
    } catch (e) {
      host.innerHTML = `<p class="lb-blad">Nie udało się wczytać grafu: ${esc(e.message)}</p>`;
      return;
    }
    const widok = zbuduj(host, g, ++licznik);
    let s = nowyStan(g, dane.tryb === "bfs" ? "bfs" : "dijkstra");
    let timer = null;
    const rysuj = () => odswiez(host, g, s, widok);
    const stop = () => { clearInterval(timer); timer = null; host.querySelector(".gr-graj").textContent = "Do końca"; };

    host.querySelector(".gr-krok").addEventListener("click", () => { stop(); krok(g, s); rysuj(); });
    host.querySelector(".gr-graj").addEventListener("click", (e) => {
      if (timer) { stop(); return; }
      e.currentTarget.textContent = "Zatrzymaj";
      timer = setInterval(() => { krok(g, s); rysuj(); if (s.koniec) stop(); }, 900);
    });
    host.querySelector(".gr-reset").addEventListener("click", () => { stop(); s = nowyStan(g, s.tryb); rysuj(); });
    host.querySelectorAll(".lb-tryb").forEach((b) => b.addEventListener("click", () => { stop(); s = nowyStan(g, b.dataset.tryb); rysuj(); }));
    rysuj();
  }

  function start() {
    document.querySelectorAll(".graf-wiz").forEach(uruchom);
  }

  // navigation.instant podmienia treść bez przeładowania strony, więc
  // montujemy się na document$, a nie na DOMContentLoaded.
  if (typeof document$ !== "undefined") document$.subscribe(start);
  else document.addEventListener("DOMContentLoaded", start);
})();
