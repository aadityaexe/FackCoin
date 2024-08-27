import "./Hero.css"; // Import the custom CSS file
import bitcoin from "./Hero-assets/bitcoin.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section z-0 text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <img
          src={bitcoin}
          alt="Crypto Background"
          className="hero-image rotate"
        />
      </div>
      <div className="absolute bottom-0 right-0 p-8 md:p-16 text-right">
        <h1 className="hero-title">Secure Your Future with Crypto</h1>
        <p className="hero-subtitle">
          Join the digital revolution and invest in the most promising
          cryptocurrencies today.
        </p>
        <Link to={"/all"} className="hero-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
