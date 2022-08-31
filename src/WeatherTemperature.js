import React from "react";


export default function WeatherTemperature(props) {
  return (
    <div className="clearfix WeatherTemperature">
       iconUrl{props.data.icon} alt={props.data.description}
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
