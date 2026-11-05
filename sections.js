(function () {
'use strict';

/* ================= ВАШИ ДАННЫЕ — редактируйте здесь ================= */
const ABOUT = {
  text: ['I\'m an aspiring developer and web designer with a passion for technology and creativity.',
         'I enjoy building digital projects, exploring new technologies and experimenting with different ideas. I\'m constantly learning, improving my skills and turning concepts into real projects.',
         'This portfolio is a place where I share my work, experiments and progress.'],
  facts: [['Focus', 'Development & web design'], ['Location', 'Poznan'], ['Tools', 'VS Code, Figma'], ['Languages', 'English, Polish, Russian']]
};
// Чтобы добавить проект — скопируйте блок { ... }, вставьте после него (с запятой) и поменяйте поля:
//  title / text    — название и короткая подпись на карточке
//  image           — превью на карточке, например 'images/bot-cover.png' (пусто '' = заглушка)
//  description     — подробное описание в окне; \n = новый абзац
//  images          — дополнительные картинки в окне: ['images/bot-1.png', 'images/bot-2.png']
//  links           — кнопки в окне, например:
//    { label: 'Telegram bot', url: 'https://t.me/your_bot' },
//    { label: 'Discord bot',  url: 'https://discord.com/oauth2/authorize?client_id=...' },
//    { label: 'GitHub',       url: 'https://github.com/deffggf/repo' }
const PROGRAMMING = [
  { title: 'Project one', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.\nAdd a second paragraph like this.',
    images: [], links: [] },
  { title: 'Project two', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] },
  { title: 'Project three', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] },
  { title: 'Project four', text: 'Short description of the project.', image: '',
    description: 'Write a longer description of the project here.', images: [], links: [] }
];
// Проекты веб-дизайна — поля такие же, как у PROGRAMMING выше.
const DESIGN = [
  { title: 'Foundation Dobro', text: 'Dobro Charitable Foundation.', image: 'images/design/foundation/foundation-logo.png',
    description: 'This is a website concept for the Dobro Charitable Foundation, which I created during a web design course.\nUsed Figma for design.',
    images: ['images/design/foundation/foundation-site.png'], links: [] },
  { title: 'Design two', text: 'Short description of the concept.', image: '',
    description: 'Write the concept description here.', images: [], links: [] },
  { title: 'Design three', text: 'Short description of the concept.', image: '',
    description: 'Write the concept description here.', images: [], links: [] },
];
const CONTACT = [
  ['Email',    'mak.dgoy.99@gmail.com', 'mailto:mak.dgoy.99@gmail.com'],
  ['Telegram', '@Dwffgg',       'https://t.me/Dwffgg'],
  ['Discord',  'deffggf',        'https://discord.com/users/1378496626754060330'],
  ['GitHub',   'deffggf',         'https://github.com/deffggf']
];

