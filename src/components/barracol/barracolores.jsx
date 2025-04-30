import React from 'react';

function BarraColores() {
  return (
    <div>
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
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Texto de ejemplo para esta sección.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">Última actualización hace 3 minutos</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Contenido paso a paso del proyecto.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">Última actualización hace 3 minutos</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Presentaciones del proyecto en distintos eventos.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">Última actualización hace 3 minutos</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Ideas para automatizar o expandir el alcance del proyecto.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">Última actualización hace 3 minutos</small>
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
