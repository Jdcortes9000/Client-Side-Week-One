'use strict';
var c = console;

var callback = function (msg) {
    c.log(msg);
}

function runCallBack(cb) {
    cb('test');
}
runCallBack(callback);
window.onload = function () {

}