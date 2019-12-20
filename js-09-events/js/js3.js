// let $object = document.getElementById('object');
// let flag = false;

// let moveObject = document.addEventListener('mousedown', function mouseDown(event) {

//     $object.style.width = event.pageX + 'px';
//     $object.style.height = event.pageY + 'px';

// })

// function mouseUp(event) {
//     document.removeEventListener('mousedown', moveObject);
// }


// document.addEventListener('mousemove', moveObject);
// document.addEventListener('mouseup', mouseUp);


let $object = document.getElementById('object');
let flag = false;

document.addEventListener('mousedown', function mouseDown() {
    flag = true;
})

document.addEventListener('mousemove', function mouseMove() {
    if (flag) {
        // alert('1');
        $object.style.width = event.pageX + 'px';
        $object.style.height = event.pageY + 'px';
    }
})

document.addEventListener('mouseup', function mouseUp() {
    flag = false;
})



