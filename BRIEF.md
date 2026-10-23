# Build brief: julienioset.ch, one-page redesign (layout and text)

Paste this whole file into a Claude Code session opened in the Vite project of the draft (the one served at `http://localhost:5173/`), or save it at the repo root as `BRIEF.md`. It is self-contained.

---

## 1. Scope: layout and text only

You are the front-end developer on the redesign of **julienioset.ch**, the website of Julien Ioset, an independent consultant in brand strategy and external marketing direction (directeur marketing externalisé) for SMEs in Suisse romande.

This brief defines **two things only: the layout (sections, order, structure, behaviour) and the text.**

- **All visual styling is already defined in the project.** Colours, typefaces, sizes, weights, spacing values, image treatment, motion and effects are not your decision. Do not choose, add, change or "improve" any of them. Apply the existing styles to the new structure.
- If the structure needs a visual element the project does not define yet, stop and ask Julien. Never fill the gap yourself.
- **The copy in section 4 is locked.** Use it verbatim. Do not write, add or rephrase anything. If a string is missing, leave a visible `[TODO: copy]` placeholder and list it in your report.
- The draft is unstructured: keep its styling, replace its structure.

## 2. Context for structural decisions

- **Audience:** CEOs and owners of SMEs (10 to 250 employees) in Suisse romande. French, Swiss usage, vouvoiement.
- **Traffic:** mostly warm. Visitors arrive after a physical letter or LinkedIn. They already know the problem. The site's job is to confirm: who he is, what he offers, on what terms, how to start.
- **Structural references:** therow.com (the homepage is one image; everything else sits behind a menu) and klarabasel.ch (one page with anchors; detail is offloaded elsewhere).
- **Principle, surface and depth:** the page says the minimum; detail exists but waits to be asked for. Mandate details expand in place; case studies are sent on request by email; Insights and FAQ are separate pages reached from the footer only.
- One page, not several. Navigation is three anchor links, nothing more.

## 3. Page layout

Heights are approximate, for rhythm on desktop. Every section must work on mobile (section 7).

| # | Section | Height | Content | Structure and behaviour |
|---|---------|--------|---------|-------------------------|
| 0 | Header | thin | Name left; Mandats · Julien · Contact · FR right | Fixed. Anchor links with smooth scroll. |
| 1 | Hero | 100vh | Full-bleed portrait + role line over it | No headline, no call to action, no carousel, no video. The role line is the page `h1`. |
| 2 | Threshold | 100vh | Two lines of text | An otherwise empty full screen. Nothing else in it. |
| 3 | Mandats | ~150vh | Intro line, three offers (I, II, III), one booking line | Each offer: name, one sentence, terms, price, and a "Détails" toggle that expands in place (6.1). Three columns on desktop, stacked on mobile. |
| 4 | Cartel | 100vh | Second image of Julien + short bio + caption + LinkedIn link | Structured like a museum label: name, a few lines of text, credentials as a caption. |
| 5 | Sur demande | ~40vh | One sentence, one context line, one link | The link opens the case-study modal (6.2). Not a set of cards. |
| 6 | Contact | 100vh | Image on one half; two ways to make contact on the other | Way 1: book via HubSpot. Way 2: short form (6.3). |
| 7 | Footer | short | Philosophy statement, text links, legal line | Links only, no blocks. |

Anchors: `#mandats`, `#julien`, `#contact`.

## 4. Locked copy (French, verbatim)

Typography rules for all copy: typographic apostrophe `’`; narrow no-break space before `: ; ? !` and inside `« »`; Swiss thousands separator `CHF 2’000`; **no dashes used as punctuation anywhere**.

### 0. Header
```
Julien Ioset
Mandats · Julien · Contact · FR
```

### 1. Hero (over the portrait)
```
Stratégie de marque. Direction marketing externalisée.
PME de Suisse romande.
```

### 2. Threshold
Default:
```
Ce qui n’est pas perçu se négocie.
Ce qui est construit se défend.
```
[TODO: Julien may swap for the alternative: « Le savoir-faire ne suffit plus. Encore faut-il qu’il soit perçu. » Keep it as one editable string.]

### 3. Mandats
Intro line:
```
Trois formes d’engagement. Une seule exigence : la marque.
```

