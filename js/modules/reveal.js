const REVEAL_SELECTOR = [
  '.section-head',
  '.build-card',
  '.catalog-card',
  '.step',
  '.config__panel',
  '.spec-card',
  '.feature',
  '.contact__grid',
  '.footer'
].join(', ');

export const initReveal = () => {
  const revealItems = document.querySelectorAll(REVEAL_SELECTOR);

  revealItems.forEach((item) => item.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -70px 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));
};
