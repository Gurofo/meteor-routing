/*import React from 'react';
import AppBar from 'material-ui/AppBar';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from "react-router-dom";
import ActionAndroid from 'material-ui/svg-icons/action/android';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 
import {green500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const RightMenu = () => (
  <div>
      <Link to="/signin"><FlatButton>Sign In</FlatButton></Link> 
      <Link to="/signup"><FlatButton>Sign Up</FlatButton></Link>
  </div>  
);

const MenuBar = () => (
    <AppBar 
      title="Landing Page"
      iconElementRight={< RightMenu/>}
    />
);
        
export default MenuBar;*/
import { Link } from "react-router-dom";
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { PropTypes } from "prop-types";

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
     <Link to="/signin"> <FlatButton {...this.props} label='login' onClick={()=>{console.log(this.props.login.loginProps)}}/> </Link>
     <Link to="/signup"> <FlatButton {...this.props} label='sign up' /> </Link>
      </div>
    );
  }
}

const Logged = (props) => (

  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Sign out" onClick={props.logout.logoutProps}/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false,
    };
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
    console.log(this.props);
  };

  render() {
    let loggedState  = this.state;
    let logoutProps = this.props.logoutProps;
    let loginProps = this.props.loginProps;
    //console.log(logoutProps);
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={this.logged}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar
          logout={this.props.logout}
          title="Title"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.loggedState.logged ? <Logged logout={{logoutProps}}/> : <Login login={{loggedState}}/>}
        />
        
      </div>
    );
  }
}
AppBarComponent.propTypes = {
  logout: PropTypes.func
};
export default AppBarComponent;