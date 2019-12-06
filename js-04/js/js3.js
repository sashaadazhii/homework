// Написать функцию, которая принимает три отдельные цифры и 
// превращает их в одно число.
//  Например: цифры 1, 4, 9 превратятся в число 149.

function concat(a = 0, b = 0, c = 0) {
    a = prompt('first number');
    b = prompt('second number');
    c = prompt('third number');
    let concat = a + b + c;
    return concat;

}

console.log(concat());