/**
 * Display meals list to UI
 * @param {fetched Meals Data list} resData
 */
import { addClickEvtToFavBtn } from "./favourite.js";
function renderMealsList(mealsArr, isFavList) {
  debugger;
  console.log(mealsArr);
  const mealsUL = document.getElementById("meals-list");
  mealsUL.innerHTML = "";
  let mealsLIStr = "";
  let favMealsIDList = JSON.parse(localStorage.getItem("favListID"));
  if (!favMealsIDList) {
    favMealsIDList = [];
  }
  mealsArr.forEach((meal) => {
    const mealID = meal["idMeal"];
    let selected = "selected";
    if (!favMealsIDList.includes(mealID)) {
      selected = "";
    }
    mealsLIStr =
      mealsLIStr +
      `          
          <li class="meal">
            <div class="meal-cont">
                  <div class="meal-img">
                      <img src=${meal["strMealThumb"]} alt="meal img" />
                  </div>
                  <div class="meal-list-detail">
                  <div>
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
                      <div class="meal-list-detail md-btn-cont">
                  <a id=${
                    meal["idMeal"]
                  } href="./pages/meal-details.html?mealid=${mealID}&isFav=${isFavList}" class="meal-list-detail-btn"
      }
                      >Details</a
                  >
                  
                  </div>
                  <span class="fa-solid fa-heart fa-2xl fav ${selected}" data-mealid="${mealID}"></span>
                  </div>
                  
              </div>
                  
      </li>`;
  });

  mealsUL.innerHTML = mealsLIStr;

  addClickEvtToFavBtn();
}

export { renderMealsList };
