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

   // Splitting products into two groups (first half and second half for simplicity)
   const featuredProducts = products.slice(0, 5); // Max 5 products
   const collectionProducts = products.slice(5, 11); // Next 6 products
 
   return (
     <div className="homepage">
       <img src="/assets/Banner.jpg" alt="Banner" className="homepage-banner" />
       {/* New Designs Section */}
       <section className="homepage-section">
         <h2 className="section-title">✨ New designs!</h2>
         <p className="section-subtitle">Browse our latest items here!</p>
         <div className="product-scroll-container">
           {featuredProducts.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
         <button className="view-more-btn">See more</button>
       </section>
 
       {/* Browse our Collection Section */}
       <section className="homepage-section collection-section">
         <h2 className="section-title">Browse our collection</h2>
         <p className="section-subtitle">Take a look at our best-sellers</p>
         <div className="product-scroll-container">
           {collectionProducts.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
         <button className="view-more-btn">View all here</button>
       </section>
     </div>
   );
 };

export default HomePage;