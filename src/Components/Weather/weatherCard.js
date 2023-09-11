import React, { useEffect } from "react";

const WeatherCard = ({ weather }) => {
  const [weatherType, setWeatherType] = React.useState("");
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = weather;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherType("wi-day-cloudy");

          break;
        case "Haze":
          setWeatherType("wi-fog");

          break;
        case "Clear":
          setWeatherType("wi-day-cloudy");

          break;
        case "Mist":
          setWeatherType("wi-dust");

          break;

        default:
          setWeatherType("wi-day-cloudy");
          break;
      }
    }
  }, [weathermood]);

  //   convert into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;

  let stro = "";
  if (date.getHours() > 12) stro = "PM";
  else return (stro = "AM");

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherType}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{`${name}, ${country}`}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} {stro}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
