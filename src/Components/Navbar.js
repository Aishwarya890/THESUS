// import React, { useState, useContext } from 'react';
// import {
//   Navbar,
//   Nav,
//   Container,
//   Offcanvas,
//   Dropdown,
//   Button,
//   Badge,
//   Form,
//   FormControl,
//   Modal,
// } from 'react-bootstrap';
// import '../CSS/Navbar.css';
// import { GlobalContext } from "../Components/GlobalProvider";

// const BRAND_TAGLINE = 'Socially and Environmentally Progressive';

// const currencyList = [
//   { symbol: 'INR ₹', country: 'India' },
//   { symbol: 'AFN ؋', country: 'Afghanistan' },
//   { symbol: 'USD $', country: 'USA' },
//   { symbol: 'EUR €', country: 'Europe' },
// ];

// const navLinks = [
//   { name: 'Rain', path: '/rain' },
//   { name: 'Snow', path: '/snow', active: true },
//   { name: 'The Weekend Boot', path: '/weekend-boot' },
//   { name: 'Shop All', path: '/all' },
//   { name: 'Winter Sale', path: '/winter-sale' },
//   { name: 'Thesus™ Collaboration Hub', path: '/hub' },
// ];

// const MyNavbar = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   // Consume global context
//   const {
//     selectedCurrency,
//     changeCurrency,
//     cartItems,
//     updateCartItems,
//     searchQuery,
//     updateSearchQuery,
//   } = useContext(GlobalContext);

//   // Sample list of searchable items (replace or extend as needed)
//   const allSearchItems = [
//     "Thesus Gift Card",
//     "The Weekend Boot in Black",
//     "The Allegra Weekend Boot",
//     "Thesus - The Weekend Boot in Cuero",
//     "Thesus - The Marlin Weekend Boot",
//     "The Simone Weekend Boot",
//     "Accessories",
//     "Winter Sale",
//     // ...add more searchable items
//   ];

//   // Filter suggestions based on search query
//   const filteredSuggestions = allSearchItems.filter((item) =>
//     item.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Increase quantity and update global cart
//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     updateCartItems(updatedCart);
//   };

//   // Decrease quantity and update global cart
//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === id) {
//         const newQty = item.quantity > 1 ? item.quantity - 1 : 1;
//         return { ...item, quantity: newQty };
//       }
//       return item;
//     });
//     updateCartItems(updatedCart);
//   };

//   // Delete item from global cart
//   const deleteItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     updateCartItems(updatedCart);
//   };

//   // Helper function to parse the price string to a number.
//   const parsePrice = (priceString) => {
//     // Remove any non-numeric characters (except for the period and minus sign)
//     const numericString = priceString.replace(/[^0-9.-]+/g, '');
//     return parseFloat(numericString);
//   };

//   return (
//     <div style={{ margin: 0, padding: 0 }}>
//       {/* Fixed Header */}
//       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
//         {/* Top Bar */}
//         <div
//           style={{
//             backgroundColor: '#123026',
//             color: 'white',
//             textAlign: 'center',
//             padding: '5px 0',
//           }}
//         >
//           Free shipping in North America
//         </div>
//         {/* Main Navbar */}
//         <Navbar bg="white" expand="lg" className="border-bottom" style={{ minHeight: '70px' }}>
//           <Container fluid>
//             <Navbar.Brand href="/home" className="d-flex flex-column align-items-start">
//               <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#123026' }}>
//                 THESUS
//               </span>
//               <small style={{ fontSize: '0.75rem', color: '#444' }}>{BRAND_TAGLINE}</small>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
//             <Navbar.Offcanvas
//               id="offcanvasNavbar"
//               placement="end"
//               show={showOffcanvas}
//               onHide={() => setShowOffcanvas(false)}
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Menu</Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="me-auto flex-grow-1">
//                   {navLinks.map((link) => (
//                     <Nav.Link
//                       key={link.name}
//                       href={link.path}
//                       active={link.active}
//                       className={link.active ? 'text-danger' : ''}
//                     >
//                       {link.name}
//                     </Nav.Link>
//                   ))}
//                 </Nav>
//                 <div className="d-flex align-items-center mt-3">
//                   {/* Currency Selector */}
//                   <Dropdown className="me-3">
//                     <Dropdown.Toggle variant="outline-secondary" id="currency-dropdown">
//                       {selectedCurrency.symbol} | {selectedCurrency.country}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       {currencyList.map((c) => (
//                         <Dropdown.Item key={c.country} onClick={() => changeCurrency(c)}>
//                           {c.symbol} | {c.country}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                   {/* Search Icon */}
//                   <Button
//                     variant="outline-secondary"
//                     className="me-2"
//                     onClick={() => {
//                       setShowSearch(!showSearch);
//                       setShowOffcanvas(false);
//                     }}
//                   >
//                     🔍
//                   </Button>
//                   {/* User Icon */}
//                   <Button variant="outline-secondary" className="me-2" onClick={() => setLoginOpen(true)}>
//                     👤
//                   </Button>
//                   {/* Cart Icon */}
//                   <Button variant="outline-secondary" onClick={() => setCartOpen(true)}>
//                     🛒 {cartItems.length > 0 && <Badge bg="secondary">{cartItems.length}</Badge>}
//                   </Button>
//                 </div>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       </div>

