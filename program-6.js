// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

'use stict';

const fetchData = async function (url, maxRetries) {
  let tries = 0;
  while (tries < maxRetries) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Not found (${res.status})`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(`Error : ${err.message}`);
      tries++;
    }
  }

  throw new Error(`Error in fatching data after ${tries} retries`);
};

fetchData('https://restcountries.com/v3.1/name/bharat', 3)
  .then(data => console.log(data[0].name.common))
  .catch(err => console.error(err.message));
