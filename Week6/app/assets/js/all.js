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
    centeredSlides: true,
    spaceBetween: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    loop: true,
  });

  var swiper = new Swiper('.swiper-container-guess', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    spaceBetween: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
  });

});