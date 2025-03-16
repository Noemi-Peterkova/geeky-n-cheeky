import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import "../styles/ProductCatalogue.css";

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  // Example categories (adjust based on your real data)
  const categories = ["Tops", "Bottoms", "Accessories", "Miscellaneous"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (category) => {
    const newFilters = activeFilters.includes(category)
      ? activeFilters.filter((c) => c !== category)
      : [...activeFilters, category];

    setActiveFilters(newFilters);

    if (newFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        newFilters.some((filter) => product.name.toLowerCase().includes(filter.toLowerCase()))
      );
      setFilteredProducts(filtered);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setFilteredProducts(products);
  };

  return (
    <div className="catalogue-container">
      <aside className="filters-sidebar">
        <h3>Filters <button onClick={clearFilters} className="clear-filters">Clear filters</button></h3>
        <div className="filter-group">
          <strong>Categories</strong>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={activeFilters.includes(category)}
                onChange={() => handleFilterChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </aside>

      <main className="products-main">
        <div className="products-header">
          <span>Sort by: <strong>Popular ▼</strong></span>
          <span>{filteredProducts.length} products</span>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="load-more">Load more</button>
      </main>
    </div>
  );
};

export default ProductCatalogue;
