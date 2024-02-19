import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { NavbarWithMegaMenu } from "./components/common/Navbar2";

import Home from "./views/Home";
import AppRestaurante from "./views/AppRestaurante";
import Reflix from "./views/Reflix";
import Certificados from "./views/Certificados";
import "./index.css"

function Router() {
  return (
    <>
      <BrowserRouter>
        <NavbarWithMegaMenu />
      <main className="mt-4">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appRes" element={<AppRestaurante />} />
          <Route exact path="/reflix" element={<Reflix />} />
          <Route exact path="/certificados" element={<Certificados />} />

        </Routes>
      </main>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default Router;
