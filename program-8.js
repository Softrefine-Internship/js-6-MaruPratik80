// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

'use strict';

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

const fetchData = async function (promise, time) {
  try {
    const response = await Promise.race([promise, timeout(time)]);
    if (!response.ok) throw new Error(`Not found (${response.status})`);
    const data = await response.json();
    console.log(data[0].name.common);
  } catch (err) {
    console.error(err.message);
  }
};

const promise = fetch('https://restcountries.com/v3.1/name/bharat');

let time = 0.1;
time = 2; // in second

fetchData(promise, time);
