const button = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const envelope = document.querySelector('.fa-regular, .fa-envelope');
const overflow = document.querySelector('body');

// ACTIVATE MENU
function toggleMenu() {
  button.addEventListener('click', () => {
    envelope.style.display = 'none';

    if (button.classList.contains('active')) {
      button.classList.remove('active');
      menu.classList.toggle('overlay');
      envelope.style.display = 'flex';
      overflow.style.removeProperty('overflow');
      overflow.style.overflowX = 'hidden';
    } else {
      button.classList.add('active');
      menu.classList.toggle('overlay');
      overflow.style.overflow = 'hidden';
    }
  });

  // HIDE MENU
  document.querySelectorAll('.menu-link').forEach((e) => {
    e.addEventListener('click', () => {
      button.classList.toggle('active');
      menu.classList.toggle('overlay');
      envelope.style.display = 'flex';
      overflow.style.removeProperty('overflow');
      overflow.style.overflowX = 'hidden';
    });
  });
}

export { toggleMenu };
