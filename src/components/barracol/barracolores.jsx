import React from 'react';
import Image from "./image.png";
import Image1 from "./a078967b-7075-4ff8-a2b1-383a0e69ddbc 2.png";
import Image2 from "./image_1.png";
import Image3 from "./image_2.png";
import Image4 from "./image_3.png";
import Image5 from "./image_4.png";
import Image6 from "./image_5.png";
import Image7 from "./image_6.png";
import Image8 from "./imaaage.png";
import "./barra.css"

function BarraColores() {
  return (
    <div>
      {/* Sección "El inicio" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInicio"
            aria-expanded="false"
            aria-controls="collapseInicio"
          >
            <p className="mb-0 fs-2 fuente">El inicio</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapseInicio">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselInicio" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="1" aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image8} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image2} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselInicio" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselInicio" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Como empezamos</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      El proyecto nació como una idea a principios de 2024 y tomó forma en marzo, cuando obtuvimos el permiso para desarrollarlo. Investigamos en la web los componentes necesarios para que la extrusora funcionara y comenzamos a imprimir sus piezas con la impresora 3D del colegio, lo que nos permitió armar la estructura inicial. Con el tiempo, nos entusiasmamos más y decidimos seguir incorporándole partes útiles para mejorarla progresivamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Paso a paso" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePaso"
            aria-expanded="false"
            aria-controls="collapsePaso"
          >
            <p className="mb-0 fs-2 fuente">Paso a paso</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapsePaso">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselPaso" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="1" aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image3} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselPaso" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselPaso" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Como lo llevamos a cabo</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      Comenzamos imprimiendo las piezas mediante la impresora 3D que nos brinda el colegio, una vez que teníamos las partes de estructura comenzamos a ensamblar las piezas y a comprar los componentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Exposiciones" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExpo"
            aria-expanded="false"
            aria-controls="collapseExpo"
          >
            <p className="mb-0 fs-2 fuente">Exposiciones</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapseExpo">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselExpo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExpo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselExpo" data-bs-slide-to="1" aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image5} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image1} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExpo" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExpo" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Participamos en ferias educativas!</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      El pasado año fuimos parte de la 51° Feria Provincial de Educación, Artes, Ciencias y Tecnología. Se presentó el proyecto por primera vez en Tigre en la Feria distrital del programa ACTE. Luego en el mes de Agosto se llevo a cabo la Feria Regional en San Isidro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Futuras mejoras" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFuturo"
            aria-expanded="false"
            aria-controls="collapseFuturo"
          >
            <p className="mb-0 fs-2 fuente">Futuras mejoras</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapseFuturo">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselFuturo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselFuturo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselFuturo" data-bs-slide-to="1" aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image6} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image7} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFuturo" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFuturo" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Que proponemos mejorar</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      En continuidad con el proyecto destinado a transformar botellas de plástico recicladas en filamento para impresoras 3D, se propone una mejora técnica significativa: la incorporación de una placa Arduino para el control automatizado del motor y la temperatura de la extrusora. Esta mejora busca optimizar el funcionamiento del dispositivo, aumentar la eficiencia en la producción del filamento y garantizar una temperatura constante y adecuada para la correcta extrusión del PET.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarraColores;