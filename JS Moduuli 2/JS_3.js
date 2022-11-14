'use strict';

let kohde = document.querySelector('#kohde');

let dogs = []

for (let i = 0; i < 6; i++) {
    dogs[i] = prompt("Anna koiran nimi: ");
}

dogs.sort();
dogs.reverse();

let html = '<ul>';
for (let i = 0; i < dogs.length; i++){
    html += '<li>'
    html += dogs[i]
    html += '</li>';
}
html += '</ul>'

kohde.innerHTML = html