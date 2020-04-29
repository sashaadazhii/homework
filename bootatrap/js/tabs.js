$(document).ready(function () {
    var $tabItem = $('.tabs__item');
    var $tabInner = $('.tabs-inner');

    $tabInner.hide().filter(':first').show();

    $tabItem.click(function () {
        $tabInner.hide().eq($(this).index()).fadeIn();
        $tabItem.removeClass('active').eq($(this).index())
            .addClass('active');
    })
})