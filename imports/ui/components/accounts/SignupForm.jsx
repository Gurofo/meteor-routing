import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import MenuBar from '../AppBar';

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false,
      isEmployer: false
    };
  }

  registerUser = event => {
    event.preventDefault();
    const { history } = this.props;
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value,
        profile: {
          isEmployer: this.state.isEmployer
        }
      },
      error => {
        if (error.error == 403) {
          history.push("/signin");
        } else {
          console.log(error);
        }
      }
    );
  };

  toggleEmployer = () => {
    this.setState({ isEmployer: !this.state.isEmployer });
  };

  render() {
    let loggedState = this.state.logged;
    console.log(this.state.logged)
    return (
      <div>
        <MenuBar loggedState={loggedState}/>
        <form onSubmit={this.registerUser}>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />
          <p onClick={this.toggleEmployer}>
            isEmployer: {this.state.isEmployer + ""}
          </p>
          <button type="submit">Register User</button>
        </form>
      </div>
    );
  }
}

export default withApollo(withRouter(props => <SignupForm {...props} />));
