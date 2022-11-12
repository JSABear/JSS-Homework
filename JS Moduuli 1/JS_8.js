'use strict';

let kohde = document.querySelector('#kohde');

let a_vuosi = parseInt(prompt("Anna alkuvuosi"));
let l_vuosi = parseInt(prompt("Anna loppuvuosi"));

let html ='<ul>'

for(let v = a_vuosi; v <= l_vuosi; v++) {
    if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0)) {
        html += '<li>';
        html += v;
        html += '</li>';
    }
}
html += '</ul>';

kohde.innerHTML = html