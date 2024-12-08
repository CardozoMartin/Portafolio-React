import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import InfoCard from "../components/ui/InfoCard";

const Certificados = () => {
  return (
    <>
      <section className="container pt-10 mt-5">
        <article className="mt-">
          <div>
          <h4 className=" text-4xl text-center mb-3 text-white font-extrabold">Certificado del Cursado de rolling code school</h4>
            <img
              className="h-100 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
              src="https://certs.rollingcodeschool.com//bWFydGluY2FyZG96bzE5OTN4cEBnbWFpbC5jb20=-1706712485526-1.png"
              alt="nature image"
            />
          </div>
          
        </article>
      </section>

      
    </>
  );
};

export default Certificados;
