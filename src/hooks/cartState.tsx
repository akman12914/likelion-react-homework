import { useState, useEffect } from 'react';
import { CartItemType } from '../types/cartItemtype';
import data from '../data/cartItem.json';
export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(data);

  // 수량 변경 함수
  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
          : item
      )
    );
  };

  return { cartItems, handleQuantityChange };
};

export default useCart;
