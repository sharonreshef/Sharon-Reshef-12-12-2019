import React, { Fragment, useState } from "react";
import { MDBRow, MDBInput, MDBCol, MDBAutocomplete } from "mdbreact";
import axios from "axios";
import SearchBar from "./SearchBar";
import MainWeather from "./MainWeather";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illnois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const Landing = () => {
  {
    return (
      <Fragment>
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
          <MainWeather />
        </MDBCol>
      </Fragment>
    );
  }
};

export default Landing;
