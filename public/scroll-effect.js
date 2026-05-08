var progress = 0;
var isScrolled = false;
var animationId = null;

function setBackground(container, p) {
  if (p <= 0) {
    container.style.background = '#000000';
  } else if (p >= 100) {
    container.style.background = '#dc2626';
  } else {
    // Hard stop: cria efeito de wipe sólido da esquerda para direita
    container.style.background = 'linear-gradient(to right, #dc2626 ' + p + '%, #000000 ' + p + '%)';
  }
}

function animate(targetProgress) {
  if (animationId) cancelAnimationFrame(animationId);

  var container = document.getElementById('countdown-container');
  if (!container) return;

  function step() {
    var diff = targetProgress - progress;
    var delta = diff > 0 ? Math.min(4, diff) : Math.max(-4, diff);
    progress += delta;

    setBackground(container, progress);

    if (Math.abs(targetProgress - progress) > 0.1) {
      animationId = requestAnimationFrame(step);
    } else {
      progress = targetProgress;
      setBackground(container, progress);
      animationId = null;
      if (targetProgress === 100) {
        container.style.transition = 'filter 0.4s ease-in';
        container.style.filter = 'brightness(2)';
        setTimeout(function() {
          container.style.transition = 'filter 0.4s ease-out';
          container.style.filter = 'brightness(1)';
        }, 5000);
      }
    }
  }

  animationId = requestAnimationFrame(step);
}

window.addEventListener('scroll', function() {
  var container = document.getElementById('countdown-container');
  if (!container) return;

  if (window.scrollY > 10 && !isScrolled) {
    isScrolled = true;
    container.classList.add('text-dark');
    animate(100);
  } else if (window.scrollY <= 10 && isScrolled) {
    isScrolled = false;
    container.classList.remove('text-dark');
    animate(0);
  }
});
