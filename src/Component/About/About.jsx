const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 ">
      <div className="max-w-4xl mx-auto shadow-xl rounded-lg p-10  bg-opacity-80 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold p-3 mb-3 bg-[#1b2522] text-cyan-700 text-center rounded-xl text-centermb-8">
          About CryptoSite
        </h1>
        <p className=" leading-relaxed mb-6 text-black rounded-xl">
          Welcome to{" "}
          <span className="text-indigo-400 font-medium">CryptoSite</span>, your
          trusted source for the latest updates and insights into the dynamic
          world of cryptocurrency. Our mission is to empower individuals by
          making cryptocurrency knowledge accessible, actionable, and easy to
          understand.
        </p>
        <p className=" leading-relaxed mb-6  text-black rounded-xl">
          Our dedicated team of experts, with years of experience in finance,
          technology, and blockchain, is committed to delivering accurate and
          timely information. We strive to equip you with the knowledge needed
          to make well-informed decisions in this ever-evolving industry.
        </p>
        <p className=" leading-relaxed mb-6  text-black rounded-xl">
          Whether you are an experienced investor or new to the cryptocurrency
          space, CryptoSite offers resources, tools, and guidance to help you
          navigate and thrive in the market.
        </p>
        <p className="leading-relaxed  text-black rounded-xl">
          Thank you for choosing CryptoSite as your go-to platform for
          cryptocurrency insights. Together, we aim to unlock the potential of
          blockchain and digital assets.
        </p>
      </div>
    </div>
  );
};

export default About;
