import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FoodSection extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgba(43, 43, 43, 1)" }}>
        <Container fluid>
          <h2 style={{ paddingTop: "2%", color: "white" }}>
            Wholesome Food, Made With Love
          </h2>
          <Row style={{ padding: "2%" }}>
            <Col>
              <FontAwesomeIcon icon="carrot" size="5x" color="white" />
            </Col>
            <Col>
              <FontAwesomeIcon icon="seedling" size="5x" color="white" />
            </Col>
            <Col>
              <FontAwesomeIcon icon="apple-alt" size="5x" color="white" />
            </Col>
            <Col>
              <FontAwesomeIcon icon="fire-alt" size="5x" color="white" />
            </Col>
          </Row>
          <Row style={{ paddingBottom: "2%" }}>
            <Col>
              <h4 style={{ color: "white" }}>High Quality Ingredients</h4>
            </Col>
            <Col>
              <h4 style={{ color: "white" }}>Gluten Free Options</h4>
            </Col>
            <Col>
              <h4 style={{ color: "white" }}>Vegetarian</h4>
            </Col>
            <Col>
              <h4 style={{ color: "white" }}>Made Fresh Everyday</h4>
            </Col>
          </Row>
          <h4 style={{ color: "white" }}>
            Got some recipe ideas? <a href="google.com">Share them with us!</a>
          </h4>
          <h4 style={{ color: "white", paddingBottom: "2%" }}>
            <a href="google.com">Check out our menu!</a>
          </h4>
        </Container>
      </div>
    );
  }
}

export default FoodSection;
