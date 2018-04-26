import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import MenuBar from '../AppBar';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  form: {
    margin: 'auto',
    width: 500,
    marginTop: 50,
  },
};

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
    return (
      <div>
        <MenuBar loggedState={loggedState}/>
        <form onSubmit={this.registerUser} 
          style={ styles.form }>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />
         {/*} <TextField
            name="email"
            hintText="Email"
            floatingLabelText="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
            fullWidth={true}
          />
           <TextField
            name="password"
            hintText="Password"
            floatingLabelText="Password"
            value={this.state.password}
            onChange={e => this.change(e)}
            type="password"
            fullWidth={true}
          />*/}
          <p onClick={this.toggleEmployer}>
            isEmployer: {this.state.isEmployer + ""}
          </p>
          
          <RaisedButton type="submit" fullWidth={true} label="Submit" />
          
        </form>
        
      </div>
    );
  }
}

export default withApollo(withRouter(props => <SignupForm {...props} />));
