// import React from "react";
// import "../CSS/SnowPage.css"; // Ensure styles match the design
// import image1 from "../images/boot1.png"; // Example image for default view
// import image2 from "../images/Thesus_giftcard.jpg"; // Example image for hover view
// import boot2 from "../images/boot2.png";

// const products = [
//   {
//     id: 1,
//     name: "The Weekend Boot Z in Grey",
//     oldPrice: "Rs. 22,100.00",
//     price: "Rs. 15,900.00",
//     imgSrc: image2,
//      // Hover image (different from default)
//     tag: "Sale",
//   },
//   {
//     id: 2,
//     name: "The Weekend Boot Z in Black",
//     oldPrice: "Rs. 22,100.00",
//     price: "Rs. 18,000.00",
//     imgSrc: image1,
//     hoverImgSrc: boot2, // Swap images on hover
//     tag: "Sale",
//   },
//   {
//     id: 3,
//     name: "The Modern Winter Boot in Beige",
//     oldPrice: "Rs. 27,500.00",
//     price: "Rs. 24,400.00",
//     imgSrc: boot2,
//     hoverImgSrc: image1,
//     tag: "Sold out",
//   },
//   {
//     id: 4,
//     name: "The Modern Winter Boot in Beige",
//     oldPrice: "Rs. 27,500.00",
//     price: "Rs. 24,400.00",
//     imgSrc: image1,
//     hoverImgSrc: boot2,
//     tag: "Sold out",
//   },
//   {
//     id: 5,
//     name: "The Modern Winter Boot in Beige",
//     oldPrice: "Rs. 27,500.00",
//     price: "Rs. 24,400.00",
//     imgSrc: boot2,
//     hoverImgSrc: image1,
//     tag: "Sold out",
//   },
//   {
//     id: 6,
//     name: "The Modern Winter Boot in Beige",
//     oldPrice: "Rs. 27,500.00",
//     price: "Rs. 24,400.00",
//     imgSrc: image1,
//     hoverImgSrc: boot2,
//     tag: "Sold out",
//   },
//   {
//     id: 7,
//     name: "The Modern Winter Boot in Beige",
//     oldPrice: "Rs. 27,500.00",
//     price: "Rs. 24,400.00",
//     imgSrc: boot2,
//     hoverImgSrc: image1,
//     tag: "Sold out",
//   },
// ];

// const SnowPage = () => {
//   return (
//     <div className="snow-container">
//       <h2>Snow</h2>
//       <div className="filter-sort">
//         <span>
//           Filter: <select><option>Size</option></select>
//         </span>
//         <span>
//           Sort by: <select><option>Featured</option></select>
//         </span>
//         <span>5 products</span>
//       </div>

//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="image-wrapper">
//               <img
//                 className="front-img"
//                 src={product.imgSrc}
//                 alt={product.name}
//               />
//               <img
//                 className="hover-img"
//                 src={product.hoverImgSrc || product.imgSrc}
//                 alt={`${product.name} hover`}
//               />
//             </div>
//             <p>{product.name}</p>
//             <p className="old-price">{product.oldPrice}</p>
//             <p className="new-price">{product.price}</p>
//             <span
//               className={`tag ${product.tag === "Sale" ? "sale" : "sold-out"}`}
//             >
//               {product.tag}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SnowPage;
import React, { useState } from "react";
import "../CSS/SnowPage.css";
import image1 from "../images/boot1.png";
import image2 from "../images/Thesus_giftcard.jpg";
import boot2 from "../images/boot2.png";

