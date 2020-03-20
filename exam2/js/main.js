$(document).ready(function () {  // main slider
    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
    });

    //slider news
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        dots: true,
        nextArrow: $('.slider-btn--next'),
        prevArrow: $('.slider-btn--prev'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });

    //anchor landing smooth
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });

    //dots active class
    var $dot = $('.dots__item');
    $dot.click(function (event) {
        $dot.removeClass('dots__item--active').eq($(this).index())
            .addClass('dots__item--active');
    });

    //mobile menu
    var containerWidth = $("body").width();

    $cross = $(".cross");
    $menu = $(".menu");
    $hamburger = $(".hamburger");
    $sliderContainer = $('.slider-container')

    if (containerWidth <= 980) {
        $cross.hide();
        $menu.hide();
        $hamburger.click(function () {
            $menu.slideToggle("slow", function () {
                $hamburger.hide();
                $cross.show();
            });
        });

        $cross.click(function () {
            $menu.slideToggle("slow", function () {
                $cross.hide();
                $hamburger.show();
            });
        });
    }

    if (containerWidth <= 374) {
        $hamburger.click(function () {
            $sliderContainer.insertAfter($menu);
        });
        $cross.click(function () {
            $sliderContainer.insertBefore($menu);
        })
    }

    window.onorientationchange = function () {
        console.log("the orientation of the device is now " + screen.orientation.angle);
    };

    if (window.matchMedia("(orientation: landscape)").matches) {
        $hamburger.click(function () {
            $sliderContainer.insertAfter($menu);
        });
        $cross.click(function () {
            $sliderContainer.insertBefore($menu);
        })

        $('.scroll-container').hide()
    }

});
