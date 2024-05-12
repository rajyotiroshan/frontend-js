import { renderMealsList } from "./mealsList.js";

/* function getStructuredMealObj(mealObj) {
  let mealObj = {
    ingredients: {},
    measures: {},
  };
  mealObj.ingredients[mObj["idMeal"]] = [];
  mealObj.measures[mObj["idMeal"]] = [];
  Object.keys(mealObj).forEach((key) => {
    if (
      key.startsWith("strIngredient") &&
      mealObj[key] !== null &&
      mealObj[key].trim() !== ""
    ) {
      mealObj.ingredients[mealObj["idMeal"]].push(mealObj[key]);
    }

    if (
      key.startsWith("strMeasure") &&
      mealObj[key] !== null &&
      mealObj[key].trim() !== ""
    ) {
      mealObj.measures[mealObj["idMeal"]].push(mealObj[key]);
    }
  });

  mealsList[mealObj["idMeal"]] = mealObj;

  return mealObj;
} */
function addClickEvtToFavBtn() {
  debugger;
  const favBtnList = document.querySelectorAll(".fav");

  favBtnList.forEach((el) => {
    el.addEventListener("click", (evt) => {
      debugger;
      //console.log(evt.target.getAttribute("data-mealid"));
      const mealID = evt.target.getAttribute("data-mealid").trim();
      //add id to fav
      if (!evt.target.classList.contains("selected")) {
        //add to fav list
        let favMealObj;
        let favListID = localStorage.getItem("favListID");
        let favMealsData = localStorage.getItem("favMealsData");
        let meals = JSON.parse(localStorage.getItem("state")).meals;
        if (favListID) {
          //if atleast one fav
          favListID = JSON.parse(favListID);
          favMealsData = JSON.parse(favMealsData);
          favListID.push(mealID);
          favMealsData[mealID] = {
            ingredients: [...meals.ingredients[mealID]],
            meals: meals.mealsList[mealID],
            measures: meals.measures[mealID],
          };
        } else {
          //no fav list
          favListID = [];
          favMealsData = {};
          favListID.push(mealID);
          favMealsData[mealID] = {
            ingredients: [...meals.ingredients[mealID]],
            meals: meals.mealsList[mealID],
            measures: meals.measures[mealID],
          };
        }

        localStorage.setItem("favListID", JSON.stringify(favListID)); //set/update favlist to ls
        localStorage.setItem("favMealsData", JSON.stringify(favMealsData));
        evt.target.classList.add("selected"); //
      } else {
        //remove from fav list
        //remove from list.
        let favListID = localStorage.getItem("favListID");
        let favMealsData = localStorage.getItem("favMealsData");
        if (favListID) {
          favListID = JSON.parse(favListID);
          favMealsData = JSON.parse(favMealsData);
          favListID = favListID.filter((id) => id != mealID); //remove the id from fav list
          delete favMealsData[mealID]; // = favMealsData.filter((meal) => meal.id != mealID); //remove the meal from favMealsData
          localStorage.setItem("favListID", JSON.stringify(favListID)); //update ls
          localStorage.setItem("favMealsData", JSON.stringify(favMealsData)); //update favMealsData
        }
        evt.target.classList.remove("selected"); //remove style
      }
    });
  });
}

/**
 * "handle favbtn click"
 * @param {*} evt
 */
function handleFavBtnClik(evt) {
  debugger;
  evt.stopPropagation();
  evt.preventDefault(); //

  console.log("fav btn clik");

  //access fav
  let favMealsData = localStorage.getItem("favMealsData");
  if (favMealsData) {
    //fav list available
    favMealsData = JSON.parse(favMealsData);
    let favMealsArr = [];
    Object.keys(favMealsData).forEach((id) => {
      favMealsArr.push(favMealsData[id].meals);
    });
    renderMealsList(favMealsArr, 1);
  } else {
    window.alert("Please add a meal to fav");
  }
}

export { addClickEvtToFavBtn, handleFavBtnClik };
