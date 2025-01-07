import React, { useEffect, useState } from "react";

const StockDataSection = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09",
          {
            headers: {
              Authorization: "Bearer GA8LZC_WK0yloJdtfOT4OxqgUMLCY4Qx",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stock data.");
        }

        const data = await response.json();
        setStockData(data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Stock Data</h2>
      {loading && <p className="text-center text-lg">Loading stock data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockData.length > 0 &&
          stockData.map((data, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="mt-4 text-xl font-semibold">Price: ${data.c}</h3>
              <p className="mt-2 text-gray-600">Open: ${data.o}</p>
              <p className="mt-2 text-gray-600">High: ${data.h}</p>
              <p className="mt-2 text-gray-600">Low: ${data.l}</p>
              <p className="mt-2 text-gray-600">Volume: {data.v}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default StockDataSection;
