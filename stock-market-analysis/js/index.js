import { fetchStocksStatsData, renderStocksList } from "./module/stcklist.js";
import {
  fetchDataForChartSummary,
  renderChartSummary,
} from "./module/chartSummary.js";

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
  renderStocksList(data);
  let firstStockName = Object.keys(data)[0];
  currRenderedChartData.stockName = firstStockName;
  currRenderedChartData.stockProfit = data[firstStockName].profit;
  currRenderedChartData.stockBV = data[firstStockName].bookValue;
}

function updateSummaryData(data) {
  stocksSummaryData = data;
  let { stockName } = currRenderedChartData;
  currRenderedChartData.stockSummary = data[stockName].summary;
  renderChartSummary(currRenderedChartData);
}
function updateChartData(data) {
  //console.log("updateChartData");
  //console.log("stocksChartData");
  stocksChartData = data;

  //console.log(stocksChartData);
  renderChart();
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
};
