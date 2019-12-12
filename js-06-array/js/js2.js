let bill = [
    { item: 'tonic', qty: 1, price: 25, },
    { item: 'rum', qty: 2, price: 390, },
    { item: 'lime', qty: 3, price: 10, },
    { item: 'sugar', qty: 4, price: 15, }
];

function printBill() {
    for (let i = 0; i < bill.length; i++) {

        for (let key in bill[i]) {
            document.write(key + ': ' + bill[i][key] + ' ');
        }
        document.write('<br />');
    }
}

printBill();

//////сума чеку
function Sum() {
    let rez = 0;
    let summ = 0;

    for (let i = 0; i < bill.length; i++) {
        rez = bill[i]['qty'] * bill[i]['price'];
        summ += rez;
    } return summ;
}
Sum();


///найдорожча покупка
function getBiggestPrice() {
    bill.sort(function (a, b) {
        return b.price - a.price;
    })
    return bill[0]['price'];
}
//console.log(bill);
getBiggestPrice();


// середня варість товару
function getAveragePrice() {
    let totalPrice = 0;
    let rez = 0;
    let totalQty = 0;
    let summ = 0;

    for (let i = 0; i < bill.length; i++) {
        summ = bill[i]['qty'] * bill[i]['price'];
        totalPrice += summ;
        totalQty += bill[i]['qty'];

    }
    return document.write(rez = totalPrice / totalQty);
}
getAveragePrice();