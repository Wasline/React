import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <ul>
        <div>
          <li id="city">Paris</li>
          <li id="time">Monday 15:29</li>
          <li id="description"> Mostly Cloudy</li>
        </div>
        <div className="clearfix weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Weather icon"
          />
          <strong id="temperature">20</strong>
          <span className="units">°C</span>
        </div>
        <div>
          <li>
            🌧️ Precipitation:<span id="precipitation">10</span>%
          </li>
          <li>
            💧 Humidity:<span id="humidity">20</span>%
          </li>
          <li>
            🌬️ Wind:<span id="wind">5</span>km/h
          </li>
        </div>
      </ul>
    </div>
  );
}
