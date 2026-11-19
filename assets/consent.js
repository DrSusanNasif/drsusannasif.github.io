/* Visit statistics load only after the visitor's explicit consent. */
(function () {
  var KEY = 'dsn-analytics-consent';
  var bar = null;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (window.__dsnAnalytics) return;
    window.__dsnAnalytics = true;
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    var s = document.createElement('script');
    s.defer = true;
    s.src = '/_vercel/insights/script.js';
    document.head.appendChild(s);
  }

  function close() { if (bar) { bar.remove(); bar = null; } }

  function show() {
    if (bar) return;
    bar = document.createElement('div');
    bar.className = 'consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Privacy choice');
    bar.innerHTML =
      '<p>May I count your visit? The statistics are anonymous and use no cookies. ' +
      '<a href="privacy.html">Privacy policy</a></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="btn" data-choice="no">Decline</button>' +
      '<button type="button" class="btn solid" data-choice="yes">Accept</button>' +
      '</div>';
    document.body.appendChild(bar);
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-choice]');
      if (!b) return;
      var was = get();
      set(b.getAttribute('data-choice'));
      close();
      if (b.getAttribute('data-choice') === 'yes') loadAnalytics();
      else if (was === 'yes') location.reload();
    });
  }

  if (get() === 'yes') loadAnalytics();
  else if (!get()) show();

  document.addEventListener('click', function (e) {
    var r = e.target.closest('[data-consent-reset]');
    if (!r) return;
    e.preventDefault();
    show();
  });
})();
