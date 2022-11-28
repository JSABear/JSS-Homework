'use strict';

let kohde = document.querySelector('#kohde');


const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


for (var i = 0; i < students.length; i++){
      var v = document.createElement('option');
      v.value = students[i]["id"]
      v.innerHTML = students[i]["name"]
      kohde.appendChild(v);
}
