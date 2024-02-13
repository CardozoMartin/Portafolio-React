import { Banner } from "../components/home/Banner";
import Carrusel from "../components/home/Carrusel";
import Contacto from "../components/home/Contacto";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section className="text-center font-extrabold border-solid">
        <h1 className="text-white mb-4">Habilidades</h1>
        <Carrusel />
      </section>
      <section className="flex justify-center">
        <Contacto />
      </section>
    </>
  );
};

export default Home;
