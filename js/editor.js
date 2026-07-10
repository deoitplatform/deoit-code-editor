// ─── FRAME BUSTING ───
if (top !== self) { top.location.href = self.location.href; }

// ─── AUTH LOCK ───
function stringToColor(s) {
  var colors = ['#3b82f6','#8b5cf6','#ec4899','#f59e0b','#10b981','#06b6d4','#ef4444','#14b8a6','#f97316','#6366f1'];
  var h = 0;
  for (var i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h);
  return colors[Math.abs(h) % colors.length];
}

function checkAuth() {
  firebase.auth().onAuthStateChanged(user => {
    const loggedOut = !user;
    document.body.classList.toggle('logged-out', loggedOut);
    const avatar = document.getElementById('userAvatar');
    const avatarImg = document.getElementById('userAvatarImg');
    const dropdown = document.getElementById('userDropdown');
    const dropdownName = document.getElementById('dropdownName');
    const dropdownEmail = document.getElementById('dropdownEmail');
    const avatarIcon = avatar && avatar.querySelector('.avatar-icon');
    const avatarLetter = document.getElementById('avatarLetter');
    if (user) {
      if (avatarIcon) avatarIcon.hidden = true;
      if (avatarLetter) {
        avatarLetter.hidden = false;
        const name = user.displayName || user.email || 'U';
        avatarLetter.textContent = name.charAt(0).toUpperCase();
        avatarLetter.style.background = stringToColor(name);
      }
      dropdownName.textContent = user.displayName || 'User';
      dropdownEmail.textContent = user.email || '';
      // restore file tree
      if (fileTree.children.length <= 1) renderTree();
    } else {
      if (avatarIcon) avatarIcon.hidden = false;
      if (avatarLetter) avatarLetter.hidden = true;
      dropdown.hidden = true;
      // show empty message in file tree
      fileTree.innerHTML = '<div class="tree-empty"><div class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="empty-title">No files</div><div class="empty-sub">Sign in to create and manage your project files</div></div>';
    }
  });
}

// avatar click to toggle dropdown + dropdown item clicks
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('userMenuWrap');
  var dropdown = document.getElementById('userDropdown');
  if (!wrap || !dropdown) return;
  if (wrap.contains(e.target) && !firebase.auth().currentUser) {
    window.location.href = '../login';
    return;
  }
  // dropdown item click
  var item = e.target.closest('.user-dropdown-item');
  if (item) {
    var a = item.dataset.action;
    if (a === 'logout') { signOut().then(function() { window.location.href = '../login'; }); }
    else if (a === 'home') { window.location.href = '../index'; }

    else if (a === 'settings') { showSettings(); }
    dropdown.hidden = true;
    return;
  }
  // avatar click
  if (e.target.closest('#userAvatar')) {
    var body = document.body;
    var isLoggedIn = !body.classList.contains('logged-out');
    if (isLoggedIn) {
      dropdown.hidden = !dropdown.hidden;
    } else {
      window.location.href = '../login';
    }
  } else if (!wrap.contains(e.target)) {
    dropdown.hidden = true;
  }
});

// ─── DOM REFS ───
const editorCode = document.getElementById('editorCode');
const editorGutter = document.getElementById('editorGutter');
const editorFilename = document.getElementById('editorFilename');
const editorLangBadge = document.getElementById('editorLangBadge');
const codeHighlight = document.getElementById('codeHighlight');
const statusLines = document.getElementById('statusLines');
const statusChars = document.getElementById('statusChars');
const statusFile = document.getElementById('statusFile');
const statusLang = document.getElementById('statusLang');
const fileTree = document.getElementById('fileTree');
const tabsBar = document.getElementById('tabsBar');
const dialogContainer = document.getElementById('dialogContainer');
const contextMenu = document.getElementById('contextMenu');
const suggestBox = document.getElementById('suggestBox');
const consoleBody = document.getElementById('consoleBody');
const consoleCount = document.getElementById('consoleCount');



// ─── STATE ───
let fileSystem = null;
let openFiles = [];
let activeTabId = null;
let activeHtmlId = null;
let activeCssId = null;
let activeJsId = null;
const STORAGE_KEY = 'deoit_project';
const SIDEBAR_KEY = 'deoit_sidebar_w';
const CONSOLE_KEY = 'deoit_console_h';
let consoleLogs = [];


// ─── DEFAULT PROJECT ───
const defaultProject = {
  name: 'root', type: 'folder', id: 'root',
  children: [
    { id: 'f_html', name: 'index.html', type: 'file', content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello!</h1>
  <p>This is <strong>Deoit</strong> editor.</p>
  <button onclick="sayHi()">Click</button>
  <script src="script.js"><\/script>
</body>
</html>` },
    { id: 'f_css', name: 'style.css', type: 'file', content: `body {
  font-family: sans-serif;
  text-align: center;
  padding: 4rem 2rem;
  background: #111;
  color: #d9d9d9;
}
h1 { color: #d9d9d9; }
button {
  padding: 10px 24px;
  background: #d9d9d9;
  color: #111;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}` },
    { id: 'f_js', name: 'script.js', type: 'file', content: `function sayHi() {
  alert('Welcome to Deoit!');
  console.log('It works!');
}` },
    {
      id: 'f_components', name: 'components', type: 'folder',
      children: [
        { id: 'f_header', name: 'header.html', type: 'file', content: '<header>\n  <h2>My Site</h2>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n  </nav>\n</header>' }
      ]
    },
    { id: 'f_utils', name: 'utils.js', type: 'file', content: '// helper\nfunction $(sel) { return document.querySelector(sel); }' }
  ]
};

// ─── HELPERS ───
function findById(node, id) {
  if (node.id === id) return node;
  if (node.children) for (const c of node.children) { const f = findById(c, id); if (f) return f; }
  return null;
}
function findParent(node, id, p = null) {
  if (node.id === id) return p;
  if (node.children) for (const c of node.children) { const r = findParent(c, id, node); if (r) return r; }
  return null;
}
function fileLang(name) {
  const n = name.toLowerCase();
  if (n.endsWith('.html')||n.endsWith('.htm')) return 'html';
  if (n.endsWith('.css')||n.endsWith('.scss')||n.endsWith('.less')) return 'css';
  if (n.endsWith('.js')||n.endsWith('.ts')||n.endsWith('.jsx')||n.endsWith('.mjs')) return 'js';
  return 'other';
}
function genId() {
  const arr = new Uint8Array(6);
  crypto.getRandomValues(arr);
  return 'f_' + Array.from(arr, b => b.toString(36).padStart(2, '0')).join('').substring(0, 9);
}
function countAll(node) {
  let f=0,c=0;
  if (node.type==='file') { f=1; c=(node.content||'').length; }
  if (node.children) node.children.forEach(ch=>{ const r=countAll(ch); f+=r.f; c+=r.c; });
  return {f,c};
}
function esc(t) { const d=document.createElement('div'); d.textContent=t; return d.innerHTML; }
function escAttr(t) { return String(t).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ─── PERSIST ───
function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(fileSystem)); } catch(e) {} }
function load() { try { const s=localStorage.getItem(STORAGE_KEY); if(s) {const p=JSON.parse(s); if(p&&p.type==='folder') return p;} } catch(e){} return null; }
function loadSizes() {
  try {
    const sw = localStorage.getItem(SIDEBAR_KEY);
    const ch = localStorage.getItem(CONSOLE_KEY);
    if (sw) document.documentElement.style.setProperty('--sidebar-w', sw + 'px');
    if (ch) document.documentElement.style.setProperty('--console-h', ch + 'px');
  } catch(e) {}
}

// ─── SVG ICONS ───
const icons = {
  html: '<svg viewBox="0 0 24 24" fill="none" stroke="#e06c75" stroke-width="2" width="16" height="16"><polyline points="4 3 20 3 18 21 12 23 6 21"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></svg>',
  css: '<svg viewBox="0 0 24 24" fill="none" stroke="#61afef" stroke-width="2" width="16" height="16"><polyline points="4 3 20 3 18 21 12 23 6 21"/><path d="M8 9h8l-1 7-3 1-3-1"/><line x1="6" y1="13" x2="10" y2="13"/></svg>',
  js: '<svg viewBox="0 0 24 24" fill="none" stroke="#e5c07b" stroke-width="2" width="16" height="16"><polygon points="3 3 21 3 19 19 12 22 5 19"/><path d="M10 9v8a2 2 0 0 0 4 0"/><path d="M15 12h-2"/></svg>',
  json: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><polyline points="16 3 21 3 21 21 16 21"/><polyline points="8 3 3 3 3 21 8 21"/><line x1="10" y1="9" x2="14" y2="9"/><line x1="10" y1="13" x2="14" y2="13"/><line x1="10" y1="17" x2="12" y2="17"/></svg>',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M8 12l3-3 2 2 3-3"/></svg>',
  md: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  txt: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  folderOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M2 9h20l-2 8H4z"/></svg>',
  other: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
};

function getIcon(name, isFolder, expanded) {
  if (isFolder) return expanded ? icons.folderOpen : icons.folder;
  const e = name.split('.').pop().toLowerCase();
  const m = { html: icons.html, htm: icons.html, css: icons.css, scss: icons.css, less: icons.css, js: icons.js, ts: icons.js, jsx: icons.js, mjs: icons.js, json: icons.json, svg: icons.svg, md: icons.md, txt: icons.txt };
  return m[e] || icons.other;
}

// ─── TREE ───
function renderTree() {
  fileTree.innerHTML = '';
  renderNode(fileSystem, 0, fileTree);
  highlightTree();
}
function renderNode(node, indent, el) {
  const d = document.createElement('div');
  d.className = `tree-item indent-${indent}`;
  d.dataset.id = node.id;
  d.draggable = true;
  if (node.type === 'file') {
    d.innerHTML = `<span class="icon">${getIcon(node.name)}</span><span class="name">${esc(node.name)}</span>
      <span class="file-actions">
        <button data-action="rename" data-id="${escAttr(node.id)}" title="Rename">&#9998;</button>
        <button data-action="delete" data-id="${escAttr(node.id)}" title="Delete">&#10005;</button>
      </span>`;
    if (node.id === activeHtmlId || node.id === activeCssId || node.id === activeJsId) d.classList.add('active');
  } else {
    const expanded = node._expanded !== false;
    const arrow = expanded ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10"><polyline points="6 9 12 15 18 9"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10"><polyline points="9 18 15 12 9 6"/></svg>';
    d.innerHTML = `<span class="icon arrow">${arrow}</span><span class="icon">${getIcon(node.name, true, expanded)}</span><span class="name">${esc(node.name)}</span>
      <span class="file-actions">
        <button data-action="new-file" data-id="${escAttr(node.id)}" title="New File">+</button>
        <button data-action="new-folder" data-id="${escAttr(node.id)}" title="New Folder">&#128193;</button>
        <button data-action="rename" data-id="${escAttr(node.id)}" title="Rename">&#9998;</button>
        <button data-action="delete" data-id="${escAttr(node.id)}" title="Delete">&#10005;</button>
      </span>`;
  }
  d.addEventListener('contextmenu', e => { e.preventDefault(); e.stopPropagation(); showCtx(e.clientX, e.clientY, node.id); });
  d.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', node.id);
    d.classList.add('dragging');
  });
  d.addEventListener('dragend', () => d.classList.remove('dragging'));
  d.addEventListener('dragover', e => {
    e.preventDefault();
    d.classList.remove('drag-over-before', 'drag-over-after');
    const rect = d.getBoundingClientRect();
    const relY = (e.clientY - rect.top) / rect.height;
    d.classList.add(relY < 0.4 ? 'drag-over-before' : relY > 0.6 ? 'drag-over-after' : 'drag-over');
  });
  d.addEventListener('dragleave', () => d.classList.remove('drag-over', 'drag-over-before', 'drag-over-after'));
  d.addEventListener('drop', e => {
    e.preventDefault();
    const wasFolderDrop = node.type === 'folder' && d.classList.contains('drag-over');
    d.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
    const srcId = e.dataTransfer.getData('text/plain');
    if (srcId === node.id) return;
    const srcNode = findById(fileSystem, srcId);
    if (!srcNode) return;
    const srcParent = findParent(fileSystem, srcId);
    if (!srcParent) return;
    if (isDescendant(fileSystem, node.id, srcId)) return;
    if (node.type === 'folder' && wasFolderDrop) {
      if (!node.children) node.children = [];
      srcParent.children = srcParent.children.filter(c => c.id !== srcId);
      node.children.push(srcNode);
    } else {
      const tgtParent = node.type === 'folder' && wasFolderDrop ? node : findParent(fileSystem, node.id);
      if (!tgtParent) return;
      const rect = d.getBoundingClientRect();
      const relY = (e.clientY - rect.top) / rect.height;
      const tgtIdx = tgtParent.children.findIndex(c => c.id === node.id);
      if (tgtIdx < 0) return;
      srcParent.children = srcParent.children.filter(c => c.id !== srcId);
      const srcInParent = tgtParent.children.findIndex(c => c.id === srcId);
      let insertAt = tgtIdx;
      if (srcInParent >= 0 && srcInParent < tgtIdx) insertAt--;
      tgtParent.children.splice(relY < 0.5 ? insertAt : insertAt + 1, 0, srcNode);
    }
    renderTree(); renderTabs(); save();
  });
  el.appendChild(d);
  if (node.type === 'folder' && node._expanded !== false && node.children) {
    node.children.forEach(c => renderNode(c, indent + 1, el));
  }
}

