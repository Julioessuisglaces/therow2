# Handoff: julienioset.ch one-page mockup

Read this file first, then `BRIEF.md`. Together they are everything a new assistant (ChatGPT, Claude or a developer) needs to continue.

## 1. What this is

A static, one-page redesign mockup of **julienioset.ch** for Julien Ioset (brand strategy and external marketing direction for SMEs in Suisse romande). Visual direction: **The Row** (therow.com). Quiet, white, black type, black and white photography, lots of space. French, Swiss usage, vouvoiement.

## 2. How to run

```bash
node server.js
```

Then open http://localhost:5173. No build step, no dependencies. Plain HTML, CSS and vanilla JavaScript.

## 3. Files

| Path | Role |
|---|---|
| `site/index.html` | The whole page: header, 6 sections, footer, SEO head, JSON-LD |
| `site/style.css` | All styles. Design tokens on `:root` |
| `site/main.js` | Mobile menu drawer, "Détails" toggles, case-study `<dialog>`, contact form validation, `submitLead()` stub |
| `site/img/` | Images. Responsive `.webp` sizes are used by the page; the original `.jpg/.webp/.avif` files are kept as sources |
| `server.js` | Tiny static server on port 5173 |
| `BRIEF.md` | Julien's build brief (layout, locked copy, behaviour, guardrails). **Authoritative.** |
| `HANDOFF.md` | This file |

## 4. Design system (already decided, do not change without Julien)

- **Font:** Raleway (Google Fonts), weights 200 to 600. Body 12px, small labels 10px, uppercase titles with wide letter spacing (`--track: .32em`). The hero h1 is 12px.
- **Colours:** `--ink #080808`, `--mute #767676`, `--soft #a8a8a8`, `--line #e4e4e4`, white background.
- **Buttons/links (CTA):** text, then a diagonal arrow `↗`, underlined (`.cta`).
- **Photos:** always black and white (`filter: grayscale(1)` in CSS, and the new files are converted too).
- **Motion:** none. Julien asked for **no animation**. Only small hover transitions on links/buttons and smooth anchor scrolling remain.
- **Section rhythm:** `--space: 180px` desktop, `110px` mobile.

## 5. Page structure today (follows BRIEF.md section 3)

0. Fixed header: "Julien Ioset" left; Mandats · Julien · Contact · FR right. Below 900px: "Menu" opens a full-screen drawer.
1. Hero `#top`: full-bleed portrait (`<picture>` with a separate mobile crop) + role line as the only `h1`.
2. Threshold: one full empty screen with one line of text (`h2`).
3. Mandats `#mandats`: intro line, three offers (I. Conseiller, II. Planifier, III. Diriger), each with a "Détails" toggle (`hidden="until-found"`, independent), then "TVA non applicable." and the booking line.
4. Cartel `#julien`: B&W portrait (blazer) + museum-label bio + caption + LinkedIn.
5. Sur demande: one sentence, context line, button opening the case-study `<dialog>`.
6. Contact `#contact`: image + HubSpot link + 4-field form with honeypot + mailto fallback.
7. Footer: philosophy, text links, address line, legal line.

Fixed values: HubSpot `https://meetings-eu1.hubspot.com/julien-ioset` · email `j.ioset@julienioset.ch` · LinkedIn `https://www.linkedin.com/in/julienioset/`.

## 6. Status of verification (last run)

- Lighthouse, desktop: Performance 100 · Accessibility 100 · Best practices 96 · SEO 100.
- Lighthouse, mobile: Performance 89 · Accessibility 100 · Best practices 96 · SEO 100.
- Best practices 96 is only the missing `favicon.ico` on the local server.
- Keyboard tested: toggles, modal (focus trap, Escape, focus return), inline email validation, contact form validation.

## 7. NEXT: change requests from Julien, not done yet

Do these next, in this order. Copy in quotes is verbatim (apply French typography: `’` apostrophe, narrow no-break space `&#8239;` before `:`).

1. **Contact section full width.** The image is powerful and the form is too narrow. Make section 6 span the full page width (not the 1140px container), image large on one half, form wider on the other.
2. **Footer exactly like The Row** (https://www.therow.com/fr-ch): multi-column footer layout as on therow.com (left column with language/country and a vertical divider, then link columns, newsletter field on the right with underline and `>` submit, centred copyright line below). Keep the footer content from BRIEF.md section 4 / 7.
3. **Bio portrait quality.** The source photo (`Minimalist Corporate Portrait with Smartwatch`, now `site/img/cartel-560.webp` and `cartel-1122.webp`) is grainy. Polish it: denoise / reduce grain, keep it natural and B&W. Do not change the framing.
4. **Threshold copy.** Replace
   "Ce qui n’est pas perçu se négocie. / Ce qui est construit se défend."
   with **"La rentabilité commence là où la comparaison s’arrête."** (Julien wrote "là ou" and "s'arrête"; use the correct French "là où" and the typographic apostrophe, and confirm with him.)
5. **Hero.** Add **"De prix à marque."** a little below the h1 (keep the h1 as is).
6. **Menu.** More space between items and **not uppercase**. Add an **Earth / globe icon** for the language selector (next to FR).
7. **Mandats intro.** Replace "Trois formes d’engagement. Une seule exigence&#8239;: la marque." with **"Trois services. Une seule exigence&#8239;: la marque."**
8. **Booking CTA position.** In "Tout commence par un entretien de trente minutes. Réserver ↗", put **"Réserver ↗" on its own line, underneath the text**.
9. **Sur demande.** Replace "Deux études de cas sont transmises sur demande." with **"Études de cas transmises sur demande."** (Julien wrote "Etudes de cas sont transmises sur demande." Capital É is correct French; "Les études de cas sont transmises sur demande." is the grammatical full sentence. Confirm wording with Julien.)

## 8. Open TODOs (from BRIEF.md, still waiting on Julien)

- Meta description (`[TODO: Julien to validate]` in `<head>`).
- Success sentences after sending the case-study modal and the contact form (`[TODO: copy]`).
- URL of "Questions fréquentes" (footer link is `#`).
- Contact image: the rowing-boat photo is a stand-in until Julien chooses.
- Form endpoint: `submitLead()` in `site/main.js` only logs; no real handler exists.
- Production URL of the portrait used in `og:image`.
- Labels added beyond the locked copy, to approve: "Aller au contenu" (skip link), "Menu", "Fermer".
- The FAQ and free resources from the current homepage need a new home (not on this page).
- Possible contrast issue: `--soft #a8a8a8` on white (placeholders, separator dots). Report, do not change colours without Julien.

## 9. Rules to keep following

- Copy is locked: use Julien's words verbatim; never invent marketing text. Missing text becomes a visible `[TODO: copy]`.
- No dashes used as punctuation in visible copy.
- No testimonials, badges, stats counters, image grids, carousels, pop-ups.
- Every "Réserver" link goes to the HubSpot scheduler.
- Keep Lighthouse desktop performance at 100; keep accessibility and SEO at 100.
- Commit in small steps with clear messages.

## 10. History

- `draft-v1` tag: first multi-section mockup (Archivo, then Raleway, The Row atmosphere).
- Then: rebuilt as the one-page layout from `BRIEF.md`, animations removed, new bio portrait.
