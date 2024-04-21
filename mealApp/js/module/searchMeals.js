import { fetchMealsData } from "./mealsUtility.js";

function searchMeals(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const srchInputEl = document.querySelector("#srch-field");
  let srchTerm = srchInputEl.value.trim();
  if (srchTerm !== "") {
    srchInputEl.classList.remove("notext");
    //fetch item
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srchTerm}`;
    fetchMealsData(URL, { method: "GET" });
  } else {
    srchInputEl.classList.add("notext");
  }
}

export { searchMeals };
