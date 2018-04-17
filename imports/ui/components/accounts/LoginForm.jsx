import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { wihApollo, withApollo } from "react-apollo";

class LoginForm extends Component {
  login = event => {
    event.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      console.log(error);
      if (!error) {
        this.props.client.resetStore();
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