/* ================= Разметка секций ================= */
const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
function ph(kind, i) {
  if (kind === 'code') {
    const W = [62, 38, 74, 48, 30, 66, 44, 56], ind = [0, 14, 14, 28, 14, 0, 14];
    let r = '';
    for (let k = 0; k < 7; k++) r += `<i style="width:${W[(k + i) % 8]}%;margin-left:${ind[k]}px"></i>`;
    return `<div class="ph"><div class="dots"><u></u><u></u><u></u></div>${r}</div>`;
  }
  return '<div class="ph d"><b class="bar"></b><b class="hero"></b><div class="cols"><b></b><b></b><b></b></div></div>';
}
function cards(list, kind) {
  return list.map((p, i) => {
    const pv = p.image ? `<img src="${p.image}" alt="${p.title}">` : ph(kind, i);
    return `<div class="card" role="button" tabindex="0" data-k="${kind}" data-i="${i}"><div class="prev">${pv}</div><h3>${p.title}</h3><p>${p.text}</p></div>`;
  }).join('');
}
function projects(id, label, title, list, kind, allHref) {
  return `<section class="sec car" id="${id}"><div class="bg"></div><div class="in-w">
    <div class="head rv"><div><p class="label">${label}</p><h2>${title}</h2></div>
      <div class="tools"><a class="all" href="${allHref}">View all projects</a>
        <button class="arrow" aria-label="Previous">${chev('M15 6l-6 6 6 6')}</button>
        <button class="arrow" aria-label="Next">${chev('M9 6l6 6-6 6')}</button></div></div>
    <div class="track rv" style="--d:120ms">${cards(list, kind)}</div></div></section>`;
}
const about = `<section class="sec" id="about"><div class="bg"></div><div class="in-w"><div class="about">
  <div class="rv"><p class="label">ABOUT ME</p><h2>A bit about me.</h2>${ABOUT.text.map(t => `<p class="t">${t}</p>`).join('')}</div>
  <dl class="facts rv" style="--d:140ms">${ABOUT.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
</div></div></section>`;
const contact = `<section class="sec" id="contact"><div class="in-w" style="padding-bottom:120px">
  <p class="label rv">CONTACT</p><h2 class="big rv" style="--d:100ms">Let’s connect.</h2>
  <div class="cl rv" style="--d:200ms">${CONTACT.map(([n, v, u]) =>
    `<a href="${u}"${u.startsWith('mailto') ? '' : ' target="_blank" rel="noopener"'}>${n}<span>${v}</span></a>`).join('')}</div>
</div></section>`;

const hero = document.querySelector('main.hero');
hero.id = 'top';
hero.insertAdjacentHTML('afterend',
  about +
  projects('programming', 'PROGRAMMING', 'Things I’ve built.', PROGRAMMING, 'code', 'programming.html') +
  projects('web-design', 'WEB DESIGN', 'Interfaces I’ve designed.', DESIGN, 'design', 'web-design.html') +
  contact);

/* ================= Фоновая графика (Canvas) ================= */
const MONO = 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace';
const rnd = (a, b) => a + Math.random() * (b - a);
const g  = (a, k) => `rgba(146,152,165,${(a * k * 0.6).toFixed(3)})`;
const ac = (a, k) => `rgba(77,141,255,${(a * k * 0.6).toFixed(3)})`;
const wh = (a, k) => `rgba(255,255,255,${(a * k * 0.6).toFixed(3)})`;
const rr = (c, x, y, w, h, r) => { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); };
const IDLE = { w: 0, h: 0, draw() {} };

function win(c, w, h, a) {
  c.lineWidth = 1; c.setLineDash([]); c.strokeStyle = g(a, .5);
  rr(c, 0, 0, w, h, 10); c.stroke();
  c.beginPath(); c.moveTo(0, 26); c.lineTo(w, 26); c.stroke();
  for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(14 + i * 14, 13, 3, 0, 6.283); c.stroke(); }
}

