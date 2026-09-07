/* गौरी-गणपती आरास, rendering (home grid + patri detail) */

const $ = (s, r = document) => r.querySelector(s);
const el = (t, cls, html) => { const n = document.createElement(t); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const bi = o => `<span class="mr">${esc(o.mr)}</span><span class="en" lang="en">${esc(o.en)}</span>`;

/* botanical sprig used as a placeholder when a real photo isn't added yet */
const LEAF_SVG = `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M60 136 C60 100 60 54 60 14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="currentColor" opacity=".85">
    <path d="M60 40 C40 30 22 34 14 52 C36 58 52 54 60 40 Z"/>
    <path d="M60 40 C80 30 98 34 106 52 C84 58 68 54 60 40 Z"/>
    <path d="M60 70 C42 62 26 66 19 82 C39 88 53 84 60 70 Z"/>
    <path d="M60 70 C78 62 94 66 101 82 C81 88 67 84 60 70 Z"/>
    <path d="M60 100 C46 94 33 97 27 110 C44 115 55 112 60 100 Z"/>
    <path d="M60 100 C74 94 87 97 93 110 C76 115 65 112 60 100 Z"/>
  </g>
  <circle cx="60" cy="12" r="7" fill="currentColor"/>
  <circle cx="60" cy="12" r="7" fill="#e08a1e" opacity=".55"/>
</svg>`;

const placeholderInner = (p, big) =>
  `<div class="plate-ph">${LEAF_SVG}
     <div class="ph-name mr-d">${esc(p.name.mr)}</div>
     <div class="ph-tag">${big ? "Specimen · " + p.botanical : "Photo soon"}</div></div>`;

/* image if present (with graceful fallback to placeholder), else placeholder */
function plateInner(p, big) {
  if (!p.image) return placeholderInner(p, big);
  const ph = placeholderInner(p, big).replace('class="plate-ph"', 'class="plate-ph" hidden');
  return `<img src="${p.image}" alt="${esc(p.name.en)}, ${esc(p.botanical)}"
      onerror="var pl=this.parentElement;pl.classList.add('noimg');var g=pl.querySelector('.plate-ph');if(g)g.hidden=false;this.remove();">${ph}`;
}

/* decorative marigold-garland (torana) */
const TORANA = (mod = "") => {
  const dots = Array.from({ length: 40 }, (_, i) => {
    const x = i * 30 + 15;
    return `<circle cx="${x}" cy="4" r="3.4" fill="currentColor" opacity=".9"/>
            <path d="M${x} 7 q-6 9 0 15 q6 -6 0 -15" fill="currentColor" opacity=".55"/>
            <circle cx="${x}" cy="22" r="2" fill="currentColor" opacity=".8"/>`;
  }).join("");
  return `<svg class="torana ${mod}" viewBox="0 0 1200 26" preserveAspectRatio="none" aria-hidden="true">
    <line x1="0" y1="4" x2="1200" y2="4" stroke="currentColor" stroke-width="1.4" opacity=".5"/>${dots}</svg>`;
};

/* faint lotus mandala behind the hero title */
const MANDALA = (() => {
  let outer = "", inner = "";
  for (let i = 0; i < 16; i++) {
    outer += `<path d="M100 100 C88 52 112 52 100 22 C100 52 100 52 100 100Z" transform="rotate(${i * 22.5} 100 100)"/>`;
  }
  for (let i = 0; i < 16; i++) {
    inner += `<path d="M100 100 C93 68 107 68 100 48 Z" transform="rotate(${i * 22.5 + 11.25} 100 100)"/>`;
  }
  return `<svg class="hero-mandala" viewBox="0 0 200 200" aria-hidden="true">
    <g fill="currentColor">${outer}</g><g fill="currentColor" opacity=".6">${inner}</g>
    <circle cx="100" cy="100" r="9" fill="currentColor"/></svg>`;
})();

/* refined line-art Ganesha emblem for the hero */
const GANESHA = `<svg class="ganesha" viewBox="0 0 140 150" fill="none" stroke="currentColor"
  stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <!-- crown / mukut -->
  <path d="M70 10 C74 16 74 20 70 24 C66 20 66 16 70 10 Z" fill="currentColor" stroke="none"/>
  <path d="M52 34 C56 22 64 18 70 18 C76 18 84 22 88 34"/>
  <path d="M58 30 L58 24 M70 28 L70 20 M82 30 L82 24"/>
  <!-- head -->
  <path d="M45 46 C52 36 60 33 70 33 C80 33 88 36 95 46
           C101 58 99 72 88 82 C80 90 60 90 52 82 C41 72 39 58 45 46 Z"/>
  <!-- tilak -->
  <path d="M70 38 C67 44 67 48 70 52 C73 48 73 44 70 38"/>
  <!-- eyes -->
  <path d="M55 56 C58 53 62 53 65 56"/>
  <path d="M75 56 C78 53 82 53 85 56"/>
  <!-- ears with inner curl -->
  <path d="M46 50 C30 46 20 54 20 66 C20 78 32 84 48 78"/>
  <path d="M40 58 C34 60 33 68 40 70"/>
  <path d="M94 50 C110 46 120 54 120 66 C120 78 108 84 92 78"/>
  <path d="M100 58 C106 60 107 68 100 70"/>
  <!-- trunk curving to one side with a curl -->
  <path d="M70 64 C70 82 62 96 52 104 C44 110 44 120 54 122 C62 123 64 116 60 112"/>
  <!-- tusks -->
  <path d="M60 82 C57 88 59 92 64 93"/>
  <path d="M80 82 C83 88 81 92 76 93"/>
  <!-- little modak in hand hint -->
  <path d="M96 96 C92 92 86 92 84 98 C82 104 90 108 94 104 C97 101 99 99 96 96 Z"/>
</svg>`;

const header = active => `
  <header class="site-head"><div class="wrap">
    <a class="brand" href="index.html">
      <span class="om">ॐ</span>
      <span><b class="mr-d">गौरी-गणपती आरास</b><small>Sacred Patri Almanac · २०२६</small></span>
    </a>
    <nav class="nav">
      <a href="index.html" class="${active === 'home' ? 'active' : ''}">पत्री संग्रह</a>
      <a href="index.html#about">आरास विषयी</a>
    </nav>
  </div></header>`;

const footer = () => `
  ${TORANA('torana--maroon')}
  <footer class="site-foot"><div class="wrap">
    <div class="om">ॐ</div>
    <p class="mr">${esc(FESTIVAL.host.mr)} · गणपती बाप्पा मोरया</p>
    <p class="en" lang="en">${esc(FESTIVAL.host.en)} · A living almanac of the twenty-one sacred leaves.</p>
  </div></footer>`;

/* home grid filters */
const FILTERS = [
  { key: "all",    mr: "सर्व",          en: "All" },
  { key: "flower", mr: "फुले",          en: "Flowers" },
  { key: "tree",   mr: "वृक्ष",         en: "Trees" },
  { key: "herb",   mr: "पत्री व वेली",  en: "Herbs & Leaves" }
];

/* ------------------------------- HOME ------------------------------- */
function renderHome(root) {
  const readyCount = PATRIS.filter(p => p.ready).length;
  root.innerHTML = header('home') + TORANA() + `
    <main>
      <section class="hero">${MANDALA}<div class="wrap">
        <div class="hero-emblem">${GANESHA}</div>
        <p class="kicker">गणेशोत्सव · ${esc(FESTIVAL.year)}</p>
        <h1 class="mr-d">${esc(FESTIVAL.title.mr)}</h1>
        <div class="year">Gauri-Ganpati Aaras · ${esc(FESTIVAL.year)}</div>
        <p class="theme mr">${esc(FESTIVAL.theme.mr)}
          <span class="en" lang="en">${esc(FESTIVAL.theme.en)}</span></p>
        <p class="intro mr">${esc(FESTIVAL.intro.mr)}
          <span class="en" lang="en">${esc(FESTIVAL.intro.en)}</span></p>
        <div class="count-pill">
          <span class="mr">एकविंशति पत्री</span> ·
          <b class="devnum">${DEVANAGARI_NUM[readyCount]}</b>
          <span class="en" lang="en">of ${PATRIS.length} unveiled</span>
        </div>
      </div></section>

      <section class="dates-strip"><div class="wrap">
        <div class="dates-head"><span class="mr-d">२०२६ चा पंचांग</span><span class="en" lang="en">Festival dates · Maharashtra</span></div>
        <div class="dates">
          ${FESTIVAL.dates.map(d => `<div class="date-chip">
            <b class="mr-d">${esc(d.date.mr)}</b>
            <span class="dlabel mr">${esc(d.label.mr)}</span>
            <span class="dlabel en" lang="en">${esc(d.label.en)} · ${esc(d.date.en)}</span></div>`).join('')}
        </div>
      </div></section>

      <section id="patris"><div class="wrap">
        <div class="grid-head">
          <h2 class="mr-d">पत्री संग्रह</h2>
          <span>The Twenty-One Leaves</span>
        </div>
        <div class="filters" id="filters">
          ${FILTERS.map((f, i) => `<button class="filter${i === 0 ? ' active' : ''}" data-key="${f.key}" type="button">
            <span class="mr-d">${esc(f.mr)}</span><span class="en">${esc(f.en)}</span></button>`).join('')}
        </div>
        <div class="grid" id="grid"></div>
      </div></section>

      <section id="about" class="festival"><div class="wrap">
        <div class="grid-head"><h2 class="mr-d">आरास विषयी</h2><span>About the Festival</span></div>
        <div class="fgrid">
          ${FESTIVAL.about.map(a => `<article class="fcard">
            <div class="fic">${a.icon}</div>
            <h3 class="mr-d">${esc(a.title.mr)}<span class="en" lang="en">${esc(a.title.en)}</span></h3>
            <p class="mr">${esc(a.body.mr)}</p>
            <p class="en" lang="en">${esc(a.body.en)}</p>
          </article>`).join('')}
        </div>
      </div></section>
    </main>` + footer();

  const grid = $('#grid', root);
  PATRIS.forEach(p => grid.appendChild(card(p)));
  wireFilters(root);
}

/* filter the grid by kind (flower / tree / herb), with a soft re-entrance */
function wireFilters(root) {
  const btns = [...root.querySelectorAll('.filter')];
  const cards = [...root.querySelectorAll('#grid .card')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.key;
    let shown = 0;
    cards.forEach(c => {
      const match = key === 'all' || c.dataset.kind === key;
      c.classList.toggle('is-hidden', !match);
      if (match && !reduce) {
        c.style.animation = 'none';
        void c.offsetWidth;                       // reflow to replay
        c.style.animation = `fadeUp .45s ${Math.min(shown, 9) * 0.04}s both`;
        shown++;
      }
    });
  }));
}

