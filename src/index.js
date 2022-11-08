import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import CityName from "./CityName";
import Conditions from "./Conditions";
import CurrentLocation from "./CurrentLocation";
import Description from "./Description";
import Footer from "./Footer";
import SearchButton from "./SearchButton";
import SearchForm from "./SearchForm";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="root">
      <App />

      <div className="container">
        <div className="d-flex row">
          <SearchForm />
          <SearchButton />
          <CurrentLocation />
        </div>
        <div className="d-flex row">
          <CityName />
          <Description />
          <Conditions />
        </div>
        <WeatherForecast />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
