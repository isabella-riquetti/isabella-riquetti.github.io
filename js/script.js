
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.instructions').css('color', '#7c2a67');
    } else {
        $('.instructions').css('color', 'white');
    }

    if ($(this).scrollTop() > (window.innerHeight - (window.innerHeight/5))) {
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