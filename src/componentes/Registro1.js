import React from 'react';

const Registro1 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Registro - Paso 1</h1>
              <h2 className="card-subtitle mb-4 text-center">Inserte sus datos personales</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                  <input type="text" className="form-control" id="fechaNacimiento" placeholder="Ingrese su fecha de nacimiento" />
                </div>
                <div className="mb-3">
                  <label htmlFor="genero" className="form-label">Género</label>
                  <input type="text" className="form-control" id="genero" placeholder="Ingrese su género" />
                </div>
                <div className="mb-3">
                  <label htmlFor="peso" className="form-label">Peso</label>
                  <input type="text" className="form-control" id="peso" placeholder="Ingrese su peso" />
                </div>
                <div className="mb-3">
                  <label htmlFor="altura" className="form-label">Altura</label>
                  <input type="text" className="form-control" id="altura" placeholder="Ingrese su altura" />
                </div>
                <button type="button" className="btn btn-primary me-2"><a href="/login" className="text-white">Regresar</a></button>
                <button type="button" className="btn btn-primary"><a href="/registro2" className="text-white">Siguiente</a></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro1;

