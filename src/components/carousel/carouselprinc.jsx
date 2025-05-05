import React from 'react'
import Foto1 from "./image.png"
import Foto2 from "./image 53.png"
import Foto3 from "./image_1.png"
import "./carousel.css"

function Carouselprinc() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Foto1} className="d-block w-100" alt="..." />
          <div className="carousel-caption text-center">
            <h5 className="d-none d-md-block">Conocé nuestro proyecto</h5>
            <p className="d-none d-md-block">Construimos una máquina que utilizando botellas genera filamento para el uso de la impresora 3D institucional</p>
            <h6 className="d-block d-md-none fuente">Conocé nuestro proyecto</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Foto2} className="d-block w-100" alt="..." />
          <div className="carousel-caption text-center">
            <h5 className="d-none d-md-block">Cómo surgió nuestra idea</h5>
            <p className="d-none d-md-block">Queremos concientizar al cuidado del medio ambiente, que tanto los alumnos de los distintos niveles de la institución puedan tomar como hábito diario el reciclaje.</p>
            <h6 className="d-block d-md-none fuente">Cómo surgió nuestra idea</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Foto3} className="d-block w-100" alt="..." />
          <div className="carousel-caption text-center">
            <h5 className="d-none d-md-block">El paso a paso</h5>
            <p className="d-none d-md-block">Queremos concientizar al cuidado del medio ambiente, que tanto los alumnos de los</p>
            <h6 className="d-block d-md-none fuente">El paso a paso</h6>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}

export default Carouselprinc
