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

var swiper = new Swiper('.swiperPdp2', {
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
