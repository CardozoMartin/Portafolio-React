import React, { useState } from 'react'
import petsQr from "../../img/Imagenes Proyectos/PetsQr/petsqr.png"
import petsQr1 from "../../img/Imagenes Proyectos/PetsQr/pets2.png"
import petsQr2 from "../../img/Imagenes Proyectos/PetsQr/pets3.png"
import petsQr3 from "../../img/Imagenes Proyectos/PetsQr/pets4.png"
import petsQr4 from "../../img/Imagenes Proyectos/PetsQr/pets5.png"
import petsQr5 from "../../img/Imagenes Proyectos/PetsQr/pets6.png"
import petsQr6 from "../../img/Imagenes Proyectos/PetsQr/pets7.png"
import icon1 from "../../img/icons/html.png"
import icon2 from "../../img/icons/css-3.png"
import icon3 from "../../img/icons/js.png"
import icon4 from "../../img/icons/reactjs-line.png"
import icon5 from "../../img/icons/programacion.png"
import icon6 from "../../img/icons/firebase-line.png"

import reflix from "../../img/Imagenes Proyectos/Reflix/reflix1.webp"
import reflix2 from "../../img/Imagenes Proyectos/Reflix/reflix2.webp"
import reflix3 from "../../img/Imagenes Proyectos/Reflix/reflix3.webp"
import reflix4 from "../../img/Imagenes Proyectos/Reflix/reflix4.webp"
import reflix5 from "../../img/Imagenes Proyectos/Reflix/reflix5.webp"

import grill from "../../img/Imagenes Proyectos/GrillThrill/grill1.webp"
import grill2 from "../../img/Imagenes Proyectos/GrillThrill/gril2.webp"
import grill3 from "../../img/Imagenes Proyectos/GrillThrill/grill3.webp"
import grill4 from "../../img/Imagenes Proyectos/GrillThrill/grill4.webp"
import grill5 from "../../img/Imagenes Proyectos/GrillThrill/grill5.webp"
import grill6 from "../../img/Imagenes Proyectos/GrillThrill/grill6.webp"
import grill7 from "../../img/Imagenes Proyectos/GrillThrill/grill7.webp"
import grill8 from "../../img/Imagenes Proyectos/GrillThrill/grill-8.webp"
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const proyectos = [
    {
        id: 1,
        nombre: "PetsQR",
        descripcion: "PetsQR es una aplicación web que permite a los usuarios escanear códigos QR de mascotas perdidas y encontrar a sus dueños.",
        tecnologias: [icon1, icon2, icon3, icon4, icon5, icon6],
        imagen: [petsQr, petsQr1, petsQr2, petsQr3, petsQr4, petsQr5, petsQr6],
        link: ["https://github.com/CardozoMartin/reactBoostrapPetsQr", "https://github.com/CardozoMartin/expressPetsQr", "https://petsqr.netlify.app/"]
    },
    {
        id: 2,
        nombre: "Grill and Thrill",
        descripcion: "Grill and Thrill es una aplicacion web donde se puede tomar pedidos de comida y bebidas en un restaurante. una app web que contiene la vista del cliente y la del administrador.",
        tecnologias: [icon1, icon2, icon3, icon4],
        imagen: [grill, grill2, grill3, grill4, grill5, grill6, grill7, grill8],
        link: ["https://github.com/biandeb/final-project-group-1", "https://github.com/eliasjuliana/final-project-be", "https://grillandthrill.netlify.app/"]
    },
    {
        id: 3,
        nombre: "Reflix",
        descripcion: "Reflix es una aplicacion web donde se puede ver peliculas y series. una app web que contiene la vista del cliente y la del administrador.",
        tecnologias: [icon1, icon2, icon3],
        imagen: [reflix, reflix2, reflix3, reflix4, reflix5],
        link: ["https://github.com/CardozoMartin/grupo-n2-netflix", "", "https://reflix.netlify.app/"]
    }
]

const Proyects = () => {
    return (
        <article>
            {proyectos.map((proyecto, index) => {
                // Estado para controlar el índice actual del carrusel de cada proyecto
                const [currentIndex, setCurrentIndex] = useState(0);

                // Función para manejar el cambio de imagen en el carrusel
                const handleSelect = (selectedIndex) => {
                    setCurrentIndex(selectedIndex);
                };

                return (
                    <div key={proyecto.id} className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                            <div>
                                <div className="max-w-lg md:max-w-none">
                                    <h2 className="text-2xl font-semibold text-white sm:text-5xl fw-bolder">
                                        {proyecto.nombre}
                                    </h2>
                                    <p className="mt-4 text-gray-700">{proyecto.descripcion}</p>
                                    <p className="mt-4 text-gray-700">Tecnologías usadas:</p>
                                    <div className="flex justify-center gap-2 mt-4">
                                        {proyecto.tecnologias.map((tecnologia, index) => (
                                            <img key={index} src={tecnologia} alt={`icon${index}`} className="w-10 h-10" />
                                        ))}
                                    </div>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <Link to={proyecto.link[0]} target="_blank" className="btn btn-dark">Frontend
                                            <i className="ri-github-line"></i>
                                        </Link>
                                        {proyecto?.link && proyecto?.link[1] && proyecto.link[1] !== "" && (
                                            <Link to={proyecto.link[1]} target="_blank" className="btn btn-dark">
                                                Backend
                                                <i className="ri-github-line"></i>
                                            </Link>
                                        )}
                                        <br />
                                        <Link to={proyecto.link[2]} target="_blank" className="btn btn-primary">Demo
                                            <i className="ri-eye-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                                    {proyecto.imagen.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img className="d-block img-carrusel rounded" src={image} alt={`imagen${index}`} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </div>

                        {/* Mostrar la línea divisoria solo si no estamos en el último proyecto */}
                        {index < proyectos.length - 1 && (
                            <div className="w-75 mx-auto mt-8">
                                <span className="flex items-center">
                                    <span className="h-px flex-1 bg-gray-500 bg-opacity-50"></span>
                                    <span className="shrink-0 px-6"> +++</span>
                                    <span className="h-px flex-1 bg-gray-500 bg-opacity-50"></span>
                                </span>
                            </div>
                        )}
                    </div>
                );
            })}
        </article>
    );
};

export default Proyects;
