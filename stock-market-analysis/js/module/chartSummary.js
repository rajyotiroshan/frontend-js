import { urlForSummary } from "./urls.js";
import fetchData from "./api.js";
import { updateSummaryData } from "../index.js";
function renderChartSummary({ stockName, stockProfit, stockBV, stockSummary }) {
  const chartdetails = document.getElementById("chart-details");

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
