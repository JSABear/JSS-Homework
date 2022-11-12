'use strict';

let kohde = document.querySelector('#kohde');

let vuosi = parseInt(prompt("Anna vuosiluku"));

if ((vuosi % 4 == 0 && vuosi % 100 != 0) || (vuosi % 400 == 0)) {
    kohde.innerHTML = "Vuosi on karkausvuosi.";
}
else{
    kohde.innerHTML = "Vuosi ei ole karkausvuosi.";
}