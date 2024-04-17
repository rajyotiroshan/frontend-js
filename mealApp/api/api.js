/**
 *
 * @param {resource url} url
 * @param {options obj} data
 * @param {response callback handler} cb
 */
async function fetchData(url, data, cb) {
  try {
    let res = await fetch(url, data);
    let resData = await res.json();
    cb(resData, false);
  } catch (err) {
    cb(err, true);
  }
}

export default fetchData;
