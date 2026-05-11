
// ---------- Cmd+K search ----------
let SEARCH_INDEX = [];
let searchFocusedIdx = 0;

async function loadIndex() {
  if (SEARCH_INDEX.length) return;
  try {
    const r = await fetch('/medipyxis-help/search-index.json');
    SEARCH_INDEX = await r.json();
  } catch (e) {
    console.warn('search index unavailable', e);
  }
}

function openSearch() {
  loadIndex();
  document.getElementById('search-overlay').classList.add('open');
  document.getElementById('search-modal-input').focus();
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
}

function scoreMatch(text, q) {
  if (!text) return 0;
  text = text.toLowerCase();
  q = q.toLowerCase();
  if (text === q) return 100;
  if (text.startsWith(q)) return 70;
  if (text.includes(q)) return 40;
  return 0;
}

function runSearch(q) {
  const wrap = document.getElementById('search-results');
  if (!q || q.length < 2) {
    // Show top suggestions
    const popular = SEARCH_INDEX.slice(0, 8);
    wrap.innerHTML = popular.map((r, i) =>
      `<a class="search-result${i === 0 ? ' focused' : ''}" href="${r.url}" data-idx="${i}">
        <div class="search-result-title">${r.title}</div>
        <div class="search-result-meta">${r.section || ''} · ${r.type || 'article'}</div>
      </a>`
    ).join('') || '<div class="search-empty">Start typing to search 82 articles</div>';
    searchFocusedIdx = 0;
    return;
  }
  const ranked = SEARCH_INDEX.map(r => {
    const s = scoreMatch(r.title, q) * 3
            + scoreMatch(r.section || '', q)
            + (r.tags || []).reduce((acc, t) => acc + scoreMatch(t, q), 0)
            + scoreMatch(r.body_excerpt || '', q) * 0.5;
    return { ...r, _score: s };
  })
  .filter(r => r._score > 0)
  .sort((a, b) => b._score - a._score)
  .slice(0, 12);
  if (!ranked.length) {
    wrap.innerHTML = `<div class="search-empty">No matches for "${q}"</div>`;
    return;
  }
  wrap.innerHTML = ranked.map((r, i) =>
    `<a class="search-result${i === 0 ? ' focused' : ''}" href="${r.url}" data-idx="${i}">
      <div class="search-result-title">${r.title}</div>
      <div class="search-result-meta">${r.section || ''} · ${r.type || 'article'}${r.estimated_minutes ? ' · ' + r.estimated_minutes + ' min' : ''}</div>
    </a>`
  ).join('');
  searchFocusedIdx = 0;
}

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape' && document.getElementById('search-overlay').classList.contains('open')) {
    closeSearch();
  }
  if (document.getElementById('search-overlay').classList.contains('open')) {
    const results = document.querySelectorAll('.search-result');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchFocusedIdx = Math.min(results.length - 1, searchFocusedIdx + 1);
      updateFocus(results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchFocusedIdx = Math.max(0, searchFocusedIdx - 1);
      updateFocus(results);
    } else if (e.key === 'Enter') {
      const focused = document.querySelector('.search-result.focused');
      if (focused) {
        window.location.href = focused.getAttribute('href');
      }
    }
  }
});
function updateFocus(results) {
  results.forEach((r, i) => r.classList.toggle('focused', i === searchFocusedIdx));
  const focused = results[searchFocusedIdx];
  if (focused) focused.scrollIntoView({ block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Header search button
  const headerSearch = document.getElementById('header-search-input');
  if (headerSearch) {
    headerSearch.addEventListener('focus', (e) => { e.target.blur(); openSearch(); });
    headerSearch.addEventListener('click', () => openSearch());
  }
  const homeSearch = document.getElementById('home-search-input');
  if (homeSearch) {
    homeSearch.addEventListener('focus', (e) => { e.target.blur(); openSearch(); });
    homeSearch.addEventListener('click', () => openSearch());
  }
  const overlay = document.getElementById('search-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });
  }
  const input = document.getElementById('search-modal-input');
  if (input) {
    input.addEventListener('input', (e) => runSearch(e.target.value));
    runSearch('');
  }

  // Copy as Markdown action
  const copyBtn = document.getElementById('copy-md');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const url = copyBtn.dataset.mdUrl;
      try {
        const r = await fetch(url);
        const text = await r.text();
        await navigator.clipboard.writeText(text);
        copyBtn.querySelector('.label').textContent = 'Copied';
        setTimeout(() => { copyBtn.querySelector('.label').textContent = 'Copy as Markdown'; }, 1600);
      } catch (e) {
        alert('Could not copy. URL: ' + url);
      }
    });
  }
});
