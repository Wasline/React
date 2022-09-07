import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Search m-5">
        <ul>
          <div>
            <li>{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </div>

          <div>
            <WeatherTemperature data={props.data} />
          </div>

          <div>
  
            <li>
              💧 Humidity:<span>{props.data.humidity}</span>%
            </li>
            <li>
              🌬️ Wind:<span>{Math.round(props.data.wind)}</span>
              km/h
            </li>
          </div>
        </ul>
        <br />
        <br />
      </div>
    </div>
  );
}
