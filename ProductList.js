import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>
      {/*list of products*/}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
