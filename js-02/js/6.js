let summ = Number(prompt('Скільки USD маєш?'));
let currency = prompt('Вибери валюту:\nUAN \nEUR \nAZN');
const uan = 5.3;
const eur = 1.15;
const azn = 2.33;

let result;

if (currency.indexOf("UAN") != -1) {
    result = summ * uan;
} else if (currency.indexOf("EUR") != -1) {
    result = summ * eur;
} else if (currency.indexOf("AZN") != -1) {
    result = summ * azn;
} else {
    alert('Введіть вірну валюту');
}

alert(result); 