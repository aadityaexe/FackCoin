import "./About.css";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-r ">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8 bg-opacity-60 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          About Us
        </h1>
        <p className="text-white mb-4">
          Welcome to CryptoSite, where we provide the latest updates and
          insights into the world of cryptocurrency. Our mission is to make
          cryptocurrency information accessible and understandable for everyone.
        </p>
        <p className="text-white mb-4">
          Our team consists of experienced professionals in the fields of
          finance, technology, and blockchain. We are committed to delivering
          accurate and timely information to help you make informed decisions
          about your investments.
        </p>
        <p className="text-white mb-4">
          Whether you are a seasoned investor or just getting started,
          CryptoSite is here to support you with the resources and tools you
          need to navigate the ever-evolving world of cryptocurrencies.
        </p>
        <p className="text-white">
          Thank you for visiting CryptoSite. We hope you find our platform
          valuable and informative.
        </p>
      </div>
    </div>
  );
};

export default About;
