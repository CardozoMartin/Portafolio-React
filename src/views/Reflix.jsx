import { useState } from "react";

const Reflix = () => {
  const data = [
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D2DAQGkpcjyLX0xQQ/profile-treasury-image-shrink_1920_1920/0/1708302436530?e=1712685600&v=beta&t=GFB2dGbrBgLJlCrPu-C3SoUiw8EOy3JE8h99vDEk6pg",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D2DAQHo8nTM5MphXw/profile-treasury-image-shrink_1920_1920/0/1708302452991?e=1712685600&v=beta&t=mf7N_OxHBpocSceKENJivYIE1gcoUIXPqm2bqb0DNaI",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D2DAQEILrcEPDducQ/profile-treasury-image-shrink_1920_1920/0/1708302462663?e=1712685600&v=beta&t=in6m_4dssCabD-FctrYqU0R9Unb6D763DhHbBHpicQw",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D2DAQFEjVbagqWuXQ/profile-treasury-image-shrink_1920_1920/0/1708302473471?e=1712685600&v=beta&t=oKkonpn7eXjoLDjYDYgGodR_f7vTm4BF7meiEoKB5EY",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D2DAQHS8dUaHY0Wsw/profile-treasury-image-shrink_1920_1920/0/1708302487724?e=1712685600&v=beta&t=CEHMYVmVY09y_oBWaknVGG9vVGt4fcGie0Ls5XCQNis",
    },
  ];

  const [active, setActive] = useState(
    "https://media.licdn.com/dms/image/D4D2DAQGkpcjyLX0xQQ/profile-treasury-image-shrink_1920_1920/0/1708302436530?e=1712685600&v=beta&t=GFB2dGbrBgLJlCrPu-C3SoUiw8EOy3JE8h99vDEk6pg"
  );
  return (
    <>
      <section>
        <article className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl font-bold  sm:text-3xl text-white">
              Reflixx
            </h1>

            <article>
              <div className="bg text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                  <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">  Proyecto segundo modulo de Rollig Code School.</h2>

                    <p className="mt-4 text-gray-300">
                      Un Proyecto
                      realizado del segundo modulo del cursado de rolling code
                      una aplicacion con javascript, html y css
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold text-white">
                        Crud
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Donde puedes crear una pelicula elegir titulo categoria
                        poner portada y editar y eliminar alguna pelicula o
                        serie
                      </p>
                    </a>

                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold text-white">
                        Diseño Responsivo
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Diseño web atractivo y totalmente responsivo para
                        utilizar en cualquier dispositivo
                      </p>
                    </a>

                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold text-white">
                        Proyecto
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Proyecto realizado en el segundo modulo de Rolling Code
                        Schol, realizado por 3 integrates
                      </p>
                    </a>
                  </div>

                  <div className="mt-12 text-center">
                    <a
                      href="https://reeflix.netlify.app"
                      className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Visitar sitio
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </article>
      </section>

      <section>
        <div className="grid gap-4 items-center">
          <div className="flex justify-center">
            <img
              className="h-auto w-500 max-w-full rounded-lg   md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Reflix;
