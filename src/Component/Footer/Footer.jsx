const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-purple-600 via-gray-500 to-sky-500 text-white py-8 px-4 z-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo or Site Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Fake Coin</h1>
          <p className="text-sm mt-2">
            &copy; 2024 CryptoSite. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:scale-110 transform transition"
          >
            <i className="fab fa-twitter">Twitter</i>
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:scale-110 transform transition"
          >
            <i className="fab fa-facebook">Facebook</i>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:scale-110 transform transition"
          >
            <i className="fab fa-linkedin">LinkedIn</i>
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:scale-110 transform transition"
          >
            <i className="fab fa-instagram">Instagram</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
