import {ADD_CART, REMOVE_CART} from './types';

export const addCart = (cart: any) => ({
  action: ADD_CART,
  payload: cart
});

export const removeCart = (cartId: any) => ({
  action: REMOVE_CART,
  payload: cartId
})
