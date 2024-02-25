import React from "react";
import Navbar from "./Navbar";

function home() {
    return ( 
        <>
        
        <Navbar />
        
        <div className="section" id="section1">
            <div className="sub1">
                <h1 className="highlighted-text">
                <span className="light-blue">Simple </span> 
                <span className="white">and </span> 
                <span className="light-blue">Efficient</span>
                </h1>
                <h2 className="WE">Run high-powered AI models without the hassel or the monthly subscription.</h2>
                <button className="button1" onClick={() => {window.location.href='/login'}}>Spin-up</button> 
            </div>
            <div className="intag">
                <h2>Compatablility With</h2>
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
                <h1 className="ME">Pay as you go.</h1>
                <h2 className="WE">Instances are billed by the hour. When you're done using or training a model, you're done paying.</h2>
                <button className="button1" onClick={() => {window.location.href='/login'}}>Sign Up</button> 
            </div>
        
            <h1 className="prices">Simple interface for novices and rich features for powerusers.</h1>

            <div className="gpuu11">
                {/* Repeat the image 7 times */}
                {[...Array(5)].map((_, index) => (
                <img key={index} src="public\pnggpugugugg'.png" alt="GPU" /> // Replace with your image path
                ))}
            </div>
            

        </div>


        <div className="section" id="section3">
            <h1 className="prices">Competitive hourly pricing. </h1>
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
            <button className="gpu-table-button" onClick={() => {window.location.href='/pricing'}}>See Pricing</button>
        </div>
  

        </div>
        </>
    )
}

export default home;