// import React from "react";

// import "../CSS/Footer.css";
// const NewsletterSection = () => {
//   return (
//     <div className="newsletter-section">
//       <h2>Let's stay in touch!</h2><br></br>
//       <p>
//         Subscribe to our newsletter. Get $10 off your first purchase, exclusive
//         offers and outdoor tips, trips and education.
//       </p><br></br>
//       <div className="newsletter-form">
//         <input type="email" placeholder="Your email" />
//         <button>Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default NewsletterSection;
import React, { useState } from "react";
import "../CSS/Footer.css";

const NewsletterSection = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Optionally, you could validate the email or send a request here.
    setSubscribed(true);
  };

  return (
    <div className="newsletter-section">
      <h2>Let's stay in touch!</h2>
      <br />
      <p>
        Subscribe to our newsletter. Get $10 off your first purchase, exclusive
        offers and outdoor tips, trips and education.
      </p>
      <br />
      <div className="newsletter-form">
        {subscribed ? (
          <p>
            Thanks for subscribing!
            <br />
            Check your email for a confirmation message.
          </p>
        ) : (
          <>
            <input type="email" placeholder="Your email" />
            <button onClick={handleSubscribe}>Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterSection;
