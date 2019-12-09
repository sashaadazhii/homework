let time = {
    hours: 3,
    minutes: 45,
    seconds: 20,
}

////////show Times///////
function showTime() {
    return document.write(time.hours + ':' + time.minutes + ':' + time.seconds + '<br />');
}

showTime();


////////add seconds///////
function addSeconds(n) {
    if ((time.seconds + n) >= 60) {
        time.minutes = time.minutes + Math.floor(n / 60); //47
        let newtimeSec = time.seconds + n;//150
        time.seconds = (newtimeSec / 60 - Math.floor(newtimeSec / 60)) * 60; //150:60=2.5
        time.seconds = time.seconds.toFixed(0);

        return document.write(time.hours + ':' + time.minutes + ':' + time.seconds + '<br />');
    } else {
        newtimeSec = time.seconds + n;
        return document.write(time.hours + ':' + time.minutes + ':' + newtimeSec + '<br />');
    }
}

// addSeconds(130);

////////add minutes///////
function addMinutes(n) {
    if ((time.minutes + n) >= 60) {
        let newtimeMin = time.minutes + n;
        time.minutes = (newtimeMin / 60 - Math.floor(newtimeMin / 60)) * 60;
        time.minutes = time.minutes.toFixed(0);
        time.hours = time.hours + Math.floor(newtimeMin / 60);// alert(time.hours);

        return document.write(time.hours + ':' + time.minutes + ':' + time.seconds + '<br />');
    }
}

addMinutes(36);

////////add hours///////
function addHours(n) {

    if ((time.hours + n > 24)) {
        document.write('Error. Day lasts 24h.')
    } else {
        time.hours = time.hours + n;
        return document.write(time.hours + ':' + time.minutes + ':' + time.seconds + '<br />');
    }
}

addHours(10);

