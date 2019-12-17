import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { getCityData } from "../../actions/city";
import spinner from "./spinner.gif";

import "./Favorites.css";

import CurrentWeatherDetails from "../weatherDetails/CurrentWeatherDetails";
import FavoriteCard from "./FavoriteCard";
import { fetchFavoritesData } from "../../actions/favorites";

const Favorites = ({ favorites, fetchFavoritesData, city }) => {
  useEffect(() => {
    favorites.map(city =>
      fetchFavoritesData(city.name, city.key, city.country)
    );
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="header">YOUR FAVORITES</h1>
      {favorites.length < 1 && <h2>No Favorites cities. </h2>}
      {city.isLoading && favorites.length > 1 ? (
        <Fragment>
          <img
            src={spinner}
            style={{ width: "200px", margin: "auto", display: "block" }}
            alt="Loading..."
          />
        </Fragment>
      ) : (
        <div className="favorites-cards-group">
          {favorites.map(city => (
            <FavoriteCard key={city.key} fixedInfo={city} />
          ))}
        </div>
      )}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  getCityData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  city: state.city
});

export default connect(mapStateToProps, { getCityData, fetchFavoritesData })(
  Favorites
);
