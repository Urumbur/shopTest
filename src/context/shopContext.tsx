import React, {createContext, useReducer, useMemo, useContext, Dispatch} from 'react';
import { shopCartReducer } from '../reducer/reducer';
import { ProductType } from "../reducer/action";

export type CartType = {
  cart: ProductType[]
}

type StoreType = {
  store: CartType
}

const initialState: CartType = {cart: []};

export const ShopContext = createContext<StoreType | undefined>(undefined);

export const useStore = (): StoreType & {dispatch: Dispatch<any>} => {
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
