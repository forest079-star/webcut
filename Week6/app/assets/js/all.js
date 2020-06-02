$(document).ready(() => {
  
  $( window ).resize(function() {
    if ($( window ).width() > 768) {
      $('#multiCollapseExample1').collapse('show')
    } else {
      $('#multiCollapseExample1').collapse('hide')
    }
  });

});