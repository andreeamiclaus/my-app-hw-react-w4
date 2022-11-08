import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-date">Thu</div>
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="42"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max"> </span>
              <span className="weather-forecast-temperature-min"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
