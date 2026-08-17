import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../');

async function build() {
  const finalDataset = JSON.parse(await fs.readFile(path.join(ROOT_DIR, 'data/final_dataset.json'), 'utf-8'));
  const fullAnalysis = JSON.parse(await fs.readFile(path.join(ROOT_DIR, 'data/analysis/full_analysis.json'), 'utf-8'));
  const humanAudit = JSON.parse(await fs.readFile(path.join(ROOT_DIR, 'data/human_verification.json'), 'utf-8'));

  const jsCode = `/**
 * Interactive Application Engine for 100-App SaaS Integration Case Study
 * Self-contained data bundle compiled on ${new Date().toISOString()}
 */

const APPS_DATA = ${JSON.stringify(finalDataset, null, 2)};
const ANALYSIS_DATA = ${JSON.stringify(fullAnalysis, null, 2)};
const HUMAN_AUDIT_DATA = ${JSON.stringify(humanAudit, null, 2)};

// State
let filteredApps = [...APPS_DATA];
let sortField = 'name';
let sortDirection = 'asc';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initInsights();
  initMatrix();
  initHumanAudit();
  initCatalog();
  initArchitectureTabs();
  initExport();
  initKeyboardShortcuts();
});

/* ==========================================================================
   1. Render 5 Strategic Insights
   ========================================================================== */
function initInsights() {
  const container = document.getElementById('insightsList');
  if (!container || !ANALYSIS_DATA.insights) return;

  container.innerHTML = ANALYSIS_DATA.insights.map(item => {
    const evidencePills = item.evidence_apps.map(app => 
      \`<button class="app-pill-tag" onclick="filterByAppName('\${app}')">\${app}</button>\`
    ).join('');

    return \`
      <div class="insight-card">
        <div class="insight-header">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="insight-num-badge">PATTERN 0\${item.id}</span>
            <h4 class="insight-headline">\${item.title}</h4>
          </div>
          <span class="insight-metric-tag">\${item.metric}</span>
        </div>
        <p class="insight-summary">\${item.summary}</p>
        <div class="insight-implication">
          <strong>Strategic Takeaway:</strong> \${item.implication_for_composio}
        </div>
        <div class="insight-evidence-tags">
          <span>Evidence Case Studies:</span>
          \${evidencePills}
        </div>
      </div>
    \`;
  }).join('');
}

/* ==========================================================================
   2. Render Category x Buildability Opportunity Matrix
   ========================================================================== */
function initMatrix() {
  const tbody = document.getElementById('matrixTableBody');
  if (!tbody || !ANALYSIS_DATA.cross_tabs) return;

  const matrix = ANALYSIS_DATA.cross_tabs.category_x_buildability;
  const categories = Object.keys(matrix);

  tbody.innerHTML = categories.map(cat => {
    const row = matrix[cat];
    const getHeatClass = (val, type) => {
      if (val === 0) return 'heat-0';
      if (type === 'gated' && val > 0) return 'heat-gated';
      if (val >= 8) return 'heat-high';
      if (val >= 4) return 'heat-mid';
      return 'heat-low';
    };

    let dominantPattern = 'Mixed Friction';
    if (row['Easy Win'] >= 8) dominantPattern = '🚀 Frictionless Win';
    else if (row['Gated / Outreach'] >= 3) dominantPattern = '🔒 Heavy Enterprise Gating';
    else if (row['Buildable'] >= 4) dominantPattern = '⚙ OAuth Standard';

    return \`
      <tr>
        <td><strong>\${cat}</strong></td>
        <td><span class="heat-cell \${getHeatClass(row['Easy Win'], 'easy')}">\${row['Easy Win']}</span></td>
        <td><span class="heat-cell \${getHeatClass(row['Buildable'], 'buildable')}">\${row['Buildable']}</span></td>
        <td><span class="heat-cell \${getHeatClass(row['Needs Investigation'], 'investigate')}">\${row['Needs Investigation']}</span></td>
        <td><span class="heat-cell \${getHeatClass(row['Gated / Outreach'], 'gated')}">\${row['Gated / Outreach']}</span></td>
        <td><span class="heat-cell \${getHeatClass(row['Not Practical'], 'notpractical')}">\${row['Not Practical']}</span></td>
        <td><span class="badge badge-cat">\${dominantPattern}</span></td>
      </tr>
    \`;
  }).join('');
}

/* ==========================================================================
   3. Render Human Verification Stratified Sample Audit Table
   ========================================================================== */
function initHumanAudit() {
  const tbody = document.getElementById('humanAuditTableBody');
  if (!tbody || !HUMAN_AUDIT_DATA.sample_details) return;

  tbody.innerHTML = HUMAN_AUDIT_DATA.sample_details.map(item => {
    const pass1Pct = Math.round((item.pass1_correct / item.claims) * 100);
    const pass2Pct = Math.round((item.pass2_correct / item.claims) * 100);

    return \`
      <tr>
        <td><strong>\${item.app}</strong></td>
        <td><span class="badge badge-cat">\${item.category || getAppCategory(item.app)}</span></td>
        <td>\${item.tier}</td>
        <td>\${item.claims} / 8 claims</td>
        <td><span class="\${pass1Pct < 100 ? 'text-danger' : 'text-emerald'}">\${pass1Pct}%</span> (\${item.pass1_errors} err)</td>
        <td><span class="text-emerald font-bold">\${pass2Pct}%</span> (0 err)</td>
        <td style="font-size:0.82rem; color:#94a3b8;">\${item.note}</td>
      </tr>
    \`;
  }).join('');
}

function getAppCategory(appName) {
  const found = APPS_DATA.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  return found ? found.app.category : 'General';
}

/* ==========================================================================
   4. 100-App Searchable, Filterable, Sortable Catalog
   ========================================================================== */
function initCatalog() {
  const searchInput = document.getElementById('appSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const categoryFilter = document.getElementById('categoryFilter');
  const verdictFilter = document.getElementById('verdictFilter');
  const authFilter = document.getElementById('authFilter');
  const mcpFilter = document.getElementById('mcpFilter');

  const applyFilters = () => {
    const query = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    const verdict = verdictFilter.value;
    const auth = authFilter.value;
    const mcp = mcpFilter.value;

    clearBtn.style.display = query ? 'block' : 'none';

    filteredApps = APPS_DATA.filter(item => {
      // Search
      if (query) {
        const matchName = item.app.name.toLowerCase().includes(query);
        const matchCat = item.app.category.toLowerCase().includes(query);
        const matchDesc = item.app.description.toLowerCase().includes(query);
        const matchAuth = item.authentication.methods.some(m => m.toLowerCase().includes(query));
        const matchVerdict = item.buildability.verdict.toLowerCase().includes(query);
        if (!matchName && !matchCat && !matchDesc && !matchAuth && !matchVerdict) return false;
      }

      // Category
      if (cat !== 'ALL' && item.app.category !== cat) return false;

      // Verdict
      if (verdict !== 'ALL' && item.buildability.verdict !== verdict) return false;

      // Auth
      if (auth !== 'ALL' && !item.authentication.methods.includes(auth)) return false;

      // MCP
      if (mcp !== 'ALL') {
        if (mcp === 'available' && !item.mcp.available) return false;
        if (mcp === 'First-party' && (item.mcp.type !== 'First-party' || !item.mcp.available)) return false;
        if (mcp === 'Community' && (item.mcp.type !== 'Community' || !item.mcp.available)) return false;
        if (mcp === 'None' && item.mcp.available) return false;
      }

      return true;
    });

    sortAndRenderApps();
  };

  searchInput.addEventListener('input', applyFilters);
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    applyFilters();
    searchInput.focus();
  });

  categoryFilter.addEventListener('change', applyFilters);
  verdictFilter.addEventListener('change', applyFilters);
  authFilter.addEventListener('change', applyFilters);
  mcpFilter.addEventListener('change', applyFilters);

  // Sorting
  document.querySelectorAll('.app-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const field = th.dataset.sort;
      if (sortField === field) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortField = field;
        sortDirection = 'asc';
      }
      updateSortIndicators();
      sortAndRenderApps();
    });
  });

  // Modal setup
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeModal();
  });

  sortAndRenderApps();
}

function updateSortIndicators() {
  document.querySelectorAll('.app-table th.sortable').forEach(th => {
    const indicator = th.querySelector('.sort-indicator');
    if (th.dataset.sort === sortField) {
      indicator.textContent = sortDirection === 'asc' ? ' ▲' : ' ▼';
      th.style.color = '#00d4ff';
    } else {
      indicator.textContent = '';
      th.style.color = '';
    }
  });
}

function sortAndRenderApps() {
  filteredApps.sort((a, b) => {
    let valA = '';
    let valB = '';

    if (sortField === 'name') {
      valA = a.app.name.toLowerCase();
      valB = b.app.name.toLowerCase();
    } else if (sortField === 'category') {
      valA = a.app.category.toLowerCase();
      valB = b.app.category.toLowerCase();
    } else if (sortField === 'verdict') {
      valA = a.buildability.verdict;
      valB = b.buildability.verdict;
    }

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  renderAppsTable();
}

function renderAppsTable() {
  const tbody = document.getElementById('appsTableBody');
  const countEl = document.getElementById('displayedCount');
  if (!tbody) return;

  countEl.textContent = filteredApps.length;

  if (filteredApps.length === 0) {
    tbody.innerHTML = \`
      <tr>
        <td colspan="9" style="text-align:center; padding: 40px; color:#64748b;">
          No matching SaaS platforms found. Try clearing your filters.
        </td>
      </tr>
    \`;
    return;
  }

  tbody.innerHTML = filteredApps.map(item => {
    const authBadges = item.authentication.methods.map(m => \`<span class="badge badge-auth">\${m}</span>\`).join('');
    
    // Verdict Badge
    let verdictClass = 'badge-verdict-buildable';
    if (item.buildability.verdict === 'Easy Win') verdictClass = 'badge-verdict-easy';
    else if (item.buildability.verdict === 'Needs Investigation') verdictClass = 'badge-verdict-investigate';
    else if (item.buildability.verdict === 'Gated / Outreach') verdictClass = 'badge-verdict-gated';
    else if (item.buildability.verdict === 'Not Practical') verdictClass = 'badge-verdict-notpractical';

    // MCP Badge
    let mcpBadge = '<span class="badge badge-mcp-none">None</span>';
    if (item.mcp.available) {
      if (item.mcp.type === 'First-party') mcpBadge = '<span class="badge badge-mcp-first">1st-Party MCP</span>';
      else mcpBadge = '<span class="badge badge-mcp-comm">Community</span>';
    }

    // Access Setup
    const setupText = item.authentication.self_serve 
      ? \`<span style="color:#10b981; font-weight:600;">\${item.authentication.credential_setup}</span>\`
      : \`<span style="color:#f43f5e; font-weight:600;">🔒 \${item.authentication.credential_setup}</span>\`;

    return \`
      <tr class="clickable-row" onclick="openAppDetail('\${escapeHtml(item.app.name)}')">
        <td>
          <div class="app-name-cell">
            <span>\${item.app.name}</span>
          </div>
        </td>
        <td><span class="badge badge-cat">\${item.app.category}</span></td>
        <td style="color:#94a3b8; font-size:0.85rem; max-width:260px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">\${item.app.description}</td>
        <td>\${authBadges}</td>
        <td>\${setupText}</td>
        <td><span class="badge badge-cat">\${item.api.type}</span></td>
        <td>\${mcpBadge}</td>
        <td><span class="badge \${verdictClass}">\${item.buildability.verdict}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openAppDetail('\${escapeHtml(item.app.name)}')">
            Inspect Evidence
          </button>
        </td>
      </tr>
    \`;
  }).join('');
}

/* ==========================================================================
   5. Evidence & Detail Modal
   ========================================================================== */
window.openAppDetail = function(appName) {
  const item = APPS_DATA.find(a => a.app.name.toLowerCase() === appName.toLowerCase());
  if (!item) return;

  document.getElementById('modalAppName').textContent = item.app.name;
  document.getElementById('modalAppCategory').textContent = item.app.category;

  const modalBody = document.getElementById('modalBody');

  const snippetsHtml = item.evidence.snippets.map(s => \`
    <div class="modal-snippet-card">
      <div class="modal-snippet-claim">✔ \${s.claim}</div>
      <div class="modal-snippet-quote">"\${s.quote}"</div>
      <div class="modal-snippet-source">Source: \${s.source}</div>
    </div>
  \`).join('');

  const urlsHtml = item.evidence.urls.map(url => \`
    <li><a href="\${url}" target="_blank" rel="noopener noreferrer">↗ \${url}</a></li>
  \`).join('');

  modalBody.innerHTML = \`
    <p style="font-size:1.05rem; color:#f8fafc; margin-bottom:16px;">\${item.app.description}</p>

    <div class="modal-grid-2">
      <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">Authentication Architecture</div>
        <div style="font-size:0.95rem; font-weight:600; color:#e2e8f0; margin-top:4px;">
          \${item.authentication.methods.join(', ')}
        </div>
        <div style="font-size:0.85rem; color:#94a3b8; margin-top:2px;">
          Setup: <strong>\${item.authentication.credential_setup}</strong> (\${item.authentication.self_serve ? 'Self-serve' : 'Gated'})
        </div>
        \${item.authentication.gating_reason ? \`<div style="font-size:0.8rem; color:#f43f5e; margin-top:4px;">Gating: \${item.authentication.gating_reason}</div>\` : ''}
      </div>

      <div style="background:rgba(255,255,255,0.02); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">API Surface & MCP</div>
        <div style="font-size:0.95rem; font-weight:600; color:#e2e8f0; margin-top:4px;">
          \${item.api.type} (\${item.api.breadth})
        </div>
        <div style="font-size:0.85rem; color:#94a3b8; margin-top:2px;">
          Write Ops: \${item.api.write_operations ? '✔ Supported' : '✖ None'} • Webhooks: \${item.api.webhooks ? '✔ Supported' : '✖ None'}
        </div>
        <div style="font-size:0.85rem; color:#c084fc; margin-top:2px;">
          MCP: \${item.mcp.available ? \`\${item.mcp.type} (\${item.mcp.source_url ? \`<a href="\${item.mcp.source_url}" target="_blank">Repository</a>\` : 'Registered'})\` : 'No MCP Server'}
        </div>
      </div>
    </div>

    \${item.buildability.primary_blocker ? \`
      <div style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.25); padding:12px 16px; border-radius:8px; margin-bottom:16px;">
        <strong style="color:#fbbf24; font-size:0.85rem;">Primary Integration Barrier:</strong>
        <p style="font-size:0.88rem; color:#fde68a; margin-top:2px;">\${item.buildability.primary_blocker}</p>
      </div>
    \` : ''}

    <div class="modal-section-title">Verified Documentation Evidence</div>
    \${snippetsHtml}

    <div class="modal-section-title">Official Reference URLs</div>
    <ul class="modal-urls-list">
      \${urlsHtml}
    </ul>
  \`;

  document.getElementById('detailModal').style.display = 'flex';
};

window.closeModal = function() {
  document.getElementById('detailModal').style.display = 'none';
};

window.filterByAppName = function(appName) {
  const searchInput = document.getElementById('appSearchInput');
  if (!searchInput) return;
  searchInput.value = appName;
  const event = new Event('input', { bubbles: true });
  searchInput.dispatchEvent(event);
  
  const catalogSection = document.getElementById('catalog');
  if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
};

/* ==========================================================================
   6. Architecture Tabs
   ========================================================================== */
function initArchitectureTabs() {
  const tabs = document.querySelectorAll('.arch-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.arch-tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. Export & Downloads
   ========================================================================== */
function initExport() {
  const exportBtn = document.getElementById('exportJsonBtn');
  const downloadBtn = document.getElementById('downloadFinalJsonBtn');

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(APPS_DATA, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'final_dataset_100_apps.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (exportBtn) exportBtn.addEventListener('click', downloadJson);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadJson);
}

/* ==========================================================================
   8. Keyboard Shortcuts
   ========================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('appSearchInput');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
`;

  await fs.writeFile(path.join(ROOT_DIR, 'case-study/app.js'), jsCode, 'utf-8');
  console.log('Successfully compiled case-study/app.js with embedded data bundle!');
}

build();
