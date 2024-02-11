import { fetchStocksStatsData } from "./module/stcklist.js";
import { fetchDataForChartSummary } from "./module/chartSummary.js";

import { fetchChartData, renderChart } from "./module/chart.js";
//render list
let stocksStatsData = [];
let stocksSummaryData = [];
let stocksChartData = [];
let currRenderedChartData = {
  stockName: "",
  stockProfit: "",
  stockBV: "",
  stockSummary: "",
  interval: "5y",
};
function updateStatsData(data) {
  stocksStatsData = data;
  // console.log(stocksStatsData);
  let firstStockName = Object.keys(data)[0];
  //TODO:: seperate function
  currRenderedChartData.stockName = firstStockName;
  currRenderedChartData.stockProfit = data[firstStockName].profit;
  currRenderedChartData.stockBV = data[firstStockName].bookValue;
}
function updateSummaryData(data) {
  stocksSummaryData = data;
}
function updateChartData(data) {
  //console.log("updateChartData");
  //console.log("stocksChartData");
  stocksChartData = data;

  //console.log(stocksChartData);
}

function updateCurrChartSumm() {
  let { stockName } = currRenderedChartData;
  currRenderedChartData.stockSummary = stocksSummaryData[stockName].summary;
}

function updateChartCurrInterval(interval) {
  currRenderedChartData.interval = interval;
}
//chartstatsData
fetchStocksStatsData();
fetchDataForChartSummary();
fetchChartData();

export {
  stocksStatsData,
  stocksSummaryData,
  stocksChartData,
  updateChartData,
  updateSummaryData,
  updateStatsData,
  currRenderedChartData,
  updateCurrChartSumm,
  updateChartCurrInterval,
};
