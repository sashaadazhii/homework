const discountS = 0.97;
const discountM = 0.95;
const discountL = 0.97;

let summ = Number(prompt('Яка сума покупки?'));
let result;

if (summ >= 200 && summ <= 300) {
    result = summ * discountS;
} else if (summ > 300 && summ <= 500) {
    result = summ * discountM;
} else if (summ > 500) {
    result = summ * discountL;;
} else {
    result = summ;
}
alert(result);