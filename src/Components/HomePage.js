// import React from "react";
// import "../CSS/HomePage.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import HomePageImg from "../images/HomepageImg.png";
// import boot3 from "../images/boot3.png";
// import boot4 from "../images/boot4.png";
// import boot5 from "../images/boot5.png";
// import boot6 from "../images/boot6.png";
// import boot7 from "../images/boot7.png";
// import mosyrock from "../images/mosybag.png";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// // Example product data
// const products = [
//   {
//     id: 1,
//     name: "The Weekend Boot in Beige",
//     price: "Rs. 15,900.00",
//     imgSrc: boot4,
//     tag: "Sale",
//   },
//   {
//     id: 1,
//     name: "The Weekend Boot in Beige",
//     price: "Rs. 15,900.00",
//     imgSrc: boot4,
//     tag: "Sale",
//   },
//   {
//     id: 1,
//     name: "The Weekend Boot in Beige",
//     price: "Rs. 15,900.00",
//     imgSrc: boot4,
//     tag: "Sale",
//   },
//   {
//     id: 1,
//     name: "The Weekend Boot in Beige",
//     price: "Rs. 15,900.00",
//     imgSrc: boot4,
//     tag: "Sale",
//   },
//   {
//     id: 2,
//     name: "The Weekend Boot in Black",
//     price: "Rs. 16,200.00",
//     imgSrc: boot4,
//     tag: "Sale",
//   },
//   {
//     id: 3,
//     name: "The Weekend Boot in Cuero",
//     price: "Rs. 15,700.00",
//     imgSrc: boot4,
//     tag: "",
//   },
//   {
//     id: 4,
//     name: "The Weekend Boot in Sage",
//     price: "Rs. 15,900.00",
//     imgSrc: boot4,
//     tag: "",
//   },
// ];

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         {/* Hero Background Image (optional: can also use background-image in CSS) */}
//         <div className="hero-image">
//           <img src={HomePageImg} alt="Hero Boot" />
//         </div>
//         <div className="hero-overlay">
//           <h4>The Weekend Boot</h4>
//           <h1>Comfy All Day, Cosy All Year.</h1>
//           <button className="hero-button">Shop Now</button>
//         </div>
//       </section>
 
//       {/* Category Section */}
//       <section className="category-section">
//   <h2>#BeOutside in our award-winning sustainable outdoor footwear.</h2>
//   <div className="category-grid">
//     <div className="category-card">
//       <img src={boot4} alt="Rain" /><br></br>
//       <a href="/rain">Rain →</a>
//     </div>
//     <div className="category-card">
//       <img src={boot7} alt="All Weather" /><br></br>
//       <a href="/all">All weather →</a>
//     </div>
//     <div className="category-card">
//       <img src={boot5} alt="Snow" /><br></br>
//       <a href="/snow">Snow →</a>
//     </div>
//     <div className="category-card">
//       <img src={boot6} alt="Sun" /><br></br>
//       <a href="/sun">Sun →</a>
//     </div>
//   </div>
// </section>

      

//       {/* Product Listing Section */}
//       <section className="product-listing">
//       <h2>Get Them Before They're Gone!</h2><br></br>
//       <p>Sizes are running out, get your pair before they are gone.</p><br></br>

//       <Swiper
//   modules={[Navigation, Pagination]}
//   navigation
//   pagination={{ clickable: true }}
//   spaceBetween={20}
//   slidesPerView={6} // Show 6 images per slide
//   breakpoints={{
//     1024: { slidesPerView: 5 }, // For large screens
//     768: { slidesPerView: 4 },  // For tablets
//     480: { slidesPerView: 2 },  // For mobile devices
//   }}
// >
//   {products.map((product) => (
//     <SwiperSlide key={product.id}>
//       <div className="product-card">
//         {product.tag === "Sale" && <span className="sale-badge">Sale</span>}
//         <img src={product.imgSrc} alt={product.name} />
//         <h3>{product.name}</h3>
//         <p className="product-price">{product.price}</p>
//         <button className="option-button">Choose options</button>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>


