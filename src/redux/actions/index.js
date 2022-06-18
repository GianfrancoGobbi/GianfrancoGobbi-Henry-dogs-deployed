export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOG = 'GET_DOG';
export const CREATE_DOG = 'CREATE_DOG';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';

export const getAllDogs = () => {
  return async dispatch => {
    return fetch('http://localhost:3001/breeds')
      .then((response) => response.json())
      .then((dogs) => {
        dispatch({
          type: 'GET_ALL_DOGS',
          payload: dogs
        })
      })
  }
}

export const getDog = (id) => {
  return async dispatch => {
    return fetch(`http://localhost:3001/dogs/${id}`)
      .then((response) => response.json())
      .then((dog) => {
        dispatch({
          type: 'GET_DOG',
          payload: dog
        })
      })
  }
}

export function createDog(input) {
  return async function () {
    fetch("http://localhost:3001/breed", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };
}


export const getAllTemperaments = () => {
  return async dispatch => {
    return fetch('http://localhost:3001/temps')
      .then((response) => response.json())
      .then((temperaments) => {
        dispatch({
          type: 'GET_ALL_TEMPERAMENTS',
          payload: temperaments
        })
      })
  }
}