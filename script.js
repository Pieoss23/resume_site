/* ============================================
   PORTFOLIO TERMINAL — SCRIPT
   Logica principale: navigazione, rendering
   Markdown, typing, download, tema
   ============================================ */

// ---- CONFIGURATION ----
const CONFIG = {
  user: 'user',
  host: 'portfolio',
  path: '~',
  typingSpeed: 42,       // ms per carattere nell'effetto typing
  cvFile: 'cv.md',
};

// ---- DOM ELEMENTS ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const views = {
  home:     $('#view-home'),
  cv:       $('#view-cv'),
  download: $('#view-download'),
  contact:  $('#view-contact'),
  help:     $('#view-help'),
};

const cvContent   = $('#cv-render');
const inputField  = $('#terminal-input');
const themeToggle = $('#theme-toggle');
const statusView  = $('#status-view');

// ---- STATE ----
let currentView = 'home';
let cvMarkdown = '';

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadCV();
  setupNavigation();
  setupInput();
  setupTheme();
  runTypingAnimation();
});

// ============================================
// LOAD & RENDER CV (Markdown)
// ============================================
async function loadCV() {
  try {
    const res = await fetch(CONFIG.cvFile);
    if (!res.ok) throw new Error('CV non trovato');
    cvMarkdown = await res.text();
    // Usa marked.js per renderizzare il Markdown
    cvContent.innerHTML = marked.parse(cvMarkdown);
  } catch (err) {
    cvContent.innerHTML = `<p style="color:var(--text-red)">Errore: impossibile caricare ${CONFIG.cvFile}</p>`;
    console.error(err);
  }
}

// ============================================
// VIEW NAVIGATION
// ============================================
function showView(name) {
  // Nascondi tutte le view
  Object.values(views).forEach((el) => {
    el.classList.remove('active');
  });
  // Mostra quella richiesta
  if (views[name]) {
    views[name].classList.add('active');
    currentView = name;
    updateStatus(name);
    // Scroll al top del contenuto
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateStatus(view) {
  const labels = {
    home: 'HOME',
    cv: 'CV',
    download: 'DOWNLOAD',
    contact: 'CONTATTI',
    help: 'HELP',
  };
  if (statusView) statusView.textContent = labels[view] || view.toUpperCase();
}

// ============================================
// BUTTON & COMMAND NAVIGATION
// ============================================
function setupNavigation() {
  // Comandi cliccabili nella home
  $$('[data-cmd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      handleCommand(cmd);
    });
  });

  // Pulsanti "back" nelle sotto-sezioni
  $$('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => showView('home'));
  });
}

// ============================================
// COMMAND HANDLER
// ============================================
function handleCommand(raw) {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case 'open cv':
    case 'cv':
      showView('cv');
      break;

    case 'download cv':
    case 'download':
      showView('download');
      break;

    case 'contact':
    case 'contatti':
      showView('contact');
      break;

    case 'help':
    case '?':
      showView('help');
      break;

    case 'home':
    case 'cd ~':
    case 'back':
      showView('home');
      break;

    case 'clear':
      showView('home');
      break;

    // Download diretto per formato
    case 'download pdf':
      downloadPDF();
      break;
    case 'download docx':
      downloadDOCX();
      break;
    case 'download md':
      downloadMD();
      break;

    default:
      // Comando non riconosciuto — flash nell'input
      if (inputField) {
        inputField.style.color = 'var(--text-red)';
        inputField.placeholder = `command not found: ${raw}`;
        setTimeout(() => {
          inputField.style.color = '';
          inputField.placeholder = 'type a command…';
        }, 1500);
      }
  }
}

// ============================================
// INTERACTIVE INPUT
// ============================================
function setupInput() {
  if (!inputField) return;

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = inputField.value;
      if (val.trim()) {
        handleCommand(val);
        inputField.value = '';
      }
    }
  });

  // Focus sull'input quando si clicca ovunque nel terminale home
  views.home?.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      inputField.focus();
    }
  });
}

// ============================================
// DOWNLOAD FUNCTIONS
// ============================================

/* Download Markdown */
function downloadMD() {
  const blob = new Blob([cvMarkdown], { type: 'text/markdown' });
  triggerDownload(blob, 'cv.md');
}

/* Download PDF (genera dal Markdown renderizzato con window.print) */
function downloadPDF() {
  // Mostra la vista CV, poi stampa
  showView('cv');
  setTimeout(() => {
    window.print();
  }, 400);
}

/* Download DOCX
   Genera un file .docx semplice usando il formato
   HTML-to-DOCX basato su Blob con tipo MIME Word */
function downloadDOCX() {
  const htmlContent = cvContent.innerHTML;
  const preHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'>
    <style>
      body { font-family: Consolas, monospace; font-size: 11pt; color: #222; }
      h1 { font-size: 20pt; }
      h2 { font-size: 15pt; color: #1a7f37; }
      h3 { font-size: 12pt; color: #0969da; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
      th { background: #f0f0f0; }
      a { color: #0969da; }
    </style>
    </head><body>`;
  const postHtml = '</body></html>';
  const fullDoc = preHtml + htmlContent + postHtml;
  const blob = new Blob(['\ufeff', fullDoc], {
    type: 'application/msword',
  });
  triggerDownload(blob, 'cv.doc');
}

/* Utility: trigger download di un Blob */
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// ============================================
// TYPING ANIMATION (Hero intro)
// ============================================
function runTypingAnimation() {
  const el = $('#typing-target');
  if (!el) return;

  const text = el.dataset.text || el.textContent;
  el.textContent = '';
  el.style.visibility = 'visible';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, CONFIG.typingSpeed);
    }
  };
  type();
}

// ============================================
// THEME TOGGLE
// ============================================
function setupTheme() {
  // Controlla preferenza salvata
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeLabel(saved);
  }

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeLabel(next);
  });
}

function updateThemeLabel(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀ light' : '🌙 dark';
  }
}

// ============================================
// PRINT STYLES (per PDF export)
// ============================================
// Aggiunti dinamicamente per non inquinare il CSS principale
const printStyles = document.createElement('style');
printStyles.textContent = `
  @media print {
    .topbar, .statusbar, .commands, .input-area,
    .back-btn, .theme-toggle, #view-home,
    #view-download, #view-contact, #view-help { display: none !important; }
    body { background: #fff; color: #222; }
    .main { padding: 0; max-width: 100%; }
    .terminal { box-shadow: none; border: none; }
    .terminal__bar { display: none; }
    .cv-content { padding: 0; }
    .cv-content h1 { color: #111; }
    .cv-content h2 { color: #1a7f37; }
    .cv-content h3 { color: #0969da; }
    .cv-content a { color: #0969da; }
    #view-cv { display: block !important; }
    #view-cv .cv-section { display: block !important; }
  }
`;
document.head.appendChild(printStyles);
