let content = window.portfolioContent;
let language = "zh";
try { if (localStorage.getItem("portfolio-language") === "en") language = "en"; } catch { /* Chinese remains the default. */ }
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
}
function resourceLink(label, url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>` : '';
}
const page = document.body.dataset.page || 'about';
function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}
function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}
function renderLanguage() {
  content = language === 'en' ? window.portfolioContentEn : window.portfolioContent;
  const t = window.portfolioUI[language];
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  const text = setText;
  text('.skip-link', t.skip);
  document.querySelector('.profile-home').setAttribute('aria-label', `${language === 'en' ? content.englishName : content.name} · ${t.home}`);
  document.querySelector('nav').setAttribute('aria-label', t.nav);
  for (const [key, label] of [['about','about'],['publications','papers'],['apps','apps'],['contact','contact']]) text(`nav a[data-nav="${key}"]`, t[label]);
  setHtml('#intro-heading', `${escapeHtml(t.headline[0])}<br>${escapeHtml(t.headline[1])}`);
  for (const [id, key] of [['publications-heading','publications'],['apps-heading','appsHeading'],['connect-heading','connectHeading']]) setHtml(`#${id}`, `${escapeHtml(t[key])}`);
  document.querySelector('.avatar img')?.setAttribute('alt', t.avatar);
  document.querySelector('.visual-strip')?.setAttribute('aria-label', t.art);
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  const pageLabel = t[{about:'about', publications:'publications', apps:'appTitle', contact:'contact'}[page]];
  const title = `${pageLabel} · ${language === "en" ? content.englishName : content.name}`;
  const description = {about:content.bio, publications:content.focus, apps:t.appEmpty, contact:t.connectIntro}[page];
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
setText('#profile-name', language === "en" ? content.englishName : content.name);
setText('#profile-bio', content.bio);
setText('#copyright', `© ${new Date().getFullYear()} ${content.englishName || content.name}`);
document.title = title;
if (page === 'publications') document.querySelector('#paper-list').innerHTML = content.papers.map((paper) => `
  <article class="paper">
    <div class="paper-year">${escapeHtml(paper.year)}</div>
    <div>
      <h3>${escapeHtml(paper.title)}</h3>
      <div class="paper-links">${paper.links.map((link) => resourceLink(link.label, link.url)).join('')}</div>
    </div>
  </article>`).join('');
if (page === 'apps') document.querySelector('#app-list').innerHTML = content.apps.length ? content.apps.map((app) => `
  <article class="app-card">
    <div class="app-top"><span class="app-icon ${['mint', 'lavender', 'peach'].includes(app.color) ? app.color : 'mint'}" aria-hidden="true">${escapeHtml(app.icon)}</span></div>
    <h3>${escapeHtml(app.name)}</h3>
    <div class="app-bottom">${resourceLink(t.viewApp, app.url)}</div>
  </article>`).join('') : '';
if (page === 'contact') document.querySelector('#social-list').innerHTML = content.socials.filter((social) => safeUrl(social.url)).map((social) => `
  <a class="social" href="${escapeHtml(safeUrl(social.url))}" target="_blank" rel="noopener noreferrer">
    <span class="social-icon" aria-hidden="true">${escapeHtml(social.icon)}</span>
    <span><strong>${escapeHtml(social.name)}</strong></span>
    <span class="social-arrow" aria-hidden="true">↗</span>
  </a>`).join('');
  updateThemeLabel();
}
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = window.portfolioUI[language][dark ? 'light' : 'dark'];
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works without storage. */ }
  updateThemeLabel();
});
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    language = button.dataset.language;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Switching still works without storage. */ }
    renderLanguage();
  });
});
renderLanguage();
