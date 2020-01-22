import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import VehicleBrowser from "../VehicleBrowser/VehicleBrowser";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>This is the Landing Page...</h2>
        <Carousel />
        <VehicleBrowser />
      </div>
    );
  }
}
export default Home;
