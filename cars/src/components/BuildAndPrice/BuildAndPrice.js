import React from "react";
import classnames from "classnames";
import "./BuildAndPrice.css";
//import ColorPicker from "../ColorPicker/ColorPicker";
import ModelPicker from "../ModelPicker/ModelPicker";
//import EnginePicker from "../EngineSelector/EngineSelector";
//import TestFlightForm from "../TestFlightForm/TestFlightForm";
import BuildAndPriceImageRotator from "../BuildAndPriceImageRotator/BuildAndPriceImageRotator";
import Numeral from "numeral";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Progress,
  CardTitle
} from "reactstrap";

class BuildAndPrice extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.selectEngine = this.selectEngine.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    //this.determineProgress = this.determineProgress.bind(this);
    this.computePrice = this.computePrice.bind(this);
    this.state = {
      activeTab: "1", //currently displayed tab (note it starts at 1 not 0)
      selectedVehicle: "jumper", //holds the key to the selected vehicle
      userHasSelectedVehicle: false,
      selectedColor: 0, //holds the selected color index
      selectedColorName: "White Dwarf",
      userHasSelectedColor: false,
      selectedEngine: 0, //holds the array index of the selected engine option
      selectedEngineName: "Alpha Centauri Mark II",
      userHasSelectedEngine: false,
      modal: false, //controls the appearance of the modal
      done: false, //turns true when you have made all the selections
      engineCost: 0,
      msrp: 36000
    };
  }

  selectVehicle(eventData) {
    const selected = eventData.target.dataset.model;
    const msrp = eventData.target.dataset.msrp;
    this.setState({
      activeTab: "2",
      msrp: msrp,
      selectedVehicle: selected
    });
  }

  selectColor(eventData) {
    //TODO:  this method will store the user's color choice
  }

  selectEngine(eventData) {
    //TODO:  this method will store the user's engine selection
  }

  toggleModal(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  computePrice() {
    return Number(this.state.msrp) + Number(this.state.engineCost);
  }

  toggle(tab) {
    //TODO:  this will control the tab component
  }
  render() {
    return (
      <div>
        <h3>Build and Price</h3>
        //We've already built one image rotator, so we won't do this one
        <BuildAndPriceImageRotator
          //Pass all the defaults for each selection
          vehicleData={this.props.vehicleData}
          selectedVehicle={this.state.selectedVehicle}
          colorIndex={this.state.selectedColor}
          colorName={this.state.selectedColorName}
          //Pass in all the functions.  The state for everything is held here.
          //All the components within build & price are "dumb" components.
          cost={this.computePrice()}
          engineIndex={this.state.selectedEngine}
        />
        <h4>Color: {this.state.selectedColorName}</h4>
        <h5>Engine: {this.state.selectedEngineName}</h5>
        <h5>
          Price as configured: {Numeral(this.computePrice()).format("$0,0.00")}
        </h5>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Model
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Color
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Engine
            </NavLink>
          </NavItem>
        </Nav>
        <CardTitle activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ModelPicker
                  vehicleData={this.props.vehicleData}
                  selectedVehicle={this.props.selectedVehicle}
                  selectVehicle={this.selectedVehicle}
                ></ModelPicker>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Color Picker goes here</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Engine Picker goes here</h4>
              </Col>
            </Row>
          </TabPane>
        </CardTitle>
      </div>
    );
  }
}

export default BuildAndPrice;
