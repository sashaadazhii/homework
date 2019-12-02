var numberOne = document.getElementById('numberOne');
var button = document.getElementById('result');

button.addEventListener('click', function () {
    var num1 = numberOne.value;
    var result = 0;

    for (var i = 0; i <= num1.length; i++) {
        result = i;
    }
    document.write('Кількість цифр у введеному числі ' + num1 + ': ' + result);
})