function isDescendant(root, parentId, childId) {
  const parent = findById(root, parentId);
  if (!parent || parent.type !== 'folder') return false;
  return parent.children ? parent.children.some(c => c.id === childId || isDescendant(root, c.id, childId)) : false;
}
function highlightTree() {
  [activeHtmlId, activeCssId, activeJsId].forEach(id => {
    if (id) { const el = fileTree.querySelector(`[data-id="${id}"]`); if (el) el.classList.add('active'); }
  });
}

// ─── SYNTAX HIGHLIGHTING ───
function highlight(lang, code) {
  let h = esc(code);
  if (lang === 'html') {
    h = h.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="hl-comment">$1</span>');
    h = h.replace(/(&lt;!)(DOCTYPE)(\s+)([\w]+)/i, '<span class="hl-doctype">$1$2</span>$3<span class="hl-tag-special">$4</span>');
    h = h.replace(/(&amp;)(\w+)(;)/g, '<span class="hl-entity">$1$2$3</span>');
    h = h.replace(/(&lt;)(\/?)([\w-]+)/g, function(m, lt, slash, tag) {
      const special = ['html','head','body','script','style','meta','link','title'];
      return lt + slash + (special.includes(tag) ? '<span class="hl-tag-special">'+tag+'</span>' : '<span class="hl-tag">'+tag+'</span>');
    });
    h = h.replace(/(&lt;\/?[\w-]+)([\s>])/g, '$1$2');
    h = h.replace(/(\s)(v-[\w-]+|@[\w-]+|:[\w-]+|\[[\w-]+\])/g, '$1<span class="hl-attr">$2</span>');
    h = h.replace(/(\s)(\w[\w-]*)(\s*=\s*)(&quot;.*?&quot;|&#39;.*?&#39;)/g, '$1<span class="hl-attr">$2</span>$3<span class="hl-string">$4</span>');
    h = h.replace(/\{\{([^}]+)\}\}/g, '<span class="hl-string-interp">{{$1}}</span>');
  } else if (lang === 'css') {
    h = h.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>');
    h = h.replace(/(@[\w-]+)/g, '<span class="hl-keyword">$1</span>');
    h = h.replace(/(!important)\b/g, '<span class="hl-important">$1</span>');
    h = h.replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span class="hl-value">$1</span>');
    h = h.replace(/\b(\d+\.?\d*)(px|rem|em|vh|vw|vmin|vmax|%|s|ms|deg|fr|ch|ex)\b/g, '<span class="hl-number">$1</span><span class="hl-unit">$2</span>');
    h = h.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');
    h = h.replace(/([\w-]+)(\s*)(:)(?!:)/g, function(m, prop, sp, col) {
      const known = ['color','background','margin','padding','font','display','position','width','height','border','flex','grid','transform','transition','animation','box-shadow','text-align','overflow','z-index','opacity','cursor','top','left','right','bottom','gap','grid-template','align-items','justify-content','font-size','font-weight','font-family','line-height','letter-spacing','text-decoration','list-style','min-height','max-width','min-width','max-height','outline','filter','clip-path','object-fit','user-select','pointer-events','white-space','word-break','overflow-wrap','scroll-behavior','appearance','resize'];
      return (known.includes(prop) ? '<span class="hl-property">'+prop+'</span>' : '<span class="hl-attr">'+prop+'</span>') + sp + col;
    });
    h = h.replace(/(:)(before|after|hover|focus|active|visited|first-child|last-child|nth-child|first-of-type|last-of-type|checked|disabled|not|where|is|has|root|empty)\b/g, ':<span class="hl-pseudo">$2</span>');
    h = h.replace(/(::)(before|after|placeholder|selection|scrollbar)/g, '::<span class="hl-pseudo">$2</span>');
    h = h.replace(/(\.)([\w-]+)/g, '.<span class="hl-selector-class">$2</span>');
    h = h.replace(/(#)([\w-]+)/g, '#<span class="hl-selector-id">$2</span>');
    h = h.replace(/\b(rgb|rgba|hsl|hsla|calc|min|max|clamp|var|url|translate|rotate|scale|skew|translateX|translateY)\b(?=\()/g, '<span class="hl-function">$1</span>');
    h = h.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="hl-string">$1</span>');
  } else if (lang === 'js') {
    h = h.replace(/(\/\/.*)/g, '<span class="hl-comment">$1</span>');
    h = h.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>');
    h = h.replace(/\b(const|let|var)\b/g, '<span class="hl-keyword-control">$1</span>');
    h = h.replace(/\b(function|return|if|else|for|while|do|switch|case|break|continue|class|import|export|from|try|catch|finally|throw|new|this|typeof|instanceof|async|await|yield|delete|in|of|with|debugger|default|extends|super|static|get|set)\b/g, '<span class="hl-keyword">$1</span>');
    h = h.replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="hl-literal">$1</span>');
    h = h.replace(/\b(console|Math|JSON|Promise|Array|Object|String|Number|Boolean|Map|Set|Symbol|RegExp|Error|Date|window|document|fetch|localStorage|sessionStorage|setTimeout|setInterval|clearTimeout|clearInterval|parseInt|parseFloat|isNaN|isFinite|require|module|process)\b/g, '<span class="hl-builtin">$1</span>');
    h = h.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');
    h = h.replace(/`([^`]*)`/g, function(m) {
      return '`' + m.slice(1,-1).replace(/\$\{([^}]+)\}/g, '<span class="hl-string-interp">${<span class="hl-variable">$1</span>}</span>') + '`';
    });
    h = h.replace(/(&quot;.*?&quot;)/g, '<span class="hl-string">$1</span>');
    h = h.replace(/(&#39;.*?&#39;)/g, '<span class="hl-string">$1</span>');
    h = h.replace(/\b([\w.]+)(\s*\()/g, function(m, name, paren) {
      if (name.includes('.')) {
        const parts = name.split('.');
        const last = parts.pop();
        return parts.join('.<span class="hl-operator">.</span>') + '.<span class="hl-function">' + last + '</span>' + paren;
      }
      return '<span class="hl-function">' + name + '</span>' + paren;
    });
    h = h.replace(/(&lt;)([\w]+)(&gt;)/g, '&lt;<span class="hl-tag">$2</span>&gt;');
    h = h.replace(/\b(this)\b/g, '<span class="hl-keyword">$1</span>');
  }
  return h;
}

function renderGuides() {
  const container = document.getElementById('indentGuides');
  if (!container) return;
  container.innerHTML = '';
  const code = editorCode.value;
  if (!code) return;
  const lines = code.split('\n');
  const style = getComputedStyle(codeHighlight);
  const lh = parseFloat(style.lineHeight) || 22;
  const ch = 7.8;
  const levels = lines.map(l => { const m = l.match(/^(\s*)/); return m ? Math.floor(m[1].length / 2) : 0; });
  const max = levels.length ? Math.max(...levels) : 0;
  if (max < 1) return;
  for (let lvl = 1; lvl <= max; lvl++) {
    let s = -1;
    for (let i = 0; i < lines.length; i++) {
      if (levels[i] >= lvl) { if (s === -1) s = i; }
      else {
        if (s !== -1 && i - s > 1) {
          const g = document.createElement('div'); g.className = 'guide';
          g.style.left = (lvl * 2 * ch - 4) + 'px';
          g.style.top = (s * lh) + 'px';
          g.style.height = ((i - s) * lh) + 'px';
          container.appendChild(g); s = -1;
        } else { s = -1; }
      }
    }
    if (s !== -1 && lines.length - s > 1) {
      const g = document.createElement('div'); g.className = 'guide';
      g.style.left = (lvl * 2 * ch - 4) + 'px';
      g.style.top = (s * lh) + 'px';
      g.style.height = ((lines.length - s) * lh) + 'px';
      container.appendChild(g);
    }
  }
}

function updateHighlight() {
  const lang = fileLang(editorFilename.textContent === 'No file open' ? '' : editorFilename.textContent);
  codeHighlight.innerHTML = highlight(lang, editorCode.value) + '\n';
  renderGuides();
}

// ─── UPDATE EDITOR ───
function updateEditor(file) {
  if (!file) {
    editorCode.value = '';
    editorFilename.textContent = 'No file open';
    editorLangBadge.textContent = '--';
    editorLangBadge.className = 'lang-badge-h';
    updateGutter();
    updateHighlight();
    return;
  }
  editorCode.value = file.content || '';
  editorFilename.textContent = file.name;
  const lang = fileLang(file.name);
  editorLangBadge.textContent = lang.toUpperCase();
  editorLangBadge.className = 'lang-badge-h' + (lang !== 'other' ? ' ' + lang : '');
  updateGutter();
  updateHighlight();
}

// ─── OPEN FILE ───
function openFile(id) {
  const file = findById(fileSystem, id);
  if (!file || file.type !== 'file') return;
  const lang = fileLang(file.name);
  if (lang === 'html') { activeHtmlId = id; }
  else if (lang === 'css') { activeCssId = id; }
  else if (lang === 'js') { activeJsId = id; }
  if (!openFiles.find(f => f.id === id)) {
    openFiles.push({ id, name: file.name, lang });
  }
  activeTabId = id;
  renderTabs();
  renderTree();
  updateEditor(file);
  updateStatus();
  save();
}

// ─── TABS ───
let _tabIndicator = null;
function getTabIndicator() {
  if (!_tabIndicator) {
    _tabIndicator = document.createElement('div');
    _tabIndicator.className = 'tab-drop-indicator';
    tabsBar.appendChild(_tabIndicator);
  }
  return _tabIndicator;
}

function renderTabs() {
  tabsBar.innerHTML = '';
  if (_tabIndicator) _tabIndicator.remove();
  _tabIndicator = null;
  openFiles.forEach((f, i) => {
    const tab = document.createElement('div');
    tab.className = `tab${f.id === activeTabId ? ' active' : ''}`;
    tab.dataset.id = f.id;
    tab.draggable = true;
    const dc = f.lang==='html'?'var(--hl-tag)':f.lang==='css'?'var(--hl-attr)':'var(--hl-entity)';
    tab.innerHTML = `<span class="tab-dot" style="background:${dc}"></span>${esc(f.name)}
      <button class="tab-close" data-action="close-tab" data-id="${escAttr(f.id)}">&#10005;</button>`;
    tab.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', f.id);
      e.dataTransfer.effectAllowed = 'move';
      tab.classList.add('dragging');
    });
    tab.addEventListener('dragend', () => {
      tab.classList.remove('dragging');
      const ind = getTabIndicator();
      ind.classList.remove('show');
    });
    tab.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const ind = getTabIndicator();
      const tabs = [...tabsBar.querySelectorAll('.tab:not(.dragging)')];
      let insertIdx = tabs.length;
      for (let i = 0; i < tabs.length; i++) {
        const r = tabs[i].getBoundingClientRect();
        if (e.clientX < r.left + r.width / 2) { insertIdx = i; break; }
      }
      const barRect = tabsBar.getBoundingClientRect();
      if (insertIdx === 0) {
        ind.style.left = '0px';
      } else if (insertIdx >= tabs.length) {
        const lastRect = tabs[tabs.length - 1].getBoundingClientRect();
        ind.style.left = (lastRect.right - barRect.left) + 'px';
      } else {
        const leftTab = tabs[insertIdx - 1];
        const rightTab = tabs[insertIdx];
        const mid = (leftTab.getBoundingClientRect().right + rightTab.getBoundingClientRect().left) / 2;
        ind.style.left = (mid - barRect.left) + 'px';
      }
      ind.style.height = (barRect.height - 12) + 'px';
      ind.classList.add('show');
    });
    tab.addEventListener('dragleave', e => {
      if (e.relatedTarget && !tab.contains(e.relatedTarget)) {
        const ind = getTabIndicator();
        ind.classList.remove('show');
      }
    });
    tab.addEventListener('drop', e => {
      e.preventDefault();
      const ind = getTabIndicator();
      ind.classList.remove('show');
      const srcId = e.dataTransfer.getData('text/plain');
      if (srcId === f.id) return;
      const srcIdx = openFiles.findIndex(t => t.id === srcId);
      if (srcIdx < 0) return;
      const [moved] = openFiles.splice(srcIdx, 1);
      const tabs = [...tabsBar.querySelectorAll('.tab')];
      let insertIdx = tabs.length;
      for (let i = 0; i < tabs.length; i++) {
        const r = tabs[i].getBoundingClientRect();
        if (e.clientX < r.left + r.width / 2) { insertIdx = i; break; }
      }
      openFiles.splice(insertIdx, 0, moved);
      renderTabs();
    });
    tabsBar.appendChild(tab);
  });
}
function closeTab(id) {
  openFiles = openFiles.filter(f => f.id !== id);
  if (id === activeHtmlId) { activeHtmlId = openFiles.find(f=>f.lang==='html')?.id || null; }
  if (id === activeCssId) { activeCssId = openFiles.find(f=>f.lang==='css')?.id || null; }
  if (id === activeJsId) { activeJsId = openFiles.find(f=>f.lang==='js')?.id || null; }
  if (id === activeTabId) {
    if (openFiles.length > 0) openFile(openFiles[openFiles.length-1].id);
    else { activeTabId = null; updateEditor(null); renderTabs(); }
  } else renderTabs();
  save();
}
function closeCurrent() { if (activeTabId) closeTab(activeTabId); }

