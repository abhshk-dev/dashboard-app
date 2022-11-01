import Books from "./Books";
import React from "react";
import { Switch, Route } from "react-router-dom";
function Main() {
  return (
    <Switch>
      <Route path="/books">
        <Books />
      </Route>
    </Switch>
  );
}

export default Main;
