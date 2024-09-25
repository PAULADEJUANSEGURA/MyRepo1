import React, { Fragment } from "react";

function Carrousel() {
  return (
        <Fragment>
<div className="display-flex">         
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/namaste-logo.jpg" className="d-block w-100 peq" alt="Logo de Namaste Red Social" />
    </div>
    <div className="carousel-item">
      <img src="img/yoga-parque.jpeg" className="d-block w-100 peq" alt="Yoga parque 1" />
    </div>
    <div className="carousel-item">
      <img src="img/tibetano.jpg" className="d-block w-100 peq" alt="tibetano en el Himalaya tocando el didgeridoo" />
    </div>
    <div className="carousel-item">
      <img src="img/yoga-parque-2.jpeg" className="d-block w-100 peq" alt="Yoga parque 2" />
    </div>
    <div className="carousel-item">
      <img src="img/himalayas.jpeg" className="d-block w-100 peq" alt="cordillera del Himalaya" />
    </div>
    <div className="carousel-item">
      <img src="img/yoga-parque-3.jpeg" className="d-block w-100 peq" alt="Yoga parque 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<section className="animation-title">
  <h1>
    <span className="title">Bienvenido a la red social</span>
    <span className="title">para la gente que hace</span>
    <span className="title">yoga y meditacion</span>
  </h1>
  </section>
</div>
    </Fragment>
  );
}

export default Carrousel;
