$(document).ready(function () {
    var $tabItem = $('.tabs__item');
    var $tabInner = $('.tabs__inner');

    $tabInner.hide().filter(':first').show();// сховали всі,крім першого

    $tabItem.click(function () {
        $tabInner.hide().eq($(this).index()).fadeIn();
        // $tabInner.hide()  ховає всі
        // .eq($(this).index()).fadeIn(); - той,який рівний клікнутому зявляється

        $tabItem.removeClass('active').eq($(this).index()) // забираємо active 
            .addClass('active');  // додаємо active
    })
})