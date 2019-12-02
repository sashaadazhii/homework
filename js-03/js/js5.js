
var num;
var odd = 0;
var even = 0;
var zero = 0;
var aboveZero = 0;
var belowZero = 0;

for (var i = 0; i < 10; i++) {
    num = Number(prompt('введіть число'));

    if (num === 0) {
        zero = zero + 1;
    } else {
        if (num > 0) {
            aboveZero = aboveZero + 1;
        } else { belowZero = belowZero + 1; }

        if (num % 2 == 0) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }
    }
}

document.write('Кількість додатніх чисел: ' + aboveZero + '<br>');
document.write('Кількість відємних чисел: ' + belowZero + '<br>');
document.write('Кількість парних чисел: ' + even + '<br>');
document.write('Кількість непарних чисел: ' + odd + '<br>');
document.write('Кількість нулів: ' + zero + '<br>');