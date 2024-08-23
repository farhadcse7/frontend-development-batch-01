$(function () {
  "use strict";

  $('.projects-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,

  });

  $('.project-slider-prev').on('click', function () {
    $('.projects-slider').slick('slickPrev');
  });

  $('.project-slider-next').on('click', function () {
    $('.projects-slider').slick('slickNext');
  });

});