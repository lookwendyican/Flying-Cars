import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="/schedule-test-flight" className="container">
          Schedule a Test Flight! No pilot's license required.
        </a>
      </footer>
    );
  }
}

export default Footer;
