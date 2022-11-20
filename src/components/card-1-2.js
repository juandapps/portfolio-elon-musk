const root = document.querySelector('.card-wrapper');

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
    title: 'Professional Art <br /> Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
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
  tags = primaryData[0].tags //eslint-disable-line
) {
  const container = document.createElement('div');
  container.classList.add('card-container', 'grid-span');

  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('alt', 'multi-post stories');

  const content = document.createElement('div');
  content.classList.add('card-content', 'pt');

  const h2 = document.createElement('h2');
  h2.innerHTML = title;

  const p = document.createElement('p');
  p.innerHTML = description;

  const tag = document.createElement('ul');
  tag.classList.add('card-tag-1');
  tag.innerHTML = tags;

  const button = document.createElement('button');
  button.classList.add('card-btn', 'modal-pointer');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'See Project';

  // CARD ZERO
  root.appendChild(container);
  container.appendChild(img);
  container.appendChild(content);
  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(tag);
  content.appendChild(button);
}

// FIRST CARD
function secondary(
  title = primaryData[1].title,
  description = primaryData[1].description,
  image = primaryData[1].image,
  tags = primaryData[1].tags //eslint-disable-line
) {
  const container = document.createElement('div');
  const card = document.createElement('div');
  const text = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const tag = document.createElement('ul');
  const button = document.createElement('button');

  root.appendChild(container);
  container.classList.add('card-container-2');

  container.appendChild(card);
  card.classList.add('card-content-2', 'card-bg-mobile', image);

  card.appendChild(text);
  text.classList.add('card-text-2', 'f-white');
  text.appendChild(h2);
  h2.classList.add('hide');
  text.appendChild(p);
  p.classList.add('hide');

  text.appendChild(tag);
  tag.innerHTML = tags;
  tag.classList.add('card-tag-3');

  card.appendChild(button);
  button.classList.add('card-btn-2', 'card-btn-2-fix', 'modal-pointer-2');
  button.setAttribute('type', 'submit');

  h2.innerHTML = title;
  p.innerHTML = description;
  button.innerHTML = 'See Project';
}

export { primary, secondary }; //eslint-disable-line
