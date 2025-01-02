import { useNavigate } from "react-router-dom";

const TopCryptoSection = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-white p-8">
      <h1 className="text-4xl  text-white rounded-xl bg-[#1b2522] px-4 font-bold mb-6">
        Top Cryptocurrencies
      </h1>
      <p className="text-xl mb-6 opacity-80 rounded-xl text-black">
        Stay updated with the latest trends in the world of cryptocurrency.
      </p>
      <button
        className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#542484] to-[#902174] shadow-lg transform transition-transform duration-300 hover:scale-105"
        onClick={() => nav("/top10-crypto")}
      >
        Explore Now
      </button>
    </div>
  );
};

export default TopCryptoSection;
