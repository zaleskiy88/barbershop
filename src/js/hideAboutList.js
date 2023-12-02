const refs = {
  aboutList: document.querySelector('.about-list'),
};

function handleResize() {
  const screenWidth = window.screen.availWidth;

  if (screenWidth <= 480) {
    refs.aboutList.classList.add('is-hidden', 'visually-hidden');
  }
  if (screenWidth > 480) {
    refs.aboutList.classList.remove('is-hidden', 'visually-hidden');
  }
}
window.addEventListener('resize', handleResize);
