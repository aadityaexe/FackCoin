import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 p-4 text-white font-bold backdrop-blur-lg bg-transparent transition-all duration-1000 ease-in-out ${
        isVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">Fack Coin</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crupto-list">Crupto List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
