// Stuart Daniells
// c0829441

// anonymous function wrapped in an IIFE (Immediately Invoked Function Expression)
// so polution to global anme space is restricted to only one

(function($) {
    $.fn.hoverEffectMenu = function(options) {
        let defaults = $.extend({
            "bgColor": "transparent",  //Set default bg color to transparent
            "color": "#fff",           //Set default text color to white yellow
            "hoverColor": "yellow",    //Set default on hover off color to yellow
            "textShadow": ''          // Set text shadow to nothing
        }, options);

        // looping over each anchor tag in the list element
        return this.each(function() {
            let items = $("li a");
            let defaultColours = defaults;

            // for each anchor tag add the below css styles
            items.css("font-family", "Exo 2, helvetica, sans-serif")
                .css("font-weight", "bold")
                .css("text-decoration", "none")
                .css("color", defaultColours.color);

            // for each anchor tag on hover effect - add the below css styles
            items.mouseover(function() {
               $(this).css("color", defaultColours.hoverColor)
                  .css("text-shadow", "1px 1px 2px red, 0 0 25px red, 0 0 5px red");
            });

            // for each anchor tag on hover off effect - add the below css styles
            items.mouseout(function() {
               $(this).css("background-color", defaultColours.bgColor)
                  .css("color", defaultColours.color)
                  .css("text-shadow", defaultColours.textShadow);
            });
        });
    }
})(jQuery);