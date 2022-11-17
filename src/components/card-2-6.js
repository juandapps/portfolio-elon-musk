const root = document.querySelector('.card-wrapper');

function createArr(title, description, image, tags) {
  const container = document.createElement('div');
  const card = document.createElement('div');
  const text = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const tag = document.createElement('ul');
  const button = document.createElement('button');

  root.appendChild(container);
  container.appendChild(card);
  card.appendChild(text);
  card.appendChild(button);
  text.appendChild(h2);
  text.appendChild(p);
  text.appendChild(tag);
  card.appendChild(button);
  text.appendChild(h2);
  text.appendChild(p);
  text.append(tag);

  container.classList.add('card-container');
  card.classList.add('card-content', 'card-bg-mobile', image);
  text.classList.add('card-text', 'f-white');
  tag.classList.add('card-tag-2');
  button.classList.add('card-btn-2');
  h2.innerHTML = title;
  p.innerHTML = description;
  tag.innerHTML = tags;
  button.innerHTML = 'See Project';
  button.setAttribute('type', 'submit');
}

export { createArr };
