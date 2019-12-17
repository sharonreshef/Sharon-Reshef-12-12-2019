import React, { Fragment } from "react";
import { MDBBox } from "mdbreact";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import MainWeatherContainer from "../weatherDetails/MainWeatherContainer";
import spinner from "./spinner.gif";

const Landing = ({ city, alert }) => {
  return (
    <Fragment>
      <MDBBox
        display="flex"
        flex="column"
        alignItems="center"
        className="container"
      >
        <Fragment>
          <div className="text-center hide-sm">
            <p className="h5-responsive text-center font-weight-bold ">
              Enter a city name to find out the current weather
            </p>
          </div>
          <p className="grey-text text-center w-responsive mx-auto hide-sm">
            Add cities to your favorites for quick access
          </p>
        </Fragment>
        <SearchBar />
      </MDBBox>
      {city.isLoading && !alert ? (
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
};

const mapStateToProps = state => ({
  city: state.city,
  alert: state.alerts
});

export default connect(mapStateToProps, {})(Landing);
