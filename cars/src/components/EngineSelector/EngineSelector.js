import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class EngineSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedVehicleData = this.props.vehicleData.filter(
      vehicle => vehicle.detailKey === this.props.selectedVehicle
    )[0];
    console.log(selectedVehicleData);
    if (selectedVehicleData) {
      return <h2>Engine Selector</h2>;
    } else {
      return null;
    }
  }
}

export default EngineSelector;
