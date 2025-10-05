function Cart({ discountCode }) {
  return (
    <div>
      <h2>🛒 Your Cart</h2>
      <p>
        Discount Code Applied: <strong>{discountCode}</strong>
      </p>
      <p>Total before discount: $100</p>
      <p>Total after discount: $90</p>
    </div>
  );
}

export default Cart;
