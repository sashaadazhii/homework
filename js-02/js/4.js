let year = Number(prompt('Введіть рік'));

let conditionFirst = year % 4;
let conditionFirst1 = year % 400;
let conditionSecond = year % 100;

if ((conditionFirst === 0 || conditionFirst1 === 0) && conditionSecond != 0) {
    alert(year + ' високосний');
} else {
    alert(year + ' невисокосний');
}