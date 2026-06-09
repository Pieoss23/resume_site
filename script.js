const CONFIG = {
  typingSpeed: 38,
  cvFile: 'cv.md',
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const views = {
  home: $('#view-home'),
  cv: $('#view-cv'),
  download: $('#view-download'),
  contact: $('#view-contact'),
  help: $('#view-help'),
};

const cvContent = $('#cv-render');
const inputField = $('#terminal-input');
const statusView = $('#status-view');
const themeButtons = $$('[data-theme-option]');
const languageButtons = $$('[data-lang]');

const translations = {
  en: {
    pageLang: 'en',
    title: 'Pietro Oss - Software Specialist | Portfolio',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.focus': 'Focus',
    'nav.contact': 'Contact',
    'controls.theme': 'Theme',
    'controls.dark': 'Dark',
    'controls.light': 'Light',
    'controls.language': 'Language',
    'hero.eyebrow': 'Software Specialist | Automation | AI Workflows',
    'hero.title': 'Building useful software with clean UX and applied AI.',
    'hero.lede': 'I design internal tools, integrations, and product demos that move from idea to working system quickly. My current focus is ERP workflows, retrieval systems, and interfaces that stay clear under real usage.',
    'hero.stats.ai': 'RAG, search, summarization',
    'hero.stats.erp': 'Integrations and process automation',
    'hero.stats.ux': 'Interfaces people can actually use',
    'commands.openCv': 'open cv',
    'commands.downloadCv': 'download cv',
    'commands.contact': 'contact',
    'commands.help': 'help',
    'commands.back': '<- cd ~',
    'terminal.typing': 'cat featured_projects.json',
    'terminal.role': 'Software Specialist',
    'terminal.desc': 'I build applied software: AI assistants grounded on documents, data pipelines, ERP-connected workflows, and frontend experiences with pragmatic engineering.',
    'terminal.panel1.label': 'Current build',
    'terminal.panel1.title': 'University PDF RAG tutor',
    'terminal.panel1.desc': 'Chunked lecture material, semantic retrieval, answer grounding.',
    'terminal.panel2.label': 'Interface demo',
    'terminal.panel2.title': 'Podcast explorer',
    'terminal.panel2.desc': 'Browse global shows, filter by topic, play episodes from one place.',
    'terminal.placeholder': 'type a command...',
    'projects.eyebrow': 'Featured work',
    'projects.title': 'Project demos worth showing, not just listing.',
    'projects.lede': 'I added a stronger project layer to the portfolio so visitors can understand what was built, how it works, and what kind of product thinking sits behind the implementation.',
    'projects.rag.status': 'Demo concept',
    'projects.rag.title': 'University PDF RAG Tutor',
    'projects.rag.body': 'A simple retrieval-augmented assistant that learns from university PDFs and answers with grounded references instead of generic text.',
    'projects.rag.item1': 'PDF ingestion, chunking, embeddings, and semantic search',
    'projects.rag.item2': 'Answer flow that cites the retrieved lecture material',
    'projects.rag.item3': 'Useful for exam prep, topic recap, and quick concept lookup',
    'projects.rag.stack': 'Stack idea: Python, vector DB, OpenAI API, lightweight UI',
    'projects.podcast.status': 'Demo concept',
    'projects.podcast.title': 'World Podcast Explorer',
    'projects.podcast.body': 'A podcast site that lets people move through categories, regions, and languages, then listen directly without getting lost in cluttered discovery flows.',
    'projects.podcast.item1': 'Browse by topic, country, or publisher',
    'projects.podcast.item2': 'Episode cards with player state and saved queue',
    'projects.podcast.item3': 'Discovery-first layout tuned for large content catalogs',
    'projects.podcast.stack': 'Stack idea: Next.js, search API, audio player, personalized feed',
    'projects.erp.status': 'Production mindset',
    'projects.erp.title': 'ERP Workflow Console',
    'projects.erp.body': 'A management interface for integrations, scheduled jobs, and exception handling across ERP processes where visibility matters more than decoration.',
    'projects.erp.item1': 'Job health, alerts, retries, and payload traceability',
    'projects.erp.item2': 'Operator-friendly logs with fast filtering',
    'projects.erp.item3': 'Designed for real internal usage under pressure',
    'projects.erp.stack': 'Stack idea: API integrations, queues, dashboard UI, SQL',
    'projects.docs.status': 'Demo concept',
    'projects.docs.title': 'Document Operations Assistant',
    'projects.docs.body': 'A workflow tool that extracts structured information from business documents and routes it into downstream systems with a human review step where confidence is low.',
    'projects.docs.item1': 'OCR and parsing for invoices, forms, or internal files',
    'projects.docs.item2': 'Validation rules before data lands in the target system',
    'projects.docs.item3': 'Human-in-the-loop review for the risky edge cases',
    'projects.docs.stack': 'Stack idea: OCR pipeline, rules engine, review UI, ERP handoff',
    'focus.eyebrow': 'How I work',
    'focus.title': 'Pragmatic product thinking with enough technical depth.',
    'focus.lede': 'I tend to work best where backend logic, process design, and frontend clarity need to meet in one coherent system.',
    'focus.card1.title': 'Applied AI',
    'focus.card1.body': 'RAG workflows, document pipelines, prompt design, and tooling around real source data.',
    'focus.card2.title': 'Process Automation',
    'focus.card2.body': 'Reducing manual steps, increasing traceability, and keeping operators in control.',
    'focus.card3.title': 'Usable Interfaces',
    'focus.card3.body': 'Dense, readable layouts with motion that supports hierarchy instead of fighting it.',
    'cta.eyebrow': 'Open to collaboration',
    'cta.title': 'Need a software demo, internal tool, or AI-assisted workflow?',
    'support.eyebrow': 'Support the work',
    'support.title': 'If this portfolio made you smile, buy me a beer.',
    'support.body': 'Small support helps me keep building demos, experimenting with AI workflows, and polishing the details.',
    'support.cta': 'Buy me a beer',
    'cv.loading': 'Loading cv.md...',
    'cv.error': 'Error: unable to load cv.md',
    'download.pdf': '$ download pdf',
    'download.docx': '$ download docx',
    'download.md': '$ download md',
    'contact.email': '"email":',
    'contact.github': '"github":',
    'contact.linkedin': '"linkedin":',
    'contact.website': '"website":',
    'help.openCv': 'Open the curriculum',
    'help.downloadCv': 'Open the download view',
    'help.downloadPdf': 'Print the CV as PDF',
    'help.downloadDocx': 'Export the CV as Word document',
    'help.downloadMd': 'Download the Markdown source',
    'help.contact': 'Show the contact details',
    'help.help': 'Show this help view',
    'help.home': 'Return to the main landing page',
    'help.clear': 'Reset to the home view',
    'status.home': 'HOME',
    'status.cv': 'CV',
    'status.download': 'DOWNLOAD',
    'status.contact': 'CONTACT',
    'status.help': 'HELP',
    'error.commandNotFound': 'command not found',
  },
  it: {
    pageLang: 'it',
    title: 'Pietro Oss - Software Specialist | Portfolio',
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.focus': 'Approccio',
    'nav.contact': 'Contatti',
    'controls.theme': 'Tema',
    'controls.dark': 'Scuro',
    'controls.light': 'Chiaro',
    'controls.language': 'Lingua',
    'hero.eyebrow': 'Software Specialist | Automazione | Workflow AI',
    'hero.title': 'Creo software utile con una UX pulita e AI applicata.',
    'hero.lede': 'Progetto strumenti interni, integrazioni e demo di prodotto che passano rapidamente dall\'idea a un sistema funzionante. Oggi mi concentro su workflow ERP, sistemi di retrieval e interfacce chiare anche in uso reale.',
    'hero.stats.ai': 'RAG, ricerca, sintesi',
    'hero.stats.erp': 'Integrazioni e automazione dei processi',
    'hero.stats.ux': 'Interfacce davvero usabili',
    'commands.openCv': 'open cv',
    'commands.downloadCv': 'download cv',
    'commands.contact': 'contact',
    'commands.help': 'help',
    'commands.back': '<- cd ~',
    'terminal.typing': 'cat featured_projects.json',
    'terminal.role': 'Software Specialist',
    'terminal.desc': 'Costruisco software applicato: assistenti AI basati su documenti, pipeline dati, workflow collegati agli ERP e frontend realizzati con pragmatismo.',
    'terminal.panel1.label': 'Build attuale',
    'terminal.panel1.title': 'Tutor RAG da PDF universitari',
    'terminal.panel1.desc': 'Materiale a chunk, retrieval semantico e risposte con grounding.',
    'terminal.panel2.label': 'Demo interfaccia',
    'terminal.panel2.title': 'Esploratore podcast',
    'terminal.panel2.desc': 'Sfoglia podcast globali, filtra per tema e ascolta da un unico posto.',
    'terminal.placeholder': 'scrivi un comando...',
    'projects.eyebrow': 'Lavori in evidenza',
    'projects.title': 'Demo di progetto da mostrare, non solo da elencare.',
    'projects.lede': 'Ho dato piu peso alla sezione progetti del portfolio per far capire subito cosa e stato costruito, come funziona e quale pensiero di prodotto c\'e dietro.',
    'projects.rag.status': 'Concept demo',
    'projects.rag.title': 'Tutor RAG da PDF universitari',
    'projects.rag.body': 'Un assistente retrieval-augmented semplice che impara dai PDF universitari e risponde con riferimenti concreti invece di testo generico.',
    'projects.rag.item1': 'Ingestion PDF, chunking, embeddings e ricerca semantica',
    'projects.rag.item2': 'Flusso di risposta che cita il materiale recuperato',
    'projects.rag.item3': 'Utile per preparazione esami, ripasso e lookup rapido',
    'projects.rag.stack': 'Idea stack: Python, vector DB, OpenAI API, UI leggera',
    'projects.podcast.status': 'Concept demo',
    'projects.podcast.title': 'World Podcast Explorer',
    'projects.podcast.body': 'Un sito podcast che permette di muoversi tra categorie, regioni e lingue, ascoltando senza perdersi in flussi di scoperta confusi.',
    'projects.podcast.item1': 'Navigazione per tema, paese o publisher',
    'projects.podcast.item2': 'Card episodio con player e coda salvata',
    'projects.podcast.item3': 'Layout pensato per cataloghi di contenuti ampi',
    'projects.podcast.stack': 'Idea stack: Next.js, search API, audio player, feed personalizzato',
    'projects.erp.status': 'Mentalita production',
    'projects.erp.title': 'ERP Workflow Console',
    'projects.erp.body': 'Un\'interfaccia di gestione per integrazioni, job schedulati e gestione eccezioni nei processi ERP dove la visibilita conta piu della decorazione.',
    'projects.erp.item1': 'Salute job, alert, retry e tracciabilita payload',
    'projects.erp.item2': 'Log leggibili per operatori con filtri rapidi',
    'projects.erp.item3': 'Pensata per un uso interno reale sotto pressione',
    'projects.erp.stack': 'Idea stack: integrazioni API, code, dashboard UI, SQL',
    'projects.docs.status': 'Concept demo',
    'projects.docs.title': 'Document Operations Assistant',
    'projects.docs.body': 'Uno strumento che estrae dati strutturati da documenti aziendali e li invia ai sistemi a valle con revisione umana nei casi dubbi.',
    'projects.docs.item1': 'OCR e parsing per fatture, moduli o file interni',
    'projects.docs.item2': 'Regole di validazione prima dell\'inserimento',
    'projects.docs.item3': 'Revisione human-in-the-loop per i casi rischiosi',
    'projects.docs.stack': 'Idea stack: pipeline OCR, rules engine, review UI, handoff ERP',
    'focus.eyebrow': 'Come lavoro',
    'focus.title': 'Pensiero di prodotto pragmatico con sufficiente profondita tecnica.',
    'focus.lede': 'Rendo al meglio dove logica backend, design del processo e chiarezza frontend devono incontrarsi in un unico sistema coerente.',
    'focus.card1.title': 'AI applicata',
    'focus.card1.body': 'Workflow RAG, pipeline documentali, prompt design e tool su dati reali.',
    'focus.card2.title': 'Automazione processi',
    'focus.card2.body': 'Meno passaggi manuali, piu tracciabilita e operatori sempre in controllo.',
    'focus.card3.title': 'Interfacce usabili',
    'focus.card3.body': 'Layout densi e leggibili con motion che supporta la gerarchia.',
    'cta.eyebrow': 'Disponibile a collaborare',
    'cta.title': 'Ti serve una demo software, uno strumento interno o un workflow assistito da AI?',
    'support.eyebrow': 'Supporta il lavoro',
    'support.title': 'Se questo portfolio ti ha strappato un sorriso, offrimi una birra.',
    'support.body': 'Un piccolo supporto mi aiuta a continuare a costruire demo, sperimentare workflow AI e rifinire i dettagli.',
    'support.cta': 'Offrimi una birra',
    'cv.loading': 'Caricamento cv.md...',
    'cv.error': 'Errore: impossibile caricare cv.md',
    'download.pdf': '$ download pdf',
    'download.docx': '$ download docx',
    'download.md': '$ download md',
    'contact.email': '"email":',
    'contact.github': '"github":',
    'contact.linkedin': '"linkedin":',
    'contact.website': '"website":',
    'help.openCv': 'Apri il curriculum',
    'help.downloadCv': 'Apri la sezione download',
    'help.downloadPdf': 'Stampa il CV in PDF',
    'help.downloadDocx': 'Esporta il CV come documento Word',
    'help.downloadMd': 'Scarica il sorgente Markdown',
    'help.contact': 'Mostra i contatti',
    'help.help': 'Mostra questa guida',
    'help.home': 'Torna alla landing page principale',
    'help.clear': 'Ripristina la home',
    'status.home': 'HOME',
    'status.cv': 'CV',
    'status.download': 'DOWNLOAD',
    'status.contact': 'CONTATTI',
    'status.help': 'HELP',
    'error.commandNotFound': 'comando non trovato',
  },
  es: {
    pageLang: 'es',
    title: 'Pietro Oss - Software Specialist | Portfolio',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.focus': 'Enfoque',
    'nav.contact': 'Contacto',
    'controls.theme': 'Tema',
    'controls.dark': 'Oscuro',
    'controls.light': 'Claro',
    'controls.language': 'Idioma',
    'hero.eyebrow': 'Software Specialist | Automatizacion | Workflows de IA',
    'hero.title': 'Construyo software util con UX limpia e IA aplicada.',
    'hero.lede': 'Diseno herramientas internas, integraciones y demos de producto que pasan rapido de la idea a un sistema funcional. Mi foco actual esta en workflows ERP, sistemas de retrieval e interfaces claras bajo uso real.',
    'hero.stats.ai': 'RAG, busqueda, resumen',
    'hero.stats.erp': 'Integraciones y automatizacion de procesos',
    'hero.stats.ux': 'Interfaces que la gente puede usar de verdad',
    'commands.openCv': 'open cv',
    'commands.downloadCv': 'download cv',
    'commands.contact': 'contact',
    'commands.help': 'help',
    'commands.back': '<- cd ~',
    'terminal.typing': 'cat featured_projects.json',
    'terminal.role': 'Software Specialist',
    'terminal.desc': 'Construyo software aplicado: asistentes de IA apoyados en documentos, pipelines de datos, workflows conectados a ERP y experiencias frontend con ingenieria pragmatica.',
    'terminal.panel1.label': 'Build actual',
    'terminal.panel1.title': 'Tutor RAG con PDF universitarios',
    'terminal.panel1.desc': 'Material dividido en chunks, retrieval semantico y respuestas con grounding.',
    'terminal.panel2.label': 'Demo de interfaz',
    'terminal.panel2.title': 'Explorador de podcasts',
    'terminal.panel2.desc': 'Explora podcasts globales, filtra por tema y escucha desde un solo lugar.',
    'terminal.placeholder': 'escribe un comando...',
    'projects.eyebrow': 'Trabajo destacado',
    'projects.title': 'Demos de proyecto que merece la pena mostrar, no solo listar.',
    'projects.lede': 'Le di mas peso a la capa de proyectos del portfolio para que la gente entienda que se construyo, como funciona y que pensamiento de producto hay detras.',
    'projects.rag.status': 'Concepto demo',
    'projects.rag.title': 'Tutor RAG con PDF universitarios',
    'projects.rag.body': 'Un asistente retrieval-augmented sencillo que aprende de PDFs universitarios y responde con referencias concretas en lugar de texto generico.',
    'projects.rag.item1': 'Ingestion de PDF, chunking, embeddings y busqueda semantica',
    'projects.rag.item2': 'Flujo de respuesta que cita el material recuperado',
    'projects.rag.item3': 'Util para examenes, repaso y busqueda rapida de conceptos',
    'projects.rag.stack': 'Idea de stack: Python, vector DB, OpenAI API, UI ligera',
    'projects.podcast.status': 'Concepto demo',
    'projects.podcast.title': 'World Podcast Explorer',
    'projects.podcast.body': 'Un sitio de podcasts que permite moverse por categorias, regiones e idiomas, y escuchar sin perderse en flujos de descubrimiento confusos.',
    'projects.podcast.item1': 'Explorar por tema, pais o publisher',
    'projects.podcast.item2': 'Tarjetas de episodio con estado del reproductor y cola guardada',
    'projects.podcast.item3': 'Layout pensado para catalogos grandes de contenido',
    'projects.podcast.stack': 'Idea de stack: Next.js, search API, audio player, feed personalizado',
    'projects.erp.status': 'Mentalidad de produccion',
    'projects.erp.title': 'ERP Workflow Console',
    'projects.erp.body': 'Una interfaz de gestion para integraciones, jobs programados y manejo de excepciones en procesos ERP donde la visibilidad importa mas que la decoracion.',
    'projects.erp.item1': 'Salud de jobs, alertas, reintentos y trazabilidad del payload',
    'projects.erp.item2': 'Logs amigables para operadores con filtros rapidos',
    'projects.erp.item3': 'Pensado para uso interno real bajo presion',
    'projects.erp.stack': 'Idea de stack: integraciones API, colas, dashboard UI, SQL',
    'projects.docs.status': 'Concepto demo',
    'projects.docs.title': 'Document Operations Assistant',
    'projects.docs.body': 'Una herramienta que extrae informacion estructurada de documentos de negocio y la envia a sistemas posteriores con revision humana cuando la confianza es baja.',
    'projects.docs.item1': 'OCR y parsing para facturas, formularios o archivos internos',
    'projects.docs.item2': 'Reglas de validacion antes de enviar datos al sistema destino',
    'projects.docs.item3': 'Revision human-in-the-loop para casos de riesgo',
    'projects.docs.stack': 'Idea de stack: pipeline OCR, motor de reglas, review UI, handoff ERP',
    'focus.eyebrow': 'Como trabajo',
    'focus.title': 'Pensamiento de producto pragmatico con suficiente profundidad tecnica.',
    'focus.lede': 'Trabajo mejor donde la logica backend, el diseno del proceso y la claridad del frontend tienen que encajar en un sistema coherente.',
    'focus.card1.title': 'IA aplicada',
    'focus.card1.body': 'Workflows RAG, pipelines documentales, prompt design y tooling sobre datos reales.',
    'focus.card2.title': 'Automatizacion de procesos',
    'focus.card2.body': 'Menos pasos manuales, mas trazabilidad y operadores con control.',
    'focus.card3.title': 'Interfaces usables',
    'focus.card3.body': 'Layouts densos y legibles con motion que apoya la jerarquia.',
    'cta.eyebrow': 'Abierto a colaborar',
    'cta.title': 'Necesitas una demo de software, una herramienta interna o un workflow asistido por IA?',
    'support.eyebrow': 'Apoya el trabajo',
    'support.title': 'Si este portfolio te saco una sonrisa, invitame a una cerveza.',
    'support.body': 'Un pequeno apoyo me ayuda a seguir construyendo demos, experimentando con workflows de IA y puliendo los detalles.',
    'support.cta': 'Invitame a una cerveza',
    'cv.loading': 'Cargando cv.md...',
    'cv.error': 'Error: no se pudo cargar cv.md',
    'download.pdf': '$ download pdf',
    'download.docx': '$ download docx',
    'download.md': '$ download md',
    'contact.email': '"email":',
    'contact.github': '"github":',
    'contact.linkedin': '"linkedin":',
    'contact.website': '"website":',
    'help.openCv': 'Abre el curriculum',
    'help.downloadCv': 'Abre la vista de descarga',
    'help.downloadPdf': 'Imprime el CV en PDF',
    'help.downloadDocx': 'Exporta el CV como documento Word',
    'help.downloadMd': 'Descarga la fuente en Markdown',
    'help.contact': 'Muestra los datos de contacto',
    'help.help': 'Muestra esta ayuda',
    'help.home': 'Vuelve a la pagina principal',
    'help.clear': 'Restablece la vista home',
    'status.home': 'INICIO',
    'status.cv': 'CV',
    'status.download': 'DESCARGA',
    'status.contact': 'CONTACTO',
    'status.help': 'AYUDA',
    'error.commandNotFound': 'comando no encontrado',
  },
};

let currentView = 'home';
let cvMarkdown = '';
let currentLanguage = 'en';
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupTheme();
  loadCV();
  setupNavigation();
  setupInput();
  runTypingAnimation();
  setupRevealObserver();
  setupParallax();
});

