const refs = {
  aboutList: document.querySelector('.about-list'),
};

function hideAboutImages() {
  const availWidth = window.screen.availWidth;
  const screenWidth = window.innerWidth;

  if (availWidth <= 768) {
    refs.aboutList.classList.add('is-hidden', 'visually-hidden');
  }
  if (availWidth > 768) {
    refs.aboutList.classList.remove('is-hidden', 'visually-hidden');
  }
}

window.addEventListener('DOMContentLoaded', hideAboutImages);
window.addEventListener('resize', hideAboutImages);
