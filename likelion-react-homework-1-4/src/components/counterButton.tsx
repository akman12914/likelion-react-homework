interface ButtonProps {
  onDecrement: () => void;
  onIncrement: () => void;
  quantity: number;
}

const Button = ({ onDecrement, onIncrement, quantity }: ButtonProps) => {
  return (
    <div className="flex items-center space-x-3 border border-gray-300 bg-gray-100 rounded-full text-gray-700 min-w-8 h-8 ml-auto">
      {/* 감소 버튼 */}
      <button className="px-1 text-xl" onClick={onDecrement}>
        -
      </button>
      {/* 수량 표시 */}
      <span className="text-xl">{quantity}</span>
      {/* 증가 버튼 */}
      <button className="px-1 text-xl" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Button;
