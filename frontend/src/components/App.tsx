import React, { useEffect, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Logout from "./Logout";
import NavbarComponent from "./Navbar";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => (
  <Router>
    <NavbarComponent />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/logout" component={Logout} exact />
      <Route path="/signup" component={Signup} exact />
    </Switch>
  </Router>
);

export default App;
