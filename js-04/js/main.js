let numba = 2;

function increase(n) {
    numba = numba + n;
    return numba;
}

function getSquared() {
    let result = Math.pow(numba, 2);
    return result;
}

// let showSquared = getSquared();
// alert(showSquared);

function showSquared() {
    alert(getSquared());
}

showSquared();
increase(5);
showSquared();

/*********************/

function getSum(a, b = 0, c = 0, d = 0) {
    let sum = a + b + c + d;
    return sum;
}

