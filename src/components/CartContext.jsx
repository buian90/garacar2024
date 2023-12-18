// CartContext.js

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const increaseCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const contextValue = {
    cartCount,
    increaseCartCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
