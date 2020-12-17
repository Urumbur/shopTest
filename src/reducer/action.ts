import {ADD_CART, REMOVE_CART} from './types';

export const addCart = (cart: any) => ({
  type: ADD_CART,
  payload: cart
});

export const removeCart = (cartId: any) => ({
  type: REMOVE_CART,
  payload: cartId
})
