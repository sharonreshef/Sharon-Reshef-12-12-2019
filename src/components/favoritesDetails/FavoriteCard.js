import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow
} from "mdbreact";

const FavoriteCard = ({ city }) => {
  const { name, country } = city;
  console.log(city.name);
  return (
    <MDBCol>
      <MDBCard style={{ width: "20rem" }} className="z-depth-1 mb-4 ">
        FAVORITE,{name}
      </MDBCard>
    </MDBCol>
  );
};

FavoriteCard.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(FavoriteCard);