/* Фрагменты кода */
const KWS = 'const|let|function|return|import|from|export|default|async|await|if|for|class';
const SPLIT = new RegExp(`(\\b(?:${KWS})\\b|//.*|'[^']*'|"[^"]*")`);
const ISKW = new RegExp(`^(?:${KWS})$`);
const SNIPS = [
  "function greet(name) {\n  return 'Hello, ' + name;\n}",
  "const [open, setOpen] = useState(false);",
  "export default function App() {\n  return <Home />;\n}",
  'git add .\ngit commit -m "update"\ngit push',
  ".hero {\n  display: grid;\n  place-items: center;\n}",
  "for (let i = 0; i < 10; i++) {\n  console.log(i);\n}",
  "async function load() {\n  const res = await fetch(url);\n  return res.json();\n}"
];
function codeMk() {
  const lines = SNIPS[Math.floor(Math.random() * SNIPS.length)].split('\n');
  return { w: 300, h: lines.length * 20, draw(c, a) {
    c.font = '13px ' + MONO; c.textBaseline = 'top';
    lines.forEach((ln, i) => {
      let x = 0;
      ln.split(SPLIT).forEach(t => {
        if (!t) return;
        c.fillStyle = ISKW.test(t) ? ac(a, .55) : /^['"]/.test(t) ? wh(a, .3) : t.startsWith('//') ? g(a, .25) : g(a, .5);
        c.fillText(t, x, i * 20); x += c.measureText(t).width;
      });
    });
  } };
}
/* Окно редактора: строки «печатаются», мигает курсор */
function editorMk() {
  const w = rnd(280, 340), h = rnd(170, 210), n = Math.floor((h - 40) / 16);
  const rows = Array.from({ length: n }, () => ({ ind: Math.floor(rnd(0, 3)) * 14, len: rnd(30, w - 100), hl: Math.random() < .25 }));
  return { w, h, draw(c, a, p, now) {
    win(c, w, h, a);
    const vis = Math.min(n, p * 2 * n);
    c.font = '10px ' + MONO; c.textBaseline = 'middle';
    for (let i = 0; i < Math.ceil(vis); i++) {
      const y = 40 + i * 16, f = Math.min(1, vis - i), r = rows[i];
      c.fillStyle = g(a, .4); c.fillText(i + 1, 12, y);
      c.fillStyle = r.hl ? ac(a, .6) : g(a, .45);
      c.fillRect(36 + r.ind, y - 3, r.len * f, 6);
      if (i === Math.ceil(vis) - 1 && Math.floor(now / 500) % 2) { c.fillStyle = wh(a, .7); c.fillRect(38 + r.ind + r.len * f, y - 6, 1.5, 12); }
    }
  } };
}
/* Мини-терминал */
function termMk() {
  const L = ['$ npm run dev', '  ready in 312 ms', '  > http://localhost:5173'], w = 250, h = 96;
  return { w, h, draw(c, a, p) {
    win(c, w, h, a); c.font = '12px ' + MONO; c.textBaseline = 'top';
    let n = Math.floor(Math.min(1, p * 2.2) * L.join('').length);
    L.forEach((ln, i) => {
      c.fillStyle = i ? g(a, .5) : wh(a, .6);
      c.fillText(ln.slice(0, Math.max(0, n)), 14, 38 + i * 18); n -= ln.length;
    });
  } };
}
/* Wireframe страницы: линии «рисуются» по очереди */
function wireMk() {
  const w = rnd(240, 300), h = rnd(190, 230);
  return { w, h, draw(c, a, p) {
    win(c, w, h, a);
    const k = Math.min(1, p * 3), st = t => Math.min(1, Math.max(0, (k - t) * 6));
    c.strokeStyle = g(a, .5); rr(c, w * .25, 7, w * .5, 12, 6); c.stroke();
    c.globalAlpha = st(.1); rr(c, 14, 38, 24, 12, 3); c.stroke();
    for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(w - 70 + i * 20, 44); c.lineTo(w - 58 + i * 20, 44); c.stroke(); }
    c.globalAlpha = st(.4);
    const x = 14, y = 64, ww = w - 28, hh = h * .34;
    c.strokeRect(x, y, ww, hh); c.beginPath(); c.moveTo(x, y); c.lineTo(x + ww, y + hh); c.moveTo(x + ww, y); c.lineTo(x, y + hh); c.stroke();
    c.globalAlpha = st(.7);
    const cw = (ww - 20) / 3;
    for (let i = 0; i < 3; i++) c.strokeRect(x + i * (cw + 10), y + hh + 14, cw, h - y - hh - 28);
    c.globalAlpha = 1;
  } };
}
/* Окно дизайн-редактора: выделенный блок с маркерами и размерами */
function designMk() {
  const w = rnd(280, 330), h = rnd(190, 220);
  return { w, h, draw(c, a, p, now) {
    win(c, w, h, a);
    c.strokeStyle = g(a, .5);
    for (let i = 0; i < 4; i++) { rr(c, 10, 40 + i * 26, 16, 16, 4); c.stroke(); }
    rr(c, 40, 38, w - 52, h - 50, 4); c.stroke();
    const s = Math.sin(now / 1800), bx = 70 + s * 8, by = 62, bw = 110 + s * 18, bh = 64 + s * 8;
    c.setLineDash([3, 4]); c.strokeStyle = g(a, .4); c.beginPath(); c.moveTo(bx, 38); c.lineTo(bx, h - 12); c.stroke(); c.setLineDash([]);
    c.strokeStyle = ac(a, .9); c.strokeRect(bx, by, bw, bh);
    c.fillStyle = ac(a, 1);
    [[0, 0], [1, 0], [0, 1], [1, 1], [.5, 0], [.5, 1], [0, .5], [1, .5]].forEach(([u, v]) => c.fillRect(bx + u * bw - 3, by + v * bh - 3, 6, 6));
    c.font = '10px ' + MONO; c.textBaseline = 'top'; c.fillText(Math.round(bw) + ' × ' + Math.round(bh), bx, by + bh + 8);
    for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(w - 60 + i * 16, h - 20, 5, 0, 6.283); i === 2 ? c.fill() : c.stroke(); }
  } };
}

