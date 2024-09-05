// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

"use strict";

const delayCollback = function (callback) {
  setTimeout(callback, 2000);
};

const callback = function () {
  console.log("after 2 seconds");
};

console.log("start");
delayCollback(callback);
