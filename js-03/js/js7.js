var number = prompt('Введіть число');
var numberChange = Number(prompt('На скільки посунути?'));
var numberSlice;
var num1;

for (let i = 1; i <= numberChange; i++) {
    num1 = number[0];

    numberSlice = number.slice(1);

    number = numberSlice + num1;

} alert(number);