// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=eb04042e87c6ee618f137a4c20a2dd8d
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=2e32f2513227255014422c0b7029214d
import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [weather, setWeather] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data);

      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setWeather(myWeatherInfo);

      //   console.log(temp);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* our Temp Card */}
      <WeatherCard weather={weather} />
    </>
  );
};

export default Weather;
