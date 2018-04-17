import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SigninPage from "../../pages/SigninPage";
import SignupPage from "../../pages/SignupPage";

export default (Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SigninPage} />
      <Route exact path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
));
