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
        <div className="section" id="section2"></div>
        <div className="section" id="section3"></div>
        </>
    )
}
export default home;