function card(p) {
  const no = `<span class="card__no devnum">${DEVANAGARI_NUM[p.number]}</span>`;
  if (!p.ready) {
    const a = el('div', 'card card--soon');
    a.dataset.kind = p.kind || 'herb';
    a.innerHTML = `<div class="card__plate">${no}
        <div class="card__soon"><span class="leaf">🌿</span><b class="mr-d">लवकरच</b><small>Coming soon</small></div>
      </div>
      <div class="card__body"><h3 class="mr-d">${esc(p.name.mr)}</h3>
        <span class="en">${esc(p.name.en)}</span>
        <em>${esc(p.botanical)}</em></div>`;
    return a;
  }
  const a = el('a', 'card card--ready');
  a.dataset.kind = p.kind || 'herb';
  a.href = `patri.html?id=${p.id}`;
  a.innerHTML = `<div class="card__plate">${no}${plateInner(p, false)}</div>
    <div class="card__body"><h3 class="mr-d">${esc(p.name.mr)}</h3>
      <span class="en">${esc(p.name.en)}</span>
      <em>${esc(p.botanical)}</em></div>`;
  return a;
}

/* ------------------------------ DETAIL ------------------------------ */
function renderDetail(root) {
  const id = new URLSearchParams(location.search).get('id');
  const p = PATRIS.find(x => x.id === id && x.ready);
  if (!p) { location.replace('index.html'); return; }
  document.title = `${p.name.mr} · गौरी-गणपती आरास २०२६`;

  const ready = PATRIS.filter(x => x.ready);
  const idx = ready.findIndex(x => x.id === p.id);
  const prev = ready[idx - 1], next = ready[idx + 1];

  root.innerHTML = header() + TORANA() + `
    <main><div class="wrap">
      <section class="detail-hero">
        <a class="crumb" href="index.html">← <span class="mr">पत्री संग्रह</span> · All patris</a>
        <div class="plate-row">
          <figure class="specimen">
            <div class="plate-no"><b class="devnum">${DEVANAGARI_NUM[p.number]}</b><small>Patri No.</small></div>
            ${plateInner(p, true)}
          </figure>
          <div class="intro-col">
            <p class="tagline">${esc(p.tagline.en)}</p>
            <h1 class="mr-d">${esc(p.name.mr)}</h1>
            <p class="latin">${esc(p.name.en)}, ${esc(p.common.en)}</p>
            <p class="binom">${esc(p.botanical)} <span>· ${esc(p.family)}</span></p>
            ${mantraCard(p)}
          </div>
        </div>
      </section>

      <div class="sections">${p.sections.map(section).join('')}
        ${referencesBlock(p)}
      </div>

      <nav class="pager">
        ${prev ? `<a href="patri.html?id=${prev.id}">← <span class="mr-d">${esc(prev.name.mr)}</span></a>` : `<a class="disabled">←</a>`}
        ${next ? `<a href="patri.html?id=${next.id}"><span class="mr-d">${esc(next.name.mr)}</span> →</a>` : `<a class="disabled">→</a>`}
      </nav>
    </div></main>` + footer();
  window.scrollTo(0, 0);
}

