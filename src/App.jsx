import { useState } from 'react'
import './App.css'
import Spinup from "./spinup";
import Pricing from "./pricing";
import Faq from "./faq";
import Contact from "./contact";
import Login from "./login"
import Dashboard from "./dashboard"
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav className="navbar">
        <Link className="logo-link" to="/">
          <img src="src/logo.png" className="logo" alt="Logo" />
        </Link>
        <div className="cent-menu">
          <Link className="spinup-button" to="/spinup">Spinup</Link>
          <Link className="pricing-button" to="/pricing">Pricing</Link>
          <Link className="faq-button" to="/faq">FAQ</Link>
          <Link className="contact-button" to="/contact">Contact</Link>
        </div>
        <Link className="login-button" to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Sigbet is rigged</div>} />
        <Route path="/spinup" element={<Spinup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App
