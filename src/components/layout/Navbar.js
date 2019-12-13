import React, { useState, Fragment } from "react";

// Style
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBNavbarToggler
} from "mdbreact";

const Navbar = () => {
  const [collapse, setCollapse] = useState({
    collapse: false
  });

  const onClick = () => setCollapse(!collapse);

  return (
    <MDBNavbar color="default-color" expand="md" scrolling className="navbar">
      <MDBNavbarBrand>
        {/* <MDBNavLink to="/"> */} <i className="fas fa-cloud-sun" />
        {"  "}
        <strong className="white-text h3">Herolo Weather App</strong>
        {/* </MDBNavLink> */}
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={onClick} />
      <MDBCollapse isOpen={collapse} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>Weather</MDBNavItem>
          <MDBNavItem>Favorites</MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
