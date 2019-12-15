import React, { Component, Fragment, useState } from "react";
import axios from "axios";
import { MDBInput, MDBCol, MDBListGroup, MDBListGroupItem } from "mdbreact";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getCityData } from "../../actions/city";

const SearchBar = ({ getCityData }) => {
  const [state, setstate] = useState({
    dataSet: [],
    searchValue: ""
  });

  const { dataSet, searchValue } = state;

  const handleSearch = event => {
    setstate({ ...state, searchValue: event.target.value });
    console.log(state.searchValue);
    searchForCity();
  };

  const searchForCity = async () => {
    try {
      const res = await axios.get(
        `locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${state.searchValue}`
      );
      let cities = [];
      res.data.map(city =>
        cities.push({
          name: city.LocalizedName,
          key: city.Key,
          country: city.Country.LocalizedName
        })
      );
      setstate({
        dataSet: cities
      });
      console.log(dataSet);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = async value => {
    console.log(value);
    setstate({
      dataSet: [],
      searchValue: value.name
    });
    getCityData(value);
    // try {
    //   const res = await axios.get(
    //     `/currentconditions/v1/${value.key}?apikey=${process.env.REACT_APP_API_KEY}`
    //   );
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <MDBCol>
      <MDBInput
        value={searchValue}
        onChange={handleSearch}
        hint="Enter city name"
        type="text"
        containerClass="mt-0"
      />
      <MDBListGroup>
        {dataSet.map(item => (
          <MDBListGroupItem onClick={() => handleChange(item)} key={item.key}>
            {item.name}
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </MDBCol>
  );
};

export default connect(null, { getCityData })(SearchBar);
