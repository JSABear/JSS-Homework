
let num = parseInt(prompt("Anna luku: "));
let participants = [];

for (let i = 0; i < num; i++) {
    participants[i] = prompt("name: ");
}

console.log(participants)

let html = '<ol>';
for (let i = 0; i < num; i++){
    html += '<li>'
    html += participants[i]
    html += '</li>';
}
html += '</ol>'

let kohde = document.querySelector('#kohde');
kohde.innerHTML = html