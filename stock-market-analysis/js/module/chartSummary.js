import { urlForSummary } from "./urls.js";
import fetchData from "./api.js";
let stocksSummData = [];
function handleSummData(res) {
  if (!res.ok) {
    console.log("Error in fetching Summary data", res);
    return;
  }
  let { stocksProfileData } = res;
  stocksSummData = stocksProfileData;
}
function fetchDataForChartSummary() {
  fetchData(
    urlForSummary,
    {
      methods: "GET",
    },
    handleSummData
  );
}

export { stocksSummData, fetchDataForChartSummary };
