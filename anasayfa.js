$(document).ready(function() {
    $('.arrow.right').click(function() {
      $('.slider').animate({
        scrollLeft: '+=600'
      }, 500);
    });
  
    $('.arrow.left').click(function() {
      $('.slider').animate({
        scrollLeft: '-=600'
      }, 500);
    });
  });
  