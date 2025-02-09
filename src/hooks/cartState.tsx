import { useState } from 'react';
import { CartItemType } from '../types/cartItemtype';
import data from '../data/cartItem.json';
export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(data);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
          : item
      )
    );
  };

  return { cartItems, updateQuantity };
};