// ─── SAVE CURRENT ───
function saveCurrent() {
  if (activeTabId) {
    const f = findById(fileSystem, activeTabId);
    if (f) { f.content = editorCode.value; save(); }
  }
}

// ─── GUTTER ───
function updateGutter() {
  const lines = editorCode.value.split('\n');
  editorGutter.innerHTML = '';
  for (let i = 1; i <= lines.length; i++) {
    const s = document.createElement('span'); s.className='line-num'; s.textContent=i; editorGutter.appendChild(s);
  }
}

// ─── RUN CONFIG ───
const RUN_KEY = 'deoit_run_config';
function loadRunConfig() {
  try {
    const s = localStorage.getItem(RUN_KEY);
    if (s) return JSON.parse(s);
  } catch(e) {}
  return { htmlId: null, remember: false };
}
function saveRunConfig(cfg) {
  try { localStorage.setItem(RUN_KEY, JSON.stringify(cfg)); } catch(e) {}
}
let runConfig = loadRunConfig();

function getHtmlFiles() {
  return openFiles.filter(f => f.lang === 'html');
}

function addConsoleEntry(level, args) {
  const text = Array.from(args).map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
  consoleLogs.push({ level, text });
  renderConsole();
}

function clearConsole() {
  consoleLogs = [];
  renderConsole();
}

function renderConsole() {
  if (!consoleBody) return;
  if (consoleLogs.length === 0) {
    consoleBody.innerHTML = '<div class="panel-placeholder">Run your code &#8226; console output appears here</div>';
    if (consoleCount) consoleCount.textContent = '';
    return;
  }
  consoleBody.innerHTML = consoleLogs.map(e => {
    const cls = 'panel-entry' + (e.level === 'error' ? ' level-error' : e.level === 'warn' ? ' level-warn' : '');
    const icon = e.level === 'error' ? '&#10007;' : e.level === 'warn' ? '&#9888;' : '&#9654;';
    return `<div class="${cls}"><span class="entry-icon">${icon}</span><span class="entry-msg">${esc(e.text)}</span></div>`;
  }).join('');
  consoleBody.scrollTop = consoleBody.scrollHeight;
  if (consoleCount) consoleCount.textContent = String(consoleLogs.length);
}

