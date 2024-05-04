/**
 * Display meals list to UI
 * @param {fetched Meals Data list} resData
 */
window.addEventListener("load", function () {
  const queryParams = new URLSearchParams(window.location.search);
  //retrieve state from local storage.
  // Retrieve the JSON string from localStorage
  const stateJSON = localStorage.getItem("state");
  // Parse the JSON string back into a JavaScript object
  const mealsState = JSON.parse(stateJSON);
  // Get the value of a specific parameter
  const mealID = queryParams.get("mealid").trim(); // Returns 'value1'
  console.log(mealID);
  //const mealID = mealsState.clickedMealID.trim();
  if (mealID !== "") {
    const mealINGUL = document.querySelector("#meals-ing");
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

    mealINGUL.innerHTML = mealIngHTMLStr;
    mealMeasureUL.innerHTML = mealMeasureHTMLStr;
  } else {
    alert("clicked a meal for details");
  }
});
