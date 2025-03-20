import React from "react";
import "../CSS/Navbar.css"; 
import "../CSS/Footer.css"; 

const RainPage = () => {
  const giftCardImageUrl = "/Thesus_giftcard.jpg"; // Ensure the image is in /public or /assets

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <h1>Waterproof. City Essential. Unisex.</h1>
          <p>The Anyday Rain Boot</p>
        </div>
        <button className="gift-btn">Give your friends a gift!</button>
      </div>

      {/* Sorting Section */}
      <div className="sorting-section">
        <p>1 product</p>
        <div>
          <label>Sort by:</label>
          <select>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Gift Card Section */}
      <div className="gift-card-container">
        <img
          src={giftCardImageUrl}
          alt="Thesus Gift Card"
          className="gift-card-image"
        />
        <h3 className="gift-card-title">Thesus Gift Card</h3>
        <p className="gift-card-price">From Rs. 5,296.73</p>
      </div>
    </div>
  );
};

export default RainPage;
