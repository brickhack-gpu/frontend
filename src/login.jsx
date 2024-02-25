import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form (If you want to clear the form after submit)
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Navbar />
      <div className="login1-container">
        <form onSubmit={handleSubmit} className="login1-form">
        <img src="public\unboltedfinl.png" className="logo123" alt="Logo" />
          <input 
            className="login12-input"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            className="login1-input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login1-button">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
