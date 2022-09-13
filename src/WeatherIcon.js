import React from "react";
import clearDay from "./images/01d.svg";
import clearNight from "./images/01n.svg";
import overcastDay from "./images/02d.svg";
import overcastNight from "./images/02n.svg";
import cloudy from "./images/03d.svg";
import overcast from "./images/04d.svg";
import rain from "./images/09d.svg";
import thunderstorms from "./images/11n.svg";
import snow from "./images/13d.svg";
import mist from "./images/50n.svg";

export default function WeatherIcon(props) {
    const codeMapping = {
      "01d": clearDay,
      "01n": clearNight,
      "02d": overcastDay,
      "02n": overcastNight,
      "03d": cloudy,
      "03n": overcast,
      "04n": overcast,
      "09d": rain,
      "09n": rain,
      "10d": rain,
      "10n": rain,
      "11d": thunderstorms,
      "11n": thunderstorms,
      "13d": snow,
      "13n": snow,
      "50d": mist,
      "50n": mist,
    };

    return (
    <img src={codeMapping[props.code]}
    alt="weather icon"
    size={props.size}
    />
    );
}