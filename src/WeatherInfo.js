import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div classeName="Search">
        <ul>
          <div>
            <li>{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
              {props.data.description}
            </li>
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div>
            <li>
              🌧️ Precipitation:
              <span>{props.data.precipitation}</span>%
            </li>
            <li>
              💧 Humidity:<span>{props.data.humidity}</span>%
            </li>
            <li>
              🌬️ Wind:<span>{props.data.wind}</span>km/h
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
