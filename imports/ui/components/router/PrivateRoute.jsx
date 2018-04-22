import React from "react";
import { Redirect, Route } from "react-router-dom";
import gql from "graphql-tag";
import { graphql, withApollo } from "react-apollo";

import { currentUser } from "./Router";

const PrivateRoute = ({ client, component, exact, path }) => {
  const { user } = client.readQuery({ query: currentUser });
  if (user == null) {
    return <Redirect to="/" />;
  } else {
    return (
      <Route
        exact={exact}
        path={path}
        render={props => <main>{React.createElement(component)}</main>}
      />
    );
  }
};

export default withApollo(PrivateRoute);
