import React from 'react';
import Image from "./image.png";
import Image1 from "./imaaage.png";
import Image2 from "./image_1.png";
import Image3 from "./image_2.png";
import Image4 from "./image_3.png";
import Image5 from "./image_4.png";
import Image6 from "./image_5.png";
import Image7 from "./image_6.png";
import Image8 from "./imaaage.png";
import Image9 from "./image7.png";
import Image10 from "./image8.jpg";
import Image11 from "./image9.jpg";
import Image12 from "./image10.jpg";
import Image13 from "./image11.jpg";
import Image14 from "./image12.png";
import Image15 from "./image13.jpg"
import Image16 from "./imagenexpo.jpeg";
import ImageAnim from "./imageanim.jpeg"
import ImageAnim1 from "./imageanim1.jpeg"
import FotosCom from "./fotoscom.jpg";
import FotosCom1 from "./fotoscom1.jpeg";
import ImageProt from "./imageprot.jpg";

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
                      <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="2" aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image8} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image2} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image13} className="d-block w-100 rounded-start" alt="..." />
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
                    <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="2" aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="3" aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="4" aria-label="Slide 5" />
                    <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="5" aria-label="Slide 6" />
                    <button type="button" data-bs-target="#carouselPaso" data-bs-slide-to="6" aria-label="Slide 7" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Image} className="d-block w-100 rounded-start" alt="Paso 1" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image3} className="d-block w-100 rounded-start" alt="Paso 2" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image4} className="d-block w-100 rounded-start" alt="Paso 3" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image10} className="d-block w-100 rounded-start" alt="Paso 4" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image11} className="d-block w-100 rounded-start" alt="Paso 5" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image12} className="d-block w-100 rounded-start" alt="Paso 6" />
                    </div>
                    <div className="carousel-item">
                      <img src={Image15} className="d-block w-100 rounded-start" alt="Paso 6" />
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
                      <button type="button" data-bs-target="#carouselExpo" data-bs-slide-to="2" aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image5} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image9} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image16} className="d-block w-100 rounded-start" alt="..." />
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
                      <button type="button" data-bs-target="#carouselFuturo" data-bs-slide-to="2" aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={Image6} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image7} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={Image14} className="d-block w-100 rounded-start" alt="..." />
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
                      En continuidad con el proyecto, se propone una mejora técnica significativa: la incorporación de una placa Arduino para el control automatizado del motor y la temperatura de la extrusora. Esta mejora busca optimizar el funcionamiento del dispositivo, aumentar la eficiencia en la producción del filamento y garantizar una temperatura constante y adecuada para la correcta extrusión del PET.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección "Resultados" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseRes"
            aria-expanded="false"
            aria-controls="collapseRes"
          >
            <p className="mb-0 fs-2 fuente">Resultados</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapseRes">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselRes" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselRes" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselRes" data-bs-slide-to="1" aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={ImageAnim} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={ImageAnim1} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselRes" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselRes" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Resultados de impresión y calidad del filamento obtenido</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      Tras la puesta en marcha de la máquina, se realizaron pruebas de producción de filamento utilizando botellas de plástico PET recicladas. El material extruido presentó un diámetro uniforme y una textura adecuada para su uso en impresoras 3D domésticas. Con este filamento, se imprimieron diversas piezas de prueba, verificando su resistencia mecánica y acabado superficial. Los resultados demostraron que el sistema es capaz de generar un producto funcional, con un rendimiento comparable al de filamentos comerciales, pero con el valor agregado de su origen reciclado y su bajo costo de producción.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección "Comunidad" */}
      <div>
        <p className="text-center">
          <button
            className="mt-2 btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCom"
            aria-expanded="false"
            aria-controls="collapseCom"
          >
            <p className="mb-0 fs-2 fuente">Comunidad</p>
          </button>
          <hr className="divisor" />
        </p>
        <div className="collapse" id="collapseCom">
          <div className="card card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div id="carouselCom" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselCom" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                      <button type="button" data-bs-target="#carouselCom" data-bs-slide-to="1" aria-label="Slide 2" />
                      <button type="button" data-bs-target="#carouselCom" data-bs-slide-to="2" aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={FotosCom1} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={FotosCom} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={ImageProt} className="d-block w-100 rounded-start" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCom" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCom" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fuente">Participación comunitaria y proyección social</h5>
                    <p className="card-text fuentesec" style={{ textAlign: 'justify' }}>
                      Como parte del impacto social del proyecto, se realizaron presentaciones a estudiantes de grados inferiores de la institución, mostrando el filamento reciclado y explicando el proceso de su fabricación. Estas actividades buscaron despertar el interés por el cuidado del medio ambiente y la tecnología, motivando a los más jóvenes a participar en iniciativas de reciclaje. <br/>Además, se exploró la posibilidad de utilizar el filamento producido para la impresión de prótesis de bajo costo, destinadas a quienes las necesiten. Este enfoque abre la puerta a un uso solidario y de gran valor social, uniendo innovación tecnológica con compromiso comunitario.
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