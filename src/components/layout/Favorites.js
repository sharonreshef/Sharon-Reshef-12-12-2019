import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { getCityData } from "../../actions/city";

import "./Favorites.css";

import CurrentWeatherDetails from "../weatherDetails/CurrentWeatherDetails";
import FavoriteCard from "./FavoriteCard";

const Favorites = ({ favorites, getCityData }) => {
  return (
    <div className="favorites-container">
      <h1 className="header">YOUR FAVORITES</h1>
      {favorites.length < 1 && <h2>No Favorites cities. </h2>}
      <div className="favorites-cards-group">
        {favorites.map(city => (
          <Link
            to="/"
            className="weather-card-container"
            onClick={e => {
              getCityData(city.name, city.key, city.country);
            }}
          >
            <FavoriteCard key={city.key} fixedInfo={city} />
          </Link>
        ))}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  getCityData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, { getCityData })(Favorites);
