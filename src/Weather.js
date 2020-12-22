import React from "react";

import './Weather.css';

export default function Weather() {
    let weatherData = {
        city: "San Francisco",
        date: "Tuesday, 10:00",
        temperature: 18,
        description: "Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        humidity: 80,
        wind: 10,
        atm: 1020
    };
    return (
        <div className="Weather">
            <form className="mb-3">
                <div className="row">
                    <div className="col-8">
                        <input
                            type="search"
                            placeholder="Type a City name.."
                            className="form-control"
                            autocomplete="off"
                        />
                    </div>
                    <div className="col-2">
                        <button className="form-control btn btn-primary shadow-sm">Search</button>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-success  btn-icon"> Current </button>
                </div>
            </form>
            <div className="overview">
                <h1>{weatherData.city}</h1>
                <ul>
                    <strong>
                        <li> {weatherData.date} </li>
                    </strong>
                    <li>{weatherData.description}</li>
                    <li />
                </ul>
                <div className="row">
                    <div className="col-md-6">
                        <div className="clearfix weather-temperature">
                            <img
                                src={weatherData.imgUrl}
                                alt={weatherData.description}
                                id="icon"
                                class="float-left"
                            />
                            <div className="float-left">
                                <strong>{weatherData.temperature}</strong>
                                <span className="units">
                                    <a href="/" className="active">
                                        {" "}
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="fahrenheit-link">
                                        {" "}
                    °F{" "}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity :{weatherData.humidity} %</li>
                            <li>Wind :{weatherData.wind} km/h</li>
                            <li>Atm: {weatherData.atm} hPa</li>
                        </ul>
                    </div>
                </div>
                <span className="windy-link">
                    <a
                        href="https://www.windy.com/37.778/-122.442?37.281,-122.442,8"
                        target="blank"
                    >
                        {" "}
            Windy{" "}
                    </a>
                </span>{" "}
        🌡️💨
        <div className="row weather-forecast"></div>
            </div>
        </div>
    );
}
