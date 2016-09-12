// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        console.log($(this).attr('href'));
        var $anchor = $(this);
        if ($(this).attr('href') == '#title') {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
        }
        else {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$(document).ready(function() {


    // console.log($("#about").offset().top);
    // Put your offset checking in a function
    function checkOffset() {
        if ($(".navbar").offset().top > $("#about").offset().top - 100) {
            $(".navbar-fixed-top").addClass("disappear");
        }     
        else {
            $(".navbar-fixed-top").removeClass("disappear");
        }
    }

    // Run it when the page loads
    checkOffset();


    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});
