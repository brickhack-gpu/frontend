import React from "react";
import { useState } from "react";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

function Billing() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Full Name:', name);
        console.log('Email Address:', email);
        console.log('Message:', message);

        setName('');
        setEmail('');
        setMessage('');
    }



    return (
      <>
        <Sidebar />

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label className="contactLabel">Name:</label> */}
            <input className="contactInput"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          {/* <label className="contactLabel">Email:</label> */}
            <input className="contactInput"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="contactLabel">Message:</label> */}
            <input className="contactInput"
            type="message"
              value={message}
              placeholder="Enter message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        </>

      );
    }


export default Billing; 