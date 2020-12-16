import {ADD_CART, REMOVE_CART} from './types';

export const shopCartReducer = (state: any, action: any) => {
  switch(action.type) {
    case ADD_CART:
      return [...state];
    case REMOVE_CART:
      return [...state];
    default:
      return state;
  }
}
