import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";
import { getCityData } from "../../actions/city";
import Moment from "react-moment";

import "./CurrentWeatherDetails.scss";

const CurrentWeatherDetails = ({
  favorites,
  city,
  addToFavorites,
  removeFromFavorites,
  getCityData
}) => {
  const { name, key, country, currentWeatherData, isCelsius } = city;

  useEffect(() => {
    console.log(currentWeatherData);
    const interval = setInterval(() => {
      getCityData(city.name, city.key, city.country);
    }, 1800000);
    return () => clearInterval(interval);
  }, [city.country, city.name, city.key, getCityData]);

  let isFavorite;
  if (favorites.find(city => city.key === key)) {
    isFavorite = true;
  }

  var timestamp = Date.now(),
    normalisedTime = new Date(timestamp);

  return (
    <Fragment>
      <div className="weather-card-container">
        <div id="card" className="weather-card day">
          <div className="weather-elements">
            <img
              alt="weather icon"
              key={key}
              className="today-icon"
              src={
                currentWeatherData.WeatherIcon < 10
                  ? `https://developer.accuweather.com/sites/default/files/0${currentWeatherData.WeatherIcon}-s.png`
                  : `https://developer.accuweather.com/sites/default/files/${currentWeatherData.WeatherIcon}-s.png`
              }
            />
            <i
              onClick={e => {
                isFavorite ? removeFromFavorites(city) : addToFavorites(city);
              }}
              className={
                isFavorite
                  ? "icon fas fa-star favorite fa-2x"
                  : "icon far fa-star fa-2x"
              }
            />
          </div>
          <div id="temp" className={isCelsius ? "text-c" : "text-f"}>
            {isCelsius
              ? Math.floor(currentWeatherData.Temperature.Metric.Value)
              : Math.floor(currentWeatherData.Temperature.Imperial.Value)}
          </div>
          <div className="text">
            {currentWeatherData.WeatherText}{" "}
            <span className="date">
              <Moment format="DD/MM/YYYY">{normalisedTime}</Moment>
            </span>
          </div>
        </div>
        <div id="city" className="city">
          {name}
          <span className="country">{country}</span>
        </div>
      </div>
    </Fragment>
  );
};

CurrentWeatherDetails.propTypes = {
  city: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  getCityData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city,
  favorites: state.favorites
});

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
  getCityData
})(CurrentWeatherDetails);
