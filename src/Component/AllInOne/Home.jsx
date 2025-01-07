import About from "../About/About";
import Contact from "../Contact/Contact";
import Top10CryptoList from "../CryptoList/Top10CryptoList";
import Footer from "../Footer/Footer";
import NewsSection from "../NewsSection/NewsSection";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <>
      <WelcomeMessage />
      <NewsSection />
      <Top10CryptoList />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
