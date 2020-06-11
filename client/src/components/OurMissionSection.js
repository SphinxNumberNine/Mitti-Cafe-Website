import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../assets/images/our-mission.JPG";
import Slide2 from "../assets/images/slide_2_a.jpg";
import TextLoop from "react-text-loop";
import Button from "react-bootstrap/Button";

class OurMissionSection extends Component {
  render() {
    return (
      <Carousel
        interval={5000}
        controls={false}
        indicators={false}
        style={{ width: "100%" }}
      >
        <Carousel.Item>
          <img src={Slide1} alt="Second Slide" style={{ width: "100%" }} />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <div
              style={{
                backgroundColor: "rgba(245, 242, 55, 0.66)",
                textAlign: "center",
                width: "40%",
                marginBottom: "24%",
                marginTop: "12%",
                padding: "2%",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <h1 style={{ color: "black", fontSize: "48px" }}>
                  OUR MISSION
                </h1>
              </div>
              <div style={{ textAlign: "right", marginLeft: "10%" }}>
                <h4 style={{ color: "black", fontSize: "30px" }}>
                  To <b>enable</b> and <b>empower</b> people with disabilities
                  to be economically <b>independent</b>, confident, and live
                  with <b>dignity</b>.
                </h4>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default OurMissionSection;
