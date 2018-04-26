import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuBar from '../components/AppBar';


class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false,
    };
  }

  render() {
    let loggedState = this.state.logged;
    return (
      <div>
        <MenuBar 
          loggedState={loggedState}
        />
        <h1>Index</h1>
      </div>
    );
  }
}

export default LandingPage;
