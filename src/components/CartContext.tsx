import { CartContextType, Item, CartItem } from "../types/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    const duplicatedItem = cart.find((tempItem) => item.id === tempItem.id);
    duplicatedItem
      ? increaseQuantity(duplicatedItem)
      : setCart((prevCart) => [
          ...prevCart,
          {
            ...item,
            quantity: 1,
          },
        ]);
  };

  const increaseQuantity = (cartItem: CartItem) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        const updatedCartItem =
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item };
        return updatedCartItem;
      });
    });
  };

  const decreaseQuantity = (cartItem: CartItem) => {
    setCart((prevCart) =>
      prevCart
        .filter((item) => item.id !== cartItem.id || item.quantity > 1)
        .map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
