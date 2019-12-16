import React, { Fragment } from "react";
import { MDBBox } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import MainWeatherContainer from "../weatherDetails/MainWeatherContainer";

const Landing = ({ city }) => {
  {
    return (
      <Fragment>
        <MDBBox display="flex" flex="column" alignItems="center">
          {!city.name ? (
            <Fragment>
              <div className="text-center my-4">
                <p className="h1-responsive text-center font-weight-bold ">
                  Enter a city name to find out the current weather
                </p>
              </div>
              <p className="grey-text text-center w-responsive mx-auto">
                Add cities to your favorites for quick access
              </p>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
          <SearchBar />
        </MDBBox>
        <MainWeatherContainer />
      </Fragment>
    );
  }
};

Landing.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, {})(Landing);
