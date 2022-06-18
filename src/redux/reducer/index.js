// Importa las action types acá
import { GET_ALL_DOGS, GET_DOG, CREATE_DOG, GET_ALL_TEMPERAMENTS } from '../actions/index';

const initialState = {
  dogs: [],
  dogdetail: {},
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOG:
      return {
        ...state,
        dogdetail: action.payload,
      }
    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload]
      }
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
       temperaments: action.payload
      }

    default:
      return state;
  }

}
export default rootReducer;
