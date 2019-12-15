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

const MainWeather = ({ city }) => {
  return !city.cityName ? (
    <Fragment></Fragment>
  ) : (
    <MDBCol>
      <MDBCard style={{ width: "20rem" }} className="z-depth-1 mb-4 ">
        <MDBCardImage className="img-fluid" src="" />
        <MDBCardBody>
          <MDBCardTitle className="h5">title</MDBCardTitle>
          <MDBCardText>{city.WeatherIcon}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

MainWeather.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {})(MainWeather);
