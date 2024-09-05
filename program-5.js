// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const fetchData = async function (promises) {
  try {
    const result = await Promise.all(promises);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

fetchData;
