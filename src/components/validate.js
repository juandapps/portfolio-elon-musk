function validate() {
  const check = (email = document.querySelector('.validate-email')) =>
    /^[A-Z]*$/.test(email);
  const result =
    check == true
      ? (document.querySelector('.x').style.display = 'flex')
      : false;
}

export { validate };
