$(document).ready(function(){
  // click cta
  // open modal
  // click close-btn
  // close modal
  // $('.cta').click(function() {
  //   $('.overlay').css('display', 'flex');
  //   return false;
  // });
  //
  // $('.close-btn').click(function() {
  //   $('.overlay').css('display', 'none');
  // });

  $('.cta').click(function() {
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function() {
    $('.overlay').removeClass('is-open');
  });

});
