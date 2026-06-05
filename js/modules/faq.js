export const initFaq = () => {
  const items = Array.from(document.querySelectorAll('.faq-item'));

  if (items.length === 0) return;

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
};
