import { useEffect, useState } from "react";
import "./Services.css"; // Import the CSS file for transitions

const servicesData = [
  {
    title: "Crypto Trading",
    description:
      "Trade a wide range of cryptocurrencies with real-time data and analytics.",
    icon: "📈",
  },
  {
    title: "Portfolio Management",
    description:
      "Manage your crypto portfolio with advanced tools and insights.",
    icon: "💼",
  },
  {
    title: "Security & Compliance",
    description:
      "Top-tier security protocols to ensure your investments are safe.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    description: "Get round-the-clock support from our expert team.",
    icon: "🕒",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-b z-0py-12">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-white text-center mb-8 transform transition-h2 ${
            isVisible ? "visible-h2" : "hidden-h2"
          }`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`services-card transition-card ${
                isVisible ? "visible-card" : "hidden-card"
              }`}
            >
              <div
                className={`text-4xl mb-4 transition-icon ${
                  isVisible ? "visible-icon" : "hidden-icon"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-2 text-gray-900 transition-h3 ${
                  isVisible ? "visible-h3" : "hidden-h3"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-gray-700 transition-p ${
                  isVisible ? "visible-p" : "hidden-p"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
