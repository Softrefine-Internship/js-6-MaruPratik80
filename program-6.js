// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

'use stict';

const fetchData = async function (country, maxRetries) {
  let res;
  let tries = 0;
  try {
    res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Not found');
    const data = await res.json();
    console.log(data[0].name.common);
  } catch (err) {
    while (tries < maxRetries) {
      res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      tries++;
    }
    console.error(err);
  }
};

fetchData('bharat', 3);
