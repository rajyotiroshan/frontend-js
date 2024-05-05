import { fetchMealsData } from "./module/mealsUtility.js";
import { searchMeals } from "./module/searchMeals.js";
import { addClickEvtToFavBtn } from "./module/favourite.js";
//meals to fetch on main page first time
const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=veg`;
const data = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  /*     mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header */
};
fetchMealsData(URL, data);

document.querySelector("#srchbtn").addEventListener("click", searchMeals);
