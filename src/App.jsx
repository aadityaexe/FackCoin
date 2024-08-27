import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import TopCryptoSection from "./Component/MainPageList/TopCryptoSection/TopCryptoSection ";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
