$(document).ready(() => {

  $( window ).resize(function() {
    if ($( window ).width() > 768) {
      $('#multiCollapseExample1').collapse('show')
    } else {
      $('#multiCollapseExample1').collapse('hide')
    }
  });


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


  // var mySwiper = new Swiper('.swiper-container', {
  //   // Optional parameters
  //   // direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     // nextEl: '.swiper-button-next',
  //     // prevEl: '.swiper-button-prev',
  //     hideOnClick:true
  //   },

  //   // And if we need scrollbar
  //   // scrollbar: {
  //   //   el: '.swiper-scrollbar',
  //   // },

  
  // })

});