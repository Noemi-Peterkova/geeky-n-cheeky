// code for the website header

import React from "react";
import { FaBars, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; // Icons
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Importing the CSS file for styling

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/Logo.png" alt="Geeky N Cheeky Logo" />
        </Link>
      </div>
      <nav className="navbar-links">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/products" className="navbar-item">Products</Link>
      </nav>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
          <FaBars />
        </button>
      </div>
      <div className="navbar-icons">
        <Link to="/wishlist" className="icon">
          <FaHeart />
        </Link>
        <Link to="/cart" className="icon">
          <FaShoppingCart />
        </Link>
        <Link to="/profile" className="icon">
          <FaUser />
        </Link>
        <button className="hamburger-menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;