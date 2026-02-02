const mediaLaptop = window.matchMedia('(max-width: 1024px)');

const heroMain = document.querySelector('.hero__main');
const heroBody = document.querySelector('.hero__body');

const toggleContainer = (e) => {
  if (e.matches) {
    // ≤ 1023px
    heroBody.classList.remove('container');
    heroMain.classList.add('container');
  } else {
    // > 1023px
    heroMain.classList.remove('container');
    heroBody.classList.add('container');
  }
};

// при загрузке
toggleContainer(mediaLaptop);

// при ресайзе
mediaLaptop.addEventListener('change', toggleContainer);
