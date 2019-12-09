let numba1 = {
    top: 13,
    bottom: 16,
}

let numba2 = {
    top: 10,
    bottom: 23,
}

function sumNumbas(n1, n2) {
    n1 = n1.top / n1.bottom;
    n2 = n2.top / n2.bottom;
    return n1 + n2;

}

function divsionNumbas(n1, n2) {
    n1 = n1.top / n1.bottom;
    n2 = n2.top / n2.bottom;
    return n1 / n2;
}

console.log(sumNumbas(numba1, numba2));
console.log(divsionNumbas(numba1, numba2));
