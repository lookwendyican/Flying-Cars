import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="/schedule-test-flight" className="container ">
          <h5>Schedule a Test Flight! No pilot's license required.</h5>
        </a>
      </footer>
    );
  }
}

export default Footer;
