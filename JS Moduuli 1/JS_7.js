'use strict';

let kohde = document.querySelector('#kohde');

let rolls = 0;

let num_of_rolls = prompt("Give number dice rolls");

for (let r = 0; r < num_of_rolls; r++) {
    let result = Math.floor(Math.random() * 6 ) + 1;
    console.log(result);
    rolls = rolls + result;
}

kohde.innerHTML = rolls;