/* Движок: сетка слотов, в каждом элемент плавно появляется и исчезает */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function layer(host, makers, fill) {
  const cv = document.createElement('canvas'), ctx = cv.getContext('2d');
  host.appendChild(cv);
  let W, H, slots = [], on = false, raf = 0;
  function spawn(s, now, first) {
    const it = Math.random() > fill ? IDLE : makers[Math.floor(Math.random() * makers.length)]();
    const cw = W / s.cols, rh = H / s.rows;
    it.x = s.c * cw + rnd(0, Math.max(0, cw - it.w)); it.y = s.r * rh + rnd(0, Math.max(0, rh - it.h));
    it.dur = rnd(9000, 14000); it.t0 = first ? now - rnd(0, it.dur) : now + rnd(0, 2500);
    s.it = it;
  }
  function size() {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = host.clientWidth; H = host.clientHeight;
    if (!W || !H) return;
    cv.width = W * d; cv.height = H * d; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(d, 0, 0, d, 0, 0);
    const cols = W < 768 ? 1 : 3, rows = Math.max(1, Math.round(H / 340)), now = performance.now();
    slots = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const s = { c, r, cols, rows }; spawn(s, now, true); slots.push(s); }
    if (reduced) frame(now);
  }
  function frame(now) {
    if (!reduced && on) raf = requestAnimationFrame(frame);
    ctx.clearRect(0, 0, W, H);
    slots.forEach(s => {
      const it = s.it, p = reduced ? .5 : (now - it.t0) / it.dur;
      if (p > 1) { spawn(s, now, false); return; }
      if (p < 0) return;
      ctx.save(); ctx.translate(it.x, it.y);
      it.draw(ctx, reduced ? 1 : Math.min(1, Math.sin(Math.PI * p) * 1.6), p, now);
      ctx.restore();
    });
  }
  new ResizeObserver(size).observe(host);
  new IntersectionObserver(([e]) => {
    on = e.isIntersecting; cancelAnimationFrame(raf);
    if (on && !reduced) raf = requestAnimationFrame(frame);
  }).observe(host);
}
layer(document.querySelector('#about .bg'), [codeMk], .6);
layer(document.querySelector('#programming .bg'), [editorMk, termMk, codeMk], .7);
layer(document.querySelector('#web-design .bg'), [wireMk, designMk], .7);

