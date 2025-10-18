
  (function(){
    const btn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');

    if (!btn || !nav) return;

    btn.addEventListener('click', function() {
      const open = nav.classList.toggle('active');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.setAttribute('aria-hidden', !open ? 'true' : 'false');
    });

    // Προαιρετικά: κλείνουμε menu όταν πατάμε link (καλό για mobile UX)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          btn.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'true');
        }
      });
    });
  })();

