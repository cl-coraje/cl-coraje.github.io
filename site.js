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
function renderAuthors(authors) {
  return authors.split(';').map((author) => {
    const name = author.trim();
    return name === content.englishName ? `<strong>${escapeHtml(name)}</strong>` : escapeHtml(name);
  }).join('; ');
}
function renderLanguage() {
  content = language === 'en' ? window.portfolioContentEn : window.portfolioContent;
  const t = window.portfolioUI[language];
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  const text = (selector, value) => { document.querySelector(selector).textContent = value; };
  text('.skip-link', t.skip);
  document.querySelector('.monogram').setAttribute('aria-label', t.home);
  document.querySelector('nav').setAttribute('aria-label', t.nav);
  for (const [anchor, key] of [['about','about'],['publications','papers'],['apps','apps'],['connect','contact']]) text(`nav a[href="#${anchor}"]`, t[key]);
  document.querySelector('#intro-heading').innerHTML = `${escapeHtml(t.headline[0])}<br>${escapeHtml(t.headline[1])}<span class="accent">${t.punctuation}</span>`;
  document.querySelector('.text-link').innerHTML = `${escapeHtml(t.explore)} <span aria-hidden="true">↗</span>`;
  document.querySelector('.affiliation').innerHTML = `<i></i>${escapeHtml(t.affiliation)}`;
  for (const [id, key] of [['publications-heading','publications'],['apps-heading','appsHeading'],['connect-heading','connectHeading']]) document.getElementById(id).innerHTML = `${escapeHtml(t[key])}<span>.</span>`;
  text('.side-panel h2', t.keywords);
  text('.side-panel > p', t.keywordsIntro);
  document.querySelector('.interests').innerHTML = t.interests.map(word => `<span>${escapeHtml(word)}</span>`).join('');
  text('.now-panel h2', t.research);
  text('.connect-section p', t.connectIntro);
  text('.footer a', t.top);
  document.querySelector('.avatar img').alt = t.avatar;
  document.querySelector('.visual-strip').setAttribute('aria-label', t.art);
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelector('meta[name="description"]').content = content.bio;
  document.querySelector('meta[property="og:description"]').content = content.bio;
  document.querySelector('meta[property="og:title"]').content = t.title;
document.querySelector('#profile-name').innerHTML = language === "en" ? `${escapeHtml(content.englishName)} <span>/ ${escapeHtml(content.name)}</span>` : `${escapeHtml(content.name)} <span>/ ${escapeHtml(content.englishName)}</span>`;
document.querySelector('#profile-bio').textContent = content.bio;
document.querySelector('#profile-focus').textContent = content.focus;
document.querySelector('.monogram').innerHTML = `${escapeHtml(content.initials.slice(0, 1))}<span>.</span>`;
document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} ${content.englishName || content.name}`;
document.title = t.title;
document.querySelector('#publications .section-count').textContent = `${content.papers.length} ${t.count}`;
document.querySelector('#paper-list').innerHTML = content.papers.map((paper) => `
  <article class="paper">
    <div class="paper-year">${escapeHtml(paper.year)}</div>
    <div>
      <div class="paper-venue">${escapeHtml(paper.venue)}</div>
      <h3>${escapeHtml(paper.title)}</h3>
      <p class="paper-authors">${renderAuthors(paper.authors)}</p>
      ${paper.role ? `<span class="paper-role">${escapeHtml(paper.role)}</span>` : ''}
      <p class="paper-description">${escapeHtml(paper.description)}</p>
      ${paper.contribution ? `<p class="paper-contribution"><strong>${escapeHtml(t.contribution)}</strong> · ${escapeHtml(paper.contribution)}</p>` : ''}
      <div class="paper-links">${paper.links.map((link) => resourceLink(link.label, link.url)).join('')}</div>
    </div>
  </article>`).join('');
document.querySelector('#app-list').innerHTML = content.apps.length ? content.apps.map((app) => `
  <article class="app-card">
    <div class="app-top"><span class="app-icon ${['mint', 'lavender', 'peach'].includes(app.color) ? app.color : 'mint'}" aria-hidden="true">${escapeHtml(app.icon)}</span><span class="eyebrow">${escapeHtml(app.category)}</span></div>
    <h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.description)}</p>
    <div class="app-bottom"><span>${escapeHtml(app.platform)}</span>${resourceLink(t.viewApp, app.url)}</div>
  </article>`).join('') : `<div class="app-empty"><span class="app-icon mint" aria-hidden="true">✳</span><div><h3>${escapeHtml(t.appTitle)}</h3><p>${escapeHtml(t.appEmpty)}</p></div></div>`;
document.querySelector('#social-list').innerHTML = content.socials.filter((social) => safeUrl(social.url)).map((social) => `
  <a class="social" href="${escapeHtml(safeUrl(social.url))}" target="_blank" rel="noopener noreferrer">
    <span class="social-icon" aria-hidden="true">${escapeHtml(social.icon)}</span>
    <span><strong>${escapeHtml(social.name)}</strong><small>${escapeHtml(social.detail)}</small></span>
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
