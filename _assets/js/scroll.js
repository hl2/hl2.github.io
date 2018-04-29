(function() {
  var offset = 68;

  function scroll (hash) {
    var hashOffset = $(hash).position();

    if (hashOffset) {
      $(window).scrollTop(hashOffset.top - offset)
    }
  }

  $('a.scroll').on( 'click', function(event){
    if (window.location.pathname === '/') {
      event.preventDefault();
    }
    scroll(this.hash);
  });

  $(function() {
    scroll(window.location.hash);
  });
})();
