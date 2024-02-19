import { useState } from "react";

const Reflix = () => {
  const data = [
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQHDdMVkqAIiBQ/feedshare-shrink_800/0/1695854041079?e=1710979200&v=beta&t=MS6Mq4zgeu4YL3CCwcY1ipeiVL44bTpwmuAcZ6tE4_w",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQG8h28Q6n40tA/feedshare-shrink_800/0/1695854041321?e=1710979200&v=beta&t=oX4VW3u6QdjpfA0miEPY7eU4lc2_cuzfWkUANZdd7IQ",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQFQW-eWU_rVXw/feedshare-shrink_800/0/1695854042204?e=1710979200&v=beta&t=yx0J0exWqnMZUuaKLuVJBZxeb7QUf817MAFkvXqginw",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGO7wAaCIVO4w/feedshare-shrink_800/0/1695854041134?e=1710979200&v=beta&t=2gmGfubiRQP67vXUSnHr8SComR9MxG-W5idRdoEHXPo",
    },
  ];

  const [active, setActive] = useState(
    "https://media.licdn.com/dms/image/D4D22AQE5QZIqA-4EYQ/feedshare-shrink_800/0/1695854041311?e=1710979200&v=beta&t=_CuMke6r2gPsZK3Ic_I6vKeEW-vTzm7gx3cld9VZvnM"
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
                      href="#"
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
              className="h-auto w-100 max-w-full rounded-lg   md:h-[480px]"
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
