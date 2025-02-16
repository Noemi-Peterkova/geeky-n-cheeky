//  Code for displaying individual products.

import React from 'react';

const ProductCard = ({ product }) => {
    if (!product) {
      return <p>No product data available</p>;
    }
  
    return (
      <div className="product-card">
        <img src={product.thumbnail_url || "placeholder.jpg"} alt={product.name || "Product"} />
        <h3>{product.name || "No Name Available"}</h3>
        <p>{product.retail_price ? `£${product.retail_price}` : "Price unavailable"}</p>
      </div>
    );
  };

export default ProductCard;