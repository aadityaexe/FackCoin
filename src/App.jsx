import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";

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
