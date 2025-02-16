// Code for the homepage (e.g., banner, featured products).

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import "../styles/Homepage.css";


const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const text = await response.text(); // Get raw response for debugging
        console.log("Raw Response:", text);
  
        // Check if response is valid JSON
        try {
          const data = JSON.parse(text); 
          console.log("Fetched Products:", data);
          setProducts(data.result || data); // Adjust based on API response structure
        } catch (jsonError) {
          console.error("JSON Parsing Error:", jsonError);
        }
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
      <div>
          <h1>Featured Products</h1>
          <div className="product-grid">
              {products.map(product => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </div>
  );
};

export default HomePage;