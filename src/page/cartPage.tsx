import CartList from '../components/cartList';
import CartTotal from '../components/cartTotal';

const CartPage: React.FC = () => {
  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <CartList />
      <CartTotal />
    </div>
  );
};

export default CartPage;
