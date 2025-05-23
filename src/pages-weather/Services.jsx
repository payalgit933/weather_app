import React from "react";
import logo from "../weatherlogo-removebg-preview.png";

function Services(){
    return(
        <body>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Weather Logo" />
                </div>
                <h1 className="title">Weather</h1>
                <div className="nav-items">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
            <div className="service">
                <h1>This is Services Page</h1>
            </div>
        </body>
        
    )
};

export default Services;