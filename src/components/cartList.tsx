import CartItem from './cartItem';
import { useCart } from '../hooks/cartState';

const CartList: React.FC = () => {
  const { cartItems, updateQuantity } = useCart();

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={(amount) => updateQuantity(item.id, amount)}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default CartList;
