import { buttonVariants } from "@/components/ui/button";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "./logo2.svg"


export const Banner = () => {
  return (
    <>
      <section className=" content-around relative bg-[url()]  bg-center bg-no-repeat">
        <div className="absolute inset-0  dm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-4xl text-yellow-100">
              Hola, Soy Martin Cardozo
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Desarrolador Front-End.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-yellow-100">
              "Si lo puedes imaginar, lo puedes programar !!!"
            </p>
            <div className="text-center mt-3 ">
              <div>
                <Link
                  to="https://www.linkedin.com/in/martin-cardozo-14b597238/"
                  blank
                >
                  <Button color="blue" className="m-1">
                    <i className="bi bi-linkedin fs-4"></i> LinKedin
                  </Button>
                </Link>
                <Link to="https://github.com/CardozoMartin">
                  <Button color="red">
                    <i className="bi bi-github fs-4"></i> Github
                  </Button>
                </Link>
              </div>
              <div className="mt-2">
                <Button variant="outlined">
                  <p className="text-white">
                    {" "}
                    <i className="bi bi-send-fill fs-4"></i> Contactame!!
                  </p>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-3">
          <img src={`${logo}`} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
