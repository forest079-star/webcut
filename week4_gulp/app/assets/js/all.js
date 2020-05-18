console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});


$('.js-hamburger').on('click', function(){
      
  $(this).toggleClass('active');
})

$('.question li').eq(0).find('p').show();
$('.question li').on('click', function () {
  $('.active').removeClass('active');
  $('.rotate').removeClass('rotate');

  $(this).addClass('active rotate').find('p').slideDown().parent().siblings('li').find('p').not('.active').slideUp();

});