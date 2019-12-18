import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { MDBInput, MDBListGroup, MDBListGroupItem } from "mdbreact";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getCityData } from "../../actions/city";

const SearchBar = ({ getCityData, city }) => {
  const [formData, setFormData] = useState({
    dataSet: [],
    searchValue: ""
  });

  const { dataSet, searchValue } = formData;
  const apiKey = "58jiHIZg4nYOHReRyhDYtotr0MzpQJzy";
  const baseUrl = "//dataservice.accuweather.com";

  const handleSearch = event => {
    setFormData({ ...formData, searchValue: event.target.value });
    searchForCity(event.target.value);
  };

  const searchForCity = async value => {
    try {
      const res = await axios.get(
        `${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}`
      );
      setFormData({
        dataSet: []
      });
      let cities = [];
      res.data.map(city =>
        cities.push({
          name: city.LocalizedName,
          key: city.Key,
          country: city.Country.LocalizedName
        })
      );

      setFormData({
        dataSet: cities
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onChooseCity = async value => {
    setFormData({
      dataSet: [],
      searchValue: value.name
    });
    city.isLoading = true;
    getCityData(value.name, value.key, value.country);
  };

  return (
    <div className="search-bar">
      <MDBInput
        pattern="[A-Za-z]"
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
    </div>
  );
};

SearchBar.propTypes = {
  getCityData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, { getCityData })(SearchBar);
