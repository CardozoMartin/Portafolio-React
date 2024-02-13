import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button"


const Contacto = () => {
  return (
    <>
      <section className="bg- ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg- border p-8 shadow-lg lg:col-span-3 lg:p-12">
              <div className="text-center mb-3">
                <h1 className="text-white font-extrabold">Contacto</h1>
              </div>
              <form action="#" className="space-y-4">
                <div>
                  
                  <Input type="name" placeholder="Nombre" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                   
                    <Input type="email" placeholder="Email" />
                  </div>

                  <div>
                    
                    <Input type="number" placeholder="Telefono" />
                  </div>
                </div>

                <div className="grid w-full gap-2">
                  <Textarea placeholder="Ingresa el mensaje" />
                  <Button variant="outline">Enviar</Button>
                </div>

               
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
