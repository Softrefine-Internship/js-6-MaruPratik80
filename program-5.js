// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const fetchData = async function (urls) {
  try {
    const result = await Promise.all(
      urls.map(async url => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Not found (${res.status})`);
        return await res.json();
      })
    );
    return result;
  } catch (err) {
    throw err;
  }
};

const urls = [
  'https://restcountries.com/v3.1/name/usa',
  'https://restcountries.com/v3.1/name/portugal',
  'https://restcountries.com/v3.1/name/bharat',
];

(async function () {
  try {
    const data = await fetchData(urls);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(`Error : ${err.message}`);
  }
})();
