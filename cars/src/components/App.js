import React from "react";
import TopNav from "./TopNav/TopNav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  state = { vehicleData: null };

  componentDidMount() {
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        this.setState({ vehicleData: res.data });
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.vehicleData) {
      return (
        <Router>
          <div className="App">
            <TopNav vehicleData={this.state.vehicleData} />
            <div className="contentArea">
              <Route exact path="/" component={Home} />
            </div>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return <h4>Loading...</h4>;
    }
  }
}

export default App;