function executeRun(htmlId) {
  saveCurrent();
  consoleLogs = [];
  const html = htmlId ? (findById(fileSystem, htmlId)?.content || '') : '';
  const css = activeCssId ? (findById(fileSystem, activeCssId)?.content || '') : '';
  const js = activeJsId ? (findById(fileSystem, activeJsId)?.content || '') : '';
  const bridge = '<script>!function(){function f(l){return function(){parent.postMessage({type:"deoit_console",level:l,args:Array.from(arguments).map(function(v){try{return typeof v==="object"?JSON.stringify(v,function(k,vv){if(typeof vv==="function")return"[Function]";return vv}):String(v)}catch(e){return String(v)}})},\"*\")}}window.console={log:f("log"),warn:f("warn"),error:f("error"),info:f("info"),clear:function(){parent.postMessage({type:"deoit_console",level:"clear"},\"*\")}};window.onerror=function(m){parent.postMessage({type:"deoit_console",level:"error",args:[String(m)]},\"*\")}}();<\/script>';
  const doc = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>${css}</style></head>
<body>${html}
${bridge}
<script>try{${js}}catch(e){console.error(e)}<\/script>
</body></html>`;

  let iframe = document.getElementById('previewFrame');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'previewFrame';
    iframe.sandbox = 'allow-scripts';
    iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:9999;background:#fff;';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close Preview';
    closeBtn.style.cssText = 'position:fixed;top:10px;right:10px;z-index:10000;padding:8px 16px;background:#111;color:#d9d9d9;border:1px solid #333;border-radius:6px;cursor:pointer;font-family:sans-serif;font-size:13px;';
    closeBtn.addEventListener('click', () => { iframe.remove(); closeBtn.remove(); });
    document.body.appendChild(closeBtn);
    document.body.appendChild(iframe);
  }
  iframe.srcdoc = doc;
  renderConsole();
}
function runCode() {
  const htmlFiles = getHtmlFiles();

  if (htmlFiles.length === 0) {
    executeRun(activeHtmlId);
    return;
  }

  if (htmlFiles.length === 1) {
    executeRun(htmlFiles[0].id);
    return;
  }

  // Multiple HTML files
  if (runConfig.remember && runConfig.htmlId && openFiles.find(f => f.id === runConfig.htmlId)) {
    executeRun(runConfig.htmlId);
    return;
  }

  showRunDialog(htmlFiles);
}

function showRunDialog(htmlFiles) {
  const current = runConfig.htmlId || activeHtmlId || htmlFiles[0].id;
  dialogContainer.innerHTML = `
    <div class="dialog-overlay" data-action="close-overlay">
      <div class="dialog-box" style="min-width:300px;">
        <h3 style="font-size:14px;margin-bottom:12px;">Run which HTML file?</h3>
        <div id="runFileList" style="display:flex;flex-direction:column;gap:3px;margin-bottom:12px;">
          ${htmlFiles.map(f => `
            <label class="run-option" data-id="${escAttr(f.id)}" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:5px;cursor:pointer;background:${f.id === current ? 'rgba(255,255,255,0.07)' : 'transparent'};border:1px solid ${f.id === current ? 'var(--border)' : 'transparent'};">
              <input type="radio" name="runHtml" value="${escAttr(f.id)}" ${f.id === current ? 'checked' : ''}>
              <span style="font-size:13px;color:var(--text-primary);font-family:var(--font-mono);">${esc(f.name)}</span>
            </label>
          `).join('')}
        </div>
        <label style="display:flex;align-items:center;gap:6px;padding:8px 0 4px;cursor:pointer;border-top:1px solid var(--border-subtle);">
          <input type="checkbox" id="runRemember" ${runConfig.remember ? 'checked' : ''}>
          <span style="font-size:11px;color:var(--text-secondary);">Don't ask again</span>
        </label>
        <div class="dialog-actions" style="margin-top:12px;">
          <button class="dialog-btn secondary" data-action="close-dialog">Cancel</button>
          <button class="dialog-btn primary" id="runGo">Run</button>
        </div>
      </div>
    </div>`;

  const list = document.getElementById('runFileList');
  list.querySelectorAll('.run-option').forEach(el => {
    el.addEventListener('click', function() {
      list.querySelectorAll('.run-option').forEach(e => {
        e.style.background = 'transparent';
        e.style.borderColor = 'transparent';
      });
      this.style.background = 'rgba(255,255,255,0.06)';
      this.style.borderColor = 'var(--border)';
      const rb = this.querySelector('input[type="radio"]');
      if (rb) rb.checked = true;
    });
  });

  document.getElementById('runGo').addEventListener('click', function() {
    const selected = document.getElementById('runFileList').querySelector('input[type="radio"]:checked');
    if (!selected) { closeDialog(); return; }
    const htmlId = selected.value;
    const remember = document.getElementById('runRemember').checked;
    runConfig = { htmlId, remember };
    saveRunConfig(runConfig);
    closeDialog();
    executeRun(htmlId);
  });
}

// ─── RESET ───
function resetAll() {
  if (!confirm('Reset project to default? All changes will be lost.')) return;
  fileSystem = JSON.parse(JSON.stringify(defaultProject));
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(RUN_KEY);
  runConfig = { htmlId: null, remember: false };
  openFiles = []; activeTabId = null;
  activeHtmlId = null; activeCssId = null; activeJsId = null;
  renderTree(); renderTabs(); updateEditor(null); updateStatus(); save();
}

// ─── STATUS ───
function updateStatus() {
  const t = editorCode.value, pos = editorCode.selectionStart;
  const line = t.substring(0,pos).split('\n').length, col = pos - t.substring(0,pos).lastIndexOf('\n');
  statusLines.textContent = `Ln ${line}, Col ${col}`;
  statusChars.textContent = `${t.length} chars`;
  const stats = countAll(fileSystem);
  statusFile.textContent = `${stats.f} files, ${stats.c} chars total`;
  const parts = [];
  if (activeHtmlId) { const f=findById(fileSystem,activeHtmlId); if(f) parts.push(f.name); }
  if (activeCssId) { const f=findById(fileSystem,activeCssId); if(f) parts.push(f.name); }
  if (activeJsId) { const f=findById(fileSystem,activeJsId); if(f) parts.push(f.name); }
  statusLang.textContent = parts.length ? parts.join(' \u2022 ') : 'No files open';
}

// ─── NEW FILE/FOLDER ───
function sanitizeName(name) {
  return name.replace(/[<>:"\/\\|?*\x00-\x1f]/g, '').replace(/^\.+/, '').replace(/\.+$/, '').trim();
}
function showNew(type, parentId) {
  const parent = parentId ? findById(fileSystem, parentId) : fileSystem;
  if (!parent || parent.type!=='folder') return;
  const isFile = type === 'file';
  dialogContainer.innerHTML = `
    <div class="dialog-overlay" data-action="close-overlay">
      <div class="dialog-box">
        <h3>New ${isFile ? 'File' : 'Folder'}</h3>
        <input type="text" id="di" placeholder="${isFile?'filename.html':'folder name'}" autofocus>
        <div class="dialog-actions">
          <button class="dialog-btn secondary" data-action="close-dialog">Cancel</button>
          <button class="dialog-btn primary" id="dc">Create</button>
        </div>
      </div>
    </div>`;
  const inp = document.getElementById('di'), btn = document.getElementById('dc');
  const create = () => {
    let name = sanitizeName(inp.value.trim());
    if (!name) { alert('Invalid name.'); return; }
    if (isFile && !name.includes('.')) { alert('Include file extension (e.g., index.html)'); return; }
    if (!parent.children) parent.children = [];
    const item = { id: genId(), name, type: isFile ? 'file' : 'folder' };
    if (isFile) item.content = '';
    if (!isFile) item.children = [];
    parent.children.push(item);
    renderTree(); save();
    if (isFile) openFile(item.id);
    closeDialog();
  };
  btn.addEventListener('click', create);
  inp.addEventListener('keydown', e => { if (e.key==='Enter') create(); });
  setTimeout(() => inp.focus(), 50);
}
function closeDialog() { dialogContainer.innerHTML = ''; }

// ─── DELETE ───
function doDelete(id) {
  if (id === 'root') return;
  const file = findById(fileSystem, id);
  if (!file || !confirm(`Delete "${file.name}"?`)) return;
  const parent = findParent(fileSystem, id);
  if (parent && parent.children) parent.children = parent.children.filter(c => c.id !== id);
  if (id === activeHtmlId) { activeHtmlId=null; }
  if (id === activeCssId) { activeCssId=null; }
  if (id === activeJsId) { activeJsId=null; }
  openFiles = openFiles.filter(f => f.id !== id);
  if (activeTabId === id) {
    activeTabId = openFiles.length > 0 ? openFiles[openFiles.length-1].id : null;
    if (activeTabId) openFile(activeTabId); else updateEditor(null);
  }
  renderTree(); renderTabs(); save(); updateStatus();
}

// ─── RENAME ───
function doRename(id) {
  if (id === 'root') return;
  const file = findById(fileSystem, id);
  if (!file) return;
  const item = fileTree.querySelector(`[data-id="${id}"]`);
  if (!item) return;
  const nameSpan = item.querySelector('.name');
  const oldName = file.name;
  const inp = document.createElement('input');
  inp.className='rename-input'; inp.type='text'; inp.value=oldName;
  nameSpan.replaceWith(inp); inp.focus(); inp.select();
  const done = () => {
    const n = inp.value.trim();
    if (n && n !== oldName) {
      file.name = n;
      const lang = fileLang(n);
      if (id === activeHtmlId && lang !== 'html') { activeHtmlId = null; }
      if (id === activeCssId && lang !== 'css') { activeCssId = null; }
      if (id === activeJsId && lang !== 'js') { activeJsId = null; }
      const oi = openFiles.find(f => f.id === id);
      if (oi) oi.name = n;
      renderTabs(); renderTree(); save(); updateStatus();
      if (lang === 'html' || lang === 'css' || lang === 'js') openFile(id);
      else if (activeTabId === id) { updateEditor(file); }
    } else renderTree();
  };
  inp.addEventListener('blur', done);
  inp.addEventListener('keydown', e => { if (e.key==='Enter') inp.blur(); if (e.key==='Escape') { inp.value=oldName; inp.blur(); } });
}

// ─── CONTEXT MENU ───
let ctxId = null;
function showCtx(x, y, id) {
  ctxId = id;
  const file = findById(fileSystem, id);
  if (!file) return;
  const isFolder = file.type === 'folder', isRoot = id === 'root';
  let h = '';
  if (isFolder && !isRoot) { h += `<div class="context-menu-item" data-action="new-file" data-id="${escAttr(id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg> New File</div><div class="context-menu-item" data-action="new-folder" data-id="${escAttr(id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> New Folder</div><div class="context-menu-sep"></div>`; }
  if (!isRoot) { h += `<div class="context-menu-item" data-action="rename" data-id="${escAttr(id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Rename</div><div class="context-menu-item danger" data-action="delete" data-id="${escAttr(id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Delete</div>`; }
  contextMenu.innerHTML = h;
  contextMenu.style.left = x + 'px'; contextMenu.style.top = y + 'px';
  contextMenu.classList.add('show');
  const r = contextMenu.getBoundingClientRect();
  if (r.right > window.innerWidth) contextMenu.style.left = (x - r.width) + 'px';
  if (r.bottom > window.innerHeight) contextMenu.style.top = (y - r.height) + 'px';
}
function hideCtx() { contextMenu.classList.remove('show'); ctxId = null; }
document.addEventListener('click', e => { if (!contextMenu.contains(e.target)) hideCtx(); });

// ─── AUTOCOMPLETE ───
const snippets = {
  html: [
    { label: 'div', insert: '<div>\n  \n</div>', info: 'tag' },
    { label: 'span', insert: '<span></span>', info: 'tag' },
    { label: 'p', insert: '<p></p>', info: 'tag' },
    { label: 'a', insert: '<a href=""></a>', info: 'tag' },
    { label: 'img', insert: '<img src="" alt="">', info: 'tag' },
    { label: 'ul', insert: '<ul>\n  <li></li>\n</ul>', info: 'tag' },
    { label: 'ol', insert: '<ol>\n  <li></li>\n</ol>', info: 'tag' },
    { label: 'li', insert: '<li></li>', info: 'tag' },
    { label: 'h1', insert: '<h1></h1>', info: 'tag' },
    { label: 'h2', insert: '<h2></h2>', info: 'tag' },
    { label: 'h3', insert: '<h3></h3>', info: 'tag' },
    { label: 'button', insert: '<button></button>', info: 'tag' },
    { label: 'input', insert: '<input type="text">', info: 'tag' },
    { label: 'form', insert: '<form>\n  \n</form>', info: 'tag' },
    { label: 'section', insert: '<section>\n  \n</section>', info: 'tag' },
    { label: 'header', insert: '<header>\n  \n</header>', info: 'tag' },
    { label: 'footer', insert: '<footer>\n  \n</footer>', info: 'tag' },
    { label: 'nav', insert: '<nav>\n  \n</nav>', info: 'tag' },
    { label: 'main', insert: '<main>\n  \n</main>', info: 'tag' },
    { label: 'table', insert: '<table>\n  <tr>\n    <td></td>\n  </tr>\n</table>', info: 'tag' },
    { label: 'script', insert: '<script src=""><\/script>', info: 'tag' },
    { label: 'link', insert: '<link rel="stylesheet" href="">', info: 'tag' },
    { label: 'style', insert: '<style>\n  \n</style>', info: 'tag' },
    { label: 'meta', insert: '<meta charset="UTF-8">', info: 'tag' },
    { label: 'head', insert: '<head>\n  \n</head>', info: 'tag' },
    { label: 'body', insert: '<body>\n  \n</body>', info: 'tag' },
    { label: 'class', insert: 'class=""', info: 'attr' },
    { label: 'id', insert: 'id=""', info: 'attr' },
    { label: 'src', insert: 'src=""', info: 'attr' },
    { label: 'href', insert: 'href=""', info: 'attr' },
    { label: 'alt', insert: 'alt=""', info: 'attr' },
    { label: 'type', insert: 'type=""', info: 'attr' },
    { label: 'name', insert: 'name=""', info: 'attr' },
    { label: 'html', insert: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>', info: 'snippet' },
    { label: 'html5', insert: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>', info: 'snippet' },
  ],
  css: [
    { label: 'color', insert: 'color: ;', info: 'prop' },
    { label: 'background', insert: 'background: ;', info: 'prop' },
    { label: 'background-color', insert: 'background-color: ;', info: 'prop' },
    { label: 'margin', insert: 'margin: ;', info: 'prop' },
    { label: 'padding', insert: 'padding: ;', info: 'prop' },
    { label: 'font-size', insert: 'font-size: ;', info: 'prop' },
    { label: 'font-family', insert: 'font-family: ;', info: 'prop' },
    { label: 'font-weight', insert: 'font-weight: ;', info: 'prop' },
    { label: 'display', insert: 'display: ;', info: 'prop' },
    { label: 'position', insert: 'position: ;', info: 'prop' },
    { label: 'top', insert: 'top: ;', info: 'prop' },
    { label: 'left', insert: 'left: ;', info: 'prop' },
    { label: 'right', insert: 'right: ;', info: 'prop' },
    { label: 'bottom', insert: 'bottom: ;', info: 'prop' },
    { label: 'width', insert: 'width: ;', info: 'prop' },
    { label: 'height', insert: 'height: ;', info: 'prop' },
    { label: 'max-width', insert: 'max-width: ;', info: 'prop' },
    { label: 'min-height', insert: 'min-height: ;', info: 'prop' },
    { label: 'border', insert: 'border: ;', info: 'prop' },
    { label: 'border-radius', insert: 'border-radius: ;', info: 'prop' },
    { label: 'box-shadow', insert: 'box-shadow: ;', info: 'prop' },
    { label: 'text-align', insert: 'text-align: ;', info: 'prop' },
    { label: 'text-decoration', insert: 'text-decoration: ;', info: 'prop' },
    { label: 'overflow', insert: 'overflow: ;', info: 'prop' },
    { label: 'z-index', insert: 'z-index: ;', info: 'prop' },
    { label: 'opacity', insert: 'opacity: ;', info: 'prop' },
    { label: 'transition', insert: 'transition: ;', info: 'prop' },
    { label: 'transform', insert: 'transform: ;', info: 'prop' },
    { label: 'cursor', insert: 'cursor: ;', info: 'prop' },
    { label: 'list-style', insert: 'list-style: ;', info: 'prop' },
    { label: 'flex', insert: 'display: flex;\n  justify-content: ;\n  align-items: ;', info: 'snippet' },
    { label: 'grid', insert: 'display: grid;\n  grid-template-columns: ;\n  gap: ;', info: 'snippet' },
    { label: '@media', insert: '@media (max-width: 768px) {\n  \n}', info: 'snippet' },
    { label: '@keyframes', insert: '@keyframes  {\n  0% { }\n  100% { }\n}', info: 'snippet' },
  ],
  js: [
    { label: 'function', insert: 'function () {\n  \n}', info: 'keyword' },
    { label: 'const', insert: 'const  = ;', info: 'keyword' },
    { label: 'let', insert: 'let  = ;', info: 'keyword' },
    { label: 'var', insert: 'var  = ;', info: 'keyword' },
    { label: 'if', insert: 'if () {\n  \n}', info: 'keyword' },
    { label: 'else', insert: 'else {\n  \n}', info: 'keyword' },
    { label: 'else if', insert: 'else if () {\n  \n}', info: 'keyword' },
    { label: 'for', insert: 'for (let i = 0; i < ; i++) {\n  \n}', info: 'keyword' },
    { label: 'while', insert: 'while () {\n  \n}', info: 'keyword' },
    { label: 'do', insert: 'do {\n  \n} while ();', info: 'keyword' },
    { label: 'switch', insert: 'switch () {\n  case :\n    \n    break;\n}', info: 'keyword' },
    { label: 'return', insert: 'return ;', info: 'keyword' },
    { label: 'class', insert: 'class  {\n  constructor() {\n    \n  }\n}', info: 'keyword' },
    { label: 'new', insert: 'new ();', info: 'keyword' },
    { label: 'try', insert: 'try {\n  \n} catch (e) {\n  \n}', info: 'keyword' },
    { label: 'throw', insert: 'throw new Error();', info: 'keyword' },
    { label: 'import', insert: 'import  from "";', info: 'keyword' },
    { label: 'export', insert: 'export default ;', info: 'keyword' },
    { label: 'async', insert: 'async function () {\n  await ;\n}', info: 'keyword' },
    { label: 'await', insert: 'await ;', info: 'keyword' },
    { label: 'arrow', insert: '() => {\n  \n}', info: 'snippet' },
    { label: 'forEach', insert: '.forEach(() => {\n  \n});', info: 'snippet' },
    { label: 'addEventListener', insert: '.addEventListener("", () => {\n  \n});', info: 'snippet' },
    { label: 'querySelector', insert: 'document.querySelector("")', info: 'snippet' },
    { label: 'querySelectorAll', insert: 'document.querySelectorAll("")', info: 'snippet' },
    { label: 'console.log', insert: 'console.log()', info: 'snippet' },
    { label: 'promise', insert: 'new Promise((resolve, reject) => {\n  \n})', info: 'snippet' },
    { label: 'setTimeout', insert: 'setTimeout(() => {\n  \n}, 1000)', info: 'snippet' },
    { label: 'fetch', insert: 'fetch("")\n  .then(r => r.json())\n  .then(data => {\n    \n  })', info: 'snippet' },
    { label: 'JSON.parse', insert: 'JSON.parse()', info: 'snippet' },
    { label: 'JSON.stringify', insert: 'JSON.stringify()', info: 'snippet' },
    { label: 'Math.random', insert: 'Math.random()', info: 'snippet' },
    { label: 'Math.floor', insert: 'Math.floor()', info: 'snippet' },
    { label: 'Math.max', insert: 'Math.max()', info: 'snippet' },
    { label: 'Math.min', insert: 'Math.min()', info: 'snippet' },
    { label: 'map', insert: '.map(() => {\n  \n})', info: 'snippet' },
    { label: 'filter', insert: '.filter(() => {\n  \n})', info: 'snippet' },
    { label: 'reduce', insert: '.reduce((acc, cur) => {\n  \n}, [])', info: 'snippet' },
    { label: 'localStorage', insert: 'localStorage.setItem("", "")', info: 'snippet' },
    { label: 'addEventListener', insert: '.addEventListener("", () => {\n  \n});', info: 'snippet' },
  ]
};

function getSuggestions(lang, query) {
  if (!query || query.length < 1) return [];
  const list = snippets[lang] || [];
  const q = query.toLowerCase();
  const starts = list.filter(s => s.label.toLowerCase().startsWith(q));
  const includes = list.filter(s => !s.label.toLowerCase().startsWith(q) && s.label.toLowerCase().includes(q));
  return [...starts, ...includes].slice(0, 10);
}

function getCursorPixelPos(ta, pos) {
  const line = ta.value.substring(0, pos).split('\n').length;
  const col = pos - ta.value.substring(0, pos).lastIndexOf('\n') - 1;
  const lineH = 22;
  const charW = 7.8;
  return {
    top: (line - 1) * lineH,
    left: col * charW
  };
}

let suggestIndex = -1;
let _suggestions = [];

function showSuggestions() {
  const name = editorFilename.textContent;
  const lang = name === 'No file open' ? 'other' : fileLang(name);
  if (lang === 'other') { suggestBox.classList.remove('show'); return; }

  const ta = editorCode;
  const pos = ta.selectionStart;
  const text = ta.value;
  const before = text.substring(0, pos);

  let match = before.match(/([\w:-]+)$/);
  if (!match) { suggestBox.classList.remove('show'); return; }

  const word = match[1];
  const suggestions = getSuggestions(lang, word);
  if (suggestions.length === 0) { suggestBox.classList.remove('show'); return; }

  const cursor = getCursorPixelPos(ta, pos);
  const boxTop = cursor.top;
  const boxLeft = Math.min(cursor.left + 50, 320);

  suggestBox.style.top = (boxTop - 4) + 'px';
  suggestBox.style.left = boxLeft + 'px';

  const infoColors = {
    tag: 'var(--hl-tag)',
    attr: 'var(--hl-attr)',
    prop: 'var(--hl-attr)',
    keyword: 'var(--hl-keyword)',
    snippet: 'var(--accent)',
  };

  _suggestions = suggestions;
  suggestBox.innerHTML = suggestions.map((s, i) =>
    `<div class="suggest-item${i === suggestIndex ? ' active' : ''}" data-idx="${i}">
      <span class="suggest-label">${esc(s.label)}</span>
      <span class="suggest-info" style="color:${infoColors[s.info]||'#888'}">${s.info}</span>
    </div>`
  ).join('');
  suggestBox.classList.add('show');
  suggestBox.dataset.wordLen = word.length;
}

function applySuggestion(insert) {
  const ta = editorCode;
  const pos = ta.selectionStart;
  const wordLen = parseInt(suggestBox.dataset.wordLen || '0');
  const before = ta.value.substring(0, pos);
  const after = ta.value.substring(pos);
  const replace = before.substring(0, before.length - wordLen);
  ta.value = replace + insert + after;
  const cursorPos = replace.length + insert.length;
  ta.selectionStart = ta.selectionEnd = cursorPos;
  ta.dispatchEvent(new Event('input'));
  ta.focus();
  suggestBox.classList.remove('show');
}

suggestBox.addEventListener('click', e => {
  const item = e.target.closest('.suggest-item');
  if (item) {
    const idx = parseInt(item.dataset.idx);
    const s = _suggestions[idx];
    if (s) applySuggestion(s.insert);
  }
});

// ─── EVENTS ───
editorCode.addEventListener('input', function() {
  updateGutter();
  updateHighlight();
  updateStatus();
  showSuggestions();
});
editorCode.addEventListener('scroll', function() {
  editorGutter.scrollTop = this.scrollTop;
  codeHighlight.scrollTop = this.scrollTop;
  const g = document.getElementById('indentGuides');
  if (g) g.style.transform = 'translateY(-' + this.scrollTop + 'px)';
});
editorCode.addEventListener('click', updateStatus);
editorCode.addEventListener('keyup', function(e) {
  updateStatus();
  if (e.key === 'Escape') { suggestBox.classList.remove('show'); }
  if (e.key.length === 1 || e.key === 'Backspace') { suggestIndex = -1; showSuggestions(); }
});
editorCode.addEventListener('keydown', function(e) {
  if (suggestBox.classList.contains('show')) {
    const items = suggestBox.querySelectorAll('.suggest-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      suggestIndex = Math.min(suggestIndex + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('active', i === suggestIndex));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      suggestIndex = Math.max(suggestIndex - 1, 0);
      items.forEach((el, i) => el.classList.toggle('active', i === suggestIndex));
      return;
    }
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();
      const active = suggestBox.querySelector('.suggest-item.active');
      const first = items[0];
      const target = active || first;
      if (target) {
        const idx = parseInt(target.dataset.idx);
        const s = _suggestions[idx];
        if (s) applySuggestion(s.insert);
      }
      return;
    }
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    const s=this.selectionStart, en=this.selectionEnd;
    this.value = this.value.substring(0,s) + '  ' + this.value.substring(en);
    this.selectionStart = this.selectionEnd = s + 2;
    this.dispatchEvent(new Event('input'));
  }
  // Backspace: delete full indent level (2 spaces) at once
  if (e.key === 'Backspace' && !(e.ctrlKey||e.metaKey)) {
    const ta = this, pos = ta.selectionStart;
    if (ta.selectionStart === ta.selectionEnd && pos > 0) {
      const text = ta.value;
      const lineStart = text.lastIndexOf('\n', pos - 1) + 1;
      const beforeOnLine = text.substring(lineStart, pos);
      if (/^\s+$/.test(beforeOnLine) && beforeOnLine.length > 0) {
        e.preventDefault();
        const indent = Math.min(beforeOnLine.length, 2);
        ta.value = text.substring(0, pos - indent) + text.substring(pos);
        ta.selectionStart = ta.selectionEnd = pos - indent;
        ta.dispatchEvent(new Event('input'));
        return;
      }
    }
  }
  if (e.key === '>' && fileLang(editorFilename.textContent) === 'html' && _settings?.autoCloseTags !== false) {
    const ta = this, pos = ta.selectionStart, text = ta.value;
    const before = text.substring(0, pos);
    const tagMatch = before.match(/<([\w-]+)([\s>][^>]*)?$/);
    if (tagMatch) {
      const tag = tagMatch[1];
      const selfClosing = ['br','hr','img','input','meta','link','area','base','col','embed','source','track','wbr'];
      if (!selfClosing.includes(tag)) {
        e.preventDefault();
        const after = text.substring(pos);
        ta.value = before + '></' + tag + '>' + after;
        ta.selectionStart = ta.selectionEnd = pos + 1;
        ta.dispatchEvent(new Event('input'));
      }
    }
  }
  if (e.key === 'Enter' && (e.ctrlKey||e.metaKey)) { e.preventDefault(); runCode(); }
  // Auto-indent on Enter after { [ (
  if (e.key === 'Enter' && !(e.ctrlKey||e.metaKey)) {
    const ta = this, pos = ta.selectionStart, text = ta.value;
    if (pos > 0 && (text[pos - 1] === '{' || text[pos - 1] === '(' || text[pos - 1] === '[')) {
      const restLine = text.substring(pos).split('\n')[0];
      if (restLine.trim() === '') {
        e.preventDefault();
        const lineStart = text.lastIndexOf('\n', pos - 1) + 1;
        const curLine = text.substring(lineStart, pos);
        const indentMatch = curLine.match(/^(\s*)/);
        const currentIndent = indentMatch ? indentMatch[1] : '';
        const nextIndent = currentIndent + '  ';
        ta.value = text.substring(0, pos) + '\n' + nextIndent + text.substring(pos);
        ta.dispatchEvent(new Event('input'));
        ta.selectionStart = ta.selectionEnd = pos + 1 + nextIndent.length;
        return;
      }
    }
  }
  if (e.key === 's' && (e.ctrlKey||e.metaKey)) { e.preventDefault(); saveCurrent(); runCode(); }
});

// ─── INIT ───
function init() {
  fileSystem = load() || JSON.parse(JSON.stringify(defaultProject));

  const initOpen = (id) => {
    const f = findById(fileSystem, id);
    if (f) {
      if (!openFiles.find(o => o.id === id)) openFiles.push({ id, name: f.name, lang: fileLang(f.name) });
      return id;
    }
    return null;
  };

  activeHtmlId = initOpen('f_html');
  activeCssId = initOpen('f_css');
  activeJsId = initOpen('f_js');
  activeTabId = activeHtmlId || activeCssId || activeJsId;

  const initialFile = activeTabId ? findById(fileSystem, activeTabId) : null;
  updateEditor(initialFile);
  renderTree(); renderTabs(); updateStatus(); save();
  loadSizes();
  applySettings();
  if (_settings.autoSave) {
    setInterval(() => { if (activeTabId) saveCurrent(); }, 30000);
  }
}

// ─── EVENT DELEGATION (CSP-safe) ───
function requireAuth() { if (!firebase.auth().currentUser) { window.location.href = '../login'; return false; } return true; }

function setupDelegation() {
  document.querySelector('.toolbar')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const a = btn.dataset.action;
    if (a === 'home') window.location.href = '../index';
    else if (a === 'reset') resetAll();
    else if (a === 'run') runCode();
    else if (a === 'settings') { if (requireAuth()) showSettings(); }
    else if (a === 'export') { if (requireAuth()) exportProject(); }
    else if (a === 'import') { if (requireAuth()) document.getElementById('importInput')?.click(); }
    else if (a === 'download-zip') { if (requireAuth()) downloadZip(); }
    else if (a === 'logout') { signOut().then(() => window.location.href = '../login'); }
  });

  document.querySelector('.sidebar-header-actions')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn || !requireAuth()) return;
    if (btn.dataset.action === 'new-file') showNew('file');
    else if (btn.dataset.action === 'new-folder') showNew('folder');
  });

  document.querySelector('.editor-actions')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn || btn.dataset.action !== 'close-current') return;
    closeCurrent();
  });

  fileTree.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (btn) {
      if (!requireAuth()) return;
      const a = btn.dataset.action;
      const id = btn.dataset.id;
      if (a === 'rename') doRename(id);
      else if (a === 'delete') doDelete(id);
      else if (a === 'new-file') showNew('file', id);
      else if (a === 'new-folder') showNew('folder', id);
      return;
    }
    const item = e.target.closest('.tree-item');
    if (!item) return;
    if (!firebase.auth().currentUser) { alert('Please sign in to open files.'); return; }
    const id = item.dataset.id;
    const node = findById(fileSystem, id);
    if (!node) return;
    if (node.type === 'file') openFile(id);
    else { node._expanded = !(node._expanded !== false); renderTree(); save(); }
  });

  tabsBar.addEventListener('click', e => {
    const closeBtn = e.target.closest('[data-action="close-tab"]');
    if (closeBtn) { closeTab(closeBtn.dataset.id); return; }
    const tab = e.target.closest('.tab');
    if (tab) openFile(tab.dataset.id);
  });

  contextMenu.addEventListener('click', e => {
    const item = e.target.closest('[data-action]');
    if (!item) return;
    const a = item.dataset.action;
    const id = item.dataset.id;
    if (a === 'new-file') showNew('file', id);
    else if (a === 'new-folder') showNew('folder', id);
    else if (a === 'rename') doRename(id);
    else if (a === 'delete') doDelete(id);
    hideCtx();
  });

  dialogContainer.addEventListener('click', e => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    if (target.dataset.action === 'close-overlay' && e.target === target) closeDialog();
    else if (target.dataset.action === 'close-dialog') closeDialog();
  });

  window.addEventListener('message', e => {
    const preview = document.getElementById('previewFrame');
    if (e.source !== preview?.contentWindow) return;
    if (e.data && e.data.type === 'deoit_console') {
      if (e.data.level === 'clear') { clearConsole(); return; }
      addConsoleEntry(e.data.level || 'log', e.data.args || ['']);
    }
  });

  const clearBtn = document.querySelector('[data-action="clear-console"]');
  if (clearBtn) clearBtn.addEventListener('click', clearConsole);

  document.getElementById('importInput')?.addEventListener('change', function(e) {
    const file = this.files[0];
    if (!file) return;
    importProject(file);
    this.value = '';
  });

  setupResize();
}

/*** THEMES ***/
const THEMES = {
  dark: {
    name: 'Dark', type: 'dark',
    '--bg-app': '#0d0d0d', '--bg-surface': '#131313', '--bg-elevated': '#1a1a1a',
    '--bg-editor': '#0f0f0f', '--bg-gutter': '#090909', '--bg-sidebar': '#101010',
    '--bg-console': '#0c0c0c', '--bg-toolbar': '#111', '--bg-panel-header': '#0a0a0a',
    '--border': '#222', '--border-light': '#1a1a1a',
    '--text': '#d4d4d4', '--text-dim': '#8a8a8a', '--text-muted': '#555',
    '--accent': '#d9d9d9', '--accent-hover': '#bbb',
    '--hl-comment': '#5c6370', '--hl-doctype': '#56b6c2', '--hl-tag': '#e06c75',
    '--hl-tag-special': '#d19a66', '--hl-attr': '#61afef', '--hl-string': '#98c379',
    '--hl-string-interp': '#d19a66', '--hl-entity': '#e5c07b', '--hl-keyword': '#c678dd',
    '--hl-keyword-control': '#c678dd', '--hl-literal': '#e5c07b', '--hl-number': '#d19a66',
    '--hl-unit': '#56b6c2', '--hl-builtin': '#e5c07b', '--hl-property': '#61afef',
    '--hl-value': '#e5c07b', '--hl-selector': '#e06c75', '--hl-selector-class': '#e5c07b',
    '--hl-selector-id': '#56b6c2', '--hl-pseudo': '#c678dd', '--hl-function': '#61afef',
    '--hl-function-name': '#61afef', '--hl-operator': '#abb2bf', '--hl-bracket': '#abb2bf',
    '--hl-variable': '#e06c75', '--hl-important': '#c678dd',
    '--ui-suggest-bg': '#1c1c1c', '--ui-suggest-border': '#222', '--ui-suggest-shadow': 'rgba(0,0,0,0.6)',
    '--ui-context-bg': '#181818', '--ui-context-border': '#222',
    '--ui-dialog-bg': '#181818', '--ui-dialog-border': '#222', '--ui-scrollbar': '#2a2a2a'
  },
  light: {
    name: 'Light', type: 'light',
    '--bg-app': '#f5f5f5', '--bg-surface': '#fff', '--bg-elevated': '#f0f0f0',
    '--bg-editor': '#fafafa', '--bg-gutter': '#f0f0f0', '--bg-sidebar': '#f8f8f8',
    '--bg-console': '#fafafa', '--bg-toolbar': '#f0f0f0', '--bg-panel-header': '#e8e8e8',
    '--border': '#ddd', '--border-light': '#e5e5e5',
    '--text': '#1e1e1e', '--text-dim': '#555', '--text-muted': '#999',
    '--accent': '#333', '--accent-hover': '#555',
    '--hl-comment': '#a0a0a0', '--hl-doctype': '#1a7bc4', '--hl-tag': '#d14',
    '--hl-tag-special': '#c60', '--hl-attr': '#1a7bc4', '--hl-string': '#690',
    '--hl-string-interp': '#c60', '--hl-entity': '#b8860b', '--hl-keyword': '#a67f59',
    '--hl-keyword-control': '#a67f59', '--hl-literal': '#b8860b', '--hl-number': '#c60',
    '--hl-unit': '#1a7bc4', '--hl-builtin': '#b8860b', '--hl-property': '#1a7bc4',
    '--hl-value': '#b8860b', '--hl-selector': '#d14', '--hl-selector-class': '#b8860b',
    '--hl-selector-id': '#1a7bc4', '--hl-pseudo': '#a67f59', '--hl-function': '#1a7bc4',
    '--hl-function-name': '#1a7bc4', '--hl-operator': '#333', '--hl-bracket': '#333',
    '--hl-variable': '#d14', '--hl-important': '#a67f59',
    '--ui-suggest-bg': '#fff', '--ui-suggest-border': '#ddd', '--ui-suggest-shadow': 'rgba(0,0,0,0.1)',
    '--ui-context-bg': '#fff', '--ui-context-border': '#ddd',
    '--ui-dialog-bg': '#fff', '--ui-dialog-border': '#ddd', '--ui-scrollbar': '#ccc'
  },
  monokai: {
    name: 'Monokai', type: 'dark',
    '--bg-app': '#1b1b1b', '--bg-surface': '#222', '--bg-elevated': '#2a2a2a',
    '--bg-editor': '#1b1b1b', '--bg-gutter': '#151515', '--bg-sidebar': '#1e1e1e',
    '--bg-console': '#181818', '--bg-toolbar': '#1e1e1e', '--bg-panel-header': '#151515',
    '--border': '#3a3a3a', '--border-light': '#2a2a2a',
    '--text': '#f8f8f2', '--text-dim': '#aaa', '--text-muted': '#666',
    '--accent': '#a6e22e', '--accent-hover': '#c3f060',
    '--hl-comment': '#75715e', '--hl-doctype': '#f92672', '--hl-tag': '#f92672',
    '--hl-tag-special': '#fd971f', '--hl-attr': '#a6e22e', '--hl-string': '#e6db74',
    '--hl-string-interp': '#fd971f', '--hl-entity': '#a6e22e', '--hl-keyword': '#f92672',
    '--hl-keyword-control': '#f92672', '--hl-literal': '#a6e22e', '--hl-number': '#ae81ff',
    '--hl-unit': '#ae81ff', '--hl-builtin': '#a6e22e', '--hl-property': '#a6e22e',
    '--hl-value': '#e6db74', '--hl-selector': '#f92672', '--hl-selector-class': '#a6e22e',
    '--hl-selector-id': '#fd971f', '--hl-pseudo': '#f92672', '--hl-function': '#a6e22e',
    '--hl-function-name': '#a6e22e', '--hl-operator': '#f8f8f2', '--hl-bracket': '#f8f8f2',
    '--hl-variable': '#f92672', '--hl-important': '#f92672',
    '--ui-suggest-bg': '#2a2a2a', '--ui-suggest-border': '#3a3a3a', '--ui-suggest-shadow': 'rgba(0,0,0,0.6)',
    '--ui-context-bg': '#2a2a2a', '--ui-context-border': '#3a3a3a',
    '--ui-dialog-bg': '#2a2a2a', '--ui-dialog-border': '#3a3a3a', '--ui-scrollbar': '#444'
  },
  nord: {
    name: 'Nord', type: 'dark',
    '--bg-app': '#2e3440', '--bg-surface': '#3b4252', '--bg-elevated': '#434c5e',
    '--bg-editor': '#2e3440', '--bg-gutter': '#252a34', '--bg-sidebar': '#2e3440',
    '--bg-console': '#2e3440', '--bg-toolbar': '#3b4252', '--bg-panel-header': '#252a34',
    '--border': '#4c566a', '--border-light': '#3b4252',
    '--text': '#eceff4', '--text-dim': '#d8dee9', '--text-muted': '#7b88a1',
    '--accent': '#88c0d0', '--accent-hover': '#8fbcbb',
    '--hl-comment': '#616e88', '--hl-doctype': '#81a1c1', '--hl-tag': '#81a1c1',
    '--hl-tag-special': '#b48ead', '--hl-attr': '#8fbcbb', '--hl-string': '#a3be8c',
    '--hl-string-interp': '#b48ead', '--hl-entity': '#88c0d0', '--hl-keyword': '#81a1c1',
    '--hl-keyword-control': '#81a1c1', '--hl-literal': '#88c0d0', '--hl-number': '#b48ead',
    '--hl-unit': '#8fbcbb', '--hl-builtin': '#88c0d0', '--hl-property': '#8fbcbb',
    '--hl-value': '#a3be8c', '--hl-selector': '#81a1c1', '--hl-selector-class': '#88c0d0',
    '--hl-selector-id': '#8fbcbb', '--hl-pseudo': '#81a1c1', '--hl-function': '#88c0d0',
    '--hl-function-name': '#88c0d0', '--hl-operator': '#d8dee9', '--hl-bracket': '#d8dee9',
    '--hl-variable': '#81a1c1', '--hl-important': '#81a1c1',
    '--ui-suggest-bg': '#3b4252', '--ui-suggest-border': '#4c566a', '--ui-suggest-shadow': 'rgba(0,0,0,0.5)',
    '--ui-context-bg': '#3b4252', '--ui-context-border': '#4c566a',
    '--ui-dialog-bg': '#3b4252', '--ui-dialog-border': '#4c566a', '--ui-scrollbar': '#4c566a'
  },
  dracula: {
    name: 'Dracula', type: 'dark',
    '--bg-app': '#282a36', '--bg-surface': '#2d2f3f', '--bg-elevated': '#363850',
    '--bg-editor': '#282a36', '--bg-gutter': '#21222c', '--bg-sidebar': '#282a36',
    '--bg-console': '#282a36', '--bg-toolbar': '#2d2f3f', '--bg-panel-header': '#21222c',
    '--border': '#44475a', '--border-light': '#383a4a',
    '--text': '#f8f8f2', '--text-dim': '#bd93f9', '--text-muted': '#6272a4',
    '--accent': '#bd93f9', '--accent-hover': '#caa9fa',
    '--hl-comment': '#6272a4', '--hl-doctype': '#ff79c6', '--hl-tag': '#ff79c6',
    '--hl-tag-special': '#ffb86c', '--hl-attr': '#50fa7b', '--hl-string': '#f1fa8c',
    '--hl-string-interp': '#ffb86c', '--hl-entity': '#50fa7b', '--hl-keyword': '#ff79c6',
    '--hl-keyword-control': '#ff79c6', '--hl-literal': '#50fa7b', '--hl-number': '#bd93f9',
    '--hl-unit': '#8be9fd', '--hl-builtin': '#50fa7b', '--hl-property': '#50fa7b',
    '--hl-value': '#f1fa8c', '--hl-selector': '#ff79c6', '--hl-selector-class': '#50fa7b',
    '--hl-selector-id': '#ffb86c', '--hl-pseudo': '#ff79c6', '--hl-function': '#50fa7b',
    '--hl-function-name': '#50fa7b', '--hl-operator': '#ff79c6', '--hl-bracket': '#f8f8f2',
    '--hl-variable': '#ff79c6', '--hl-important': '#ff79c6',
    '--ui-suggest-bg': '#363850', '--ui-suggest-border': '#44475a', '--ui-suggest-shadow': 'rgba(0,0,0,0.6)',
    '--ui-context-bg': '#363850', '--ui-context-border': '#44475a',
    '--ui-dialog-bg': '#363850', '--ui-dialog-border': '#44475a', '--ui-scrollbar': '#44475a'
  },
  'one-dark': {
    name: 'One Dark', type: 'dark',
    '--bg-app': '#1e2127', '--bg-surface': '#252830', '--bg-elevated': '#2c313c',
    '--bg-editor': '#1e2127', '--bg-gutter': '#181a1f', '--bg-sidebar': '#1e2127',
    '--bg-console': '#1e2127', '--bg-toolbar': '#252830', '--bg-panel-header': '#181a1f',
    '--border': '#3e4452', '--border-light': '#2c313c',
    '--text': '#abb2bf', '--text-dim': '#7f848e', '--text-muted': '#5c6370',
    '--accent': '#61afef', '--accent-hover': '#82c1ff',
    '--hl-comment': '#5c6370', '--hl-doctype': '#61afef', '--hl-tag': '#e06c75',
    '--hl-tag-special': '#d19a66', '--hl-attr': '#61afef', '--hl-string': '#98c379',
    '--hl-string-interp': '#d19a66', '--hl-entity': '#e5c07b', '--hl-keyword': '#c678dd',
    '--hl-keyword-control': '#c678dd', '--hl-literal': '#e5c07b', '--hl-number': '#d19a66',
    '--hl-unit': '#56b6c2', '--hl-builtin': '#e5c07b', '--hl-property': '#61afef',
    '--hl-value': '#e5c07b', '--hl-selector': '#e06c75', '--hl-selector-class': '#e5c07b',
    '--hl-selector-id': '#56b6c2', '--hl-pseudo': '#c678dd', '--hl-function': '#61afef',
    '--hl-function-name': '#61afef', '--hl-operator': '#abb2bf', '--hl-bracket': '#abb2bf',
    '--hl-variable': '#e06c75', '--hl-important': '#c678dd',
    '--ui-suggest-bg': '#2c313c', '--ui-suggest-border': '#3e4452', '--ui-suggest-shadow': 'rgba(0,0,0,0.6)',
    '--ui-context-bg': '#2c313c', '--ui-context-border': '#3e4452',
    '--ui-dialog-bg': '#2c313c', '--ui-dialog-border': '#3e4452', '--ui-scrollbar': '#3e4452'
  },
  solarized: {
    name: 'Solarized Dark', type: 'dark',
    '--bg-app': '#002b36', '--bg-surface': '#073642', '--bg-elevated': '#094552',
    '--bg-editor': '#002b36', '--bg-gutter': '#00212a', '--bg-sidebar': '#002b36',
    '--bg-console': '#002b36', '--bg-toolbar': '#073642', '--bg-panel-header': '#00212a',
    '--border': '#37555f', '--border-light': '#1f434f',
    '--text': '#839496', '--text-dim': '#657b83', '--text-muted': '#475b62',
    '--accent': '#268bd2', '--accent-hover': '#389de4',
    '--hl-comment': '#586e75', '--hl-doctype': '#268bd2', '--hl-tag': '#dc322f',
    '--hl-tag-special': '#cb4b16', '--hl-attr': '#268bd2', '--hl-string': '#2aa198',
    '--hl-string-interp': '#cb4b16', '--hl-entity': '#b58900', '--hl-keyword': '#859900',
    '--hl-keyword-control': '#859900', '--hl-literal': '#b58900', '--hl-number': '#d33682',
    '--hl-unit': '#268bd2', '--hl-builtin': '#b58900', '--hl-property': '#268bd2',
    '--hl-value': '#2aa198', '--hl-selector': '#dc322f', '--hl-selector-class': '#b58900',
    '--hl-selector-id': '#268bd2', '--hl-pseudo': '#859900', '--hl-function': '#268bd2',
    '--hl-function-name': '#268bd2', '--hl-operator': '#839496', '--hl-bracket': '#839496',
    '--hl-variable': '#dc322f', '--hl-important': '#859900',
    '--ui-suggest-bg': '#073642', '--ui-suggest-border': '#37555f', '--ui-suggest-shadow': 'rgba(0,0,0,0.5)',
    '--ui-context-bg': '#073642', '--ui-context-border': '#37555f',
    '--ui-dialog-bg': '#073642', '--ui-dialog-border': '#37555f', '--ui-scrollbar': '#37555f'
  }
};

const THEME_LIST = Object.keys(THEMES);
const FONTS = { jetbrains: "'JetBrains Mono', monospace", firacode: "'Fira Code', monospace", consolas: "Consolas, monospace", cascadia: "'Cascadia Code', monospace", menlo: "Menlo, monospace", dejavu: "'DejaVu Sans Mono', monospace" };
const SETTINGS_KEY = 'deoit_settings';
let _settings = null;

function defaultSettings() {
  return {
    theme: 'dark', uiDensity: 'comfortable', borderRadius: 8, animationSpeed: 100, sidebarWidth: 240,
    fontSize: 14, fontFamily: 'jetbrains', fontLigatures: true, tabSize: 2, lineHeight: 1.6, letterSpacing: 0, fontWeight: 'normal',
    wordWrap: false, lineNumbers: true, indentGuides: true, activeLine: true, renderWhitespace: 'none',
    cursorStyle: 'line', smoothScroll: true, bracketMatch: true, codeFolding: true, stickyScroll: true, renderLineHighlight: 'all',
    autoCloseTags: true, autoCloseBrackets: true, autoIndent: true, snippetSuggest: true,
    formatOnSave: false, formatOnPaste: false, trimWhitespace: true, finalNewline: true,
    multiCursorModifier: 'ctrlCmd', acceptSuggestionOnEnter: true,
    autoSave: false, autoSaveInterval: 30,
    consoleFontSize: 12, consoleFontFamily: 'jetbrains', consoleMaxLines: 500, consoleAutoClear: false, consoleTimestamps: false, consoleWrap: true,
    explorerFontSize: 13, explorerCompact: false, confirmDelete: true, revealActive: true, sortOrder: 'name', showHidden: false,
    showBreadcrumbs: true, cursorBlinking: 'blink'
  };
}

function loadSettings() {
  try {
    const s = localStorage.getItem(SETTINGS_KEY);
    if (s) { _settings = { ...defaultSettings(), ...JSON.parse(s) }; return _settings; }
  } catch(e) {}
  _settings = defaultSettings();
  return _settings;
}

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(_settings)); } catch(e) {}
}

function applyTheme(name) {
  const t = THEMES[name];
  if (!t) return;
  Object.entries(t).forEach(([k, v]) => {
    if (k !== 'name' && k !== 'type') document.documentElement.style.setProperty(k, v);
  });
}

function applySettings() {
  const s = loadSettings();
  _settings = s;
  applyTheme(s.theme);
  document.documentElement.style.setProperty('--editor-font-size', s.fontSize + 'px');
  document.documentElement.style.setProperty('--editor-tab-size', String(s.tabSize));
  document.documentElement.style.setProperty('--editor-line-height', String(s.lineHeight));
  document.documentElement.style.setProperty('--editor-letter-spacing', s.letterSpacing + 'px');
  document.documentElement.style.setProperty('--radius', s.borderRadius + 'px');
  document.documentElement.style.setProperty('--sidebar-w', s.sidebarWidth + 'px');
  const ff = FONTS[s.fontFamily] || FONTS.jetbrains;
  document.documentElement.style.setProperty('--font-mono', ff);
  document.documentElement.style.setProperty('--editor-font-weight', s.fontWeight);
  document.documentElement.style.setProperty('--font-ligatures', s.fontLigatures ? 'normal' : 'none');
  document.documentElement.style.setProperty('--editor-caret-shape', ({line:'bar', block:'block', underline:'underscore', 'line-thin':'auto'})[s.cursorStyle] || 'bar');
  document.body.classList.toggle('editor-word-wrap', s.wordWrap);
  document.body.classList.toggle('editor-no-gutter', !s.lineNumbers);
  document.body.classList.toggle('editor-no-indent-guides', !s.indentGuides);
  document.getElementById('editorCode').style.scrollBehavior = s.smoothScroll ? 'smooth' : 'auto';
  document.getElementById('consoleBody').style.fontSize = s.consoleFontSize + 'px';
  document.getElementById('consoleBody').style.fontFamily = FONTS[s.consoleFontFamily] || FONTS.jetbrains;
  if (s.consoleHeight) document.documentElement.style.setProperty('--console-h', s.consoleHeight + 'px');
}

const _sections = [
  { id: 'appearance', label: 'Appearance', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><circle cx="10" cy="10" r="8"/><circle cx="10" cy="10" r="3"/><line x1="10" y1="1" x2="10" y2="3"/><line x1="10" y1="17" x2="10" y2="19"/><line x1="1" y1="10" x2="3" y2="10"/><line x1="17" y1="10" x2="19" y2="10"/></svg>' },
  { id: 'editor', label: 'Editor', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><polyline points="4 3 8 7 4 11"/><line x1="11" y1="7" x2="16" y2="7"/></svg>' },
  { id: 'behavior', label: 'Behavior', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><rect x="3" y="3" width="14" height="14" rx="2"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="13" x2="10" y2="13"/></svg>' },
  { id: 'console', label: 'Console', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><polyline points="4 5 8 9 4 13"/><line x1="11" y1="11" x2="16" y2="11"/></svg>' },
  { id: 'files', label: 'Files', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M17 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3l2 2h5a2 2 0 0 1 2 2z"/></svg>' },
  { id: 'advanced', label: 'Advanced', icon: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><circle cx="10" cy="10" r="2.5"/><path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4"/></svg>' }
];

function showSettings() {
  const s = loadSettings();
  _settings = s;
  let activeSection = 'appearance';

  function render() {
    dialogContainer.innerHTML = `
    <div class="dialog-overlay" data-action="close-overlay">
      <div class="dialog-box st-dialog" style="padding:0;overflow:hidden;">
        <div class="st-grid">
          <div style="background:var(--bg-toolbar);border-right:1px solid var(--border-light);padding:8px 0;overflow-y:auto;">
            ${_sections.map(x => `
              <div class="st-side" data-id="${x.id}" style="display:flex;align-items:center;gap:8px;padding:8px 14px;margin:1px 6px;border-radius:6px;cursor:pointer;font-size:12px;color:${x.id===activeSection?'var(--text)':'var(--text-dim)'};background:${x.id===activeSection?'rgba(255,255,255,0.06)':'transparent'};transition:0.1s;">
                ${x.icon} ${x.label}
              </div>
            `).join('')}
            <div style="height:1px;background:var(--border-light);margin:8px 14px;"></div>
            <div style="padding:8px 14px;margin:1px 6px;font-size:10px;color:var(--text-muted);">v1.0 &bull; ${THEME_LIST.length} themes</div>
          </div>
          <div style="display:flex;flex-direction:column;overflow:hidden;">
            <div style="flex:1;overflow-y:auto;padding:18px 20px;">${sectionContent(activeSection)}</div>
            <div class="dialog-actions" style="padding:10px 18px;border-top:1px solid var(--border-light);background:var(--bg-toolbar);flex-shrink:0;">
              <button class="dialog-btn secondary" data-action="close-dialog">Close</button>
              <button class="dialog-btn primary" id="settingsSave">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.querySelectorAll('.st-side').forEach(el => el.addEventListener('click', () => { activeSection = el.dataset.id; render(); }));
    attachSettingsHandlers();
  }
  render();
}

function sectionContent(id) {
  const s = _settings;
  const sel = (key, opts) => opts.map(([v, l]) => `<option value="${v}" ${String(s[key])===String(v)?'selected':''}>${l}</option>`).join('');
  const tog = (key, label, desc) => `<label style="display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:6px;cursor:pointer;font-size:12px;color:var(--text-dim);background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);"><input type="checkbox" data-key="${key}" ${s[key]?'checked':''} style="width:15px;height:15px;accent-color:var(--accent);cursor:pointer;flex-shrink:0;"><span style="flex:1;">${label}</span>${desc?'<span style="font-size:10px;color:var(--text-muted);">'+desc+'</span>':''}</label>`;
  const rng = (key, label, mi, mx, step, unit) => `<div style="padding:5px 0;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;"><span style="font-size:12px;color:var(--text-dim);">${label}</span><span class="rng-val" style="font-size:11px;color:var(--text-muted);font-family:var(--font-mono);">${s[key]}${unit||''}</span></div><input type="range" data-key="${key}" min="${mi}" max="${mx}" step="${step||1}" value="${s[key]}" style="width:100%;margin:0;"></div>`;
  const card = (title, content) => `<div style="margin-bottom:16px;"><div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid var(--border-light);">${title}</div>${content}</div>`;

  const sections = {
    appearance: `
      ${card('Theme', `
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
          ${THEME_LIST.map(k => { const t = THEMES[k]; return `
            <label style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;border-radius:8px;cursor:pointer;font-size:11px;color:var(--text-dim);background:rgba(255,255,255,0.02);border:2px solid ${s.theme===k?'var(--accent)':'transparent'};transition:0.12s;">
              <div style="width:100%;height:32px;border-radius:5px;background:linear-gradient(135deg,${t['--bg-app']},${t['--bg-elevated']});border:1px solid var(--border);"></div>
              <input type="radio" name="stTheme" value="${k}" ${s.theme===k?'checked':''} style="accent-color:var(--accent);">
              ${t.name}
            </label>`;}).join('')}
        </div>`)}
      ${card('UI', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Density</div>
            <select data-key="uiDensity" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('uiDensity',[['compact','Compact'],['comfortable','Comfortable'],['spacious','Spacious']])}
            </select>
          </div>
          ${rng('borderRadius','Roundness',0,16,1,'px')}
          ${rng('animationSpeed','Animation',0,300,10,'ms')}
          ${tog('showBreadcrumbs','Breadcrumbs','Show path above editor')}
        </div>`)}
      ${card('Typography', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${rng('fontSize','Size',10,28,1,'px')}
          ${rng('lineHeight','Line height',1,2.4,0.1,'')}
          ${rng('letterSpacing','Letter spacing',0,3,0.1,'px')}
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Family</div>
            <select data-key="fontFamily" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('fontFamily',[['jetbrains','JetBrains Mono'],['firacode','Fira Code'],['cascadia','Cascadia Code'],['consolas','Consolas'],['menlo','Menlo'],['dejavu','DejaVu Sans Mono']])}
            </select>
          </div>
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Weight</div>
            <select data-key="fontWeight" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('fontWeight',[['normal','Normal'],['medium','Medium'],['bold','Bold']])}
            </select>
          </div>
          ${tog('fontLigatures','Ligatures','fi &rarr; \uFB01')}
        </div>`)}`,
    editor: `
      ${card('Spacing & Cursor', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${rng('tabSize','Tab size',1,8,1,' spaces')}
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Cursor</div>
            <select data-key="cursorStyle" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('cursorStyle',[['line','Line'],['block','Block'],['underline','Underline'],['line-thin','Line (thin)']])}
            </select>
          </div>
        </div>`)}
      ${card('Display', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('wordWrap','Word wrap','Wrap long lines')}
          ${tog('lineNumbers','Line numbers','Show gutter')}
          ${tog('indentGuides','Indent guides','Vertical lines')}
          ${tog('activeLine','Active line','Highlight current')}
          ${tog('smoothScroll','Smooth scroll','Animated')}
          ${tog('stickyScroll','Sticky scroll','Show scope at top')}
          ${tog('bracketMatch','Bracket match','Highlight pairs')}
          ${tog('codeFolding','Code folding','Collapse blocks')}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;">
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Line highlight</div>
            <select data-key="renderLineHighlight" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('renderLineHighlight',[['all','All'],['gutter','Gutter only'],['none','None']])}
            </select>
          </div>
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Render whitespace</div>
            <select data-key="renderWhitespace" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('renderWhitespace',[['none','None'],['boundary','Boundary'],['all','All']])}
            </select>
          </div>
        </div>`)}`,
    behavior: `
      ${card('Auto-completion', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('autoCloseTags','Auto-close tags','HTML/XML')}
          ${tog('autoCloseBrackets','Auto-close brackets','{ [ ( &quot;')}
          ${tog('autoIndent','Auto-indent','On new line')}
          ${tog('snippetSuggest','Suggestions','Show snippets')}
          ${tog('acceptSuggestionOnEnter','Accept on Enter','vs Tab key')}
        </div>`)}
      ${card('Formatting', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('formatOnSave','Format on save','Auto format')}
          ${tog('formatOnPaste','Format on paste','Auto format')}
          ${tog('trimWhitespace','Trim whitespace','Trailing only')}
          ${tog('finalNewline','Final newline','Insert at end')}
        </div>`)}
      ${card('Saving', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('autoSave','Auto-save','Auto')}
        </div>
        <div id="asIntervalWrap" style="display:${s.autoSave?'block':'none'};margin-top:4px;">
          ${rng('autoSaveInterval','Interval',10,300,5,'s')}
        </div>`)}
      ${card('Multi-cursor', '<div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Modifier key</div><select data-key="multiCursorModifier" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">' + sel('multiCursorModifier',[['ctrlCmd','Ctrl/Cmd'],['alt','Alt']]) + '</select></div>')}`,
    console: `
      ${card('Appearance', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${rng('consoleFontSize','Font size',10,22,1,'px')}
          <div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Font family</div>
            <select data-key="consoleFontFamily" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
              ${sel('consoleFontFamily',[['jetbrains','JetBrains Mono'],['firacode','Fira Code'],['consolas','Consolas'],['cascadia','Cascadia Code'],['menlo','Menlo'],['dejavu','DejaVu Sans Mono']])}
            </select>
          </div>
          ${rng('consoleMaxLines','Max entries',50,5000,50,'')}
        </div>`)}
      ${card('Behavior', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('consoleAutoClear','Auto-clear','Clear on each run')}
          ${tog('consoleTimestamps','Timestamps','Show time')}
          ${tog('consoleWrap','Word wrap','Wrap output')}
        </div>`)}`,
    files: `
      ${card('Appearance', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${rng('explorerFontSize','Font size',10,20,1,'px')}
          ${tog('explorerCompact','Compact mode','Tighter rows')}
        </div>`)}
      ${card('Behavior', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          ${tog('confirmDelete','Confirm delete','Ask before deleting')}
          ${tog('revealActive','Auto-reveal','Highlight active file')}
          ${tog('showHidden','Show hidden','Files starting with .')}
        </div>
        <div style="padding:5px 0;">
          <div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Sort order</div>
          <select data-key="sortOrder" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">
            ${sel('sortOrder',[['name','Name'],['type','Type'],['modified','Modified']])}
          </select>
        </div>`)}`,
    advanced: `
      ${card('Cursor', '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div style="padding:5px 0;"><div style="font-size:12px;color:var(--text-dim);margin-bottom:2px;">Blinking</div><select data-key="cursorBlinking" style="width:100%;background:var(--bg-editor);border:1px solid var(--border);color:var(--text);padding:4px 6px;border-radius:5px;font-size:12px;font-family:var(--font-sans);outline:none;">' + sel('cursorBlinking',[['blink','Blink'],['smooth','Smooth'],['phase','Phase'],['expand','Expand'],['solid','Solid']]) + '</select></div></div>')}
      ${card('Performance', '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">' + tog('smoothScroll','Smooth scrolling','Animated scroll') + '</div>')}`
  };
  return sections[id] || '<div style="color:var(--text-muted);padding:30px;text-align:center;">Select a category</div>';
}

function attachSettingsHandlers() {
  document.querySelectorAll('#dialogContainer input[type="range"]').forEach(r => {
    const p = r.closest('[style*="padding"]') || r.parentElement;
    const val = p.querySelector('.rng-val');
    if (val) r.addEventListener('input', () => {
      const u = r.dataset.key==='tabSize'?' spaces':r.dataset.key==='consoleMaxLines'?'':r.dataset.key==='autoSaveInterval'?'s':r.dataset.key==='animationSpeed'?'ms':r.dataset.key==='borderRadius'?'px':'px';
      val.textContent = r.value + u;
    });
  });
  const asCb = document.querySelector('#dialogContainer input[data-key="autoSave"]');
  if (asCb) asCb.addEventListener('change', () => {
    const w = document.getElementById('asIntervalWrap');
    if (w) w.style.display = asCb.checked ? 'block' : 'none';
  });
  document.getElementById('settingsSave').addEventListener('click', () => {
    const tr = document.querySelector('input[name="stTheme"]:checked');
    if (tr) _settings.theme = tr.value;
    document.querySelectorAll('#dialogContainer input[type="range"]').forEach(r => { _settings[r.dataset.key] = parseFloat(r.value); });
    document.querySelectorAll('#dialogContainer select[data-key]').forEach(el => { _settings[el.dataset.key] = el.value; });
    document.querySelectorAll('#dialogContainer input[type="checkbox"][data-key]').forEach(cb => { _settings[cb.dataset.key] = cb.checked; });
    saveSettings();
    applySettings();
    closeDialog();
    updateHighlight();
    updateGutter();
  });
}

function flattenFiles(node, path) {
  let files = [];
  if (node.type === 'file') {
    files.push({ path: path + node.name, content: node.content || '' });
  } else if (node.children) {
    node.children.forEach(c => files.push(...flattenFiles(c, path + node.name + '/')));
  }
  return files;
}

function downloadZip() {
  saveCurrent();
  if (typeof JSZip === 'undefined') { alert('JSZip library not loaded. Please refresh and try again.'); return; }
  const zip = new JSZip();
  const allFiles = flattenFiles(fileSystem, '');
  if (!allFiles.length) { alert('No files to export.'); return; }
  allFiles.forEach(f => zip.file(f.path, f.content));
  zip.generateAsync({ type: 'blob' }).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'deoit-project.zip';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function exportProject() {
  saveCurrent();
  const data = JSON.stringify(fileSystem, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'deoit-project.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProject(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || data.type !== 'folder') { alert('Invalid project file.'); return; }
      if (!confirm('Import will replace your current project. Continue?')) return;
      fileSystem = data;
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(RUN_KEY);
      runConfig = { htmlId: null, remember: false };
      openFiles = []; activeTabId = null;
      activeHtmlId = null; activeCssId = null; activeJsId = null;
      const firstHtml = findFirstFile(fileSystem, 'html');
      const firstCss = findFirstFile(fileSystem, 'css');
      const firstJs = findFirstFile(fileSystem, 'js');
      const initOpen = (id) => {
        if (!id) return null;
        const f = findById(fileSystem, id);
        if (!f) return null;
        if (!openFiles.find(o => o.id === id)) openFiles.push({ id, name: f.name, lang: fileLang(f.name) });
        return id;
      };
      activeHtmlId = initOpen(firstHtml);
      activeCssId = initOpen(firstCss);
      activeJsId = initOpen(firstJs);
      activeTabId = activeHtmlId || activeCssId || activeJsId;
      const initialFile = activeTabId ? findById(fileSystem, activeTabId) : null;
      updateEditor(initialFile);
      renderTree(); renderTabs(); updateStatus(); save();
    } catch(err) { alert('Failed to import: ' + err.message); }
  };
  reader.readAsText(file);
}

function findFirstFile(node, lang) {
  if (node.type === 'file' && fileLang(node.name) === lang) return node.id;
  if (node.children) for (const c of node.children) { const r = findFirstFile(c, lang); if (r) return r; }
  return null;
}

function setupResize() {
  let dragging = null, startX, startY, startVal;

  function onStart(e, target) {
    e.preventDefault();
    dragging = target.dataset.resize;
    startX = e.clientX;
    startY = e.clientY;
    const style = getComputedStyle(document.documentElement);
    if (dragging === 'sidebar') {
      startVal = parseFloat(style.getPropertyValue('--sidebar-w')) || 240;
    } else if (dragging === 'console') {
      startVal = parseFloat(style.getPropertyValue('--console-h')) || 140;
    }
    target.classList.add('active');
    document.body.style.cursor = dragging === 'sidebar' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }

  function onMove(e) {
    if (!dragging) return;
    let val;
    if (dragging === 'sidebar') {
      val = Math.max(140, Math.min(400, startVal + (e.clientX - startX)));
      document.documentElement.style.setProperty('--sidebar-w', val + 'px');
    } else if (dragging === 'console') {
      val = Math.max(60, Math.min(400, startVal + (startY - e.clientY)));
      document.documentElement.style.setProperty('--console-h', val + 'px');
    }
  }

  function onEnd() {
    if (!dragging) return;
    const bar = document.querySelector(`.resize-bar[data-resize="${dragging}"]`);
    if (bar) bar.classList.remove('active');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    if (dragging === 'sidebar') {
      const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w')) || 240;
      try { localStorage.setItem(SIDEBAR_KEY, String(v)); } catch(e) {}
    } else if (dragging === 'console') {
      const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--console-h')) || 140;
      try { localStorage.setItem(CONSOLE_KEY, String(v)); } catch(e) {}
    }
    dragging = null;
  }

  document.querySelectorAll('.resize-bar').forEach(bar => {
    bar.addEventListener('mousedown', e => onStart(e, bar));
  });
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);
}

window.addEventListener('load', () => {
  init();
  setupDelegation();
  checkAuth();
});
