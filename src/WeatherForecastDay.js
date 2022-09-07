import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day(){
    let date= new Date(props.data.dt*1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

  return (
    <div>
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <div className="WeatherIcon">
        <img
          src={props.data.weather[0].icon}
          className="img-fluid weather-icon"
          alt="weather-icon"
          size={5}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}