import { createContext } from 'react';

export const ShopContext = createContext(null);


export const ShopContextProvider = ({children}) => {
  return (
    <ShopContext.Provider> {children} </ShopContext.Provider>
  )
}
