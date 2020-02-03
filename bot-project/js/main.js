
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

    // $(".preview--phone__input").mask("999 999 9999", { placeholder: " ____ ____ _____" });
    $(".preview--phone__input").mask("999 999 9999");

    // modal
    let $modalDefault = $('#preview--get');
    let $modalFirst = $('#preview--phone');
    let $openBtn = $('#btn-container--modal');

    let $closeBtn = $('#btn--finish');
    let $finishWindow = $('#preview--done')

    $openBtn.click(function () {
        $openBtn.hide();
        $modalDefault.hide();
        $modalFirst.show();

    });
    $closeBtn.click(function () {
        $modalFirst.hide();
        $finishWindow.show();
    });

    $(document).mouseup(function (e) {
        if (!$finishWindow.is(e.target) && $finishWindow.has(e.target).length === 0) {
            $finishWindow.fadeOut(300, function () {
                $modalDefault.fadeIn(300);
                $openBtn.fadeIn(300);
            });
        }
    });


    //to top
    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });


})