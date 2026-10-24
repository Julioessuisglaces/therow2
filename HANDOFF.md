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
| `docs/index.html` | The whole page: header, 6 sections, footer, SEO head, JSON-LD |
| `docs/style.css` | All styles. Design tokens on `:root` |
| `docs/main.js` | Mobile menu drawer, "Détails" toggles, case-study `<dialog>`, contact form validation, `submitLead()` stub |
| `docs/img/` | Images. Responsive `.webp` sizes are used by the page; the original `.jpg/.webp/.avif` files are kept as sources |
| `server.js` | Tiny static server on port 5173 |
| `BRIEF.md` | Julien's build brief (layout, locked copy, behaviour, guardrails). **Authoritative.** |
| `HANDOFF.md` | This file |

## 4. Design system (already decided, do not change without Julien)

- **Font:** Raleway (Google Fonts), weights 200 to 600. Body 13px, small labels 11px, uppercase titles with wide letter spacing (`--track: .32em`). The hero h1 is 13px. (Sizes were raised +1px on Oct 24; a 14px trial for descriptions and bio was rejected.)
- **Colours:** `--ink #080808`, `--mute #767676`, `--soft #a8a8a8`, `--line #e4e4e4`, white background.
- **Buttons/links (CTA):** text, then a diagonal arrow `↗`, underlined (`.cta`).
- **Photos:** always black and white (`filter: grayscale(1)` in CSS, and the new files are converted too).
- **Motion:** none. Julien asked for **no animation**. Only small hover transitions on links/buttons and smooth anchor scrolling remain.
- **Section rhythm:** `--space: 180px` desktop, `110px` mobile.

## 5. Page structure today (follows BRIEF.md section 3)

0. Fixed header: "Julien Ioset" left; Services, À propos, Insights, Contact, globe + fr right. Below 900px: "Menu" opens a full-screen drawer.
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

## 7. Change round 2 (done, Oct 2026)

All applied and committed. Copy changes override the locked copy in BRIEF.md.

1. Contact section is full width: photo fills the left half at full height, text and a wider form (about 540px) on the right.
2. Footer uses The Row's layout: language/region column with a vertical divider, three link/address columns, philosophy statement in the right-hand column (where The Row has its newsletter), centred copyright below. "Site sans cookies" moved into the legal column.
3. Bio portrait: replaced by Julien's full-HD version (1601 × 2000, B&W, no retouching needed). Source `docs/img/cartel-source.jpg`; page uses `cartel-560/1122/1600.webp`.
4. Threshold: "La rentabilité commence là où la comparaison s’arrête." (Julien typed "là ou"; corrected to "là où", to confirm.)
5. Hero: "De prix à marque." added under the h1, same 12px style.
6. Menu: 12px, not uppercase, 44px between items, separator dots removed, globe icon before "FR" (also in the mobile drawer). The logo stays uppercase.
7. Mandats intro: "Trois services. Une seule exigence&#8239;: la marque."
8. "Réserver ↗" now sits on its own line under "Tout commence par un entretien de trente minutes."
9. Sur demande: "Les études de cas sont transmises sur demande." (Julien typed "Etudes de cas sont transmises sur demande."; "Les" added for grammar, to confirm.)

## 7b. Change round 3 (done)

- Menu: Services (`#mandats`) · À propos (`#julien`) · Insights (`/insights/`) · Contact (`#contact`) · globe + ISO code in lowercase (`fr`). The globe links to the footer language list.
- Footer first column: "Choisissez votre langue :" with a working `<select>` (Français, Deutsch, English). Changing it updates the globe code in the header (mockup only, no translated pages exist).
- Footer right column: newsletter form like The Row: label "Rester informé", email field with underline and `>` submit, consent checkbox "J’accepte la politique de confidentialité." (link to `/privacy-policy/`). Both fields required, inline errors, goes through `submitLead('newsletter')`. Success sentence `[TODO: copy]`.
- The philosophy statement ("Le prix est un signal…" and "Lorsque l’histoire…") was removed from the footer at Julien's request.

Contact photo: Julien's chosen image, a double scull from above (Pexels, Elias Tigiser), B&W, `docs/img/rowing-600/1000/1500.webp`. The globe "FR" is a button with no language menu yet (only French exists).

## 8. Open TODOs (from BRIEF.md, still waiting on Julien)

- Meta description (`[TODO: Julien to validate]` in `<head>`).
- Success sentences after sending the case-study modal and the contact form (`[TODO: copy]`).
- URL of "Questions fréquentes" (footer link is `#`).
- Form endpoint: `submitLead()` in `docs/main.js` only logs; no real handler exists.
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
- Then: change round 2 (section 7 above).

## 11. Threshold: converging hairlines + two static lines (Julien's choice)

Tried and removed: a black/white strobe; the sentence "La rentabilité commence là où la comparaison s’arrête."; a scroll-driven word-by-word sequence. Julien chose maximum sobriety.

Now: `.threshold` is a 200vh scroll track with a sticky 100vh stage holding the `h2`, two lines one above the other, regular weight (400), 13px, no text effect:
"Le marketing c’est vulgaire." / "Devenez une évidence en créant du sens."
While pinned, two 1px lines (`--soft`) grow from the screen edges and stop 32px from the text (ease-out, complete at 80% of the track; `drawLines` in `docs/main.js`). With `prefers-reduced-motion` the lines are simply shown. This is the only animation on the page; keep it that way.

## 12. Online preview (GitHub Pages)

The page lives in `docs/` so GitHub Pages can serve it (Settings → Pages → Deploy from a branch → `main` / `/docs`). Preview: https://julioessuisglaces.github.io/therow2/ . Every push to `main` updates it within a minute or two. `docs/.nojekyll` tells Pages to serve the files as they are. Links to `/insights/`, `/privacy-policy/` and `/conditions-generales/` point to pages that only exist on the real julienioset.ch, so they 404 in the preview (expected).

## 13. Engagement section (added Oct 24)

New section `.engage` between the threshold and Mandats: a photo full width (children walking in line seen from above, with their shadows; B&W, `docs/img/engage-800/1400/2000.webp`, 3:2, 1240px wide and centred, text aligned to the photo; it replaced an earlier clasped-hands photo), then two lines beneath, regular weight:
"Les entreprises ont un pouvoir. Celui d’améliorer demain." (the `h2`) / "Pré-requis pour toute collaboration. Les autres sont exclues."
Julien wrote "Les companies" and "colloboration"; written as "Les entreprises" and "collaboration", to confirm with him.
