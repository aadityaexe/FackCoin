import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./Component/Hero/Hero.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllInOne from "./Component/AllInOne/AllInOne.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import CryptoList from "./Component/CryptoList/CryptoList.jsx";
import TopCryptoSection from "./Component/MainPageList/TopCryptoSection/TopCryptoSection.jsx";
import Top10CryptoList from "./Component/CryptoList/Top10CryptoList.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Services from "./Component/Services/Services.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <TopCryptoSection />
            <Services />
            <Footer />
          </>
        ),
      },
      { path: "/all", element: <AllInOne /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/crupto-list", element: <CryptoList /> },
      { path: "/top10-crypto", element: <Top10CryptoList /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
