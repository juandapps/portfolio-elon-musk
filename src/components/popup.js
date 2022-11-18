const root = document.querySelector('.modal-container');

const modalData = [
  {},
  {
    desktop: './img/modal/deskModal.svg',
    title: `
                Keeping track of hundreds of components website
            <span class="bx bx-x"></span>
    `,
    text: `
                Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it 1960s with the releaLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it 1960s with
            the releax map lapora verita.
    `,
    tags: `
                <li class="modal-tag-item">html</li>
            <li class="modal-tag-item">Bootstrap</li>
            <li class="modal-tag-item">Ruby on rail</li>
    `,
    live: `
                  <a
                href="https://github.com/juandapps/portfolio-elon-musk"
                target="_blank"
              >
                See Source <span class="bx bxl-github"></span>
              </a>
    `,
    source: `
                  <a
                href="https://github.com/juandapps/portfolio-elon-musk"
                target="_blank"
              >
                See Source <span class="bx bxl-github"></span>
              </a>
    `,
  },
];

function popup(
  title = modalData[1].title,
  desktop = modalData[1].desktop,
  text = modalData[1].text,
  tag = modalData[1].tags,
  live = modalData[1].live,
  source = modalData[1].source
) {
  // CREATE
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');
  root.appendChild(modalDiv);

  const textContainer = document.createElement('div');
  textContainer.classList.add('modal-text-container');
  modalDiv.appendChild(textContainer);

  const h2 = document.createElement('h2');
  h2.innerHTML = title;
  textContainer.appendChild(h2);

  const ul = document.createElement('ul');
  ul.classList.add('modal-tag');
  ul.innerHTML = tag;
  textContainer.appendChild(ul);

  const img = document.createElement('img');
  img.setAttribute('src', desktop);
  modalDiv.appendChild(img);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalDiv.appendChild(modalContent);

  const p = document.createElement('p');
  p.innerHTML = text;
  modalContent.appendChild(p);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('modal-buttons-container');
  modalContent.appendChild(buttonsContainer);

  const button1 = document.createElement('button');
  button1.classList.add('modal-btn');
  button1.innerHTML = live;

  const button2 = document.createElement('button');
  button2.classList.add('modal-btn');
  button2.innerHTML = source;

  buttonsContainer.appendChild(button1);
  buttonsContainer.appendChild(button2);
}

export { popup };
