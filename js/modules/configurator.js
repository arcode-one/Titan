import { specs } from './specs.js';

export const initConfigurator = () => {
  const chips = document.querySelectorAll('.chip');
  const title = document.querySelector('#specTitle');
  const price = document.querySelector('#specPrice');
  const list = document.querySelector('#specList');

  if (!chips.length || !title || !price || !list) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');

      const data = specs[chip.dataset.build];
      title.textContent = data.title;
      price.textContent = data.price;
      list.innerHTML = data.items
        .map(([name, value]) => `<div><span>${name}</span><strong>${value}</strong></div>`)
        .join('');
    });
  });
};
