document.addEventListener('DOMContentLoaded', () => {
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

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });

  // Auto-close sidebar on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  // ─── Smooth Scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        if (sidebar && window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          if (overlay) overlay.classList.remove('show');
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
});
