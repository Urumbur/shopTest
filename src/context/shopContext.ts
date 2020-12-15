import { createContext } from 'react';

export const ShopContext = createContext({cart: [], addProductToCart: (product: any) => {}});

