const STORAGE_KEY = 'titan-theme';

export const initTheme = () => {
  const themeToggle = document.querySelector('.theme-toggle');

  if (!themeToggle) return;

  const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Переключить светлую тему' : 'Переключить темную тему'
    );
  };

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
  });
};
