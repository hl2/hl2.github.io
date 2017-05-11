(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"]):not([data-toggle="collapse"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '.navbar',
    offset: 48,
  })

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Scroll reveal calls
  var hello = {
    origin: 'top',
    distance: '24px',
    duration: 1500,
    scale: 1.05,
  }

  var intro = {
    origin: 'bottom',
    distance: '64px',
    duration: 900,
    delay: 1500,
    scale: 1,
  }

  var description = {
    origin: 'top',
    distance: '32px',
    duration: 600,
    delay: 1800,
    scale: 0,
  }
  var block = {
    reset: true,
    viewOffset: {
      top: 64
    },
  };
  var icon = {
    duration: 600,
    scale: 0.3,
    distance: '0px',
  };
  var btn = {
    duration: 1000,
    delay: 200,
  };
  var config = {
    viewFactor: 0.15,
    duration: 800,
    distance: '0px',
    scale: 0.8,
  };
  window.sr = new ScrollReveal(config);
  sr.reveal('.sr-hello', hello);
  sr.reveal('.sr-intro', intro);
  sr.reveal('.sr-hello .sr-desc', description);
  sr.reveal('.sr-block', block, 200);
  sr.reveal('.sr-icons', icon, 200);
  sr.reveal('.sr-btn', btn);
  sr.reveal('.sr-contact', icon, 300);

})(jQuery); // End of use strict
