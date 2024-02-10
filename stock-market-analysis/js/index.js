import { fetchStocksStatsData, renderStocksList } from "./module/stcklist.js";
import {
  fetchDataForChartSummary,
  renderChartSummary,
} from "./module/chartSummary.js";
//render list
let stocksStatsData = [];
let stocksSummaryData = [];
let stocksChartData = [];
let currRenderedChartData = {
  stockName: "",
  stockProfit: "",
  stockBV: "",
  stockSummary: "",
};
function updateStatsData(data) {
  stocksStatsData = data;
  console.log(stocksStatsData);
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
function updateChartData(data) {}

//chartstatsData
fetchStocksStatsData();
fetchDataForChartSummary();
export {
  stocksStatsData,
  stocksSummaryData,
  stocksChartData,
  updateChartData,
  updateSummaryData,
  updateStatsData,
};
