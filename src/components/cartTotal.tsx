import { useCart } from '../hooks/cartState';

const CartSummary = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h3>구매 총액: {total.toLocaleString()} 원</h3>
    </div>
  );
};

export default CartSummary;
