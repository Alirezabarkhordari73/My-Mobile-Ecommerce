import { createContext, ReactNode, useContext, useState } from "react";

type CartContextState = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DefaultValue = {
  isCartOpen: false,
  setIsCartOpen: () => {},
};

const CartContext = createContext<CartContextState>(DefaultValue);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useStateCartContext = () => useContext(CartContext);
