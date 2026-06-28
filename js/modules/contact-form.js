/**
 * Contact Form — client-side validation & feedback
 */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const fields = form.querySelectorAll('[required]');
    let valid = true;

    fields.forEach(field => {
      field.style.borderBottomColor = '';
      if (!field.value.trim()) {
        field.style.borderBottomColor = '#c0392b';
        valid = false;
      }
    });

    const email = form.querySelector('#email');
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderBottomColor = '#c0392b';
      valid = false;
    }

    if (!valid) return;

    successMsg.hidden = false;
    form.reset();

    setTimeout(() => {
      successMsg.hidden = true;
    }, 5000);
  });
}
