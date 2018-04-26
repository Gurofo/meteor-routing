import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuBar from '../components/AppBar';


class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Index</h1>
      </div>
    );
  }
}

export default LandingPage;
