$(document).ready(function () {

    var $btn = $('.calc-item');
    var $rez = $('.calc-item'[value = "="]);

    var showRez;

    $btn.click(function () {
        var $val = $(this).val();

        console.log($val);

        $rez.click(function () { })
    })
})



