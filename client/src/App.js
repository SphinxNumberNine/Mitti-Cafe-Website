// @flow

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import CarouselSection from "./components/CarouselSection";
import IntroSection from "./components/IntroSection";
import OurMissionSection from "./components/OurMissionSection";
import FoodSection from "./components/FoodSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Header />
      <CarouselSection />
      <IntroSection />
      <OurMissionSection />
      <FoodSection />
      <VideoSection />
    </div>
  );
}

export default App;
