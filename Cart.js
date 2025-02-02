import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity, total }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                {/* the remove button when we want to remove an item from the cart*/}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
