'use strict';

let kohde = document.querySelector('#kohde');

let num = []

let input = 1

while (input > 0){
    input = parseInt(prompt("Anna luku: "))
    console.log(input)
    num.push(input)
}

num.sort(function(a, b){return b - a});

console.log(num)