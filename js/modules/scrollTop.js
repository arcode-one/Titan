export const initScrollTop = () => {
  const scrollTopButton = document.querySelector('.scroll-top');
  const hero = document.querySelector('.hero');

  if (!scrollTopButton || !hero) return;

  const toggleButton = () => {
    const showPoint = hero.offsetTop + hero.offsetHeight * 0.75;
    scrollTopButton.classList.toggle('is-visible', window.scrollY > showPoint);
  };

  window.addEventListener('scroll', toggleButton, { passive: true });
  window.addEventListener('resize', toggleButton);
  toggleButton();
};
