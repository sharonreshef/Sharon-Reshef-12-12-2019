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
          <img
            key={key}
            className="img-fluid"
            src={
              currentWeatherData.WeatherIcon < 10
                ? `https://developer.accuweather.com/sites/default/files/0${currentWeatherData.WeatherIcon}-s.png`
                : `https://developer.accuweather.com/sites/default/files/${currentWeatherData.WeatherIcon}-s.png`
            }
          />
          <div id="temp" className={isCelcius ? "text-c" : "text-f"}>
            {currentWeatherData.Temperature.Metric.Value}
          </div>
        </div>
        <div id="city" className="city">
          {name}, {country}
          <MDBBtn
            color={isFavorite ? "pink" : "elegant"}
            onClick={e => {
              isFavorite ? removeFromFavorites(city) : addToFavorites(city);
              console.log("click");
            }}
          >
            <i
              className={
                isFavorite ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"
              }
            />{" "}
            {isFavorite ? "Remove" : "Add"}
          </MDBBtn>
        </div>
      </div>
      {/* <MDBCardImage
        key={key}
        className="img-fluid"
        src={
          currentWeatherData.WeatherIcon < 10
            ? `https://developer.accuweather.com/sites/default/files/0${currentWeatherData.WeatherIcon}-s.png`
            : `https://developer.accuweather.com/sites/default/files/${currentWeatherData.WeatherIcon}-s.png`
        }
      />
      <MDBBtn
        color={isFavorite ? "pink" : "elegant"}
        onClick={e => {
          isFavorite ? removeFromFavorites(city) : addToFavorites(city);
          console.log("click");
        }}
      >
        <i
          className={isFavorite ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}
        />{" "}
        {isFavorite ? "Remove" : "Add"}
      </MDBBtn>
      <MDBCardBody>
        <MDBCardTitle className="h5">
          {name}, {country}
        </MDBCardTitle>
        <MDBCardText>
          temp: {currentWeatherData.Temperature.Metric.Value},{" "}
          {currentWeatherData.Temperature.Metric.Unit}
          {"\u00b0"}
        </MDBCardText>
      </MDBCardBody> */}
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
