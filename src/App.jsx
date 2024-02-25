import { useState } from 'react'
import './App.css'
import Spinup from "./spinup";
import Pricing from "./pricing";
import Faq from "./faq";
import Contact from "./contact";
import Login from "./login"
import Dashboard from "./dashboard"
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Billing from './Dashboard/Billing';
import Spin from './Dashboard/Spin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar />Sigbet is rigged</div>} />
        <Route path="/spinup" element={<Spinup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/spin" element={<Spin />} />
      </Routes>
    </Router>
  );
}

export default App;