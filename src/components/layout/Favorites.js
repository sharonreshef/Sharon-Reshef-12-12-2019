import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FavoriteCard from "../favoritesDetails/FavoriteCard";
import CurrentWeatherDetails from "../weatherDetails/CurrentWeatherDetails";

const Favorites = ({ favorites }) => {
  console.log("city", favorites);

  return (
    <Fragment>
      {favorites.map(city => (
        <CurrentWeatherDetails key={city.key} city={city} />
      ))}
    </Fragment>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, {})(Favorites);
