

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Banner } from './components/Banner'
import Carrusel from './components/common/Carrusel'
import Footer from './components/common/Footer'
import { NavbarWithMegaMenu } from './components/common/Navbar2'
import Productos from './views/Productos'


function Router() {
  

  return (
    <>
    <BrowserRouter>
      <NavbarWithMegaMenu/>
      <Banner/>
      <Routes>
      <Route exact path="/mobile" element={<Productos />} />
      </Routes>
    </BrowserRouter>

      <Footer/>
    </>
  )
}

export default Router
