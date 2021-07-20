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
import Detail from "../Routes/Detail";
import Collection from "../Routes/Collection";
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
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Route path="/collection/:id/:collectionId" component={Collection} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
