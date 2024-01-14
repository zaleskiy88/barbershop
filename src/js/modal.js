const refs = {
  buttons: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};
console.log(refs.buttons);
//const headerBtn = refs.buttons[0];  *//////TEMPORARY
const aboutBtn = refs.buttons[0];
const pricesBtn = refs.buttons[1];

//headerBtn.addEventListener('click', toggleModal);    /////TEMPORARY
aboutBtn.addEventListener('click', toggleModal);
pricesBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', closeOnEsc);

function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
  console.log('first');
}

function closeOnEsc(e) {
  if (e.key === 'Escape') {
    return toggleModal();
  }
  return;
}
