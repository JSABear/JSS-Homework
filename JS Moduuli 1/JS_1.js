'use strict';

console.log("I'm printing to console")

document.querySelector( '#otsikko'). innerHTML = "muutettu otsikko"

let name = prompt("What is your name?")

document.querySelector('#kohde'). innerHTML = "Moi "+ name
