/*
 * Welcome header animations and effects
 *
 */
 
$(window).on('load', () => {
    const $doc = $(document);
    const welcome = $("#welcome");
    var height = window.innerHeight;//welcome.height();
    
    // Set static height
    welcome.height(window.innerHeight);
    
    //
    // Load animation
    //
    $("#welcome-logo img").delay(250).fadeIn(250, "easeInCirc", () => {
        $("#welcome-logo .text").width(0).show().animate({ width: "100%" }, "slow", "easeInQuart", () => {
            $("#navbar-wrap").slideDown(() => {
                $("#welcome-contacts").slideDown("fast", () => {
                    $("#welcome-scrolldown").slideDown(null, "easeOutElastic");
                });
            });
        });
        
        $("#welcome-bg").delay(500).fadeIn(1000, "linear");
    });
    
    
    //
    // Scroll effects
    //
    // Remove background to navbar and add it when scrolled
    $("#navbar").toggleClass("scrolled", $(this).scrollTop() > 1);
    $doc.scroll(() => {
        $("#navbar").toggleClass("scrolled", $(this).scrollTop() > 1);
    });
    
    // Change size of header accordingly to scroll
    if(window.innerWidth > 768){
        welcome.height(height - ($doc.scrollTop() /*/ 1**/));
        
        $doc.scroll(() => {
            welcome.height(height - ($doc.scrollTop() /*/ 1**/));
        });
    }
    
});
