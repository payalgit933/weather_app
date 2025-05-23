import React from "react";
import "./weather.css";
import logo from "../cloud.png";

function WeatherInfo({data}){
    if (!data) return null;
    
  return (
    <div className="weather-container">
      <h2 className="city-name">{data.name}</h2>
      <img src={logo} alt="Weather Logo" />
      <p className="temperature">{data.main.temp}°C</p>
      <p className="description">{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
