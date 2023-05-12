import Swiper, { Navigation } from "swiper";
import "swiper/css/bundle";

const popular = new Swiper(".popular-slider", {
  modules: [Navigation],
  spaceBetween: 16,
  speed: 800,
  loop: false,
  slidesPerView: 5,
  breakpoints: {
    1250: {
      slidesPerView: 5
    },

    1050: {
      slidesPerView: 4
    },

    768: {
      slidesPerView: 3
    },

    576: {
      slidesPerView: 2
    },

    200: {
      slidesPerView: 1
    }
  },

  navigation: {
    nextEl: ".popular-button-next",
    prevEl: ".popular-button-prev"
  }
});

const search = new Swiper(".search-slider", {
  modules: [Navigation],
  spaceBetween: 16,
  speed: 800,
  loop: false,
  slidesPerView: 6,
  breakpoints: {
    1400: {
      slidesPerView: 6
    },

    1200: {
      slidesPerView: 5
    },

    992: {
      slidesPerView: 4
    },

    768: {
      slidesPerView: 3
    },

    480: {
      slidesPerView: 2
    },

    200: {
      slidesPerView: 1
    }
  },

  navigation: {
    nextEl: ".search-button-next",
    prevEl: ".search-button-prev"
  }
});
