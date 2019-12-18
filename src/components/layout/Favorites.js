import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCityData } from "../../actions/city";
import spinner from "./spinner.gif";
import FavoriteCard from "./FavoriteCard";
import { fetchFavoritesData } from "../../actions/favorites";
import "./Favorites.css";

const Favorites = ({ favorites, fetchFavoritesData, city }) => {
  const { isLoading } = city;
  useEffect(() => {
    favorites.map(city =>
      fetchFavoritesData(city.name, city.key, city.country)
    );
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="header">YOUR FAVORITES</h1>
      {favorites.length < 1 && <h2>No Favorites cities. </h2>}
      {isLoading && favorites.length > 1 ? (
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
