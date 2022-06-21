import { React, useState, useEffect } from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
import { getAllDogs, getAllTemperaments } from '../../redux/actions/index';
import { useDispatch } from 'react-redux'

export function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //////////////////// ESTADOS LOCALES ////////////////////
  const [elemento, setElemento] = useState(8);
  const [busqueda, setBusqueda] = useState("");
  const alldogs = useSelector(state => (state.dogs));
  const allTemps = useSelector(state => (state.temperaments).sort((a, b) => a.name.localeCompare(b.name)));
  const [perrosfiltrados, setPerrosfiltrados] = useState(alldogs);
  const [sumador, setSumador] = useState(0);
  const [sumador2, setSumador2] = useState(8);
  const [alfabetic, setAlfabetic] = useState(true)
  const [peso, setPeso] = useState(true)


  //////////////////// BUSQUEDA POR INPUT ////////////////////
  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line 
    var resultadosBusqueda = alldogs.filter((elemento) => {
      if (elemento.temperament && elemento.name) {
        if (
          elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ||
          elemento.temperament.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return elemento;
        }
      }
    });
    setPerrosfiltrados(resultadosBusqueda);
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    setSumador(0)
    setSumador2(elemento)
  }

  //////////////////// FILTRO POR ALFABETO ////////////////////
  const AZ = () => {
    if (alfabetic) {
      perrosfiltrados.sort(function (a, b) {
        setAlfabetic(!alfabetic)
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
    } else {
      setAlfabetic(!alfabetic)
      perrosfiltrados.sort(function (b, a) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
         return 0;

      })
    }
    if (alfabetic) {
      alldogs.sort(function (a, b) {
        setAlfabetic(!alfabetic)
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
         return 0;
      })
    } else {
      setAlfabetic(!alfabetic)
      alldogs.sort(function (b, a) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
          return 0;

      })
    }
  }

  //////////////////// FILTRO POR PESO ////////////////////
  const PESO = () => {
    if (peso) {
      perrosfiltrados.sort(function (a, b) {
        setPeso(!peso)
        if (Number(a.weight.metric.slice(0, 2)) > Number(b.weight.metric.slice(0, 2))) {
          return 1;
        }
        if (Number(a.weight.metric.slice(0, 2)) < Number(b.weight.metric.slice(0, 2))) {
          return -1;
        }
        return 0;
      })
    } else {
      setPeso(!peso)
      perrosfiltrados.sort(function (b, a) {
        if (Number(a.weight.metric.slice(0, 2)) > Number(b.weight.metric.slice(0, 2))) {
          return 1;
        }
        if (Number(a.weight.metric.slice(0, 2)) < Number(b.weight.metric.slice(0, 2))) {
          return -1;
        }
        return 0;
      })
    }
    if (peso) {
      alldogs.sort(function (a, b) {
        setPeso(!peso)
        if (Number(a.weight.metric.slice(0, 2)) > Number(b.weight.metric.slice(0, 2))) {
          return 1;
        }
        if (Number(a.weight.metric.slice(0, 2)) < Number(b.weight.metric.slice(0, 2))) {
          return -1;
        }
        return 0;
      })
    } else {
      setPeso(!peso)
      alldogs.sort(function (b, a) {
        if (Number(a.weight.metric.slice(0, 2)) > Number(b.weight.metric.slice(0, 2))) {
          return 1;
        }
        if (Number(a.weight.metric.slice(0, 2)) < Number(b.weight.metric.slice(0, 2))) {
          return -1;
        }
        return 0;
      })
    }
  }

  //////////////////// PAGINACION ////////////////////

  function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

  const siguiente = () => {
    if (sumador2 >= alldogs.length) { } //si llega al final, no hace nada
    else {                              //si no llega al final, suma 8 y actualiza el estado
      setSumador(sumador + elemento);
      setSumador2(sumador2 + elemento);
      scrollUp();
    }
  }
  const anterior = () => {
    if (sumador <= 0) { }                //si llega al inicio, no hace nada
    else {                               //si no llega al inicio, resta 8 y actualiza el estado
      setSumador(sumador - elemento);
      setSumador2(sumador2 - elemento);
      scrollUp();
    }

  }

  //////////////////// ELEMENTOS A RENDERIZAR ////////////////////
  const elementosx = (event) => {
    setElemento(Number(event.target.value));
    setSumador2(Number(event.target.value))
    setSumador(0)
    console.log(Number(event.target.value))
  }

  return (
    <div className="home">
      <Nav />
      <div className="div-contenedor-home">
        <div className="home-ordenelementos">

          <div className="home-filtros">
            <div>BUSCADOR</div>
            <input
              className="input-buscador"
              value={busqueda}
              placeholder="  pug"
              onChange={handleChange}
              autoComplete="on"
              focus="true"
              type={"search"}
            />

            <select className="filtros-select" value={busqueda} onChange={handleChange} >
              {allTemps.map((temperament, index) => (
                <option key={temperament.name} value={temperament.name} >{temperament.name}</option>
              ))}
              <option value={""}>Todos</option>
            </select>
          </div>

          <div className="home-filtros-mostrar-ordenar">
            <div className="home-filtros">
              <div>Ordenar X</div>
              <button className='home-btn' onClick={AZ}>Nombre</button>
              <button className='home-btn' onClick={PESO}>Peso</button>
            </div>

            <div className="home-filtros">
              <div>Mostrar</div>
              <input
                className="input-buscador"
                value={elemento}
                onChange={elementosx}
                typeof="number"
                type={"number"}
                placeholder="8"
              />
            </div>
          </div>


        </div>


        <div className="cards">
          {(busqueda !== "") && perrosfiltrados.slice(sumador, sumador2).map((dog, i) => {
            return (<Card
              key={dog.id + i}
              name={dog.name}
              id={dog.id}
              image={dog.image}
              weight={dog.weight.metric}
              height={dog.height.metric}
              temperament={dog.temperament} />
            );
          })}
          {(busqueda === "") && alldogs.slice(sumador, sumador2).map((dog, i) => {
            return (<Card
              key={dog.id}
              name={dog.name}
              id={dog.id}
              image={dog.image}
              weight={dog.weight.metric}
              height={dog.height.metric}
              temperament={dog.temperament} />
            );
          })}
          {(perrosfiltrados.length === 0) && <label> No encontramos coincidencias </label>          }
        </div>

        <div className="home-paginado">
          <div>Pagina</div>
          <button className='home-btn' onClick={anterior}>Anterior</button>
          <button className='home-btn' onClick={siguiente}>Siguiente</button>
        </div>

      </div>
    </div>
  );
}


export default Home;