import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const InfoCard = () => {
  // Estado para manejar el índice activo del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para manejar el cambio de imagen en el carrusel
  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
        {/* Carrusel con tres imágenes */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=Imagen+1"
            alt="Imagen 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=Imagen+2"
            alt="Imagen 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x200?text=Imagen+3"
            alt="Imagen 3"
          />
        </Carousel.Item>
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
        <p className="card-text">
          Esta es una breve descripción o información que se puede incluir en el cuerpo de la tarjeta.
        </p>
        <a href="#" className="btn btn-primary">Más Información</a>
      </div>
    </div>
  );
};

export default InfoCard;
