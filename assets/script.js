
$(window).scroll(function () {
    if ($(this).scrollTop() > 75 && getCurrentTheme() == "light") {
        $('.instructions button').css('color', '#7c2a67');
    } else {
        $('.instructions button').css('color', 'white');
    }

    if ($(this).scrollTop() > 160) {
        $('.instructions button').fadeOut('slow');
    } else {
        $('.instructions button').fadeIn('slow');
    }
    
    let fadePosition = window.innerWidth > 600 ? window.innerHeight-350 : 200;
    if ($(this).scrollTop() > fadePosition) {
        $('nav').fadeIn('slow');
    } else {
        $('nav').fadeOut('slow');
    }
});

$(window).ready(function() {
    updateCurrentTheme();
    addExperience();
});

function toggleMenu() {
    $(".menu").toggleClass("open");
    $(".menu").toggleClass("closed");
}

$(document).on("click",".options a", function(){
    $(".menu").removeClass("open");
    $(".menu").addClass("closed");
});