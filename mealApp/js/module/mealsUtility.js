import { updateMealsList } from "../../state/stateFunctions.js";
import fetchData from "../../api/api.js";
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
    if (mealsData != null && mealsData.length > 0) {
      updateMealsList(mealsData);
    } else {
      alert(`No records found!! \n Please try another search.`);
    }
  } else {
    console.log(`Error in fetching meals data:: ${resData}`);
  }
}

//fetch Meals data
function fetchMealsData(URL, data) {
  try {
    fetchData(URL, data, cbForMealsFetched);
  } catch (err) {
    console.log(err);
  }
}

export { cbForMealsFetched, fetchMealsData };
