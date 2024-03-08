// function keyDown(event) {
// console.log(event.keyCode);
// }
// function buttonPress(event) {
//     var element = document.getElementById('circle');
//     var positionTop = element.offsetTop;
//     var positionLeft = element.offsetLeft;

// if (event.keyCode ==37) {
//     element.style.left = positionLeft - 10 + 'px';
// }
// if (event.keyCode ==38) {
//     element.style.top = positionTop - 10 + 'px';
// }
// if (event.keyCode ==39) {
//     element.style.left = positionLeft + 10 + 'px';
// }
// if (event.keyCode ==40) {
//     element.style.top = positionLeft + 10 + 'px';
// }
// }



//document.addEventListener('keydown',buttonPress);

var myVariable = 0;

function myClickEvent() {

    myVariable = myVariable +1;
    console.log(myVariable);
}

function myLoadEvent() {

    document.addEventListener('click',myClickEvent );
}
document.addEventListener("DOMContentLoaded",myLoadEvent);