let buttonSwitch = document.getElementById('switcher');
let list = document.getElementsByClassName('js-list')[0];
let listItem = document.getElementsByClassName('js-item');

let num = 0;

buttonSwitch.addEventListener('click', function () {

    switch (num) {
        case 0:
            listItem[0].style.background = 'red';

            break;

        case 1:
            listItem[1].style.background = 'green';
            listItem[0].style.background = 'transparent';
            break;

        case 2:
            listItem[2].style.background = 'yellow';
            listItem[1].style.background = 'transparent';
            break;
    }
    num = num + 1;

})