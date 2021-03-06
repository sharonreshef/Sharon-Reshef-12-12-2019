import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { MDBRow } from "mdbreact";
import "./FiveDaysWeather.scss";

const FiveDaysWeather = ({ city }) => {
  const { fiveDaysWeather } = city;
  const getDayFromEpochDate = epochDate => {
    var date = new Date(epochDate * 1000).toLocaleDateString("en-us", {
      weekday: "long"
    });
    return date;
  };

  const convertToFahrenheit = celsius => {
    return (celsius * 1.8 + 32).toFixed(1);
  };

  return fiveDaysWeather ? (
    <div className="days-container">
      <MDBRow className="five-days-cards">
        {fiveDaysWeather.map(day => (
          <div key={day.Date} className="day-card day">
            <div id="city" className="day-name">
              {getDayFromEpochDate(day.EpochDate)}
            </div>
            <img
              alt="weather icon"
              className="today-icon"
              src={
                day.Day.Icon < 10
                  ? `https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`
                  : `https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`
              }
            />
            <div className="icon-phrase">{day.Day.IconPhrase}</div>
            <div className="push">
              <div className="temp">
                <div className="degrees">
                  {city.isCelsius
                    ? Math.floor(day.Temperature.Maximum.Value)
                    : convertToFahrenheit(
                        Math.floor(day.Temperature.Maximum.Value)
                      )}
                  °
                </div>
                <div className="degrees">
                  {city.isCelsius
                    ? Math.floor(day.Temperature.Minimum.Value)
                    : convertToFahrenheit(
                        Math.floor(day.Temperature.Minimum.Value)
                      )}
                  °
                </div>
              </div>
              <div className="temp">
                <div>Max</div>|<div>Min</div>
              </div>
            </div>
          </div>
        ))}
      </MDBRow>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

FiveDaysWeather.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {})(FiveDaysWeather);
