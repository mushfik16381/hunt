
$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  nextArrow:'<i class="fas fa-arrow-right next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  vertical:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
});


$('.img-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  vertical:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",
  asNavFor:'.details-slider',
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
});
$('.details-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor:'.img-slider',
  fade:true,
});


$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$('.market-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:false,
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  autoplaySpeed:1200,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});