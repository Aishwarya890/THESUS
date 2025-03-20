import React from "react";
import "../CSS/HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import HomePageImg from "../images/HomepageImg.png";
import boot3 from "../images/boot3.png";
import boot4 from "../images/boot4.png";
import boot5 from "../images/boot5.png";
import boot6 from "../images/boot6.png";
import boot7 from "../images/boot7.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Example product data
const products = [
  {
    id: 1,
    name: "The Weekend Boot in Beige",
    price: "Rs. 15,900.00",
    imgSrc: boot4,
    tag: "Sale",
  },
  {
    id: 1,
    name: "The Weekend Boot in Beige",
    price: "Rs. 15,900.00",
    imgSrc: boot4,
    tag: "Sale",
  },
  {
    id: 1,
    name: "The Weekend Boot in Beige",
    price: "Rs. 15,900.00",
    imgSrc: boot4,
    tag: "Sale",
  },
  {
    id: 1,
    name: "The Weekend Boot in Beige",
    price: "Rs. 15,900.00",
    imgSrc: boot4,
    tag: "Sale",
  },
  {
    id: 2,
    name: "The Weekend Boot in Black",
    price: "Rs. 16,200.00",
    imgSrc: boot4,
    tag: "Sale",
  },
  {
    id: 3,
    name: "The Weekend Boot in Cuero",
    price: "Rs. 15,700.00",
    imgSrc: boot4,
    tag: "",
  },
  {
    id: 4,
    name: "The Weekend Boot in Sage",
    price: "Rs. 15,900.00",
    imgSrc: boot4,
    tag: "",
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Background Image (optional: can also use background-image in CSS) */}
        <div className="hero-image">
          <img src={HomePageImg} alt="Hero Boot" />
        </div>
        <div className="hero-overlay">
          <h4>The Weekend Boot</h4>
          <h1>Comfy All Day, Cosy All Year.</h1>
          <button className="hero-button">Shop Now</button>
        </div>
      </section>
 
      {/* Category Section */}
      <section className="category-section">
  <h2>#BeOutside in our award-winning sustainable outdoor footwear.</h2>
  <div className="category-grid">
    <div className="category-card">
      <img src={boot4} alt="Rain" /><br></br>
      <a href="/rain">Rain →</a>
    </div>
    <div className="category-card">
      <img src={boot7} alt="All Weather" /><br></br>
      <a href="/all">All weather →</a>
    </div>
    <div className="category-card">
      <img src={boot5} alt="Snow" /><br></br>
      <a href="/snow">Snow →</a>
    </div>
    <div className="category-card">
      <img src={boot6} alt="Sun" /><br></br>
      <a href="/sun">Sun →</a>
    </div>
  </div>
</section>

      

      {/* Product Listing Section */}
      <section className="product-listing">
      <h2>Get Them Before They're Gone!</h2><br></br>
      <p>Sizes are running out, get your pair before they are gone.</p><br></br>

      <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={6} // Show 6 images per slide
  breakpoints={{
    1024: { slidesPerView: 5 }, // For large screens
    768: { slidesPerView: 4 },  // For tablets
    480: { slidesPerView: 2 },  // For mobile devices
  }}
>
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <div className="product-card">
        {product.tag === "Sale" && <span className="sale-badge">Sale</span>}
        <img src={product.imgSrc} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button className="option-button">Choose options</button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      <a className="view-all-button" href="/winter-sale">View all</a>
    </section>
    </div>
  );
};

export default HomePage;
