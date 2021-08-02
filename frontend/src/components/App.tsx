import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import NavbarComponent from "./Navbar";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