// Example data
const products = [
  {
    id: 1,
    name: "The Weekend Boot Z in Grey",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 15,900.00",
    imgSrc: image2,
    tag: "Sale",
  },
  {
    id: 2,
    name: "The Weekend Boot Z in Black",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 18,000.00",
    imgSrc: image1,
    hoverImgSrc: boot2,
    tag: "Sale",
  },
  {
         id: 3,
        name: "The Modern Winter Boot in Beige",
    
        oldPrice: "Rs. 27,500.00",
         price: "Rs. 24,400.00",
         imgSrc: boot2,
         hoverImgSrc: image1,
         tag: "Sold out",
       },
       {
         id: 4,
         name: "The Modern Winter Boot in Beige",
         oldPrice: "Rs. 27,500.00",
         price: "Rs. 24,400.00",
         imgSrc: image1,
         hoverImgSrc: boot2,
         tag: "Sold out",
       },
       {
         id: 5,
         name: "The Modern Winter Boot in Beige",
         oldPrice: "Rs. 27,500.00",
         price: "Rs. 24,400.00",
         imgSrc: boot2,
         hoverImgSrc: image1,
         tag: "Sold out",
       },
       {
         id: 6,
         name: "The Modern Winter Boot in Beige",
         oldPrice: "Rs. 27,500.00",
         price: "Rs. 24,400.00",
         imgSrc: image1,
         hoverImgSrc: boot2,
         tag: "Sold out",
       },
       {
        id: 7,
        name: "The Modern Winter Boot in Beige",
         oldPrice: "Rs. 27,500.00",
         price: "Rs. 24,400.00",
         imgSrc: boot2,
         hoverImgSrc: image1,
        tag: "Sold out",
       }
  // ... more product data
];

// Example sizes with product counts
const allSizes = [
  { size: 36, count: 4 },
  { size: 37, count: 4 },
  { size: 38, count: 4 },
  { size: 39, count: 4 },
  { size: 40, count: 4 },
  { size: 41, count: 4 },
  { size: 42, count: 4 },
  { size: 43, count: 2 },
  { size: 44, count: 2 },
  { size: 45, count: 2 },
  { size: 46, count: 2 },
];

const SnowPage = () => {
  // State to track open/close of the size dropdown
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  // State for which sizes are currently selected
  const [selectedSizes, setSelectedSizes] = useState([]);
  // State for selected sort option
  const [sortOption, setSortOption] = useState("Featured");

  // Toggle the size dropdown
  const toggleSizeDropdown = () => {
    setIsSizeOpen((prev) => !prev);
  };

  // Handle checkbox changes for sizes
  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      // Remove if already selected
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      // Add new size
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Reset all selected sizes
  const resetSizes = () => {
    setSelectedSizes([]);
  };

  // Update sort option
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="snow-container">
      <h1>Snow</h1><br></br>

      {/* Filter & Sort Section */}
      <div className="filter-sort">
        {/* Size Filter */}
        <div className="size-filter">
          <label>Filter:</label>
          <div className="size-dropdown">
            <button onClick={toggleSizeDropdown}>
              Size ▼
            </button>
            {isSizeOpen && (
              <div className="size-dropdown-content">
                {/* Header with 'X selected' & 'Reset' */}
                <div className="size-dropdown-header">
                  <span>{selectedSizes.length} selected</span>
                  <button onClick={resetSizes}>Reset</button>
                </div>
                <ul>
                  {allSizes.map(({ size, count }) => (
                    <li key={size}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeChange(size)}
                        />
                        {size} ({count})
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sort By */}
        <div className="sort-by">
          <label>Sort by: </label>
          <select value={sortOption} onChange={handleSortChange}>
            <option>Featured</option>
            <option>Best selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Date, old to new</option>
            <option>Date, new to old</option>
          </select>
        </div>

        <span>{products.length} products</span>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => {
          // Optional: Filter or sort your products here based on selectedSizes or sortOption
          return (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img className="front-img" src={product.imgSrc} alt={product.name} />
                {product.hoverImgSrc && (
                  <img
                    className="hover-img"
                    src={product.hoverImgSrc}
                    alt={`${product.name} hover`}
                  />
                )}
              </div>
              <p>{product.name}</p>
              <p className="old-price">{product.oldPrice}</p>
              <p className="new-price">{product.price}</p>
              <span className={`tag ${product.tag === "Sale" ? "sale" : "sold-out"}`}>
                {product.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SnowPage;
