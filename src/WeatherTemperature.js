import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
     
      <WeatherIcon code={props.data.icon} size={5} />
      
      <div className="col-6 d-flex">
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
  }