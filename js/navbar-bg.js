$(document).ready(() => {
    // Add background to navbar when scrolled
    $("#navbar").toggleClass("scrolled", $(this).scrollTop() > 1);
    $(document).scroll(() => {
        $("#navbar").toggleClass("scrolled", $(this).scrollTop() > 1);
    });
});
