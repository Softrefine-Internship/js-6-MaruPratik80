// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

'use strict';

const func1 = async function () {
  const res1 = await Promise.resolve('func 1 : 1');
  console.log(res1);
  const res2 = await Promise.resolve('func 1 : 2');
  console.log(res2);
  const res3 = await Promise.resolve('func 1 : 3');
  console.log(res3);
};
const func2 = async function () {
  const res1 = await Promise.resolve('func 2 : 1');
  console.log(res1);
  const res2 = await Promise.resolve('func 2 : 2');
  console.log(res2);
  const res3 = await Promise.resolve('func 2 : 3');
  console.log(res3);
};
const func3 = async function () {
  const res1 = await Promise.resolve('func 3 : 1');
  console.log(res1);
  const res2 = await Promise.resolve('func 3 : 2');
  console.log(res2);
  const res3 = await Promise.resolve('func 3 : 3');
  console.log(res3);
};

const asyncOprations = async function () {
  await func1();
  await func2();
  await func3();
};
asyncOprations();
