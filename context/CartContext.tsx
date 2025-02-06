import { CartItem } from '@/constants/Types';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  increaseCartItemQuantity: (productId: number) => void;
  decreaseCartItemQuantity: (productId: number) => void;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
});

import { ReactNode } from 'react';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (plantId: number) => {
    setCart(cart.filter((plant) => plant.id !== plantId));
  };

  const increaseCartItemQuantity = (plantId: number) => {
    setCart(
      cart.map((plant) =>
        plant.id === plantId
          ? { ...plant, quantity: plant.quantity + 1 }
          : plant
      )
    );
  };

  const decreaseCartItemQuantity = (plantId: number) => {
    setCart(
      cart.map((plant) =>
        plant.id === plantId
          ? { ...plant, quantity: plant.quantity - 1 }
          : plant
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
