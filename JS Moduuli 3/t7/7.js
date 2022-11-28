'use strict';

let kohde = document.querySelector('#target');

let trig = document.getElementById("trigger")

trig.addEventListener("mouseover", (event) => {
  document.getElementById("target").src = "img/picB.jpg";
})

trig.addEventListener("mouseleave", (event) => {
  document.getElementById("target").src = "img/pica.jpg";
})