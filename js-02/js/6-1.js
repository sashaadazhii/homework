let summ = Number(prompt('Скільки USD маєш?'));
let currency = prompt('Вибери валюту:\nUAN \nEUR \nAZN');

const uan = 5.3;
const eur = 1.15;
const azn = 2.33;

let result;

switch (currency) {
    case "UAN":
        result = summ * uan; break;
    case "EUR":
        result = summ * eur; break;
    case "AZN":
        result = summ * azn; break;

    default:
        alert('Введіть вірну валюту');
}

alert(result);