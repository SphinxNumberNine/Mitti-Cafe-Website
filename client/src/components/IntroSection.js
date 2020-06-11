import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import profilepic from "../assets/images/mitti-logo.png";

/* import "../assets/css/default.css";
import "../assets/css/layout.css";
import "../assets/css/media-queries.css";
import "../assets/css/magnific-popup.css"; */

class IntroSection extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", backgroundColor: "#2b2b2b" }}>
        <Container>
          <h1 style={{ color: "white" }}>Hello!</h1>
          <p style={{ color: "white" }}>
            We're Mitti Cafe, a chain of inclusive cafes. From prepping and
            serving our delicious food managing transactions and customer
            service, our cafes are completely run by our team of specially-abled
            staff. Our cafes employ adults with psychiatric, intellectual, and
            physical disabilities, coming from low-income families.
          </p>
          <p style={{ color: "white", paddingBottom: "2%" }}>
            Mitti Cafe provides livelihoods for over 70 disabled people, across
            20 locations within well known corporations, such as Infosys, Wells
            Fargo, and Wipro.
          </p>
        </Container>
      </div>
    );
  }
}

export default IntroSection;
