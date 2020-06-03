import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/mitti-logo.png";

import Container from "react-bootstrap/Container";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand>
            <img
              height="70"
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.google.com">Sub Item 1</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.google.com">Sub Item 2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
