let mealsState = {
  mealsList: [],
  favList: [],
};

/**
 * replace mealsList with meals
 * @param {fetched meals list} meals
 */
function updateMealsList(meals) {
  mealsState.mealsList = meals;
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
