
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
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Dropdown,
  Button,
  Badge,
  Form,
  FormControl,
  Modal,
} from 'react-bootstrap';
import '../CSS/Navbar.css'; // Ensure your custom CSS is imported

// Sample brand tagline (optional)
const BRAND_TAGLINE = 'Socially and Environmentally Progressive';

// Example currency list
const currencyList = [
  { symbol: 'INR ₹', country: 'India' },
  { symbol: 'AFN ؋', country: 'Afghanistan' },
  { symbol: 'USD $', country: 'USA' },
  { symbol: 'EUR €', country: 'Europe' },
];

// Example nav links
const navLinks = [
  { name: 'Rain', path: '/rain' },
  { name: 'Snow', path: '/snow', active: true },
  { name: 'The Weekend Boot', path: '/weekend-boot' },
  { name: 'Shop All', path: '/all' },
  { name: 'Winter Sale', path: '/winter-sale' },
  { name: 'Thesus™ Collaboration Hub', path: '/hub' },
];

const MyNavbar = () => {
  // States for currency selection, cart items, offcanvas, search, login, cart
  const [selectedCurrency, setSelectedCurrency] = useState({
    symbol: 'AFN ؋',
    country: 'Afghanistan',
  });
  const [cartItems, setCartItems] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Search
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Login & Cart modals
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Sample "Add to cart" for demonstration
  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, { id: Date.now(), name: 'Demo Product' }]);
  };

  // Currency dropdown selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Fixed Header: Top Bar + Navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
        {/* Top Bar */}
        <div
          style={{
            backgroundColor: '#123026',
            color: 'white',
            textAlign: 'center',
            padding: '5px 0',
          }}
        >
          Free shipping in North America
        </div>

        {/* Main Navbar */}
        <Navbar bg="white" expand="lg" className="border-bottom" style={{ minHeight: '70px' }}>
          <Container fluid>
            {/* Brand Section */}
            <Navbar.Brand href="/home" className="d-flex flex-column align-items-start">
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#123026' }}>
                THESUS
              </span>
              <small style={{ fontSize: '0.75rem', color: '#444' }}>
                {BRAND_TAGLINE}
              </small>
            </Navbar.Brand>

            {/* Toggle (hamburger) for mobile */}
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={() => setShowOffcanvas(true)}
            />

            {/* Offcanvas for mobile menu */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* Nav Links */}
                <Nav className="me-auto flex-grow-1">
                  {navLinks.map((link) => (
                    <Nav.Link
                      key={link.name}
                      href={link.path}
                      active={link.active}
                      className={link.active ? 'text-danger' : ''}
                    >
                      {link.name}
                    </Nav.Link>
                  ))}
                </Nav>
                <div className="d-flex align-items-center mt-3">
                  {/* Currency Selector */}
                  <Dropdown className="me-3">
                    <Dropdown.Toggle variant="outline-secondary" id="currency-dropdown">
                      {selectedCurrency.symbol} | {selectedCurrency.country}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {currencyList.map((c) => (
                        <Dropdown.Item
                          key={c.country}
                          onClick={() => handleCurrencySelect(c)}
                        >
                          {c.symbol} | {c.country}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Search Icon */}
                  <Button
                    variant="outline-secondary"
                    className="me-2"
                    onClick={() => {
                      setShowSearch(!showSearch);
                      setShowOffcanvas(false);
                    }}
                  >
                    🔍
                  </Button>

                  {/* User Icon (Login) */}
                  <Button
                    variant="outline-secondary"
                    className="me-2"
                    onClick={() => setLoginOpen(true)}
                  >
                    👤
                  </Button>

                  {/* Cart Icon with Badge */}
                  <Button variant="outline-secondary" onClick={() => setCartOpen(true)}>
                    🛒 {cartItems.length > 0 && <Badge bg="secondary">{cartItems.length}</Badge>}
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

      {/* Add top margin for the rest of the page content */}
      <div style={{ marginTop: '120px' }}>
        {/* Search Overlay (optional) */}
        {showSearch && (
          <div className="p-3 border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search..."
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button variant="outline-danger" onClick={() => setShowSearch(false)}>
                ✕
              </Button>
            </Form>
          </div>
        )}

        {/* Main Page Content */}
        
      </div>

      {/* Login Modal */}
      <Modal show={loginOpen} onHide={() => setLoginOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <a href="#" className="forgot-password d-block mb-3">
            Forgot your password?
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setLoginOpen(false)}>
            Sign in
          </Button>
          <Button variant="secondary" onClick={() => setLoginOpen(false)}>
            Create account
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Cart Modal */}
      <Modal show={cartOpen} onHide={() => setCartOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setCartOpen(false)}>
            Continue shopping
          </Button>
          <Button variant="secondary" onClick={() => setCartOpen(false)}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyNavbar;







