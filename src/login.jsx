import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { PostLogin, PostRegister } from './API.js';
import logo from '../public/fiunainfainfnajfnaifnaskofbafbosfbkfsablkfbaslkf.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [working, setWorking] = useState(false);

  async function handleLogin() {
    setWorking(true);
    setError('');

    try {
        await PostLogin(email, password);
    } catch(e) {
        setError(e.toString());
    }

    setWorking(false);
  }

  async function handleRegister() {
    setWorking(true);
    setError('');

    try {
        await PostRegister(email, password);
    } catch(e) {
        setError(e.toString());
    }

    setWorking(false);
  }

  return (
    <>
      <Navbar />
      <div className="login1-container">
        <form className="login1-form">
        <img src={logo} className="logo123" alt="Logo" />
        { error ? <p className="error">{error}</p> : null }
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
          <div className="inbtn">
              <button onClick={handleLogin} disabled={working} type="submit" className="login1-button">Login</button>
              <button onClick={handleRegister} disabled={working} type="submit" className="login1-button">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
