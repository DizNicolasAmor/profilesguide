import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import NavbarComponent from "../navbar";
import ResetPassword from "../resetPassword";
import Signup from "../signup";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => (
  <Router>
    <NavbarComponent />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/reset-password" component={ResetPassword} exact />
      <Route path="/signup" component={Signup} exact />
    </Switch>
  </Router>
);

export default App;
