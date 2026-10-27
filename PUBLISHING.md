# Julien Ioset website: editing and publishing

**GitHub repository:** https://github.com/Julioessuisglaces/therow2
**Public preview:** https://julioessuisglaces.github.io/therow2/
**Published source:** `docs/`, served via GitHub Pages from `main` under `/therow2/`.

## What to edit

- `docs/index.html`: homepage
- `docs/insights/index.html`: Insights collection (28 cards)
- `docs/insights/*.html`: article pages (28 articles)
- `docs/insights/images/`: recovered lead images (19 of the 28; missing images were not manufactured)
- `docs/downloads/illustrations-insights-originales-20261026.zip`: recovered editorial illustrations and manifest
- `docs/consistency.css`, `docs/mobile-row.css`, `docs/insights/insights.css`: styling
- `content/insights-essentiels.json`: revised article text and original slugs in editable form
- `archives/insights-originals-20261026.zip`: original long-form article pages before condensing

Changes to `docs/` can be committed and pushed directly; GitHub Pages deploys from this folder. **Do not run the sync script without checking the source first**, as it replaces the generated pages and may overwrite edits made directly in GitHub.

## Editing locally

To preview the `docs/` version with the correct project path, serve the repository's parent directory so its public path is `/therow2/`. Alternatively, use the site's original standalone local `dist/` version at http://127.0.0.1:4173, which uses root-relative paths.

## Refreshing GitHub Pages from the standalone local site

Only when the `dist` version is the latest source:

```powershell
node scripts/prepare-pages.cjs "C:\path\to\site\dist"
git add docs content scripts PUBLISHING.md
git commit -m "Sync local website"
git push origin main
```

The script copies static site files, prefixes root-relative asset links for `/therow2/`, preserves `.nojekyll`, and includes the illustration ZIP. It excludes local build scripts, node_modules, and intermediate downloads.

## Editorial guidelines

Quiet luxury, black-and-white, minimalist typography, spacious editorial layout. French first. No decorative stock photography and no generic AI image substitutions. Preserve URLs when revising existing articles; keep titles, category, date, image, and only edit the article body where possible. The original article texts are archived in `archives/`.

## Verification after changes

Check the 28 articles and images, Insights card links, FAQ, header search, mobile navigation, and footer at the live GitHub Pages URL. Confirm the latest GitHub commit appears on `main` before treating a push as complete.
