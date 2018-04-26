import React, { Component } from "react";
import { withApollo } from "react-apollo";
import MenuBar from '../components/AppBar';

class DashboardPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: true,
    };
  }

  logout = (logged) => {
    const { client } = this.props;

    Meteor.logout(error => {
      if (!error) client.resetStore();
    });
  };


  render() {
    let {loggedState} = logged;
    console.log(loggedState);
    return (
      <div>
       
        <MenuBar 
        />
        <h1>DashboardPage</h1>
        <p onClick={this.logout}>Logout</p>
      </div>
    );
  }
}

export default withApollo(DashboardPage);
