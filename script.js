const button = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const envelope = document.querySelector('.fa-regular, .fa-envelope');

// ACTIVATE MENU
function toggleMenu() {
  button.addEventListener('click', () => {
    envelope.style.display = 'none';

    if (button.classList.contains('active')) {
      button.classList.remove('active');
      menu.classList.toggle('overlay');
      envelope.style.display = 'flex';
    } else {
      button.classList.add('active');
      menu.classList.toggle('overlay');
    }
  });

  // HIDE MENU
  document.querySelectorAll('.menu-link').forEach((e) => {
    e.addEventListener('click', () => {
      button.classList.toggle('active');
      menu.classList.toggle('overlay');
      envelope.style.display = 'flex';
    });
  });
}
toggleMenu();
