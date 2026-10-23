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

// Threshold: two hairlines converge on the sentence as the section scrolls in,
// slowing down and stopping short of it. Drawn while the sentence is pinned,
// complete at 80% of the pinned track.
const threshold = document.querySelector('.threshold');
let frame = 0;
const drawLines = () => {
  frame = 0;
  const r = threshold.getBoundingClientRect();
  const t = Math.min(1, Math.max(0, -r.top / (0.8 * (r.height - innerHeight))));
  threshold.style.setProperty('--p', (1 - (1 - t) ** 3).toFixed(4)); // ease-out
};
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
