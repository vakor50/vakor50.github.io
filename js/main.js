// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function checkOffset() {
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
        $('html body').stop();
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

                // console.log(target.offset().top);

            if (target.length) {

                // Only prevent default if animation is actually gonna happen
                // event.preventDefault();

                // $('html body').animate({
                //     scrollTop: target.offset().top
                // }, 2000);
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

var courses = [
    { "code": "Coursera", "name": "Machine Learning (in progress)"},
    { "code": "CS 181",   "name": "Introduction to Formal Languages and Automata" },
    { "code": "CS CM124", "name": "Computational Genetics" },
    { "code": "CS 118",   "name": "Computer Network Fundamentals" },
    { "code": "CS 131",   "name": "Programming Languages" },
    { "code": "CS M117",  "name": "Computer Networks: Physical Layer" },
    { "code": "CS 130",   "name": "Software Engineering" },
    { "code": "CS 170A",  "name": "Mathematical Modeling and Methods for Computer Science" },
    { "code": "CS 174",   "name": "Introduction to Computer Graphics" },
    { "code": "CS M151B", "name": "Computer Systems Architecture" },
    { "code": "CS 144",   "name": "Web Applications" },
    { "code": "CS M152A", "name": "Introductory Digital Design Lab" },
    { "code": "CS 161",   "name": "Introduction to Artificial Intelligence" },
    { "code": "CS 145",   "name": "Introduction to Data Mining" },
    { "code": "CS 143",   "name": "Database Systems" },
    { "code": "CS 180",   "name": "Introduction to Algorithms and Complexity" },
    { "code": "CS 111",   "name": "Operating Systems Principles" },
    { "code": "CS M51A",  "name": "Logic Design of Digital Systems" },
    { "code": "CS 33",    "name": "Introduction to Computer Organization" },
    { "code": "CS 32",    "name": "Introduction to Data Structures" },
    { "code": "CS 31",    "name": "Introduction to Computer Science" },
]



$(document).ready(function() {
    $('.section-links').click(function (event) {
        event.preventDefault();
        var elem_id = $(this).attr('href')
        var top = document.getElementById(elem_id).scrollIntoView()
    })

    // Run it when the page loads
    checkOffset();

    for (var i = 0; i < courses.length; i++) {
        $("#schedule").append(
            '<div class="col-sm-2 col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-2">'
                + '<h5 class="courses">' + courses[i].code + '</h5>'
            + '</div>'
            + '<div class="col-sm-10 col-md-8 col-lg-8">'
                + '<h5 class="courses">' + courses[i].name + '</h5>'
                + '<!-- <p>This is a description about this class</p> -->'
            + '</div>');
    }
    

    // Run function when scrolling
    $(window).scroll(function() {
        checkOffset();
    });
});
