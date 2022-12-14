let toogleMenu = document.querySelector('.toogle_menu');
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.menu__close');
let overlay = document.querySelector('.overlay');

toogleMenu.addEventListener('click', function() {
    menu.classList.add('menu_active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function() {
    menu.classList.remove('menu_active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', function() {
  menu.classList.remove('menu_active');
  document.body.style.overflow = '';
});

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
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

$(document).ready(function() {
  $('.carousel__item a').magnificPopup({type:'image'});
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

$(window).scroll(function (){
  if($(this).scrollTop() >500 ) {
    $('#scroll-top').fadeIn('slow');
  } else {
    $('#scroll-top').fadeOut('slow');
  }
})

$("#scroll-top").on('click', function () {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
};

let link = document.querySelectorAll('.nav-link')
link.forEach((item, itemindex) =>
  item.addEventListener('click', () => {
    let section = document.querySelectorAll('.section')
    section.forEach((section, sectionindex) => {
      console.log(section.getBoundingClientRect().top)
      if (itemindex === sectionindex) {
        const height =
          section.getBoundingClientRect().top + window.pageYOffset - 78
        window.scrollTo({ top: height, behavior: 'smooth' })
      }
    })
  }))