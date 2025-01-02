import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-10 p-4 text-white font-bold backdrop-blur-lg bg-black/60 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl">Fake Coin</div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/crypto-list"
                className="hover:text-gray-300 transition-colors"
              >
                Crypto List
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-black/80 text-white p-4 shadow-lg transition-all`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/crypto-list"
              className="block hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Crypto List
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
