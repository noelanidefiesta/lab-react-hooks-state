import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onBuyNow }) {
  const isOutOfStock = product.status === "Out of Stock";

  return (
    <div className={isOutOfStock ? "outOfStockClass" : "card"}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Status: {product.status}</p>
      <button onClick={() => onBuyNow(product)} disabled={isOutOfStock}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;

