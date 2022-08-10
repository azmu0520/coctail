const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  slidesPerView: 2,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },

    800: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next-seller',
    prevEl: '.swiper-button-prev-seller',
  },
});
