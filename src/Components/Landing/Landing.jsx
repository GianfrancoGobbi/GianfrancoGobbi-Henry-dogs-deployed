import { React, useState } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export function Landing() {

  const [coordenada, setCoordenada] = useState({
    floatingX: null,
    floatingY: null
  });


  const sombra = () => {
    return {
      width: `${coordenada.floatingY}px`,
      maxWidth: '80px',
      height: '10px',
      background: '#00000063',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      borderBottom: '1px #ccc dotted',
      position: 'relative',
      display: 'inline-block',
      left: `${coordenada.floatingX}px`,
      top: `-50px`,
      boxShadow: 'inset 0 0 10px rgba(153,204,205)',
      borderRadius: '50%',
      zIndex: '0'
    }
  }





  const movimiento = (event) => {
    event.persist();
    setCoordenada({
      floatingX: event.clientX - window.innerHeight,
      floatingY: window.innerHeight - event.clientY * 1.4
    });
    console.log(event.clientX);
    console.log(window.innerWidth);
  }

  return (
    <div className="landing" onMouseMove={movimiento} >
      <h1 className="landing-title">DOG APP</h1>
      <h4 className="landing-subtitle">Click sobre Bruno para ingresar</h4>
      <Link to="/home">
        <div className="contenedorpelota">
          <div className="img-landing"></div>
          <div style={sombra()} />
        </div>
      </Link>


    </div >
  );
}

export default Landing;