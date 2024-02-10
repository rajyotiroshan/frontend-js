import { urlForList } from "./urls.js";
import fetchData from "./api.js";
import { updateStatsData } from "../index.js";
function renderStocksList(data) {
  //console.log(data);
  const secChartList = document.getElementById("sec-chart-list");

  const ulEl = document.createElement("ul");
  for (let key of Object.keys(data)) {
    const liEl = document.createElement("li");
    let name = key;
    let { profit, bookValue } = data[key];
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

function handleChartData(res) {
  let { stocksStatsData } = res;
  if (stocksStatsData.length > 0) {
    updateStatsData(stocksStatsData[0]);
  }
}
function fetchStocksStatsData() {
  fetchData(urlForList, { methods: "GET" }, handleChartData);
}

export { fetchStocksStatsData, renderStocksList };
