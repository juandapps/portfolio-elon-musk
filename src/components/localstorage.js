const form = document.querySelector('.contact-me');
const names = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const textarea = document.querySelector('#message');

function localstorage() {
  form.addEventListener('input', () => {
    const obj = {
      name: names.value,
      lastName: lastName.value,
      email: email.value,
      textarea: textarea.value,
    };

    localStorage.setItem('store', JSON.stringify(obj));
  });

  const recoverData = localStorage.getItem('store');
  const obj = JSON.parse(recoverData);

  if (obj != null) {
    names.value = obj.name;
    lastName.value = obj.lastName;
    email.value = obj.email;
    textarea.value = obj.textarea;
  }
}

export { localstorage }; //eslint-disable-line
