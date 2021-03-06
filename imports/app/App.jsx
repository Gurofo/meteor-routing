import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloLink, from } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Router from "../ui/components/router/Router";

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({ headers: { "meteor-login-token": token } }));
  return forward(operation);
});

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {}
});

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
});

export default (App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
});
