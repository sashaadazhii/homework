
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });

    //to top
    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

})