
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";

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
