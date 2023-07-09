import React from 'react';
import Login from './componentes/Login';
import Registro1 from './componentes/Registro1';
import Registro2 from './componentes/Registro2';

const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/SmartGym');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const App = () => {
  const getPageComponent = () => {
    const path = window.location.pathname;

    if (path === '/registro') {
      return <Registro1 />;
    } else if (path === '/registro2') {
      return <Registro2 />;
    } else {
      return <Login />;
    }
  };

  return getPageComponent();
};


export default App;
