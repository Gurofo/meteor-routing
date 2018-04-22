import React, { Component } from "react";
import { withApollo } from "react-apollo";

class DashboardPage extends Component {
  logout = () => {
    const { client } = this.props;
    Meteor.logout(error => {
      if (!error) client.resetStore();
    });
  };

  render() {
    return (
      <div>
        <h1>DashboardPage</h1>
        <p onClick={this.logout}>Logout</p>
      </div>
    );
  }
}

export default withApollo(DashboardPage);
