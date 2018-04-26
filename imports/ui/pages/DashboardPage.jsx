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

  logout = () => {
    const { client } = this.props;
    Meteor.logout(error => {
      if (!error){ 
        client.resetStore();
        this.setState({
          logged : !this.state.logged
        });
      }
    });
  };


  render() {
    let loggedState = this.state;
    console.log(this.state);
    return (
      <div>
       
        <MenuBar 
        logoutProps={this.logout}
        loggedState={loggedState}
        />
        <h1>DashboardPage</h1>
        <p onClick={this.logout}>Logout</p>
      </div>
    );
  }
}

export default withApollo(DashboardPage);
