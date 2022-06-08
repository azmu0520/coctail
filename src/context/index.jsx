import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';
export const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
