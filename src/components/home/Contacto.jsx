import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "./contact.svg";
import { toast } from "sonner";

const SERVIDE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVIDE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Correo enviado exitosamente !!!");
          form.current.reset();
        },
        (error) => {
          toast.error("Ocurrio un error, intente mas tarde.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section>
        <section className="bg-">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div
                className="lg:col-span-2 lg:py-12"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={`${contact}`} alt="contactoLogo" className="w-75" />
              </div>

              <div
                className="rounded-lg bg- p-8 shadow-lg lg:col-span-3 lg:p-12 border"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <h1 className="text-white font-extrabold text-center pb-2 fs-5">
                  No esperes más para hacer que las cosas sucedan. ¡Escribe tu
                  mensaje ahora mismo!
                </h1>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Martin cardozo..."
                      type="text"
                      id="name"
                      name="user_name"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-900 p-3 text-sm"
                      placeholder="example@gmail.com"
                      type="email"
                      id="email"
                      name="user_email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Ingresa tu mensaje"
                      rows="8"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contacto;
