import React, { useState, useEffect, useContext } from "react";
import coinGecko from "../apis/coinGecko";
import AddCoin from "../components/AddCoin";
import Coin from "../components/Coin";
import { WatchListContext } from "../context/watchListContext";

const CoinSummaryPage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList, deleteCoin, addCoin } = useContext(WatchListContext);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const results = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(results.data);
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [watchList]);

  return isLoading ? (
    <h2 className="text-center text-3xl text-white mb-8">Loading....</h2>
  ) : (
    <div className="container mx-auto bg-gray-100 sm:p-4 md:p-16 rounded-lg min-h-half relative">
      <AddCoin addCoin={addCoin} />
      <div>
        {coins.map((coin) => (
          <Coin key={coin.symbol} coin={coin} deleteCoin={deleteCoin} />
        ))}
      </div>
    </div>
  );
};


export default CoinSummaryPage;