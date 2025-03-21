import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RefundPolicyPage = () => {
  return (
    <div className="container my-5">
        <br></br><br></br>
      <h1 className="text-center mb-4">Refund Policy</h1>

      <div className="mb-5">
        <h2>Returns</h2>
        <h4 className="mt-4">United States</h4>
        <p>
          Not the perfect fit? Not to worry, we accept returns on all unworn, regular
          priced items within 30 days. Returns are charged a <strong>$15 Green Return Fee</strong>. 
          This covers the cost of shipping and carbon offsetting the returned order.
        </p>
        <ul>
          <li>*All items on sale are eligible only for return for store credit only.</li>
          <li>** Items marked as final sale at time of purchase are ineligible for return. If you have any other questions, contact us at support@thesusoutdoors.com..</li>
          <li>*** Gift with confidence. We have extended our returns window to 60 days over the holidays.</li>
          <li>To get your return started, contact us at support@thesusoutdoors.com. </li>
        </ul>
      </div>

      <div className="mb-5">
        <h4>Canada</h4>
        <p>
        Not the perfect fit? Not to worry, we accept returns on all unworn,
         regular priced items within 30 days. Returns are charged a $15 Green Return
          Fee. This covers the cost of shipping and carbon offsetting the returned order.

        </p>
        <ul>
          <li>All items on sale are eligible only for return for store credit only.</li>
          <li>* Items marked as final sale at time of purchase are ineligible for return. If you have any other questions, contact us at support@thesusoutdoors.com.
          .</li>
          <li>To get your return started, contact us at support@thesusoutdoors.com. </li>
        </ul>
      </div>

      <div className="mb-5">
        <h4>Other Countries</h4>
        <p>
        For orders shipped outside of the countries outlined above, they are considered FINAL SALE, and they are not eligible for return.
        </p>
      </div>

      <div className="mb-5">
        <h4>Do you offer price adjustments?</h4>
        <p>
        Unfortunately, out of consideration for our community that waits for the rare sale that happens, we do not offer any price adjustments.        </p>
      </div>

      <div className="mb-5">
        <h4>Regular Priced Items</h4>
        <p>
        Send your shoes back for store credit.  Returns must be made within 30
        days of placing your order and are only available in the US and Canada.
         Returns are charged a $15 Green Return Fee. This covers the cost 
         of shipping and carbon offsetting the returned order.

        </p>
        <ul>
          <li>*Sale items are only eligible for store credit.</li>
          <li>**Final sale items are not eligible for return, exchange, or store credit.</li>
          <li>***International orders are considered final sale.</li>
        </ul>
      </div>

      <div className="mb-5">
        <h4>Discounted Items</h4>
        <p>
        All discounted items and/or purchases made with a discount code cannot be returned 
        for a refund but for store credit only. If you would like to return the item or receive
         store credit, you are responsible for the cost of return shipping. If you have any questions, please email support@thesusoutdoors.com.
        </p>
      </div>

      <div>
        <h4>Criteria</h4>
        <p>
        Shoes must not have been used, altered or damaged. No signs of wearing, including dirty soles, marks, scratches, stains etc.
         All shoeboxes and other packaging must returned in original condition.
        </p>
        <p>
        ThesusOutdoors (DBA: Alice + Whittles) reserves the right to cancel or reject returns that are not compliant with the Returns policy
        , including those sent or communicated beyond the return period limit.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicyPage;