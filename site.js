const content = window.portfolioContent;
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
document.querySelector('#profile-name').innerHTML = `${escapeHtml(content.name)} <span>/ ${escapeHtml(content.englishName)}</span>`;
document.querySelector('#profile-bio').textContent = content.bio;
document.querySelector('#profile-focus').textContent = content.focus;
document.querySelector('.monogram').innerHTML = `${escapeHtml(content.initials.slice(0, 1))}<span>.</span>`;
document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} ${content.englishName || content.name}`;
document.title = `${content.name} · ${content.englishName} | 运筹优化与算法研究`;
document.querySelector('#publications .section-count').textContent = `${content.papers.length} 篇代表性论文`;
document.querySelector('#paper-list').innerHTML = content.papers.map((paper) => `
  <article class="paper">
    <div class="paper-year">${escapeHtml(paper.year)}</div>
    <div>
      <div class="paper-venue">${escapeHtml(paper.venue)}</div>
      <h3>${escapeHtml(paper.title)}</h3>
      <p class="paper-authors">${renderAuthors(paper.authors)}</p>
      ${paper.role ? `<span class="paper-role">${escapeHtml(paper.role)}</span>` : ''}
      <p class="paper-description">${escapeHtml(paper.description)}</p>
      ${paper.contribution ? `<p class="paper-contribution"><strong>本人贡献</strong> · ${escapeHtml(paper.contribution)}</p>` : ''}
      <div class="paper-links">${paper.links.map((link) => resourceLink(link.label, link.url)).join('')}</div>
    </div>
  </article>`).join('');
document.querySelector('#experience-list').innerHTML = content.experience.map((item) => `
  <article class="experience-item${item.current ? ' current' : ''}">
    <div class="experience-period">${escapeHtml(item.period)}</div>
    <h3>${escapeHtml(item.institution)}</h3>
    <span class="experience-degree">${escapeHtml(item.degree)}</span>
    <p>${escapeHtml(item.field)}</p>
  </article>`).join('');
document.querySelector('#app-list').innerHTML = content.apps.length ? content.apps.map((app) => `
  <article class="app-card">
    <div class="app-top"><span class="app-icon ${['mint', 'lavender', 'peach'].includes(app.color) ? app.color : 'mint'}" aria-hidden="true">${escapeHtml(app.icon)}</span><span class="eyebrow">${escapeHtml(app.category)}</span></div>
    <h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.description)}</p>
    <div class="app-bottom"><span>${escapeHtml(app.platform)}</span>${resourceLink('查看作品', app.url)}</div>
  </article>`).join('') : '<div class="app-empty"><span class="app-icon mint" aria-hidden="true">✳</span><div><h3>App 作品</h3><p>暂无公开展示的 App，后续将在这里更新。</p></div></div>';
document.querySelector('#social-list').innerHTML = content.socials.filter((social) => safeUrl(social.url)).map((social) => `
  <a class="social" href="${escapeHtml(safeUrl(social.url))}" target="_blank" rel="noopener noreferrer">
    <span class="social-icon" aria-hidden="true">${escapeHtml(social.icon)}</span>
    <span><strong>${escapeHtml(social.name)}</strong><small>${escapeHtml(social.detail)}</small></span>
    <span class="social-arrow" aria-hidden="true">↗</span>
  </a>`).join('');
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', dark ? '切换为浅色主题' : '切换为深色主题');
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works without storage. */ }
  updateThemeLabel();
});
updateThemeLabel();
