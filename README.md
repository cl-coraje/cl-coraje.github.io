# Personal website preview

An original static implementation inspired by Spotlight's restrained personal-portfolio layout. This is not the licensed Tailwind Plus template; no paid template source is included.

## Preview locally

```sh
cd personal-website
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. No installation or build is required. The existing research-map application in the parent folder is independent.

## Add your information

Edit `content.js` to set your name, biography, research focus, publications, apps, and social links. Unconfigured links are displayed as non-interactive placeholders. All current paper and app entries are explicitly sample content, not real achievements.

Set `isPreview` to `false` after replacing the sample content. Also update the description in `index.html`, the introductory headline, and replace the initials avatar with your portrait if desired. Remove any unused sample entries. The four editorial illustrations are decorative, original HTML/CSS/SVG, not screenshots of real apps.

The theme button supports light and dark appearance and remembers the selection locally. The page is responsive and includes keyboard focus states and reduced-motion support. The folder can be hosted as a static site after the real content is ready.

## Public hosting

Repository: https://github.com/cl-coraje/cl-coraje.github.io

Target website: https://cl-coraje.github.io/

Deploy through GitHub Pages from the master branch, root directory. The .nojekyll file enables plain static serving. Content is currently a clearly labeled design preview; replace the sample publications and apps before treating it as a complete academic profile.
