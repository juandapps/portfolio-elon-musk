const root = document.getElementById('works');

function divider() {
  const divider = document.createElement('div');
  const hr = document.createElement('hr');
  ('div');
  const h2 = document.createElement('h2');

  // RECENTS WORKS
  root.appendChild(divider).classList.add('divider');
  divider.appendChild(h2).innerHTML = 'My Recent Works';
  divider.appendChild(hr);
}
divider();

const wrapper = document.createElement('div');
root.appendChild(wrapper);
wrapper.classList.add('card-wrapper');

export { wrapper, root };
