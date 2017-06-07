(function ($) {
    var hwTimeOut = 10000;
    var hwNeedLinks = true;

    $(document).ready(function (e) {
        var slideNum = 0;
        var slideTime;
        var backgroundArr = ['header-bg.jpg', 'header-bg1.jpg', 'header-bg2.jpg'];
        var backgroundCount = backgroundArr.length;
        $('header').css({"background-image": "url(./img/" + backgroundArr[0] + ")"});
        var animSlide = function (arrow) {
            clearTimeout(slideTime);
            if (arrow == 'next') {
                if (slideNum == (backgroundCount - 1)) {
                    slideNum = 0;
                }
                else {
                    slideNum++
                }
                showSlide();
            }
            else if (arrow == 'prew') {

                if (slideNum == 0) {
                    slideNum = backgroundCount - 1;
                }
                else {
                    slideNum -= 1
                }
                showSlide();
            }
            else {
                slideNum = arrow;
            }

        }

        function showSlide() {
            $('header').css({"background-image": "url(./img/" + backgroundArr[slideNum] + ")"}).stop(true, true);
            rotator();
        }

        if (hwNeedLinks) {
            var $linkArrow = $('<a class="nav-button" id="prewbutton" href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a><a class="nav-button" id="nextbutton" href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a>')
                .prependTo('header .container');
            $('.nav-button').css({
                'position': 'absolute',
                'z-index': '10',
                'opacity': '.8',
                'font-size': '50px'
            });
            $('#prewbutton').css({
                bottom: '46%',
                left: 0
            });
            $('#nextbutton').css({
                bottom: '46%',
                right: 0
            });

            $('#nextbutton').click(function () {

                animSlide('next');
                return false;
            })
            $('#prewbutton').click(function () {
                animSlide('prew');
                return false;
            })
            $('#nextbutton, #prewbutton').hover(
                function () {
                    $(this).css({
                        "opacity": "1",
                    });
                },
                function () {
                    $(this).css({"opacity": ".8"});
                }
            );
        }

        var pause = false;
        var rotator = function () {
            if (!pause) {
                slideTime = setTimeout(function () {
                    animSlide('next')
                }, hwTimeOut);
            }
        }
        /* $('header').hover(
             function(){clearTimeout(slideTime); pause = true;},
             function(){pause = false; rotator();
             }); */

        rotator();
    });
})(jQuery);