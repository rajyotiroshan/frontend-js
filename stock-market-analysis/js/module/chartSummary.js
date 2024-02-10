import { urlForSummary } from "./urls.js";
import fetchData from "./api.js";
import {
  currRenderedChartData,
  updateCurrChartSumm,
  updateSummaryData,
} from "../index.js";
function renderChartSummary() {
  updateCurrChartSumm();
  let { stockName, stockProfit, stockBV, stockSummary } = currRenderedChartData;
  const chartdetails = document.getElementById("chart-details");
  console.log("renderSummary");
  console.log(currRenderedChartData);
  const summHTML = ` <div class="cd-hdr">
  <h3>
    <span id="st-name">${stockName}</span>
    <span id="st-pf">${stockProfit}%</span>
    <span id="st-bv">$${stockBV}</span>
  </h3>
  <p id="st-summ">
  ${stockSummary}
  </p>
</div>`;
  chartdetails.innerHTML = summHTML;
}
function handleSummData(res) {
  //console.log(res);
  let { stocksProfileData } = res;
  //console.log(stocksProfileData);
  if (stocksProfileData.length > 0) {
    updateSummaryData(stocksProfileData[0]);
  }
  renderChartSummary(currRenderedChartData);
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

export { fetchDataForChartSummary, renderChartSummary };
