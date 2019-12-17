import React, { useState } from "react";

import "./Navbar.css";
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
        <MDBNavLink to="/" onClick={onClick}>
          {" "}
          <img alt="icon" className="icon" src={"./weather_icon.png"} />
          {"  "}
          <strong className="white-text h3">Herolo Weather App</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={onClick} />
      <MDBCollapse isOpen={collapse} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/" onClick={onClick}>
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/favorites" onClick={onClick}>
              Favorites
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
