import { renderMealsList } from "../js/module/mealsList.js";
import mealsState from "./state.js";
/**
 * replace mealsList with meals
 * @param {fetched meals list} meals
 */
function updateMealsList(meals) {
  debugger;
  mealsState.fetchedMeals = meals;
  let mealObj = {
    ingredients: {},
    measures: {},
  };

  let mealsList = {};

  //extract ingredients and measures
  /// console.log(meals);
  meals.forEach((mObj) => {
    mealObj.ingredients[mObj["idMeal"]] = [];
    mealObj.measures[mObj["idMeal"]] = [];
    Object.keys(mObj).forEach((key) => {
      if (
        key.startsWith("strIngredient") &&
        mObj[key] !== null &&
        mObj[key].trim() !== ""
      ) {
        mealObj.ingredients[mObj["idMeal"]].push(mObj[key]);
      }

      if (
        key.startsWith("strMeasure") &&
        mObj[key] !== null &&
        mObj[key].trim() !== ""
      ) {
        mealObj.measures[mObj["idMeal"]].push(mObj[key]);
      }
    });

    mealsList[mObj["idMeal"]] = mObj;
  });

  //console.log(mealObj);

  mealsState.meals.mealsList = mealsList;
  mealsState.meals.ingredients = mealObj.ingredients;
  mealsState.meals.measures = mealObj.measures;

  console.log(mealsState);
  // Convert the state object to a JSON string
  const stateJSON = JSON.stringify(mealsState);

  // Store the JSON string in localStorage
  localStorage.setItem("state", stateJSON);

  renderMealsList(meals, 0);
}

/**
 * add pass eal id to favourite meal list
 * @param {meal id to add to fav list} mealID
 */
function addMealToFav(mealID) {
  mealsState.favList.push(mealID);
}

/**
 * remove passed meal id from favourite meal list
 * @param {meal id} mealID
 */
function removeMealFromFav(mealID) {
  mealsState.favList = mealsState.favList.forEach((id) => id != mealID);
}

export { mealsState, updateMealsList, addMealToFav, removeMealFromFav };
