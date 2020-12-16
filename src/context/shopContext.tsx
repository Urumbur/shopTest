import React, {createContext, useReducer, useMemo} from 'react';
import { shopCartReducer } from '../reducer/reducer';

const initialState = {cart: []};

export const ShopContext = createContext(initialState);

export const ShopContextProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  
  const [store, dispatch] = useReducer(shopCartReducer, initialState);

  const values = useMemo(() => ({
    store,
    dispatch
  }), [store])
  
  return (
    <ShopContext.Provider value={values}> {children} </ShopContext.Provider>
  )
}
