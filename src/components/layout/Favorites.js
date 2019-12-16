import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FavoriteCard from "../favoritesDetails/FavoriteCard";

const Favorites = ({ favorites }) => {
  return (
    <Fragment>
      {favorites.map(city => (
        <FavoriteCard key={city.key} city={city} />
      ))}
    </Fragment>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, {})(Favorites);
