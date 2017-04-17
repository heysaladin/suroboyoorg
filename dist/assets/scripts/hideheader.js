//<![CDATA[
$(function() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-scroll').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.header-scroll').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.header-scroll').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
}); //]]> 

$(document).ready(function() {

    $('.header-scroll').hide();

    $(window).resize(function(e) {
        console.log(e);
    });

    $(window).scroll(function(event) {
        var sc = $(window).scrollTop();
        // console.log(sc);


        if (sc > 100) {
            $('.header').hide();
            $('.header-scroll').show();
        } else {
            $('.header').show();
            $('.header-scroll').hide();
        }

    });

    // -----
    // $('#comments').hide();
    $('#comments').slideUp();
    var thisText = $('#comments-toggle').text();
    $('#comments-toggle').click(function() {
        $('#comments').slideToggle().toggleClass('opened');

        var isVisible = $('#comments').is(".opened");

        if (isVisible === true) {
            $('#comments-toggle').text('hide the comments');
        } else {
            $('#comments-toggle').text(thisText);
        }

        /*
        if($("#comments").is(":visible"))
        {
            $('#comments-toggle').text('hide the comments');
        }else
        {
            $('#comments-toggle').text(thisText);
        }
        */

    });
    // -----



    //----------------------------------------------
    /*
        var winW = 630,
            winH = 460;
        if (document.body && document.body.offsetWidth) {
            winW = document.body.offsetWidth;
            winH = document.body.offsetHeight;
        }
        if (document.compatMode == 'CSS1Compat' &&
            document.documentElement &&
            document.documentElement.offsetWidth) {
            winW = document.documentElement.offsetWidth;
            winH = document.documentElement.offsetHeight;
        }
        if (window.innerWidth && window.innerHeight) {
            winW = window.innerWidth;
            winH = window.innerHeight;
        }
        $(document).ready(function() {
            if (screen.width <= 770) {
                autoScrolling: false;
                fitToSection: false;
                console.log("ok");
            }
            $('.section').height(winH);
        });
        console.log("lebar " + winW);
        console.log("tinggi " + winH);

        document.body.offsetWidth = 300;
    */
    //----------------------------------------------


/*
console.log($('body').width());
if($('body').width() <= 768 ){
    $('video-wrapper').remove();
}
*/


});
