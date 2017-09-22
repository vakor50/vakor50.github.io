// jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
    // if ($(".navbar").offset().top > 50) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    // } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    // }
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
    // $('a.page-scroll').bind('click', function(event) {
    //     console.log($(this).attr('href'));
    //     var $anchor = $(this);
    //     if ($(this).attr('href') == '#title') {
    //         $('html, body').stop().animate({
    //             scrollTop: 0
    //         }, 1500, 'easeInOutExpo');
    //     }
    //     else {
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1500, 'easeInOutExpo');
    //     }
    //     event.preventDefault();
    // });
// });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function checkOffset() {
    // var element = document.getElementsByClassName('navbar');
    // var rect = element.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    if ($(".navbar").offset().top > $("#about").offset().top - 100) {
        $(".navbar-fixed-top").addClass("disappear");
    }     
    else {
        $(".navbar-fixed-top").removeClass("disappear");
    }
}

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?

                console.log(target.offset().top);

            if (target.length) {

                // Only prevent default if animation is actually gonna happen
                // event.preventDefault();

                $('html body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    }
);

$(document).ready(function() {
    // Run it when the page loads
    checkOffset();


    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});
