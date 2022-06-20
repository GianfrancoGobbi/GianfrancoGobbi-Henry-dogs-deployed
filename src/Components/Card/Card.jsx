import { React } from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

export function Card({ name, image, id, weight, height, temperament }) {
  return (

    <div className="card">

      <h2 className="card-title"> {name} </h2>
      <NavLink to={`/detail/${id}`}>
        <div className="contenedor-imagen">
          <img src={image.url} alt="" className='card-image' />
        </div>
      </NavLink>
      {/* <h3>{height}</h3> */}
      <h3 className="card-weight">Weight {weight}</h3>
      <h3 className="card-temperament">{temperament}</h3>

    </div>
  );
}

export default Card;