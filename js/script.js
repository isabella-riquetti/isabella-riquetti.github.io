
$(window).scroll(function () {
    if ($(this).scrollTop() > 75) {
        $('.instructions').css('color', '#7c2a67');
    } else {
        $('.instructions').css('color', 'white');
    }

    if ($(this).scrollTop() > 175) {
        $('.instructions').fadeOut('slow');
    } else {
        $('.instructions').fadeIn('slow');
    }
    
    if ($(this).scrollTop() > (window.innerHeight - (window.innerHeight/5))) {
        $('nav').fadeIn('slow');
    } else {
        $('nav').fadeOut('slow');
    }
});

function toggleMenu() {
    $("#mobile-menu").toggleClass("open");
}

$(document).on("click",".mobile-menu-item", function(){
    $("#mobile-menu").removeClass("open");
});