async function loadCV() {
  try {
    const res = await fetch(CONFIG.cvFile);
    if (!res.ok) throw new Error('CV not found');
    cvMarkdown = await res.text();
    cvContent.innerHTML = marked.parse(cvMarkdown);
  } catch (err) {
    cvContent.innerHTML = `<p style="color:var(--text-red)">${t('cv.error')}</p>`;
    console.error(err);
  }
}

function showView(name) {
  Object.entries(views).forEach(([key, el]) => {
    if (!el) return;
    el.classList.toggle('active', key === name);
  });

  if (!views[name]) return;

  currentView = name;
  updateStatus(name);
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function updateStatus(view) {
  const labels = {
    home: t('status.home'),
    cv: t('status.cv'),
    download: t('status.download'),
    contact: t('status.contact'),
    help: t('status.help'),
  };
  if (statusView) statusView.textContent = labels[view] || view.toUpperCase();
}

function setupNavigation() {
  $$('[data-cmd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      handleCommand(btn.dataset.cmd || '');
    });
  });

  $$('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => showView('home'));
  });
}

function handleCommand(raw) {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case 'open cv':
    case 'apri cv':
    case 'abrir cv':
    case 'cv':
      showView('cv');
      break;
    case 'download cv':
    case 'scarica cv':
    case 'descargar cv':
    case 'download':
      showView('download');
      break;
    case 'download pdf':
    case 'scarica pdf':
    case 'descargar pdf':
      downloadPDF();
      break;
    case 'download docx':
    case 'scarica docx':
    case 'descargar docx':
      downloadDOCX();
      break;
    case 'download md':
    case 'scarica md':
    case 'descargar md':
      downloadMD();
      break;
    case 'contact':
    case 'contatti':
    case 'contacto':
      showView('contact');
      break;
    case 'help':
    case 'aiuto':
    case 'ayuda':
    case '?':
      showView('help');
      break;
    case 'home':
    case 'inicio':
    case 'clear':
    case 'pulisci':
    case 'limpiar':
    case 'back':
    case 'cd ~':
      showView('home');
      break;
    default:
      flashInputError(raw);
  }
}

