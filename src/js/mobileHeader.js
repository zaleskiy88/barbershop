const refs = {
  openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
  closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
  mobileMenu: document.querySelector('[data-mobile-menu]'),
};

const { openMenuBtn, closeMenuBtn, mobileMenu } = refs;

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-hidden');
  mobileMenu.classList.toggle('no-scroll');
  mobileMenu.classList.toggle('visually-hidden');
}

openMenuBtn.addEventListener('click', toggleMobileMenu);
closeMenuBtn.addEventListener('click', toggleMobileMenu);
