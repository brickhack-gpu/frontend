import React from "react";
import { useState } from "react";
import "./App.css";

function login() {
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
        `<div class="box">
            <h1>Login</h1>
          <div>
            {/* <label class="contactLabel">Name:</label> */}
            <input class="loginInput"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          {/* <label class="contactLabel">Email:</label> */}
            <input class="loginInput"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {/* <label class="contactLabel">Message:</label> */}
            <input class="loginInput"
            type="password"
              value={message}
              placeholder="Password"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Login</button>
          </div>
        </form>

      );
    }


export default login; 