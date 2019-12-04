// task 1 - name
let answear = prompt('What is your name?');
alert('Nice to meet you' + ' ' + answear);

// task 2 - year
const year = 2019;
let userYear = parseInt(prompt('When were you born?'));
let = diffYear = year - userYear;
alert('Your age is' + ' ' + diffYear);

// task 3 - square
let squareSide = parseInt(prompt('Enter lenght of a square.'));
alert("Square's erimeter is" + ' ' + squareSide * 4);

// task 4 - circle
const pi = 3.14;
let radius = parseInt(prompt('Enter radius'));
let circleSquare = pi * Math.pow(radius, 2);
alert("Circle Square is" + ' ' + circleSquare);

// task 5 - town distance
let distance = parseInt(prompt('Enter the distance between 2 towns, km.'));
let time = parseInt(prompt('Enter time you want to get there, hours.'));

let speed = Math.round(distance / time);
alert('You have to ride with speed ' + speed + ' km/hour');

// task 6 - exchange
const exRate = 0.87

let dollar = parseInt(prompt('How many dollars do you have?'));
let euro = alert('you can get ' + (exRate * dollar) + 'euro instaed of your ' + dollar + 'usd');

// task 7 - flash
const fileSize = 820;
let flash = parseInt(prompt('Enter Gb'));
let flashMemory = flash * 1024;

let quontity = Math.floor(flashMemory / fileSize);
alert(quontity);

// task 8 - change
let money = parseInt(prompt('Money amount'));
let price = parseInt(prompt('Chocolate price'));

let pcs = Math.floor(money / price);
let change = money - (pcs * price);
alert(change);

// task 9 - reverse
// let re = /\d\d\d$/;
// let re = /\d{3}/;
// let number = re.test(prompt('enter number from 100 to 999'));
// alert(number);

let number = prompt('enter number from 100 to 999');   //574

let numberFirst = number % 10;//4
let numberFirst1 = Math.floor(number / 10);; //57

let numberSecond = numberFirst1 % 10;  //7 
let numberThird = Math.floor(numberFirst1 / 10);//5

let reverse = numberFirst * 100 + numberSecond * 10 + numberThird; console.log(reverse);

// task 10 - deposit
let depositAmount = parseInt(prompt('Depsit amount'));
const depositDayQty = 60;
const percent = 0.05;
const dayInYear = 365;

let profit = depositAmount * percent / dayInYear * depositDayQty;
alert("Your profit for 2 month: " + profit);





