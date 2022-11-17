import { wrapper } from './container.js';

function createArr(title, description, image, tags) {
  const container = createElement('div').classList.add('card-container');
  const card = document
    .createElement('div')
    .classList.add('card-content', image);
  const text = document
    .createElement('div')
    .classList.add('card-text', 'f-white');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const tag = document.createElement('ul').classList.add('card-tag-2');
  const button = document.createElement('button').classList.add('card-btn-2');

  // CARDS 2 - 6
  wrapper.appendChild(container);
  container.appendChild(card);
  card.appendChild(text);
  text.appendChild(h2);
  text.appendChild(p);
  text.appendChild(tag);
  text.appendChild(button);
  h2.innerHTML = title;
  p.innerHTML = description;
  tag.innerHTML = tags;
  button.innerHTML = 'See Project';
}

export { createArr };
