import { useState } from "react";

const AppRestaurante = () => {
  const data = [
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGdi7tZMYcjvw/feedshare-shrink_800/0/1705108154432?e=1710979200&v=beta&t=IRO2mMGOJMOWGlnnlwIMQOFzMKRltgbQNL40goYJhIc",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGkIfR_uk6cCg/feedshare-shrink_800/0/1705108154280?e=1710979200&v=beta&t=ibIqh9uVTvCGP2mtI7Pc_3ipemGWBuHj3z8smoQ3mAY",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGiIwfntKlX0A/feedshare-shrink_800/0/1705108154424?e=1710979200&v=beta&t=bPLMOBltJyPnLlW3CydaU7K8LVkb7kXSJZbRfIqAxH0",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQEbejeHDWZS7g/feedshare-shrink_800/0/1705108154422?e=1710979200&v=beta&t=CjOSvcQmEtgiqRFfp6j-l72yEIp3hHyiEUAmDS-9vzA",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGp85x_S7Ov5A/feedshare-shrink_800/0/1705108154643?e=1710979200&v=beta&t=fJ5oM7tF9fxT2MONl0NP6J0U91NDhgE5AsR2GqxGnzA",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQErQz2F7oPLNA/feedshare-shrink_800/0/1705108154472?e=1710979200&v=beta&t=aVmCreBcALs7BNN8MwBEFXU5_WuA1vUSvx5sK7SaQS0",
    },
    {
      imgelink:
        "https://media.licdn.com/dms/image/D4D22AQGpKHJhd2A51g/feedshare-shrink_800/0/1705108155212?e=1710979200&v=beta&t=_6AaH7D4jtqTusjx5TTEN6qKOLIIG9dE1sTisxvv43g",
    },
  ];

  const [active, setActive] = useState(
    "https://media.licdn.com/dms/image/D4D22AQFugwEd-uxEow/feedshare-shrink_800/0/1705108154869?e=1710979200&v=beta&t=98JHqsdMoGNSm2xa-GdgxmLXBnTYYcNXpVZv64RolIQ"
  );
  return (
    <>
      <section>
        <article className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl font-bold  sm:text-3xl text-white">
              Grill & Thrill
            </h1>
          </div>
        </article>
      </section>
      <section className="bg text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {" "}
              Proyecto final de Rollig Code School
            </h2>

            <p className="mt-4 text-gray-300">
              Un Proyecto realizado en la finalizacion del cursado de rolling
              code una aplicacion full stack MERN
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

              <h2 className="mt-4 text-xl font-bold text-white">Admin</h2>

              <p className="mt-1 text-sm text-gray-300">
                El usuario admin puede acceder a la vista de un admin donde
                puede agregar editar y eliminar productos, tambien puede
                deshabilitar algun producto que no este disponible o se quedaran
                sin stock
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
                Registro de usuario
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                para poder comenzar a utilizar la app debes registrarte en la
                app donde cuenta con todas las validaciones y seguridad tanto en
                Fron como Back
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
                Inicio de Session
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Para comenzar hacer tus pedidos debes loguearte en la app, donde
                se lleva acabo todas las validaciones y verificamos en la base
                de datos que tu usuario este registrado
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

              <h2 className="mt-4 text-xl font-bold text-white">Usuario</h2>

              <p className="mt-1 text-sm text-gray-300">
                El usuario podra ingresar a la vista de usuario donde podra ver
                toda la carta y realizar los pedidos del menu. Donde tambien
                puede acceder a su perfil y editar sus datos o cambiar su
                contraseña.
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
                Diseño Totalmente Responsivo
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Diseño web atractivo y totalmente responsivo para utilizar en
                cualquier dispositivo
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

              <h2 className="mt-4 text-xl font-bold text-white">Proyecto</h2>

              <p className="mt-1 text-sm text-gray-300">
                Este proyecto fue realizado por 3 integrantes donde se llevaron
                acabo todos los requisitos en la documentacion para el mejor
                funcionamiento
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
      </section>

      <section>
        <div className="grid gap-4 items-center">
          <div className="flex justify-center">
            <img
              className="h-auto w-25 max-w-full rounded-lg   md:h-[480px]"
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

export default AppRestaurante;
