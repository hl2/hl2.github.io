// Main module
(function($) {
  $(function() {
    // Hide toggler menu on item click
    $(".navbar-nav>li>.collapse-link").click(function() {
      $(".navbar-collapse").collapse("hide");
    });
  });
})(jQuery);
