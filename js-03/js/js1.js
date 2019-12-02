var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var button = document.getElementById('result');


button.addEventListener('click', function () {
    var num1 = Number(numberOne.value);//alert(num1);
    var num2 = Number(numberTwo.value); //alert(num2);

    var result = 0;
    var i = 0;


    while (num1 <= num2) {
        result = result + num1;
        num1 = num1 + 1;
    }
    document.write('Сума чисел усіх чисел =' + result);
})
