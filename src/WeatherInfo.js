import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div classeName="Search">
        <ul>
          <div>
            <li id="city">{props.data.city}</li>
            <li id="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li id="description" className="text-capitalize">
              {props.data.description}
            </li>
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div>
            <li>
              🌧️ Precipitation:
              <span id="precipitation">{props.data.precipitation}</span>%
            </li>
            <li>
              💧 Humidity:<span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              🌬️ Wind:<span id="wind">{props.data.wind}</span>km/h
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
