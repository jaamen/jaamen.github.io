git clone git://github.com/jquery/jquery.git

var main = function () {
  $('.dropdown-toggle').click(function() {
    $'.dropdown-menu').toggle()
  });
}
$(document).ready(main);
