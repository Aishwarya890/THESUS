
// import React, { useState } from "react";
// import bootImage from "../images/all-season-sustainable-boots.jpg";
// import giftCard from "../images/Thesus_giftcard.jpg";
// import image1 from "../images/Image1.jpg";
// import image2 from "../images/Image2.jpg";
// import image3 from "../images/image 3.jpg";
// import image4 from "../images/image 4.jpg";
// import image5 from "../images/image5.jpg";
// import image6 from "../images/image6.jpg";
// import image7 from "../images/image 7.jpg";
// import image8 from "../images/image8.jpg";
// import image9 from "../images/image 9.jpg";
// import image10 from "../images/image 10.jpg";
// import image11 from "../images/image 11.jpg";
// import image13 from "../images/image 13.jpg";
// import image14 from "../images/image 14.jpg";
// import image15 from "../images/image 15.jpg";
// import image16 from "../images/image 16.jpg";
// import image17 from "../images/image 17.jpg";
// import image18 from "../images/image 18.jpg";
// import image19 from "../images/Image 19.jpg";
// import image20 from "../images/Image 20.jpg";
// import image21 from "../images/image 21.jpg";
// import image22 from "../images/image 22.jpg";
// import image23 from "../images/image 23.jpg";
// import image24 from "../images/image 24.jpg";
// import image25 from "../images/image 25.jpg";
// import image26 from "../images/image 26.jpg";
// import image29 from "../images/image 29.jpg";
// import image30 from "../images/image30.jpg";
// import image31 from "../images/image31.jpg"; // New image
// import image32 from "../images/image32.jpg"; // New hover image
// import image33 from "../images/image33.jpg"; // New product image
// import image34 from "../images/image34.jpg"; // New hover image for the product

// const products = [
//     {
//         id: 1,
//         name: "Thesus Gift Card",
//         oldPrice: "Rs. 22,100.00",
//         price: "Rs. 15,900.00",
//         imgSrc: giftCard,
//         tag: "Sale",
//         sizes: ["36", "37", "38"],
//     },
//     {
//         id: 2,
//         name: "The Weekend Boot Z in Grey",
//         oldPrice: "Rs. 22,100.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image17,
//         hoverImg: image18,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 3,
//         name: "The Allegra Weekend Boot",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image1,
//         hoverImg: image2,
//         tag: "Sale",
//         sizes: ["39", "40", "41"],
//     },
//     {
//         id: 4,
//         name: "The Weekend Boot in Black",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image3,
//         hoverImg: image4,
//         tag: "Sale",
//         sizes: ["42", "43", "44"],
//     },
//     {
//         id: 5,
//         name: "The Weekend Boot in Sage",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image5,
//         hoverImg: image6,
//         tag: "Sale",
//         sizes: ["42", "43", "44"],
//     },
//     {
//         id: 6,
//         name: "The Weekend Boot Beige",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image7,
//         hoverImg: image6,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 7,
//         name: "The Weekend Boot Classic Black",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 10,600.00",
//         imgSrc: image8,
//         hoverImg: image9,
//         tag: "Sold out",
//         sizes: [], // No sizes available
//     },
//     {
//         id: 8,
//         name: "The Simone Weekend Boot",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00",
//         imgSrc: image10,
//         hoverImg: image11,
//         tag: "Sold out",
//         sizes: [], // No sizes available
//     },
//     {
//         id: 9,
//         name: "The Weekend Boot Classic Sage",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 11,700.00",
//         imgSrc: image13,
//         hoverImg: image14,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 10,
//         name: "The Weekend Boot Z in Black",
//         oldPrice: "Rs. 22,100.00",
//         price: "Rs. 18,000.00",
//         imgSrc: image15,
//         hoverImg: image16,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 11,
//         name: "Thesus - The Weekend Boot in Cuero",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 12,700.00",
//         imgSrc: image21,
//         hoverImg: image22,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 12,
//         name: "Thesus - The Marlin Weekend Boot",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00", // Optional: Add sale price if applicable
//         imgSrc: image23,
//         hoverImg: image24,
//         tag: "Sold out",
//         sizes: [], // No sizes available
//     },
//     {
//         id: 13,
//         name: "Thesus - The Weekend Boot in Navy",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 12,700.00",
//         imgSrc: image25,
//         hoverImg: image26,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 14,
//         name: "The Weekend Boot New Classic Brown",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 12,700.00",
//         imgSrc: image29,
//         hoverImg: image30,
//         tag: "Sale",
//         sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
//     },
//     {
//         id: 15,
//         name: "The Scarlet Weekend Boot",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 15,900.00", // Optional: Add sale price if applicable
//         imgSrc: image31,
//         hoverImg: image32,
//         tag: "Sold out",
//         sizes: [], // No sizes available
//     },
//     {
//         id: 16,
//         name: "The Farrah Weekend Boot",
//         oldPrice: "Rs. 21,000.00",
//         price: "Rs. 21,000.00",
//         imgSrc: image33,
//         hoverImg: image34,
//         tag: "Sold out",
//         sizes: [], // No sizes available
//     },
// ];

