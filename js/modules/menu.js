export const initMenu = () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('.nav a');

  if (!burger) return;

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('menu-open')) return;
    if (event.target.closest('.header')) return;
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
};
