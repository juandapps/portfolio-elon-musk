import { wrapper } from './container.js';

const primaryData = [
  {
    card: '0',
    title: 'Multi-Post Stories',
    description:
      "A daily selction of preivately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './img/mobile-version/works/multi-post-stories-1.svg',
    tags: `
                  <li class="tag-1">
                <spa>css</spa>
              </li>
              <li class="tag-1">
                <spa>html</spa>
              </li>
              <li class="tag-1">
                <spa>bootstrap</spa>
              </li>
              <li class="tag-1">
                <spa>ruby</spa>
              </li>
    `,
  },
  {
    card: '1',
    image: 'card-bg-1',
    tags: `
                    <li class="tag-2">
                  <spa>css</spa>
                </li>
                <li class="tag-2">
                  <spa>html</spa>
                </li>
                <li class="tag-2">
                  <spa>bootstrap</spa>
                </li>
                <li class="tag-2">
                  <spa>ruby</spa>
                </li>
    `,
  },
];

function primary(
  title = primaryData[0].title,
  description = primaryData[0].description,
  image = primaryData[0].image,
  tags = primaryData[0].tags
) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const content = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const tag = document.createElement('ul');
  const button = document.createElement('button');

  // CARD ZERO
  wrapper.appendChild(card).classList.add('card-container', 'grid-span');
  card.appendChild(img).setAttribute('src', image);
  card.appendChild(content).classList.add('card-content', 'pt');
  content.appendChild(h2).innerHTML = title;
  content.appendChild(p).innerHTML = description;
  content.appendChild(tag).classList.add('card-tag-1');
  tag.innerHTML = tags;
  content.appendChild(button).classList.add('card-btn');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'See Project';
  img.setAttribute('alt', 'multi-post stories');
}

export { primary };