// const getUniqueSizes = (products) => {
//     const allSizes = products.flatMap(product => product.sizes);
//     return [...new Set(allSizes)];
// };

// const sortOptions = [
//     "Featured",
//     "Best Selling",
//     "Alphabetically A-Z",
//     "Alphabetically Z-A",
//     "Price: High to Low",
//     "Price: Low to High",
//     "Date: Old to New",
//     "Date: New to Old",
// ];

// const WeekendBoot = () => {
//     const [hovered, setHovered] = useState(null);
//     const [selectedSize, setSelectedSize] = useState("");
//     const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

//     const filteredProducts = selectedSize
//         ? products.filter(product => product.sizes.includes(selectedSize))
//         : products;

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//         if (a.name === "The Weekend Boot Z in Grey") return -1;
//         if (b.name === "The Weekend Boot Z in Grey") return 1;

//         switch (selectedSort) {
//             case "Alphabetically A-Z":
//                 return a.name.localeCompare(b.name);
//             case "Alphabetically Z-A":
//                 return b.name.localeCompare(a.name);
//             case "Price: Low to High":
//                 return parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
//             case "Price: High to Low":
//                 return parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
//             default:
//                 return 0;
//         }
//     });

//     return (
//         <div id="weekend-boot-container" style={{
//             width: "100vw",
//             margin: 0,
//             padding: 0,
//             backgroundColor: "#fff",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center"
//         }}>
//             <div style={{ position: "relative", width: "100%", height: "80vh" }}>
//                 <img
//                     id="boot-image"
//                     src={bootImage}
//                     alt="All Season Sustainable Boots"
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         display: "block",
//                     }}
//                 />
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         color: "#fff",
//                         textAlign: "center",
//                         fontSize: "2rem",
//                         fontWeight: "bold",
//                         textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
//                         width: "90%",
//                     }}
//                 >
//                     <p>Versatile. Sustainable. Oh So Comfy!</p>
//                     <p>The Weekend Boot</p>
//                 </div>
//             </div>

