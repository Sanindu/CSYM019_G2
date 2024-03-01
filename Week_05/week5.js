function inputfunc() {
var element = document.getElementById('inputfield');
var element2 = document.getElementById('divid');
element2.firstChild.nodeValue = element.value;
//alert(element.value);
}

function buttonclick() {
    var element = document.getElementById('inputfield');
   // element.addEventListener('click', inputfunc);
   element.addEventListener('keyup', inputfunc);
}

document.addEventListener('DOMContentLoaded',buttonclick);