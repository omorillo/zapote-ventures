(function(){
  var wraps = document.querySelectorAll('.explainer');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  wraps.forEach(function(wrap){
    var buttons = wrap.querySelectorAll('.explainer-tab');
    var caption = wrap.querySelector('.explainer-caption');
    var svg = wrap.querySelector('.explainer-svg');

    function setOutcome(btn){
      buttons.forEach(function(b){ b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      var outcome = btn.getAttribute('data-outcome');
      svg.setAttribute('data-outcome', outcome);
      if (caption) caption.textContent = btn.getAttribute('data-caption');
      if (!reduceMotion){
        var dot = svg.querySelector('.ex-pulse[data-for="' + outcome + '"]');
        if (dot){
          dot.classList.remove('play');
          void dot.getBoundingClientRect();
          dot.classList.add('play');
        }
      }
    }

    buttons.forEach(function(b){
      b.addEventListener('click', function(){ setOutcome(b); });
    });
  });
})();
