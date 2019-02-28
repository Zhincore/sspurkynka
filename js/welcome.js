/*
 * Welcome header animations and effects
 *
 */
 
$(document).ready(() => {
    const $doc = $(document);
    const welcome = $("#welcome");
    var height = window.innerHeight;//welcome.height();
    
    //
    // Scroll effect
    //
    $doc.scroll(() => {
        welcome.height(height - ($doc.scrollTop() /*/ 1**/));
    });
    
    //
    // Loading animations
    //
    $("#welcome-logo img").fadeIn("fast", "easeInQuart", () => {
        $("#welcome-logo .text").width(0).show().animate({ width: "100%" }, "slow", "easeInQuart", () => {
            $("#navbar-wrap").slideDown(() => {
                $("#welcome-contacts").slideDown("fast", () => {
                    $("#welcome-scrolldown").slideDown(null, "easeOutElastic");
                });
            });
        });
        
        $("#welcome-bg").delay(500).fadeIn(1000, "linear");
    });
    
});
