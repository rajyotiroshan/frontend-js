import { updateClickedMeal } from "../../state/stateFunctions.js";
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
                  <a id=${meal["idMeal"]} href="./pages/meal-details.html?mealid=${
        meal["idMeal"]
      }" class="meal-list-detail-btn"
      }
                      >Details</a
                  >
                  </div>
      </li>`;
  });

  mealsUL.innerHTML = mealsLIStr;

  document.querySelectorAll(".meal-list-detail-btn").forEach((el) =>
    el.addEventListener("click", function (evt) {
      evt.stopPropagation();
      //evt.preventDefault();
      //
      const clickedMealID = evt.target.getAttribute("data-mealid").trim();
      console.log(evt.target.getAttribute("data-mealid"));
      updateClickedMeal(clickedMealID);
    })
  );
}

export { renderMealsList };
