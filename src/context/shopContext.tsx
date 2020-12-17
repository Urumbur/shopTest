import React, {createContext, useReducer, useMemo, useContext} from 'react';
import { shopCartReducer } from '../reducer/reducer';

const initialState = {cart: []};

type StoreType = {
  store: typeof initialState
}

export const ShopContext = createContext<StoreType | undefined>(undefined);

export const useStore = (): StoreType & {dispatch: any} => {
  const store = useContext<StoreType | undefined>(ShopContext);
  //@ts-ignore
  return store;
}

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
