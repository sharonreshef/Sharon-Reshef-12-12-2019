import React, { Component, Fragment, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { MDBInput, MDBCol, MDBListGroup, MDBListGroupItem } from "mdbreact";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getCityData } from "../../actions/city";

const SearchBar = ({ getCityData, showHeader }) => {
  //from API
  const [state, setstate] = useState({
    dataSet: [],
    searchValue: ""
  });

  const { dataSet, searchValue } = state;

  const handleSearch = event => {
    setstate({ ...state, searchValue: event.target.value });
    console.log(state.searchValue);
    searchForCity(event.target.value);
  };

  const searchForCity = async value => {
    try {
      // const res = await axios.get(
      //   `locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${value}`
      // );
      // let cities = [];
      // res.data.map(city =>
      //   cities.push({
      //     name: city.LocalizedName,
      //     key: city.Key,
      //     country: city.Country.LocalizedName
      //   })
      // );

      const cities = [
        {
          name: "Tel Aviv",
          country: "Israel",
          key: "12345"
        },
        {
          name: "Teliasi",
          country: "Lithunia",
          key: "6789"
        }
      ];
      setstate({
        dataSet: cities
      });
      console.log(dataSet);
    } catch (err) {
      console.error(err);
    }
  };

  const onChooseCity = async value => {
    console.log(value);
    setstate({
      dataSet: [],
      searchValue: value.name
    });
    getCityData(value);
  };

  return (
    <Fragment>
      <MDBInput
        value={searchValue}
        onChange={handleSearch}
        hint="Enter city name"
        type="text"
        containerClass="mt-0 mb-0"
        icon="search"
      />
      <MDBListGroup>
        {dataSet.map(city => (
          <MDBListGroupItem onClick={() => onChooseCity(city)} key={city.key}>
            {city.name}
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </Fragment>
  );
};

SearchBar.propTypes = {
  showHeader: PropTypes.bool.isRequired,
  getCityData: PropTypes.func.isRequired
};

export default connect(null, { getCityData })(SearchBar);