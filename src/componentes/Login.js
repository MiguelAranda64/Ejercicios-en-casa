import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Iniciar sesión</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
              </form>
              <p className="mt-3 text-center">¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
