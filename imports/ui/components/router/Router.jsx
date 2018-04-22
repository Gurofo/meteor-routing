import React from "react";
import gql from "graphql-tag";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { graphql } from "react-apollo";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import DashboardPage from "../../pages/DashboardPage";
import LandingPage from "../../pages/LandingPage";
import SettingsPage from "../../pages/SettingsPage";
import SigninPage from "../../pages/SigninPage";
import SignupPage from "../../pages/SignupPage";

const Router = ({ loading, user }) => {
  if (!loading) {
    return (
      <BrowserRouter>
        <Switch>
          {user ? (
            <PrivateRoute exact path="/" component={DashboardPage} />
          ) : (
            <PublicRoute exact path="/" component={LandingPage} />
          )}
          <PrivateRoute exact path="/settings" component={SettingsPage} />
          <PublicRoute exact path="/signin" component={SigninPage} />
          <PublicRoute exact path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    );
  }

  return <h1>LOADING</h1>;
};

export const currentUser = gql`
  query currentUser {
    user {
      _id
      isEmployer
    }
  }
`;

export default graphql(currentUser, {
  props: ({ data }) => ({ ...data })
})(Router);
