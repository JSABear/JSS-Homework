'use strict';

let kohde = document.querySelector('#kohde');

let selection = confirm("Should I calculate the square root?");

if (selection == true){
    let sel_num = prompt("Give a number to get squeare root from");
    if (sel_num >= 0){
        kohde.innerHTML = (Math.sqrt(sel_num));
    }

    else {
        kohde.innerHTML = "The square root of a negative number is not defined";
    }
}

else if (selection == false){
    kohde.innerHTML = "The square root is not calculated";
}