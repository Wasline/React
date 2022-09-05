import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <img
          src={props.data.icon}
          className="img-fluid weather-icon"
          alt="weather-icon"
          size="15"
        />
        <div className="col-6 d-flex">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">
            °C |{" "}
            <a
              href="/"
              className="text-decoration-none"
              onClick={showFahrenheit}
            >
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.data.temperature * 9) / 5 + 32;
    return (
      <div className="clearfix WeatherTemperature">
        <img
          src={props.data.icon}
          className="img-fluid weather-icon"
          alt="weather-icon"
          size="15"
        />

        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
