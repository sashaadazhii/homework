
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
    })

})