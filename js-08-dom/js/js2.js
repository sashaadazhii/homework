let buttonOpen = document.getElementById('modal-on');
let buttonClose = document.getElementById('modal-off');

let modalWindow = document.getElementsByClassName('js-modal')[0];

buttonOpen.addEventListener('click', function () {
    modalWindow.style.display = 'block';

    buttonClose.addEventListener('click', function () {
        modalWindow.style.display = 'none';
    })

})