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
  MDBRow
} from "mdbreact";
import CurrentWeatherDetails from "./CurrentWeatherDetails";

const MainWeatherContainer = ({ city }) => {
  return !city.name ? (
    <Fragment></Fragment>
  ) : (
    <MDBCol>
      <MDBCard style={{ width: "50rem" }} className="z-depth-1 mb-4 ">
        <CurrentWeatherDetails />
      </MDBCard>
    </MDBCol>
  );
};

MainWeatherContainer.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {})(MainWeatherContainer);
