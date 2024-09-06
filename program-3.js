//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

'use strict';

const download = async function (urls) {
  const contents = await Promise.allSettled(
    urls.map(async url => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error in downloading data from ${url} (${res.status})`);
      const data = await res.json();
      return { url, data };
    })
  );

  return contents;
};

const urls = [
  'https://restcountries.com/v3.1/name/usa',
  'https://restcountries.com/v3.1/name/portugal',
  'https://restcountries.com/v3.1/name/bharat',
];

download(urls);

(async function () {
  try {
    const contents = await download(urls);
    console.log(
      contents.map(content => {
        if (content.status === 'fulfilled') {
          return `Data from ${content.value.url} : ${content.value.data[0].capital[0]}`;
        } else {
          return content.reason.message;
        }
      })
    );
  } catch (err) {
    console.error(`Error : ${err.message}`);
  }
})();
