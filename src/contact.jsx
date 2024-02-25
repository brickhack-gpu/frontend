import React from "react";
import { useState } from "react";
import "./App.css";

function contact() {
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
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label class="contactLabel">Name:</label> */}
            <input class="contactInput"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          {/* <label class="contactLabel">Email:</label> */}
            <input class="contactInput"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label class="contactLabel">Message:</label> */}
            <input class="contactInput"
            type="message"
              value={message}
              placeholder="Enter message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }


export default contact; 