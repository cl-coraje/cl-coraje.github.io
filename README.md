# Lei Cai — personal website

Public website: https://cl-coraje.github.io/
Repository: https://github.com/cl-coraje/cl-coraje.github.io

An independent static portfolio inspired by Spotlight's restrained visual style. It presents Lei Cai's postdoctoral and education history, selected research papers, and GitHub profile.

## Content

Update `content.js` for publications, education, apps and social links. Update `index.html` for the introductory heading, fallback biography and search/share metadata. `styles.css` controls presentation; `site.js` renders data and handles the theme switch.

Profile updated from the supplied 2026 CV. Publication authors, years, volumes and article numbers were verified against Crossref. The 2025 Omega article has a DOI containing 2024; the publication year remains 2025. No manuscript files are hosted; DOI links open the publisher's page. Apps are currently an empty section until actual products are supplied.

## Local preview

Inside this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

## Deployment

GitHub Pages serves the `master` branch from `/ (root)` with HTTPS. `.nojekyll` enables plain static serving. Local edits become public only after being uploaded or committed to the repository. No build or npm packages are required.
