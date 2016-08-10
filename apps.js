var main = function () {
  $('.menu').click(function() {
    $('.choices').animate({
      top: "0px"
    }, 200);

    $('body').animate({
      bottom: "285px"
    }, 200);
  });
