$(document).ready(function () {
    var win_w = $(window).width();
    var min_width = 768;
    if (win_w > min_width) {
        $('.dropdown-submenu .dropdown-menu').hide();
        $('ul.nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
            $(this).find('.dropdown-submenu .dropdown-menu ').stop(true, true).hide();

            // $(this)find('').css('border-bottom', '1px solid yellow');

        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
        });

        (function ($) {
            "use strict"; // Start of use strict

            // jQuery for page scrolling feature - requires jQuery Easing plugin
            $('a.page-scroll').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });

            // Highlight the top nav as scrolling occurs
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 51
            });

            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-collapse ul li a').click(function () {
                $('.navbar-toggle:visible').click();
            });

            // Offset for Main Navigation
            $('#mainNav').affix({
                offset: {
                    top: 100
                }
            })
        })(jQuery); // End of use strict

    } else {

        $('.navbar-collapse ul li a').click(function () {
            var $submenu = $(this).closest('li').find('ul').eq(0).length;
            if ($submenu == 0) {
                $('.navbar-toggle:visible').click();
            } else {
                return false;

            }
        });

        $("li.dropdown > a").on("click", function () {
            $("li.dropdown").removeClass("open");
            if ($(this).parent("li.dropdown").hasClass("in-use")) {
                $(this).parents("li.dropdown").addClass("open");
                $(this).parent("li.dropdown").removeClass("open");
                $(this).parent("li.dropdown").removeClass("in-use");
                $(this).siblings('ul.dropdown-menu').children("li.dropdown").removeClass("open");
                $(this).siblings('ul.dropdown-menu').children("li.dropdown").removeClass("in-use");
            } else {
                $(this).parents("li.dropdown").addClass("open");
                $(this).parents("li.dropdown").addClass("in-use");
            }


            return false;
        });
    }
});

