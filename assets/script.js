
$(window).scroll(function () {
    if ($(this).scrollTop() > 75) {
        $('.instructions button').css('color', '#7c2a67');
    } else {
        $('.instructions button').css('color', 'white');
    }

    if ($(this).scrollTop() > 175) {
        $('.instructions button').fadeOut('slow');
    } else {
        $('.instructions button').fadeIn('slow');
    }
    
    if ($(this).scrollTop() > (window.innerHeight - (window.innerHeight/3))) {
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
}

$(document).on("click",".options .nav-item", function(){
    $(".menu").removeClass("open");
});