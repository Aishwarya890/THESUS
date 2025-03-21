
// import React, { createContext, useState } from 'react';

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   // Global state for currency, cart, and search
//   const [selectedCurrency, setSelectedCurrency] = useState({
//     symbol: 'AFN ؋',
//     country: 'Afghanistan',
//   });
//   const [cartItems, setCartItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Functions to update the global states
//   const changeCurrency = (currency) => {
//     setSelectedCurrency(currency);
//   };

//   const addToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//   };

//   const updateSearchQuery = (query) => {
//     setSearchQuery(query);
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         selectedCurrency,
//         changeCurrency,
//         cartItems,
//         addToCart,
//         searchQuery,
//         updateSearchQuery,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
// GlobalProvider.js
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState({
    symbol: 'AFN ؋',
    country: 'Afghanistan',
  });
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const changeCurrency = (currency) => setSelectedCurrency(currency);

  // Add item to cart – when adding, store the unitPrice (as a number) and quantity (starting at 1)
  const addToCart = (item) => {
    // Convert item.price (assumed to be a formatted string like "Rs. 15,900.00") to a number
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    console.log("unit",numericPrice);
    // Create a new item with quantity and unitPrice
    const newItem = { ...item, quantity: 1, unitPrice: numericPrice };
    setCartItems((prev) => [...prev, newItem]);
  };

  // Expose a function to update cart items
  const updateCartItems = (newCartItems) => setCartItems(newCartItems);

  const updateSearchQuery = (query) => setSearchQuery(query);

  const contextValue = React.useMemo(() => ({
    selectedCurrency,
    changeCurrency,
    cartItems,
    addToCart,
    updateCartItems,
    searchQuery,
    updateSearchQuery,
  }), [selectedCurrency, cartItems, searchQuery]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
