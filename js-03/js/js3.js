var numberOne = document.getElementById('numberOne');
var button = document.getElementById('result');

button.addEventListener('click', function () {
    var num1 = Number(numberOne.value);
    var result = 0;

    for (var i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
            result = i;
            document.write(result + '<br>');
        };
    }
})
