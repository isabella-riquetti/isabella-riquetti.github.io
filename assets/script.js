
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
    
    toggleHeader();
});

$(window).ready(function() {
    updateCurrentTheme();
    addExperience();
    toggleHeader();
});

function toggleHeader() {
    let fadePosition = window.innerWidth > 600 ? window.innerHeight-350 : 200;
    if ($(this).scrollTop() > fadePosition) {
        $('nav').fadeIn('slow');
    } else {
        $('nav').fadeOut('slow');
    }
}

function toggleMenu() {
    $(".menu").toggleClass("open");
    $(".menu").toggleClass("closed");
    if($(".menu").hasClass("open")) {
        let circleRadius = Math.sqrt((window.innerWidth*window.innerWidth)+((window.innerHeight)*(window.innerHeight)));
        $(".nav-bg").css("height", circleRadius*2 + "px");
        $(".nav-bg").css("width",circleRadius*2 + "px");
        $(".nav-bg").css("top",circleRadius*-1 + "px");
    } else {        
        $(".nav-bg").css("height", "160px");
        $(".nav-bg").css("width", "160px");
        $(".nav-bg").css("top", "-80px");
    }
}

$(document).on("click",".options a", function(){
    toggleMenu();
});