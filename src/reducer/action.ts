import {ADD_CART, REMOVE_CART} from './type';

export const addCart = (cart) => ({
  action: ADD_CART,
  payload: cart
});

export const removeCart = (cartId) => ({
  action: REMOVE_CART,
  payload: cartId
})
