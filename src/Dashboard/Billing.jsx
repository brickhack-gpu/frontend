import React from "react";
import { useState } from "react";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

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
    console.log(billingInfo); 
  };


    
  return (
    <>
        <Sidebar />
    <div className="billing">
      <h2>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={billingInfo.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={billingInfo.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={billingInfo.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={billingInfo.state}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            value={billingInfo.zip}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Card Number:
          <input
            type="password"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Expiration:
          <input
            type="password"
            name="expiration"
            value={billingInfo.expiration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="password"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  

        </>

      );
    }


export default Billing; 