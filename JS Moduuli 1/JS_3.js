'use strict';

let kohde = document.querySelector('#kohde')

let num1 = parseInt(prompt("First number?"))
let num2 = parseInt(prompt("Second number?"))
let num3 = parseInt(prompt("Third number?"))

let summa = num1 + num2 + num3
let tulo = num1 * num2 * num3
let ka = summa / 3

kohde.innerHTML = 'summa = ' + summa + ', tulo =' + tulo + ', keskiarvo = ' + ka;