import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export type ProductType = {
  id: number,
  name: string,
  count: number
}

type AddToCart = {
  type: typeof ADD_TO_CART,
  payload: ProductType
}

export const addToCart = (payload): AddToCart => ({
  type: typeof ADD_TO_CART,
  payload: ProductType
})

type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART,
  payload: number
}

export type ShopAction =
  | AddToCart
  | RemoveFromCart;
