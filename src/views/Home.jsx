import { Banner } from "../components/home/Banner";
import Carrusel from "../components/home/Carrusel";
import Contacto from "../components/home/Contacto";


import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import Proyects from "../components/Proyects/Proyects";


const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section className="text-center font-extrabold border m-2 rounded-lg">
        <h1 className="text-white ">Proyectos</h1>
        <Proyects />
      </section>
      <section className="flex justify-center">
        <Contacto />
      </section>
    </>
  );
};

export default Home;
