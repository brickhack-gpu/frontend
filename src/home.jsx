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
                <h2>We streamline the setup of your GPU server for a seamless and effortless experience</h2>
                <button>Spin-Up</button>
            </div>
            <div className="gray-box">
                <h2>World</h2>
            </div>
        </div>
        <div className="section" id="section2"></div>
        <div className="section" id="section3"></div>
        </>
    )
}
export default home;