**I. Conseiller**
```
Un second regard, avant que le budget ne soit engagé.
Deux séances par mois. Jusqu’à six heures. Engagement de deux mois.
CHF 2’000 / mois
```
Détails:
```
Deux rendez-vous de conseil par mois. Un avis indépendant sur les projets et les décisions. Des recommandations remises après chaque séance. L’examen ponctuel des supports et des propositions. Les décisions éclairées ici, les commandes gardées par vous. Pour les dirigeants qui pilotent eux-mêmes leur marketing.
```

**II. Planifier**
```
Six semaines. Un positionnement clarifié, des priorités arrêtées, douze mois écrits.
Six séances. Jusqu’à vingt-trois heures. Mission de six semaines.
CHF 7’500 / mission
```
Détails:
```
L’offre, le positionnement et les actions sont analysés. Une proposition de valeur et des messages différenciants sont formulés. Une feuille de route sur douze mois est établie, priorités comprises. Le plan est remis prêt à l’emploi, à vos équipes ou à vos agences. Aucune prestation n’est vendue en aval.
```

**III. Diriger**
```
Le marketing se dirige. Il ne se subit pas.
Jusqu’à quinze heures par mois. Engagement de trois mois.
CHF 5’000 / mois
```
Détails:
```
La feuille de route est tenue à jour. Les priorités sont fixées, les arbitrages rendus. Équipes et agences sont briefées, puis supervisées. Un bilan des résultats est présenté chaque mois. Le cap est tenu ici. L’exécution reste chez ceux qui la réalisent.
```

Below the three offers:
```
TVA non applicable.
Tout commence par un entretien de trente minutes. Réserver
```
"Réserver" links to the HubSpot scheduler.

### 4. Cartel
```
Julien Ioset

Dix-sept ans entre la vente, la gestion de produits et la direction marketing, de la grande distribution suisse à l’industrie de précision.

Une stratégie ne se mesure pas au nombre d’actions menées. Elle se mesure à la qualité des décisions prises.
```
Caption:
```
Vente, produit, marketing · B2B & B2C · Distribution et industrie · Enseignant au Brevet fédéral Marketing et Vente
```
Link: `LinkedIn` → https://www.linkedin.com/in/julienioset/

### 5. Sur demande
```
Deux études de cas sont transmises sur demande.
Industrie de précision · Grande distribution
Demander une étude de cas
```
Modal:
```
L’étude de cas vous est adressée personnellement.
[field] Adresse e-mail professionnelle
[checkbox, unchecked] Recevoir aussi la newsletter.
[button] Recevoir
En cliquant, vous acceptez notre politique de confidentialité.
```
"politique de confidentialité" links to `/privacy-policy/`.

### 6. Contact
```
Un entretien. Trente minutes.
Ni présentation, ni engagement. Une conversation.
Réserver un créneau · ou écrire :
```
Form labels: `Nom` · `Entreprise` · `E-mail` · `Votre situation, en quelques lignes` · button `Envoyer`.
Also show: `j.ioset@julienioset.ch` (mailto).

### 7. Footer
```
Le prix est un signal. La cohérence en est l’origine.
Lorsque l’histoire, l’image et l’expérience sont maintenues avec exigence, la valeur cesse d’être expliquée. Elle se perçoit.

Insights · Questions fréquentes · CEO Marketing · Conditions générales · Confidentialité · LinkedIn
Case postale, 1000 Lausanne 12 · +41 78 913 80 08 · j.ioset@julienioset.ch
© 2026 Julien Ioset · Site sans cookies
```
Links: Insights `/insights/` · Questions fréquentes [TODO: confirm URL with Julien] · CEO Marketing `https://ceomarketing.ch/` · Conditions générales `/conditions-generales/` · Confidentialité `/privacy-policy/` · LinkedIn (as above).

### Fixed values
- HubSpot scheduler (all "Réserver" links): `https://meetings-eu1.hubspot.com/julien-ioset`
- Email: `j.ioset@julienioset.ch`

## 5. Content rules (what must not appear)
- No testimonials, client logos, "why me" section or stats counters.
- No image grid or anything resembling a portfolio or project thumbnails.
- No badges such as "Le plus demandé".
- No carousel, chat widget, pop-up or newsletter interstitial.
- No new copy, no dashes as punctuation, no marketing author named.

## 6. Behaviour

