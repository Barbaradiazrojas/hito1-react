import React from 'react';
import Navbar from './Navbar'; // Corregido: ruta relativa
import Home from './Home';    // Corregido: ruta relativa
import Footer from './Footer'; // Corregido: ruta relativa

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
