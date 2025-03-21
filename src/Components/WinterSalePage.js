import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Image imports (adjust paths as needed)
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
import image21 from "../images/image 21.jpg";
import image22 from "../images/image 22.jpg";
import image23 from "../images/image 23.jpg";
import image24 from "../images/image 24.jpg";
import image25 from "../images/image 25.jpg";
import image26 from "../images/image 26.jpg";
import image29 from "../images/image 29.jpg";
import image30 from "../images/image30.jpg";
import image31 from "../images/image31.jpg";
import image32 from "../images/image32.jpg";
import image33 from "../images/image33.jpg";
import image34 from "../images/image34.jpg";

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
    name: "The Weekend Boot Classic Sage",
    oldPrice: "Rs. 21,000.00",
    price: "Rs. 11,700.00",
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

const WinterSalePage = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSort, setSelectedSort] = useState("Featured");

  // Filter by size if one is selected
  const filteredProducts = selectedSize
    ? products.filter((product) => product.sizes.includes(selectedSize))
    : products;

  // Sort products based on selectedSort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
    <div
      id="weekend-boot-container"
      style={{
        width: "100%",
        margin: "10px auto",
        padding: "55px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignItems: "center",
      }}
    >
      <div >
            {/* <br /><br /> */}
          <h1 style={{ fontWeight: "bold" }}>Winter Sale</h1>
         <h4>Take up to 50% off this season!</h4>
          </div>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          maxWidth: "1200px",
          margin: "20px 0",
          padding: "10px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div>
          <label style={{ fontWeight: "bold", marginRight: "10px" }}>Filter: Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            <option value="">All Sizes</option>
            {[
              "36", "37", "38", "39", "40", "41", "42", "43", "44"
            ].map((size) => (
              <option key={size} value={size}>
                {size} (16 products)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ fontWeight: "bold", marginRight: "10px" }}>Sort by</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            <option>Featured</option>
            <option>Alphabetically A-Z</option>
            <option>Alphabetically Z-A</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Responsive Product Grid Using React-Bootstrap Grid */}
      <Container fluid style={{ width: "90%", maxWidth: "1200px" }}>
        <Row>
          {sortedProducts.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={product.id}>
              <div
                style={{
                  textAlign: "left",
                  color: "#000",
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={
                    hovered === product.id
                      ? product.hoverImg || product.imgSrc
                      : product.imgSrc
                  }
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    transition: "0.3s ease-in-out",
                  }}
                />
                {product.tag === "Sold out" && (
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "rgba(255, 0, 0, 0.8)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "not-allowed",
                      fontWeight: "bold",
                    }}
                  >
                    Sold Out
                  </button>
                )}
                {product.tag === "Sale" && (
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "rgba(0, 128, 0, 0.8)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Sale
                  </button>
                )}
                <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{product.name}</p>
                <p>
                  <span style={{ textDecoration: "line-through", color: "gray" }}>
                    {product.oldPrice}
                  </span>{" "}
                  <span style={{ color: "#D32F2F", fontSize: "1.2rem", fontWeight: "bold" }}>
                    {product.price}
                  </span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WinterSalePage;
