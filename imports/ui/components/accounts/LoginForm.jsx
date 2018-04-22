import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { wihApollo, withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  login = event => {
    event.preventDefault();
    const { client } = this.props;
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      if (!error) {
        client.resetStore();
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Login User</button>
      </form>
    );
  }
}

export default withApollo(LoginForm);
