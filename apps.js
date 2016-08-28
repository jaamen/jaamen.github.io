var main = function () {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle()
  });

  $('#arrow-forward').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
  });

  $('#arrow-back').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
  });  
}  
$(document).ready(main);
