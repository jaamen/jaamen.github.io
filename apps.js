var main = function () {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle()
  });

  $('.arrow-forward').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
  
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    }
  });

  $('#arrow-back').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
  
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
  
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').first();
    }
  });  
}  
$(document).ready(main);