//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     width: "90%",
//                     maxWidth: "1200px",
//                     margin: "20px 0",
//                     padding: "10px 0",
//                     borderBottom: "1px solid #ddd",
//                 }}
//             >
//                 <div>
//                     <label style={{ fontWeight: "bold", marginRight: "10px" }}>Filter: Size</label>
//                     <select
//                         value={selectedSize}
//                         onChange={(e) => setSelectedSize(e.target.value)}
//                         style={{
//                             padding: "8px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "1rem",
//                         }}
//                     >
//                         <option value="">All Sizes</option>
//                         {getUniqueSizes(products).map((size) => (
//                             <option key={size} value={size}>
//                                 {size} (16 products)
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label style={{ fontWeight: "bold", marginRight: "10px" }}>Sort by</label>
//                     <select
//                         value={selectedSort}
//                         onChange={(e) => setSelectedSort(e.target.value)}
//                         style={{
//                             padding: "8px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "1rem",
//                         }}
//                     >
//                         {sortOptions.map((option) => (
//                             <option key={option} value={option}>
//                                 {option}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             <div
//                 id="products-container"
//                 style={{
//                     width: "90%",
//                     maxWidth: "1200px",
//                     display: "flex",
//                     justifyContent: "flex-start",
//                     flexWrap: "wrap", // Allow wrapping to new lines
//                     gap: "20px", // Space between cards
//                 }}
//             >
//                 {sortedProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         id={`product-${product.id}`}
//                         style={{
//                             textAlign: "left",
//                             color: "#000",
//                             width: "calc(25% - 15px)", // 4 cards per line (25% width minus gap)
//                             border: "1px solid #ddd",
//                             padding: "15px",
//                             borderRadius: "8px",
//                             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                             position: "relative", // Position relative for absolute positioning of buttons
//                         }}
//                     >
//                         <img
//                             id={`product-img-${product.id}`}
//                             src={hovered === product.id ? product.hoverImg || product.imgSrc : product.imgSrc}
//                             alt={product.name}
//                             style={{
//                                 width: "100%",
//                                 height: "auto",
//                                 borderRadius: "8px",
//                                 marginBottom: "10px",
//                                 transition: "0.3s ease-in-out",
//                             }}
//                             onMouseEnter={() => setHovered(product.id)}
//                             on MouseLeave={() => setHovered(null)}
//                         />
//                         {product.tag === "Sold out" && (
//                             <button style={{
//                                 position: "absolute",
//                                 top: "10px",
//                                 left: "10px",
//                                 backgroundColor: "rgba(255, 0, 0, 0.8)",
//                                 color: "#fff",
//                                 border: "none",
//                                 borderRadius: "5px",
//                                 padding: "5px 10px",
//                                 cursor: "not-allowed",
//                                 fontWeight: "bold",
//                             }}>
//                                 Sold Out
//                             </button>
//                         )}
//                         {product.tag === "Sale" && (
//                             <button style={{
//                                 position: "absolute",
//                                 top: "10px",
//                                 left: "10px",
//                                 backgroundColor: "rgba(0, 128, 0, 0.8)",
//                                 color: "#fff",
//                                 border: "none",
//                                 borderRadius: "5px",
//                                 padding: "5px 10px",
//                                 cursor: "pointer",
//                                 fontWeight: "bold",
//                             }}>
//                                 Sale
//                             </button>
//                         )}
//                         <p id={`product-name-${product.id}`} style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
//                             {product.name}
//                         </p>
//                         <p id={`product-price-${product.id}`}>
//                             <span style={{ textDecoration: "line-through", color: "gray" }}>
//                                 {product.oldPrice}
//                             </span>{" "}
//                             <span style={{ color: "#D32F2F", fontSize: "1.2rem", fontWeight: "bold" }}>
//                                 {product.price}
//                             </span>
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WeekendBoot;
import React, { useState } from "react";
import "../CSS/WeekendBoot.css"; // Import the responsive CSS
import bootImage from "../images/all-season-sustainable-boots.jpg";
import giftCard from "../images/Thesus_giftcard.jpg";
import image1 from "../images/Image1.jpg";
import image2 from "../images/Image2.jpg";
import image3 from "../images/image 3.jpg";
import image4 from "../images/image 4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image 7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image 9.jpg";
import image10 from "../images/image 10.jpg";
import image11 from "../images/image 11.jpg";
import image13 from "../images/image 13.jpg";
import image14 from "../images/image 14.jpg";
import image15 from "../images/image 15.jpg";
import image16 from "../images/image 16.jpg";
import image17 from "../images/image 17.jpg";
import image18 from "../images/image 18.jpg";
import image19 from "../images/Image 19.jpg";
import image20 from "../images/Image 20.jpg";
import image21 from "../images/image 21.jpg";
import image22 from "../images/image 22.jpg";
import image23 from "../images/image 23.jpg";
import image24 from "../images/image 24.jpg";
import image25 from "../images/image 25.jpg";
import image26 from "../images/image 26.jpg";
import image29 from "../images/image 29.jpg";
import image30 from "../images/image30.jpg";
import image31 from "../images/image31.jpg"; // New image
import image32 from "../images/image32.jpg"; // New hover image
import image33 from "../images/image33.jpg"; // New product image
import image34 from "../images/image34.jpg"; // New hover image for the product

