document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.getElementById('menuToggle');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // ─── Smooth Scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        if (sidebar) sidebar.classList.remove('open');
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
    // Start with first tab active (already in HTML)
    codeTabs.forEach((tab, i) => {
      if (tab.classList.contains('active')) currentIdx = i;
      tab.addEventListener('click', () => {
        stopCycle();
        showTab(i);
        // Resume cycling after 6s of inactivity
        setTimeout(() => {
          if (!cycleInterval) startCycle();
        }, 6000);
      });
    });
    startCycle();
  }
});
