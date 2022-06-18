import { React, useState, useEffect } from 'react';
import './Create.css';
import Nav from '../Nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getAllTemperaments, getAllDogs } from '../../redux/actions/index';
import { useNavigate } from "react-router-dom";
import Validaciones from './Validaciones';

export function Create() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTemperaments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [errors, setErrors] = useState({});
  const allTemperaments = useSelector(state => state.temperaments)
  const [botoncrear, setBotoncrear] = useState("CREAR PERRO")
  const [input, setInput] = useState({
    name: "",
    weightmin: "",
    weightmax: "",
    heightmin: "",
    heightmax: "",
    life_span: "",
    temperaments: [],
    image: { url: "https://s1.eestatic.com/2020/09/11/omicrono/hardware/tecnologia-hardware-robotica_519959775_159687150_1706x960.jpg" }
  })

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
    setErrors(Validaciones({
      ...input,
      [event.target.name]: event.target.value,
    }))
  };

  const arraytemperaments = (event) => {
    if (!input.temperaments.includes(event.target.value)) {
      setInput({ ...input, temperaments: [...input.temperaments, event.target.value] })
      event.target.className = "label-temperament2"
    }
    else {
      setInput({ ...input, temperaments: input.temperaments.filter(temperament => temperament !== event.target.value) })
      event.target.className = "label-temperament"
    }
    console.log(input.temperaments)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input.name === "") return alert("TU PERRO NO TIENE NOMBRE")
    if (input.name.length < 3) return alert("PONLE UN NOMBRE MAS LINDO")
    if (input.weightmax < input.weightmin) return alert("EL PESO MAXIMO DEBE SER MAYOR AL MINIMO")
    if (input.heightmax < input.heightmin) return alert("LA ALTURA MAXIMA DEBE SER MAYOR A LA MINIMA")
    if (input.temperaments.length === 0) return alert("TU PERRO NO TIENE TEMPERAMENTO")
    if (input.heightmax > 99) return alert("LA ALTURA MAXIMA DEBE SER MENOR A 100")
    if (input.heightmin < 1) return alert("LA ALTURA MINIMA DEBE SER MAYOR A 0")
    if (input.weightmax > 99) return alert("EL PESO MAXIMO DEBE SER MENOR A 100")
    if (input.weightmin < 1) return alert("EL PESO MINIMO DEBE SER MAYOR A 0")
    console.log(input)
    setBotoncrear("PERRO CREADO CON EXITO")
    dispatch(createDog(input))
    dispatch(getAllDogs())
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  return (
    <div className="create">
      <Nav />
      <div className="create">
        <form action="form" className="form">

          <div className="contenedor-inputs">
            <div className="caja-label">
              <label>RAZA</label>

              <input name="name" type="text" placeholder='Ingresa el nombre' onChange={handleInputChange} className="input-create"></input>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="caja-label">
              <label>Peso minimo</label>
              <input name="weightmin" min="1" max="99" value={input.weightmin} type="number" placeholder='1 - 99' onChange={handleInputChange} className="input-create"></input>
            </div>
            <div className="caja-label">
              <label>Peso maximo</label>
              <input name="weightmax" min="1" max="99" value={input.weightmax} type="number" placeholder='1 - 99' onChange={handleInputChange} className="input-create"></input>
            </div>
            <div className="caja-label">
              <label>Altura minima</label>
              <input name="heightmin" min="1" max="99" value={input.heightmin} type="number" placeholder='1 - 99' onChange={handleInputChange} className="input-create"></input>
              {errors.heightmin && <p className="error">{errors.heightmin}</p>}
            </div>
            <div className="caja-label">
              <label>Altura maxima</label>
              <input name="heightmax" min="1" max="99" value={input.heightmax} type="number" placeholder='1 - 99' onChange={handleInputChange} className="input-create"></input>
              {errors.heightmax && <p className="error">{errors.heightmax}</p>}
            </div>
            <div className="caja-label">
              <label>Promedio de vida</label>
              <input name="life_span" min="1" max="99" type="number" placeholder='Años de vida' onChange={handleInputChange} className="input-create"></input>
            </div>
          </div>

          <label>Selecciona los temperamentos de tu perro</label>
          <div className="input-temperaments">
            {<div className="contenedor-temperaments" id="contenedor-temperaments">
              {allTemperaments.map((temperament) => (
                <input
                  type="button"
                  name={temperament.name}
                  value={temperament.name}
                  onClick={arraytemperaments}
                  className="label-temperament"
                  key={temperament.id}
                >
                </input>
              ))}
            </div>
            }
          </div>
          {(
            input.name.length > 2 &&
            input.temperaments &&
            input.temperaments.length > 0 &&
            input.weightmax &&
            input.weightmin &&
            input.heightmax &&
            input.heightmin &&
            input.life_span) &&
            <button className="boton-crear" type="submit" id="boton-crear" onClick={handleSubmit}>{botoncrear}</button>
          }
        </form>
      </div>
    </div>
  );
}

export default Create;