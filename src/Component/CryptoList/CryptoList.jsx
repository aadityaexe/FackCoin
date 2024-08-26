import React, { useState, useEffect } from "react";
import "./CryptoList.css"; // Ensure Tailwind CSS is imported here

const CryptoList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
        setData(result);
        setFilteredData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto List</h1>
      <input
        type="text"
        placeholder="Search by coin name"
        className="border p-2 rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>
              <strong>Coin:</strong> {item.coin}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <p>
              <strong>Algorithm:</strong> {item.algorithm}
            </p>
            <p>
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p>
              <strong>Volume:</strong> {item.volume.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
