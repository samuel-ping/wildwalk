import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from "./components/tabs/Collection";
import Dashboard from "./components/tabs/Dashboard";
import SubmitDiscovery from "./components/tabs/SubmitDiscovery";
import LoginScreen from "./components/tabs/LoginScreen";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedSpecies: null };
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/collection">
                <Collection />
              </Route>
              <Route path="/add-photo">
                <SubmitDiscovery />
              </Route>
              <Route path="/login">
                <LoginScreen />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
