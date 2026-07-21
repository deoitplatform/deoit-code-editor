document.addEventListener('DOMContentLoaded', () => {

  // ─── SIDEBAR (learn pages) ───
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('menuToggle');

  function toggleSidebar() {
    if (!sidebar) return;
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  }
  if (overlay) overlay.addEventListener('click', toggleSidebar);
  if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  // ─── MOBILE MENU (landing page) ───
  const navToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      const isOpen = mobileMenu.classList.contains('show');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }

  // ─── Smooth Scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        if (sidebar && window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          if (overlay) overlay.classList.remove('show');
          document.body.style.overflow = '';
        }
        if (mobileMenu) {
          mobileMenu.classList.remove('show');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // ─── Typewriter ───
  const dynamicEl = document.querySelector('.typing-dynamic');
  if (dynamicEl) {
    const phrases = [
      'HTML, CSS & JavaScript.',
      'beautiful interfaces.',
      'interactive demos.',
      'your ideas.'
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let isPaused = false;
    const typeSpeed = 60;
    const deleteSpeed = 35;
    const pauseTime = 1800;

    function typeLoop() {
      if (isPaused) return;
      const current = phrases[phraseIdx];
      if (!isDeleting) {
        charIdx++;
        dynamicEl.textContent = current.substring(0, charIdx);
        if (charIdx === current.length) {
          isPaused = true;
          setTimeout(() => { isPaused = false; isDeleting = true; typeLoop(); }, pauseTime);
          return;
        }
        setTimeout(typeLoop, typeSpeed);
      } else {
        charIdx--;
        dynamicEl.textContent = current.substring(0, charIdx);
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(typeLoop, typeSpeed);
          return;
        }
        setTimeout(typeLoop, deleteSpeed);
      }
    }
    setTimeout(typeLoop, 600);
  }

  // ─── Auto-cycle Code Demo ───
  const codeTabs = document.querySelectorAll('.code-demo-tab');
  const codeContents = document.querySelectorAll('.code-demo-content');
  let cycleInterval = null;
  let currentIdx = 0;

  function showTab(index) {
    codeTabs.forEach(t => t.classList.remove('active'));
    codeContents.forEach(c => c.style.display = 'none');
    codeTabs[index].classList.add('active');
    const lang = codeTabs[index].dataset.lang;
    codeContents.forEach(c => {
      if (c.dataset.lang === lang) c.style.display = 'block';
    });
    currentIdx = index;
  }

  function startCycle() {
    stopCycle();
    cycleInterval = setInterval(() => {
      showTab((currentIdx + 1) % codeTabs.length);
    }, 3000);
  }

  function stopCycle() {
    if (cycleInterval) { clearInterval(cycleInterval); cycleInterval = null; }
  }

  if (codeTabs.length) {
    codeTabs.forEach((tab, i) => {
      if (tab.classList.contains('active')) currentIdx = i;
      tab.addEventListener('click', () => {
        stopCycle();
        showTab(i);
        setTimeout(() => {
          if (!cycleInterval) startCycle();
        }, 6000);
      });
    });
    startCycle();
  }

  // ─── Sidebar active link ───
  const currentPath = window.location.pathname;
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace('../',''))) {
      link.style.color = 'var(--text-primary)';
      const svg = link.querySelector('svg');
      if (svg) svg.style.opacity = '1';
    }
  });

  // ─── Mock Editor Tab Switching ───
  const mockTabs = document.querySelectorAll('.mock-tab');
  const mockCodeInner = document.getElementById('mockCode');
  if (mockTabs.length && mockCodeInner) {
    const mockSnippets = {
      html: `<div class="code-line"><span class="ln">1</span><span class="hl-tag">&lt;!DOCTYPE html&gt;</span></div>
<div class="code-line"><span class="ln">2</span><span class="hl-tag">&lt;html</span> <span class="hl-attr">lang</span>=<span class="hl-string">"en"</span><span class="hl-tag">&gt;</span></div>
<div class="code-line"><span class="ln">3</span><span class="hl-tag">&lt;head&gt;</span></div>
<div class="code-line"><span class="ln">4</span>&nbsp;&nbsp;<span class="hl-tag">&lt;title&gt;</span><span class="hl-text">My Page</span><span class="hl-tag">&lt;/title&gt;</span></div>
<div class="code-line"><span class="ln">5</span>&nbsp;&nbsp;<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"stylesheet"</span> <span class="hl-attr">href</span>=<span class="hl-string">"style.css"</span><span class="hl-tag">/&gt;</span></div>
<div class="code-line"><span class="ln">6</span><span class="hl-tag">&lt;/head&gt;</span></div>
<div class="code-line"><span class="ln">7</span><span class="hl-tag">&lt;body&gt;</span></div>
<div class="code-line"><span class="ln">8</span>&nbsp;&nbsp;<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"card"</span><span class="hl-tag">&gt;</span></div>
<div class="code-line"><span class="ln">9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hl-tag">&lt;h1&gt;</span><span class="hl-text">Hello, World!</span><span class="hl-tag">&lt;/h1&gt;</span></div>
<div class="code-line"><span class="ln">10</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="hl-tag">&lt;p&gt;</span><span class="hl-text">Welcome to Deoit</span><span class="hl-tag">&lt;/p&gt;</span></div>
<div class="code-line"><span class="ln">11</span>&nbsp;&nbsp;<span class="hl-tag">&lt;/div&gt;</span></div>
<div class="code-line"><span class="ln">12</span><span class="hl-tag">&lt;/body&gt;</span></div>
<div class="code-line"><span class="ln">13</span><span class="hl-tag">&lt;/html&gt;</span></div>
<div class="code-line mock-cursor-line"><span class="ln">14</span><span class="mock-cursor"></span></div>`,
      css: `<div class="code-line"><span class="ln">1</span><span class="hl-selector">* {</span></div>
<div class="code-line"><span class="ln">2</span>&nbsp;&nbsp;<span class="hl-prop">margin</span>: <span class="hl-number">0</span>;</div>
<div class="code-line"><span class="ln">3</span>&nbsp;&nbsp;<span class="hl-prop">padding</span>: <span class="hl-number">0</span>;</div>
<div class="code-line"><span class="ln">4</span>&nbsp;&nbsp;<span class="hl-prop">box-sizing</span>: <span class="hl-value">border-box</span>;</div>
<div class="code-line"><span class="ln">5</span><span class="hl-selector">}</span></div>
<div class="code-line"><span class="ln">6</span></div>
<div class="code-line"><span class="ln">7</span><span class="hl-selector">.card {</span></div>
<div class="code-line"><span class="ln">8</span>&nbsp;&nbsp;<span class="hl-prop">background</span>: <span class="hl-value">linear-gradient(135deg, #444, #222)</span>;</div>
<div class="code-line"><span class="ln">9</span>&nbsp;&nbsp;<span class="hl-prop">padding</span>: <span class="hl-number">2rem</span>;</div>
<div class="code-line"><span class="ln">10</span>&nbsp;&nbsp;<span class="hl-prop">border-radius</span>: <span class="hl-number">12px</span>;</div>
<div class="code-line"><span class="ln">11</span>&nbsp;&nbsp;<span class="hl-prop">color</span>: <span class="hl-value">white</span>;</div>
<div class="code-line"><span class="ln">12</span>&nbsp;&nbsp;<span class="hl-prop">box-shadow</span>: <span class="hl-number">0 8px 32px rgba(0,0,0,0.4)</span>;</div>
<div class="code-line"><span class="ln">13</span><span class="hl-selector">}</span></div>
<div class="code-line mock-cursor-line"><span class="ln">14</span><span class="mock-cursor"></span></div>`,
      js: `<div class="code-line"><span class="ln">1</span><span class="hl-keyword">const</span> <span class="hl-text">card</span> = <span class="hl-text">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">'.card'</span>);</div>
<div class="code-line"><span class="ln">2</span></div>
<div class="code-line"><span class="ln">3</span><span class="hl-keyword">const</span> <span class="hl-function">greet</span> = <span class="hl-keyword">function</span>(<span class="hl-text">name</span>) {</div>
<div class="code-line"><span class="ln">4</span>&nbsp;&nbsp;<span class="hl-keyword">return</span> <span class="hl-string">\`Hello, \${name}!\`</span>;</div>
<div class="code-line"><span class="ln">5</span>};</div>
<div class="code-line"><span class="ln">6</span></div>
<div class="code-line"><span class="ln">7</span><span class="hl-text">card</span>.<span class="hl-function">addEventListener</span>(<span class="hl-string">'click'</span>, () => {</div>
<div class="code-line"><span class="ln">8</span>&nbsp;&nbsp;<span class="hl-keyword">const</span> <span class="hl-text">msg</span> = <span class="hl-function">greet</span>(<span class="hl-string">'Developer'</span>);</div>
<div class="code-line"><span class="ln">9</span>&nbsp;&nbsp;console.<span class="hl-function">log</span>(<span class="hl-text">msg</span>);</div>
<div class="code-line"><span class="ln">10</span>});</div>
<div class="code-line mock-cursor-line"><span class="ln">11</span><span class="mock-cursor"></span></div>`
    };
    mockTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        mockTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const lang = tab.dataset.lang;
        if (mockSnippets[lang] && mockCodeInner) {
          mockCodeInner.innerHTML = mockSnippets[lang];
        }
      });
    });
  }

  // ─── Auto-cycle mock tabs ───
  const mockTabsAll = document.querySelectorAll('.mock-tab');
  if (mockTabsAll.length) {
    let mockIdx = 0;
    setInterval(() => {
      mockIdx = (mockIdx + 1) % mockTabsAll.length;
      mockTabsAll[mockIdx].click();
    }, 4000);
  }

});
