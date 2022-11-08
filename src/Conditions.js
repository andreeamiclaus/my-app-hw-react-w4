import React from "react";
import "./Conditions.css";

export default function Conditions() {
  return (
    <div className="Conditions">
      <div className="col-6">
        <div className="conditions">
          <p>
            Feels like: <span id="feels-like"></span> °C
          </p>
          <p>
            {" "}
            Humidity: <span id="humidity"> </span> %
          </p>

          <p>
            {" "}
            Wind: <span id="wind"> </span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
