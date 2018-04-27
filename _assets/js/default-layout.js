(function() {

	$(document).ready(function () {
   /**
    * Hide Toggler Menu on Item Click
    */
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });

   /**
    * Hide Past Upcoming Events
    */
    const upcomingEventCards = $(".event-card-col").filter(function() {
      const endDate = moment( $(this).attr("data-end-date") );
      console.log(endDate);
      return moment().isBefore( endDate.endOf("day") );
    });

    if (upcomingEventCards.length > 0) {
      upcomingEventCards.show();
      $("#upcoming-events").show();
    }
  });
})();
