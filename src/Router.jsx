import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { NavbarWithMegaMenu } from "./components/common/Navbar2";
import Productos from "./views/Productos";
import Home from "./views/Home";
import AppRestaurante from "./views/AppRestaurante";
import Reflix from "./views/Reflix";

function Router() {
  return (
    <>
      <BrowserRouter>
        <NavbarWithMegaMenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appRes" element={<AppRestaurante />} />
          <Route exact path="/reflix" element={<Reflix />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default Router;
