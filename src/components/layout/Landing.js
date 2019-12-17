import React, { Fragment, useEffect } from "react";
import { MDBBox } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import MainWeatherContainer from "../weatherDetails/MainWeatherContainer";
import { getCityData } from "../../actions/city";
import spinner from "./spinner.gif";

const Landing = ({ getCityData, city }) => {
  {
    return (
      <Fragment>
        <MDBBox
          display="flex"
          flex="column"
          alignItems="center"
          className="container"
        >
          <Fragment>
            <div className="text-center ">
              <p className="h5-responsive text-center font-weight-bold ">
                Enter a city name to find out the current weather
              </p>
            </div>
            <p className="grey-text text-center w-responsive mx-auto">
              Add cities to your favorites for quick access
            </p>
          </Fragment>
          <Fragment></Fragment>
          <SearchBar />
        </MDBBox>
        {city.isLoading ? (
          <Fragment>
            <img
              src={spinner}
              style={{ width: "200px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </Fragment>
        ) : (
          <MainWeatherContainer />
        )}
      </Fragment>
    );
  }
};

Landing.propTypes = {
  getCityData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, { getCityData })(Landing);
