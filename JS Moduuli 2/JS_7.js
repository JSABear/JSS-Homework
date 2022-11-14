'use strict';

let kohde = document.querySelector('#kohde');

function dice(sides) {
    let roll_dice = Math.floor(Math.random() * sides ) + 1;
    return roll_dice
}

let roll = 0

let faces = parseInt(prompt("Anna sivujen lukumäärä: "))

let html ='<ul>'

while (roll != faces){
    roll = dice(faces)
    html += '<li>';
    html += roll;
    html += '</li>';
}

html += '</ul>';

kohde.innerHTML = html