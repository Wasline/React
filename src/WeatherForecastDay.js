import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function weatherIcons(){
  let icon =`.icons/weatherIcons{props.data.weather[0].icon}`
  return icon;
}

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day(){
    let date= new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherIcon">
        <WeatherIcon code ={props.data.waether[0].icon}
          className="img-fluid weather-icon"
          alt="weather-icon"
          size={10}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}