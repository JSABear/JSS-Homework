'use strict';

let kohde = document.querySelector('#kohde');

let name = prompt("Anna opiskelian nimi: ");

let random_num = Math.floor(Math.random() * 4) + 1;

    if (random_num == 1) {
        kohde.innerHTML = name + " , you are a Gryffindor";
    } else if (random_num == 2) {
        kohde.innerHTML = name + " , you are a Hufflepuff";
    } else if (random_num == 3) {
        kohde.innerHTML = name + " , you are a Ravenclaw";
    } else if (random_num == 4) {
        kohde.innerHTML = name + " , you are a Slytherin";
    }

