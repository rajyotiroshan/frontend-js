import { urlForList } from "./urls.js";
import fetchData from "./api.js";
let stocksStats = [];
function renderStocksList(data) {
  console.log(data);
  const secChartList = document.getElementById("sec-chart-list");
  let { stocksStatsData } = data;
  if (stocksStatsData.length > 0) {
    //const
    stocksStats = stocksStatsData[0];
    const ulEl = document.createElement("ul");
    for (let key of Object.keys(stocksStats)) {
      const liEl = document.createElement("li");
      let name = key;
      let { profit, bookValue } = stocksStats[key];
      let nSpan = document.createElement("span");
      let pSpan = document.createElement("span");
      let bvSpan = document.createElement("span");
      nSpan.textContent = name;
      pSpan.textContent = profit;
      bvSpan.textContent = bookValue;

      liEl.appendChild(nSpan);
      liEl.appendChild(bvSpan);
      liEl.appendChild(pSpan);

      ulEl.appendChild(liEl);
    }
    secChartList.innerHTML = "";
    secChartList.appendChild(ulEl);
  }
}
function fetchStocksStatsData() {
  fetchData(urlForList, { methods: "GET" }, renderStocksList);
}

export { fetchStocksStatsData };
