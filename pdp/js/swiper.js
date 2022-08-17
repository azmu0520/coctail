var swiper = new Swiper('.swiperPdp', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper1 = new Swiper('.swiperPdp2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,

  breakpoints: {
    800: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper('.simularPdp', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next-pdp',
  },
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 1.2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper3 = new Swiper('.simularPdp3', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next-pdp3',
    prevEl: '.swiper-button-prev-pdp3',
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
    },
  },
});

let items = document.querySelectorAll('.details__accardions .accordion__item');
items.forEach(function (t) {
  t.addEventListener('click', function (e) {
    items.forEach(function (e) {
      e !== t || e.classList.contains('open')
        ? e.classList.remove('open')
        : e.classList.add('open');
    });
  });
});
