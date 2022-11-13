'use strict';

let kohde = document.querySelector('#kohde');

let num = prompt("Anna luku: ")
let prime = true;
let i;

if (num >1) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
        prime = false;
        break;
        }
    }
}

if (prime == true){
    kohde.innerHTML = ("Selected: " + num + ". Number is a prime number")
}
else{
    kohde.innerHTML = ("Selected: " + num + ". Number is not a prime number")
}