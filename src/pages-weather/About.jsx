import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import logo from "../weatherlogo-removebg-preview.png";

function About(){
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
            <div className="about">
            <h1>About This Weather App</h1>
            <h3>
                This weather app provides real-time weather updates for any city worldwide.
                Get accurate temperature, weather conditions, and descriptions instantly.
            </h3>
      
            <h2>Features</h2>
            <ul>
                <li>Live weather data from OpenWeather API</li>
                <li>Search for any city worldwide</li>
                <li>User-friendly interface</li>
                <li>Accurate temperature and weather conditions</li>
            </ul>

            <h2>How It Works</h2>
            <p>
             Enter the city name in the search bar and click "Get Weather." The app fetches
                real-time weather information and displays it on the screen.
            </p>

            <h2>Technology Used</h2>
            <ul>
                <li>React.js for frontend development</li>
                <li>OpenWeather API for weather data</li>
                <li>CSS for styling</li>
            </ul>
            </div>
        </body>
    )
};

export default About;