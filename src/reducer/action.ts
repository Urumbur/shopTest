import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export type ProductType = {
  id: number,
  name: string
}

export const addToCart = (product: ProductType) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeCart = (productId: number) => ({
  type: REMOVE_FROM_CART,
  payload: productId
})
