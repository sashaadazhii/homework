let car = {
    producer: 'Volkswagen Group',
    model: 'rs4',
    year: 2018,
    speed: 110,
}

function showCarInfo() {

    for (let key in car) {
        document.write(key + ': ' + car[key] + '<br>');
    }
}
showCarInfo();

function getTime(n) {

    let hours = n / car.speed;//3,64
    let minutes = hours - Math.floor(hours);
    minutes = (minutes * 60).toFixed(0);

    if (hours >= 4) {
        hours = hours + 1;
        return Math.floor(hours) + ':' + minutes;
    } else {
        return Math.floor(hours) + ':' + minutes;
    }
}

document.write(getTime(500));