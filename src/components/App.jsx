import React from 'react';
import Navbar from './navbar'; // Corregido: ruta relativa
import Home from './home';    // Corregido: ruta relativa
import Footer from './footer'; // Corregido: ruta relativa

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
