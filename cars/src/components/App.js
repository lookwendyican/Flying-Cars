import React from "react";
import TopNav from "./TopNav/TopNav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehicleData: null };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        console.log(res.data);
        this.setState({ vehicleData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.vehicleData) {
      return (
        <Router>
          <div className="App">
            <TopNav vehicleData={this.state.vehicleData} />
            <div className="contentArea">
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} vehicleData={this.state.vehicleData} />
                )}
              />
              <Route path="/find-a-dealer" component={DealerLocator} />
            </div>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return <h4>Loading Data...</h4>;
    }
  }
}

export default App;
