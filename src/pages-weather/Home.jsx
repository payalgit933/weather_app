import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import WeatherInfo from "../components-weather/WeatherInfo";
import logo from "../weatherlogo-removebg-preview.png";

function Home() {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Delhi");
  
    const getData = async () => {
        try {
        const res = await axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=39345495dd49fafb321bbaae130a78e7`
        );
        setData(res.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };
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
      <div className="weatherappcont">
        <h1>Weather Forecast</h1>
        <input type="text" placeholder="Search city" value={city} onChange={(e) => setCity(e.target.value)}/>
        <button onClick={getData}>Get Weather</button>
        <WeatherInfo data={data} />
        </div>
    </body>
       
    )
};

export default Home;