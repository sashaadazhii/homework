// Написать функцию, которая принимает часы, минуты и секунды 
// и возвращает это время в секундах.

function getSeconds(hh, mm, ss) {
    hh = prompt('hour');
    mm = prompt('minutes');
    ss = prompt('seconds');
    let totalSeconds;

    return totalSeconds = (hh * 3600) + (mm * 60) + ss;
}

getSeconds();