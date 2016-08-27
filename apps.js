var main = function () {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle()
  });

  $('.arrow-forward').click(function(){
    var currentSlide = $(.active-slide);
    var nextSlide = currentSlide.next();
  });
}
$(document).ready(main);
