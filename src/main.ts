import './style.scss'

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    540: {
      slidesPerView: 1
    },
    720: {
      slidesPerView: 2
    },
    980: {
      slidesPerView: 3
    }
  }
});