//       {/* Margin for content below fixed header */}
//       <div style={{ marginTop: '160px' }}>
//         {showSearch && (
//           <div className="p-3 border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
//             <Form className="d-flex" style={{ position: "relative" }}>
//               <FormControl
//                 type="search"
//                 placeholder="Search..."
//                 className="me-2"
//                 value={searchQuery}
//                 onChange={(e) => updateSearchQuery(e.target.value)}
//                 autoFocus
//               />
//               <Button variant="outline-danger" onClick={() => setShowSearch(false)}>
//                 ✕
//               </Button>
//               {/* Search Suggestions */}
//               {searchQuery.length > 0 && (
//                 <div
//                   className="search-suggestions"
//                   style={{
//                     position: "absolute",
//                     top: "40px",
//                     left: 0,
//                     right: 0,
//                     background: "white",
//                     border: "1px solid #ddd",
//                     zIndex: 1000,
//                     maxHeight: "200px",
//                     overflowY: "auto",
//                   }}
//                 >
//                   {filteredSuggestions.length > 0 ? (
//                     filteredSuggestions.map((suggestion) => (
//                       <div
//                         key={suggestion}
//                         style={{
//                           padding: "5px 10px",
//                           cursor: "pointer",
//                           borderBottom: "1px solid #eee",
//                         }}
//                         onClick={() => {
//                           updateSearchQuery(suggestion);
//                           // You can also navigate to a search results page if needed
//                         }}
//                       >
//                         {suggestion}
//                       </div>
//                     ))
//                   ) : (
//                     <div style={{ padding: "5px 10px" }}>No suggestions found.</div>
//                   )}
//                 </div>
//               )}
//             </Form>
//           </div>
//         )}
//       </div>

//       {/* Login Modal */}
//       <Modal show={loginOpen} onHide={() => setLoginOpen(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="loginEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="loginPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//           </Form>
//           <a href="#" className="forgot-password d-block mb-3">
//             Forgot your password?
//           </a>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={() => setLoginOpen(false)}>
//             Sign in
//           </Button>
//           <Button variant="secondary" onClick={() => setLoginOpen(false)}>
//             Create account
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Cart Modal */}
//       <Modal show={cartOpen} onHide={() => setCartOpen(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Your Cart</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {cartItems.map((item) => {
//                 // Parse the price from the formatted price string and compute total price
//                 const unitPrice = parsePrice(item.price);
//                 const totalPrice = unitPrice * item.quantity;
//                 return (
//                   <li
//                     key={item.id}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       padding: "10px 0",
//                       borderBottom: "1px solid #ddd",
//                     }}
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                     />
//                     <div>
//                       <p style={{ margin: 0 }}>{item.name}</p>
//                       <p style={{ margin: 0 }}>
//                         {selectedCurrency.symbol}{totalPrice.toFixed(2)}
//                       </p>
//                       <div style={{ display: "flex", alignItems: "center" }}>
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           onClick={() => decreaseQuantity(item.id)}
//                         >
//                           -
//                         </Button>
//                         <span style={{ margin: "0 10px" }}>{item.quantity}</span>
//                         <Button
//                           variant="outline-secondary"
//                           size="sm"
//                           onClick={() => increaseQuantity(item.id)}
//                         >
//                           +
//                         </Button>
//                       </div>
//                     </div>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => deleteItem(item.id)}
//                     >
//                       Delete
//                     </Button>
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={() => setCartOpen(false)}>
//             <a
//               className="text-decoration-none"
//               href="/all"
//               style={{ color: "white" }}
//             >
//               Continue shopping
//             </a>
//           </Button>
//           <Button variant="secondary" onClick={() => setCartOpen(false)}>
//             Log in
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default MyNavbar;
import React, { useState, useContext } from 'react';
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
import '../CSS/Navbar.css';
import { GlobalContext } from "../Components/GlobalProvider";

