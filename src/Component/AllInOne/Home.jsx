import About from "../About/About";
import Contact from "../Contact/Contact";
import Top10CryptoList from "../CryptoList/Top10CryptoList";
import Footer from "../Footer/Footer";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <>
      <WelcomeMessage />
      <Top10CryptoList />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
