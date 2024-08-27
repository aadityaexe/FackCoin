import { useState, useEffect } from "react";
import "./CryptoList.css"; // Ensure Tailwind CSS and custom CSS are imported here

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-20 z-0">
      <h1 className="text-2xl text-white font-bold mb-4">Crypto List</h1>
      <input
        type="text"
        placeholder="Search by coin name"
        className="border p-2 rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        {filteredData.map((item) => (
          <div key={item.id} className="crypto-card p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold slide-in-right">
              {item.name}
            </h2>
            <p className="slide-in-right">
              <strong>Coin:</strong> {item.coin}
            </p>
            <p className="slide-in-right">
              <strong>Type:</strong> {item.type}
            </p>
            <p className="slide-in-right">
              <strong>Algorithm:</strong> {item.algorithm}
            </p>
            <p className="slide-in-right">
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p className="slide-in-right">
              <strong>Volume:</strong> {item.volume.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
