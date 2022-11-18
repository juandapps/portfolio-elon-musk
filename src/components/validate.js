const submit = document.querySelector('.form-btn');
const email = document.querySelector('.validate-email');
const message = document.querySelector('.x');

function validate() {
  // VALIDATE CAPITAL LETTERS WITH REGEX
  const val = /^[A-Z]*$/;

  // TRIGGER VALIDATION
  submit.addEventListener('click', (e) => {
    //your code if email has a capital letter display message and a.preventDefault
    if (email.value.match(val)) {
      return true;
    } else {
      message.style.display = 'flex';
      e.preventDefault;
    }
  });
}

export { validate };
