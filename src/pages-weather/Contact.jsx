import React from "react";
import logo from "../weatherlogo-removebg-preview.png";

function Contact(){
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
            <div className="contact">
                <h1>This is Contact Page</h1>
            </div>
        </body>
        
    )
};

export default Contact;