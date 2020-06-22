$(".recommend-slider").slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  draggable:false,
  arrows: true,
  prevArrow: "<div class='slider-arrow slider-arrow__prev'></div>",
  nextArrow: "<div class='slider-arrow slider-arrow__next'></div>",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }
  ]
});