import React from "react";
import Home from "./containers/Home";
import NotFound from  "./containers/NotFound";
import { Switch, Route } from "react-router-dom";


export default function Routes() {
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )};