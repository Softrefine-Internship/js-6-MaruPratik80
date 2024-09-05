// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

'use strict';

const getResponseData = function (url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Not found (${res.status})`);
        return resolve(res.json());
      })
      .catch(err => reject(err));
  });
};

getResponseData('https://restcountries.com/v3.1/name/usa')
  .then(data => console.log(data[0].name.common))
  .catch(err => console.error(err));
