// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import thesusGiftCard from "../images/Thesus_giftcard.jpg";
// import boot1 from "../images/boot1.png";
// import boot2 from "../images/boot2.png";


// const GiftCardPage = () => {
//   // Example "You may also like" products
//   const relatedProducts = [
//     {
//       id: 1,
//       name: 'The Weekend Boot in Cuero',
//       price: '10,500.00 AFN',
//       oldPrice: '12,000.00 AFN',
//       imgSrc: boot1, // Replace with actual image path
//       tag: 'Sale',
//     },
//     {
//       id: 2,
//       name: 'Harvest Gold',
//       price: '1,000.00 AFN',
//       oldPrice: '1,500.00 AFN',
//       imgSrc: boot2,
//       tag: 'Sale',
//     },
//     {
//       id: 3,
//       name: 'The Weekend Boot Classic Sage',
//       price: '9,600.00 AFN',
//       oldPrice: '12,000.00 AFN',
//       imgSrc: boot1,
//       tag: 'Sale',
//     },
//     {
//       id: 4,
//       name: 'The Weekend Boot 2 in Grey',
//       price: '13,000.00 AFN',
//       oldPrice: '15,000.00 AFN',
//       imgSrc: boot2,
//       tag: 'Sale',
//     },
//   ];

//   return (
//     <div className="container my-5">
//       {/* Gift Card Section */}
//       <div className="row">
//         {/* Left Column: Image */}
//         <div className="col-md-6">
//           <img
//             src={thesusGiftCard} // Replace with your actual gift card image
//             alt="Thesus Gift Card"
//             className="img-fluid rounded"
//           />
//         </div>

//         {/* Right Column: Details */}
//         <div className="col-md-6">
//           <h1 className="mt-3 mt-md-0">Thesus Gift Card</h1>
//           <p className="text-muted">
//             Shipping calculated at checkout.
//           </p>

//           {/* Amount Buttons */}
//           <div className="mb-3">
//             <h5>Amount:</h5>
//             <div className="btn-group" role="group">
//               <button className="btn btn-outline-secondary">$50.00</button>
//               <button className="btn btn-outline-secondary">$100.00</button>
//               <button className="btn btn-outline-secondary">$150.00</button>
//               <button className="btn btn-outline-secondary">$200.00</button>
//               <button className="btn btn-outline-secondary">$250.00</button>
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="mb-3">
//             <label htmlFor="quantity" className="form-label">
//               Quantity
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="quantity"
//               defaultValue={1}
//               min={1}
//             />
//           </div>

//           {/* Buttons */}
//           <div className="d-flex gap-2 mb-3">
//             <button className="btn btn-dark">Add to cart</button>
           
//           </div>
//           <div className="d-flex gap-2 mb-3">
//           <button className="btn btn-primary">Buy with Shop Pay</button>
//           </div>

//           {/* More payment options */}
//           <a
//   href="#more-options"
//   className="text-decoration-underline d-block text-center text-black"
// >
//   More payment options
// </a>
// <br></br>
//           {/* Accordion Section */}
//           <div className="accordion" id="giftCardAccordion">
//             {/* Free shipping */}
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingOne">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="false"
//                   aria-controls="collapseOne"
//                 >
//                   Free shipping
//                 </button>
//               </h2>
//               <div
//                 id="collapseOne"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingOne"
//                 data-bs-parent="#giftCardAccordion"
//               >
//                 <div className="accordion-body">
//                   We offer free shipping on all orders within North America.
//                 </div>
//               </div>
//             </div>

//             {/* Easy returns */}
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingTwo">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseTwo"
//                   aria-expanded="false"
//                   aria-controls="collapseTwo"
//                 >
//                   Easy returns
//                 </button>
//               </h2>
//               <div
//                 id="collapseTwo"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingTwo"
//                 data-bs-parent="#giftCardAccordion"
//               >
//                 <div className="accordion-body">
//                   We provide hassle-free returns within 30 days of purchase.
//                 </div>
//               </div>
//             </div>

//             {/* Pay in 4 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingThree">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseThree"
//                   aria-expanded="false"
//                   aria-controls="collapseThree"
//                 >
//                   Pay in 4
//                 </button>
//               </h2>
//               <div
//                 id="collapseThree"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingThree"
//                 data-bs-parent="#giftCardAccordion"
//               >
//                 <div className="accordion-body">
//                   Split your purchase into 4 easy, interest-free payments.
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Share link */}
//           <div className="mt-3">
//             <a href="#share" className="text-decoration-none text-black">
//               Share
//             </a>
//           </div>

          
//         </div>

//       </div>

