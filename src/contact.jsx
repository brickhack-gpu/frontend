import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', name);
    console.log('Email Address:', email);
    console.log('Message:', message);

    // Clear the form (If you want to clear the form after submit)
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact-container">
      <Navbar />
      <form onSubmit={handleSubmit} className="contact-form">
        <h1 className="contact-title">Contact Us</h1>
        <input 
          className="contact-input"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="contact-input"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          className="contact-input"
          value={message}
          placeholder="Enter message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="contact-button1">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
