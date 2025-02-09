import { CartItemType } from '../types/cartItemtype';
import Button from './counterButton';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (amount: number) => void;
  image: string;
}

const CartItem = ({ item, image, onQuantityChange }: CartItemProps) => {
  return (
    <li>
      <div className="flex items-center">
        <img src={image} alt={item.name} className="rounded-full w-24" />
        <div className="product-info py-7 px-3">
          <h4>{item.name}</h4>
          <p className="font-bold">{item.price}원</p>
        </div>
        <Button
          onDecrement={() => onQuantityChange(-1)}
          onIncrement={() => onQuantityChange(1)}
          quantity={item.quantity}
        />
      </div>
    </li>
  );
};

export default CartItem;
