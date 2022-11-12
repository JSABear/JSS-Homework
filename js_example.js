#!
const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

const student = {
  firstName: 'Greg',
  lastName: 'Focker',
  studentId: '234359',
  phone: '040 5902123',
}
function greet() {
    console.log('well, hello!');
    return;
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let name of names){
    console.log(name);
}

greet();

console.log(student)

function greet1(text, times) {
    for (let i = 1; i <= times; i++) {
        console.log(text + ' ' + i + '. time!');
    }
return;
}

greet1(2,2);

function ree(t) {
    for (let i = 0; i < t.length; i++){
        t[i] = t[i] *2;
    }
}

let taulukko = [10, 20, 30];
ree(taulukko);
console.log(taulukko);


let nof_c = parseInt(prompt("number of candidates: "));
let candidates = [];

for (let i = 0; i < nof_c; i++){
    let cand_name = prompt("Name of candidate " + (i + 1));
    let candidate = {
        name : cand_name
        votes : 0
    }
}




