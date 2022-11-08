import React from "react";
import "./CityName.css";

export default function CityName() {
  return (
    <div className="CityName">
      <div className="row">
        <div className="col-6">
          <h1 id="city"></h1>
          <h2>Friday 17:05</h2>

          <div className="clearfix weather-temperature">
            <div className="temperature">
              <img src="" alt="Clear" id="icon" class="icon" width="120" />

              <strong id="temperature"></strong>
              <span className="units"> °C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
