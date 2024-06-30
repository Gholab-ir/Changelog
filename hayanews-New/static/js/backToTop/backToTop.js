$(document).ready(function () {

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70){
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }

        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});



//$(function () {
//    var a = $("#back-top a").offset().top + '1100';
//    var a5 = ($("#footerTop").offset()).top;
//    $(window).scroll(function () {
//        if ($(window).scrollTop() > a ) {
//            $("#back-top a").addClass("backtopFix");
//        } else {
//            $("#back-top a").removeClass("backtopFix");
//        }
//    })
//});