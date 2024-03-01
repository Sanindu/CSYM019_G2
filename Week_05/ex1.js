
function clickalert(){
//alert('ALE|R|T');
var element = document.getElementById('circle');
//element.style.backgroundColor = 'blue';
//element.style.opacity = '1.0';
var opas = element.style.opacity;
// element.style.opacity = parseFloat(opas) + 0.1;
element.style.opacity = parseFloat(opas) - 0.01;

}
function buttonclick() {
    var element = document.getElementById('circle');
   // element.addEventListener('click', inputfunc);
   element.addEventListener('click', clickalert);
}
function opacityChange() {
    var element = document.getElementById('circle');  
   // element.style.opacity = '0.5';
   element.style.opacity = '1.0';
}

setInterval(clickalert, 10);

document.addEventListener('DOMContentLoaded',opacityChange);
document.addEventListener('DOMContentLoaded',buttonclick);
