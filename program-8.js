// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

'use strict';

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

const fetchData = function (promise, time) {
  Promise.race([promise, timeout(time)])
    .then(res => console.log(res[0].name))
    .catch(err => console.error(err));
};

fetchData(
  fetch('https://restcountries.com/v3.1/name/bharat').then(res => res.json()),
  0.1
);

fetchData(
  fetch('https://restcountries.com/v3.1/name/bharat').then(res => res.json()),
  1
);
