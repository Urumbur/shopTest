import React, { createContext, useReducer, useContext, useMemo, Dispatch } from 'react';
import { shopCartReducer } from '../reducer/reducer';
import { ProductType, ShopAction } from "../reducer/action";

export type CartType = {
    cart: ProductType[]
}

export type StoreType = {
    store: CartType,
    dispatch: Dispatch<ShopAction>
}

const initialState: CartType = {cart: []};

export const ShopContext = createContext<StoreType | undefined>(undefined);

export const useStore = (): StoreType => {
  const store = useContext<StoreType | undefined>(ShopContext);
  if (!store) {
      throw new Error(
          "Cannot use `ShopContext` outside ShopContext.Provider"
      );
  }
  return store;
}

export const ShopContextProvider = ({children, initial = initialState}: {children: JSX.Element, initial?: CartType}) => {

  const [store, dispatch] = useReducer(shopCartReducer, initial);

  const values = useMemo(() => ({
    store,
    dispatch
  }), [store])
  
  return (
    <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>
  );
};
