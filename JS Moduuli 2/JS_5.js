'use strict';

let kohde = document.querySelector('#kohde');

let num = [];
let end = false;
let input = 0;

while (end == false){

    input = parseInt(prompt("Anna luku: "));

    if (num.includes(input)) {
        console.log(input);
        num.push(input);
        console.log("Number has already been entered.");
        end = true
        break
    }
    else {
        console.log(input)
        num.push(input)
    }
}

num.sort(function(a, b){return a - b});

console.log(num)