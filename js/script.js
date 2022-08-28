


$(document).ready(function () {
  $('.promo__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $('.promo__slider-dots'),
    customPaging: function (t, e) {
      return "<span>" + ("0" + (e + 1)).slice(-2) + "</span>";
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }

    ]
  });
});

$(document).ready(function () {
  $('.works__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/works/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/works/right.svg"></button>',
    autoplay: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.works__nav'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
     
    ]
  });
});

$(document).ready(function () {
  $('.partners__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    appendArrows: $('.partners__nav'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }

    ]
  });
});

