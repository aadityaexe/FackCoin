import React from "react";
import bitcoin from "./Hero-assets/bitcoin.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative text-blue-950 py-20 h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-center space-x-8">
        {/* Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src={bitcoin}
            alt="Bitcoin"
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className=" text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl p-4 sm:p-6 font-bold text-white rounded-xl bg-[#1b2522] mb-4  mx-auto md:mx-0">
            The Future of Cryptocurrency is Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 rounded-xl text-black  mx-auto md:mx-0">
            Unlock the power of digital currencies with our fast, secure, and
            user-friendly platform.
          </p>
          <Link
            to={"/all"}
            className="inline-block px-6 sm:px-8 py-3 text-sm sm:text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