### 6.1 Mandate details
- A real `<button aria-expanded aria-controls>` labelled "Détails".
- The details text is always in the DOM (indexable), collapsed by default. No content injected by JavaScript.
- Opening one does not close the others.

### 6.2 Case-study modal
- Native `<dialog>`. Focus trapped, Escape closes, focus returns to the trigger.
- Email required and validated; inline error if empty or invalid.
- Do not invent a submission endpoint. Look for the existing form handler in the repo. If there is none, wire one `submitLead()` function marked `[TODO: endpoint]` and list it in your report.
- Success state: one sentence [TODO: copy].

### 6.3 Contact form
- The four fields listed, nothing more. Required fields validated inline.
- Same endpoint rule as 6.2. A `mailto:` link stays visible as fallback.
- Honeypot field against spam; no captcha unless Julien asks.

## 7. Responsive layout
- Hero: separate mobile crop of the portrait via `<picture>`.
- Threshold: still one full, otherwise empty screen on mobile.
- Mandats: three columns from 1024px, stacked below. Name, terms and price stay grouped within each offer.
- Cartel: image above text on mobile.
- Contact: image above the two contact options on mobile.
- Header: keep the three anchors on mobile if they fit; otherwise a "Menu" text link opening a full-screen drawer with the same three links.

## 8. Technical guardrails
- **Semantics:** `lang="fr-CH"`; one `h1` (hero role line); one `h2` per section; offers as `h3`.
- **SEO:** `<title>` `Julien Ioset · Direction marketing externalisée · Suisse romande`. Meta description [TODO: Julien to validate]. Canonical `https://julienioset.ch/`. Open Graph with the portrait as image and `fr_CH` locale. JSON-LD `Organization` + `Person` (sameAs LinkedIn) and the three offers as `Offer` in CHF. No LocalBusiness, no address markup.
- **URLs:** preserve `/insights/`, `/privacy-policy/`, `/conditions-generales/`. Remove or rename nothing. If current homepage content (FAQ, free resources) needs a new home, flag it; do not delete it from the project.
- **Performance:** do not regress the current Lighthouse scores (accessibility, best practices, SEO at 100; performance 100 on desktop). Responsive images with `srcset`/`sizes`, hero image preloaded, other images lazy, explicit width and height. Do not change fonts or how they load. Vanilla JavaScript, no framework added for this page.
- **Accessibility:** skip link, keyboard-operable accordion and modal, French `alt` texts, reduced motion respected. If you detect a contrast issue, report it; do not change any colour yourself.

## 9. Images
1. Hero: portrait of Julien (desktop and mobile crops).
2. Cartel: a second image of Julien, different framing.
3. Contact: one image chosen by Julien.

Use existing assets from the repo where they fit; otherwise empty placeholders at the intended ratio marked `[TODO: image]`. Do not source images yourself.

## 10. Workflow
1. **Inspect first.** Read the repo: stack, build, existing styles (to reuse, never to modify), assets, any form handler. Report in a short summary before writing code: what you will reuse, what is missing, open questions. Wait for Julien's go.
2. **Work on a new branch.** Every change reversible. Do not touch the live deployment, DNS, hosting, caching or analytics.
3. **Build section by section** in the order of section 3, with the locked copy.
4. **Verify:** Lighthouse (desktop and mobile), keyboard test of accordion and modal, screenshots at 1440px and 390px checked against this brief.
5. **Report:** what was built, every `[TODO]` left, any deviation from this brief and why, Lighthouse scores.

## 11. Acceptance checklist
- [ ] Eight blocks in order (header, seven sections), one page, three anchors.
- [ ] Hero holds only the portrait and the role line.
- [ ] Threshold holds only its two lines.
- [ ] Three mandates with exact copy and prices; details in the DOM; toggle accessible; "TVA non applicable" shown.
- [ ] No testimonials, badge or image grid anywhere.
- [ ] Case-study modal works with the keyboard and validates email.
- [ ] Contact form: four fields, honeypot, mailto fallback.
- [ ] Every "Réserver" link points to the HubSpot scheduler.
- [ ] French typography rules applied; no dashes as punctuation.
- [ ] Existing URLs preserved; no LocalBusiness markup.
- [ ] Lighthouse scores not regressed.
- [ ] No colour, typeface, size, spacing value or motion added or changed.
