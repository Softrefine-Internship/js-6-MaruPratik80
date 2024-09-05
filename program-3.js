//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

'use strict';

const download = async function (urls) {
  try {
    const contents = await Promise.all(
      urls.map(async url => {
        const res = await fetch(url);
        return await res.json();
      })
    );

    console.log(contents.map(data => data[0].name.common));
  } catch (err) {
    console.error(err);
  }
};

download([
  'https://restcountries.com/v3.1/name/usa',
  'https://restcountries.com/v3.1/name/portugal',
  'https://restcountries.com/v3.1/name/bharat',
]);
