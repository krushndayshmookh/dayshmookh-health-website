//$(document).ready(function () {
//   var bodyScrollTop = $("body").scrollTop();
//if (navDummyOffset.top < )

//});


$(window).scroll(function () {
    if (($(window).scrollTop() > 445) && ($("#nav-main").css("display") === "none")) {
        $("#nav-main").slideDown();
    } else if (($(window).scrollTop() < 445) && ($("#nav-main").css("display") === "block")) {
        $("#nav-main").slideUp();
    } else {
        $("#nav-main").css("display") = "none";
    }
});
