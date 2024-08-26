import "./welcomeMessage.css";
import goblin from "./WelcomeMessage-assets/goblin.png";
import crypto from "./WelcomeMessage-assets/crypto.png";

const WelcomeMessage = () => {
  return (
    <div className="welcome-container z-0 flex items-center justify-center h-auto text-center pt-20 relative">
      <img src={crypto} alt="Crypto" className="absolute img-1" />
      <img src={goblin} alt="Goblin" className="absolute img-2" />
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to CryptoWorld!
        </h1>
        <p className="text-lg text-white mb-6">
          Your gateway to the latest cryptocurrency trends, insights, and market
          analysis. Stay ahead of the curve with our up-to-date information.
        </p>
        <p className="text-md text-gray-200">
          Explore our platform and discover a world of opportunities in the
          crypto space. We’re glad to have you on board!
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
