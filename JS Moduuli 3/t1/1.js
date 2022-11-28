'use strict';

let kohde = document.querySelector('#kohde');

const html = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';

function set_list() {
  let element = document.getElementById('kohde');
  element.classList.add("my-list");
}

set_list()

kohde.innerHTML = html