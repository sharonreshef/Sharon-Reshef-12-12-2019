import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleDegreesFormat } from "../../actions/city";
import { MDBBtn } from "mdbreact";

const ToggleButton = ({ toggleDegreesFormat, city }) => {
  const toggleButton = currentFormat => {
    toggleDegreesFormat(currentFormat);
  };

  return (
    <div className="toggle-btn">
      <MDBBtn
        color={city.isCelsius ? "info" : "primary"}
        className={city.isCelsius ? "btn btn-light-blue" : "btn btn-cyan"}
        onClick={e => {
          toggleButton(city.isCelsius);
        }}
      >
        {city.isCelsius ? "  °C" : "  °F"}
      </MDBBtn>
    </div>
  );
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps, { toggleDegreesFormat })(ToggleButton);
