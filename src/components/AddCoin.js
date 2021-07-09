import React, { useState } from "react";

const AddCoin = ({ addCoin }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <div className="relative p-4">
      <button
        className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
        text-white font-bold py-2 px-4 rounded z-10"
        onClick={() => setToggleOpen(!toggleOpen)}
      >
        Add Coin
      </button>
      {toggleOpen ? (
        <>
          <button
            onClick={() => setToggleOpen(false)}
            tabIndex="-1"
            className="fixed w-full h-full inset-0 bg-white opacity-50 cursor-default"
          ></button>
          <ul className="absolute w-64 py-2 mt-2 bg-blue-300 rounded-lg shadow-xl z-10">
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white"
              onClick={() => addCoin("bitcoin")}
            >
              Bitcoin
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("ethereum")}
            >
              Ethereum
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("ripple")}
            >
              Ripple
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("litecoin")}
            >
              Litecoin
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("dogecoin")}
            >
              Dogecoin
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("bitcoin-cash")}
            >
              Bitcoin Cash
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("monero")}
            >
              Monero
            </li>
            <li
              className="block px-4 py-2 text-gray-100 hover:bg-indigo-400 hover:text-white cursor-pointer"
              onClick={() => addCoin("tether")}
            >
              Tether
            </li>
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default AddCoin;