import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/CartPage";
import Home from "./pages/HomePage";
import Products from "./pages/ProductCatalogue";
import Profile from "./pages/ProfilePage";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;