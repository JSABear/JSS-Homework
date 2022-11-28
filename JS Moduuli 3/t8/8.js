'use strict';

let kohde = document.querySelector('#result');

const button = document.querySelector('button');

button.addEventListener('click', function(evt){
var num1 = document.querySelector("input[id=num1]").value;
var num2 = document.querySelector("input[id=num2]").value;
var parse1 = parseFloat(num1)
var parse2 = parseFloat(num2)

function selection() {
  var x = document.getElementById("operation").value;
  return x
}

let select = selection()

if (select === "add"){
    var answer = parse1 + parse2
}

else if (select === "sub"){
     answer = parse1 - parse2
}

else if (select === "multi"){
     answer = parse1 * parse2
}
else if (select === "div"){
     answer = parse1 / parse2
}

kohde.innerHTML = answer

});
