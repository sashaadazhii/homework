let number = prompt('Введіть 3-значне число');
let third = Number(number[number.length - 1]);
let second = Number(number[1]);
let first = Number(number[0]);


if (first === second && second === third && first === third) {
    alert('усі цифри однакові');
} else if (first === second) {
    alert('1 і 2 однакові');
} else if (first === third) {
    alert('1 і 3 однакові');
} else if (second === third) {
    alert('2 і 3 однакові');
} else {
    alert('співпадінь не знайдено');
}