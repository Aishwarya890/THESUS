import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShippingPolicyPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center dw-bold  mb-5">Shipping Policy</h1>

      {/* United States Section */}
      <div className="mb-5">
        <h2 className="h4">United States</h2>
        <p>
        Standard Shipping ( 4-7 business days) is FREE on orders over $100. On orders under $100, there is a small Green Shipping Fee of $10.

        </p>
        <p>
        Expedited Shipping ( 2-3 business days) is $10.

        </p>
        <p>
          Customs and duties are included in the price, so you don’t ever have
          to worry about surprise fees upon arrival.
        </p>
      </div>

      {/* Canada Section */}
      <div className="mb-5">
        <h2 className="h4">Canada</h2>
        <p>
        Standard Shipping ( 4-7 business days) is FREE on orders over $100. On orders under $100, there is a small Green Shipping Fee of $15 CAD.

        </p>
        <p>
        Expedited Shipping ( 2-3 business days) is $15 CAD.

        </p>
        <p >
          Customs and duties are included in the price, so you don’t ever have
          to worry about surprise fees upon arrival.
        </p>
      </div>

      {/* EU and International Orders Section */}
      <div className="mb-5">
        <h2 className="h4">EU and International Orders</h2>
        <p>
        Standard Shipping ( 7-10 business days) is FREE on orders over $100.
        </p>

        <p>
        Expedited Shipping ( 2-3 business days) is an additional $30.

        </p>
        <p>
          Customs and duties are included in the price, so you don’t ever have to worry about surprise fees upon arrival.
        </p>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="h4 mb-4">Frequently Asked Questions:</h2>

        <div className="mb-3">
          <h5 className="fw-bold">How do I know if my order has shipped?</h5>
          <p>
            You’ll receive an email confirmation along with your tracking number.
            Check your spam folder just in case, as sometimes they may end up there!
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Can I make changes to my shipping address?</h5>
          <p>
            Once your order has been placed, we are unable to make any changes to the shipping address.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">Can you ship to P.O. boxes?</h5>
          <p>
            Unfortunately, we are unable to deliver packages to P.O. boxes at this time.
          </p>
        </div>

        <div className="mb-3">
          <h5 className="fw-bold">What happens if my package is lost or stolen?</h5>
          <p>
            If your package has been lost or stolen, please contact 
            support@thesusoutdoors.com immediately.          </p>
        </div>

        <div className="mb-5">
          <h5 className="fw-bold">Can I cancel my order once it’s been placed?</h5>
          <p>
            We are committed to shipping orders quickly, so, unfortunately, we cannot cancel orders once they’ve been placed. 
            Once the package arrives, you can of course coordinate a return with us.
          </p>
        </div>
      </div>
      </div>

     
  );
};

export default ShippingPolicyPage;