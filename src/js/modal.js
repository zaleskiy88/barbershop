const refs = {
  buttons: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

const headerBtn = refs.buttons[0];
const aboutBtn = refs.buttons[1];
const pricesBtn = refs.buttons[2];

headerBtn.addEventListener('click', toggleModal);
aboutBtn.addEventListener('click', toggleModal);
pricesBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', closeOnEsc);

function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function closeOnEsc(e) {
  if (e.key === 'Escape') {
    return toggleModal();
  }
  return;
}
