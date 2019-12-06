// Написать функцию, которая принимает количество секунд, переводит
//  их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getTime(ss) {
    ss = Number(prompt('seconds'));
    let time;
    let hh = ss / 3600; console.log(hh);//10400 =2.90
    let mm = ss / 60; console.log(mm);

    if (hh >= 1) {
        hh = Math.floor(hh);
        mm = Math.floor((ss - (hh * 3600)) / 60);
        ss = ss - (hh * 3600) - (mm * 60);
    } else if (hh < 1 && mm >= 1) {
        mm = Math.floor(ss / 60);
        ss = ss - (mm * 60);
        return time = `00:${mm}:${ss}`;

    } else {
        return time = `00:00:${ss}`;
    }
    return time = `${hh}:${mm}:${ss}`;
}

console.log(getTime());