/* ================= Окно проекта ================= */
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `<div class="m-box" role="dialog" aria-modal="true"><button class="m-x" aria-label="Close">${chev('M6 6l12 12M18 6L6 18')}</button><div class="m-body"></div></div>`;
document.body.appendChild(modal);
const mBody = modal.querySelector('.m-body'), mX = modal.querySelector('.m-x');
let lastFocus = null;
function openProject(kind, i) {
  const p = (kind === 'code' ? PROGRAMMING : DESIGN)[i];
  const imgs = [p.image, ...(p.images || [])].filter(Boolean);
  const main = imgs.length ? `<div class="m-main m-shot"><img src="${imgs[0]}" alt="${p.title}"></div>` : `<div class="m-main m-ph">${ph(kind, i)}</div>`;
  const thumbs = imgs.length > 1 ? `<div class="m-th">${imgs.map((s, k) => `<button class="${k ? '' : 'on'}" data-s="${s}" aria-label="Image ${k + 1}"><img src="${s}" alt=""></button>`).join('')}</div>` : '';
  const desc = (p.description || p.text).split('\n').filter(Boolean).map(t => `<p>${t}</p>`).join('');
  const links = (p.links || []).filter(l => l.url).map((l, k) =>
    `<a class="m-l${k ? '' : ' pri'}" href="${l.url}" target="_blank" rel="noopener">${l.label}${chev('M7 17L17 7M8 7h9v9')}</a>`).join('');
  mBody.innerHTML = `${main}${thumbs}<h3>${p.title}</h3>${desc}${links ? `<div class="m-ls">${links}</div>` : ''}`;
  lastFocus = document.activeElement;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.m-box').scrollTop = 0;
  mX.focus();
}
function closeProject() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
document.addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) return openProject(c.dataset.k, +c.dataset.i);
  const t = e.target.closest('.m-th button');
  if (t) {
    mBody.querySelector('.m-shot img').src = t.dataset.s; mBody.querySelector('.m-shot').scrollTop = 0;
    mBody.querySelectorAll('.m-th button').forEach(b => b.classList.toggle('on', b === t));
    return;
  }
  if (e.target === modal || e.target.closest('.m-x')) closeProject();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeProject();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('card')) {
    e.preventDefault(); openProject(e.target.dataset.k, +e.target.dataset.i);
  }
});

/* ================= Лента проектов ================= */
document.querySelectorAll('.car').forEach(sec => {
  const tr = sec.querySelector('.track'), [pv, nx] = sec.querySelectorAll('.arrow');
  const upd = () => { pv.disabled = tr.scrollLeft < 4; nx.disabled = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 4; };
  [pv, nx].forEach((b, i) => b.addEventListener('click', () =>
    tr.scrollBy({ left: (i ? 1 : -1) * (tr.firstElementChild.offsetWidth + 24), behavior: 'smooth' })));
  tr.addEventListener('scroll', upd, { passive: true });
  addEventListener('resize', upd); upd();
});

/* ================= Появление при прокрутке ================= */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ================= Меню: ссылки на секции + подсветка ================= */
const MAP = { Home: 'top', About: 'about', Programming: 'programming', 'Web Design': 'web-design', Contact: 'contact' };
const navLinks = [...document.querySelectorAll('.links a')];
navLinks.forEach(a => {
  const id = MAP[a.textContent.trim()];
  if (id) a.setAttribute('href', '#' + id);
  a.addEventListener('click', () => document.getElementById('links').classList.remove('open'));
});
function spy() {
  const y = scrollY + innerHeight * .4; let cur = 'top';
  Object.values(MAP).forEach(id => { const el = document.getElementById(id); if (el && el.offsetTop <= y) cur = id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}
addEventListener('scroll', spy, { passive: true }); spy();

/* Кнопка Hero и «SCROLL TO EXPLORE» теперь ведут к секциям на этой же странице */
const heroBtn = document.querySelector('.hero .btn');
if (heroBtn) heroBtn.setAttribute('href', '#programming');
const hint = document.querySelector('.hero .scroll');
if (hint) hint.addEventListener('click', () => document.getElementById('about').scrollIntoView());
})();

/* Кнопка «наверх» */
(function () {
  const b = document.createElement('button');
  b.className = 'to-top';
  b.setAttribute('aria-label', 'Back to top');
  b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>';
  document.body.appendChild(b);
  const upd = () => b.classList.toggle('show', scrollY > innerHeight * 0.6);
  addEventListener('scroll', upd, { passive: true });
  upd();
  b.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
})();