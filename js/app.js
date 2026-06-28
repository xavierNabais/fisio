/**
 * Dra. Elsa Martins — Premium Landing Page
 * Modular JavaScript entry point
 */

import { initHeader } from './modules/header.js';
import { initHeroSlider } from './modules/hero-slider.js';
import { initServicesTabs } from './modules/services-tabs.js';
import { initTestimonialsSlider } from './modules/testimonials-slider.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initContactForm } from './modules/contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
  initServicesTabs();
  initTestimonialsSlider();
  initScrollReveal();
  initContactForm();
});
