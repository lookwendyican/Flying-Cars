import React from "react";
import "./ColorPicker.css";
import classnames from "classnames";
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedVehicleData = this.props.vehicleData.filter(
      vehicle => vehicle.detailKey === this.props.selectedVehicle
    )[0];
    console.log(selectedVehicleData);
    if (selectedVehicleData) {
      return <h2>Color picker goes here</h2>;
    } else {
      return null;
    }
  }
}

export default ColorPicker;
