let circle = Number(prompt('Веевдіть окружність кола'));
let square = Number(prompt('Веевдіть периметр квадрата'));

const pi = 3.14;
let d = circle / pi;
let squareSide = square / 4;

let diagSq = Math.sqrt(Math.pow(squareSide, 2) * 2); //корінь з сума кв.катетів

if (diagSq <= d) {
    alert('влазить');
} else {
    alert('не влазить');
}

