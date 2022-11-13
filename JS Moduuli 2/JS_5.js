'use strict';

let kohde = document.querySelector('#kohde');

let num = []

let end = false

while (end == true){

    input = parseInt(prompt("Anna luku: "))

    if (num.filter(value=> value==input).length > 0) {
        console.log(input)
        num.push(input)
        console.log("Number has already been entered.")
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