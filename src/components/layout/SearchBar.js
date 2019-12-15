import React, { Component, Fragment } from "react";
import axios from "axios";
import { MDBInput, MDBCol, MDBListGroup, MDBListGroupItem } from "mdbreact";

class SearchBar extends Component {
  getValueOfSelectOne = value => {
    console.log(value);
  };

  constructor() {
    super();

    this.state = {
      dataSet: [],
      searchValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearc = this.handleSearch.bind(this);
  }

  handleSearch = event =>
    this.setState({ searchValue: event.target.value }, () =>
      this.searchForCity()
    );

  searchForCity = async () => {
    try {
      const res = await axios.get(
        `locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${this.state.searchValue}`
      );
      let cities = [];
      res.data.map(city =>
        cities.push({ name: city.LocalizedName, key: city.Key })
      );
      this.setState({
        dataSet: cities
      });
      console.log(this.state.dataSet);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = async value => {
    console.log(value);
    this.setState({
      dataSet: [],
      searchValue: value.name
    });
    try {
      const res = await axios.get(
        `/currentconditions/v1/${value.key}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <MDBCol>
        <MDBInput
          value={this.state.searchValue}
          onChange={this.handleSearch}
          hint="Enter city name"
          type="text"
          containerClass="mt-0"
        />
        <MDBListGroup>
          {this.state.dataSet.map(item => (
            <MDBListGroupItem
              onClick={() => this.handleChange(item)}
              key={item.key}
            >
              {item.name}
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      </MDBCol>
    );
  }
}

export default SearchBar;