const BRAND_TAGLINE = 'Socially and Environmentally Progressive';

const currencyList = [
  { symbol: 'INR ₹', country: 'India' },
  { symbol: 'AFN ؋', country: 'Afghanistan' },
  { symbol: 'USD $', country: 'USA' },
  { symbol: 'EUR €', country: 'Europe' },
];

const navLinks = [
  { name: 'Rain', path: '/rain' },
  { name: 'Snow', path: '/snow', active: true },
  { name: 'The Weekend Boot', path: '/weekend-boot' },
  { name: 'Shop All', path: '/all' },
  { name: 'Winter Sale', path: '/winter-sale' },
  { name: 'Thesus™ Collaboration Hub', path: '/hub' },
];

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Consume global context
  const {
    selectedCurrency,
    changeCurrency,
    cartItems,
    updateCartItems,
    searchQuery,
    updateSearchQuery,
  } = useContext(GlobalContext);

  // Sample list of searchable items
  const allSearchItems = [
    "Thesus Gift Card",
    "The Weekend Boot in Black",
    "The Allegra Weekend Boot",
    "Thesus - The Weekend Boot in Cuero",
    "Thesus - The Marlin Weekend Boot",
    "The Simone Weekend Boot",
    "Accessories",
    "Winter Sale",
  ];

  // Filter suggestions based on search query
  const filteredSuggestions = allSearchItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Increase quantity and update global cart
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartItems(updatedCart);
  };

  // Decrease quantity and update global cart
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity > 1 ? item.quantity - 1 : 1;
        return { ...item, quantity: newQty };
      }
      return item;
    });
    updateCartItems(updatedCart);
  };

  // Delete item from global cart
  const deleteItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCart);
  };

  // Helper function to parse the price string to a number (fallback if actualPrice is missing)
  const parsePrice = (priceString) => {
    const numericString = priceString.replace(/[^0-9.-]+/g, '');
    return parseFloat(numericString);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Fixed Header */}
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
            <Navbar.Brand href="/home" className="d-flex flex-column align-items-start">
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#123026' }}>
                THESUS
              </span>
              <small style={{ fontSize: '0.75rem', color: '#444' }}>{BRAND_TAGLINE}</small>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
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
                        <Dropdown.Item key={c.country} onClick={() => changeCurrency(c)}>
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
                  {/* User Icon */}
                  <Button variant="outline-secondary" className="me-2" onClick={() => setLoginOpen(true)}>
                    👤
                  </Button>
                  {/* Cart Icon */}
                  <Button variant="outline-secondary" onClick={() => setCartOpen(true)}>
                    🛒 {cartItems.length > 0 && <Badge bg="secondary">{cartItems.length}</Badge>}
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

      {/* Margin for content below fixed header */}
      <div style={{ marginTop: '160px' }}>
        {showSearch && (
          <div className="p-3 border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
            <Form className="d-flex" style={{ position: "relative" }}>
              <FormControl
                type="search"
                placeholder="Search..."
                className="me-2"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
                autoFocus
              />
              <Button variant="outline-danger" onClick={() => setShowSearch(false)}>
                ✕
              </Button>
              {/* Search Suggestions */}
              {searchQuery.length > 0 && (
                <div
                  className="search-suggestions"
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    right: 0,
                    background: "white",
                    border: "1px solid #ddd",
                    zIndex: 1000,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((suggestion) => (
                      <div
                        key={suggestion}
                        style={{
                          padding: "5px 10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                        }}
                        onClick={() => {
                          updateSearchQuery(suggestion);
                        }}
                      >
                        {suggestion}
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: "5px 10px" }}>No suggestions found.</div>
                  )}
                </div>
              )}
            </Form>
          </div>
        )}
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
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {cartItems.map((item) => {
                // Use the actualPrice if present, otherwise fall back to parsing the formatted price
                const unitPrice = item.actualPrice || parsePrice(item.price);
                const totalPrice = unitPrice * item.quantity;
                return (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      style={{ width: "100px", height: "100px", marginRight: "10px" }}
                    />
                    <div>
                      <p style={{ margin: 0 }}>{item.name}</p>
                      <p style={{ margin: 0 }}>
                        {selectedCurrency.symbol}{totalPrice.toFixed(2)}
                      </p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Button>
                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setCartOpen(false)}>
            <a
              className="text-decoration-none"
              href="/all"
              style={{ color: "white" }}
            >
              Continue shopping
            </a>
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
