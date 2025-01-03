import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const Top10CryptoList = () => {
  const [top10Data, setTop10Data] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://mineable-coins.p.rapidapi.com/coins";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "53ee4e936amsh0e6753965705767p1335ebjsne7ba1cd988d7",
          "x-rapidapi-host": "mineable-coins.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Sort by price in descending order and take the top 10
        const top10Coins = result
          .sort((a, b) => b.price - a.price)
          .slice(0, 10);

        setTop10Data(top10Coins);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center text-black bg-[#cadad3] rounded-lg  font-bold mb-4">
        Top 10 Cryptocurrencies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl">
        {top10Data.map((item) => (
          <div key={item.id} className="crypto-card p-4 rounded-lg shadow-lg ">
            <h2 className="text-xl font-semibold text-black bg-slate-500 rounded-lg text-center">
              {item.name}
            </h2>
            <p className="text-black rounded-xl">
              <strong>Coin:</strong> {item.coin}
            </p>
            <p className="text-black rounded-xl">
              <strong>Type:</strong> {item.type}
            </p>
            <p className="text-black rounded-xl">
              <strong>Algorithm:</strong> {item.algorithm}
            </p>
            <p className="text-black rounded-xl">
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p className="text-black rounded-xl">
              <strong>Volume:</strong> {item.volume.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10CryptoList;
