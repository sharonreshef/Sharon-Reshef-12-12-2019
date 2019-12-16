import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Favorites from "./components/layout/Favorites";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { MDBContainer } from "mdbreact";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <MDBContainer>
          <Route exact path="/" component={Landing}></Route>
          <Switch>
            <Route exact path="/favorites" component={Favorites} />
            <Redirect from="*" to="/" />
          </Switch>
        </MDBContainer>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
