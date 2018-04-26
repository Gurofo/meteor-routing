import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { wihApollo, withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import MenuBar from '../AppBar';

//css material-ui
import RaisedButton from 'material-ui/RaisedButton';


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
      <div>
        <MenuBar/>
        <form onSubmit={this.login}>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />    
          <RaisedButton label="Enter" fullWidth={true} type="submit"/>
        </form>
      </div>
    );
  }
}

export default withApollo(LoginForm);
