'use strict';

let kohde = document.querySelector('#kohde');

let list = ["First item", "Second item" , "Third item"]

for (let i = 0; i < list.length; i++){
    var z = document.createElement('li');
    z. innerHTML = list[i];
    kohde.appendChild(z)
}



