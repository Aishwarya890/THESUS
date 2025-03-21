import React from "react";
import { FaInstagram, FaFacebook, FaPinterest, FaTiktok } from "react-icons/fa";
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
          <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
        </div>

        <div className="footer-links">
          {/* Our Shop */}
          <div>
            <h4>Our Shop</h4>
            <ul>
              <li><a href="/all">All Products</a></li>
              <li><a href="/rain">The Anyday Rain Boot™</a></li>
              <li><a href="/rain">The Modern Winter Boot™</a></li>
              <li><a href="/the-weekend-boto-z">The Winter Weekend Boot™ Z</a></li>
              <li><a href="/sun">The Thesus™ Clog</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/thesus-gift-card">Thesus™ Gift Card</a></li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="/size-guide">Size guide</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/wear-and-care">Wear and Care FAQ</a></li>
            </ul>
          </div>
          {/* About us */}
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="/values">Values</a></li>
              <li><a href="/contact">Contact Us</a></li>
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
