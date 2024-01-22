const refs = {
  body: document.querySelector('body'),
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  buttons: document.querySelectorAll('[data-modal-open]'),
};

const { body, modal, closeModalBtn } = refs;
const headerContactsBtn = refs.buttons[0];
const mobileModalBtn = refs.buttons[1];
const aboutBtn = refs.buttons[2];
const pricesBtn = refs.buttons[3];

headerContactsBtn.addEventListener('click', toggleModal);
mobileModalBtn.addEventListener('click', toggleModal);
aboutBtn.addEventListener('click', toggleModal);
pricesBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', closeOnClick);
window.addEventListener('keydown', closeOnEsc);

function toggleModal() {
  modal.classList.toggle('is-hidden');
  modal.classList.toggle('visually-hidden');
  body.classList.toggle('no-scroll');
}

function closeOnEsc(e) {
  if (e.key === 'Escape' && modal.classList.length === 1) {
    toggleModal();
  }
}

function closeOnClick(e) {
  if (e.target === modal) {
    toggleModal();
  }
}
