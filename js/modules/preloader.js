export const initPreloader = () => {
  const welcomeScreen = document.querySelector('.welcome-screen');

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.remove('is-loading');
      document.body.classList.add('welcome-hidden');
    }, 1900);

    setTimeout(() => {
      welcomeScreen?.remove();
    }, 2500);
  });
};
