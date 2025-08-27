(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // auto-close when clicking a link (mobile)
    menu.addEventListener('click', function(e){
      var target = e.target;
      if (target && target.tagName === 'A' && menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var toTop = document.getElementById('backToTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) { toTop.classList.add('show'); }
      else { toTop.classList.remove('show'); }
    });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Header shadow when scrolled
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) { header.classList.add('scrolled'); }
      else { header.classList.remove('scrolled'); }
    });
  }

  // Auto-highlight active nav link based on current page
  var links = document.querySelectorAll('.menu a[href]');
  if (links && links.length) {
    var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href.toLowerCase() === path) {
        a.classList.add('active');
      }
    });
  }

  // Dropdown removed: using a simplified menu across all pages
})();


