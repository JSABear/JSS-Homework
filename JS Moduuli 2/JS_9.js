'use strict';

let kohde = document.querySelector('#kohde');

function even(num_list) {
    let even_list = num_list.filter(number => {return number % 2 ===0;})
    return even_list
}

let num_array = [1,2,3,4,5,6,7,8,9,10]

let new_array = even(num_array)

console.log(num_array)
console.log(new_array)
