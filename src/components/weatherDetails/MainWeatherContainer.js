import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import FiveDaysWeather from "./FiveDaysWeather";
import { MDBBox } from "mdbreact";
import spinner from "../layout/spinner.gif";

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
      {city.isLoading ? (
        <Fragment>
          <img
            src={spinner}
            style={{ width: "200px", margin: "auto", display: "block" }}
            alt="Loading..."
          />
        </Fragment>
      ) : (
        <Fragment>
          <CurrentWeatherDetails key={city.key} city={city} />
          <FiveDaysWeather />
        </Fragment>
      )}
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
