import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const shopCartReducer = (state: any, action: any) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state, 
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      const array = state.cart.filter((item: any) => item.id !== action.payload);
      return {cart: [...array]};
    default:
      return state;
  }
}
