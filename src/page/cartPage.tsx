import CartList from '../components/cartList';
import CartTotal from '../components/cartTotal';

const CartPage: React.FC = () => {
  return (
    <div className="cart-container p-10 border-6 rounded-3xl border-gray-700 min-w-110">
      <h2>장바구니</h2>
      <CartList />
      <CartTotal />
    </div>
  );
};

export default CartPage;
