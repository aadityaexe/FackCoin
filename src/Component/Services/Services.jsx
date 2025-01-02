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
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
