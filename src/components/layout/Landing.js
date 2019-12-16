import React, { Fragment, useState } from "react";
import { MDBRow, MDBInput, MDBCol, MDBContainer } from "mdbreact";
import SearchBar from "./SearchBar";
import MainWeatherContainer from "../weatherDetails/MainWeatherContainer";

const Landing = () => {
  {
    return (
      <MDBContainer>
        <div className="text-center my-4">
          <p className="h1-responsive text-center font-weight-bold ">
            Enter a city name to find out the current weather
          </p>
        </div>
        <MDBRow className="text-center">
          <p className="grey-text text-center w-responsive mx-auto">
            Add cities to your favorites for quick access
          </p>
        </MDBRow>
        <MDBCol md="6" className="text-center">
          <SearchBar />
          <MainWeatherContainer />
        </MDBCol>
      </MDBContainer>
    );
  }
};

export default Landing;
