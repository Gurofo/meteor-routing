import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withApollo } from "react-apollo";

import { currentUser } from "./Router";

const PublicRoute = ({ client, component, exact, path }) => {
  const { user } = client.readQuery({ query: currentUser });
  if (!user) {
    return (
      <Route
        exact={exact}
        path={path}
        render={props => <main>{React.createElement(component)}</main>}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default withApollo(PublicRoute);