function mantraCard(p) {
  if (p.mantra) {
    return `<div class="mantra-card">
      <p class="deity">${esc(p.deityName.mr)} · ${esc(p.deityName.en)}</p>
      <p class="mantra">${esc(p.mantra)}</p>
      <p class="mean"><span class="mr">${esc(p.mantraMeaning.mr)}</span>
         <span class="en" lang="en">${esc(p.mantraMeaning.en)}</span></p></div>`;
  }
  // no verified mantra yet, show a graceful, honest note
  return `<div class="mantra-card mantra-card--await">
      <p class="deity">पत्री अर्पण · Leaf offering</p>
      <p class="mean"><span class="mr">या पत्रीचा नाम-मंत्र आईंच्या पूजाविधीनुसार लवकरच जोडला जाईल.</span>
         <span class="en" lang="en">The verified naam-mantra for this leaf will be added from the family's puja-vidhi.</span></p></div>`;
}

function section(s) {
  const head = `<h2><span class="icon">${s.icon}</span><span class="mr-d">${esc(s.title.mr)}</span>
    <span class="en" lang="en">${esc(s.title.en)}</span></h2><div class="rule"></div>`;

  if (s.callout) {
    return `<section class="sec sec--fact">${head}
      <div class="callout"><h3 class="mr-d">${esc(s.callout.title.mr)}
        <span class="en" lang="en">${esc(s.callout.title.en)}</span></h3>
        <ul class="bilist">${s.callout.points.map(pt => `<li>${bi(pt)}</li>`).join('')}</ul></div></section>`;
  }

  let body = '';
  if (s.facts) {
    body += `<dl class="facts">${s.facts.map(f =>
      `<div><dt>${esc(f.k.en)} · ${esc(f.k.mr)}</dt><dd>${esc(f.v)}</dd></div>`).join('')}</dl>`;
  }
  if (s.care) {
    body += `<div class="care">${s.care.map(c => `
      <div class="cell"><div class="top"><span class="em">${c.icon}</span>
        <span class="label mr-d">${esc(c.label.mr)}<span class="en">${esc(c.label.en)}</span></span></div>
        <p class="mr">${esc(c.text.mr)}<span class="en" lang="en">${esc(c.text.en)}</span></p></div>`).join('')}</div>`;
  }
  if (s.points) {
    body += `<ul class="bilist">${s.points.map(pt => `<li>${bi(pt)}</li>`).join('')}</ul>`;
  }
  if (s.note) {
    body += `<div class="sec-note"><span class="mr">⚠ ${esc(s.note.mr)}</span>
      <span class="en" lang="en">${esc(s.note.en)}</span></div>`;
  }
  return `<section class="sec">${head}${body}</section>`;
}

