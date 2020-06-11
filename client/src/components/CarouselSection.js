import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../assets/images/slide_2_a.jpg";
import Slide2 from "../assets/images/slide_2_a.jpg";
import TextLoop from "react-text-loop";
import Button from "react-bootstrap/Button";

class CarouselSection extends Component {
  constructor(props) {
    super(props);
    this.index = -1;
  }

  render() {
    return (
      <Carousel interval={5000} style={{ width: "100%" }}>
        <Carousel.Item>
          <img src={Slide1} alt="First Slide" style={{ width: "100%" }} />
          <Carousel.Caption>
            <h3 style={{ color: "white" }}>
              Creating stories of inclusion one{" "}
              <TextLoop interval={1000}>
                <span>bite</span>
                <span>sip</span>
                <span>meal</span>
                <span>life</span>
                <span>cafe</span>
              </TextLoop>{" "}
              at a time.
            </h3>
            <Button variant="primary">Projects</Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={Slide2} alt="Second Slide" style={{ width: "100%" }} />
          <Carousel.Caption>
            <h3>Creating Second Chances</h3>
            <p>
              Mitti Cafe creates livelihood opportunities for people with
              disabilities.
            </p>
            <Button variant="primary">Our Story</Button>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img src={Slide2} alt="Second Slide" style={{ width: "100%" }} />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <div
              style={{
                // backgroundColor: "rgba(245, 242, 55, 0.66)",
                textAlign: "left",
                width: "50%",
                marginBottom: "24%",
                marginTop: "12%",
                padding: "2%",
              }}
            >
              <div style={{ textAlign: "left", padding: "2%" }}>
                <h1 style={{ color: "white" }}>CREATING SECOND CHANCES</h1>
              </div>
              <div style={{ textAlign: "left", padding: "2%" }}>
                <h4 style={{ color: "white" }}>
                  We, at Mitti Cafe, create livelihood{" "}
                  <b style={{ color: "yellow" }}>opportunities</b> for people
                  with disabilities.
                </h4>
              </div>
              <Button
                variant="dark"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  outlineColor: "rgba(0, 0, 0, 0.8)",
                  padding: "2%",
                }}
              >
                Our Story
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselSection;