//       <a className="view-all-button" href="/winter-sale">View all</a>
//     </section>

//      {/* NEW Sustainability / Info Section */}
//      <section className="sustainability-section">
//         <div className="sustainability-image">
//           <img src={mosyrock} alt="Mossy Rock" />
//         </div>
//         <div className="sustainability-content">
//           <h2>Thesus footwear is thoughtfully designed from natural and recycled materials</h2>
//           <p>
//             Each pair diverts 1-2 kg of waste from our waterways and landfills, 
//             reduces 20kg of CO2 from the atmosphere, and conserves 10L of water 
//             when compared to your traditional leather boot.
//           </p>
//           <button className="learn-more-button">Learn More</button>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import "../CSS/HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import HomePageImg from "../images/HomepageImg.png";
import boot3 from "../images/boot3.png";
import boot4 from "../images/boot4.png";
import boot5 from "../images/boot5.png";
import boot6 from "../images/boot6.png";
import boot7 from "../images/boot7.png";
import mosyrock from "../images/mosybag.png";
import testimonial from "../images/testimonial.png";
import oprahlogo from "../images/oprahlogo.png";
import user1 from "../images/user1.png";
import nytmlogo from "../images/nytm-logo.png";
import gearPatrol from "../images/gear-patrol.png";
import outside from "../images/outside.png";

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
  {
    id: 4,
    name: "The Weekend Boot in Sage",
    price: "Rs. 15,900.00",
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
  {
    id: 4,
    name: "The Weekend Boot in Sage",
    price: "Rs. 15,900.00",
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
  // For FAQ Accordion
  const [openItem, setOpenItem] = useState(null);

  // Toggle an FAQ item
  const toggleFAQ = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={HomePageImg} alt="Hero Boot" />
        </div>
        <div className="hero-overlay">
          <h4>The Weekend Boot</h4>
          <h1>Comfy All Day, Cosy All Year.</h1>
          <button className="hero-button"><a href="/weekend-boot">Shop Now</a></button>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <h2>#BeOutside in our award-winning sustainable outdoor footwear.</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src={boot4} alt="Rain" />
            <br />
            <a href="/rain">Rain →</a>
          </div>
          <div className="category-card">
            <img src={boot7} alt="All Weather" />
            <br />
            <a href="/all">All weather →</a>
          </div>
          <div className="category-card">
            <img src={boot5} alt="Snow" />
            <br />
            <a href="/snow">Snow →</a>
          </div>
          <div className="category-card">
            <img src={boot6} alt="Sun" />
            <br />
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

      {/* NEW Sustainability / Info Section */}
      <section className="sustainability-section">
        <div className="sustainability-image">
          <img src={mosyrock} alt="Mossy Rock" />
        </div>
        <div className="sustainability-content">
          <h2>
            Thesus footwear is thoughtfully designed from natural and recycled
            materials
          </h2>
          <p>
            Each pair diverts 1-2 kg of waste from our waterways and landfills,
            reduces 20kg of CO2 from the atmosphere, and conserves 10L of water
            when compared to your traditional leather boot.
          </p>
          <button className="learn-more-button"><a href="/values">Learn More</a></button>
        </div>
      </section>

      {/* 1) Thesus Bestsellers Section */}
      <section className="bestsellers-section">
        <h2>Thesus Bestsellers</h2>
        <div className="bestsellers-grid">
          {/* Example 4 bestsellers (update with your actual images/links) */}
          <div className="bestseller-card">
            <img src={boot4} alt="Anyday Rain Boot in Black" />
            <h3>The Anyday Rain Boot in Black</h3>
            <a href="/rain">Shop Now →</a>
          </div>
          <div className="bestseller-card">
            <img src={boot7} alt="The Weekend Boot in Beige" />
            <h3>The Weekend Boot in Beige</h3>
            <a href="/weekend-boot">Shop Now →</a>
          </div>
          <div className="bestseller-card">
            <img src={boot5} alt="The Modern Winter Boot" />
            <h3>The Modern Winter Boot</h3>
            <a href="/winter-sale">Shop Now →</a>
          </div>
          <div className="bestseller-card">
            <img src={boot6} alt="The Weekend Boot in Sage" />
            <h3>The Weekend Boot in Sage</h3>
            <a href="/weekend-boot">Shop Now →</a>
          </div>
        </div>
        <button className="shop-bestsellers-button"><a href="/all" className="text-decoration-none">Shop Bestsellers</a></button>
      </section>

      {/* 2) Try Them Out! Section with Accordion */}
      <section className="try-out-section">
        <h2>Try Them Out!</h2>
        <p>Just contact our team for support!</p>

        <div className="faq-item">
          <button onClick={() => toggleFAQ(0)} className="faq-toggle">
            <span>Find your size</span>
            <span>{openItem === 0 ? "−" : "+"}</span>
          </button>
          {openItem === 0 && (
            <div className="faq-content">
              <p>
                Unsure about your size? Check our sizing guide or contact
                support for personalized help.
              </p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <button onClick={() => toggleFAQ(1)} className="faq-toggle">
            <span>Free shipping in North America</span>
            <span>{openItem === 1 ? "−" : "+"}</span>
          </button>
          {openItem === 1 && (
            <div className="faq-content">
              <p>We offer free shipping on all orders in North America.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <button onClick={() => toggleFAQ(2)} className="faq-toggle">
            <span>Easy returns</span>
            <span>{openItem === 2 ? "−" : "+"}</span>
          </button>
          {openItem === 2 && (
            <div className="faq-content">
              <p>30-day hassle-free returns if you’re not completely satisfied.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <button onClick={() => toggleFAQ(3)} className="faq-toggle">
            <span>Pay in 4</span>
            <span>{openItem === 3 ? "−" : "+"}</span>
          </button>
          {openItem === 3 && (
            <div className="faq-content">
              <p>Choose to pay in 4 easy installments at checkout.</p>
            </div>
          )}
        </div>

        <button className="shop-all-button"><a href="/all">Shop All</a></button>
      </section>

      {/* Testimonial Section with Image */}
<section className="testimonial-section">
  <div className="testimonial-content">
    {/* Left Column: Stars, Quote, Author */}
    <div className="testimonial-text">
      <div className="testimonial-stars">★★★★★</div>
      <blockquote>
        "The Weekend Boots have a very nice padding in the sole which makes it
        comfortable to wear for long periods of time and these shoes definitely
        fit very true to size."
      </blockquote>
      <p className="testimonial-author">— Claire</p>
    </div>

    {/* Right Column: Image */}
    <div className="testimonial-image">
      {/* Replace 'testimonial.png' with your actual image path */}
      <img src={testimonial} alt="Happy Customer" />
    </div>
  </div>
</section>


{/* 4) In the Press Section */}
<section className="press-section">
  <h2>In the Press</h2>
  <div className="press-logos">
    {/* Replace these with your actual logo image imports/paths */}
    <img src={oprahlogo} alt="Oprah Magazine" />
    <img src={nytmlogo} alt="The New York Times Magazine" />
    <img src={gearPatrol} alt="Gear Patrol" />
    <img src={outside} alt="Outside" />
  </div>
</section>

{/* 5) Social/UGC Section */}
<section className="social-section">
  <h1>Join Us on Instagram</h1>
  <h2>@Thesus_Outdoors</h2>
  <div className="social-grid">
    {/* Example 4 images with usernames */}
    <div className="social-card">
      <img src={user1} alt="@example1" />
     
    </div>
    <div className="social-card">
      <img src={user1} alt="@example2" />
      
    </div>
    <div className="social-card">
      <img src={user1} alt="@example3" />
      
    </div>
    <div className="social-card">
      <img src={user1} alt="@example4" />
     
    </div>
  </div>
</section>




    </div>
  );
};

export default HomePage;
