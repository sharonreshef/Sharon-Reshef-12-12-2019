import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions/favorites";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow
} from "mdbreact";
import "./CurrentWeatherDetails.scss";

const CurrentWeatherDetails = ({
  city,
  addToFavorites,
  removeFromFavorites
}) => {
  const { name, key, country, currentWeatherData, isFavorite } = city;
  let isCelcius = true;

  return (
    <Fragment>
      <div className="weather-card-container">
        <div id="card" className="weather-card day">
          <div className="weather-elements">
            <img
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
                console.log("click");
              }}
              className={
                isFavorite ? "fas fa-star favorite fa-2x" : "far fa-star fa-2x"
              }
            />
          </div>
          <div id="temp" className={isCelcius ? "text-c" : "text-f"}>
            {currentWeatherData.Temperature.Metric.Value}
          </div>
          <div className="text">{currentWeatherData.WeatherText}</div>
        </div>
        <div id="city" className="city">
          {name}, {country}
        </div>
      </div>
    </Fragment>
  );
};

CurrentWeatherDetails.propTypes = {
  city: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites
})(CurrentWeatherDetails);
