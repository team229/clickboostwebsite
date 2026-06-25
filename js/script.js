(function() {
  var page = location.pathname.split('/').pop() || 'index.html';
  page = page.replace('.html', '');

  document.querySelectorAll('.nav-link').forEach(function(link) {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
    var btn = dropdown.querySelector('.nav-btn');
    if (!btn) return;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var wasOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(function(d) {
        d.classList.remove('open');
      });
      if (!wasOpen) {
        dropdown.classList.add('open');
      }
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function(d) {
      d.classList.remove('open');
    });
  });

  document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
    menu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
})();
