import fetchData from "../../api/api.js";
import { updateMealsList } from "../../state/stateFunctions.js";

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

/**
 * Display meals list to UI
 * @param {fetched Meals Data list} resData
 */
function renderMealsList(mealsArr) {
  console.log(mealsArr);
  const mealsUL = document.getElementById("meals-list");
  mealsUL.innerHTML = "";
  let mealsLIStr = "";
  mealsArr.forEach((meal) => {
    mealsLIStr =
      mealsLIStr +
      `          
          <li class="meal">
            <div class="meal-cont">
                  <div class="meal-img">
                      <img src=${meal["strMealThumb"]} alt="meal img" />
                  </div>
                  <div class="meal-list-detail">
                      <h2>${meal["strMeal"]}</h2>
                      <ul class="meal-list-ing">
                          <li>${meal["strCategory"]}</li>
                          <li>${meal["strArea"]}</li>
                          <li>${meal["strTags"]}</li>
                         ${
                           meal["strYoutube"] &&
                           `<li><a href=${meal["strYoutube"]} alt="yt link" target="_blank" class="ytlink">${meal["strYoutube"]}</a></li>`
                         }
                          
                      </ul>
                  </div>
              </div>
                  <div class="meal-list-detail md-btn-cont">
                  <a id=${
                    meal["idMeal"]
                  } href="./pages/meal-details.html" class="meal-list-detail-btn" data-mealid=${
        meal["idMeal"]
      }
                      >Details</a
                  >
                  </div>
      </li>`;
  });

  mealsUL.innerHTML = mealsLIStr;
}

/**
 *
 * @param {fetched Meals Data} resData
 * @param {if an error during fetching or not} isError
 */
function cbForMealsFetched(resData, isError) {
  if (!isError) {
    let mealsData = [];
    mealsData = resData?.meals;
    //update meals state
    updateMealsList(mealsData);
  } else {
    console.log(`Error in fetching meals data:: ${resData}`);
  }
}

//fetch Meals data
function fetchMealsData() {
  try {
    fetchData(URL, data, cbForMealsFetched);
  } catch (err) {
    console.log(err);
  }
}

export { fetchMealsData, renderMealsList };
