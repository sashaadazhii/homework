// Написать функцию, которая принимает время (часы, минуты, секунды) и 
// выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты
// и/или секунды не были переданы, то выводить их как 00.

function showTime(hh, mm, ss) {
    hh = prompt('hour'); //console.log(hh);
    mm = prompt('minutes'); //console.log(mm);
    ss = prompt('seconds'); //console.log(ss);
    let time;

    if (mm === '' && ss === '') {
        return time = `Time is: ${hh}:00:00`;
    } else if (mm === '') {
        return time = `Time is: ${hh}:00:${ss}`;
    } else if (ss === '') {
        return time = `Time is: ${hh}:${mm}:00`;
    } else { return time = `Time is: ${hh}:${mm}:${ss}` };

}
console.log(showTime());