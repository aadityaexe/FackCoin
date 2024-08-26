import About from "../About/About";
import CircularProgress from "../CircularProgress/CircularProgress";
import Contact from "../Contact/Contact";
import Top10CryptoList from "../CryptoList/Top10CryptoList";
import Footer from "../Footer/Footer";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const AllInOne = () => {
  return (
    <>
      <WelcomeMessage />
      <Top10CryptoList />
      <CircularProgress />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default AllInOne;
