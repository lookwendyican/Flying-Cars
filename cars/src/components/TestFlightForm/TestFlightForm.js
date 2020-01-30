import React from "react";
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "./TestFlightForm.css";

class TestFlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: false, showDanger: false };
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody className="card-body">
            <CardTitle className="center">
              {" "}
              <h1>Schedule a Test Flight</h1>
            </CardTitle>
            <h3>
              <CardSubtitle className="center">
                No pilot's license required!
              </CardSubtitle>
              <CardText className="center">
                Fill out the form fields below to schedule a test flight.
              </CardText>
            </h3>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="customerName"
                  id="customerName"
                  placeholder="What is your name?"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="What is your contact number?"
                />
              </FormGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="What is your email address?"
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="Do you have a budget you need to stay under?"
                />
              </InputGroup>
              <br />
            </Form>
            <br />
            <Button>Submit</Button>
            <Alert color="success" className="center">
              Your data were submitted successfully. Your test flight awaits!
            </Alert>
            <Alert color="danger" className="center">
              Something went horribly wrong!
            </Alert>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TestFlightForm;
