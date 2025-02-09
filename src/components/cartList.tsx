import { useCart } from '../hooks/cartState';
import CartItem from './cartItem';
import CartTotal from './cartTotal';

const CartList = () => {
  const { cartItems, handleQuantityChange } = useCart();

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={(amount) => handleQuantityChange(item.id, amount)}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default CartList;
