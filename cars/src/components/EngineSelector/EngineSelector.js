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
    this.toggle = this.toggle.bind(this);
    this.state = { dropDownOpen: false };
  }

  toggle() {
    this.setState(prevState => ({
      dropDownOpen: !prevState.dropDownOpen
    }));
  }

  render() {
    const selectedVehicleData = this.props.vehicleData.filter(
      vehicle => vehicle.detailKey === this.props.selectedVehicle
    )[0];
    console.log(selectedVehicleData);
    if (selectedVehicleData) {
      return (
        <div>
          <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Select an Engine</DropdownToggle>
            <DropdownMenu>
              {selectedVehicleData.options.engines.map(function(engine, i) {
                return (
                  <DropdownItem
                    data-engine={i}
                    data-engine-cost={engine.cost}
                    data-engine-name={engine.name}
                    onClick={this.props.onEngineSelect}
                    key={engine.name}
                  >
                    {engine.name}
                  </DropdownItem>
                );
              }, this)}
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EngineSelector;
