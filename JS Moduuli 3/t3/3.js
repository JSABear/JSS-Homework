'use strict';

const names = ['John', 'Paul', 'Jones'];

let kohde = document.querySelector('#kohde');

let html = "";
for (let i = 0; i < names.length; i++){
    html += '<li>'
    html += names[i]
    html += '</li>';
}

kohde.innerHTML = html