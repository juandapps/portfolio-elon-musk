const email = document.getElementById('email');
const form = document.getElementsByClassName('contact-me');
const message = document.getElementsByClassName('x');

form,addEventListener('submit', (a){
  //your code if email has a capital letter display message and a.preventDefault
})

function validate() {
  const check = (email = document.querySelector('.validate-email')) =>
    /^[A-Z]*$/.test(email);
  const result =
    check == true
      ? (document.querySelector('.x').style.display = 'flex')
      : false;
}

export { validate };

