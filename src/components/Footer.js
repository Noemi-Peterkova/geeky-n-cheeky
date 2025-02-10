// code for the website footer

import React from "react";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sign up for our newsletter</h3>
          <p>Be the first to know about our special offers, news, and updates.</p>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <p>
            <span className="icon">📷</span> geeky_n_cheeky
          </p>
          <p>
            <span className="icon">📧</span> geeky.nd.cheeky@gmail.com
          </p>
        </div>

        <div className="footer-section">
          <h3>About us</h3>
          <p>
            Geeky N’ Cheeky is a brand run by two friends with a focus on unique crafted designs and
            superior quality materials.
          </p>
          <p>
            The company was started in 2021 and began as a Twitch streaming service, and rebranded
            to focus on fashion.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © GEEKY N CHEEKY DESIGNS
      </div>
    </footer>
  );
};

export default Footer;