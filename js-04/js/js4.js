// Написать функцию, которая принимает длину и ширину прямоугольника и
//  вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function getSquare(a, b) {
    let square;

    if (b === undefined) {
        return square = Math.pow(a, 2);
    } else { return square = a * b };
}

getSquare(4);