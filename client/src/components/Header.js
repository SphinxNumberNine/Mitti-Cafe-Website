import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/images/mitti-logo.png";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#2b2b2b" }}>
        {this.renderLogo()}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.google.com" style={{ color: "white" }}>
              Sub Item 1
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.google.com" style={{ color: "white" }}>
              Sub Item 2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderLogo() {
    console.log(window.innerWidth);
    return window.innerWidth <= 500 ? (
      <div />
    ) : (
      <Navbar.Brand>
        <img
          height="70"
          src={Logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          style={{ paddingLeft: "100%" }}
        />
      </Navbar.Brand>
    );
  }
}

export default Header;
