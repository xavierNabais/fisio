/**
 * Services — tabbed category panels
 */

export function initServicesTabs() {
  const tabs = document.querySelectorAll('.services__tab');
  const panels = document.querySelectorAll('.services__panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('services__tab--active', isActive);
        t.setAttribute('aria-selected', isActive);
      });

      panels.forEach(panel => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle('services__panel--active', isActive);
        panel.hidden = !isActive;
      });
    });
  });
}
