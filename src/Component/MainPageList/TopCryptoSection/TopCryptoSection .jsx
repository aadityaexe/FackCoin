import { useEffect, useState } from "react";
import "./TopCryptoSection.css";
import { useNavigate } from "react-router-dom";

const TopCryptoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-white p-8">
      <h1
        className={`text-4xl font-bold mb-4 transition-h1 ${
          isVisible ? "visible-h1" : ""
        }`}
      >
        Top Crypto
      </h1>
      <p
        className={`text-lg mb-8 transition-p ${isVisible ? "visible-p" : ""}`}
      >
        Stay updated with the latest and greatest in the world of
        cryptocurrency.
      </p>
      <button
        className="px-6 py-3 rounded-full text-white font-semibold"
        style={{
          background: "linear-gradient(90deg, #542484, #1e0771, #902174)",
        }}
        onClick={() => nav("/top10-crypto")}
      >
        Explore Now
      </button>
    </div>
  );
};

export default TopCryptoSection;
