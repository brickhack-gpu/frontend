import React from "react";
import Navbar from "./Navbar";

function home() {
    return ( 
        <>
        <Navbar />
        
        <div className="section" id="section1">
            <div className="sub1">
                <h1 className="highlighted-text">
                <span className="light-blue">"Easy </span> 
                <span className="white">and </span> 
                <span className="light-blue">Simple"</span>
                </h1>
                <h2 className="WE">We streamline the setup of your GPU server for a seamless and effortless experience</h2>
                <button className="button1">Spin-Up</button>
            </div>
            <div className="intag">
                <h2>Compatablility...</h2>
                <div className="logospace">
                <img src="public\tensor-flow-logo.avif" alt="tensorflow" />
                <img src="public\pytorch-logo.avif" alt="pytorch" />
                <img src="public\jupyter-logo.avif" alt="jypter" />
                <img src="public\nvidia-cuda-logo.avif" alt="cuda" />
                </div>
            </div>
        </div>
        <div className="section" id="section2">
            <div className="sub1">
                <h1 className="ME"> Accessibility </h1>
                <h2 className="WE">We believe everybody should have the oppertunity to spin up a sever and train, no matter the expirence or budget</h2>
                <button className="button1">Start Spinning</button>
            </div>
        
            <h1 className="delop">Develop, train, and scale. All in one place...</h1>

            <div className="gpuu11">
                {/* Repeat the image 7 times */}
                {[...Array(5)].map((_, index) => (
                <img key={index} src="public\pnggpugugugg'.png" alt="GPU" /> // Replace with your image path
                ))}
            </div>
            

        </div>


        <div className="section" id="section3">
            <h1 className="prices">These prices are nothing like you've seen before...</h1>
             <div className="gpu-table">
            <ul>
            <li className="gpu-item">
                 <span className="gpu-main">GPU</span>
                 <span className="gpu-main">GB</span>
                 <span className="gpu-main">COST</span>
             </li> 
                
            <li className="gpu-item">
                 <span className="gpu-name">A100</span>
                 <span className="gpu-info">80 GB</span>
                 <span className="gpu-price">$1.89 / hr</span>
             </li>
             <li className="gpu-item">
               <span className="gpu-name">H100</span>
               <span className="gpu-info">80 GB</span>
                  <span className="gpu-price">$3.89 / hr</span>
             </li>
             <li className="gpu-item">
               <span className="gpu-name">A40</span>
               <span className="gpu-info">48 GB</span>
                  <span className="gpu-price">$0.77 / hr</span>
             </li>
              <li className="gpu-item">
                 <span className="gpu-name">RTX 4090</span>
                 <span className="gpu-info">24 GB</span>
                  <span className="gpu-price">$0.74 / hr</span>
             </li>
             <li className="gpu-item">
                 <span className="gpu-name">RTX A6000</span>
                <span className="gpu-info">48 GB</span>
                 <span className="gpu-price">$0.79 / hr</span>
                </li>
            </ul>
            <button className="gpu-table-button">See Pricing</button>
        </div>
  

        </div>
        </>
    )
}

export default home;