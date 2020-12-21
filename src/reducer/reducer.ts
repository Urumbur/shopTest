import { ADD_TO_CART, REMOVE_FROM_CART } from './types';
import { CartType } from '../context/shopContext'

export const shopCartReducer = (state: any, action: any) => {
  console.log(state)
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state, 
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return [...state.cart];
    default:
      return state;
  }
}
