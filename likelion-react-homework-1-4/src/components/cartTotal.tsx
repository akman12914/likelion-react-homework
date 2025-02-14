interface CartTotalProps {
  total: number;
}

const CartTotal = ({ total }: CartTotalProps) => {
  // 총액 계산

  return (
    <div className="total">
      <p className="font-bold">총액: {total}원</p>
    </div>
  );
};

export default CartTotal;
