const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {
    650: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 50,
    },
    480:{
      direction: "horizontal",
      slidesPerView: 1,

    },
    320: {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 300,
    },

  }

});

const sliderImages = new Swiper(".slider__images .swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,

  mousewheel: true,

  thumbs: {
    swiper: sliderThumbs
  },

});