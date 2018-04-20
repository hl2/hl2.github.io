(function () {

    const showEvents = function (showPastEvents) {
        const now = new Date();
    
        $(".card").each(function () {
            const date = new Date($(this).attr('data-start-date'));
            console.log(showPastEvents)
            return now <= date || showPastEvents
                ? $(this).show()
                : $(this).hide();
        });
    };

    $("#showPastEvent").click(function () {
        const _this = $(this); 
        const isPressed = _this.attr('aria-pressed') === 'true';

        showEvents(!isPressed);
        _this.attr('aria-pressed', !isPressed);
    });

   // showEvents(false);
})();




    

