import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <ul>
        <div>
          <li id="city">Paris</li>
          <li id="time">15:29</li>
          <li id="description"> Foggy</li>
        </div>
        <div className="clearfix weather-temperature">
          <img src="" alt=" Weather icon" />
          <strong id="temperature">20</strong>
          <span className="units">°C</span>
        </div>
        <div>
          <li>
            Humidity:20 <span id="humidity"></span>%
          </li>
          <li>
            Wind:5 <span id="wind"></span>km/h
          </li>
        </div>
      </ul>
    </div>
  );
}
