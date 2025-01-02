import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 p-4 text-white font-bold backdrop-blur-lg bg-black/60 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl">Fake Coin</div>
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
            <Link to="/about" className="hover:text-gray-300 transition-colors">
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
    </nav>
  );
};

export default Navbar;
