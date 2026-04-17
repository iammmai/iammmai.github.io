const slides = Array.from(document.querySelectorAll('.slide'));
const dots   = Array.from(document.querySelectorAll('.dot-nav__dot'));

// ─── SLIDE ACTIVATION ────────────────────────────────────────
let activeIndex = 0;

function activateSlide(index) {
  if (index === activeIndex) return;
  slides[activeIndex].classList.remove('is-active', 'body-revealed');
  slides[activeIndex].querySelectorAll('.reveal-item.is-revealed')
    .forEach(el => el.classList.remove('is-revealed'));
  dots[activeIndex].classList.remove('is-active');
  slides[index].classList.add('is-active');
  dots[index].classList.add('is-active');
  activeIndex = index;
}

// ─── SLIDE NAVIGATION ────────────────────────────────────────
function isStepSlide(index) {
  return slides[index].classList.contains('step-solo');
}

function bodyRevealed(index) {
  return slides[index].classList.contains('body-revealed');
}

function revealNextItem() {
  const next = slides[activeIndex].querySelector('.reveal-item:not(.is-revealed)');
  if (next) { next.classList.add('is-revealed'); return true; }
  return false;
}

function hideLastItem() {
  const revealed = Array.from(slides[activeIndex].querySelectorAll('.reveal-item.is-revealed'));
  if (revealed.length) { revealed[revealed.length - 1].classList.remove('is-revealed'); return true; }
  return false;
}

function goNext() {
  if (isStepSlide(activeIndex) && !bodyRevealed(activeIndex)) {
    slides[activeIndex].classList.add('body-revealed');
    return;
  }
  if (revealNextItem()) return;
  if (activeIndex < slides.length - 1) activateSlide(activeIndex + 1);
}

function goPrev() {
  if (hideLastItem()) return;
  if (isStepSlide(activeIndex) && bodyRevealed(activeIndex)) {
    slides[activeIndex].classList.remove('body-revealed');
    return;
  }
  if (activeIndex > 0) activateSlide(activeIndex - 1);
}

// ─── DOT NAVIGATION ──────────────────────────────────────────
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => activateSlide(i));
});

// ─── WHEEL NAVIGATION ────────────────────────────────────────
window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) goNext();
  else              goPrev();
}, { passive: false });

// ─── KEYBOARD NAVIGATION ─────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const forward  = e.key === ' ' || e.key === 'ArrowDown'  || e.key === 'ArrowRight';
  const backward =                  e.key === 'ArrowUp'    || e.key === 'ArrowLeft';
  if (!forward && !backward) return;
  e.preventDefault();
  if (forward) goNext();
  else         goPrev();
});
