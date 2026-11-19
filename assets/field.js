/* Hero field: drifting virions linked like an evidence network */
(function () {
  var c = document.getElementById('field');
  if (!c || !c.getContext) return;
  var x = c.getContext('2d'), w, h, dpr, pts = [];
  var cols = ['79,227,214', '156,123,255', '255,138,112'];
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(70, w * h / 16000));
    pts = [];
    for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: 1.2 + Math.random() * 2.6, c: cols[i % 3], a: Math.random() * 6.28, s: Math.random() < 0.18 });
  }
  function virion(p) {
    x.strokeStyle = 'rgba(' + p.c + ',0.55)'; x.lineWidth = 1;
    x.beginPath(); x.arc(p.x, p.y, p.r * 3, 0, 6.283); x.stroke();
    for (var k = 0; k < 8; k++) { var t = p.a + k * 0.785; x.beginPath(); x.moveTo(p.x + Math.cos(t) * p.r * 3, p.y + Math.sin(t) * p.r * 3); x.lineTo(p.x + Math.cos(t) * p.r * 4.4, p.y + Math.sin(t) * p.r * 4.4); x.stroke(); }
  }
  function frame() {
    x.clearRect(0, 0, w, h);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      if (!still) { p.x += p.vx; p.y += p.vy; p.a += 0.002; if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20; if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20; }
      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < 15000) { x.strokeStyle = 'rgba(150,175,255,' + (0.12 * (1 - d / 15000)) + ')'; x.lineWidth = 1; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke(); }
      }
      if (p.s) virion(p); else { x.fillStyle = 'rgba(' + p.c + ',0.75)'; x.shadowColor = 'rgba(' + p.c + ',0.9)'; x.shadowBlur = 8; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill(); x.shadowBlur = 0; }
    }
    if (!still) requestAnimationFrame(frame);
  }
  size(); frame();
  window.addEventListener('resize', function () { size(); if (still) frame(); });
})();
