import React from "react";
import { Link } from "react-router-dom";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="background-white p-4 mb-4">
        <h2 className="text-4xl my-5 text-center border-b border-gray-300 pb-2 mb-8">
          Details
        </h2>
        <div className="flex flex-wrap -mb-4">
          <div className="w-full md:w-1/3 sm:w-1 bg-gray-200 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">Market Cap</h5>
            <p className="text-gray-900 font-bold">{data.market_cap}</p>
          </div>
          <div className="w-full md:w-1/3 bg-gray-300 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">Volume 24h</h5>
            <p className="text-gray-900 font-bold">{data.total_volume}</p>
          </div>
          <div className="w-full md:w-1/3 bg-gray-200 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">Circulating Supply</h5>
            <p className="text-gray-900 font-bold">{data.circulating_supply}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mb-4">
          <div className="w-full md:w-1/3 bg-gray-200 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">Total Supply</h5>
            <p className="text-gray-900 font-bold">{data.total_supply}</p>
          </div>
          <div className="w-full md:w-1/3 bg-gray-300 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">High 24h</h5>
            <p className="text-gray-900 font-bold">${data.high_24h}</p>
          </div>
          <div className="w-full md:w-1/3 bg-gray-200 p-4 shadow">
            <h5 className="text-gray-700 font-semibold">Low 24h</h5>
            <p className="text-gray-900 font-bold">${data.low_24h}</p>
          </div>
        </div>
        <div>
          <button className="block mx-auto border border-gray-800 hover:bg-gray-800 hover:text-white rounded p-2 mt-8">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
