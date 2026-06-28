/**
 * Hero — background image carousel
 */

export function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active');
    dots[current]?.classList.remove('hero__dot--active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('hero__slide--active');
    dots[current]?.classList.add('hero__dot--active');
  }

  function startAutoplay() {
    interval = setInterval(() => goTo(current + 1), 6000);
  }

  function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.slide, 10));
      resetAutoplay();
    });
  });

  startAutoplay();
}
