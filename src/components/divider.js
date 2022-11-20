const section = document.querySelector('.divider');

function divider() {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'My Recent Works';
  const hr = document.createElement('hr');
  section.appendChild(h2);
  section.appendChild(hr);
}

export { divider }; //eslint-disable-line
