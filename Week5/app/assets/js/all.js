$(document).ready(() => {
  //'' console.log('Hello Bootstrap4');
  $('.btn-rep').on('click', function(){
    $('.card-replay').addClass('active');
  })

  $('.cancel-btn').on('click', function(){
    $('.card-replay').removeClass('active');
  })


  $('.verified').on('click', function(){
    $('.expand-more-icon').toggleClass('rotate-180 ');
    $('.verified-detail').toggleClass('active');
  })


});