import { React } from 'react';
import { useSelector } from 'react-redux'
import './Detail.css';
import Nav from '../Nav/Nav';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const {id} = useParams();
  const dogs = useSelector(state => state.dogs);
  return (
    <div className="dog-detail">
      <Nav />
      {dogs.map((dog) => {
        if ((dog.id).toString() === (id).toString()) {
          return (
            <div className="dog-detail-container" key={dog.id}>
              <div className="dog-detail-info">
                <h1>{dog.name}</h1>
                <img className="dog-detail-image" src={dog.image.url} alt={dog.name} />
                <h3>LIFE {dog.life_span}</h3>
                <h3>{dog.temperament}</h3>
                <h3>{dog.height.metric}  cm.</h3>
                <h3>{dog.weight.metric}  Kg.</h3>
                <p>{dog.description}</p>
              </div>
            </div>
          )
        }
        return null;
      }
      )}
    </div>
  );
}

export default Detail;