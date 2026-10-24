// TODO: endpoint. No form handler exists in this project; wire the real one here.
async function submitLead(kind, data) {
  console.info('[submitLead] TODO: endpoint', kind, data);
  return { ok: true };
}

// Header state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('nav--solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile drawer
const menuBtn = nav.querySelector('.nav__menu');
const drawer = document.getElementById('drawer');
const openDrawer = () => {
  drawer.hidden = false;
  menuBtn.setAttribute('aria-expanded', 'true');
  drawer.querySelector('a').focus();
};
const closeDrawer = (refocus = true) => {
  drawer.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
  if (refocus) menuBtn.focus();
};
menuBtn.addEventListener('click', openDrawer);
drawer.querySelector('.drawer__close').addEventListener('click', () => closeDrawer());
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeDrawer(false)));
drawer.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// Threshold: while the stage is pinned, two hairlines converge on the centre and
// two lines of text play in turn: "Le marketing." then "C’est vulgaire." beside it,
// fade out; "Construisez plutôt une marque." at once, fade out; then the final
// sentence (the h2) appears and stays. Everything completes at 90% of the track.
const threshold = document.querySelector('.threshold');
const steps = [...threshold.querySelectorAll('.threshold__step')];
const WINDOW = 0.3;                       // share of the track per line of text
const fade = (x, a, b) => Math.min(1, Math.max(0, (x - a) / (b - a)));
let frame = 0;
const drawLines = () => {
  frame = 0;
  const r = threshold.getBoundingClientRect();
  const t = Math.min(1, Math.max(0, -r.top / (0.9 * (r.height - innerHeight))));
  threshold.style.setProperty('--p', (1 - (1 - t) ** 2).toFixed(4)); // ease-out
  steps.forEach((el, i) => {
    const a = i * WINDOW, b = a + WINDOW, edge = WINDOW * 0.15;
    if (i === steps.length - 1) {                             // final sentence stays
      el.style.opacity = fade(t, a, a + edge).toFixed(3);
      return;
    }
    el.style.opacity = (1 - fade(t, b - edge, b)).toFixed(3); // whole line fades out
    el.querySelectorAll('.threshold__part').forEach((part, j) => {
      const start = a + j * WINDOW * 0.4;                     // second half joins later
      part.style.opacity = fade(t, start, start + edge).toFixed(3);
    });
  });
};
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-threshold');
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(drawLines); }, { passive: true });
  addEventListener('resize', drawLines);
  drawLines();
}

// 6.1 Mandate details: independent toggles, content always in the DOM
document.querySelectorAll('.toggle').forEach(btn => {
  const panel = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    if (open) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', 'until-found');
  });
  // Find-in-page reveals the panel: keep the button in sync
  panel.addEventListener('beforematch', () => btn.setAttribute('aria-expanded', 'true'));
});

// Inline validation using the browser's own (localised) messages
function validate(form) {
  let first = null;
  form.querySelectorAll('[required]').forEach(input => {
    const err = document.getElementById(input.getAttribute('aria-describedby'));
    const bad = !input.checkValidity();
    input.setAttribute('aria-invalid', String(bad));
    if (err) err.textContent = bad ? input.validationMessage : '';
    if (bad && !first) first = input;
  });
  if (first) first.focus();
  return !first;
}
function liveClear(form) {
  form.querySelectorAll('[required]').forEach(input => input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) {
      input.setAttribute('aria-invalid', 'false');
      document.getElementById(input.getAttribute('aria-describedby')).textContent = '';
    }
  }));
}

// 6.2 Case-study modal (native <dialog>: focus kept inside, Escape closes, focus returns)
const dialog = document.getElementById('case-dialog');
const caseOpen = document.getElementById('case-open');
const caseForm = document.getElementById('case-form');
const caseDone = dialog.querySelector('.dialog__done');
caseOpen.addEventListener('click', () => {
  caseForm.hidden = false;
  caseDone.hidden = true;
  dialog.showModal();
  document.getElementById('case-email').focus();
});
dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => caseOpen.focus());
dialog.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const items = [...dialog.querySelectorAll('button, input, a[href], [tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.closest('[hidden]'));
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
liveClear(caseForm);
caseForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validate(caseForm)) return;
  const fd = new FormData(caseForm);
  const res = await submitLead('case-study', { email: fd.get('email'), newsletter: fd.has('newsletter') });
  if (res.ok) {
    caseForm.reset();
    caseForm.hidden = true;
    caseDone.hidden = false;
    caseDone.focus();
  }
});

// Footer language list: mirrors the choice in the header (mockup, French only for now)
const langSelect = document.getElementById('langue');
langSelect.addEventListener('change', () => {
  document.querySelectorAll('.lang__code').forEach(el => { el.textContent = langSelect.value; });
  document.querySelectorAll('.lang').forEach(el => el.setAttribute('aria-label', `${langSelect.value}, choisir la langue`));
});

// Footer newsletter (The Row pattern: email field, ">" submit, consent checkbox)
const newsForm = document.getElementById('news-form');
const newsDone = newsForm.querySelector('.news__done');
liveClear(newsForm);
newsForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validate(newsForm)) return;
  const res = await submitLead('newsletter', { email: newsForm.email.value });
  if (res.ok) {
    newsForm.reset();
    newsDone.hidden = false;
    newsDone.focus();
  }
});

// 6.3 Contact form
const contactForm = document.getElementById('contact-form');
const contactDone = contactForm.querySelector('.form__done');
liveClear(contactForm);
contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (contactForm.website.value) return; // honeypot filled: silently drop
  if (!validate(contactForm)) return;
  const fd = new FormData(contactForm);
  fd.delete('website');
  const res = await submitLead('contact', Object.fromEntries(fd));
  if (res.ok) {
    contactForm.reset();
    contactDone.hidden = false;
    contactDone.focus();
  }
});
