function Cart({ discountCode }) {
  return (
    <div className="text-gray-300 pt-50">
      <h2>🛒 Your Cart</h2>
      <p>
        Discount Code Applied: <strong>{discountCode}</strong>
      </p>
      <p>Total before discount: $100</p>
      <p>Total after discount: $90</p>
      <p>Total after discount: $90</p>
    </div>
  );
}

export default Cart;
