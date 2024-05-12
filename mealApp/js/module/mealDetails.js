import { handleFavBtnClik } from "./favourite.js";
/**
 * Display meals list to UI
 * @param {fetched Meals Data list} resData
 */
window.addEventListener("load", function () {
  debugger;
  const queryParams = new URLSearchParams(window.location.search);
  //retrieve state from local storage.
  // Retrieve the JSON stringand Parse the JSON  from localStorage
  const mealsState = JSON.parse(localStorage.getItem("state"));
  const favMeals = JSON.parse(localStorage.getItem("favMealsData"));

  // Get the value of a specific parameter
  const mealID = queryParams.get("mealid").trim(); // Returns 'value1'
  const isFav = queryParams.get("isFav").trim();
  console.log(mealID);
  //const mealID = mealsState.clickedMealID.trim();
  if (mealID !== "") {
    if (isFav == "1") {
      //rendering meal detailds from fav list
      const mealIngUL = document.querySelector("#meals-ing");
      const mealMeasureUL = document.querySelector("#meals-measure");
      const mealDescP = document.querySelector("#meal-det-hdr");
      const mealInstP = document.querySelector("#meal-instruction");
      const mealImg = document.querySelector(".meal-img");
      mealDescP.innerHTML = `Lets make ${favMeals[mealID].meals["strMeal"]}`;
      mealInstP.innerHTML = favMeals[mealID].meals[
        "strInstructions"
      ].replaceAll(".", "<br>");
      mealImg.innerHTML = `<img src=${favMeals[mealID].meals["strMealThumb"]} alt="meal img" />`;

      let mealIngsArr = favMeals[mealID].ingredients;
      let mealMeasureArr = favMeals[mealID].measures;
      let mealIngHTMLStr = "";
      let mealMeasureHTMLStr = "";
      for (let i = 0; i < mealIngsArr.length; i++) {
        mealIngHTMLStr += `<li>${mealIngsArr[i]}</li>`;
        mealMeasureHTMLStr += `<li>${mealMeasureArr[i]}</li>`;
      }

      mealIngUL.innerHTML = mealIngHTMLStr;
      mealMeasureUL.innerHTML = mealMeasureHTMLStr;
    } else {
      const mealIngUL = document.querySelector("#meals-ing");
      const mealMeasureUL = document.querySelector("#meals-measure");
      const mealDescP = document.querySelector("#meal-det-hdr");
      const mealInstP = document.querySelector("#meal-instruction");
      const mealImg = document.querySelector(".meal-img");
      mealDescP.innerHTML = `Lets make ${mealsState.meals.mealsList[mealID]["strMeal"]}`;
      mealInstP.innerHTML = mealsState.meals.mealsList[mealID][
        "strInstructions"
      ].replaceAll(".", "<br>");
      mealImg.innerHTML = `<img src=${mealsState.meals.mealsList[mealID]["strMealThumb"]} alt="meal img" />`;

      let mealIngsArr = mealsState.meals.ingredients[mealID];
      let mealMeasureArr = mealsState.meals.measures[mealID];
      let mealIngHTMLStr = "";
      let mealMeasureHTMLStr = "";
      for (let i = 0; i < mealIngsArr.length; i++) {
        mealIngHTMLStr += `<li>${mealIngsArr[i]}</li>`;
        mealMeasureHTMLStr += `<li>${mealMeasureArr[i]}</li>`;
      }

      mealIngUL.innerHTML = mealIngHTMLStr;
      mealMeasureUL.innerHTML = mealMeasureHTMLStr;
    }
  } else {
    alert("clicked a meal for details");
  }

  /*   document
    .querySelector("#fav-btn")
    .addEventListener("click", handleFavBtnClik); */
});
