import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export const Banner = () => {
  return (
    <>
      <section className=" content-around relative bg-[url(https://codilime.com/static/d8ca6f4258fac74d708d448bc7a52ee8/why-rust-programming-language-is-so-popular-header.png)]  bg-center bg-no-repeat">
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
            <div className="text-center mt-3">
            <Button variant="destructive">Contactame</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
