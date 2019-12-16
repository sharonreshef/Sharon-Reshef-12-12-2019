import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCityData } from "../../actions/city";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBBox
} from "mdbreact";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import FiveDaysWeather from "./FiveDaysWeather";

const MainWeatherContainer = ({ city }) => {
  return !city.name ? (
    <Fragment></Fragment>
  ) : (
    <MDBBox
      display="flex"
      flex="column"
      alignItems="center"
      justifyContent="around"
    >
      <CurrentWeatherDetails key={city.key} city={city} />
      <FiveDaysWeather />
    </MDBBox>
  );
};

MainWeatherContainer.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {})(MainWeatherContainer);
