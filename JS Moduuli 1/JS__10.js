'use strict';

let kohde = document.querySelector('#kohde');

let num_of_dice = parseInt(prompt("Anna noppien lukumäärä: "));

let wanted_num = parseInt(prompt("Anna haluttu yhteissumma: "));


let num_of_rolls = 10000

let roll_sums = []

let rolls = []


for (let r = 0; r < num_of_rolls; r++) {
    for (let n = 0; n < num_of_dice; n++) {
        let result = Math.floor(Math.random() * 6) + 1;
            rolls.push(result);
    }
    roll_sums.push(rolls.reduce((partialSum, a) => partialSum + a, 0));
    console.log(roll_sums)
    rolls = []
}

let filtered_by_sim = roll_sums.filter(num => num == wanted_num);
console.log(filtered_by_sim)

let length_by_sim = filtered_by_sim.length;

console.log(length_by_sim)

let prob = (length_by_sim / roll_sums.length * 100).toFixed(2);

kohde.innerHTML = "Probability to get sum " + wanted_num +" with " + num_of_dice + " dice is " + prob + "%"