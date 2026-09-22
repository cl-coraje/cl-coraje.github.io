const content = window.portfolioContent;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
}
function resourceLink(label, url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>` : `<span class="pending-link" title="添加真实链接后可访问">${escapeHtml(label)} <span aria-hidden="true">↗</span></span>`;
}
document.querySelector('#profile-name').innerHTML = `${escapeHtml(content.name)} <span>/ ${escapeHtml(content.englishName)}</span>`;
document.querySelector('#profile-bio').textContent = content.bio;
document.querySelector('#profile-focus').textContent = content.focus;
document.querySelector('.avatar').textContent = content.initials;
document.querySelector('.monogram').innerHTML = `${escapeHtml(content.initials.slice(0, 1))}<span>.</span>`;
document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} ${content.englishName || content.name}`;
document.title = `${content.name} · 科研与创作${content.isPreview ? ' · 设计预览' : ''}`;
document.querySelector('#paper-list').innerHTML = content.papers.map((paper) => `<article class="paper"><div class="paper-year">${escapeHtml(paper.year)}</div><div><div class="paper-venue">${escapeHtml(paper.venue)}</div><h3>${escapeHtml(paper.title)}</h3><p class="paper-authors">${escapeHtml(paper.authors)}</p><p class="paper-description">${escapeHtml(paper.description)}</p><div class="paper-links">${paper.links.map((link) => resourceLink(link.label, link.url)).join('')}</div></div></article>`).join('');
document.querySelector('#app-list').innerHTML = content.apps.map((app) => `<article class="app-card"><div class="app-top"><span class="app-icon ${['mint', 'lavender', 'peach'].includes(app.color) ? app.color : 'mint'}" aria-hidden="true">${escapeHtml(app.icon)}</span><span class="eyebrow">${escapeHtml(app.category)}</span></div><h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.description)}</p><div class="app-bottom"><span>${escapeHtml(app.platform)}</span>${resourceLink(safeUrl(app.url) ? '查看作品' : '链接待补充', app.url)}</div></article>`).join('');
document.querySelector('#social-list').innerHTML = content.socials.map((social) => { const safe = safeUrl(social.url); const inner = `<span class="social-icon" aria-hidden="true">${escapeHtml(social.icon)}</span><span><strong>${escapeHtml(social.name)}</strong><small>${escapeHtml(social.detail)}${safe ? '' : ' · 待添加'}</small></span><span class="social-arrow" aria-hidden="true">↗</span>`; return safe ? `<a class="social" href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<div class="social pending-social">${inner}</div>`; }).join('');
if (!content.isPreview) document.querySelectorAll('.preview-note, .section-note, .now-panel .subtle').forEach((element) => element.remove());
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() { const dark = document.documentElement.dataset.theme === 'dark'; themeButton.setAttribute('aria-label', dark ? '切换为浅色主题' : '切换为深色主题'); }
themeButton.addEventListener('click', () => { const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works without storage. */ } updateThemeLabel(); });
updateThemeLabel();
