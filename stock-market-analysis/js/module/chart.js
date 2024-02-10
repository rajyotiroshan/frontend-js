import { urlForCharts } from "./urls.js";
import fetchData from "./api.js";
import {
  updateChartData,
  currRenderedChartData,
  stocksChartData,
} from "../index.js";
import CHART_COLORS from "../utils/chartColors.js";
import { timeStampTodate } from "../utils/util.js";
let myChart = null;
function getData(time = "5y") {
  let data = [2, 5, 2, 8, 5, 9];
  return data;
}
function getDataSetForChart() {
  const label = currRenderedChartData.stockName;
  const interval = currRenderedChartData.interval;
  const intervals = stocksChartData[label][interval].timeStamp;
  const intervalsDate = timeStampTodate(intervals);
  const data = stocksChartData[label][interval].value;
  /*   console.log("getDataSetForChart");
  console.log(stocksChartData);
  console.log(label);
  console.log(intervalsDate);
  console.log(data); */
  const dataForChart = {
    labels: intervalsDate,
    datasets: [
      {
        label,
        data,
        borderColor: CHART_COLORS.borderColor,
        backgroundColor: CHART_COLORS.backgroundColor,
      },
    ],
  };

  return dataForChart;
}

function renderChart() {
  //console.log(data);

  console.log("renderChart()");
  console.log(currRenderedChartData);
  const ctx = document.getElementById("chart-canvas").getContext("2d");
  ctx.innerHTML = "";
  const dataSet = getDataSetForChart();
  const config = {
    type: "line",
    data: dataSet,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  };
  if (myChart !== null) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, config);
}

function handleChartData(res) {
  //console.log("handleChartData");

  let { stocksData } = res;
  //console.log(stocksData);
  if (stocksData.length > 0) {
    updateChartData(stocksData[0]);
  }

  renderChart();
}
function fetchChartData() {
  fetchData(urlForCharts, { methods: "GET" }, handleChartData);
}

export { fetchChartData, renderChart };
