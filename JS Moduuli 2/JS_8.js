'use strict';

let kohde = document.querySelector('#kohde');

function concat(name_array){
    let html = ""
    for (let i = 0; i < name_array.length; i++) {
        console.log(i)
        html += name_array[i]
    }
    return html
}

let names = ["Teemu","Aku","Väyrynen"]

let combination = concat(names)

kohde.innerHTML = combination