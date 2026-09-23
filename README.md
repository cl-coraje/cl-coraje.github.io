# Lei Cai — personal website

Public website: https://cl-coraje.github.io/
Repository: https://github.com/cl-coraje/cl-coraje.github.io

An independent static portfolio inspired by Spotlight's restrained visual style. It presents Lei Cai's research profile, selected research papers, apps, and GitHub account.

## Content

Update `content.js` for publications, apps and social links. The four independent pages are `index.html` (About), `publications.html` (Research), `apps.html` (Apps), and `contact.html` (Contact). Edit their HTML for page structure and fallback metadata. Keep the shared header and footer consistent across all four files. `styles.css` controls presentation; `site.js` renders data and handles the theme switch.

Profile updated from the supplied 2026 CV. Publication authors, years, volumes and article numbers were verified against Crossref. The 2025 Omega article has a DOI containing 2024; the publication year remains 2025. No manuscript files are hosted; DOI links open the publisher's page. Apps are currently an empty section until actual products are supplied.

## Local preview

Inside this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

## Deployment

GitHub Pages serves the `master` branch from `/ (root)` with HTTPS. `.nojekyll` enables plain static serving. Local edits become public only after being uploaded or committed to the repository. No build or npm packages are required.

## Languages

The upper-right language switch supports Chinese and English and remembers the selection in local storage. Chinese is the default. Edit `portfolioContentEn` and `portfolioUI` in `content.js` alongside the Chinese content when updating translations. Publication titles and DOI metadata are shared across languages.

All navigation links open separate HTML documents. Language and theme preferences are shared across pages. Publish all four HTML files and shared assets together; increment the asset version query when changing JavaScript or CSS.

## Shared header assets

All four pages use an avatar-and-name link back to About. The name follows the selected language. `site.js` and `styles.css` are the editable sources; HTML currently references content-hashed copies (`site.e423a2a261.js` and `styles.549a5e575c.css`) to prevent reuse of outdated scripts/styles. After editing a source, regenerate its hashed copy, update all four HTML references, and publish them together.

## Copy style

Keep visible pages minimal: no eyebrow subtitles, redundant affiliations, research summary cards, publication author/role/description/contribution blocks, social captions, placeholder copy, or decorative fine print. Retain the main biography, page headings, publication titles and venue/year/DOI links, actual projects and social links. Source publication data remain in `content.js` for maintenance.
