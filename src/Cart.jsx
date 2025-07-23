function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart: {cartItems.length} items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} – ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