const products = [
  {
    id: 1,
    name: "Thesus Gift Card",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 15,900.00",
    imgSrc: giftCard,
    tag: "Sale",
    sizes: ["36", "37", "38"],
  },
  {
    id: 2,
    name: "The Weekend Boot Z in Grey",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 15,900.00",
    imgSrc: image17,
    hoverImg: image18,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 3,
    name: "The Allegra Weekend Boot",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image1,
    hoverImg: image2,
    tag: "Sale",
    sizes: ["39", "40", "41"],
  },
  {
    id: 4,
    name: "The Weekend Boot in Black",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image3,
    hoverImg: image4,
    tag: "Sale",
    sizes: ["42", "43", "44"],
  },
  {
    id: 5,
    name: "The Weekend Boot in Sage",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image5,
    hoverImg: image6,
    tag: "Sale",
    sizes: ["42", "43", "44"],
  },
  {
    id: 6,
    name: "The Weekend Boot Beige",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image7,
    hoverImg: image6,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 7,
    name: "The Weekend Boot Classic Black",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 10,600.00",
    imgSrc: image8,
    hoverImg: image9,
    tag: "Sold out",
    sizes: [],
  },
  {
    id: 8,
    name: "The Simone Weekend Boot",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image10,
    hoverImg: image11,
    tag: "Sold out",
    sizes: [],
  },
  {
    id: 9,
    name: "The Weekend Boot Z in Black",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 18,000.00",
    imgSrc: image13,
    hoverImg: image14,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 10,
    name: "The Weekend Boot Z in Black",
    oldPrice: "Rs. 22,100.00",
    price: "Rs. 18,000.00",
    imgSrc: image15,
    hoverImg: image16,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 11,
    name: "Thesus - The Weekend Boot in Cuero",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 12,700.00",
    imgSrc: image21,
    hoverImg: image22,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 12,
    name: "Thesus - The Marlin Weekend Boot",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image23,
    hoverImg: image24,
    tag: "Sold out",
    sizes: [],
  },
  {
    id: 13,
    name: "Thesus - The Weekend Boot in Navy",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 12,700.00",
    imgSrc: image25,
    hoverImg: image26,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 14,
    name: "The Weekend Boot New Classic Brown",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 12,700.00",
    imgSrc: image29,
    hoverImg: image30,
    tag: "Sale",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: 15,
    name: "The Scarlet Weekend Boot",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 15,900.00",
    imgSrc: image31,
    hoverImg: image32,
    tag: "Sold out",
    sizes: [],
  },
  {
    id: 16,
    name: "The Farrah Weekend Boot",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 21,000.00",
    imgSrc: image33,
    hoverImg: image34,
    tag: "Sold out",
    sizes: [],
  },
];

const getUniqueSizes = (products) => {
  const allSizes = products.flatMap((product) => product.sizes);
  return [...new Set(allSizes)];
};

const sortOptions = [
  "Featured",
  "Best Selling",
  "Alphabetically A-Z",
  "Alphabetically Z-A",
  "Price: High to Low",
  "Price: Low to High",
  "Date: Old to New",
  "Date: New to Old",
];

const WeekendBoot = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const filteredProducts = selectedSize
    ? products.filter((product) => product.sizes.includes(selectedSize))
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a.name === "The Weekend Boot Z in Grey") return -1;
    if (b.name === "The Weekend Boot Z in Grey") return 1;

    switch (selectedSort) {
      case "Alphabetically A-Z":
        return a.name.localeCompare(b.name);
      case "Alphabetically Z-A":
        return b.name.localeCompare(a.name);
      case "Price: Low to High":
        return (
          parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        );
      case "Price: High to Low":
        return (
          parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
        );
      default:
        return 0;
    }
  });

  return (
    <div id="weekend-boot-container">
      <div className="hero-container">
        <img
          id="boot-image"
          src={bootImage}
          alt="All Season Sustainable Boots"
          className="hero-image"
        />
        <div className="hero-text">
          <p>Versatile. Sustainable. Oh So Comfy!</p>
          <p>The Weekend Boot</p>
        </div>
      </div>

      <div className="filter-sort-container">
        <div>
          <label className="filter-label">Filter: Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="select-input"
          >
            <option value="">All Sizes</option>
            {getUniqueSizes(products).map((size) => (
              <option key={size} value={size}>
                {size} (16 products)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="filter-label">Sort by</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="select-input"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div id="products-container">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              id={`product-img-${product.id}`}
              src={
                hovered === product.id
                  ? product.hoverImg || product.imgSrc
                  : product.imgSrc
              }
              alt={product.name}
              className="product-image"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            />
            {product.tag === "Sold out" && (
              <button className="tag-button sold-out">Sold Out</button>
            )}
            {product.tag === "Sale" && (
              <button className="tag-button sale">Sale</button>
            )}
            <p className="product-name">{product.name}</p>
            <p className="product-price">
              <span className="old-price">{product.oldPrice}</span>{" "}
              <span className="new-price">{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekendBoot;
