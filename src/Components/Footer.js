import React from "react";

import "../CSS/Footer.css";
import visaIcon from "../images/visa.png";
import mastercardIcon from "../images/mastercard.png";
import paypalIcon from "../images/paypal.png";
import discoverIcon from "../images/discover.png";
import gpayIcon from "../images/gpay.png";
import shopIcon from "../images/shop.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Top section with brand and links */}
      <div className="footer-top">
        <div className="footer-brand">
          <h2>THESUS</h2>
          <p>Socially and environmentally progressive outdoor footwear</p>
        </div>

        <div className="footer-links">
          {/* Our Shop */}
          <div>
            <h4>Our Shop</h4>
            <ul>
              <li>All Products</li>
              <li>The Anyday Rain Boot™</li>
              <li>The Modern Winter Boot™</li>
              <li>The Winter Weekend Boot™ Z</li>
              <li>The Thesus™ Clog</li>
              <li>Accessories</li>
              <li>Thesus™ Gift Card</li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h4>Help</h4>
            <ul>
              <li>Size guide</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Wear and Care FAQ</li>
            </ul>
          </div>
          {/* About us */}
          <div>
            <h4>About us</h4>
            <ul>
              <li>Values</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section with payment icons and disclaimers */}
      <div className="footer-bottom">
        <div className="payment-icons">
          <img src={visaIcon} alt="Visa" />
          <img src={mastercardIcon} alt="Mastercard" />
          <img src={paypalIcon} alt="PayPal" />
          <img src={discoverIcon} alt="Discover" />
          <img src={gpayIcon} alt="Google Pay" />
          <img src={shopIcon} alt="Shop Pay" />
        </div>

        <p>© 2025, Thesus™ Outdoors Powered by Shopify</p>
        <p>Refund policy • Privacy policy • Terms of service • Shipping policy • Contact information</p>
      </div>
    </footer>
  );
};

export default Footer;
