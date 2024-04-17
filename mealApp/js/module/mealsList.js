import fetchData from "../../api/api.js";
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

function renderMealsList(resData) {
  //console.log(mealsData);
  const mealsUL = document.getElementById("meals-list");
  let mealsData = [];
  mealsData = resData?.meals;
  mealsUL.innerHTML = "";
  let mealsLIStr = "";
  mealsData.forEach((meal) => {
    mealsLIStr =
      mealsLIStr +
      `          
            <li class="meal">
                    <div class="meal-img">
                        <img src=${meal["strMealThumb"]} alt="meal img" />
                    </div>
                    <div class="meal-list-detail">
                        <h3>${meal["strMeal"]}</h3>
                        <p>${meal["strInstructions"]}</p>
                        <h2>Ingredient</h2>
                        <ul class="meal-list-ing">
                            <li>${meal["strIngredient1"]}</li>
                            <li>${meal["strIngredient2"]}</li>
                            <li>${meal["strIngredient3"]}</li>
                            <li>${meal["strIngredient4"]}</li>
                            <li>${meal["strIngredient5"]}</li>
                        </ul>
                    </div>
                    <div class="meal-list-detail">
                    <a href="./pages/meal-details.html" class="meal-list-detail-btn"
                        >Details</a
                    >
                    </div>
        </li>`;
  });

  mealsUL.innerHTML = mealsLIStr;
}

function fetchMealsData() {
  try {
    fetchData(URL, data, renderMealsList);
  } catch (err) {}
}

export { fetchMealsData };
