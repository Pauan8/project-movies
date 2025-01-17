import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import PopularList from "./pages/PopularList";
import MovieDetails from "./pages/MovieDetails";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
};
