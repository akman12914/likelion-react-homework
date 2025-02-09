import { CartItemType } from '../types/cartItemtype';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (amount: number) => void;
  image: string;
}

const CartItem = ({ item, image, onQuantityChange }: CartItemProps) => {
  return (
    <li>
      <div>
        <img src={image} alt={item.name} className="rounded-full w-24" />
        <h4>{item.name}</h4>
        <p>{item.price}원</p>
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onQuantityChange(1)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
