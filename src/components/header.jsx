import React from 'react';
import headerBg from '../assets/img/header.jpg';

const Header = () => {
  return (
    <header
      className="text-white text-center p-5"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Ajusta la altura según sea necesario
        marginBottom: '50px', // Añade un margen inferior
      }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
        <h1>Bienvenido a Pizzería Mamma Mía</h1>
        <p>Las mejores pizzas de la ciudad</p>
      </div>
    </header>
  );
};

export default Header;
