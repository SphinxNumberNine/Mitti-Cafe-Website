import React, { Component } from "react";
import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class VideoSection extends Component {
  render() {
    return (
      <Container>
        <h2>Our Impact</h2>
        <Row style={{ padding: "1%" }}>
          <Col>
            <h4>Mitti Cafe's Frontline Heroes</h4>
            <p>
              We are proud to share that throughout the recent COVID-19
              lockdown, our employees with disabilities have cooked and served
              over 4 lakh meals with drinking water to feed 3,500 daily wage
              workers and homeless people, daily.
            </p>
            <p>
              However, the COVID-19 lockdown has made supporting our disabled
              staff very difficult. Most of our disabled employees come from
              low-income backgrounds and extreme poverty. They are often the
              only earning members of their families.{" "}
            </p>

            <p>
              Even through these difficult times, they haven’t hesitated to take
              care of those in need. Help support our disabled heroes. *Donate
              today! All donations are tax-deductible under the 80G.
            </p>

            <Button variant="dark">Donate</Button>
          </Col>
          <Col>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-p97uYPfwCk"
              playing={true}
              controls={true}
              muted={true}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VideoSection;
