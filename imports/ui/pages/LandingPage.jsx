import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>LandingPage</h1>
        <ul>
          <li>
            <Link to="/signin">SIGN IN</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LandingPage;
