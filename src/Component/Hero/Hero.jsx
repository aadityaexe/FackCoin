import React from "react";
import bitcoin from "./Hero-assets/bitcoin.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative  text-blue-950 py-20 h-screen flex items-center justify-center">
      <div className="flex items-center justify-center space-x-8">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={bitcoin}
            alt="Bitcoin"
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Future of Cryptocurrency is Here
          </h1>
          <p className="text-lg mb-6">
            Unlock the power of digital currencies with our fast, secure, and
            user-friendly platform.
          </p>
          <Link
            to={"/all"}
            className="inline-block px-8 py-3 text-lg font-semibold text-black bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
