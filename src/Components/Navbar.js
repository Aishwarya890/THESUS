
// import React, { useState } from "react";
// import "../CSS/Navbar.css";

// const Navbar = () => {
//   // State to toggle modals/popups
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [currencyOpen, setCurrencyOpen] = useState(false);

//   // Example currency list (scrollable)
//   const currencyList = [
//     { symbol: "INR ₹", country: "India" },
//     { symbol: "USD $", country: "USA" },
//     { symbol: "EUR €", country: "Europe" },
//     { symbol: "GBP £", country: "UK" },
//     { symbol: "AUD $", country: "Australia" },
//     { symbol: "AFN ؋", country: "Afghanistan" },
//     { symbol: "ALL L", country: "Albania" },
//     { symbol: "DZD د.ج", country: "Algeria" },
//     { symbol: "JPY ¥", country: "Japan" },
//     { symbol: "CNY ¥", country: "China" },
//     { symbol: "RUB ₽", country: "Russia" },
//     { symbol: "CAD $", country: "Canada" },
//     // Add more as needed...
//   ];

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="top-bar">Free shipping in North America</div>

//       {/* Navbar */}
//       <nav className="navbar">
//         {/* Logo */}
//         <div className="logo"><a href="/home">THESUS</a></div>
        

//         {/* Navigation Links */}
//         <div className="nav-links">
//           <a href="/rain">Rain</a>
//           <a href="/snow" className="active">Snow</a>
//           <a href="/weekend-boot">The Weekend Boot</a>
//           <a href="all">Shop All</a>
//           <a href="winter-sale">Winter Sale</a>
//           <a href="hub">Thesus™ Collaboration Hub</a>
//         </div>

//         {/* Right Icons */}
//         <div className="right-icons">
//           {/* Currency Selector */}
//           <div 
//             className="currency-selector" 
//             onClick={() => setCurrencyOpen(!currencyOpen)}
//           >
//             <span>INR ₹ | India ⬇️</span>
//             {currencyOpen && (
//               <ul className="currency-dropdown">
//                 {currencyList.map((item, idx) => (
//                   <li key={idx}>
//                     {item.symbol} | {item.country}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Search Icon */}
//           <button onClick={() => setSearchOpen(!searchOpen)}>🔍</button>

//           {/* Login Icon */}
//           <button onClick={() => setLoginOpen(true)}>👤</button>

//           {/* Cart Icon */}
//           <button onClick={() => setCartOpen(true)}>🛒</button>
//         </div>
//       </nav>

//       {/* Search Bar */}
//       {searchOpen && (
//         <div className="search-bar">
//           <input type="text" placeholder="Search" />
//           <button className="search-icon">🔍</button>
//           <button className="search-close" onClick={() => setSearchOpen(false)}>
//             ✕
//           </button>
//         </div>
//       )}

//       {/* Login Popup */}
//       {loginOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="modal-close" onClick={() => setLoginOpen(false)}>
//               ✕
//             </button>
//             <h2>Login</h2>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" placeholder="Password" />
//             </div>
//             <a href="#" className="forgot-password">Forgot your password?</a><br></br>
//             <button className="login-button">Sign in</button>
//             <p>
//               <a href="#">Create account</a>
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Cart Popup */}
//       {cartOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="modal-close" onClick={() => setCartOpen(false)}>
//               ✕
//             </button>
//             <h2>Your cart is empty</h2>
//             <button className="continue-button">Continue shopping</button>
//             <p>Have an account? <a href="#">Log in</a> to check out faster.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  // States for modals/popups and search functionality
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Currency list
  const currencyList = [
    { symbol: "INR ₹", country: "India" },
    { symbol: "USD $", country: "USA" },
    { symbol: "EUR €", country: "Europe" },
    { symbol: "GBP £", country: "UK" },
    { symbol: "AUD $", country: "Australia" },
    { symbol: "AFN ؋", country: "Afghanistan" },
    { symbol: "ALL L", country: "Albania" },
    { symbol: "DZD د.ج", country: "Algeria" },
    { symbol: "JPY ¥", country: "Japan" },
    { symbol: "CNY ¥", country: "China" },
    { symbol: "RUB ₽", country: "Russia" },
    { symbol: "CAD $", country: "Canada" },
  ];

  // Sample products for search suggestions
  const products = [
    { id: 1, name: "Rain Boots", price: 50 },
    { id: 2, name: "Snow Shoes", price: 80 },
    { id: 3, name: "Winter Jacket", price: 120 },
    { id: 4, name: "Weekend Boot", price: 100 },
    { id: 5, name: "Hiking Shoes", price: 90 },
  ];

  // Filter products based on search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add product to cart (you may enhance this later to avoid duplicates, etc.)
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setSearchTerm(""); // clear the search input
    setSearchOpen(false); // optionally close the search suggestions
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">Free shipping in North America</div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="/home">THESUS</a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="/rain">Rain</a>
          <a href="/snow" className="active">
            Snow
          </a>
          <a href="/weekend-boot">The Weekend Boot</a>
          <a href="/all">Shop All</a>
          <a href="/winter-sale">Winter Sale</a>
          <a href="/hub">Thesus™ Collaboration Hub</a>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          {/* Currency Selector */}
          <div
            className="currency-selector"
            onClick={() => setCurrencyOpen(!currencyOpen)}
          >
            <span>INR ₹ | India ⬇️</span>
            {currencyOpen && (
              <ul className="currency-dropdown">
                {currencyList.map((item, idx) => (
                  <li key={idx}>
                    {item.symbol} | {item.country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Icon */}
          <button onClick={() => setSearchOpen(!searchOpen)}>🔍</button>

          {/* Login Icon */}
          <button onClick={() => setLoginOpen(true)}>👤</button>

          {/* Cart Icon */}
          <button onClick={() => setCartOpen(true)}>
            🛒 {cartItems.length > 0 && <span>({cartItems.length})</span>}
          </button>
        </div>
      </nav>

      {/* Search Bar with Suggestions */}
      {searchOpen && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon" onClick={() => setSearchOpen(false)}>
            🔍
          </button>
          <button className="search-close" onClick={() => setSearchOpen(false)}>
            ✕
          </button>
          {/* Search Suggestions */}
          {searchTerm && (
            <ul className="search-results">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}{" "}
                    <button onClick={() => addToCart(product)}>Add</button>
                  </li>
                ))
              ) : (
                <li>No results found.</li>
              )}
            </ul>
          )}
        </div>
      )}

      {/* Login Popup */}
      {loginOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setLoginOpen(false)}>
              ✕
            </button>
            <h2>Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
            <br />
            <button className="login-button">Sign in</button>
            <p>
              <a href="#">Create account</a>
            </p>
          </div>
        </div>
      )}

      {/* Cart Popup */}
      {cartOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setCartOpen(false)}>
              ✕
            </button>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button className="continue-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
