function validate() {
  const capLetters = 'ABCDEFGHIJKLMNOPQRDSTUVWXYZ';
  const form = document.querySelector('.form-btn');
  const email = document.getElementById('email');
  const errorMessage = document.querySelector('.x');

  form.addEventListener('click', (a) => {
    const mail = email.value;
    for (let i = 0; i < mail.length; i += 1) {
      if (capLetters.includes(mail[i])) {
        console.log('wedwe');
        errorMessage.classList.remove('form-btn-hide');
        a.preventDefault();
        break;
      } else {
        errorMessage.classList.add('form-btn-hide');
      }
    }
  });
}

export { validate };
