var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var button = document.getElementById('result');


button.addEventListener('click', function () {
    var num1 = Number(numberOne.value);
    var num2 = Number(numberTwo.value);

    var smaller = Math.min(num1, num2);
    var result = 0;
    var i = 1;

    while (i <= smaller) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i;
        }
        i = i + 1;
    }

    document.write('Найбільший цілий спільник ділитель: ' + result);
})
