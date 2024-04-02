import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const array = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
"https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
"https://www.agiledrop.com/sites/default/files/2020-10/JavascriptLogo.svg",
"https://www.svgrepo.com/show/376337/node-js.svg",
"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
];
const Carrusel = () => {
  return (
    <section className="w-50 mx-auto ">

    <Carousel className="w-full mx-auto">
      <CarouselContent className="-ml-1">
        {array.map((item, index) => (
          <CarouselItem key={index} className=" sm:basis-1/1 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item} alt="logo" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </section>
  )
}

export default Carrusel