import React from 'react';

const Registro2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Registro - Paso 2</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="text" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
              </div>
              <button type="button" className="btn btn-primary me-2"><a href="/registro" className="text-white">Regresar</a></button>
              <button type="button" className="btn btn-primary"><a href="/login" className="text-white">Registrarse</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro2;
