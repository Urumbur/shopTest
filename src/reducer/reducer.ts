import {ADD_CART, REMOVE_CART} from './type';

export const shopCartReducer = (state, action) => {
  switch(action.type) {
    case ADD_CART:
      return ...state;
    case REMOVE_CART:
      return ...state;
    default:
      return state;
  }
}
