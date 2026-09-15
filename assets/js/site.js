(function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function closeMenu(focusToggle){
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (focusToggle) toggle.focus();
  }

  function openMenu(){
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    var firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  toggle.addEventListener('click', function(){
    if (menu.hidden) openMenu(); else closeMenu(false);
  });

  menu.addEventListener('click', function(e){
    if (e.target.tagName === 'A') closeMenu(false);
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !menu.hidden) closeMenu(true);
  });

  document.addEventListener('click', function(e){
    if (menu.hidden) return;
    if (menu.contains(e.target) || toggle.contains(e.target)) return;
    closeMenu(false);
  });
})();

(function(){
  var graphics = document.querySelectorAll('.gov-graphic');
  if (!graphics.length) return;

  graphics.forEach(function(svg){ svg.classList.add('js-animatable'); });

  var intersecting = new Set();

  var setRunning = function(svg, running){
    svg.classList.toggle('gov-running', running);
  };

  var applyState = function(svg){
    setRunning(svg, intersecting.has(svg) && !document.hidden);
  };

  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) intersecting.add(entry.target);
        else intersecting.delete(entry.target);
        applyState(entry.target);
      });
    }, { threshold: [0, 0.5, 1] });
    graphics.forEach(function(svg){ io.observe(svg); });
  }

  document.addEventListener('visibilitychange', function(){
    graphics.forEach(applyState);
  });
})();
