
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

async function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  const input = document.getElementById('search-modal-input');
  input.focus();
  await loadIndex();
  runSearch(input.value || '');
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
}

function scoreToken(text, token) {
  // Word-boundary aware token match without regex; returns 0 when the token does not appear.
  if (!text || !token) return 0;
  text = String(text).toLowerCase();
  token = token.toLowerCase();
  if (text === token) return 100;
  if (text.startsWith(token)) return 70;
  const idx = text.indexOf(token);
  if (idx === -1) return 0;
  // Word boundary: char before match is not alphanumeric.
  const prev = idx === 0 ? ' ' : text.charAt(idx - 1);
  if (!/[a-z0-9]/.test(prev)) return 55;
  return 25;
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
}

function runSearch(q) {
  const wrap = document.getElementById('search-results');
  q = (q || '').trim();
  // No index yet - short message, no auto-focused link so Enter is safe.
  if (!SEARCH_INDEX.length) {
    wrap.innerHTML = '<div class="search-empty">Loading search index…</div>';
    searchFocusedIdx = -1;
    return;
  }
  // Empty query - no results, just a hint. No auto-focused link.
  if (q.length < 2) {
    wrap.innerHTML = '<div class="search-empty">Start typing to search 112 articles</div>';
    searchFocusedIdx = -1;
    return;
  }
  // Tokenize on whitespace so multi-word queries ("stedi era") match records
  // that contain both tokens across title/section/tags/body.
  const tokens = q.toLowerCase().split(/\s+/).filter(t => t.length >= 2);
  if (!tokens.length) {
    wrap.innerHTML = '<div class="search-empty">Start typing to search 112 articles</div>';
    searchFocusedIdx = -1;
    return;
  }
  const ranked = SEARCH_INDEX.map(r => {
    let total = 0, allTokensHit = true;
    for (const tk of tokens) {
      const tScore = scoreToken(r.title, tk) * 3
                   + scoreToken(r.section || '', tk) * 0.6
                   + (r.tags || []).reduce((acc, t) => acc + scoreToken(t, tk), 0) * 1.2
                   + scoreToken(r.body_excerpt || '', tk) * 0.4;
      if (tScore === 0) { allTokensHit = false; break; }
      total += tScore;
    }
    return { ...r, _score: allTokensHit ? total : 0 };
  })
  .filter(r => r._score > 0)
  .sort((a, b) => b._score - a._score)
  .slice(0, 12);
  if (!ranked.length) {
    wrap.innerHTML = `<div class="search-empty">No matches for "${escapeHtml(q)}"</div>`;
    searchFocusedIdx = -1;
    return;
  }
  wrap.innerHTML = ranked.map((r, i) =>
    `<a class="search-result${i === 0 ? ' focused' : ''}" href="${escapeHtml(r.url)}" data-idx="${i}">
      <div class="search-result-title">${escapeHtml(r.title)}</div>
      <div class="search-result-meta">${escapeHtml(r.section || '')} · ${escapeHtml(r.type || 'article')}${r.estimated_minutes ? ' · ' + r.estimated_minutes + ' min' : ''}</div>
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