function flashInputError(raw) {
  if (!inputField) return;
  inputField.style.color = 'var(--text-red)';
  inputField.placeholder = `${t('error.commandNotFound')}: ${raw}`;
  setTimeout(() => {
    inputField.style.color = '';
    inputField.placeholder = t('terminal.placeholder');
  }, 1400);
}

function setupInput() {
  if (!inputField) return;

  inputField.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const value = inputField.value.trim();
    if (!value) return;
    handleCommand(value);
    inputField.value = '';
  });

  views.home?.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement && e.target.closest('button, a, input')) return;
    inputField.focus();
  });
}

function downloadMD() {
  const blob = new Blob([cvMarkdown], { type: 'text/markdown' });
  triggerDownload(blob, 'cv.md');
}

function downloadPDF() {
  showView('cv');
  setTimeout(() => {
    window.print();
  }, 350);
}

function downloadDOCX() {
  const htmlContent = cvContent.innerHTML;
  const preHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="utf-8">
    <style>
      body { font-family: Consolas, monospace; font-size: 11pt; color: #222; }
      h1 { font-size: 20pt; }
      h2 { font-size: 15pt; color: #157f43; }
      h3 { font-size: 12pt; color: #0f5cc0; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
      th { background: #f0f0f0; }
      a { color: #0f5cc0; }
    </style>
    </head><body>`;
  const postHtml = '</body></html>';
  const blob = new Blob(['\ufeff', `${preHtml}${htmlContent}${postHtml}`], {
    type: 'application/msword',
  });
  triggerDownload(blob, 'cv.doc');
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  setTimeout(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, 100);
}

function runTypingAnimation() {
  const el = $('#typing-target');
  if (!el) return;

  const text = el.dataset.text || el.textContent || '';
  el.textContent = '';
  el.style.visibility = 'visible';

  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }

  let index = 0;
  const type = () => {
    if (index >= text.length) return;
    el.textContent += text.charAt(index);
    index += 1;
    setTimeout(type, CONFIG.typingSpeed);
  };

  type();
}

function setupTheme() {
  const saved = localStorage.getItem('theme');
  const initial = saved || document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(initial);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.themeOption || 'dark';
      setTheme(next);
    });
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.themeOption === theme);
  });
}

function setupLanguage() {
  const saved = localStorage.getItem('language');
  const initial = saved && translations[saved] ? saved : 'en';
  applyLanguage(initial);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang || 'en';
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  currentLanguage = translations[lang] ? lang : 'en';
  localStorage.setItem('language', currentLanguage);
  document.documentElement.lang = t('pageLang');
  document.title = t('title');

  $$('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(key);
  });

  $$('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) return;
    element.setAttribute('placeholder', t(key));
  });

  $$('[data-i18n-data-text]').forEach((element) => {
    const key = element.dataset.i18nDataText;
    if (!key) return;
    const value = t(key);
    element.dataset.text = value;
    if (element.id !== 'typing-target') {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === currentLanguage);
  });

  updateStatus(currentView);
  restartTypingAnimation();
}

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function restartTypingAnimation() {
  const el = $('#typing-target');
  if (!el) return;
  el.style.visibility = 'hidden';
  runTypingAnimation();
}

function setupRevealObserver() {
  const items = $$('.reveal');
  if (!items.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px',
  });

  items.forEach((item) => observer.observe(item));
}

function setupParallax() {
  if (prefersReducedMotion) return;

  const parallaxItems = $$('[data-parallax]');
  if (!parallaxItems.length) return;

  const updateScrollParallax = () => {
    const scrollY = window.scrollY;
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallaxSpeed || 0.06);
      const offset = scrollY * speed;
      item.style.setProperty('--scroll-shift', `${offset}px`);
    });
  };

  let mouseFrame = null;
  const updatePointer = (clientX, clientY) => {
    const x = (clientX / window.innerWidth - 0.5) * 18;
    const y = (clientY / window.innerHeight - 0.5) * 18;
    document.documentElement.style.setProperty('--parallax-x', `${x}px`);
    document.documentElement.style.setProperty('--parallax-y', `${y}px`);
    mouseFrame = null;
  };

  window.addEventListener('scroll', updateScrollParallax, { passive: true });
  window.addEventListener('mousemove', (event) => {
    if (mouseFrame) cancelAnimationFrame(mouseFrame);
    mouseFrame = requestAnimationFrame(() => updatePointer(event.clientX, event.clientY));
  });

  updateScrollParallax();
}

const printStyles = document.createElement('style');
printStyles.textContent = `
  @media print {
    .page-backdrop,
    .topbar,
    .statusbar,
    .back-btn,
    .control-group,
    #view-home,
    #view-download,
    #view-contact,
    #view-help {
      display: none !important;
    }
    body {
      background: #fff;
      color: #111;
    }
    .main {
      max-width: 100%;
      padding: 0;
    }
    .terminal {
      box-shadow: none;
      border: none;
      background: #fff;
    }
    .terminal__bar {
      display: none;
    }
    .cv-content {
      padding: 0;
    }
    #view-cv {
      display: block !important;
    }
  }
`;
document.head.appendChild(printStyles);
