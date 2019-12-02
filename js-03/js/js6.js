var result;
var question = false;

do {
    var num1 = Number(prompt('1st nubmer'));
    var num2 = Number(prompt('2nd nubmer'));
    var symbol = prompt('what to do');

    switch (symbol) {
        case "*":
            result = num1 * num2; break;
        case "/":
            result = num1 / num2; break;
        case "+":
            result = num1 + num2; break;
        case "-":
            result = num1 - num2; break;

        default:
            alert('Введіть вірний символ');
    }
    question = confirm('Результат: ' + result + '. Продовжити?');
}
while (question === true);



