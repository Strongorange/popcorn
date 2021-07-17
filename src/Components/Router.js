import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";

const RouterComponent = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tv" exact component={TV}></Route>
          <Route path="/search" component={Search}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
