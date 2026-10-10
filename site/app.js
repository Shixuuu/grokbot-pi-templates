/* Grok Bot template catalog: client-side search + filters + incremental grid. No framework. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const PAGE = 48;
  const COLORS = { black: "#000000", blue: "#1084FE", green: "#00C972", orange: "#FF6700", red: "#FF263C", cyan: "#00BCA6", violet: "#9159FE", yellow: "#FF9800", magenta: "#FF309B", gray: "#777777", brown: "#936439" };
  const SHAPES = {
    blob: "M20 3c8 0 15 5 16 13s-3 17-11 20-16 0-19-8S11 3 20 3Z",
    hex: "M20 3l14.7 8.5v17L20 37 5.3 28.5v-17Z",
    cloud: "M12 32a8 8 0 0 1-1.5-15.9A10 10 0 0 1 30 14.5 8.8 8.8 0 0 1 29 32Z",
    teardrop: "M20 3c6 8 14 14 14 22a14 14 0 0 1-28 0C6 17 14 11 20 3Z",
    squircle: "M20 4c13 0 16 3 16 16s-3 16-16 16S4 33 4 20 7 4 20 4Z",
    pebble: "M8 14c4-8 20-10 26-3s3 20-7 23S4 22 8 14Z",
    tablet: "M12 3h16a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z",
    wedge: "M20 4 37 34a2 2 0 0 1-1.7 3H4.7A2 2 0 0 1 3 34Z",
    shield: "M20 3 34 8v11c0 9-6 15-14 18C12 34 6 28 6 19V8Z",
    leaf: "M6 34C6 16 16 5 35 5c0 19-11 29-29 29Z",
    gem: "M11 5h18l7 10-16 21L4 15Z",
    capsule: "M4 20a10 10 0 0 1 10-10h12a10 10 0 0 1 0 20H14A10 10 0 0 1 4 20Z",
    crystal: "M20 2 31 12 27 36H13L9 12Z",
    dome: "M4 34V22a16 16 0 0 1 32 0v12Z",
    arch: "M6 36V20a14 14 0 0 1 28 0v16h-8V20a6 6 0 0 0-12 0v16Z",
    egg: "M20 3c8 0 14 12 14 21a14 14 0 0 1-28 0C6 15 12 3 20 3Z",
    bean: "M10 8c6-6 17-4 22 3s3 12-3 13-6 2-5 7-9 7-14 2S4 14 10 8Z",
    cylinder: "M8 9c0-6 24-6 24 0v22c0 6-24 6-24 0Z",
  };
  const CAT_LABEL = (c) => c.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).replace(/ And /g, " & ");
  const SEC_LABEL = { official: "Official", builtin: "Built-in", community: "Community" };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const norm = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

  let DATA = null;
  let view = [];
  let shown = 0;
  const st = { q: "", sec: "", cat: "", tag: "", fid: "", sort: "rel", skills: false, routines: false };

  function avatar(it) {
    const [cName, shape] = it.a || [];
    let color = COLORS[cName];
    if (!color) {
      // deterministic fallback from the slug, using the same palette
      const keys = Object.keys(COLORS).filter((k) => k !== "black");
      let h = 0;
      for (const ch of it.s || it.n) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      color = COLORS[keys[h % keys.length]];
    }
    const d = SHAPES[shape] || SHAPES.squircle;
    const stroke = color === "#000000" ? ' stroke="rgba(255,255,255,.22)" stroke-width="1.2"' : "";
    return `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="${d}" fill="${color}"${stroke}/></svg>`;
  }

  function prep(it) {
    it._n = norm(it.n);
    it._s = norm(it.s);
    it._cr = norm(`${it.cr} ${it.h} @${it.h}`);
    it._d = norm(it.d);
    it._c = norm(`${it.c} ${it.t.join(" ")} ${it.sec}`);
  }

  function score(it, words) {
    let total = 0;
    for (const w of words) {
      let s = 0;
      if (it._n === w || it._s === w) s += 12;
      if (it._n.startsWith(w)) s += 6;
      else if (it._n.includes(w) || it._s.includes(w)) s += 5;
      if (it._cr.includes(w)) s += 3;
      if (it._c.includes(w)) s += 2;
      if (it._d.includes(w)) s += 1;
      if (!s) return -1;
      total += s;
    }
    return total;
  }

  function apply() {
    const words = norm(st.q).split(/\s+/).filter(Boolean);
    const out = [];
    for (const it of DATA.items) {
      if (st.sec && it.sec !== st.sec && !(st.sec === "builtin" && it.b)) continue;
      if (st.cat && it.c !== st.cat) continue;
      if (st.tag && !it.t.includes(st.tag)) continue;
      if (st.fid && it.f !== st.fid) continue;
      if (st.skills && !it.k) continue;
      if (st.routines && !it.r) continue;
      let sc = 0;
      if (words.length) {
        sc = score(it, words);
        if (sc < 0) continue;
      }
      out.push({ it, sc: sc + (it.sec === "official" ? 0.5 : 0) + (it.sec === "builtin" ? 0.3 : 0) });
    }
    const byName = (a, b) => a.it._n.localeCompare(b.it._n);
    const cmp = {
      rel: words.length ? (a, b) => b.sc - a.sc || byName(a, b) : (a, b) => b.sc - a.sc || b.it.k + b.it.r - (a.it.k + a.it.r) || byName(a, b),
      name: byName,
      skills: (a, b) => b.it.k - a.it.k || byName(a, b),
      routines: (a, b) => b.it.r - a.it.r || byName(a, b),
      memories: (a, b) => b.it.m - a.it.m || byName(a, b),
    }[st.sort] || byName;
    out.sort(cmp);
    view = out.map((x) => x.it);
    shown = 0;
    $("#grid").innerHTML = "";
    $("#count").textContent = `${view.length.toLocaleString()} ${view.length === 1 ? "template" : "templates"}${words.length ? ` matching “${st.q.trim()}”` : ""}`;
    if (!view.length) $("#grid").innerHTML = `<div class="empty">No templates match. Try fewer words or reset the filters.</div>`;
    more();
    writeHash();
  }

  const plural = (n, w) => `<span><b>${n}</b> ${w}${n === 1 ? "" : "s"}</span>`;

  function card(it) {
    const repo = DATA.repo;
    const gh = `https://github.com/${repo}/tree/main/templates/${it.p.split("/").map(encodeURIComponent).join("/")}`;
    const creator = it.h ? `<a href="https://x.com/${encodeURIComponent(it.h)}" target="_blank" rel="noopener">${esc(it.cr || "@" + it.h)}</a>` : esc(it.cr || "Unknown");
    const badges = [`<span class="badge${it.sec === "official" ? " off" : ""}">${SEC_LABEL[it.sec]}</span>`];
    if (it.b && it.sec !== "builtin") badges.push(`<span class="badge">Built-in</span>`);
    if (it.c) badges.push(`<span class="badge">${esc(CAT_LABEL(it.c))}</span>`);
    for (const t of it.t) badges.push(`<span class="badge">${esc(t)}</span>`);
    if (it.f === "metadata-only") badges.push(`<span class="badge warn" title="Only the public name and description were available">metadata only</span>`);
    const el = document.createElement("article");
    el.className = "card";
    el.dataset.slug = it.s;
    el.dataset.path = it.p;
    el.innerHTML = `
      <div class="head"><div class="av">${avatar(it)}</div>
        <div class="title"><h3 title="${esc(it.n)}">${esc(it.n)}</h3><div class="by">by ${creator}</div></div></div>
      <div class="badges">${badges.join("")}</div>
      <p class="desc">${esc(it.d)}</p>
      <div class="counts">${plural(it.k, "skill")}${plural(it.r, "routine")}${plural(it.m, "memory").replace("memorys", "memories")}${it.x ? plural(it.x, "connector") : ""}</div>
      <div class="foot-row">
        ${it.i ? `<a class="lnk" href="https://x.ai/bot/${encodeURIComponent(it.i)}" target="_blank" rel="noopener" title="Open on x.ai">x.ai ↗</a>` : ""}
        <a class="lnk" href="${gh}" target="_blank" rel="noopener" title="Browse the files on GitHub">GitHub ↗</a>
        <button class="dl" type="button" data-path="${esc(it.p)}" title="Download ${esc(it.s)}.zip">Download</button>
      </div>`;
    return el;
  }

  function more() {
    if (shown >= view.length) return;
    const frag = document.createDocumentFragment();
    const end = Math.min(view.length, shown + PAGE);
    for (let i = shown; i < end; i++) frag.appendChild(card(view[i]));
    shown = end;
    $("#grid").appendChild(frag);
  }

  function writeHash() {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(st)) if (v && !(k === "sort" && v === "rel")) p.set(k, v === true ? "1" : v);
    const h = p.toString();
    history.replaceState(null, "", h ? `#${h}` : location.pathname + location.search);
  }

  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    st.q = p.get("q") || "";
    st.sec = p.get("sec") || "";
    st.cat = p.get("cat") || "";
    st.tag = p.get("tag") || "";
    st.fid = p.get("fid") || "";
    st.sort = p.get("sort") || "rel";
    st.skills = p.get("skills") === "1";
    st.routines = p.get("routines") === "1";
  }

  function syncControls() {
    $("#q").value = st.q;
    $("#cat").value = st.cat;
    $("#fid").value = st.fid;
    $("#sort").value = st.sort;
    $("#hasSkills").checked = st.skills;
    $("#hasRoutines").checked = st.routines;
    for (const b of document.querySelectorAll("#sections .chip")) b.classList.toggle("on", b.dataset.sec === st.sec);
    renderSubtags();
  }

  function renderSubtags() {
    const box = $("#subtags");
    const tags = new Map();
    for (const it of DATA.items) if (!st.cat || it.c === st.cat) for (const t of it.t) tags.set(t, (tags.get(t) || 0) + 1);
    if (!tags.size || st.cat !== "trading-investing") {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    const list = [...tags.entries()].sort((a, b) => b[1] - a[1]);
    box.innerHTML = `<button class="chip${st.tag ? "" : " on"}" data-tag="">All trading</button>` + list.map(([t, n]) => `<button class="chip${st.tag === t ? " on" : ""}" data-tag="${esc(t)}">${esc(t)} <span style="opacity:.6">${n}</span></button>`).join("");
  }

  function toast(msg, ms = 3500) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (t.hidden = true), ms);
  }

  async function onDownload(btn) {
    const it = DATA.items.find((x) => x.p === btn.dataset.path);
    if (!it || btn.disabled) return;
    const label = btn.textContent;
    btn.disabled = true;
    try {
      const { blob, name, files } = await window.GrokbotSetup.buildZip(it, DATA, (done, total) => (btn.textContent = `${done}/${total}`));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => (URL.revokeObjectURL(a.href), a.remove()), 4000);
      toast(`${name}: ${files} files + SETUP.md`);
    } catch (e) {
      console.error(e);
      toast(`Download failed: ${e.message}`, 6000);
    } finally {
      btn.disabled = false;
      btn.textContent = label;
    }
  }

  async function init() {
    const res = await fetch("data/index.json");
    DATA = await res.json();
    DATA.items.forEach(prep);
    $("#total").textContent = DATA.count.toLocaleString();
    $("#ref").textContent = DATA.ref.slice(0, 7);
    const cats = new Map();
    for (const it of DATA.items) if (it.c) cats.set(it.c, (cats.get(it.c) || 0) + 1);
    $("#cat").insertAdjacentHTML("beforeend", [...cats.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([c, n]) => `<option value="${esc(c)}">${esc(CAT_LABEL(c))} (${n})</option>`).join(""));
    readHash();
    syncControls();
    apply();

    let t;
    $("#q").addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => ((st.q = $("#q").value), apply()), 90);
    });
    $("#sections").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      st.sec = b.dataset.sec;
      syncControls();
      apply();
    });
    $("#subtags").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      st.tag = b.dataset.tag;
      if (st.tag && !st.cat) st.cat = "trading-investing";
      syncControls();
      apply();
    });
    $("#cat").addEventListener("change", (e) => {
      st.cat = e.target.value;
      if (st.cat !== "trading-investing") st.tag = "";
      syncControls();
      apply();
    });
    $("#fid").addEventListener("change", (e) => ((st.fid = e.target.value), apply()));
    $("#sort").addEventListener("change", (e) => ((st.sort = e.target.value), apply()));
    $("#hasSkills").addEventListener("change", (e) => ((st.skills = e.target.checked), apply()));
    $("#hasRoutines").addEventListener("change", (e) => ((st.routines = e.target.checked), apply()));
    $("#reset").addEventListener("click", () => {
      Object.assign(st, { q: "", sec: "", cat: "", tag: "", fid: "", sort: "rel", skills: false, routines: false });
      syncControls();
      apply();
    });
    $("#grid").addEventListener("click", (e) => {
      const b = e.target.closest(".dl");
      if (b) onDownload(b);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== $("#q")) {
        e.preventDefault();
        $("#q").focus();
      }
    });
    new IntersectionObserver((es) => es.some((x) => x.isIntersecting) && more(), { rootMargin: "1200px" }).observe($("#more"));
  }

  init().catch((e) => {
    console.error(e);
    $("#count").textContent = "Could not load the catalog index.";
  });
})();
