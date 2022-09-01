import React, { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "d5eb4363f756421ee7fc09852c61e35c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="search-button"
            placeholder="Where to ?"
            autocomplete="off"
            autofocus="on"
            className="form-control"
            onChange={handleUpdateCity}
          />{" "}
          <button
            type="button"
            className="btn btn-outline-primary"
            title="Search Icon "
          >
            🔎
          </button>{" "}
          <button
            type="button"
            className="btn btn-outline-primary"
            title="Pin Icon "
          >
            <img
              src="images/PinIcon.png"
              width="18"
              height="20"
              alt="Blue pin location emoji"
              title="Blue Map Pin Icon"
            ></img>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <p className="text-center">
        Loading <LoadingIcons.Circles />
      </p>
    );
  }
}
