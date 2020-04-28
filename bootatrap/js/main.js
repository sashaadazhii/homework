$(document).ready(function () {

    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    });

    $('.slider-response').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    });


    /*mobile menu*/
    var containerWidth = $("body").width();
    var $menu = $(".menu");
    var $toggle = $(".toggle");
    var shown = false;

    $toggle.hide();

    if (containerWidth <= 992) {
        $menu.hide();
        $toggle.show();

        $toggle.click(function () {

            $menu.slideToggle("slow");
            if (!shown) {
                $('.toggle__item').css("width", "100%");
                shown = true;
            } else {
                $('.toggle__item--one').css("width", "100%");
                $('.toggle__item--two').css("width", "75%");
                $('.toggle__item--three').css("width", "50%");
                shown = false;
            }
        });
    }



    /*animation */

})