function referencesBlock(p) {
  return `<section class="sec refs">
    <h2><span class="icon">📚</span><span class="mr-d">संदर्भ</span>
      <span class="en" lang="en">References</span></h2><div class="rule"></div>
    <ol>${p.references.map(r => `<li><span class="mr">${esc(r.mr)}</span>
      <span class="en" lang="en">${esc(r.en)}</span></li>`).join('')}</ol></section>`;
}

/* ------------------------------- motion -------------------------------- */
function setupMotion(root) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = root.querySelector('.hero');
  if (hero && !reduce) hero.classList.add('enter');
  if (reduce) return;

  const items = [...root.querySelectorAll('.grid-head, .grid .card, .dates-strip, .fcard, .sec, .pager')];
  // stagger the grid cards, festival cards and date chips within their rows
  root.querySelectorAll('.grid .card').forEach((n, i) =>
    n.style.setProperty('animation-delay', (Math.min(i, 9) * 0.055) + 's'));
  root.querySelectorAll('.fcard').forEach((n, i) =>
    n.style.setProperty('animation-delay', (i * 0.08) + 's'));
  root.querySelectorAll('.date-chip').forEach((n, i) =>
    n.style.setProperty('animation', `fadeUp .6s ${0.05 + i * 0.07}s both`));

  if (!('IntersectionObserver' in window)) { items.forEach(n => n.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach(n => { n.classList.add('reveal'); io.observe(n); });
}

/* --------------------------------- boot --------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const root = $('#app');
  (document.body.dataset.page === 'detail' ? renderDetail : renderHome)(root);
  setupMotion(root);
});
