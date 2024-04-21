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
    cb(resData, false); //no error
  } catch (err) {
    cb(err, true); //with error
  }
}

export default fetchData;
