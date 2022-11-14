'use strict';

let kohde = document.querySelector('#kohde');

function dice() {
    let roll_dice = Math.floor(Math.random() * 6 ) + 1;
    return roll_dice
}

let roll = 0

let html ='<ul>'

while (roll != 6){
    roll = dice()
    html += '<li>';
    html += roll;
    html += '</li>';
}

html += '</ul>';

kohde.innerHTML = html