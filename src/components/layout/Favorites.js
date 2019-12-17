import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { getCityData } from "../../actions/city";

import "./Favorites.css";

import CurrentWeatherDetails from "../weatherDetails/CurrentWeatherDetails";
import FavoriteCard from "./FavoriteCard";
import { fetchFavoritesData } from "../../actions/favorites";

const Favorites = ({ favorites, fetchFavoritesData }) => {
  useEffect(() => {
    favorites.map(city =>
      fetchFavoritesData(city.name, city.key, city.country)
    );
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="header">YOUR FAVORITES</h1>
      {favorites.length < 1 && <h2>No Favorites cities. </h2>}
      <div className="favorites-cards-group">
        {favorites.map(city => (
          <FavoriteCard key={city.key} fixedInfo={city} />
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

export default connect(mapStateToProps, { getCityData, fetchFavoritesData })(
  Favorites
);
