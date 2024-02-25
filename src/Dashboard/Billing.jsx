import React, { useState } from "react";
import Sidebar from './Sidebar';


function Billing() {
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(billingInfo); // Replace with actual submit logic
  };

  return (
    <>
      <Sidebar />
      <div className="billing-container">
        <h2 className="billing-title">Billing Information</h2>
        <form onSubmit={handleSubmit} className="billing-form">
          {/* Form fields */}
          {/* ... */}
          <button type="submit" className="billing-button">Pay with Card</button>
        </form>
      </div>
    </>
  );
}

export default Billing;
