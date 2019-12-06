// Написать функцию, которая вычисляет факториал переданного ей числа.

//!n = n*(n-1)!

function getFactorial(n) {
    let rez = 1;
    if (n != 0 || n !== 1) {
        for (let i = 1; i <= n; i++) {
            rez = rez * i;
        }
        return rez;
    } else { return 1; }
}

console.log(getFactorial(5));