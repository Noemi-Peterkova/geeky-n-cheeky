//  Code for displaying individual products.

import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart, onAddToWishlist, onDelete }) => {
  if (!product) {
    return <p>No product data available</p>;
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail_url || "placeholder.jpg"}
          alt={product.name || "Product"}
        />
      </div>
      <h3 className="product-name">{product.name || "No Name Available"}</h3>
      <p className="product-price">
        {product.retail_price ? `£${product.retail_price}` : "Price unavailable"}
      </p>
      <div className="product-actions">
        <button className="btn cart-btn" onClick={() => onAddToCart(product)}>
          🛒 Add to Cart
        </button>
        <button className="btn wishlist-btn" onClick={() => onAddToWishlist(product)}>
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
