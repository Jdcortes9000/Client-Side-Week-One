'use strict';
var c = console;

window.onload = function () {
    var list = document.getElementById('list');

    list.addEventListener("click", function (event) {
        var listitem = event.target;
        c.log(listitem.innerText);
    });
}