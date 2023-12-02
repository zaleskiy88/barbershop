const refs = {
  aboutList: document.querySelector('.about-list'),
};

function hideAboutImages() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 480) {
    refs.aboutList.classList.add('is-hidden', 'visually-hidden');
  }
  if (screenWidth > 480) {
    refs.aboutList.classList.remove('is-hidden', 'visually-hidden');
  }
}

window.addEventListener('DOMContentLoaded', hideAboutImages);
window.addEventListener('resize', hideAboutImages);
