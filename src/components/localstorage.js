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
}

export { localstorage };
