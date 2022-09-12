import React from "react";
import WeatherIcons from "./icons/WeatherIcons";

export default function WeatherIcon(props) {
    const codeMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW_DAY",
      "13n": "SNOW_NIGHT",
      "50d": "FOG_DAY",
      "50n": "FOG_NIGHT",
    };

    return(
      <div>
        <img src={WeatherIcons}
        icon = {codeMapping[props.code]}
        size = {props.size}
        animate={true}
        />
        </div>
    );
}