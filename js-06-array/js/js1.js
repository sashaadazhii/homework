let shoppingList = [
    { item: 'rum', qty: 2, bought: false, },
    { item: 'tonic', qty: 1, bought: true, },
    { item: 'lime', qty: 3, bought: false, },
    { item: 'sugar', qty: 1, bought: true, }
];


function showList() {
    document.write('Список покупок:' + '<br>');
    for (let i = 0; i < shoppingList.length; i++) {
        document.write(shoppingList[i]['item'] + '<br>');
    }
}

shoppingList.sort(function (a, b) {
    if (a.bought < b.bought) { //a.false<a.true -- нічого не робимо
        return -1;
    }
    return 1;//a.false > a.true -- переміщаємо
});

// showList();

//
function addItemList(obj) {
    let flag = false;
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i]['item'] === obj['item']) {
            flag = true;
            shoppingList[i]['qty'] = shoppingList[i]['qty'] + obj['qty'];
            if (shoppingList[i]['bought'] === false) { shoppingList[i]['bought'] = true }
        }
    }
    if (flag === false) {
        shoppingList.push(obj);
    }
    return console.log(shoppingList);
}

// addItemList({ item: 'lime', qty: 4, bought: false, });


function setBought(objItem) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i]['item'] === objItem) {
            shoppingList[i]['bought'] = true;
        }
        else return console.log('Enter correct list item');
    }
    return console.log(shoppingList);
}

setBought('rum');