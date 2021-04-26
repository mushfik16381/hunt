
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
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.test-img-slider').slick({
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
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
        vertical:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.details-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor:'.test-img-slider',
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
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:false,
        centerPadding:"0",
        infinite: true,
      }
    },
    {
      breakpoint: 576,
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