import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={Page2} />
      <Route exact path="/travel" component={Page3} />
      <Route exact path="/trip" component={Page4} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
