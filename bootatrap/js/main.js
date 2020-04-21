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
})