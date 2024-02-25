import React from 'react';
import './App.css';
import Navbar from './Navbar';

function Pricing() {
  // Function to handle the 'Spin it' action
  const handleSpin = (gpuName) => {
    console.log(`Spinning up ${gpuName}`);
    // Add logic to handle spinning up the GPU
  };

  const gpuOptions = [
    { name: 'A100', memory: '80 GB', price: '$1.89 / hr' },
    { name: 'H100', memory: '80 GB', price: '$3.89 / hr' },
    { name: 'A40', memory: '48 GB', price: '$0.77 / hr' },
    { name: 'RTX 4090', memory: '24 GB', price: '$0.74 / hr' },
    { name: 'RTX A6000', memory: '48 GB', price: '$0.79 / hr' },
    { name: 'V100', memory: '32 GB', price: '$2.50 / hr' },
    { name: 'T4', memory: '16 GB', price: '$0.65 / hr' },
    { name: 'P100', memory: '16 GB', price: '$1.50 / hr' },
    { name: 'K80', memory: '24 GB', price: '$0.45 / hr' },
  ];

  return (
    <>
      <Navbar />
      <div className="pricing-container">
        <h1 className="pricing-title">GPU Pricing</h1>
        <div className="gpu-pricing-table">
          {gpuOptions.map((gpu, index) => (
            <div className="gpu-pricing-item" key={index}>
              <span className="gpu-name">{gpu.name}</span>
              <span className="gpu-memory">{gpu.memory}</span>
              <span className="gpu-price">{gpu.price}</span>
              <button className="spin-button" onClick={() => handleSpin(gpu.name)}>Spin it</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
