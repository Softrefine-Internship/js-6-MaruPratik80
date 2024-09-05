// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

'use strict';

const testFunc = function () {
  console.log('Hello!');
};

const exeFuncAtInterval = function (func, intervalInSec) {
  setInterval(func, intervalInSec * 1000);
};

exeFuncAtInterval(testFunc, 2);
