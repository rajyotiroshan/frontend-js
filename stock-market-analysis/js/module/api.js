async function fetchData(url, options, cb) {
  try {
    let res = await fetch(url, options);
    let data = await res.json();
    cb(data);
  } catch (error) {
    cb(error);
  }
}
export default fetchData;