//       {/* Related Products Section */}
//       <div className="mt-5">
//         <h2>You may also like</h2>
//         <div className="row">
//           {relatedProducts.map((product) => (
//             <div key={product.id} className="col-6 col-md-3 mt-4">
//               <div className="card h-100">
//                 {/* Sale badge */}
//                 {product.tag === 'Sale' && (
//                   <span
//                     className="position-absolute bg-dark text-white px-2 py-1"
//                     style={{ fontSize: '0.8rem', top: '10px', left: '10px' }}
//                   >
//                     Sale
//                   </span>
//                 )}
//                 <img
//                   src={product.imgSrc}
//                   className="card-img-top"
//                   alt={product.name}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h6 className="card-title">{product.name}</h6>
//                   <p className="mb-1 text-muted">
//                     <del>{product.oldPrice}</del>
//                   </p>
//                   <p className="fw-bold">{product.price}</p>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftCardPage;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import thesusGiftCard from "../images/Thesus_giftcard.jpg";
import boot1 from "../images/boot1.png";
import boot2 from "../images/boot2.png";

// Create a new component for related product cards
const RelatedProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="col-6 col-md-3 mt-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card h-100 position-relative">
        {/* Sale badge */}
        {product.tag === "Sale" && (
          <span
            className="position-absolute bg-dark text-white px-2 py-1"
            style={{ fontSize: "0.8rem", top: "10px", left: "10px" }}
          >
            Sale
          </span>
        )}
        <img
          src={hover ? product.hoverImgSrc : product.imgSrc}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.name}</h6>
          <p className="mb-1 text-muted">
            <del>{product.oldPrice}</del>
          </p>
          <p className="fw-bold">{product.price}</p>
          {/* Optionally add a button or link here */}
        </div>
      </div>
    </div>
  );
};

const GiftCardPage = () => {
  // Example "You may also like" products with hover image URLs
  const relatedProducts = [
    {
      id: 1,
      name: "The Weekend Boot in Cuero",
      price: "10,500.00 AFN",
      oldPrice: "12,000.00 AFN",
      imgSrc: boot1, // Default image
      hoverImgSrc: boot2, // Hover image (change as needed)
      tag: "Sale",
    },
    {
      id: 2,
      name: "Harvest Gold",
      price: "1,000.00 AFN",
      oldPrice: "1,500.00 AFN",
      imgSrc: boot2,
      hoverImgSrc: boot1,
      tag: "Sale",
    },
    {
      id: 3,
      name: "The Weekend Boot Classic Sage",
      price: "9,600.00 AFN",
      oldPrice: "12,000.00 AFN",
      imgSrc: boot1,
      hoverImgSrc: boot2,
      tag: "Sale",
    },
    {
      id: 4,
      name: "The Weekend Boot 2 in Grey",
      price: "13,000.00 AFN",
      oldPrice: "15,000.00 AFN",
      imgSrc: boot2,
      hoverImgSrc: boot1,
      tag: "Sale",
    },
  ];

  return (
    <div className="container my-5">
      {/* Gift Card Section */}
      <div className="row">
        {/* Left Column: Image */}
        <div className="col-md-6">
          <img
            src={thesusGiftCard} // Replace with your actual gift card image
            alt="Thesus Gift Card"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Column: Details */}
        <div className="col-md-6">
          <h1 className="mt-3 mt-md-0">Thesus Gift Card</h1>
          <p className="text-muted">Shipping calculated at checkout.</p>

          {/* Amount Buttons */}
          <div className="mb-3">
            <h5>Amount:</h5>
            <div className="btn-group" role="group">
              <button className="btn btn-outline-secondary">$50.00</button>
              <button className="btn btn-outline-secondary">$100.00</button>
              <button className="btn btn-outline-secondary">$150.00</button>
              <button className="btn btn-outline-secondary">$200.00</button>
              <button className="btn btn-outline-secondary">$250.00</button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              defaultValue={1}
              min={1}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-dark">Add to cart</button>
          </div>
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary">Buy with Shop Pay</button>
          </div>

          {/* More payment options */}
          <a
            href="#more-options"
            className="text-decoration-underline d-block text-center text-black"
          >
            More payment options
          </a>
          <br />

          {/* Accordion Section */}
          <div className="accordion" id="giftCardAccordion">
            {/* Free shipping */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Free shipping
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#giftCardAccordion"
              >
                <div className="accordion-body">
                  We offer free shipping on all orders within North America.
                </div>
              </div>
            </div>

            {/* Easy returns */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Easy returns
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#giftCardAccordion"
              >
                <div className="accordion-body">
                  We provide hassle-free returns within 30 days of purchase.
                </div>
              </div>
            </div>

            {/* Pay in 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Pay in 4
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#giftCardAccordion"
              >
                <div className="accordion-body">
                  Split your purchase into 4 easy, interest-free payments.
                </div>
              </div>
            </div>
          </div>

          {/* Share link */}
          <div className="mt-3">
            <a href="#share" className="text-decoration-none text-black">
              Share
            </a>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-5">
        <h2>You may also like</h2>
        <div className="row">
          {relatedProducts.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
