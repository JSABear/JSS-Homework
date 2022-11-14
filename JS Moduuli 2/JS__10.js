'use strict';

let kohde = document.querySelector('#kohde');

let candidates = [];

let num_of_cand = Number(prompt("Enter the number of candidates: "));

for (let i = 0; i < num_of_cand; i++) {
    let cand_name = prompt("Name for candidate " + (i + 1) + ": ");
    candidates.push({name: cand_name, votes: 0});
}

let num_of_voters = Number(prompt("Enter the number of voters: "));

for (let i = 0; i < num_of_voters; i++) {
    const vote = prompt(`Vote for candidate by name:`);
    if(isNaN(vote)) {
        const candidate = candidates.find(candidate => candidate.name === vote);
        if(candidate) {
            candidate.votes++;
        }
    } else {
        const candidate = candidates[vote - 1];
        if(candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
console.log("Results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes.");
}