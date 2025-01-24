import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
    { id: 4, name: "Hat", price: 15 },
    { id: 5, name: "Socks", price: 5 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        total={calculateTotal()}
      />
    </div>
  );
};

export default App;

