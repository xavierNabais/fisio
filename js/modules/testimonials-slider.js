/**
 * Testimonials — editorial carousel
 */

export function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const currentEl = document.getElementById('testimonial-current');
  const totalEl = document.getElementById('testimonial-total');

  if (!track) return;

  const items = track.querySelectorAll('.testimonial');
  const total = items.length;
  let current = 0;

  totalEl.textContent = String(total).padStart(2, '0');

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    currentEl.textContent = String(current + 1).padStart(2, '0');
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    update();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % total;
    update();
  });

  let touchStartX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    current = diff > 0 ? (current + 1) % total : (current - 1 + total) % total;
    update();
  }, { passive: true });
}
