import React, { useRef, useEffect, useState } from "react";
import ChartJS from 'chart.js';
import { historyOptions } from "../chartConfigs/chartConfigs";
import ValueRise from "./ValueRise";
import ValueFall from "./ValueFall";
const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      new ChartJS(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail ? detail.name : ""} price`,
              data: determineTimeFormat(),
              backgroundColor: "#48BB78",
              borderColor: "#276749",
              pointRadius: 0,
            },
          ],
        },
        options: historyOptions,
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <div className="my-3">
        <img src={detail.image} className="block w-12 h-12" alt="" />
        <h2 className="text-3xl">{detail.name}</h2>
        <h3 className="text-xl font-bold">
          ${detail.current_price.toFixed(2)}
        </h3>
        <h5 className="text-lg">
          {Number(detail.price_change_percentage_24h) > 0 ? (
            <span className="text-green-600 font-bold">
              {Math.abs(detail.price_change_percentage_24h).toFixed(2)}%
              <ValueRise />
            </span>
          ) : (
            <span className="text-red-600 font-bold">
              {Math.abs(detail.price_change_percentage_24h).toFixed(2)}%
              <ValueFall />
            </span>
          )}
        </h5>
      </div>
      );
    }
  };
  if (!data) {
    return null;
  }
  return (
    <div className="bg-white w-full h-full p-4 shadow-xl">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className="my-5">
        <button
          className="bg-gray-100 w-10 h-10 border border-green-800 rounded mr-2 hover:bg-green-900 hover:text-white shadow"
          onClick={() => setTimeFormat("24h")}
        >
          24h
        </button>
        <button
          className="bg-gray-100 w-10 h-10 border border-green-800 rounded mr-2 hover:bg-green-900 hover:text-white shadow"
          onClick={() => setTimeFormat("7d")}
        >
          7d
        </button>
        <button
          className="bg-gray-100 w-10 h-10 border border-green-800 rounded mr-2 hover:bg-green-900 hover:text-white shadow"
          onClick={() => setTimeFormat("1y")}
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
