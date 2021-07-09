import React from "react";
import { Link } from "react-router-dom";
import RemoveCoin from "./RemoveCoin";
import ValueFall from "./ValueFall";
import ValueRise from "./ValueRise";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`}>
      <div className="container mx-auto px-2 md:px-4 mb-8 md:mb-4">
        <div className="flex items-center justify-around p-2 md:p-4 shadow-md rounded-lg relative">
          <div className="w-1/3 text-center">
            <img
              className="block w-12 h-12 mx-auto"
              src={coin.image}
              alt={coin.name}
            />
            <h3>{coin.name}</h3>
          </div>
          <div className="w-1/3 text-gray-800 font-bold text-center">
            ${coin.current_price}
          </div>
          <div className="w-1/3 text-center">
            {Number(coin.price_change_percentage_24h) > 0 ? (
              <span className="text-green-600 font-bold">
                <ValueRise />
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-600 font-bold">
                <ValueFall />
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            )}
          </div>
          <div
            className="absolute top-0 right-0 col-span-2"
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
          >
            <RemoveCoin />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coin;