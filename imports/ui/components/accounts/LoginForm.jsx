import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { wihApollo, withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import MenuBar from '../AppBar';

//css material-ui
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false,
    };
  }

  login = event => {
    event.preventDefault();
    const { client } = this.props;
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      if (!error) {
        client.resetStore();
        this.setState({
          logged : !this.state.logged
        });
      }
      //console.log(this.state.logged);
    });
  };

  render() {
    let loggedState = this.state.logged;
    console.log(loggedState);
    return (
      <div>
        <MenuBar 
          loginProps={this.login}
          loggedState={loggedState}
        />
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
