var main = function () {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle()
  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
  });

  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
  });  
}  
$(document).ready(main);
