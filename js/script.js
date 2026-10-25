(function() {
  var page = location.pathname.split('/').pop() || 'index.html';
  page = page.replace('.html', '');

  document.querySelectorAll('.nav-link').forEach(function(link) {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });


  function syncAria() {
    document.querySelectorAll('.nav-dropdown').forEach(function(d) {
      var b = d.querySelector('.nav-btn');
      if (b) b.setAttribute('aria-expanded', d.classList.contains('open') ? 'true' : 'false');
    });
  }

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
      syncAria();
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown.open').forEach(function(d) {
      d.classList.remove('open');
    });
    syncAria();
  });

  document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
    menu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Contact form -> JSON POST.
  // Sent as text/plain so the browser treats it as a CORS "simple request" and
  // skips the OPTIONS preflight (the API's shield rate-limits preflights).
  // The endpoint parses the JSON body regardless of content type.
  document.querySelectorAll('form[data-endpoint]').forEach(function(form) {
    var status = form.parentNode.querySelector('[data-form-status]');
    var btn = form.querySelector('button[type="submit"]');
    var btnHTML = btn ? btn.innerHTML : '';
    var read = function(name) {
      var el = form.querySelector('[name="' + name + '"]');
      return el ? String(el.value || '').trim() : '';
    };
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var hp = form.querySelector('input[name="_hp"]');
      if (hp && hp.value) { return; }
      var payload = {
        name: read('name'),
        email: read('email'),
        phone: read('phone'),
        company: read('company'),
        country: read('country'),
        service: read('service'),
        message: read('message'),
        referral: read('referral'),
        page: location.href,
        source: 'clickboostmedia.com contact form'
      };
      if (status) { status.className = 'form-status'; status.textContent = 'Sending message...'; }
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      fetch(form.getAttribute('data-endpoint'), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(payload)
      }).then(function(res) {
        if (!res.ok) { throw new Error('HTTP ' + res.status); }
        form.reset();
        if (status) {
          status.className = 'form-status is-success';
          status.textContent = "Thanks, your message is in. We'll get back to you within one business day.";
        }
      }).catch(function() {
        if (status) {
          status.className = 'form-status is-error';
          status.textContent = 'Sorry, that did not send. Please email info@clickboostmedia.com or call +1 (619) 365-4177.';
        }
      }).then(function() {
        if (btn) { btn.disabled = false; btn.innerHTML = btnHTML; }
      });
    });
  });
})();
