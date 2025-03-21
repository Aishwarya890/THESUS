import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormSelect,
  Card,
  Badge,
} from "react-bootstrap";

// Replace with your own image imports
import heroImage from "../images/heroImage.png";
import clogSage from "../images/sun2.png";
import sun1 from "../images/sun1.png";
import sun3 from "../images/sun3.png";

const SunPage = () => {
  // Sample products with a "size" property
  const [products] = useState([
    {
      id: 1,
      name: "The Terrus in Sage",
      price: "12,000.00 AFN",
      image: sun1,
      soldOut: true,
      size: "40",
    },
    {
      id: 2,
      name: "The Terrus in Allegra",
      price: "12,000.00 AFN",
      image: clogSage,
      soldOut: true,
      size: "41",
    },
    {
      id: 3,
      name: "The Terrus in Beige",
      price: "12,000.00 AFN",
      image: sun3,
      soldOut: true,
      size: "42",
    },
  ]);

  // State for sorting and filtering
  const [sortBy, setSortBy] = useState("best-selling");
  const [size, setSize] = useState("all");

  // 1) Filter by size (if not "all")
  let filteredProducts = [...products];
  if (size !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.size === size
    );
  }

  // 2) Sort
  if (sortBy === "alphabetical-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "alphabetical-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "price-low-high") {
    filteredProducts.sort(
      (a, b) =>
        parseFloat(a.price.replace(/[^\d.]/g, "")) -
        parseFloat(b.price.replace(/[^\d.]/g, ""))
    );
  } else if (sortBy === "price-high-low") {
    filteredProducts.sort(
      (a, b) =>
        parseFloat(b.price.replace(/[^\d.]/g, "")) -
        parseFloat(a.price.replace(/[^\d.]/g, ""))
    );
  }
  // For "best-selling", "featured", etc. you can implement custom logic if needed.

  return (
    <div className="sun-page">
      {/* HERO SECTION */}
      <Container fluid className="p-0 position-relative">
        <img
          src={heroImage}
          alt="Clog Hero"
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Text Overlay */}
        <div
          className="text-white text-center"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Stay Easy, Cool, & Comfy</h1>
          <p style={{ fontSize: "1.25rem" }}>The Terrus Clog</p>
        </div>

        {/* Vertical badge on the right side (optional) */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "40%",
            transform: "rotate(90deg) translate(50%, -50%)",
            transformOrigin: "right center",
            backgroundColor: "#1B4332",
            color: "#fff",
            padding: "10px 20px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          give your friends a gift
        </div>
      </Container>

      {/* FILTER & SORT */}
      <Container className="my-4">
        <Row className="align-items-center">
          {/* Left: Filter by Size */}
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <Form.Label>Filter:</Form.Label>
            <FormSelect
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{
                maxWidth: "200px",
                display: "inline-block",
                marginLeft: "0.5rem",
              }}
            >
              <option value="all">All Sizes</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
            </FormSelect>
          </Col>

          {/* Right: Sort by */}
          <Col xs={12} md={6} className="text-md-end">
            <Form.Label className="me-2">Sort by:</Form.Label>
            <FormSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ maxWidth: "200px", display: "inline-block" }}
            >
              <option value="best-selling">Best selling</option>
              <option value="featured">Featured</option>
              <option value="alphabetical-asc">Alphabetically, A-Z</option>
              <option value="alphabetical-desc">Alphabetically, Z-A</option>
              <option value="price-low-high">Price, low to high</option>
              <option value="price-high-low">Price, high to low</option>
              <option value="date-old-new">Date, old to new</option>
              <option value="date-new-old">Date, new to old</option>
            </FormSelect>
          </Col>
        </Row>
      </Container>

      {/* PRODUCT LIST */}
      <Container>
        <Row>
          {filteredProducts.map((product) => (
            <Col xs={12} md={4} className="mb-4" key={product.id}>
              <Card className="h-100 text-center">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  {/* Sold out badge */}
                  {product.soldOut && (
                    <Badge
                      bg="secondary"
                      style={{ position: "absolute", top: "10px", left: "10px" }}
                    >
                      Sold out
                    </Badge>
                  )}
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SunPage;
