import { createContext, useReducer } from 'react';

export const ShopContext = createContext(null);


export const ShopContextProvider = ({children}) => {
  
  const [store, dispatch] = useReducer(cartReducer, {cart: []})
  
  return (
    <ShopContext.Provider> {children} </ShopContext.Provider>
  )
}
