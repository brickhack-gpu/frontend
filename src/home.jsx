import React from "react";
import Navbar from "./Navbar";
import "./home.css"; // Import the CSS file

function home() {
    return ( 
        <>
        <Navbar />
        <div className="section" id="section1">
            <h1>Hello</h1>
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