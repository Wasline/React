import React from "react";
import clearDay from "./images/01d.svg";
import clearNight from "./images/01n.svg";
import overcastDay from "./images/02d.svg";
import overcastNight from "./images/02n.svg";
import cloudyDay from "./images/03d.svg";
import cloudyNight from "./images/03n.svg";
import brokenCloudsDay from "./images/04d.svg";
import brokenCloudsNight from "./images/04n.svg";
import rain from "./images/09d.svg";
import rainy from "./images/09n.svg";
import rains from "./images/10d.svg";
import rainn from "./images/10n.svg";
import thunderstormsDay from "./images/11d.svg";
import thunderstormsNight from "./images/11n.svg";
import snowDay from "./images/13d.svg";
import snowNight from "./images/13n.svg";
import mistDay from "./images/50d.svg";
import mistNight from "./images/50n.svg";

export default function WeatherIcon(props) {
    const codeMapping = {
      "01d": clearDay,
      "01n": clearNight,
      "02d": overcastDay,
      "02n": overcastNight,
      "03d": cloudyDay,
      "03n": cloudyNight,
      "04d": brokenCloudsDay,
      "04n": brokenCloudsNight,
      "09d": rain,
      "09n": rainy,
      "10d": rains,
      "10n": rainn,
      "11d": thunderstormsDay,
      "11n": thunderstormsNight,
      "13d": snowDay,
      "13n": snowNight,
      "50d": mistDay,
      "50n": mistNight,
    };

    return (
    <img src={codeMapping[props.code]}
    alt="weather icon"
    size={props.size}
    />
    );
}