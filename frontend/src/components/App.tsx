import React, { useEffect, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import NavbarComponent from "./Navbar";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { IState } from "../store";

export interface IAppProps {
  isLoading: boolean;
}

const App: FC<IAppProps> = ({ isLoading }) => (
  <div className="App">
    <Router>
      <NavbarComponent />
      {isLoading ? "loading on" : "loading off"}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  </div>
);

const mapState = (state: IState) => ({
  isLoading: state.isLoading,
});

const connector = connect(mapState);

export default connector(App);
