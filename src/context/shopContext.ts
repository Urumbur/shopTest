import { createContext, useReducer, useMemo } from 'react';
import { shopCartReducer } from '../reducer/reducer';

export const ShopContext = createContext(null);


export const ShopContextProvider = ({children}) => {
  
  const [store, dispatch] = useReducer(shopCartReducer, {cart: []});
  const values = useMemo(() => ({
    store, 
    dispatch
  }), [store, dispatch])
  
  return (
    <ShopContext.Provider value={values}> {children} </ShopContext.Provider>
  )
}
