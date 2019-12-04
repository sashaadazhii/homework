var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var button = document.getElementById('result');


button.addEventListener('click', function () {
    var num1 = Number(numberOne.value);
    var num2 = Number(numberTwo.value);

    var devider = 2;

    while (num1 >= 1 && num2 >= 1) {
        if (num1 % devider === 0 && num2 % devider === 0) {
            break;
        }
        devider = devider + 1;
    }

    document.write('Найменший цілий спільний ділитель: ' + devider);
})
